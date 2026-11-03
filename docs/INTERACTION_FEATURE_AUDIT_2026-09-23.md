# Group interaction feature audit (2026-09-23)

This pass reviews every ranked tool for three ways people use a grouping result: a staged reveal, an interactive assignment process, and manual changes to generated groups. The [per-tool evidence](../data/review-evidence/interaction-features-2026-09-23.json) records the support value, source basis, and a short explanation for each field. The fields are available in the [full dataset](../data/tools.json), the [CSV](../data/tools.csv), and the website's feature filters.

## Results

| Feature | Yes | Partial | No |
|---|---:|---:|---:|
| Progressive group reveal | 12 | 0 | 498 |
| Interactive assignment process | 7 | 7 | 496 |
| Manual post-generation editing | 29 | 2 | 479 |

The initial 2026-09-23 review covered 503 tools. With later additions through 2026-11-03, the evidence covers 510 tools and 1,530 field decisions. Evidence confidence is high for 433 tools, medium for 21, and low for 56. Low-confidence entries generally have gated, blocked, or unavailable workflows; their `no` values mean support was not visible in the reviewed material. The evidence file retains this confidence per tool.

## What the fields mean

| Field | `yes` | `partial` | `no` |
|---|---|---|---|
| Progressive group reveal | Generated assignments are intentionally revealed in stages, such as one team or member at a time. | The staged reveal is restricted to a mode, plan, or limited workflow. | Results appear all at once, or only a decorative transition is visible. |
| Interactive assignment process | Repeated spins, draws, or participant actions visibly place people into groups. | Picking requires manual translation into groups, or the workflow is restricted. | A single Generate/Reshuffle action makes the whole assignment, even if animated. |
| Manual post-generation editing | People can be moved or swapped between generated groups, and the changed assignment remains usable. | Only restricted edits or a limited mode are available. | The tool only allows editing inputs, renaming teams, pre-generation pins, or regenerating. |

Full-screen display and self-join links remain separate features. A self-join link only earns *interactive assignment* when the participant actively draws or selects an assignment; merely opening a link to a preassigned group does not. A private self-join result shown to one participant does not by itself count as a staged group reveal. An animation only earns *progressive reveal* when it unveils actual assignments one after another to an organizer or audience; a single Start button may trigger that sequence.

## Review and limits

Each tool's existing review record was checked, and official pages or live workflows were inspected for likely support and unclear cases. The evidence file distinguishes observations of a live workflow, official documentation, existing review observations, and cases where support was not visible in the reviewed workflow. `no` means no support was found in that workflow; it is not proof that a hidden or newly added feature cannot exist. Report a correction with a direct workflow or documentation link if a field is stale.

This pass exposed stale product descriptions beyond the three new fields. SpinOfLuck's current [Team Picker](https://www.spinofluck.com/team-picker) presents a one-click group generator rather than the repeated wheel workflow described in the previous catalog review. Its catalog prose and eight directly contradicted prior feature flags were corrected from the current [generator](https://www.spinofluck.com/team-picker/generate) and official guide. Its numeric ratings remain at their previous values pending a full rerating. Team Balancer Pro's listed endpoint did not load during this pass, so its prior swap-control observation could not be reverified.

**2026-09-25 correction:** GroupMixer now has a live staged reveal. In the current browser workflow, enabling Live reveal before generating opened a presentation with person-by-person and group-by-group styles, automatic or step-by-step pacing, and initially hidden assignments. Its reveal value changed from `no` to `yes`; the table above and per-tool evidence reflect this correction. This does not turn the 2026-09-23 pass into a fresh review of the other 502 tools.

**2026-10-01 additions:** WheelToss, Team Balancer (balanceteams.com), and UtiloKit were live-reviewed and added to the catalog. WheelToss supports manual member moves after generation. Team Balancer has pre-generation locks, and UtiloKit permits team-name edits; neither qualifies for manual post-generation editing. All three reveal their complete assignment in one action. Their per-tool evidence and shifted catalog ranks are recorded in the evidence file; existing tools were not re-reviewed for these fields.

**2026-10-08 addition:** Uniform Group Creator supports manual member edits with conflict warnings. It does not provide staged reveal or interactive assignment in the reviewed workflow. Its evidence was added with the original review; the totals above now include it.

**2026-11-03 additions:** Visora, Pick & Shuffle, and Peabody Teach were live-reviewed and added. All three show complete assignments together and provide no observed member move/swap controls. Their staged reveal, interactive assignment, and manual editing values are no; full-screen presentation is recorded separately.

The 2026-09-23 audit recorded feature support without recalculating existing tools' ratings. Subsequent additions have separate full reviews and ratings. Animation and presentation can make the grouping experience more useful, while assignment quality continues to describe the groups produced.
