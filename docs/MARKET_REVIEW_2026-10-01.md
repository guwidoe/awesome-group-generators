# Market review: three additions and Clever Groups (2026-10-01)

These reviews cover the specific public group-generation workflows. Scores follow [METHODOLOGY.md](../METHODOLOGY.md); they are editorial judgments based on the live cases below, not solver benchmarks. The full category scores, comments, and feature flags are in [tools.json](../data/tools.json).

| Tool | Rank | Overall | Ease | Design | Features | Outputs | Privacy | Account | Results |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| [WheelToss Team Generator](https://www.wheeltoss.com/tools/team-generator/) | 34 | 3.9 | 4.4 | 4.2 | 4.0 | 4.0 | 4.2 | 5.0 | 3.8 |
| [Team Balancer](https://balanceteams.com/) | 72 | 3.7 | 3.6 | 3.8 | 3.8 | 3.0 | 2.6 | 4.6 | 3.6 |
| [UtiloKit Random Team Generator](https://utilokit.com/tools/random-team-generator) | 75 | 3.7 | 4.0 | 4.0 | 3.8 | 4.1 | 4.0 | 5.0 | 3.1 |

## Live checks

- **WheelToss:** Entered Ava:9, Ben:8, Cora:7, Dan:6, Ella:5, Finn:4, Gia:3, and Hugo:2. Chose two teams, score balancing, Ava/Hugo together, and Ben/Cora apart. The result had four people and 22 score points on each team, satisfying both pair rules. A manual move then transferred Finn between teams and kept the edit, yielding 5/3 people and an eight-point score spread; edits do not automatically preserve balance. Copy, CSV, and print controls were also visible. This is one positive generation case; hard conflicting constraints were not tested.
- **Team Balancer:** Created an accountless Random project, bulk-added eight names, and generated two four-person teams. In a separate Custom project, added a Skill rating category and four names, changed Ava's rating, then generated two two-person teams with totals 10.5 and 10, a displayed 0.5 spread, and a fairness score. The UI showed player locks for future generations, a public result link, and generation history. No CSV/PDF export or direct edits to a generated assignment were visible. The generated names and ratings are stored by the service.
- **UtiloKit:** Entered eight names, required Ava/Hugo together and Ben/Cora apart, enabled captain assignment, and generated. Both pair rules held, but standard mode made teams of five and three. Balanced mode then made four and four while retaining both rules. Result controls offered team-name edits, copy, CSV, image, and a share link. The site's last-draw avoidance option was visible but not benchmarked; it does not establish multi-round optimization.

All three offer a usable self-serve workflow and add meaningful capability beyond a basic one-click random splitter, so they meet the ranked-list scope rule. The catalog has 506 ranked tools after these additions. The [interaction audit](./INTERACTION_FEATURE_AUDIT_2026-09-23.md) and its [per-tool evidence](../data/review-evidence/interaction-features-2026-09-23.json) cover the three new entries.

## Clever Groups update

[Clever Groups' current pricing](https://clevergroups.com/pricing) says new organizers receive a 14-day trial with 20 group generations, then need a subscription for persistent use. On 2026-10-01 the advertised Educator Annual price was US$18 for the first year under a launch offer, renewing at US$24/year; Educator Monthly was US$8/month. Foundation Free was restricted to teachers who registered before 29 June 2026, with three generations per month plus 60 bonus credits. The anonymous try-it and student participation remain free. Prices can change; this is a dated review.

The [anonymous try-it generator](https://clevergroups.com/try/group-generator) now offered Preference, Demand, and Random generation. Demand offered first-preference-only or all-preferences options. A sample Demand generation completed and exposed CSV export and a dedicated Display / Print Groups view, including a names-only print control. [Clever Groups' update log](https://clevergroups.com/whats-new) describes the new modes, solver improvements, and a September fix for a group-history persistence regression. The vendor's performance figures were not independently benchmarked here.

Clever Groups stays at **4.2 overall and rank 5**. Its features, outputs, and result-quality category scores rose modestly for the observed new modes and presentation; account friction fell because new organizers face a trial limit and paid plan for persistent use. The display/print and browser print-to-PDF paths are now recorded in the feature flags.
