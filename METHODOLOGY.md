# Methodology

This dataset rates tools for **group-generation capability specifically**. A tool does not get extra credit for unrelated picker, presentation, classroom-management, spreadsheet, AI, or platform features unless those features materially help create better groups.

## Rating scale

Scores use a 0.0–5.0 star scale, where higher is better.

- **5.0** — exceptional for the category; rare
- **4.0–4.9** — strong, serious, or best-in-class for a clear use case
- **3.0–3.9** — useful and meaningfully above basic random splitting
- **2.0–2.9** — working but basic, limited, or materially compromised
- **1.0–1.9** — very weak, workaround-only, broken in important ways, or barely relevant
- **0.0–0.9** — not a real group generator or fails the core task

The overall rating is **editorial**, not a simple average. A tool can have high ease-of-use and account-friction scores while still receiving a low overall score if it is not actually good at generating groups.

## Rating categories

### Ease of use

How easy it is to get from a roster to usable groups. A tiny random splitter can score high here even if it is weak overall.

### Design

Visual clarity, information architecture, interaction quality, and lack of distracting clutter. Generic polish is credited only when it helps the group-generation workflow.

### Features

Depth of group-generation controls: group size/count, multi-round schedules, constraints, balancing, repeat minimization, saved rosters, imports, self-join, diagnostics, and workflow controls.

Arbitrary group count or group size alone is real but basic functionality; by itself it usually does not justify a high feature score.

### Outputs

How useful the results are after generation: copy, CSV, Excel, PDF/image, print, share links, Zoom breakout CSV, API output, export bundles, and diagnostics.

Copy-only output is intentionally scored low compared with structured exports.

### Privacy

How safely users can enter real participant names and attributes. Local/browser-only tools score well. Ad-tech-heavy pages, unclear AI processing, hosted roster systems, and share links that expose names are penalized.

### Account friction

Whether the tool works without signup, payment, app installation, or ecosystem setup. This is judged independently: a tool can require an account and still be useful, but it should not get a high account-friction score.

### Result quality

How good the assignments are for the group-generation problem: fair group sizes, balancing, constraint satisfaction, preference matching, repeat reduction, multi-session coverage, diagnostics, and optimization quality.

Strong randomization or polished animation does not raise result quality unless it improves the actual group assignments.

## Feature support states

Feature values use:

- `yes` — supported in a meaningful way
- `partial` — supported only with limitations, a workaround, or account/app caveats
- `no` — not supported or not visible in the reviewed workflow
- `na` — not applicable

Unknowns are resolved before public export. If a feature value is wrong, open a correction issue with evidence.

## Scope rules

- Review the specific group-generator workflow, not the parent product.
- Do not credit unrelated themes, sounds, embeds, streaming, or generic API access unless they materially help generate groups.
- Preset-only or workaround grouping ranks below normal random splitters.
- Non-group-generator tools may be omitted or rated as low-scoring workarounds.
- Spreadsheet and AI tools are judged as realistic grouping workflows, not as general-purpose platforms.
- Sales-gated commercial platforms, enterprise event suites, app-store-only products, and adjacent coffee-chat or matchmaking products are not star-rated unless a self-serve generator, open demo, or runnable implementation can be reviewed.
- Related but unranked commercial/sales-gated products are tracked separately in [`data/related-commercial-platforms.json`](./data/related-commercial-platforms.json), not mixed into the ranked `data/tools.json` dataset.
- Resources that were explicitly reviewed but rejected from the ranked dataset may be recorded in [`data/reviewed-out-of-scope.json`](./data/reviewed-out-of-scope.json) so future reviewers can see why LMS-native docs, research references, unavailable repos, duplicate/fork variants, or adjacent products were not ranked.

## Update policy

Ratings can change when tools change. Correction requests should include the tool URL, what changed, and reproduction steps or screenshots. Final ratings remain editorial, but factual corrections are welcome.
