# Awesome Group Generators

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

Current export: **309 tools**, source revision **528**, exported **2026-06-03T10:52:44+00:00**.

## Related commercial platforms

Sales-gated event platforms, enterprise matchmaking suites, coffee-chat apps, and app-store-only products are not mixed into the ranked list unless a self-serve generator, open demo, or runnable implementation can be reviewed. We track those adjacent products separately in [`data/related-commercial-platforms.json`](./data/related-commercial-platforms.json) so the main rankings stay limited to verifiable tools.

## Use-case shortlists

The shortlists below show three candidates per use case so readers can compare leading options instead of seeing only a single winner. Shortlist order reflects fit for that use case, not the global score alone.

| Use case | #1 | #2 | #3 | Notes |
|---|---|---|---|---|
| Useful for serious group-generation jobs | [GroupMixer](https://www.groupmixer.app) (4.7) | [ChatGPT Pro Extended Reasoning](https://chatgpt.com/plans/pro/) (4.5) | [Social Golfer Online](https://socialgolfer.online/) (4.3) | For broad, real-world grouping problems, compare a purpose-built solver against AI-assisted custom workflows and niche schedulers. |
| Multi-round / repeat minimization | [GroupMixer](https://www.groupmixer.app) (4.7) | [Social Golfer Online](https://socialgolfer.online/) (4.3) | [Good-Enough Golfers](https://goodenoughgolfers.com/) (4) | These tools focus on repeated rounds and reducing duplicate pairings; some are broad planners while others are golf/social-golfer-specific. |
| Constraint-aware grouping | [GroupMixer](https://www.groupmixer.app) (4.7) | [ChatGPT Pro Extended Reasoning](https://chatgpt.com/plans/pro/) (4.5) | [Clever Groups](https://clevergroups.com/tryit) (4.2) | Purpose-built constraint tools fit structured rules; AI-assisted workflows can help when requirements are too idiosyncratic for a product UI. |
| Preference/self-entry matching | [Clever Groups](https://clevergroups.com/tryit) (4.2) | [BuddyMatcher](https://www.buddymatcher.co.uk/) (3.8) | [Educatarea Random Group Generator](https://educatarea.com/random-group-generator/) (4) | These are credible alternatives when participant preference capture or classroom-specific setup matters more than repeat minimization. |
| Interactive classroom or presentation reveal | [Picker Wheel Team Picker](https://pickerwheel.com/tools/random-team-generator/) (3.6) | [Classroomscreen Group Maker](https://classroomscreen.com/app/template/widget-tutorials-tutorial-group-maker-v1) (3.7) | [Online Stopwatch Random Group Generator](https://www.online-stopwatch.com/random-group-generators/) (2.7) | Use these when the act of revealing teams live is part of the activity and presentation matters as much as assignment quality. |
| Polished simple random splitters | [Wooclap Team Picker](https://tool.wooclap.com/en/free-group-maker) (3.3) | [Calcbe Team Generator](https://calcbe.com/en/tools/team-generator/) (3.8) | [Instructron Group Generator](https://instructron.com/tools/group-generator) (3.9) | Good choices when you only need quick one-off random groups and do not need a full planning workspace. |
| Mobile/native team generation | [Team Shake](https://www.rhine-o.com/www/iphone-apps/team-shake/) (4) | [ClassDojo Group Maker](https://www.classdojo.com/toolkit/groupmaker/) (2.7) | [Classroomscreen Group Maker](https://classroomscreen.com/app/template/widget-tutorials-tutorial-group-maker-v1) (3.7) | Useful when the organizer is already in a classroom/mobile app workflow. |
| Privacy-friendly browser/local options | [GroupMixer](https://www.groupmixer.app) (4.7) | [Good-Enough Golfers](https://goodenoughgolfers.com/) (4) | [Calcbe Team Generator](https://calcbe.com/en/tools/team-generator/) (3.8) | These avoid the worst ad-tech/hosted-roster patterns among the reviewed tools. |

## Top 20 reviewed tools

| Rank | Tool | Score | Useful for | Tags |
|---:|---|---:|---|---|
| 1 | [GroupMixer](https://www.groupmixer.app) | 4.7 | Almost every group generation usecase | multi-round, constraints, privacy-friendly, strong-exports |
| 2 | [ChatGPT Pro Extended Reasoning](https://chatgpt.com/plans/pro/) | 4.5 | Complex natural-language grouping drafts when cost and verification are acceptable | multi-round, constraints, strong-exports, ai-assisted |
| 3 | [Social Golfer Online](https://socialgolfer.online/) | 4.3 | Golf leagues, trips, tournaments, and other multi-round schedules where avoiding repeat pairings matters | multi-round, constraints, strong-exports |
| 4 | [Clever Groups](https://clevergroups.com/tryit) | 4.2 | Preference-based classroom, camp, event, and accommodation grouping | constraints, self-join, strong-exports |
| 5 | [ClassroomGroupGenerator.com](https://classroomgroupgenerator.com/) | 4.1 | Teachers who want browser-saved rosters, constraints, presentation mode, and classroom-tool integration | constraints, strong-exports |
| 6 | [Group Balancer](https://groupbalancer.com/) | 4.1 | Reusable group generator with bags, multi-person slips, custom group sizes, editing, sharing, and history | constraints |
| 7 | [Educatarea Random Group Generator](https://educatarea.com/random-group-generator/) | 4 | Teachers who need roles, restrictions, multiple pools, history, PDF, and print without an account | constraints, strong-exports |
| 8 | [Good-Enough Golfers](https://goodenoughgolfers.com/) | 4 | Simple social-golfer-style multi-round schedules | multi-round, constraints, privacy-friendly, strong-exports |
| 9 | [Grouper.school](https://grouper.school/) | 4 | Account-based classroom grouping with Google Classroom/Clever rosters and student attributes | constraints |
| 10 | [QuizQuestions.org Team Generator](https://www.quizquestions.org/team-generator) | 4 | Advanced no-account team generator with labels, locks, drag-and-drop, added teams, and exports | constraints, strong-exports |
| 11 | [Shuffly](https://shuffly.netlify.app/) | 4 | Skill- and gender-balanced random teams with strong free exports | constraints, strong-exports |
| 12 | [Team Shake](https://www.rhine-o.com/www/iphone-apps/team-shake/) | 4 | Mobile-first balanced team generation for teachers and coaches | constraints, strong-exports |
| 13 | [TeamMaker App](https://teammakerapp.vercel.app/) | 4 | Local, no-account team making with strong classroom presentation and exports | constraints, strong-exports |
| 14 | [Instructron Group Generator](https://instructron.com/tools/group-generator) | 3.9 | Teachers who want quick random groups with basic balancing and keep-apart rules | constraints, privacy-friendly, strong-exports |
| 15 | [BuddyMatcher](https://www.buddymatcher.co.uk/) | 3.8 | Teachers who need pairs/trios, local saved lists, and optional paid control features | constraints, privacy-friendly, strong-exports |
| 16 | [Calcbe Team Generator](https://calcbe.com/en/tools/team-generator/) | 3.8 | Privacy-conscious one-session random teams with simple constraints and strong exports | constraints, privacy-friendly, strong-exports |
| 17 | [Random Roster](https://randomroster.com/) | 3.8 | Teacher group generator with capability balance, preferences, history, and seating charts | constraints |
| 18 | [Randomify Team Generator](https://www.randomify.org/team-generator?entries=Alex%252CSam%252CJordan%252CCasey%252CRiley%252CMorgan&teams=2&size=3) | 3.8 | Well-rounded team generator with shareable parameters, captain mode, themed team names, copy, and CSV download | strong-exports |
| 19 | [RandomPicker Random Team Generator](https://random-picker.app/random-team-generator) | 3.8 | Advanced browser-side teams with CSV/TXT import, locks, exclusions, skills, copy, and TXT download | constraints |
| 20 | [TeamMixer](https://www.team-mixer.com/) | 3.8 | Korean AI-assisted team builder with tiers, positions, presets, and no-server-data claim | constraints, ai-assisted |

## All reviewed tools

| Rank | Tool | Score | Useful for | Tags |
|---:|---|---:|---|---|
| 1 | [GroupMixer](https://www.groupmixer.app) | 4.7 | Almost every group generation usecase | multi-round, constraints, privacy-friendly, strong-exports |
| 2 | [ChatGPT Pro Extended Reasoning](https://chatgpt.com/plans/pro/) | 4.5 | Complex natural-language grouping drafts when cost and verification are acceptable | multi-round, constraints, strong-exports, ai-assisted |
| 3 | [Social Golfer Online](https://socialgolfer.online/) | 4.3 | Golf leagues, trips, tournaments, and other multi-round schedules where avoiding repeat pairings matters | multi-round, constraints, strong-exports |
| 4 | [Clever Groups](https://clevergroups.com/tryit) | 4.2 | Preference-based classroom, camp, event, and accommodation grouping | constraints, self-join, strong-exports |
| 5 | [ClassroomGroupGenerator.com](https://classroomgroupgenerator.com/) | 4.1 | Teachers who want browser-saved rosters, constraints, presentation mode, and classroom-tool integration | constraints, strong-exports |
| 6 | [Group Balancer](https://groupbalancer.com/) | 4.1 | Reusable group generator with bags, multi-person slips, custom group sizes, editing, sharing, and history | constraints |
| 7 | [Educatarea Random Group Generator](https://educatarea.com/random-group-generator/) | 4 | Teachers who need roles, restrictions, multiple pools, history, PDF, and print without an account | constraints, strong-exports |
| 8 | [Good-Enough Golfers](https://goodenoughgolfers.com/) | 4 | Simple social-golfer-style multi-round schedules | multi-round, constraints, privacy-friendly, strong-exports |
| 9 | [Grouper.school](https://grouper.school/) | 4 | Account-based classroom grouping with Google Classroom/Clever rosters and student attributes | constraints |
| 10 | [QuizQuestions.org Team Generator](https://www.quizquestions.org/team-generator) | 4 | Advanced no-account team generator with labels, locks, drag-and-drop, added teams, and exports | constraints, strong-exports |
| 11 | [Shuffly](https://shuffly.netlify.app/) | 4 | Skill- and gender-balanced random teams with strong free exports | constraints, strong-exports |
| 12 | [Team Shake](https://www.rhine-o.com/www/iphone-apps/team-shake/) | 4 | Mobile-first balanced team generation for teachers and coaches | constraints, strong-exports |
| 13 | [TeamMaker App](https://teammakerapp.vercel.app/) | 4 | Local, no-account team making with strong classroom presentation and exports | constraints, strong-exports |
| 14 | [Instructron Group Generator](https://instructron.com/tools/group-generator) | 3.9 | Teachers who want quick random groups with basic balancing and keep-apart rules | constraints, privacy-friendly, strong-exports |
| 15 | [BuddyMatcher](https://www.buddymatcher.co.uk/) | 3.8 | Teachers who need pairs/trios, local saved lists, and optional paid control features | constraints, privacy-friendly, strong-exports |
| 16 | [Calcbe Team Generator](https://calcbe.com/en/tools/team-generator/) | 3.8 | Privacy-conscious one-session random teams with simple constraints and strong exports | constraints, privacy-friendly, strong-exports |
| 17 | [Random Roster](https://randomroster.com/) | 3.8 | Teacher group generator with capability balance, preferences, history, and seating charts | constraints |
| 18 | [Randomify Team Generator](https://www.randomify.org/team-generator?entries=Alex%252CSam%252CJordan%252CCasey%252CRiley%252CMorgan&teams=2&size=3) | 3.8 | Well-rounded team generator with shareable parameters, captain mode, themed team names, copy, and CSV download | strong-exports |
| 19 | [RandomPicker Random Team Generator](https://random-picker.app/random-team-generator) | 3.8 | Advanced browser-side teams with CSV/TXT import, locks, exclusions, skills, copy, and TXT download | constraints |
| 20 | [TeamMixer](https://www.team-mixer.com/) | 3.8 | Korean AI-assisted team builder with tiers, positions, presets, and no-server-data claim | constraints, ai-assisted |
| 21 | [UTEKAR Random Team Generator](https://utekar.com/text/random-team-generator/) | 3.8 | Advanced browser-side team generation with attributes, seed, exports, and multi-round repeat reduction | multi-round, constraints, strong-exports |
| 22 | [WebToolNexus Random Team Generator](https://webtoolnexus.com/tools/random-team-generator/) | 3.8 | Skill-aware random teams with balance report and text export | constraints, privacy-friendly |
| 23 | [Classroomscreen Group Maker](https://classroomscreen.com/app/template/widget-tutorials-tutorial-group-maker-v1) | 3.7 | Teachers already using Classroomscreen who want visual classroom groups, saved name lists, exclusions, and manual adjustment | constraints, privacy-friendly |
| 24 | [digtools Team Generator](https://tools.digrart.jp/en/team-gen) | 3.7 | Browser-side teams with skills, NG pairs, leaders, save/load, CSV, text, and image output | constraints, strong-exports |
| 25 | [Peon Inc Random Team Generator](https://www.peon-inc.net/community-tools/RandomTeamGenerator.html) | 3.7 | Local sports/team draft generator with pins, buddies, conflicts, and CSV roster import/export | constraints, privacy-friendly, strong-exports |
| 26 | [Randomizer.uk Create Groups](https://randomizer.uk/multicriteria-team) | 3.7 | Multi-criteria random groups with proof/share/export options | constraints, strong-exports |
| 27 | [Randraw Multicriteria Team](https://randraw.com/multicriteria-team) | 3.7 | No-account multicriteria grouping with pots, separation rules, and exports | constraints, privacy-friendly, strong-exports |
| 28 | [Spin With The Wheel Group Maker](https://spinwiththewheel.com/group-maker) | 3.7 | Advanced browser group maker with single/bulk entry, multiple assignment methods, copy, print, and text export | — |
| 29 | [SpinItWheel Team Generator](https://www.spinitwheel.com/team-generator.html) | 3.7 | Visual wheel-based team generator with custom names/colors, share, copy, and Excel export | — |
| 30 | [TeamSplit](https://teamsplit.net/) | 3.7 | Polished no-account team splitting with import/export, reps, and team names | privacy-friendly |
| 31 | [Zapadisk Team Generator](https://zapadisk.be/team-generator.html) | 3.7 | Balancing sport/player teams by level, gender, and multi-day attendance | constraints |
| 32 | [Zufallsgenerator Gruppen bilden](https://zufallsgenerator.de/gruppen-bilden) | 3.7 | German-speaking users who need random groups with pots, separation rules, fixed placements, and exports | constraints, strong-exports |
| 33 | [FreeRandomTools Random Team Generator](https://freerandomtools.org/random-team-generator/) | 3.6 | Sports-style teams with skill-balanced and captain modes, copy formats, history, and local state | constraints |
| 34 | [FussFreeTools Random Group Generator](https://www.fussfreetools.com/random-group-generator.html) | 3.6 | Classroom-oriented group generator with pairs/size/count modes, copy, fullscreen, absent exclusion, and repeat-pair lock option | — |
| 35 | [Genvalo Random Group Generator](https://www.genvalo.com/tools/random-group) | 3.6 | Clean random group generator with count/size modes and per-group copy buttons | — |
| 36 | [GroupEng](https://groupeng.org/) | 3.6 | Open-source command-line grouping with distribute, aggregate, cluster, and balance rules | constraints |
| 37 | [InstaGroups](https://instagroups.app/) | 3.6 | PE/coaching team generator with balancing, tournaments, analytics, and collaboration | constraints |
| 38 | [LiveReacting Random Team Generator](https://www.livereacting.com/tools/random-team-generator) | 3.6 | No-signup random teams with leaders, skill levels, custom names, and CSV/TXT export | constraints, strong-exports |
| 39 | [Picker Wheel Team Picker](https://pickerwheel.com/tools/random-team-generator/) | 3.6 | Visual live random grouping and self-join team picking | constraints, self-join, strong-exports |
| 40 | [Prompt2Tool Team Grouping Tool](https://prompt2tool.com/tools/productivity/team-grouping-tool) | 3.6 | Random teams with leader distribution and Excel export | constraints, privacy-friendly |
| 41 | [Toolgami Random Team Generator](https://toolgami.bildirchin.com/tool/random-team-generator) | 3.6 | Random or skill-based teams with CSV/JSON export | constraints, strong-exports |
| 42 | [Eenie Meenie Random Team Generator](https://eeniemeenie.photonbuilder.com/team-generator) | 3.5 | Browser-side teams with captain mode, skill ratings, and local saved groups | constraints |
| 43 | [EveryRandom Team Generator](https://everyrandom.com/team-generator) | 3.5 | Featureful random team generator with count/size modes, copy, download, shuffle, and history | — |
| 44 | [GroupMixes](https://groupmixes.com/group-generator) | 3.5 | Teachers who want quick mixed-ability classroom groups | constraints, strong-exports |
| 45 | [LessonKind Group Maker](https://lessonkind.com/tools/group-maker/) | 3.5 | Teacher group maker with local class list and keep-apart pairs | constraints |
| 46 | [PickerSpin Team Generator](https://pickerspin.co/team-generator/) | 3.5 | Polished team picker with paste/comma input, count/size modes, copy-all, and reshuffle | — |
| 47 | [Playpass Golf Schedule Maker](https://playpass.com/sports-software/golf-schedule-maker) | 3.5 | Golf rotating-partner and round-robin schedules | multi-round, constraints, strong-exports |
| 48 | [Writing in the Stream Smart Group Generator](https://writinginthestream.com/wp-content/uploads/2026/03/randomgroupgenerator.html) | 3.5 | Teacher-owned local HTML grouping with attendance, class storage, drag/drop, and JSON import/export | constraints, privacy-friendly |
| 49 | [Decidable Team Divider](https://decidable-tools.com/en/team-divider) | 3.4 | Team divider with single/bulk add, leader support, and re-division | — |
| 50 | [GolfSoftware Play All Schedule Generator](https://www.golfsoftware.com/tools/schedule/playall.html) | 3.4 | Golf groups that need multi-event pairings from preset golfer counts and group sizes | multi-round, constraints, privacy-friendly |
| 51 | [MultiPicker Team Picker](https://multipicker.com/team-picker) | 3.4 | Simple teams where gender distribution, representatives, and custom team names matter | constraints |
| 52 | [RandomGroupGenerator.net](https://randomgroupgenerator.net/) | 3.4 | Polished one-off random groups with CSV/Excel-style exports | strong-exports |
| 53 | [SpacebarCount Team Generator](https://www.spacebarcount.com/randomizers/team-generator/) | 3.4 | Polished browser-local team cards with bench and dedupe options | privacy-friendly |
| 54 | [Strategic Group Maker](https://workspace.google.com/marketplace/app/strategic_group_maker/997854293694) | 3.4 | Google Sheets add-on for strategic classroom groups and Zoom breakout export | constraints, strong-exports |
| 55 | [TeamGenerator.net Team Generator](https://www.teamgenerator.net/team-generator) | 3.4 | Sports and game teams balanced by skill ratings and roles | constraints |
| 56 | [TimeTiki Group Generator](https://timetiki.com/group-generator/) | 3.4 | Group-size generator with list utilities, copy, recent groups, and history | — |
| 57 | [Toolora Team Generator](https://toolora.info/en/t/team-generator/) | 3.4 | Private browser-side random teams with copy and settings share | privacy-friendly |
| 58 | [AI225 Team Generator](https://tools.ai225.com/en/tools/team-generator/) | 3.3 | Browser-side random teams with import, exclude toggles, history, copy, and export | ai-assisted |
| 59 | [ClassInteractives Formgroup Creator](https://groupings.classinteractives.co.uk/) | 3.3 | UK-style form/class allocation using friends and must-avoid relationships | constraints, strong-exports |
| 60 | [CodersTool Random Group Generator](https://www.coderstool.com/random-group-generator) | 3.3 | Reusable random groups with seed, history, sharing, TXT/CSV, and saved lists | strong-exports |
| 61 | [DateRounds](https://daterounds.com/) | 3.3 | Small free speed-dating or networking rotation events | multi-round, constraints, self-join |
| 62 | [FreeClassroomTools Group Generator](https://www.freeclassroomtools.com/tools/group-generator) | 3.3 | Teacher-focused random group generator with reshuffle and classroom display styling | privacy-friendly |
| 63 | [Lembog Random Group Generator](https://lembog.com/tools/random-group-generator) | 3.3 | Clean random group generator with quick group-count buttons and copy-all output | — |
| 64 | [MatchBalancer Volleyball Team Generator](https://matchbalancer.com/volleyball-team-generator) | 3.3 | Volleyball team balancing by skill, position, roster, and match history | constraints |
| 65 | [PickWinner Random Team Generator](https://pickwinner.tools/tools/random-team-generator) | 3.3 | Clean privacy-friendly random team cards with shareable URLs | privacy-friendly |
| 66 | [Random-Group-Generator.com](https://random-group-generator.com/) | 3.3 | Single-session browser grouping with copy/export/share controls and lightweight balance modes | constraints, strong-exports |
| 67 | [Random.GG Team Generator](https://www.random.gg/team-generator/en) | 3.3 | Character-themed team generator with API access | — |
| 68 | [Spin of Wheel Team Generator](https://spinofwheel.com/team-generator) | 3.3 | Polished team generator with copy-all and balanced-size claims | — |
| 69 | [Sport Scheduler Pro Free Schedule Generator](https://sportschedulerpro.com/create) | 3.3 | Free round-robin team schedules with links and exports | multi-round, constraints, strong-exports |
| 70 | [WebRandom Random Team Generator](https://www.webrandom.com/) | 3.3 | No-account random teams with custom names, copy, text download, and share link | privacy-friendly |
| 71 | [Wooclap Team Picker](https://tool.wooclap.com/en/free-group-maker) | 3.3 | Polished simple random teams with strong export options | privacy-friendly, strong-exports |
| 72 | [Any One Will Do](https://anyonewilldo.com/) | 3.2 | Privacy-friendly browser-only random picker and group drafter | privacy-friendly |
| 73 | [AnyOnlineTool Group Generator Tool](https://anyonlinetool.com/en/tool/group-generator-tool) | 3.2 | Credit-based group generator with copy, CSV, PDF, API, and embed controls | strong-exports |
| 74 | [DecisionFlip Random Team Generator](https://decisionflip.com/random-team-generator) | 3.2 | Skill-aware random team maker with saved configurations and copy output | constraints |
| 75 | [FastRounds](https://fastrounds.com/) | 3.2 | Small free speed-networking round rotation events | multi-round, constraints, self-join |
| 76 | [Flipiffy Random Group Generator](https://flipiffy.com/random-tools/group-generator/) | 3.2 | Basic random groups with leaders, exclusions, saved list, CSV, and copy | constraints, strong-exports |
| 77 | [Grouperapp.net](https://grouperapp.net/) | 3.2 | Google Classroom teachers who want paid group history and preferences | constraints, strong-exports |
| 78 | [Groupify.it](https://groupify.it/) | 3.2 | Classroom peer-group tool with roster upload, sex field, group-size/count modes, and animation controls | — |
| 79 | [Keamk](https://www.keamk.com/random-team-generator) | 3.2 | Random teams with basic gender or skill balancing | constraints, strong-exports |
| 80 | [PrepPanel Classroom Group Generator](https://preppanelclassroom.com/) | 3.2 | Chrome-extension classroom tool with ability-balanced groups and relationship rules | constraints |
| 81 | [PrintYourBrackets Round Robin Generator](https://www.printyourbrackets.com/round-robin-generator.php) | 3.2 | Tournament organizers who need printable round-robin schedules, pools, Excel export, and share links | multi-round, constraints, strong-exports |
| 82 | [RandomTeamBuilder.com](https://randomteambuilder.com/) | 3.2 | Visual random teams with drag-and-drop adjustment and exclusion-rule claims | constraints |
| 83 | [RandoTeams](https://www.randoteams.com/) | 3.2 | Wheel-style random team splitter with split-all and drag-and-drop claims | — |
| 84 | [Raugen Random Team Generator](https://raugen.com/toolbox/random-team-generator) | 3.2 | Quick random teams with custom team names, copy-all output, basic stats, and local generation history | ai-assisted |
| 85 | [Slumpgenerator Random Team Generator](https://slumpgenerator.com/random-team-generator) | 3.2 | No-account team randomizer with paste input, group-count/size modes, optional names, and leaders | — |
| 86 | [Stilest Random Team Generator](https://www.stilest.com/tools/random-team-generator) | 3.2 | Clean comma/newline team splitter with regenerate and copy controls | — |
| 87 | [TextGround Random Group Generator](https://www.textground.com/tools/random-group-generator/) | 3.2 | Simple group splitting with bulk import, reshuffle, copy, and download | — |
| 88 | [YTool Random Group Generator](https://ytool.net/group/) | 3.2 | Multilingual random group tool with paste input, copy, TXT export, and Excel export | — |
| 89 | [afreetools Smart Team Generator](https://afreetools.com/smart-team-generator) | 3.1 | Small smart-team experiments with skill, role, avoid-pair, and share-link controls | constraints |
| 90 | [AppSorteos Random Teams Generator](https://app-sorteos.com/en/apps/random-teams-generator) | 3.1 | Polished free random teams with leaders and share/export buttons | strong-exports |
| 91 | [FateFactory Team Splitter](https://www.fatefactory.org/en/team-splitter) | 3.1 | Ad-light random teams with file import, local templates, sharing, and QR output | privacy-friendly |
| 92 | [FlipACoinOnline Random Team Generator](https://flipacoinonline.com/random-team-generator/) | 3.1 | Random teams with CSV download and team label styles | strong-exports |
| 93 | [GenKit Random Group Generator](https://gen-kit.com/tools/random-group-generator/) | 3.1 | Browser-side random group generator with sample data, reshuffle, copy, share, and bookmarks | — |
| 94 | [Kalkulator Random Group Generator](https://kalkulator.com.ua/en/calculators/random-group-generator/) | 3.1 | Group division calculator with count/size modes, copy, print, statistics, and history | — |
| 95 | [Mate.tools Random Team Generator](https://mate.tools/random-team-generator) | 3.1 | Simple browser-side teams with by-count/by-size modes, organizer selection, and copy | — |
| 96 | [PickerKit Team Picker](https://pickerkit.com/team-picker) | 3.1 | Polished random teams with representatives, share, and save/load file controls | — |
| 97 | [Randomly Random Group Generator](https://randomly.group/random-group) | 3.1 | Random group generator with single entry, bulk import, file upload, copy/export claims, and multilingual UI | — |
| 98 | [RandTools Random Team Generator](https://randtools.com/random-team-generator) | 3.1 | Privacy-conscious basic random team splitting with copy output | privacy-friendly, basic-randomizer |
| 99 | [Shibutz Random Group Generator](https://www.shibutz.com/free-tools/random-groups) | 3.1 | Teacher-focused random groups with fixed-size or fixed-count modes | — |
| 100 | [Team Balancer Generic Team Balance](https://www.team-balancer.com/generic-team-balance) | 3.1 | Attribute-based team balancer for small manual rosters | constraints |
| 101 | [Toolnest Random Team Generator](https://lab.golamrabbani.org/generators/random-team-generator) | 3.1 | Privacy-conscious basic teams with team-count/team-size modes and copy output | — |
| 102 | [TurboToolkit Split List Into Groups](https://turboutilkit.com/splitlistintogroups/) | 3.1 | General list splitting with randomize, dedupe, sorting, CSV/JSON/text output, copy, and TXT download | strong-exports |
| 103 | [Utils.fun Random Grouping](https://utils.fun/random-group) | 3.1 | Chinese-language browser grouping with copy/download output | privacy-friendly |
| 104 | [WheelOfNames.net Team Picker](https://wheelofnames.net/team-picker) | 3.1 | Ad-supported team picker with skill/custom-name toggles and text export | constraints |
| 105 | [ABCDTools Team Generator](https://www.abcdtools.com/en/team-generator) | 3 | Free team grouping tool with copyable group cards | — |
| 106 | [Begoodtool Smart Grouping Tool](https://begoodtool.com/smart-grouping/en) | 3 | Experimental rule-based grouping with tags, violations, drag/drop, and Excel export | constraints |
| 107 | [Betext Random Team Generator](https://betext.io/random-team-generator/) | 3 | Basic random teams with leaders and CSV/TXT/copy output | strong-exports |
| 108 | [Camp Chieflings TeamGen-360](https://chieflings.com/tools/teamgen-360/) | 3 | Team generator with leaders and random team names | — |
| 109 | [ChatGPT (Free Version)](https://chatgpt.com/) | 3 | Natural-language grouping when users are willing to verify the output | constraints, ai-assisted |
| 110 | [Chirag Mehta Team Maker](https://chir.ag/projects/team-maker/) | 3 | Lightweight random teams with editable team names and CSV output | strong-exports |
| 111 | [CinderGPT Random Team Generator](https://www.cindergpt.com/tools/random-team) | 3 | Quick random teams with copy/download/share and local browser processing claims | — |
| 112 | [Coda Random Team Generator Template](https://coda.io/@makon/random-team-generator) | 3 | Coda template for reusable random team generation with players, team selection, and team names tables | — |
| 113 | [ConverterPanda Random Group Generator](https://converterpanda.com/random-group-generator/) | 3 | Basic random groups with remaining-member handling, naming styles, stats, export, and print | — |
| 114 | [DecodeIt Random Team Generator](https://decodeit.app/en/randomizers/random-team-generator) | 3 | Polished browser-based random team splitter with upload, examples, and custom team names | — |
| 115 | [Diverse Group Generation](https://diverse-group-generation.vercel.app/) | 3 | Small attribute-balanced grouping experiments | constraints |
| 116 | [DJPlaner GroupGenerator](https://djplaner.github.io/GroupGenerator/) | 3 | Tiny GitHub Pages random group generator with save/load allocation controls | privacy-friendly |
| 117 | [EliteAI Tools Random Team Generator](https://eliteai.tools/tool/random-team-generator) | 3 | Random teams with captains and table/text/CSV output | ai-assisted |
| 118 | [EMFLS Random Team Generator](https://emfls.com/util/teamgen/) | 3 | Tiny browser-based team splitter with no-upload/no-tracking claim | privacy-friendly, basic-randomizer |
| 119 | [FateWheel Team Generator](https://fatewheel.com/tools/team-generator) | 3 | Visual random team assignment with team-count/team-size modes | — |
| 120 | [InYourLeague Secret Santa Team Generator](https://tools.inyourleague.net/en/random-secret-santa-team-generator-group-size-exclusion-en/) | 3 | Secret Santa-style teams with min/max sizes and exclusion pairs | constraints |
| 121 | [JarvisBox Team Picker](https://tools.jarvisbox.app/pick/team-picker/) | 3 | Privacy-friendly one-page team splitting with copy/download | privacy-friendly |
| 122 | [Lekktura Random Name Picker & Group Maker](https://lekktura.com/tools/random-name-picker) | 3 | Classroom name picking plus basic random groups | strong-exports |
| 123 | [LetsRandomize Random Team Generator](https://letsrandomize.org/tools/random-team-generator/) | 3 | Fast browser-side team splits with copy/share, recent history, and random-captain mode | — |
| 124 | [MyAIUtility Team Generator](https://myaiutility.com/tools/team-generator/) | 3 | Simple team generator with import box, shuffle, copy, and manual move controls | — |
| 125 | [NotchTools Team Maker](https://notchtools.com/team-maker) | 3 | Simple team maker with pasted players, team count/size controls, and editable team names | — |
| 126 | [Pandos Team Generator](https://pandos.io/team-generator) | 3 | Guided team formation workflow when email/server processing is acceptable | constraints |
| 127 | [PartyPlay Team Generator](https://partyplay.games/en/team-generator/) | 3 | Casual party/classroom teams with paste, saved lists, captain mode, copy, and share | — |
| 128 | [Penguin Tools Team Generator](https://penguintools.net/en/team-generator) | 3 | Simple random teams with team-count or members-per-team mode | — |
| 129 | [PickRandom.online Random Team Generator](https://www.pickrandom.online/random-team) | 3 | Private cryptographic browser-side random teams with no account | privacy-friendly |
| 130 | [Quick Pick Team Generator](https://quickpick.tools/teams) | 3 | Simple random teams with optional skill balancing and share/fullscreen controls | constraints |
| 131 | [Randly Group Generator](https://randly.app/tools/group-generator) | 3 | Clean no-account random groups with multiple generated draws | privacy-friendly |
| 132 | [Ruletaa Random Team Generator](https://ruletaa.net/en/team-generator) | 3 | Browser-local random groups with dedupe and CSV/image download | strong-exports |
| 133 | [SpinnChoose Random Team Generator](https://spinnchoose.com/random-team-generator/) | 3 | Casual sports, gaming, and classroom team splits with list/bracket views | — |
| 134 | [SpinOfLuck Team Picker Wheel](https://www.spinofluck.com/team-picker) | 3 | Ad-free wheel-based team picking with pick counts, weights, saved rosters, and fullscreen | — |
| 135 | [SpreadsheetPlanet Random Group Generator](https://spreadsheetplanet.com/calculators/random-group-generator/) | 3 | Spreadsheet tutorial-site group calculator with count/size modes and copy output | — |
| 136 | [Steven Mi Group Generator](https://steven-mi.github.io/group-generator/) | 3 | Tiny static random subgroup generator | privacy-friendly, basic-randomizer |
| 137 | [Utility Tools Random Team Generator](https://tools.futureapp.work/en/team-generator) | 3 | Basic browser-side random team splitting with quick team-count controls | basic-randomizer |
| 138 | [UtilityNestAI Team Generator](https://www.utilitynestai.com/team-generator) | 3 | Small team splits with individual entry, skill-balance option, custom names, share, and export | constraints, ai-assisted |
| 139 | [WheelPlay Team Picker Wheel](https://wheelplay.net/team-picker-wheel/) | 3 | Visual team picking with CSV export, representatives, and label/gender distribution options | constraints, strong-exports |
| 140 | [AllTools.dev Random Team Generator](https://alltools.dev/tools/random/random-team-generator/) | 2.9 | Crypto-random browser-side teams with print and share URL | — |
| 141 | [Classroom.Group Online Group Generator](https://classroom.group/online-group-generator) | 2.9 | Teachers who want a simple local web splitter and may later upgrade to the iOS Groups app | — |
| 142 | [DecideHub Team Generator](https://decidehub.app/team-generator/) | 2.9 | Sports-style two-to-six-team splits with copy and local saved rosters | privacy-friendly |
| 143 | [DecisionFlip Team Picker](https://decisionflip.com/team-picker) | 2.9 | Basic random teams with balanced/random/snake distribution modes | — |
| 144 | [FindUtils Random Picker / Team Mode](https://findutils.com/generate/random-picker/) | 2.9 | Privacy-leaning browser-side team splits inside a multipurpose random picker | — |
| 145 | [FunRandomPickers Random Team Generator](https://funrandompickers.com/teams/play) | 2.9 | Simple visual team cards with copy/share and fullscreen | — |
| 146 | [LDDGO Random Group Generator](https://www.lddgo.net/en/common/random-group) | 2.9 | Random group generator with TXT/XLSX import and TXT/XLSX downloads | strong-exports |
| 147 | [Microsoft Excel](https://www.microsoft.com/microsoft-365/excel) | 2.9 | Spreadsheet users who want local files or organization-controlled rosters | constraints, strong-exports |
| 148 | [QuickWheelSpin Team Picker](https://quickwheelspin.com/team-picker) | 2.9 | Visual basic team picking with copy/share-image outputs | — |
| 149 | [Random Letter Generator Group Generator](https://randomlettergenerator.app/group-generator) | 2.9 | Polished simple random groups with paste input, group count, copy, and basic stats | — |
| 150 | [RandomGenerator.one Random Generator Group](https://randomgenerator.one/random-generator-group/) | 2.9 | Group-size randomizer with copy output | basic-randomizer |
| 151 | [RandomGroup.online](https://randomgroup.online/) | 2.9 | Multilingual basic random groups with copy, TXT, and Excel export | — |
| 152 | [RandomGroup.org Random Group Generator](https://randomgroup.org/) | 2.9 | No-account random groups with TXT/CSV export | strong-exports |
| 153 | [RapidWebApp Random Team Generator](https://www.rapidwebapp.com/random-team-generator) | 2.9 | Iframe-based random teams with custom names, leaders, copy, and image export | — |
| 154 | [Spinwheely Random Team Generator](https://spinwheely.com/random-team-generator) | 2.9 | Visual browser-side random teams with PDF, CSV, and text export | strong-exports |
| 155 | [TeamShufflr](https://teamshufflr.com/de/) | 2.9 | In-person workshops that want printable team cards rather than a normal result table | — |
| 156 | [TrumpExcel Random Team Generator](https://trumpexcel.com/tools/random-team-generator/) | 2.9 | Simple local random groups with spreadsheet-friendly output | strong-exports |
| 157 | [Wanglitou List Randomizer with Teams](https://www.wanglitou.com/list-randomizer/) | 2.9 | Seedable list randomization and simple team output with copy/TXT download | — |
| 158 | [Wheelpick Team Generator](https://wheelpick.app/team-generator) | 2.9 | Polished no-account browser-side random teams from a saved roster | — |
| 159 | [Zoom breakout room assignment](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062540) | 2.9 | Assigning live meeting participants directly into Zoom rooms | constraints |
| 160 | [A Lot Of Tools Team Generator](https://alotoftools.com/team-generator) | 2.8 | Basic team generator with add-name workflow and copy-oriented results | basic-randomizer |
| 161 | [AIOneTools Random Team Generator](https://aionetools.com/tools/picker/team-generator-wheel) | 2.8 | Simple browser-side random groups with shuffle and clean team cards | ai-assisted |
| 162 | [Cojoro Team Generator](https://cojoro.dedyn.io/RandTeamGen/index.html) | 2.8 | Standalone team generation with custom team names, leader selection, and multiple export formats if certificate warnings are acceptable | strong-exports |
| 163 | [DiceGameHub List Randomizer & Team Generator](https://dicegamehub.com/tools/list-randomizer) | 2.8 | Simple team generation with copy-all and image download | — |
| 164 | [Games by Marco Team Generator](https://teams.gamesbymarco.com/) | 2.8 | Minimal private-ish random teams with team-count or team-size mode | privacy-friendly, basic-randomizer |
| 165 | [Generate-Random.org Random Team Generator](https://generate-random.org/teams) | 2.8 | Simple random teams with strong text/CSV/JSON exports if hosted processing is acceptable | strong-exports |
| 166 | [Google Sheets](https://sheets.google.com/) | 2.8 | Spreadsheet users willing to build their own random grouping template | constraints, strong-exports |
| 167 | [GoOnlineTools Random Group Generator](https://goonlinetools.com/random-group-generator/) | 2.8 | Simple random groups with a modern UI, regenerate, statistics, and possible copy/download/share icons | constraints |
| 168 | [Gynzy Group Maker](https://www.gynzy.com/en/library/items/group-maker) | 2.8 | Interactive whiteboard random groups inside Gynzy | — |
| 169 | [InkPx Random Group Generator](https://inkpx.com/random-group-generator) | 2.8 | Simple group-count splits with remembered local input history | — |
| 170 | [James Baum Team Generator](https://www.jamesbaum.co.uk/team-generator/) | 2.8 | Classic team generator with themed team names | basic-randomizer |
| 171 | [Kordu Team Randomizer](https://kordu.tools/tools/gaming/team-randomizer/) | 2.8 | Clean browser-side random teams with re-roll and copy | — |
| 172 | [OnlTools Random Group Generator](https://onltools.com/random-group-generator) | 2.8 | Simple online random groups with by-size and by-number modes | — |
| 173 | [Paji Lots Team Grouping](https://toolset.marco79423.net/en/random-group-generator) | 2.8 | Browser-side random team grouping with CSPRNG | — |
| 174 | [Pradoy Random Team Generator](https://www.pradoy.com/random-team-generator) | 2.8 | Random teams with max-size mode and themed team names | — |
| 175 | [Random Group Generator Chrome Extension](https://chromewebstore.google.com/detail/random-group-generator/ahdimffafoiopfpheklpnkmepibagijl) | 2.8 | Chrome extension for Excel/CSV random groups | strong-exports |
| 176 | [Random Question Maker Random Team Generator](https://randomquestionmaker.com/more-tools/random-team-generator) | 2.8 | Basic team generator embedded in a question-site tools page | basic-randomizer |
| 177 | [Random Team Generator Android App](https://play.google.com/store/apps/details?id=com.argonremote.randomteamgenerator&hl=en) | 2.8 | Android team generator with group management and manual assignment | — |
| 178 | [Randomdo Random Group Generator](https://www.randomdo.com/tools/random-group-generator) | 2.8 | Minimal group-size randomizer with shuffle/reset and optional numbering | privacy-friendly, basic-randomizer |
| 179 | [RandomLists.top Team Generator](https://randomlists.top/team-generator/) | 2.8 | Simple large-list random teams with rename, upload, copy, and save | — |
| 180 | [RandomlyFun Random Team Generator](https://randomlyfun.app/tools/random-team-generator) | 2.8 | Casual 2–6 team splits with reroll/copy/share | — |
| 181 | [SpinPickOnline Team Picker](https://www.spinpickonline.com/team-picker) | 2.8 | Wheel-styled team generation with bulk add, regenerate, and share results | — |
| 182 | [The Decider Team Generator](https://www.the-decider.com/team-generator) | 2.8 | Quick random teams with by-count/by-size mode, reshuffle, and copy | — |
| 183 | [Thunderbit Random Team Generator](https://thunderbit.com/tool/random-team-generator) | 2.8 | Quick random teams with CSV download if hosted processing and marketing funnel are acceptable | strong-exports |
| 184 | [UD5 Random Team Generator](https://www.ud5.com/tool/random-team-generator) | 2.8 | Simple local team splits with cleanup, custom prefix, history, and export menu | — |
| 185 | [Vertex42 Random Group Generator Template](https://www.vertex42.com/ExcelTemplates/random-group-generator.html) | 2.8 | Spreadsheet users who want a downloadable Excel/Google Sheets random grouping template | strong-exports |
| 186 | [YesNoWheel Picker Random Team Generator](https://www.yesornowheelpicker.com/random-team-generator) | 2.8 | Basic browser-side random teams with bulk add and file import | — |
| 187 | [Be Youthful Random Team Maker](https://beyouthful.net/random-team-maker/) | 2.7 | Pair/team maker with CSV download and shuffle again | strong-exports |
| 188 | [ClassDojo Group Maker](https://www.classdojo.com/toolkit/groupmaker/) | 2.7 | Teachers already using ClassDojo who want quick classroom groups | constraints |
| 189 | [CodeBeautify Random Team Generator](https://codebeautify.org/random-team-generator) | 2.7 | Ad-supported quick random teams with per-team copy/download controls | — |
| 190 | [Fun Group Names Random Team Generator](https://fungroupnames.com/random-team-generator/) | 2.7 | A content-site group randomizer if the embedded script works in your browser | — |
| 191 | [Group Assigner](https://group-assigner.com/) | 2.7 | Quick classroom or workshop groups with random team names and focus mode | — |
| 192 | [HyperToolbox Random Group Generator](https://hypertoolbox.com/en/randomGrouping) | 2.7 | Browser-side random grouping with group-count and members-per-group modes | — |
| 193 | [Nancy's Hearth Random Team Generator](https://teams.nancyshearth.com/) | 2.7 | Very simple random teams for virtual game nights | privacy-friendly, basic-randomizer |
| 194 | [Online Stopwatch Random Group Generator](https://www.online-stopwatch.com/random-group-generators/) | 2.7 | Classroom presentation-style random groups with animated reveals | strong-exports |
| 195 | [RandomTools.app Random Team Generator](https://randomtools.app/random-team-generator/) | 2.7 | Simple random teams with copy output and recent-draw history | — |
| 196 | [Spin Numbers Make Random Teams](https://www.spinumbers.com/make-random-teams/) | 2.7 | Quick local random team splits with copy-only output | basic-randomizer |
| 197 | [Super Teacher Tools Classroom Seating / Groups](https://www.superteachertools.us/instantclassroom/group-maker.php) | 2.7 | Teachers who want saved class rosters plus simple random classroom groups | — |
| 198 | [Teacher Commons Group Maker](https://teachercommons.com/classroom-management-and-productivity-tools/group-maker) | 2.7 | Minimal classroom group maker from a teacher-tool site | basic-randomizer |
| 199 | [UD5 Team Randomizer](https://www.ud5.com/tool/team-randomizer) | 2.7 | Simple team randomizer with count/size modes and copy results | — |
| 200 | [UtilityKit Random Team Generator](https://utilitykit.tools/random-team-generator) | 2.7 | Simple browser-side random squads on a low-friction page | privacy-friendly, basic-randomizer |
| 201 | [Vibox Random Team Generator](https://vibox.app/tools/fun/team.html) | 2.7 | Tiny no-account random team splitting with team-count or people-per-team mode | basic-randomizer |
| 202 | [VisualTimer Random Group Generator](https://visualtimer.com/tools/random-group-generator/) | 2.7 | Simple classroom random groups with reveal mode | privacy-friendly |
| 203 | [Webby Student Group Generator](https://webby.tools/student-group-generator/) | 2.7 | Quick classroom random groups with printable PDF output | — |
| 204 | [WheelOfNamesPicker Team Generator](https://wheelofnamespicker.org/pages/team-generator.html) | 2.7 | Simple team generator with equal-size/random-size modes and sample names | — |
| 205 | [WordMint Random Group Generator](https://wordmint.com/random-group-generator) | 2.7 | Simple classroom groups with a copy-to-clipboard button | — |
| 206 | [CalculatingHub Random Team Generator](https://www.calculatinghub.com/en/randomizers/team-generator/) | 2.6 | Separator-based random team generator with duplicate removal | basic-randomizer |
| 207 | [CBC Tools Random Groups](https://cbc-tools.github.io/random-groups/) | 2.6 | Static roster-based random groups app | privacy-friendly, basic-randomizer |
| 208 | [Euan Riggans Team Builder](https://teambuilder.euanriggans.com/) | 2.6 | Tiny local random team splitting with save/load for the roster | privacy-friendly, basic-randomizer |
| 209 | [Fotify Speed Dating Event Planner](https://fotify.app/tools/speed-dating-event-planner/) | 2.6 | Quick speed-dating event timing plans | multi-round |
| 210 | [Games4esl Random Group Generator](https://games4esl.com/teacher-tools/random-group-generator/) | 2.6 | Teachers who want quick random classroom groups and a printable PDF | basic-randomizer |
| 211 | [RakkoTools Random Group Generator](https://en.rakko.tools/tools/59/) | 2.6 | Basic random groups with CSV export | strong-exports |
| 212 | [RandomHub Random Group Generator](https://randomhub.io/random-group-generator) | 2.6 | Minimal no-account random group splits with copy output | — |
| 213 | [RandomTools.io Team Generator](https://randomtools.io/teams-generator) | 2.6 | Ad-supported random team splitter with copy, print, and Excel export claims | — |
| 214 | [SmartFreeTools Team Generator](https://smartfreetools.com/random-team-generator-split-a-list-in-groups/) | 2.6 | Random team draw page with copy/Excel/print/PDF features described | — |
| 215 | [SpinTheWheel.io Team Draw Generator](https://spinthewheel.io/de/team-draw-generator) | 2.6 | Randomly pairing teams from two pots, not forming teams from people | — |
| 216 | [Teacher Toolset Random Group Maker](https://www.teacher-toolset.online/en/onlinetools/group-maker) | 2.6 | Classroom random groups when teachers can add/import a roster and export text | — |
| 217 | [TeachQuill Classroom Group Generator](https://teachquill.com/classroom-group-generator) | 2.6 | AI-assisted classroom grouping drafts from natural-language constraints | constraints, ai-assisted |
| 218 | [Toolita Team Picker](https://toolita.com/decision/team-picker/) | 2.6 | Casual random teams or fixed-size groups when ad/cookie load is acceptable | — |
| 219 | [Versakit Group Generator](https://versakit.net/generators/group) | 2.6 | Clean no-account random groups with copy/text download | privacy-friendly, basic-randomizer |
| 220 | [Wheel of Decision Team Generator](https://wheelofdecision.com/tool/team-generator/) | 2.6 | Simple team generation with history/statistics and local participant state | — |
| 221 | [AgentCalc Random Team Generator](https://agentcalc.com/random-team-generator) | 2.5 | Educational simple random teams with clear algorithm explanation | — |
| 222 | [Comment Picker Random Team Generator](https://commentpicker.com/team-generator.php) | 2.5 | Basic random teams with stronger copy/print/Excel output | strong-exports |
| 223 | [IOTools Random Team Generator](https://iotools.cloud/tool/random-generator/random-team-generator/) | 2.5 | Basic random teams with duplicate removal, file import, copy buttons, and a client-side workflow | — |
| 224 | [NameGenHub Name Group Generator](https://namegenhub.com/generator/name-group-generator/) | 2.5 | AI-assisted name grouping with natural-language directives and copy output | constraints, ai-assisted |
| 225 | [PiliApp Random Team Generator](https://pili.app/random/team/) | 2.5 | Localized simple team splitting with copy and saved session data | — |
| 226 | [Random Choice Generator Random Team Generator](https://randomchoicegenerator.com/random-team-generator/) | 2.5 | Very simple browser team splitting with shareable name-list URLs | basic-randomizer |
| 227 | [Random Team Generator GitHub App](https://randomteamgenerator.github.io/input.html) | 2.5 | Open-source, no-account random teams when privacy and simplicity matter more than features | privacy-friendly, basic-randomizer |
| 228 | [RandomGenerator.com.au Random Group Generator](https://www.randomgenerator.com.au/random-group-generator) | 2.5 | Basic target-group-size grouping with copy-all output | basic-randomizer |
| 229 | [RandomGroupGenerator.co](https://randomgroupgenerator.co/) | 2.5 | A clean, private, one-screen random split when exports do not matter | privacy-friendly, basic-randomizer |
| 230 | [RandoTools Random Team Generator](https://randotools.app/random-team-generator/) | 2.5 | Quick private-ish two-mode team splitting with per-team copy | basic-randomizer |
| 231 | [Randzy Team Generator](https://www.randzy.com/team-generator) | 2.5 | Simple add-name random team generator | basic-randomizer |
| 232 | [SpinTheNamePicker Team Generator](https://spinthenamepicker.com/pages/team-generator.html) | 2.5 | Quick sports/classroom team splits with equal-size or random-size mode | — |
| 233 | [The Word Finder Random Group Generator](https://www.thewordfinder.com/random-group-generator/) | 2.5 | Basic random groups with duplicate removal and custom group title fields | — |
| 234 | [Virtual Science Teachers Random Group Generator](https://virtualscienceteachers.org/random-group-generator/) | 2.5 | Classroom number-based group generator for student-number assignments | privacy-friendly, basic-randomizer |
| 235 | [A School Random Pair Generator](https://www.aschool.us/random/random-pair.php) | 2.4 | Very basic classroom random groups with max-size or group-count modes | — |
| 236 | [AddressGenerator Random Team Generator](https://addressgenerator.app/random-team-generator) | 2.4 | Basic ad-supported random team generator | basic-randomizer |
| 237 | [ChooseRandom Groups](https://chooserandom.com/groups) | 2.4 | Simple online group generator with comma/enter participant entry and optional public raffle workflow | basic-randomizer |
| 238 | [ClassTools24 Random Group Generator](https://classtools24.com/random-group-generator/) | 2.4 | Simple random groups with fullscreen display and basic click-to-copy behavior | basic-randomizer |
| 239 | [GIGAcalculator Random Team Generator](https://www.gigacalculator.com/randomizers/random-team-generator.php) | 2.4 | Quick random sports/team splits when per-team copy is enough | basic-randomizer |
| 240 | [Picker Online Wheel Team Picker](https://pickeronlinewheel.com/random-team-generator/) | 2.4 | Simple multi-step random team wheel with custom team-name positioning | basic-randomizer |
| 241 | [Random Generator Tools Random Group Generator](https://randomgeneratortools.com/random-group-generator/) | 2.4 | Tiny people-per-group random splitter with paste input | basic-randomizer |
| 242 | [Saroj Meher Random Group Generator](https://www.sarojmeher.com/tools/random-group-generator/) | 2.4 | Decorated random group output with color and image download options | — |
| 243 | [Semantic Pen Random Team Generator](https://www.semanticpen.com/tools/random-team-generator) | 2.4 | AI prompt-based random team generator page | constraints, ai-assisted |
| 244 | [TA Easy Random Group](https://www.ta-easy.com/random-group/en) | 2.4 | Very simple no-account random groups when export and rules do not matter | basic-randomizer |
| 245 | [ToolPrime Random Team Generator](https://toolprime.com/random-team-generator) | 2.4 | Basic random teams with TXT download | basic-randomizer |
| 246 | [University of Edinburgh Group Allocator](https://static.sps.ed.ac.uk/groupallocator/) | 2.4 | Bare-bones random groups with CSV download | privacy-friendly, strong-exports, basic-randomizer |
| 247 | [Wheelzify Random Team Generator Wheel](https://www.wheelzify.com/random-team-generator/) | 2.4 | Presentation-style wheel-based team picking rather than one-click team splitting | — |
| 248 | [CommonTools Random Team Generator](https://www.commontools.org/tool/random-team-generator-124) | 2.3 | Basic random groups with TXT download | basic-randomizer |
| 249 | [Effie Random Group Generator](https://www.effie.pro/free-tools/random-group-generator) | 2.3 | A quick no-account two-or-more group split on Effie’s site | basic-randomizer |
| 250 | [Flippity Random Name Picker](https://www.flippity.net/v2/RandomNamePicker.htm) | 2.3 | Spreadsheet-backed classroom grouping and quick random teams | — |
| 251 | [GeneratorMix Random Team Generator](https://www.generatormix.com/random-team-generator) | 2.3 | Very basic random team splitter on a generator directory site | basic-randomizer |
| 252 | [Icebreaker Games Random Group Generator](https://icebreaker-games.org/random-group-generator) | 2.3 | Fast icebreaker groups when copy-only output is enough | — |
| 253 | [OpenEduCat AI Group Generator](https://openeducat.org/ai/tools/group-generator/) | 2.3 | Institutions already evaluating OpenEduCat, not quick public grouping | constraints, ai-assisted |
| 254 | [Random Name Picker Team Generator](https://www.randomnamepicker.net/team-generator) | 2.3 | Older team generator with name-set support and members-per-team input | basic-randomizer |
| 255 | [RandThings Random Team Generator](https://randthings.com/team-generator/) | 2.3 | No-frills random teams from pasted names | basic-randomizer |
| 256 | [SoulATools Random Picker / Team Picker](https://soulatools.com/random-picker/) | 2.3 | Casual team splitting inside a broader random-picker tool | — |
| 257 | [SpinWheelNames Random Team Generator](https://spinwheelnames.com/random-team-generator) | 2.3 | Wheel-based visual team assignment | basic-randomizer |
| 258 | [Warren Institute Random Groups Generator](https://warreninstitute.org/tools/random-groups-generator.html) | 2.3 | Bare-bones classroom/team random grouping | basic-randomizer |
| 259 | [Alien Fusion Generator Random Group Generator](https://alienfusiongenerator.com/random-group-generator/) | 2.2 | Basic random groups with copy/download on an ad-heavy page | basic-randomizer |
| 260 | [Applorium Random Group Generator](https://applorium.com/blog/random-group-generator/) | 2.2 | One-off random teams on a quiet, low-friction blog page | basic-randomizer |
| 261 | [FlexOS Random Group Generator](https://www.flexos.work/tools/random-group-generator-easy-fast-team-sorting) | 2.2 | Tiny comma-separated team splits on a future-of-work blog page | basic-randomizer |
| 262 | [GroupGenerator.top](https://www.groupgenerator.top/) | 2.2 | Trying a simple random split with experimental AI-style instructions | basic-randomizer, ai-assisted |
| 263 | [Homeschool of 1 Random Team Generator](https://www.homeschoolof1.com/random-team-generator/) | 2.2 | Embedded classroom/homeschool team splitter inside an ad-heavy article | — |
| 264 | [MiniWebTool Random Group Generator](https://miniwebtool.com/random-group-generator/) | 2.2 | Fast basic web groups with arbitrary group size or team count | — |
| 265 | [Online Stopwatch Random Magic Hat Group Generator](https://www.online-stopwatch.com/random-group-generators/random-magic-hat-group-generator/) | 2.2 | Classroom display novelty when animated sorting matters more than features | basic-randomizer |
| 266 | [PickJa Random Group Generator](https://pickja.com/tools/random-group-generator) | 2.2 | Quick no-account random groups with group-count or members-per-group mode | — |
| 267 | [QuizBreaker Team Generator](https://www.quizbreaker.com/team-generator) | 2.2 | Not recommended; basic space-separated random teams on a QuizBreaker marketing page | basic-randomizer |
| 268 | [Random Group Generator Chrome Extension](https://chromewebstore.google.com/detail/random-group-generator/njpbladpjfebkonnclifnjapepbigmbg?hl=en) | 2.2 | Chrome users who want a tiny local random-group popup | privacy-friendly, basic-randomizer |
| 269 | [Random Group Generator Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/random-group-generator/) | 2.2 | Firefox add-on for simple locally saved random groups | basic-randomizer |
| 270 | [RandomGenerate.io Random Team Generator](https://randomgenerate.io/random-team-generator) | 2.2 | Basic random teams on a general random-generator site | basic-randomizer |
| 271 | [RandomLists Random Team Generator](https://www.randomlists.com/team-generator) | 2.2 | Simple random teams from a pasted list | basic-randomizer |
| 272 | [RandomReady Random Group Generator](https://www.randomready.com/random-group-generator/) | 2.2 | Very simple random group splits | basic-randomizer |
| 273 | [Spin the Crocodile Team Picker](https://spinthecrocodile.com/team-picker) | 2.2 | Visual team-member picker for captains, roles, and small classroom/team selections | basic-randomizer |
| 274 | [UltimateSolver Random Groups](https://www.ultimatesolver.com/en/random-groups) | 2.2 | Privacy-conscious basic random groups with cryptographic server randomness | basic-randomizer |
| 275 | [HeySpinner](https://heyspinner.com/) | 2.1 | Public wheel spins when you want a visual random picker, not automatic team splitting | basic-randomizer |
| 276 | [iLeren Groepenmaker](https://ileren.be/apps/groepenmaker/index.html) | 2.1 | Dutch-speaking teachers who need a tiny no-account classroom splitter | privacy-friendly, basic-randomizer |
| 277 | [ImageCompresser Random Team Generator](https://imagecompresser.com/random-team-generator) | 2.1 | Basic random teams on an ad-supported utility site | basic-randomizer |
| 278 | [Mega Seating Plan Free Random Group Maker](https://www.seatingplan.com/tools/groupmaker) | 2.1 | Teachers who already use Seating Plan class lists | basic-randomizer |
| 279 | [Microapp Team Generator](https://microapp.io/team-generator/) | 2.1 | A minimal team split if you tolerate the consent wall | basic-randomizer |
| 280 | [My2lbox Random Group Generator](https://my2lbox.com/en/random-group-generator) | 2.1 | Tiny random or level-weighted groups when privacy/ad-tech tradeoffs are acceptable | constraints |
| 281 | [Random Teams Generator Android App](https://play.google.com/store/apps/details?id=com.dev.simonedipaolo.randomteamsgenerator&hl=en_US) | 2.1 | Simple Android random teams with generated names and flags | basic-randomizer |
| 282 | [RandomTeams.net](https://www.randomteams.net/) | 2.1 | Very simple team-size splitting with generated funny team names | basic-randomizer |
| 283 | [Repixify Random Team Generator](https://www.repixify.com/tools/random-team-generator) | 2.1 | Users who specifically want leader markers and custom team names and do not care about ad-tech | — |
| 284 | [1minusbeta Name Group Generator](https://1minusbeta.com/name-group-generator) | 2 | Ultra-minimal name grouping | privacy-friendly, basic-randomizer |
| 285 | [BestRandoms Random Team Generator](https://www.bestrandoms.com/random-team-generator) | 2 | Very basic ad-supported random group generation | basic-randomizer |
| 286 | [Breno Design Group Generator](https://www.breno.design/design-tool/group-generator) | 2 | Small rosters where you want to click-select names and make quick visual groups | basic-randomizer |
| 287 | [Calculate.co.nz Random Team Generator](https://www.calculate.co.nz/random-team-generator.php) | 2 | One-off random teams when page-only output is enough | basic-randomizer |
| 288 | [GoSpinWheel Random Group Generator](https://gospinwheel.com/random-group-generator) | 2 | Live wheel-based team assignment when presentation matters more than balanced rosters | basic-randomizer |
| 289 | [PinCalculator Random Group Generator](https://www.pincalculator.com/random-group-generator) | 2 | Tiny no-account random groups when one-by-one name entry is acceptable | basic-randomizer |
| 290 | [RandomCount Team Generator](https://randomcount.in/teamgenerator) | 2 | Tiny groups where adding names one at a time is acceptable | basic-randomizer |
| 291 | [Terrific Tools Random Group Generator](https://terrific.tools/randomizer/random-group-generator) | 2 | People who want a small browser tool with individual member entry and simple group-size controls | — |
| 292 | [MadeInText Random Group Generator](https://www.madeintext.com/random-group-generator/) | 1.9 | Very simple one-off random groups when privacy does not matter | basic-randomizer |
| 293 | [PureTables Random Group Generator](https://puretables.com/random-group-generator) | 1.9 | Very basic page-only random teams | basic-randomizer |
| 294 | [Sheffield Hallam TEL-e-vision Group Maker](https://teaching.shu.ac.uk/hwb/hwbtel/resources/TEL-e-vision/groupmaker.html) | 1.9 | Very quick no-account random classroom groups | basic-randomizer |
| 295 | [Web0 Random Team Generator](https://www.web0.it/random/team/en) | 1.9 | Ultra-minimal local random groups | privacy-friendly, basic-randomizer |
| 296 | [ClassTools Random Group Generator](https://www.classtools.net/random-group-generator/) | 1.8 | Very quick classroom group splits | basic-randomizer |
| 297 | [Musely Team Builder Generator](https://musely.ai/tools/team-builder-generator) | 1.8 | Not recommended unless Musely verification works for the user | constraints, ai-assisted |
| 298 | [Schule Dietmannsried Gruppen Generator](https://www.schule-dietmannsried.de/gruppen/) | 1.8 | Bare-bones German classroom group splitting | privacy-friendly, basic-randomizer |
| 299 | [Wheel Decide Random Team Generator](https://wheel-decide.com/randomteamgenerator.php) | 1.8 | Manual wheel-based team selection with add/remove segments | basic-randomizer |
| 300 | [Wheel of Names](https://wheelofnames.com/) | 1.8 | Random picking, raffles, and manual group-building workarounds | basic-randomizer |
| 301 | [AhaSlides Random Team Generator](https://ahaslides.com/features/random-team-generator/) | 1.7 | AhaSlides users who already want random-team generation inside an interactive presentation workflow | basic-randomizer |
| 302 | [BasedLabs Random Team Generator with Conditions](https://www.basedlabs.ai/tools/random-team-generator-with-conditions) | 1.6 | Prompt ideas for AI-assisted grouping, not a structured group generator | constraints, basic-randomizer, ai-assisted |
| 303 | [FreeTextTools Random Team Generator](https://www.freetexttools.org/random-team-generator/) | 1.6 | Feature-rich-looking team generator that did not produce visible teams in testing | — |
| 304 | [BasedLabs Random Group Generator](https://www.basedlabs.ai/tools/random-group-generator) | 1.4 | Prompt examples for AI group formation, not a dependable generator | constraints, basic-randomizer, ai-assisted |
| 305 | [Wordwall Random Team Generator Resource](https://wordwall.net/resource/37278876/random-team-generator) | 1.4 | A prebuilt Wordwall spin-wheel activity, not a real group generator | basic-randomizer |
| 306 | [DecisionMakerTool Team Picker](https://www.decisionmakertool.com/team-picker) | 1.3 | A visual picker page, not a real team generator | basic-randomizer |
| 307 | [Teach Starter Random Name Picker](https://www.teachstarter.com/us/widget/random-name-picker-us/) | 1.1 | Picking one student at a time, not generating groups | basic-randomizer |
| 308 | [RemagineAI Random Group Generator](https://remagineai.com/name-generator/random-group-generator) | 1 | Not recommended as a standalone group generator | basic-randomizer, ai-assisted |
| 309 | [Huqiu Random Group Generator](https://en.huqiu.com/random/random-group-generator.html) | 0.5 | Not recommended; page was inaccessible during review | basic-randomizer |

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
