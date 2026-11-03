# Market review: Visora, Pick & Shuffle, Peabody, and Social Golfer (2026-11-03)

Three tools were added after live review, bringing the ranked catalog to **510 tools**. The scores and ranks below are incorporated in the public dataset. Existing tools retain their relative order; the top ten are unchanged.

The [structured evidence](../data/review-evidence/market-review-2026-11-03.json) includes full catalog records, observed assignments, independently calculated pair counts, output checks, and limitations. Scores follow [METHODOLOGY.md](../METHODOLOGY.md).

| Tool | Rank | Overall | Ease | Design | Features | Outputs | Privacy | Account | Results |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| [Pick & Shuffle No-Repeat Group Generator](https://picknshuffle.com/no-repeat-group-generator/) | 24 | 4.0 | 3.8 | 4.0 | 3.9 | 4.2 | 4.3 | 5.0 | 4.0 |
| [Visora Random Group Generator](https://tools.visoraapp.com/random-group-generator/) | 32 | 4.0 | 4.3 | 3.8 | 4.0 | 3.1 | 4.7 | 5.0 | 4.0 |
| [Peabody Teach Random Group Maker](https://teach.peabody.kids/groups) | 35 | 3.9 | 4.4 | 4.2 | 3.8 | 3.2 | 4.0 | 5.0 | 3.8 |

## What the live reviews established

All three ran without accounts. Each generated five successive rounds for nine fictional participants in three trios. Visible memberships were read from the rendered result and pair encounters were independently counted.

| Tool | Repeated pairs in rounds 1–4 | Distinct pairs after round 4 | Repeated pairs in round 5 |
|---|---|---:|---:|
| Visora | 0, 0, 0, 0 | 36 | 9 |
| Pick & Shuffle | 0, 0, 0, 0 | 36 | 9 |
| Peabody | 0, 0, 0, 0 | 36 | 9 |

Nine people have 36 distinct unordered pairs. Four rounds of three trios use exactly 36 pair slots, so these runs gave every person contact with all eight others. All nine pair slots in round five necessarily repeat. Each tool warned about those nine repeats; Pick & Shuffle also displayed the matching lower bound. This is a small live case, not evidence of general optimality or large-roster performance. These tools generate the next round against history rather than jointly planning a complete future rotation.

### Visora

An eight-person case combined Ava/Ben together, Cora/Dan apart, and two labels. Both pair rules held, group sizes were 4/4, and each group contained two of each label. A contradictory Ava/Ben together-and-apart setup was rejected with an explicit explanation. The previous assignment remained available, including in the presentation view, so organizers must distinguish the error from the earlier result. Ten people with a maximum size of four produced sizes 4/3/3.

The tool offers a selectable recent-history window up to ten rounds, explicit round saving, custom group names, copy, print, and a working full-screen presentation. No structured spreadsheet export, numeric score balancing, or manual member editing appeared. Only same-origin resources were observed during the review; this supports the privacy assessment but is not a security or privacy audit.

### Pick & Shuffle

The candidate/confirm/save workflow prevents an unused preview from entering contact history. The tool exposes pair counts and distinguishes a limited search result from a mathematical impossibility claim. Its documentation describes a bounded search over candidates and improving swaps; it does not promise a global optimum.

A downloaded five-round history CSV contained 45 member rows with Round, Group, Entry, and Name columns. A JSON backup restored all nine participants and five rounds after clearing the session. An explicit browser save then survived reload. Full-screen, copy, numbered roster identities, and historical-round entry are useful additions.

The main limitations are a stable roster requirement, explicit saving, and a next-round-only objective. Applying a changed roster clears history. No together/apart rules, skill balance, partial attendance, or final membership editor appeared. Requests to app.pageview.app were observed alongside same-origin resources.

### Peabody Teach

The feasible eight-person case honored Ava/Ben together and Cora/Dan apart, while assigning Reader, Recorder, Materials manager, and Timekeeper roles. Contradictory pair rules produced a best-effort assignment and a warning that the together rule could not be met. Pair rules are therefore marked partial. Ten participants with a maximum size of four produced 4/3/3.

Its useful classroom controls include configurable roles, the last five rounds of partner history, text copying, print, full-screen controls, and Paper/Night/Chalk design profiles. A class/settings link shares inputs; it is not a saved result link. No CSV, Excel, JSON bundle, or manual member editor appeared.

Although the site says class lists stay in the browser and there are no ads, the session loaded Google Tag Manager, Google Analytics, and DoubleClick-related resources. The privacy score accounts for that distinction without claiming that participant names were transmitted.

## Social Golfer Online: corrections supported, numeric rerating deferred

The [current official site](https://socialgolfer.online/) describes supported combinatorial constructions plus optimization, with available browser, mobile, or server engines. The catalog's older genetic/local-search wording was replaced with this attributed description.

The site now advertises Recompute All Sessions as an online action that plans eligible unlocked golf sessions together while preserving locked and non-golf sessions. It also advertises PDF reports and beta limits of three events, 120 members per event, 52 sessions, and 30 groups per session. These notes were incorporated, and keep-apart support changed from no to partial based on the separation documentation, pending an enforcement test.

Live navigation reached the organizer login. Guest access required an existing share code. The new optimizer and PDF exports could therefore not be exercised in this review. The existing **4.3 overall, rank 3, and category scores** are retained, with partial PDF support and the advertised additions identified as unverified in the current review. A logged-in optimizer/export run is needed before increasing ratings.

## Interaction fields

All three additions showed complete assignments together. No repeated visible placement process or final member move/swap control appeared. Recorded values are no for staged reveal, interactive assignment, and manual post-generation editing. Full-screen presentation, candidate confirmation, configurable roles, and input/settings sharing are recorded separately.
