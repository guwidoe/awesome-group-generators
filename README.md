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

Current export: **285 tools**, source revision **527**, exported **2026-06-03T10:41:23+00:00**.

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
| 6 | [Educatarea Random Group Generator](https://educatarea.com/random-group-generator/) | 4 | Teachers who need roles, restrictions, multiple pools, history, PDF, and print without an account | constraints, strong-exports |
| 7 | [Good-Enough Golfers](https://goodenoughgolfers.com/) | 4 | Simple social-golfer-style multi-round schedules | multi-round, constraints, privacy-friendly, strong-exports |
| 8 | [Grouper.school](https://grouper.school/) | 4 | Account-based classroom grouping with Google Classroom/Clever rosters and student attributes | constraints |
| 9 | [QuizQuestions.org Team Generator](https://www.quizquestions.org/team-generator) | 4 | Advanced no-account team generator with labels, locks, drag-and-drop, added teams, and exports | constraints, strong-exports |
| 10 | [Shuffly](https://shuffly.netlify.app/) | 4 | Skill- and gender-balanced random teams with strong free exports | constraints, strong-exports |
| 11 | [Team Shake](https://www.rhine-o.com/www/iphone-apps/team-shake/) | 4 | Mobile-first balanced team generation for teachers and coaches | constraints, strong-exports |
| 12 | [TeamMaker App](https://teammakerapp.vercel.app/) | 4 | Local, no-account team making with strong classroom presentation and exports | constraints, strong-exports |
| 13 | [Instructron Group Generator](https://instructron.com/tools/group-generator) | 3.9 | Teachers who want quick random groups with basic balancing and keep-apart rules | constraints, privacy-friendly, strong-exports |
| 14 | [BuddyMatcher](https://www.buddymatcher.co.uk/) | 3.8 | Teachers who need pairs/trios, local saved lists, and optional paid control features | constraints, privacy-friendly, strong-exports |
| 15 | [Calcbe Team Generator](https://calcbe.com/en/tools/team-generator/) | 3.8 | Privacy-conscious one-session random teams with simple constraints and strong exports | constraints, privacy-friendly, strong-exports |
| 16 | [Random Roster](https://randomroster.com/) | 3.8 | Teacher group generator with capability balance, preferences, history, and seating charts | constraints |
| 17 | [Randomify Team Generator](https://www.randomify.org/team-generator?entries=Alex%252CSam%252CJordan%252CCasey%252CRiley%252CMorgan&teams=2&size=3) | 3.8 | Well-rounded team generator with shareable parameters, captain mode, themed team names, copy, and CSV download | strong-exports |
| 18 | [RandomPicker Random Team Generator](https://random-picker.app/random-team-generator) | 3.8 | Advanced browser-side teams with CSV/TXT import, locks, exclusions, skills, copy, and TXT download | constraints |
| 19 | [UTEKAR Random Team Generator](https://utekar.com/text/random-team-generator/) | 3.8 | Advanced browser-side team generation with attributes, seed, exports, and multi-round repeat reduction | multi-round, constraints, strong-exports |
| 20 | [WebToolNexus Random Team Generator](https://webtoolnexus.com/tools/random-team-generator/) | 3.8 | Skill-aware random teams with balance report and text export | constraints, privacy-friendly |

## All reviewed tools

| Rank | Tool | Score | Useful for | Tags |
|---:|---|---:|---|---|
| 1 | [GroupMixer](https://www.groupmixer.app) | 4.7 | Almost every group generation usecase | multi-round, constraints, privacy-friendly, strong-exports |
| 2 | [ChatGPT Pro Extended Reasoning](https://chatgpt.com/plans/pro/) | 4.5 | Complex natural-language grouping drafts when cost and verification are acceptable | multi-round, constraints, strong-exports, ai-assisted |
| 3 | [Social Golfer Online](https://socialgolfer.online/) | 4.3 | Golf leagues, trips, tournaments, and other multi-round schedules where avoiding repeat pairings matters | multi-round, constraints, strong-exports |
| 4 | [Clever Groups](https://clevergroups.com/tryit) | 4.2 | Preference-based classroom, camp, event, and accommodation grouping | constraints, self-join, strong-exports |
| 5 | [ClassroomGroupGenerator.com](https://classroomgroupgenerator.com/) | 4.1 | Teachers who want browser-saved rosters, constraints, presentation mode, and classroom-tool integration | constraints, strong-exports |
| 6 | [Educatarea Random Group Generator](https://educatarea.com/random-group-generator/) | 4 | Teachers who need roles, restrictions, multiple pools, history, PDF, and print without an account | constraints, strong-exports |
| 7 | [Good-Enough Golfers](https://goodenoughgolfers.com/) | 4 | Simple social-golfer-style multi-round schedules | multi-round, constraints, privacy-friendly, strong-exports |
| 8 | [Grouper.school](https://grouper.school/) | 4 | Account-based classroom grouping with Google Classroom/Clever rosters and student attributes | constraints |
| 9 | [QuizQuestions.org Team Generator](https://www.quizquestions.org/team-generator) | 4 | Advanced no-account team generator with labels, locks, drag-and-drop, added teams, and exports | constraints, strong-exports |
| 10 | [Shuffly](https://shuffly.netlify.app/) | 4 | Skill- and gender-balanced random teams with strong free exports | constraints, strong-exports |
| 11 | [Team Shake](https://www.rhine-o.com/www/iphone-apps/team-shake/) | 4 | Mobile-first balanced team generation for teachers and coaches | constraints, strong-exports |
| 12 | [TeamMaker App](https://teammakerapp.vercel.app/) | 4 | Local, no-account team making with strong classroom presentation and exports | constraints, strong-exports |
| 13 | [Instructron Group Generator](https://instructron.com/tools/group-generator) | 3.9 | Teachers who want quick random groups with basic balancing and keep-apart rules | constraints, privacy-friendly, strong-exports |
| 14 | [BuddyMatcher](https://www.buddymatcher.co.uk/) | 3.8 | Teachers who need pairs/trios, local saved lists, and optional paid control features | constraints, privacy-friendly, strong-exports |
| 15 | [Calcbe Team Generator](https://calcbe.com/en/tools/team-generator/) | 3.8 | Privacy-conscious one-session random teams with simple constraints and strong exports | constraints, privacy-friendly, strong-exports |
| 16 | [Random Roster](https://randomroster.com/) | 3.8 | Teacher group generator with capability balance, preferences, history, and seating charts | constraints |
| 17 | [Randomify Team Generator](https://www.randomify.org/team-generator?entries=Alex%252CSam%252CJordan%252CCasey%252CRiley%252CMorgan&teams=2&size=3) | 3.8 | Well-rounded team generator with shareable parameters, captain mode, themed team names, copy, and CSV download | strong-exports |
| 18 | [RandomPicker Random Team Generator](https://random-picker.app/random-team-generator) | 3.8 | Advanced browser-side teams with CSV/TXT import, locks, exclusions, skills, copy, and TXT download | constraints |
| 19 | [UTEKAR Random Team Generator](https://utekar.com/text/random-team-generator/) | 3.8 | Advanced browser-side team generation with attributes, seed, exports, and multi-round repeat reduction | multi-round, constraints, strong-exports |
| 20 | [WebToolNexus Random Team Generator](https://webtoolnexus.com/tools/random-team-generator/) | 3.8 | Skill-aware random teams with balance report and text export | constraints, privacy-friendly |
| 21 | [Classroomscreen Group Maker](https://classroomscreen.com/app/template/widget-tutorials-tutorial-group-maker-v1) | 3.7 | Teachers already using Classroomscreen who want visual classroom groups, saved name lists, exclusions, and manual adjustment | constraints, privacy-friendly |
| 22 | [digtools Team Generator](https://tools.digrart.jp/en/team-gen) | 3.7 | Browser-side teams with skills, NG pairs, leaders, save/load, CSV, text, and image output | constraints, strong-exports |
| 23 | [Peon Inc Random Team Generator](https://www.peon-inc.net/community-tools/RandomTeamGenerator.html) | 3.7 | Local sports/team draft generator with pins, buddies, conflicts, and CSV roster import/export | constraints, privacy-friendly, strong-exports |
| 24 | [Randomizer.uk Create Groups](https://randomizer.uk/multicriteria-team) | 3.7 | Multi-criteria random groups with proof/share/export options | constraints, strong-exports |
| 25 | [Randraw Multicriteria Team](https://randraw.com/multicriteria-team) | 3.7 | No-account multicriteria grouping with pots, separation rules, and exports | constraints, privacy-friendly, strong-exports |
| 26 | [Spin With The Wheel Group Maker](https://spinwiththewheel.com/group-maker) | 3.7 | Advanced browser group maker with single/bulk entry, multiple assignment methods, copy, print, and text export | — |
| 27 | [SpinItWheel Team Generator](https://www.spinitwheel.com/team-generator.html) | 3.7 | Visual wheel-based team generator with custom names/colors, share, copy, and Excel export | — |
| 28 | [TeamSplit](https://teamsplit.net/) | 3.7 | Polished no-account team splitting with import/export, reps, and team names | privacy-friendly |
| 29 | [Zapadisk Team Generator](https://zapadisk.be/team-generator.html) | 3.7 | Balancing sport/player teams by level, gender, and multi-day attendance | constraints |
| 30 | [Zufallsgenerator Gruppen bilden](https://zufallsgenerator.de/gruppen-bilden) | 3.7 | German-speaking users who need random groups with pots, separation rules, fixed placements, and exports | constraints, strong-exports |
| 31 | [FreeRandomTools Random Team Generator](https://freerandomtools.org/random-team-generator/) | 3.6 | Sports-style teams with skill-balanced and captain modes, copy formats, history, and local state | constraints |
| 32 | [FussFreeTools Random Group Generator](https://www.fussfreetools.com/random-group-generator.html) | 3.6 | Classroom-oriented group generator with pairs/size/count modes, copy, fullscreen, absent exclusion, and repeat-pair lock option | — |
| 33 | [Genvalo Random Group Generator](https://www.genvalo.com/tools/random-group) | 3.6 | Clean random group generator with count/size modes and per-group copy buttons | — |
| 34 | [GroupEng](https://groupeng.org/) | 3.6 | Open-source command-line grouping with distribute, aggregate, cluster, and balance rules | constraints |
| 35 | [InstaGroups](https://instagroups.app/) | 3.6 | PE/coaching team generator with balancing, tournaments, analytics, and collaboration | constraints |
| 36 | [LiveReacting Random Team Generator](https://www.livereacting.com/tools/random-team-generator) | 3.6 | No-signup random teams with leaders, skill levels, custom names, and CSV/TXT export | constraints, strong-exports |
| 37 | [Picker Wheel Team Picker](https://pickerwheel.com/tools/random-team-generator/) | 3.6 | Visual live random grouping and self-join team picking | constraints, self-join, strong-exports |
| 38 | [Prompt2Tool Team Grouping Tool](https://prompt2tool.com/tools/productivity/team-grouping-tool) | 3.6 | Random teams with leader distribution and Excel export | constraints, privacy-friendly |
| 39 | [Toolgami Random Team Generator](https://toolgami.bildirchin.com/tool/random-team-generator) | 3.6 | Random or skill-based teams with CSV/JSON export | constraints, strong-exports |
| 40 | [Eenie Meenie Random Team Generator](https://eeniemeenie.photonbuilder.com/team-generator) | 3.5 | Browser-side teams with captain mode, skill ratings, and local saved groups | constraints |
| 41 | [EveryRandom Team Generator](https://everyrandom.com/team-generator) | 3.5 | Featureful random team generator with count/size modes, copy, download, shuffle, and history | — |
| 42 | [GroupMixes](https://groupmixes.com/group-generator) | 3.5 | Teachers who want quick mixed-ability classroom groups | constraints, strong-exports |
| 43 | [LessonKind Group Maker](https://lessonkind.com/tools/group-maker/) | 3.5 | Teacher group maker with local class list and keep-apart pairs | constraints |
| 44 | [PickerSpin Team Generator](https://pickerspin.co/team-generator/) | 3.5 | Polished team picker with paste/comma input, count/size modes, copy-all, and reshuffle | — |
| 45 | [Playpass Golf Schedule Maker](https://playpass.com/sports-software/golf-schedule-maker) | 3.5 | Golf rotating-partner and round-robin schedules | multi-round, constraints, strong-exports |
| 46 | [Writing in the Stream Smart Group Generator](https://writinginthestream.com/wp-content/uploads/2026/03/randomgroupgenerator.html) | 3.5 | Teacher-owned local HTML grouping with attendance, class storage, drag/drop, and JSON import/export | constraints, privacy-friendly |
| 47 | [GolfSoftware Play All Schedule Generator](https://www.golfsoftware.com/tools/schedule/playall.html) | 3.4 | Golf groups that need multi-event pairings from preset golfer counts and group sizes | multi-round, constraints, privacy-friendly |
| 48 | [MultiPicker Team Picker](https://multipicker.com/team-picker) | 3.4 | Simple teams where gender distribution, representatives, and custom team names matter | constraints |
| 49 | [RandomGroupGenerator.net](https://randomgroupgenerator.net/) | 3.4 | Polished one-off random groups with CSV/Excel-style exports | strong-exports |
| 50 | [SpacebarCount Team Generator](https://www.spacebarcount.com/randomizers/team-generator/) | 3.4 | Polished browser-local team cards with bench and dedupe options | privacy-friendly |
| 51 | [Strategic Group Maker](https://workspace.google.com/marketplace/app/strategic_group_maker/997854293694) | 3.4 | Google Sheets add-on for strategic classroom groups and Zoom breakout export | constraints, strong-exports |
| 52 | [TeamGenerator.net Team Generator](https://www.teamgenerator.net/team-generator) | 3.4 | Sports and game teams balanced by skill ratings and roles | constraints |
| 53 | [Toolora Team Generator](https://toolora.info/en/t/team-generator/) | 3.4 | Private browser-side random teams with copy and settings share | privacy-friendly |
| 54 | [AI225 Team Generator](https://tools.ai225.com/en/tools/team-generator/) | 3.3 | Browser-side random teams with import, exclude toggles, history, copy, and export | ai-assisted |
| 55 | [ClassInteractives Formgroup Creator](https://groupings.classinteractives.co.uk/) | 3.3 | UK-style form/class allocation using friends and must-avoid relationships | constraints, strong-exports |
| 56 | [CodersTool Random Group Generator](https://www.coderstool.com/random-group-generator) | 3.3 | Reusable random groups with seed, history, sharing, TXT/CSV, and saved lists | strong-exports |
| 57 | [DateRounds](https://daterounds.com/) | 3.3 | Small free speed-dating or networking rotation events | multi-round, constraints, self-join |
| 58 | [Lembog Random Group Generator](https://lembog.com/tools/random-group-generator) | 3.3 | Clean random group generator with quick group-count buttons and copy-all output | — |
| 59 | [MatchBalancer Volleyball Team Generator](https://matchbalancer.com/volleyball-team-generator) | 3.3 | Volleyball team balancing by skill, position, roster, and match history | constraints |
| 60 | [PickWinner Random Team Generator](https://pickwinner.tools/tools/random-team-generator) | 3.3 | Clean privacy-friendly random team cards with shareable URLs | privacy-friendly |
| 61 | [Random-Group-Generator.com](https://random-group-generator.com/) | 3.3 | Single-session browser grouping with copy/export/share controls and lightweight balance modes | constraints, strong-exports |
| 62 | [Sport Scheduler Pro Free Schedule Generator](https://sportschedulerpro.com/create) | 3.3 | Free round-robin team schedules with links and exports | multi-round, constraints, strong-exports |
| 63 | [WebRandom Random Team Generator](https://www.webrandom.com/) | 3.3 | No-account random teams with custom names, copy, text download, and share link | privacy-friendly |
| 64 | [Wooclap Team Picker](https://tool.wooclap.com/en/free-group-maker) | 3.3 | Polished simple random teams with strong export options | privacy-friendly, strong-exports |
| 65 | [Any One Will Do](https://anyonewilldo.com/) | 3.2 | Privacy-friendly browser-only random picker and group drafter | privacy-friendly |
| 66 | [DecisionFlip Random Team Generator](https://decisionflip.com/random-team-generator) | 3.2 | Skill-aware random team maker with saved configurations and copy output | constraints |
| 67 | [FastRounds](https://fastrounds.com/) | 3.2 | Small free speed-networking round rotation events | multi-round, constraints, self-join |
| 68 | [Flipiffy Random Group Generator](https://flipiffy.com/random-tools/group-generator/) | 3.2 | Basic random groups with leaders, exclusions, saved list, CSV, and copy | constraints, strong-exports |
| 69 | [Grouperapp.net](https://grouperapp.net/) | 3.2 | Google Classroom teachers who want paid group history and preferences | constraints, strong-exports |
| 70 | [Keamk](https://www.keamk.com/random-team-generator) | 3.2 | Random teams with basic gender or skill balancing | constraints, strong-exports |
| 71 | [PrepPanel Classroom Group Generator](https://preppanelclassroom.com/) | 3.2 | Chrome-extension classroom tool with ability-balanced groups and relationship rules | constraints |
| 72 | [PrintYourBrackets Round Robin Generator](https://www.printyourbrackets.com/round-robin-generator.php) | 3.2 | Tournament organizers who need printable round-robin schedules, pools, Excel export, and share links | multi-round, constraints, strong-exports |
| 73 | [RandomTeamBuilder.com](https://randomteambuilder.com/) | 3.2 | Visual random teams with drag-and-drop adjustment and exclusion-rule claims | constraints |
| 74 | [Raugen Random Team Generator](https://raugen.com/toolbox/random-team-generator) | 3.2 | Quick random teams with custom team names, copy-all output, basic stats, and local generation history | ai-assisted |
| 75 | [Slumpgenerator Random Team Generator](https://slumpgenerator.com/random-team-generator) | 3.2 | No-account team randomizer with paste input, group-count/size modes, optional names, and leaders | — |
| 76 | [TextGround Random Group Generator](https://www.textground.com/tools/random-group-generator/) | 3.2 | Simple group splitting with bulk import, reshuffle, copy, and download | — |
| 77 | [YTool Random Group Generator](https://ytool.net/group/) | 3.2 | Multilingual random group tool with paste input, copy, TXT export, and Excel export | — |
| 78 | [afreetools Smart Team Generator](https://afreetools.com/smart-team-generator) | 3.1 | Small smart-team experiments with skill, role, avoid-pair, and share-link controls | constraints |
| 79 | [AppSorteos Random Teams Generator](https://app-sorteos.com/en/apps/random-teams-generator) | 3.1 | Polished free random teams with leaders and share/export buttons | strong-exports |
| 80 | [FateFactory Team Splitter](https://www.fatefactory.org/en/team-splitter) | 3.1 | Ad-light random teams with file import, local templates, sharing, and QR output | privacy-friendly |
| 81 | [FlipACoinOnline Random Team Generator](https://flipacoinonline.com/random-team-generator/) | 3.1 | Random teams with CSV download and team label styles | strong-exports |
| 82 | [GenKit Random Group Generator](https://gen-kit.com/tools/random-group-generator/) | 3.1 | Browser-side random group generator with sample data, reshuffle, copy, share, and bookmarks | — |
| 83 | [Kalkulator Random Group Generator](https://kalkulator.com.ua/en/calculators/random-group-generator/) | 3.1 | Group division calculator with count/size modes, copy, print, statistics, and history | — |
| 84 | [Mate.tools Random Team Generator](https://mate.tools/random-team-generator) | 3.1 | Simple browser-side teams with by-count/by-size modes, organizer selection, and copy | — |
| 85 | [PickerKit Team Picker](https://pickerkit.com/team-picker) | 3.1 | Polished random teams with representatives, share, and save/load file controls | — |
| 86 | [Randomly Random Group Generator](https://randomly.group/random-group) | 3.1 | Random group generator with single entry, bulk import, file upload, copy/export claims, and multilingual UI | — |
| 87 | [RandTools Random Team Generator](https://randtools.com/random-team-generator) | 3.1 | Privacy-conscious basic random team splitting with copy output | privacy-friendly, basic-randomizer |
| 88 | [Shibutz Random Group Generator](https://www.shibutz.com/free-tools/random-groups) | 3.1 | Teacher-focused random groups with fixed-size or fixed-count modes | — |
| 89 | [Team Balancer Generic Team Balance](https://www.team-balancer.com/generic-team-balance) | 3.1 | Attribute-based team balancer for small manual rosters | constraints |
| 90 | [Toolnest Random Team Generator](https://lab.golamrabbani.org/generators/random-team-generator) | 3.1 | Privacy-conscious basic teams with team-count/team-size modes and copy output | — |
| 91 | [TurboToolkit Split List Into Groups](https://turboutilkit.com/splitlistintogroups/) | 3.1 | General list splitting with randomize, dedupe, sorting, CSV/JSON/text output, copy, and TXT download | strong-exports |
| 92 | [Utils.fun Random Grouping](https://utils.fun/random-group) | 3.1 | Chinese-language browser grouping with copy/download output | privacy-friendly |
| 93 | [WheelOfNames.net Team Picker](https://wheelofnames.net/team-picker) | 3.1 | Ad-supported team picker with skill/custom-name toggles and text export | constraints |
| 94 | [Begoodtool Smart Grouping Tool](https://begoodtool.com/smart-grouping/en) | 3 | Experimental rule-based grouping with tags, violations, drag/drop, and Excel export | constraints |
| 95 | [Betext Random Team Generator](https://betext.io/random-team-generator/) | 3 | Basic random teams with leaders and CSV/TXT/copy output | strong-exports |
| 96 | [Camp Chieflings TeamGen-360](https://chieflings.com/tools/teamgen-360/) | 3 | Team generator with leaders and random team names | — |
| 97 | [ChatGPT (Free Version)](https://chatgpt.com/) | 3 | Natural-language grouping when users are willing to verify the output | constraints, ai-assisted |
| 98 | [Chirag Mehta Team Maker](https://chir.ag/projects/team-maker/) | 3 | Lightweight random teams with editable team names and CSV output | strong-exports |
| 99 | [CinderGPT Random Team Generator](https://www.cindergpt.com/tools/random-team) | 3 | Quick random teams with copy/download/share and local browser processing claims | — |
| 100 | [Coda Random Team Generator Template](https://coda.io/@makon/random-team-generator) | 3 | Coda template for reusable random team generation with players, team selection, and team names tables | — |
| 101 | [ConverterPanda Random Group Generator](https://converterpanda.com/random-group-generator/) | 3 | Basic random groups with remaining-member handling, naming styles, stats, export, and print | — |
| 102 | [DecodeIt Random Team Generator](https://decodeit.app/en/randomizers/random-team-generator) | 3 | Polished browser-based random team splitter with upload, examples, and custom team names | — |
| 103 | [Diverse Group Generation](https://diverse-group-generation.vercel.app/) | 3 | Small attribute-balanced grouping experiments | constraints |
| 104 | [DJPlaner GroupGenerator](https://djplaner.github.io/GroupGenerator/) | 3 | Tiny GitHub Pages random group generator with save/load allocation controls | privacy-friendly |
| 105 | [EliteAI Tools Random Team Generator](https://eliteai.tools/tool/random-team-generator) | 3 | Random teams with captains and table/text/CSV output | ai-assisted |
| 106 | [FateWheel Team Generator](https://fatewheel.com/tools/team-generator) | 3 | Visual random team assignment with team-count/team-size modes | — |
| 107 | [InYourLeague Secret Santa Team Generator](https://tools.inyourleague.net/en/random-secret-santa-team-generator-group-size-exclusion-en/) | 3 | Secret Santa-style teams with min/max sizes and exclusion pairs | constraints |
| 108 | [JarvisBox Team Picker](https://tools.jarvisbox.app/pick/team-picker/) | 3 | Privacy-friendly one-page team splitting with copy/download | privacy-friendly |
| 109 | [Lekktura Random Name Picker & Group Maker](https://lekktura.com/tools/random-name-picker) | 3 | Classroom name picking plus basic random groups | strong-exports |
| 110 | [LetsRandomize Random Team Generator](https://letsrandomize.org/tools/random-team-generator/) | 3 | Fast browser-side team splits with copy/share, recent history, and random-captain mode | — |
| 111 | [MyAIUtility Team Generator](https://myaiutility.com/tools/team-generator/) | 3 | Simple team generator with import box, shuffle, copy, and manual move controls | — |
| 112 | [NotchTools Team Maker](https://notchtools.com/team-maker) | 3 | Simple team maker with pasted players, team count/size controls, and editable team names | — |
| 113 | [Pandos Team Generator](https://pandos.io/team-generator) | 3 | Guided team formation workflow when email/server processing is acceptable | constraints |
| 114 | [PartyPlay Team Generator](https://partyplay.games/en/team-generator/) | 3 | Casual party/classroom teams with paste, saved lists, captain mode, copy, and share | — |
| 115 | [Penguin Tools Team Generator](https://penguintools.net/en/team-generator) | 3 | Simple random teams with team-count or members-per-team mode | — |
| 116 | [PickRandom.online Random Team Generator](https://www.pickrandom.online/random-team) | 3 | Private cryptographic browser-side random teams with no account | privacy-friendly |
| 117 | [Quick Pick Team Generator](https://quickpick.tools/teams) | 3 | Simple random teams with optional skill balancing and share/fullscreen controls | constraints |
| 118 | [Randly Group Generator](https://randly.app/tools/group-generator) | 3 | Clean no-account random groups with multiple generated draws | privacy-friendly |
| 119 | [Ruletaa Random Team Generator](https://ruletaa.net/en/team-generator) | 3 | Browser-local random groups with dedupe and CSV/image download | strong-exports |
| 120 | [SpinnChoose Random Team Generator](https://spinnchoose.com/random-team-generator/) | 3 | Casual sports, gaming, and classroom team splits with list/bracket views | — |
| 121 | [SpinOfLuck Team Picker Wheel](https://www.spinofluck.com/team-picker) | 3 | Ad-free wheel-based team picking with pick counts, weights, saved rosters, and fullscreen | — |
| 122 | [SpreadsheetPlanet Random Group Generator](https://spreadsheetplanet.com/calculators/random-group-generator/) | 3 | Spreadsheet tutorial-site group calculator with count/size modes and copy output | — |
| 123 | [Utility Tools Random Team Generator](https://tools.futureapp.work/en/team-generator) | 3 | Basic browser-side random team splitting with quick team-count controls | basic-randomizer |
| 124 | [UtilityNestAI Team Generator](https://www.utilitynestai.com/team-generator) | 3 | Small team splits with individual entry, skill-balance option, custom names, share, and export | constraints, ai-assisted |
| 125 | [WheelPlay Team Picker Wheel](https://wheelplay.net/team-picker-wheel/) | 3 | Visual team picking with CSV export, representatives, and label/gender distribution options | constraints, strong-exports |
| 126 | [AllTools.dev Random Team Generator](https://alltools.dev/tools/random/random-team-generator/) | 2.9 | Crypto-random browser-side teams with print and share URL | — |
| 127 | [Classroom.Group Online Group Generator](https://classroom.group/online-group-generator) | 2.9 | Teachers who want a simple local web splitter and may later upgrade to the iOS Groups app | — |
| 128 | [DecideHub Team Generator](https://decidehub.app/team-generator/) | 2.9 | Sports-style two-to-six-team splits with copy and local saved rosters | privacy-friendly |
| 129 | [DecisionFlip Team Picker](https://decisionflip.com/team-picker) | 2.9 | Basic random teams with balanced/random/snake distribution modes | — |
| 130 | [FindUtils Random Picker / Team Mode](https://findutils.com/generate/random-picker/) | 2.9 | Privacy-leaning browser-side team splits inside a multipurpose random picker | — |
| 131 | [FunRandomPickers Random Team Generator](https://funrandompickers.com/teams/play) | 2.9 | Simple visual team cards with copy/share and fullscreen | — |
| 132 | [LDDGO Random Group Generator](https://www.lddgo.net/en/common/random-group) | 2.9 | Random group generator with TXT/XLSX import and TXT/XLSX downloads | strong-exports |
| 133 | [Microsoft Excel](https://www.microsoft.com/microsoft-365/excel) | 2.9 | Spreadsheet users who want local files or organization-controlled rosters | constraints, strong-exports |
| 134 | [QuickWheelSpin Team Picker](https://quickwheelspin.com/team-picker) | 2.9 | Visual basic team picking with copy/share-image outputs | — |
| 135 | [Random Letter Generator Group Generator](https://randomlettergenerator.app/group-generator) | 2.9 | Polished simple random groups with paste input, group count, copy, and basic stats | — |
| 136 | [RandomGroup.online](https://randomgroup.online/) | 2.9 | Multilingual basic random groups with copy, TXT, and Excel export | — |
| 137 | [RandomGroup.org Random Group Generator](https://randomgroup.org/) | 2.9 | No-account random groups with TXT/CSV export | strong-exports |
| 138 | [RapidWebApp Random Team Generator](https://www.rapidwebapp.com/random-team-generator) | 2.9 | Iframe-based random teams with custom names, leaders, copy, and image export | — |
| 139 | [Spinwheely Random Team Generator](https://spinwheely.com/random-team-generator) | 2.9 | Visual browser-side random teams with PDF, CSV, and text export | strong-exports |
| 140 | [TeamShufflr](https://teamshufflr.com/de/) | 2.9 | In-person workshops that want printable team cards rather than a normal result table | — |
| 141 | [TrumpExcel Random Team Generator](https://trumpexcel.com/tools/random-team-generator/) | 2.9 | Simple local random groups with spreadsheet-friendly output | strong-exports |
| 142 | [Wanglitou List Randomizer with Teams](https://www.wanglitou.com/list-randomizer/) | 2.9 | Seedable list randomization and simple team output with copy/TXT download | — |
| 143 | [Wheelpick Team Generator](https://wheelpick.app/team-generator) | 2.9 | Polished no-account browser-side random teams from a saved roster | — |
| 144 | [Zoom breakout room assignment](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062540) | 2.9 | Assigning live meeting participants directly into Zoom rooms | constraints |
| 145 | [AIOneTools Random Team Generator](https://aionetools.com/tools/picker/team-generator-wheel) | 2.8 | Simple browser-side random groups with shuffle and clean team cards | ai-assisted |
| 146 | [Cojoro Team Generator](https://cojoro.dedyn.io/RandTeamGen/index.html) | 2.8 | Standalone team generation with custom team names, leader selection, and multiple export formats if certificate warnings are acceptable | strong-exports |
| 147 | [DiceGameHub List Randomizer & Team Generator](https://dicegamehub.com/tools/list-randomizer) | 2.8 | Simple team generation with copy-all and image download | — |
| 148 | [Games by Marco Team Generator](https://teams.gamesbymarco.com/) | 2.8 | Minimal private-ish random teams with team-count or team-size mode | privacy-friendly, basic-randomizer |
| 149 | [Generate-Random.org Random Team Generator](https://generate-random.org/teams) | 2.8 | Simple random teams with strong text/CSV/JSON exports if hosted processing is acceptable | strong-exports |
| 150 | [Google Sheets](https://sheets.google.com/) | 2.8 | Spreadsheet users willing to build their own random grouping template | constraints, strong-exports |
| 151 | [GoOnlineTools Random Group Generator](https://goonlinetools.com/random-group-generator/) | 2.8 | Simple random groups with a modern UI, regenerate, statistics, and possible copy/download/share icons | constraints |
| 152 | [Gynzy Group Maker](https://www.gynzy.com/en/library/items/group-maker) | 2.8 | Interactive whiteboard random groups inside Gynzy | — |
| 153 | [InkPx Random Group Generator](https://inkpx.com/random-group-generator) | 2.8 | Simple group-count splits with remembered local input history | — |
| 154 | [Kordu Team Randomizer](https://kordu.tools/tools/gaming/team-randomizer/) | 2.8 | Clean browser-side random teams with re-roll and copy | — |
| 155 | [OnlTools Random Group Generator](https://onltools.com/random-group-generator) | 2.8 | Simple online random groups with by-size and by-number modes | — |
| 156 | [Paji Lots Team Grouping](https://toolset.marco79423.net/en/random-group-generator) | 2.8 | Browser-side random team grouping with CSPRNG | — |
| 157 | [Pradoy Random Team Generator](https://www.pradoy.com/random-team-generator) | 2.8 | Random teams with max-size mode and themed team names | — |
| 158 | [Random Group Generator Chrome Extension](https://chromewebstore.google.com/detail/random-group-generator/ahdimffafoiopfpheklpnkmepibagijl) | 2.8 | Chrome extension for Excel/CSV random groups | strong-exports |
| 159 | [Random Question Maker Random Team Generator](https://randomquestionmaker.com/more-tools/random-team-generator) | 2.8 | Basic team generator embedded in a question-site tools page | basic-randomizer |
| 160 | [Random Team Generator Android App](https://play.google.com/store/apps/details?id=com.argonremote.randomteamgenerator&hl=en) | 2.8 | Android team generator with group management and manual assignment | — |
| 161 | [Randomdo Random Group Generator](https://www.randomdo.com/tools/random-group-generator) | 2.8 | Minimal group-size randomizer with shuffle/reset and optional numbering | privacy-friendly, basic-randomizer |
| 162 | [RandomLists.top Team Generator](https://randomlists.top/team-generator/) | 2.8 | Simple large-list random teams with rename, upload, copy, and save | — |
| 163 | [RandomlyFun Random Team Generator](https://randomlyfun.app/tools/random-team-generator) | 2.8 | Casual 2–6 team splits with reroll/copy/share | — |
| 164 | [SpinPickOnline Team Picker](https://www.spinpickonline.com/team-picker) | 2.8 | Wheel-styled team generation with bulk add, regenerate, and share results | — |
| 165 | [The Decider Team Generator](https://www.the-decider.com/team-generator) | 2.8 | Quick random teams with by-count/by-size mode, reshuffle, and copy | — |
| 166 | [Thunderbit Random Team Generator](https://thunderbit.com/tool/random-team-generator) | 2.8 | Quick random teams with CSV download if hosted processing and marketing funnel are acceptable | strong-exports |
| 167 | [UD5 Random Team Generator](https://www.ud5.com/tool/random-team-generator) | 2.8 | Simple local team splits with cleanup, custom prefix, history, and export menu | — |
| 168 | [Vertex42 Random Group Generator Template](https://www.vertex42.com/ExcelTemplates/random-group-generator.html) | 2.8 | Spreadsheet users who want a downloadable Excel/Google Sheets random grouping template | strong-exports |
| 169 | [YesNoWheel Picker Random Team Generator](https://www.yesornowheelpicker.com/random-team-generator) | 2.8 | Basic browser-side random teams with bulk add and file import | — |
| 170 | [ClassDojo Group Maker](https://www.classdojo.com/toolkit/groupmaker/) | 2.7 | Teachers already using ClassDojo who want quick classroom groups | constraints |
| 171 | [CodeBeautify Random Team Generator](https://codebeautify.org/random-team-generator) | 2.7 | Ad-supported quick random teams with per-team copy/download controls | — |
| 172 | [Fun Group Names Random Team Generator](https://fungroupnames.com/random-team-generator/) | 2.7 | A content-site group randomizer if the embedded script works in your browser | — |
| 173 | [Group Assigner](https://group-assigner.com/) | 2.7 | Quick classroom or workshop groups with random team names and focus mode | — |
| 174 | [HyperToolbox Random Group Generator](https://hypertoolbox.com/en/randomGrouping) | 2.7 | Browser-side random grouping with group-count and members-per-group modes | — |
| 175 | [Nancy's Hearth Random Team Generator](https://teams.nancyshearth.com/) | 2.7 | Very simple random teams for virtual game nights | privacy-friendly, basic-randomizer |
| 176 | [Online Stopwatch Random Group Generator](https://www.online-stopwatch.com/random-group-generators/) | 2.7 | Classroom presentation-style random groups with animated reveals | strong-exports |
| 177 | [RandomTools.app Random Team Generator](https://randomtools.app/random-team-generator/) | 2.7 | Simple random teams with copy output and recent-draw history | — |
| 178 | [Spin Numbers Make Random Teams](https://www.spinumbers.com/make-random-teams/) | 2.7 | Quick local random team splits with copy-only output | basic-randomizer |
| 179 | [Super Teacher Tools Classroom Seating / Groups](https://www.superteachertools.us/instantclassroom/group-maker.php) | 2.7 | Teachers who want saved class rosters plus simple random classroom groups | — |
| 180 | [Teacher Commons Group Maker](https://teachercommons.com/classroom-management-and-productivity-tools/group-maker) | 2.7 | Minimal classroom group maker from a teacher-tool site | basic-randomizer |
| 181 | [UD5 Team Randomizer](https://www.ud5.com/tool/team-randomizer) | 2.7 | Simple team randomizer with count/size modes and copy results | — |
| 182 | [UtilityKit Random Team Generator](https://utilitykit.tools/random-team-generator) | 2.7 | Simple browser-side random squads on a low-friction page | privacy-friendly, basic-randomizer |
| 183 | [Vibox Random Team Generator](https://vibox.app/tools/fun/team.html) | 2.7 | Tiny no-account random team splitting with team-count or people-per-team mode | basic-randomizer |
| 184 | [VisualTimer Random Group Generator](https://visualtimer.com/tools/random-group-generator/) | 2.7 | Simple classroom random groups with reveal mode | privacy-friendly |
| 185 | [Webby Student Group Generator](https://webby.tools/student-group-generator/) | 2.7 | Quick classroom random groups with printable PDF output | — |
| 186 | [WordMint Random Group Generator](https://wordmint.com/random-group-generator) | 2.7 | Simple classroom groups with a copy-to-clipboard button | — |
| 187 | [CalculatingHub Random Team Generator](https://www.calculatinghub.com/en/randomizers/team-generator/) | 2.6 | Separator-based random team generator with duplicate removal | basic-randomizer |
| 188 | [Euan Riggans Team Builder](https://teambuilder.euanriggans.com/) | 2.6 | Tiny local random team splitting with save/load for the roster | privacy-friendly, basic-randomizer |
| 189 | [Fotify Speed Dating Event Planner](https://fotify.app/tools/speed-dating-event-planner/) | 2.6 | Quick speed-dating event timing plans | multi-round |
| 190 | [Games4esl Random Group Generator](https://games4esl.com/teacher-tools/random-group-generator/) | 2.6 | Teachers who want quick random classroom groups and a printable PDF | basic-randomizer |
| 191 | [RakkoTools Random Group Generator](https://en.rakko.tools/tools/59/) | 2.6 | Basic random groups with CSV export | strong-exports |
| 192 | [RandomHub Random Group Generator](https://randomhub.io/random-group-generator) | 2.6 | Minimal no-account random group splits with copy output | — |
| 193 | [RandomTools.io Team Generator](https://randomtools.io/teams-generator) | 2.6 | Ad-supported random team splitter with copy, print, and Excel export claims | — |
| 194 | [SpinTheWheel.io Team Draw Generator](https://spinthewheel.io/de/team-draw-generator) | 2.6 | Randomly pairing teams from two pots, not forming teams from people | — |
| 195 | [Teacher Toolset Random Group Maker](https://www.teacher-toolset.online/en/onlinetools/group-maker) | 2.6 | Classroom random groups when teachers can add/import a roster and export text | — |
| 196 | [TeachQuill Classroom Group Generator](https://teachquill.com/classroom-group-generator) | 2.6 | AI-assisted classroom grouping drafts from natural-language constraints | constraints, ai-assisted |
| 197 | [Toolita Team Picker](https://toolita.com/decision/team-picker/) | 2.6 | Casual random teams or fixed-size groups when ad/cookie load is acceptable | — |
| 198 | [Versakit Group Generator](https://versakit.net/generators/group) | 2.6 | Clean no-account random groups with copy/text download | privacy-friendly, basic-randomizer |
| 199 | [Wheel of Decision Team Generator](https://wheelofdecision.com/tool/team-generator/) | 2.6 | Simple team generation with history/statistics and local participant state | — |
| 200 | [AgentCalc Random Team Generator](https://agentcalc.com/random-team-generator) | 2.5 | Educational simple random teams with clear algorithm explanation | — |
| 201 | [Comment Picker Random Team Generator](https://commentpicker.com/team-generator.php) | 2.5 | Basic random teams with stronger copy/print/Excel output | strong-exports |
| 202 | [IOTools Random Team Generator](https://iotools.cloud/tool/random-generator/random-team-generator/) | 2.5 | Basic random teams with duplicate removal, file import, copy buttons, and a client-side workflow | — |
| 203 | [NameGenHub Name Group Generator](https://namegenhub.com/generator/name-group-generator/) | 2.5 | AI-assisted name grouping with natural-language directives and copy output | constraints, ai-assisted |
| 204 | [PiliApp Random Team Generator](https://pili.app/random/team/) | 2.5 | Localized simple team splitting with copy and saved session data | — |
| 205 | [Random Choice Generator Random Team Generator](https://randomchoicegenerator.com/random-team-generator/) | 2.5 | Very simple browser team splitting with shareable name-list URLs | basic-randomizer |
| 206 | [Random Team Generator GitHub App](https://randomteamgenerator.github.io/input.html) | 2.5 | Open-source, no-account random teams when privacy and simplicity matter more than features | privacy-friendly, basic-randomizer |
| 207 | [RandomGenerator.com.au Random Group Generator](https://www.randomgenerator.com.au/random-group-generator) | 2.5 | Basic target-group-size grouping with copy-all output | basic-randomizer |
| 208 | [RandomGroupGenerator.co](https://randomgroupgenerator.co/) | 2.5 | A clean, private, one-screen random split when exports do not matter | privacy-friendly, basic-randomizer |
| 209 | [RandoTools Random Team Generator](https://randotools.app/random-team-generator/) | 2.5 | Quick private-ish two-mode team splitting with per-team copy | basic-randomizer |
| 210 | [SpinTheNamePicker Team Generator](https://spinthenamepicker.com/pages/team-generator.html) | 2.5 | Quick sports/classroom team splits with equal-size or random-size mode | — |
| 211 | [The Word Finder Random Group Generator](https://www.thewordfinder.com/random-group-generator/) | 2.5 | Basic random groups with duplicate removal and custom group title fields | — |
| 212 | [A School Random Pair Generator](https://www.aschool.us/random/random-pair.php) | 2.4 | Very basic classroom random groups with max-size or group-count modes | — |
| 213 | [AddressGenerator Random Team Generator](https://addressgenerator.app/random-team-generator) | 2.4 | Basic ad-supported random team generator | basic-randomizer |
| 214 | [ChooseRandom Groups](https://chooserandom.com/groups) | 2.4 | Simple online group generator with comma/enter participant entry and optional public raffle workflow | basic-randomizer |
| 215 | [ClassTools24 Random Group Generator](https://classtools24.com/random-group-generator/) | 2.4 | Simple random groups with fullscreen display and basic click-to-copy behavior | basic-randomizer |
| 216 | [GIGAcalculator Random Team Generator](https://www.gigacalculator.com/randomizers/random-team-generator.php) | 2.4 | Quick random sports/team splits when per-team copy is enough | basic-randomizer |
| 217 | [Picker Online Wheel Team Picker](https://pickeronlinewheel.com/random-team-generator/) | 2.4 | Simple multi-step random team wheel with custom team-name positioning | basic-randomizer |
| 218 | [Random Generator Tools Random Group Generator](https://randomgeneratortools.com/random-group-generator/) | 2.4 | Tiny people-per-group random splitter with paste input | basic-randomizer |
| 219 | [Saroj Meher Random Group Generator](https://www.sarojmeher.com/tools/random-group-generator/) | 2.4 | Decorated random group output with color and image download options | — |
| 220 | [TA Easy Random Group](https://www.ta-easy.com/random-group/en) | 2.4 | Very simple no-account random groups when export and rules do not matter | basic-randomizer |
| 221 | [ToolPrime Random Team Generator](https://toolprime.com/random-team-generator) | 2.4 | Basic random teams with TXT download | basic-randomizer |
| 222 | [University of Edinburgh Group Allocator](https://static.sps.ed.ac.uk/groupallocator/) | 2.4 | Bare-bones random groups with CSV download | privacy-friendly, strong-exports, basic-randomizer |
| 223 | [Wheelzify Random Team Generator Wheel](https://www.wheelzify.com/random-team-generator/) | 2.4 | Presentation-style wheel-based team picking rather than one-click team splitting | — |
| 224 | [CommonTools Random Team Generator](https://www.commontools.org/tool/random-team-generator-124) | 2.3 | Basic random groups with TXT download | basic-randomizer |
| 225 | [Effie Random Group Generator](https://www.effie.pro/free-tools/random-group-generator) | 2.3 | A quick no-account two-or-more group split on Effie’s site | basic-randomizer |
| 226 | [Flippity Random Name Picker](https://www.flippity.net/v2/RandomNamePicker.htm) | 2.3 | Spreadsheet-backed classroom grouping and quick random teams | — |
| 227 | [GeneratorMix Random Team Generator](https://www.generatormix.com/random-team-generator) | 2.3 | Very basic random team splitter on a generator directory site | basic-randomizer |
| 228 | [Icebreaker Games Random Group Generator](https://icebreaker-games.org/random-group-generator) | 2.3 | Fast icebreaker groups when copy-only output is enough | — |
| 229 | [OpenEduCat AI Group Generator](https://openeducat.org/ai/tools/group-generator/) | 2.3 | Institutions already evaluating OpenEduCat, not quick public grouping | constraints, ai-assisted |
| 230 | [Random Name Picker Team Generator](https://www.randomnamepicker.net/team-generator) | 2.3 | Older team generator with name-set support and members-per-team input | basic-randomizer |
| 231 | [RandThings Random Team Generator](https://randthings.com/team-generator/) | 2.3 | No-frills random teams from pasted names | basic-randomizer |
| 232 | [SoulATools Random Picker / Team Picker](https://soulatools.com/random-picker/) | 2.3 | Casual team splitting inside a broader random-picker tool | — |
| 233 | [SpinWheelNames Random Team Generator](https://spinwheelnames.com/random-team-generator) | 2.3 | Wheel-based visual team assignment | basic-randomizer |
| 234 | [Warren Institute Random Groups Generator](https://warreninstitute.org/tools/random-groups-generator.html) | 2.3 | Bare-bones classroom/team random grouping | basic-randomizer |
| 235 | [Alien Fusion Generator Random Group Generator](https://alienfusiongenerator.com/random-group-generator/) | 2.2 | Basic random groups with copy/download on an ad-heavy page | basic-randomizer |
| 236 | [Applorium Random Group Generator](https://applorium.com/blog/random-group-generator/) | 2.2 | One-off random teams on a quiet, low-friction blog page | basic-randomizer |
| 237 | [FlexOS Random Group Generator](https://www.flexos.work/tools/random-group-generator-easy-fast-team-sorting) | 2.2 | Tiny comma-separated team splits on a future-of-work blog page | basic-randomizer |
| 238 | [GroupGenerator.top](https://www.groupgenerator.top/) | 2.2 | Trying a simple random split with experimental AI-style instructions | basic-randomizer, ai-assisted |
| 239 | [Homeschool of 1 Random Team Generator](https://www.homeschoolof1.com/random-team-generator/) | 2.2 | Embedded classroom/homeschool team splitter inside an ad-heavy article | — |
| 240 | [MiniWebTool Random Group Generator](https://miniwebtool.com/random-group-generator/) | 2.2 | Fast basic web groups with arbitrary group size or team count | — |
| 241 | [Online Stopwatch Random Magic Hat Group Generator](https://www.online-stopwatch.com/random-group-generators/random-magic-hat-group-generator/) | 2.2 | Classroom display novelty when animated sorting matters more than features | basic-randomizer |
| 242 | [PickJa Random Group Generator](https://pickja.com/tools/random-group-generator) | 2.2 | Quick no-account random groups with group-count or members-per-group mode | — |
| 243 | [QuizBreaker Team Generator](https://www.quizbreaker.com/team-generator) | 2.2 | Not recommended; basic space-separated random teams on a QuizBreaker marketing page | basic-randomizer |
| 244 | [Random Group Generator Chrome Extension](https://chromewebstore.google.com/detail/random-group-generator/njpbladpjfebkonnclifnjapepbigmbg?hl=en) | 2.2 | Chrome users who want a tiny local random-group popup | privacy-friendly, basic-randomizer |
| 245 | [Random Group Generator Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/random-group-generator/) | 2.2 | Firefox add-on for simple locally saved random groups | basic-randomizer |
| 246 | [RandomGenerate.io Random Team Generator](https://randomgenerate.io/random-team-generator) | 2.2 | Basic random teams on a general random-generator site | basic-randomizer |
| 247 | [RandomLists Random Team Generator](https://www.randomlists.com/team-generator) | 2.2 | Simple random teams from a pasted list | basic-randomizer |
| 248 | [RandomReady Random Group Generator](https://www.randomready.com/random-group-generator/) | 2.2 | Very simple random group splits | basic-randomizer |
| 249 | [Spin the Crocodile Team Picker](https://spinthecrocodile.com/team-picker) | 2.2 | Visual team-member picker for captains, roles, and small classroom/team selections | basic-randomizer |
| 250 | [UltimateSolver Random Groups](https://www.ultimatesolver.com/en/random-groups) | 2.2 | Privacy-conscious basic random groups with cryptographic server randomness | basic-randomizer |
| 251 | [HeySpinner](https://heyspinner.com/) | 2.1 | Public wheel spins when you want a visual random picker, not automatic team splitting | basic-randomizer |
| 252 | [iLeren Groepenmaker](https://ileren.be/apps/groepenmaker/index.html) | 2.1 | Dutch-speaking teachers who need a tiny no-account classroom splitter | privacy-friendly, basic-randomizer |
| 253 | [ImageCompresser Random Team Generator](https://imagecompresser.com/random-team-generator) | 2.1 | Basic random teams on an ad-supported utility site | basic-randomizer |
| 254 | [Mega Seating Plan Free Random Group Maker](https://www.seatingplan.com/tools/groupmaker) | 2.1 | Teachers who already use Seating Plan class lists | basic-randomizer |
| 255 | [Microapp Team Generator](https://microapp.io/team-generator/) | 2.1 | A minimal team split if you tolerate the consent wall | basic-randomizer |
| 256 | [My2lbox Random Group Generator](https://my2lbox.com/en/random-group-generator) | 2.1 | Tiny random or level-weighted groups when privacy/ad-tech tradeoffs are acceptable | constraints |
| 257 | [Random Teams Generator Android App](https://play.google.com/store/apps/details?id=com.dev.simonedipaolo.randomteamsgenerator&hl=en_US) | 2.1 | Simple Android random teams with generated names and flags | basic-randomizer |
| 258 | [RandomTeams.net](https://www.randomteams.net/) | 2.1 | Very simple team-size splitting with generated funny team names | basic-randomizer |
| 259 | [Repixify Random Team Generator](https://www.repixify.com/tools/random-team-generator) | 2.1 | Users who specifically want leader markers and custom team names and do not care about ad-tech | — |
| 260 | [1minusbeta Name Group Generator](https://1minusbeta.com/name-group-generator) | 2 | Ultra-minimal name grouping | privacy-friendly, basic-randomizer |
| 261 | [BestRandoms Random Team Generator](https://www.bestrandoms.com/random-team-generator) | 2 | Very basic ad-supported random group generation | basic-randomizer |
| 262 | [Breno Design Group Generator](https://www.breno.design/design-tool/group-generator) | 2 | Small rosters where you want to click-select names and make quick visual groups | basic-randomizer |
| 263 | [Calculate.co.nz Random Team Generator](https://www.calculate.co.nz/random-team-generator.php) | 2 | One-off random teams when page-only output is enough | basic-randomizer |
| 264 | [GoSpinWheel Random Group Generator](https://gospinwheel.com/random-group-generator) | 2 | Live wheel-based team assignment when presentation matters more than balanced rosters | basic-randomizer |
| 265 | [PinCalculator Random Group Generator](https://www.pincalculator.com/random-group-generator) | 2 | Tiny no-account random groups when one-by-one name entry is acceptable | basic-randomizer |
| 266 | [RandomCount Team Generator](https://randomcount.in/teamgenerator) | 2 | Tiny groups where adding names one at a time is acceptable | basic-randomizer |
| 267 | [Terrific Tools Random Group Generator](https://terrific.tools/randomizer/random-group-generator) | 2 | People who want a small browser tool with individual member entry and simple group-size controls | — |
| 268 | [MadeInText Random Group Generator](https://www.madeintext.com/random-group-generator/) | 1.9 | Very simple one-off random groups when privacy does not matter | basic-randomizer |
| 269 | [PureTables Random Group Generator](https://puretables.com/random-group-generator) | 1.9 | Very basic page-only random teams | basic-randomizer |
| 270 | [Sheffield Hallam TEL-e-vision Group Maker](https://teaching.shu.ac.uk/hwb/hwbtel/resources/TEL-e-vision/groupmaker.html) | 1.9 | Very quick no-account random classroom groups | basic-randomizer |
| 271 | [Web0 Random Team Generator](https://www.web0.it/random/team/en) | 1.9 | Ultra-minimal local random groups | privacy-friendly, basic-randomizer |
| 272 | [ClassTools Random Group Generator](https://www.classtools.net/random-group-generator/) | 1.8 | Very quick classroom group splits | basic-randomizer |
| 273 | [Musely Team Builder Generator](https://musely.ai/tools/team-builder-generator) | 1.8 | Not recommended unless Musely verification works for the user | constraints, ai-assisted |
| 274 | [Schule Dietmannsried Gruppen Generator](https://www.schule-dietmannsried.de/gruppen/) | 1.8 | Bare-bones German classroom group splitting | privacy-friendly, basic-randomizer |
| 275 | [Wheel Decide Random Team Generator](https://wheel-decide.com/randomteamgenerator.php) | 1.8 | Manual wheel-based team selection with add/remove segments | basic-randomizer |
| 276 | [Wheel of Names](https://wheelofnames.com/) | 1.8 | Random picking, raffles, and manual group-building workarounds | basic-randomizer |
| 277 | [AhaSlides Random Team Generator](https://ahaslides.com/features/random-team-generator/) | 1.7 | AhaSlides users who already want random-team generation inside an interactive presentation workflow | basic-randomizer |
| 278 | [BasedLabs Random Team Generator with Conditions](https://www.basedlabs.ai/tools/random-team-generator-with-conditions) | 1.6 | Prompt ideas for AI-assisted grouping, not a structured group generator | constraints, basic-randomizer, ai-assisted |
| 279 | [FreeTextTools Random Team Generator](https://www.freetexttools.org/random-team-generator/) | 1.6 | Feature-rich-looking team generator that did not produce visible teams in testing | — |
| 280 | [BasedLabs Random Group Generator](https://www.basedlabs.ai/tools/random-group-generator) | 1.4 | Prompt examples for AI group formation, not a dependable generator | constraints, basic-randomizer, ai-assisted |
| 281 | [Wordwall Random Team Generator Resource](https://wordwall.net/resource/37278876/random-team-generator) | 1.4 | A prebuilt Wordwall spin-wheel activity, not a real group generator | basic-randomizer |
| 282 | [DecisionMakerTool Team Picker](https://www.decisionmakertool.com/team-picker) | 1.3 | A visual picker page, not a real team generator | basic-randomizer |
| 283 | [Teach Starter Random Name Picker](https://www.teachstarter.com/us/widget/random-name-picker-us/) | 1.1 | Picking one student at a time, not generating groups | basic-randomizer |
| 284 | [RemagineAI Random Group Generator](https://remagineai.com/name-generator/random-group-generator) | 1 | Not recommended as a standalone group generator | basic-randomizer, ai-assisted |
| 285 | [Huqiu Random Group Generator](https://en.huqiu.com/random/random-group-generator.html) | 0.5 | Not recommended; page was inaccessible during review | basic-randomizer |

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
