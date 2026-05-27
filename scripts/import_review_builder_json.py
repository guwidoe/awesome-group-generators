#!/usr/bin/env python3
"""Import a review-builder JSON draft into public awesome-list data files.

This script intentionally publishes a cleaned review dataset, not internal
review-builder state/history. It reads a source JSON draft and writes:

- data/tools.json
- data/tools.csv
- README.md
"""

from __future__ import annotations

import csv
import json
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = Path.cwd() / "review-builder-current.json"
RATING_KEYS = [
    "easeOfUse",
    "design",
    "features",
    "outputs",
    "privacy",
    "accountFriction",
    "resultQuality",
]
FEATURE_VALUES = {"yes", "partial", "no", "na"}

USE_CASE_SHORTLISTS = [
    (
        "Best for most serious group-generation jobs",
        ["GroupMixer", "ChatGPT Pro Extended Reasoning", "Social Golfer Online"],
        "For broad, real-world grouping problems, compare a purpose-built solver against AI-assisted custom workflows and niche schedulers.",
    ),
    (
        "Multi-round / repeat minimization",
        ["GroupMixer", "Social Golfer Online", "Good-Enough Golfers"],
        "These tools focus on repeated rounds and reducing duplicate pairings; some are broad planners while others are golf/social-golfer-specific.",
    ),
    (
        "Constraint-aware grouping",
        ["GroupMixer", "ChatGPT Pro Extended Reasoning", "Clever Groups"],
        "Purpose-built constraint tools are best for structured rules; AI-assisted workflows can help when requirements are too idiosyncratic for a product UI.",
    ),
    (
        "Preference/self-entry matching",
        ["Clever Groups", "BuddyMatcher", "Educatarea Random Group Generator"],
        "These are credible alternatives when participant preference capture or classroom-specific setup matters more than repeat minimization.",
    ),
    (
        "Interactive classroom or presentation reveal",
        ["Picker Wheel Team Picker", "Classroomscreen Group Maker", "Online Stopwatch Random Group Generator"],
        "Use these when the act of revealing teams live is part of the activity and presentation matters as much as assignment quality.",
    ),
    (
        "Polished simple random splitters",
        ["Wooclap Team Picker", "Calcbe Team Generator", "Instructron Group Generator"],
        "Good choices when you only need quick one-off random groups and do not need a full planning workspace.",
    ),
    (
        "Mobile/native team generation",
        ["Team Shake", "ClassDojo Group Maker", "Classroomscreen Group Maker"],
        "Useful when the organizer is already in a classroom/mobile app workflow.",
    ),
    (
        "Privacy-friendly browser/local options",
        ["GroupMixer", "Good-Enough Golfers", "Calcbe Team Generator"],
        "These avoid the worst ad-tech/hosted-roster patterns among the reviewed tools.",
    ),
]


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "tool"


def lines(value: Any) -> list[str]:
    if isinstance(value, list):
        return [str(item).strip() for item in value if str(item).strip()]
    if not isinstance(value, str):
        return []
    return [line.strip(" -\t") for line in value.splitlines() if line.strip(" -\t")]


def public_feature(value: Any) -> str:
    if value is True:
        return "yes"
    if value is False:
        return "no"
    if value in FEATURE_VALUES:
        return str(value)
    # Public data should not contain unknowns. Missing/unknown values should be
    # resolved in the review-builder before export.
    raise ValueError(f"Unsupported feature value for public export: {value!r}")


def derive_tags(tool: dict[str, Any]) -> list[str]:
    features = tool.get("features", {})
    ratings = tool.get("ratings", {})
    tags: list[str] = []
    if features.get("Multiple rounds/sessions") == "yes" or features.get("Repeat encounter limits") == "yes" or features.get("Unique-contact optimization") == "yes":
        tags.append("multi-round")
    if any(features.get(key) in {"yes", "partial"} for key in [
        "Hard keep-together constraints",
        "Hard keep-apart constraints",
        "Attribute balance constraints",
        "Soft prefer-together constraints",
        "Soft prefer-apart constraints",
        "Pair meeting count targets",
    ]):
        tags.append("constraints")
    if features.get("Self-join participant link") == "yes":
        tags.append("self-join")
    if features.get("Runs in browser") == "yes" and ratings.get("privacy", 0) >= 4:
        tags.append("privacy-friendly")
    if features.get("Spreadsheet CSV export") == "yes" or ratings.get("outputs", 0) >= 4:
        tags.append("strong-exports")
    if ratings.get("features", 0) <= 1.8 and ratings.get("resultQuality", 0) <= 2.1:
        tags.append("basic-randomizer")
    if "ChatGPT" in tool.get("name", "") or "AI" in tool.get("summary", ""):
        tags.append("ai-assisted")
    return tags


def load_tools(source: Path) -> tuple[dict[str, Any], list[dict[str, Any]]]:
    raw = json.loads(source.read_text())
    state = raw["state"]
    tools = []
    seen_ids: set[str] = set()
    sorted_tools = sorted(
        state["tools"],
        key=lambda item: (-float(item["overallRating"]), item["name"].lower()),
    )
    for rank, item in enumerate(sorted_tools, start=1):
        ratings = item.get("ratings", {})
        missing = [key for key in RATING_KEYS if key not in ratings]
        if missing:
            raise ValueError(f"{item.get('name')} missing ratings: {missing}")
        features = {key: public_feature(value) for key, value in sorted(item.get("features", {}).items())}
        tool_id = slugify(item["name"])
        if tool_id in seen_ids:
            suffix = 2
            while f"{tool_id}-{suffix}" in seen_ids:
                suffix += 1
            tool_id = f"{tool_id}-{suffix}"
        seen_ids.add(tool_id)
        public = {
            "id": tool_id,
            "rank": rank,
            "name": item["name"],
            "url": item.get("href") or item.get("url") or "",
            "bestFor": item.get("bestFor", ""),
            "summary": item.get("summary", ""),
            "pricing": item.get("pricing", ""),
            "overallRating": float(item["overallRating"]),
            "overallComment": item.get("overallComment", ""),
            "ratings": {key: float(ratings[key]) for key in RATING_KEYS},
            "ratingComments": {key: item.get("ratingComments", {}).get(key, "") for key in RATING_KEYS},
            "features": features,
            "pros": lines(item.get("pros")),
            "cons": lines(item.get("cons")),
            "reviewNote": item.get("notes", ""),
        }
        public["tags"] = derive_tags(public)
        tools.append(public)
    meta = {
        "title": "Awesome Group Generators",
        "description": "A transparent, curated review dataset for group generators, team pickers, classroom grouping tools, breakout-room planners, and social-golfer schedulers.",
        "sourceRevisionId": raw.get("revisionId"),
        "sourceSavedAt": raw.get("savedAt"),
        "exportedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "toolCount": len(tools),
        "ratingScale": "0.0 to 5.0 stars, higher is better",
        "ratingCategories": RATING_KEYS,
        "featureValues": sorted(FEATURE_VALUES),
    }
    return meta, tools


def write_json(meta: dict[str, Any], tools: list[dict[str, Any]]) -> None:
    payload = {"metadata": meta, "tools": tools}
    path = ROOT / "data" / "tools.json"
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n")


def write_csv(tools: list[dict[str, Any]]) -> None:
    path = ROOT / "data" / "tools.csv"
    fieldnames = [
        "rank",
        "name",
        "url",
        "overallRating",
        *RATING_KEYS,
        "bestFor",
        "pricing",
        "tags",
    ]
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for tool in tools:
            row = {
                "rank": tool["rank"],
                "name": tool["name"],
                "url": tool["url"],
                "overallRating": tool["overallRating"],
                **tool["ratings"],
                "bestFor": tool["bestFor"],
                "pricing": tool["pricing"],
                "tags": ",".join(tool["tags"]),
            }
            writer.writerow(row)


def fmt_score(value: float) -> str:
    return f"{value:.1f}".rstrip("0").rstrip(".")


def md_link(label: str, url: str) -> str:
    if not url:
        return label
    return f"[{label}]({url})"


def table_rows(tools: list[dict[str, Any]], limit: int | None = None) -> str:
    rows = ["| Rank | Tool | Score | Best for | Tags |", "|---:|---|---:|---|---|"]
    subset = tools if limit is None else tools[:limit]
    for tool in subset:
        tags = ", ".join(tool["tags"][:4]) or "—"
        rows.append(
            f"| {tool['rank']} | {md_link(tool['name'], tool['url'])} | {fmt_score(tool['overallRating'])} | {tool['bestFor']} | {tags} |"
        )
    return "\n".join(rows)


def shortlist_cell(tool: dict[str, Any] | None) -> str:
    if not tool:
        return "—"
    return f"{md_link(tool['name'], tool['url'])} ({fmt_score(tool['overallRating'])})"


def write_readme(meta: dict[str, Any], tools: list[dict[str, Any]]) -> None:
    by_name = {tool["name"]: tool for tool in tools}
    shortlist_rows = []
    for label, names, note in USE_CASE_SHORTLISTS:
        picked = [by_name.get(name) for name in names]
        shortlist_rows.append(
            f"| {label} | {shortlist_cell(picked[0])} | {shortlist_cell(picked[1])} | {shortlist_cell(picked[2])} | {note} |"
        )
    readme = f"""# Awesome Group Generators

A curated, transparent list of tools for generating groups, teams, classroom groups, workshop breakout rooms, speed-networking rotations, and social-golfer schedules.

This repository publishes a review dataset, scoring methodology, correction workflow, and GitHub Pages explorer so tool owners and users can point out stale data or unfair ratings. Ratings are editorial, evidence-based, and open to correction requests.

![A confused person overwhelmed by spreadsheets, browser windows, sticky notes, and group-generation chaos.](./assets/confused-group-generator-hero.png)

## Website

- Interactive explorer: https://guwidoe.github.io/awesome-group-generators/

## Data files

- [`data/tools.json`](./data/tools.json) — full structured dataset
- [`data/tools.csv`](./data/tools.csv) — spreadsheet-friendly summary
- [`data/tools.schema.json`](./data/tools.schema.json) — JSON schema
- [`data/related-commercial-platforms.json`](./data/related-commercial-platforms.json) — non-ranked related commercial/sales-gated platforms
- [`data/related-commercial-platforms.schema.json`](./data/related-commercial-platforms.schema.json) — schema for the non-ranked related-platform list
- [`METHODOLOGY.md`](./METHODOLOGY.md) — scoring rubric and review rules

Current export: **{meta['toolCount']} tools**, source revision **{meta.get('sourceRevisionId')}**, exported **{meta['exportedAt']}**.

## Related commercial platforms

Sales-gated event platforms, enterprise matchmaking suites, coffee-chat apps, and app-store-only products are not mixed into the ranked list unless a self-serve generator, open demo, or runnable implementation can be reviewed. We track those adjacent products separately in [`data/related-commercial-platforms.json`](./data/related-commercial-platforms.json) so the main rankings stay limited to verifiable tools.

## Use-case shortlists

The shortlists below show three candidates per use case so readers can compare leading options instead of seeing only a single winner. Shortlist order reflects fit for that use case, not the global score alone.

| Use case | #1 | #2 | #3 | Notes |
|---|---|---|---|---|
{chr(10).join(shortlist_rows)}

## Top 20 reviewed tools

{table_rows(tools, limit=20)}

## All reviewed tools

{table_rows(tools)}

## How to challenge a rating

If a tool changed, a feature is missing, or a rating seems unfair, please open an issue:

- **Correction request** — factual changes, broken links, feature updates
- **Rating dispute** — explain which rating seems unfair and provide evidence
- **New tool suggestion** — propose a group generator that should be reviewed

Good reports include a URL, reproduction steps, screenshots if useful, and a short explanation of why the current data is wrong. Final ratings remain editorial, but well-supported corrections are welcome.

## Scope

Included tools may be:

- random group generators
- team pickers
- classroom group makers
- breakout-room assignment tools
- social-golfer / repeat-minimization schedulers
- spreadsheet or AI workarounds when people realistically use them for grouping

Tools that do not generate groups at all may be rejected or kept only as low-rated workaround entries. Sales-gated commercial platforms and adjacent event-networking products are tracked separately and are not star-rated unless a self-serve generator, open demo, or runnable implementation can be reviewed.

## License

See [`LICENSE.md`](./LICENSE.md). In short: scripts are MIT licensed; review data and written content are published under CC BY 4.0.
"""
    (ROOT / "README.md").write_text(readme)


def main() -> None:
    import sys

    source = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else DEFAULT_SOURCE
    if not source.exists():
        raise SystemExit(
            f"Source review-builder file not found: {source}\n"
            "Pass a source path, e.g. python3 scripts/import_review_builder_json.py ../path/to/current.json"
        )
    (ROOT / "data").mkdir(exist_ok=True)
    meta, tools = load_tools(source)
    write_json(meta, tools)
    write_csv(tools)
    write_readme(meta, tools)
    subprocess.run(["node", str(ROOT / "scripts" / "build_static_site.mjs")], check=True)
    print(f"Exported {len(tools)} tools from {source}")


if __name__ == "__main__":
    main()
