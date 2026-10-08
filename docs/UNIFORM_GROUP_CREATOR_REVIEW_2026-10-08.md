# Uniform Group Creator review

[Uniform Group Creator](https://uniformgroupcreator.com/) joins the ranked catalog at **4.3 overall, rank 5**, following the suggestion in [issue #6](https://github.com/guwidoe/awesome-group-generators/issues/6). The 2026-10-08 review found a strong single-session attribute balancer with working pair rules, fixed placement, local projects, manual adjustments, and detailed exports. Scores follow [METHODOLOGY.md](../METHODOLOGY.md). The catalog now contains 507 tools.

| Overall | Ease | Design | Features | Outputs | Privacy | Account | Results |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 4.3 | 3.8 | 4.0 | 4.4 | 4.7 | 3.2 | 4.8 | 4.1 |

## Balancing and constraints

The accountless Local Sandbox accepted a pasted table with Full Name, Skill, and Role columns:

| Name | Skill | Role |
|---|---:|---|
| Ava | 9 | Red |
| Ben | 8 | Blue |
| Cora | 7 | Red |
| Dan | 6 | Blue |
| Ella | 5 | Red |
| Finn | 4 | Blue |
| Gia | 3 | Red |
| Hugo | 2 | Blue |

With Skill set to Sum and Balance, Role set to Balance, two groups, Ava/Hugo together, Ben/Cora apart, and Ava pinned to Group 1, the generated result was:

| Group | Members | Skill sum | Labels |
|---|---|---:|---|
| 1 | Ava, Ben, Gia, Hugo | 22 | 2 Red, 2 Blue |
| 2 | Cora, Dan, Ella, Finn | 22 | 2 Red, 2 Blue |

Every participant appeared once, both pair rules held, and Ava occupied the specified group. A separate project imported the same roster through the CSV file input. Role set to Strict Separation produced Ava/Cora/Ella/Gia versus Ben/Dan/Finn/Hugo, isolating the categories into two groups of four. The other attribute retained its numeric Average setting, yielding averages of 6 and 5. Category isolation therefore took precedence over equalizing that metric.

The UI also exposes Regroup and Info Only strategies, numeric averages and sums, categorical/gender/boolean datatypes, and attribute priority ordering. These controls do not establish guaranteed global optimality, clinical-trial suitability, or performance at the vendor's advertised large roster sizes. No multi-round scheduler, repeat-pairing optimization, or participant self-entry was visible.

## Manual editing and diagnostics

Dragging Ben toward Cora's group opened an apart-rule conflict dialog. Canceling preserved the assignment. The dialog explicitly says that proceeding removes conflicting rules; a warning is not an immutable constraint lock.

Dragging Finn into Group 1 retained the edit and changed the sizes to 5/3 and skill totals to 26/18. The UI marked the result as manually modified, recalculated attribute metrics, and offered Reset to the original distribution. The changed assignment survived a page reload, re-entering Sandbox, exports, and JSON backup restoration. Manual editing is supported; progressive reveal and an interactive assignment draw are not visible in this workflow.

Diagnostics need some care. On entering the visualizer, the overall score briefly displayed 0% before updating even though attribute metrics already had values. The Strict Separation result also displayed an uneven-size warning despite its two equally sized groups. Its percentages describe its own balance metrics and should not be read as externally validated guarantees.

## Exports and local projects

After applying the export layout, the edited assignment downloaded successfully as CSV, Excel, PDF, and a full JSON project backup. The CSV contained all eight names with their group, skill, and role. The Excel workbook contained Dashboard, Consolidated List, Group 1, and Group 2 sheets. The three-page PDF included balance metrics and group rosters. Both reported the edited 26/18 totals and 5/3 sizes.

The JSON backup retained criteria, people, constraints, current groups, the original assignment, and layout settings. Restoring it through the application's backup input recovered the edited groups and all three rules. Saved projects remained in browser local storage after reload. This is project persistence with a reset snapshot, rather than a browsable history of multiple generated rounds.

Word, plain text, clipboard, and Google Docs/Sheets export controls were visible. Google exports require authorization; their external write paths and optional cloud synchronization were not exercised. Pasting spreadsheet cells is supported, but it is not a direct Google Sheets roster import integration.

## Pricing and privacy

The official pricing displayed on 2026-10-08 offers three active projects and three attributes per custom project free, with constraints and exports available. Built-in demos expose five attributes. The advertised US$29 one-time lifetime upgrade raises those limits to unlimited projects and twelve attributes. The reviewed sandbox workflow needed no account or purchase; cloud accounts and paid entitlements are separate paths.

Grouping used the site's browser Web Worker. The tested pasted-table and CSV workflows produced no observed roster upload; projects were stored locally. That positive observation applies to these workflows, rather than every import mode or future implementation.

The live policy has two material discrepancies:

- It disclaims analytics tracking, but the page loads Google Analytics and issued Google Analytics, DoubleClick, and Google audience requests. No roster names were observed in those requests.
- It describes backend processing through Google Gemini for uploaded documents, including CSV/Excel/PDF, while the tested CSV import appeared local and the served frontend exposed local parsing. The statement prevents extending the observed local behavior into an unconditional promise about every document import. Its AI retention assurances were not independently verified.

Optional cloud sync and exports to Google services also have different data destinations from local projects. These disclosure problems lower privacy to 3.2 and keep the tool out of the privacy-friendly shortlist/tag, despite local grouping and the useful sandbox.

The [structured evidence](../data/review-evidence/uniform-group-creator-2026-10-08.json) records synthetic test inputs, results, export checks, and review limits. Category scores and feature flags are in [tools.json](../data/tools.json); interaction decisions are also included in the [catalog-wide audit](../data/review-evidence/interaction-features-2026-09-23.json).
