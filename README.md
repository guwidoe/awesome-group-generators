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
- [`data/reviewed-out-of-scope.json`](./data/reviewed-out-of-scope.json) — reviewed adjacent resources that were deliberately not ranked
- [`data/reviewed-out-of-scope.schema.json`](./data/reviewed-out-of-scope.schema.json) — schema for the reviewed out-of-scope list
- [`METHODOLOGY.md`](./METHODOLOGY.md) — scoring rubric and review rules

Current export: **461 tools**, source revision **543**, exported **2026-06-03T15:10:33+00:00**.

## Related and out-of-scope resources

Sales-gated event platforms, enterprise matchmaking suites, coffee-chat apps, and app-store-only products are not mixed into the ranked list unless a self-serve generator, open demo, or runnable implementation can be reviewed. We track those adjacent products separately in [`data/related-commercial-platforms.json`](./data/related-commercial-platforms.json) so the main rankings stay limited to verifiable tools.

We also keep a reviewed-but-out-of-scope record in [`data/reviewed-out-of-scope.json`](./data/reviewed-out-of-scope.json) for LMS-native documentation, research/model references, unavailable repos, duplicate/fork variants, and adjacent products that were checked but not ranked.

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
| 4 | [TourneyCard Golf Randomizer](https://tourneycard.com/) | 4.3 | Social-golfer-style golf schedule optimizer with repeat diagnostics, partner preferences, and Excel/Markdown output | multi-round, constraints, strong-exports |
| 5 | [Clever Groups](https://clevergroups.com/tryit) | 4.2 | Preference-based classroom, camp, event, and accommodation grouping | constraints, self-join, strong-exports |
| 6 | [CATME Team-Maker](https://info.catme.org/features/team-maker/) | 4.1 | Criterion-based student team formation with weighted instructor survey criteria | constraints |
| 7 | [ClassroomGroupGenerator.com](https://classroomgroupgenerator.com/) | 4.1 | Teachers who want browser-saved rosters, constraints, presentation mode, and classroom-tool integration | constraints, strong-exports |
| 8 | [Group Balancer](https://groupbalancer.com/) | 4.1 | Reusable group generator with bags, multi-person slips, custom group sizes, editing, sharing, and history | constraints |
| 9 | [gruepr](https://github.com/gruepr/gruepr) | 4.1 | Open-source optimized student-team formation from survey/CSV data | constraints, strong-exports |
| 10 | [Educatarea Random Group Generator](https://educatarea.com/random-group-generator/) | 4 | Teachers who need roles, restrictions, multiple pools, history, PDF, and print without an account | constraints, strong-exports |
| 11 | [Good-Enough Golfers](https://goodenoughgolfers.com/) | 4 | Simple social-golfer-style multi-round schedules | multi-round, constraints, privacy-friendly, strong-exports |
| 12 | [GoTimer Group Generator](https://gotimer.org/classroom/group-generator) | 4 | Teacher group generator with seed, fullscreen, save, copy, and recent-repeat avoidance | — |
| 13 | [Grouper.school](https://grouper.school/) | 4 | Account-based classroom grouping with Google Classroom/Clever rosters and student attributes | constraints |
| 14 | [Halftime Team Pairings](https://halftime.coffee/tools/team-pairings) | 4 | Pair/group generator with recent-repeat avoidance, markdown/text copy, saved browser history, and saved rounds | constraints |
| 15 | [IIENSTITU Zufallsgruppen Generator](https://www.iienstitu.com/de/tools/random-group-generator) | 4 | German random group generator with keep-together/separate rules, level balancing, repeat-pair avoidance, leaders, saved lists, and CSV export | constraints |
| 16 | [Not Random Groups](https://notrandomgroups.com/) | 4 | Teacher group generator with random and keep-together/keep-apart modes plus optional Google Classroom import | constraints |
| 17 | [Optimal Group Generator](https://optimal-group-generator.com/) | 4 | Open-source repeat-avoidance group maker with previous records and no-login local storage | multi-round |
| 18 | [PickTeams.net](https://pickteams.net/) | 4 | Featureful team picker with skill/gender tags, locked players, CSV export, and share links | constraints, strong-exports |
| 19 | [QuizQuestions.org Team Generator](https://www.quizquestions.org/team-generator) | 4 | Advanced no-account team generator with labels, locks, drag-and-drop, added teams, and exports | constraints, strong-exports |
| 20 | [RandomTeamGenerator.io](https://randomteamgenerator.io/) | 4 | Featureful random team generator with leaders, keep-together groups, share, TXT/CSV export, and locale support | constraints, strong-exports |

## All reviewed tools

| Rank | Tool | Score | Useful for | Tags |
|---:|---|---:|---|---|
| 1 | [GroupMixer](https://www.groupmixer.app) | 4.7 | Almost every group generation usecase | multi-round, constraints, privacy-friendly, strong-exports |
| 2 | [ChatGPT Pro Extended Reasoning](https://chatgpt.com/plans/pro/) | 4.5 | Complex natural-language grouping drafts when cost and verification are acceptable | multi-round, constraints, strong-exports, ai-assisted |
| 3 | [Social Golfer Online](https://socialgolfer.online/) | 4.3 | Golf leagues, trips, tournaments, and other multi-round schedules where avoiding repeat pairings matters | multi-round, constraints, strong-exports |
| 4 | [TourneyCard Golf Randomizer](https://tourneycard.com/) | 4.3 | Social-golfer-style golf schedule optimizer with repeat diagnostics, partner preferences, and Excel/Markdown output | multi-round, constraints, strong-exports |
| 5 | [Clever Groups](https://clevergroups.com/tryit) | 4.2 | Preference-based classroom, camp, event, and accommodation grouping | constraints, self-join, strong-exports |
| 6 | [CATME Team-Maker](https://info.catme.org/features/team-maker/) | 4.1 | Criterion-based student team formation with weighted instructor survey criteria | constraints |
| 7 | [ClassroomGroupGenerator.com](https://classroomgroupgenerator.com/) | 4.1 | Teachers who want browser-saved rosters, constraints, presentation mode, and classroom-tool integration | constraints, strong-exports |
| 8 | [Group Balancer](https://groupbalancer.com/) | 4.1 | Reusable group generator with bags, multi-person slips, custom group sizes, editing, sharing, and history | constraints |
| 9 | [gruepr](https://github.com/gruepr/gruepr) | 4.1 | Open-source optimized student-team formation from survey/CSV data | constraints, strong-exports |
| 10 | [Educatarea Random Group Generator](https://educatarea.com/random-group-generator/) | 4 | Teachers who need roles, restrictions, multiple pools, history, PDF, and print without an account | constraints, strong-exports |
| 11 | [Good-Enough Golfers](https://goodenoughgolfers.com/) | 4 | Simple social-golfer-style multi-round schedules | multi-round, constraints, privacy-friendly, strong-exports |
| 12 | [GoTimer Group Generator](https://gotimer.org/classroom/group-generator) | 4 | Teacher group generator with seed, fullscreen, save, copy, and recent-repeat avoidance | — |
| 13 | [Grouper.school](https://grouper.school/) | 4 | Account-based classroom grouping with Google Classroom/Clever rosters and student attributes | constraints |
| 14 | [Halftime Team Pairings](https://halftime.coffee/tools/team-pairings) | 4 | Pair/group generator with recent-repeat avoidance, markdown/text copy, saved browser history, and saved rounds | constraints |
| 15 | [IIENSTITU Zufallsgruppen Generator](https://www.iienstitu.com/de/tools/random-group-generator) | 4 | German random group generator with keep-together/separate rules, level balancing, repeat-pair avoidance, leaders, saved lists, and CSV export | constraints |
| 16 | [Not Random Groups](https://notrandomgroups.com/) | 4 | Teacher group generator with random and keep-together/keep-apart modes plus optional Google Classroom import | constraints |
| 17 | [Optimal Group Generator](https://optimal-group-generator.com/) | 4 | Open-source repeat-avoidance group maker with previous records and no-login local storage | multi-round |
| 18 | [PickTeams.net](https://pickteams.net/) | 4 | Featureful team picker with skill/gender tags, locked players, CSV export, and share links | constraints, strong-exports |
| 19 | [QuizQuestions.org Team Generator](https://www.quizquestions.org/team-generator) | 4 | Advanced no-account team generator with labels, locks, drag-and-drop, added teams, and exports | constraints, strong-exports |
| 20 | [RandomTeamGenerator.io](https://randomteamgenerator.io/) | 4 | Featureful random team generator with leaders, keep-together groups, share, TXT/CSV export, and locale support | constraints, strong-exports |
| 21 | [Shuffly](https://shuffly.netlify.app/) | 4 | Skill- and gender-balanced random teams with strong free exports | constraints, strong-exports |
| 22 | [Team Shake](https://www.rhine-o.com/www/iphone-apps/team-shake/) | 4 | Mobile-first balanced team generation for teachers and coaches | constraints, strong-exports |
| 23 | [TeamMaker App](https://teammakerapp.vercel.app/) | 4 | Local, no-account team making with strong classroom presentation and exports | constraints, strong-exports |
| 24 | [Instructron Group Generator](https://instructron.com/tools/group-generator) | 3.9 | Teachers who want quick random groups with basic balancing and keep-apart rules | constraints, privacy-friendly, strong-exports |
| 25 | [Peerceptiv Group Formation](https://peerceptiv.zendesk.com/hc/en-us/articles/34657548219795-Group-Formation) | 3.9 | LMS-integrated optimized groups from survey, schedule, and topic preferences | constraints |
| 26 | [BuddyMatcher](https://www.buddymatcher.co.uk/) | 3.8 | Teachers who need pairs/trios, local saved lists, and optional paid control features | constraints, privacy-friendly, strong-exports |
| 27 | [Calcbe Team Generator](https://calcbe.com/en/tools/team-generator/) | 3.8 | Privacy-conscious one-session random teams with simple constraints and strong exports | constraints, privacy-friendly, strong-exports |
| 28 | [PickSpin Team Generator](https://pickspin.app/team-generator) | 3.8 | Polished team generator with templates, count/size modes, naming styles, text/CSV export, print, share, and local history | strong-exports |
| 29 | [PlayRez Tennis Round Robin Generator](https://playrez.com/tools/tennis-round-robin-generator) | 3.8 | No-signup tennis/social round-robin generator with PDF/share outputs | multi-round, strong-exports |
| 30 | [Random Roster](https://randomroster.com/) | 3.8 | Teacher group generator with capability balance, preferences, history, and seating charts | constraints |
| 31 | [Randomify Team Generator](https://www.randomify.org/team-generator?entries=Alex%252CSam%252CJordan%252CCasey%252CRiley%252CMorgan&teams=2&size=3) | 3.8 | Well-rounded team generator with shareable parameters, captain mode, themed team names, copy, and CSV download | strong-exports |
| 32 | [RandomPicker Random Team Generator](https://random-picker.app/random-team-generator) | 3.8 | Advanced browser-side teams with CSV/TXT import, locks, exclusions, skills, copy, and TXT download | constraints |
| 33 | [Sabura Student Group Maker](https://sabura.app/en/groups) | 3.8 | Classroom group maker with optional leaders, saved lists for signed-in users, reshuffle, and share | privacy-friendly |
| 34 | [Smart Group Maker](https://smartgroupmaker.com/) | 3.8 | Free visual group maker with random mode and attribute-balanced custom grouping | constraints |
| 35 | [Spinzoro Team Picker for Classrooms](https://spinzoro.com/en/team-picker-for-classrooms/) | 3.8 | Classroom team picker with count/size modes, strong-player marking, copy/share, Excel, and PDF export | constraints, strong-exports |
| 36 | [Teach Arcade Group Maker](https://www.teacharcade.com/tools/group-maker.html) | 3.8 | Teacher group maker with repeat-avoidance history, print/share, and pairing records | — |
| 37 | [Team Randomizer Classroom Generator](https://team-randomizer.com/random-team-generator-for-classroom) | 3.8 | Classroom team randomizer with participant/team uploads, seed, CSV, screenshot, and sharing | strong-exports |
| 38 | [TeamMixer](https://www.team-mixer.com/) | 3.8 | Korean AI-assisted team builder with tiers, positions, presets, and no-server-data claim | constraints, ai-assisted |
| 39 | [UTEKAR Random Team Generator](https://utekar.com/text/random-team-generator/) | 3.8 | Advanced browser-side team generation with attributes, seed, exports, and multi-round repeat reduction | multi-round, constraints, strong-exports |
| 40 | [WebToolNexus Random Team Generator](https://webtoolnexus.com/tools/random-team-generator/) | 3.8 | Skill-aware random teams with balance report and text export | constraints, privacy-friendly |
| 41 | [BracketMaker.app Round Robin](https://bracketmaker.app/round-robin/) | 3.7 | Web round-robin tournament maker for singles, doubles, mixed doubles, and teams | multi-round, strong-exports |
| 42 | [CedarWater Visibly Random](https://cedarwater.net/visiblyrandom/) | 3.7 | Teacher-oriented visibly random group maker with smart roster parsing, subjects, fullscreen, and roster save/download | privacy-friendly |
| 43 | [Classroomscreen Group Maker](https://classroomscreen.com/app/template/widget-tutorials-tutorial-group-maker-v1) | 3.7 | Teachers already using Classroomscreen who want visual classroom groups, saved name lists, exclusions, and manual adjustment | constraints, privacy-friendly |
| 44 | [digtools Team Generator](https://tools.digrart.jp/en/team-gen) | 3.7 | Browser-side teams with skills, NG pairs, leaders, save/load, CSV, text, and image output | constraints, strong-exports |
| 45 | [MiniBreaks Squad Shuffle](https://minibreaks.io/apps/squad-shuffle) | 3.7 | Polished group shuffler with min/max/#groups modes, copy, print, share, editable links, and app chaining | — |
| 46 | [Peon Inc Random Team Generator](https://www.peon-inc.net/community-tools/RandomTeamGenerator.html) | 3.7 | Local sports/team draft generator with pins, buddies, conflicts, and CSV roster import/export | constraints, privacy-friendly, strong-exports |
| 47 | [Pickleheads Round Robin](https://www.pickleheads.com/round-robin) | 3.7 | Pickleball round robin and rotating-partner event tool | multi-round, self-join |
| 48 | [Randomizer.uk Create Groups](https://randomizer.uk/multicriteria-team) | 3.7 | Multi-criteria random groups with proof/share/export options | constraints, strong-exports |
| 49 | [RandomSelect Group Maker](https://randomselect.net/en/group-maker/) | 3.7 | Featureful group maker with count/size modes, AI fill, list save/load, share, and export | ai-assisted |
| 50 | [Randraw Multicriteria Team](https://randraw.com/multicriteria-team) | 3.7 | No-account multicriteria grouping with pots, separation rules, and exports | constraints, privacy-friendly, strong-exports |
| 51 | [Shuffly.eu](https://shuffly.eu/) | 3.7 | Productized balanced team generator with skill/gender balance, imports, exports, saved setups, and subscriptions | constraints |
| 52 | [Spin With The Wheel Group Maker](https://spinwiththewheel.com/group-maker) | 3.7 | Advanced browser group maker with single/bulk entry, multiple assignment methods, copy, print, and text export | — |
| 53 | [SpinItWheel Team Generator](https://www.spinitwheel.com/team-generator.html) | 3.7 | Visual wheel-based team generator with custom names/colors, share, copy, and Excel export | — |
| 54 | [SpinVibe Teachers](https://spinvibe.io/teachers/) | 3.7 | Teacher-focused classroom spinner, random group maker, speaker order, no-repeat picking, and projector mode | privacy-friendly |
| 55 | [TeamSplit](https://teamsplit.net/) | 3.7 | Polished no-account team splitting with import/export, reps, and team names | privacy-friendly |
| 56 | [VMaths Générateur Groupes Aléatoires Élèves](https://www.vmaths.fr/apps/generateur-groupes-aleatoires-eleves.html) | 3.7 | French student group generator with manual/CSV import, group count/size modes, keep-together constraints, and CSV export | constraints, strong-exports |
| 57 | [Zapadisk Team Generator](https://zapadisk.be/team-generator.html) | 3.7 | Balancing sport/player teams by level, gender, and multi-day attendance | constraints |
| 58 | [Zufallsgenerator Gruppen bilden](https://zufallsgenerator.de/gruppen-bilden) | 3.7 | German-speaking users who need random groups with pots, separation rules, fixed placements, and exports | constraints, strong-exports |
| 59 | [Batch Group Generator](https://batch.basith.me/) | 3.6 | Minimal aesthetic group generator with team size, prefix, extras options, suspense mode, drag/drop, and download | privacy-friendly |
| 60 | [FreeRandomTools Random Team Generator](https://freerandomtools.org/random-team-generator/) | 3.6 | Sports-style teams with skill-balanced and captain modes, copy formats, history, and local state | constraints |
| 61 | [FussFreeTools Random Group Generator](https://www.fussfreetools.com/random-group-generator.html) | 3.6 | Classroom-oriented group generator with pairs/size/count modes, copy, fullscreen, absent exclusion, and repeat-pair lock option | — |
| 62 | [Genvalo Random Group Generator](https://www.genvalo.com/tools/random-group) | 3.6 | Clean random group generator with count/size modes and per-group copy buttons | — |
| 63 | [GroupEng](https://groupeng.org/) | 3.6 | Open-source command-line grouping with distribute, aggregate, cluster, and balance rules | constraints |
| 64 | [InstaGroups](https://instagroups.app/) | 3.6 | PE/coaching team generator with balancing, tournaments, analytics, and collaboration | constraints |
| 65 | [Lazy Cat Tools Random Team Generator](https://lazycattools.com/tools/random-team-generator/) | 3.6 | Random team generator with upload, random names, reshuffle, share, copy, and print | — |
| 66 | [LeagueLobster Round Robin Generator](https://scheduler.leaguelobster.com/round-robin-generator/) | 3.6 | Sports league round-robin scheduler with teams, games, weeks, scores, standings, and CSV export | multi-round, strong-exports |
| 67 | [LiveReacting Random Team Generator](https://www.livereacting.com/tools/random-team-generator) | 3.6 | No-signup random teams with leaders, skill levels, custom names, and CSV/TXT export | constraints, strong-exports |
| 68 | [Picker Wheel Team Picker](https://pickerwheel.com/tools/random-team-generator/) | 3.6 | Visual live random grouping and self-join team picking | constraints, self-join, strong-exports |
| 69 | [Prompt2Tool Team Grouping Tool](https://prompt2tool.com/tools/productivity/team-grouping-tool) | 3.6 | Random teams with leader distribution and Excel export | constraints, privacy-friendly |
| 70 | [Rise Random Team Generator](https://rise.global/tools/random-team-generator/) | 3.6 | Polished random team generator with count/size modes, copy, image export, and share links | — |
| 71 | [Réparticlasse](https://shenriot.forge.apps.education.fr/reparticlasse) | 3.6 | French education group distributor with gender mix, level balancing, avatars, save/restore, and Scoregroupe mode | constraints, privacy-friendly |
| 72 | [SnappyWords Random Group Generator](https://www.snappywords.com/random-generators/random-group-generator) | 3.6 | Group generator with count/size modes, leader options, image download, and CSV | strong-exports |
| 73 | [Toolgami Random Team Generator](https://toolgami.bildirchin.com/tool/random-team-generator) | 3.6 | Random or skill-based teams with CSV/JSON export | constraints, strong-exports |
| 74 | [ToolV Team Generator](https://toolv.com/en/app/team-generator) | 3.6 | Multi-mode browser-local team, pair, role, and seating generator | privacy-friendly |
| 75 | [AttentionFlow Random Group Generator](https://www.attentionflow.net/en/tools/random/random-group-generator) | 3.5 | Local-browser group generator with CSV/Excel import/export claims and fair mode | privacy-friendly |
| 76 | [BasicFreeTools Random Student Group Generator](https://basicfreetools.com/random-student-group-generator/) | 3.5 | Privacy-friendly student group generator with absent exclusions, reshuffle history, copy, and print | privacy-friendly |
| 77 | [BestRandom Random Team Generator](https://bestrandom.net/random-team-generator) | 3.5 | Seeded random team generator with copy/share/reroll controls | — |
| 78 | [Eenie Meenie Random Team Generator](https://eeniemeenie.photonbuilder.com/team-generator) | 3.5 | Browser-side teams with captain mode, skill ratings, and local saved groups | constraints |
| 79 | [EveryRandom Team Generator](https://everyrandom.com/team-generator) | 3.5 | Featureful random team generator with count/size modes, copy, download, shuffle, and history | — |
| 80 | [FlameAI Random Team Generator](https://www.flameai.net/tools/random-team) | 3.5 | Privacy-framed random team splitter with count/size modes, copy, download, and share | ai-assisted |
| 81 | [GroupMixes](https://groupmixes.com/group-generator) | 3.5 | Teachers who want quick mixed-ability classroom groups | constraints, strong-exports |
| 82 | [LessonKind Group Maker](https://lessonkind.com/tools/group-maker/) | 3.5 | Teacher group maker with local class list and keep-apart pairs | constraints |
| 83 | [OnlineRadDraaien Groepjesmaker](https://onlineraddraaien.nl/groepjesmaker/) | 3.5 | Dutch group maker with count/size modes, copy, CSV export, and sharing | strong-exports |
| 84 | [PickerSpin Team Generator](https://pickerspin.co/team-generator/) | 3.5 | Polished team picker with paste/comma input, count/size modes, copy-all, and reshuffle | — |
| 85 | [Playpass Golf Schedule Maker](https://playpass.com/sports-software/golf-schedule-maker) | 3.5 | Golf rotating-partner and round-robin schedules | multi-round, constraints, strong-exports |
| 86 | [RandoFox Random Team Generator](https://randofox.com/generators/random-teams) | 3.5 | Polished random team generator with secure randomness claims and copy controls | — |
| 87 | [RandomlyFun Random Pair Generator](https://randomlyfun.app/tools/random-pair-generator) | 3.5 | Fast random partner/pair generator with odd-person handling, copy, and share | — |
| 88 | [RandomTeamMaker.click](https://randomteammaker.click/) | 3.5 | Private in-browser pair/group generator with group-size and leftovers policies | privacy-friendly |
| 89 | [RobinDraw](https://robindraw.com/generator) | 3.5 | Instant browser round-robin schedule generator with CSV/PDF/share/live outputs | multi-round, strong-exports |
| 90 | [TheToolApp Team Generator](https://thetoolapp.com/generators/team-generator/) | 3.5 | Modern team generator with paste, count/size modes, captains, colors, and drag/drop examples | — |
| 91 | [ToolsZone Random Team Generator](https://www.toolszone.net/en/tools/random-team-generator) | 3.5 | Polished random team generator with count/size modes, regenerate, and copy-all output | — |
| 92 | [Writing in the Stream Smart Group Generator](https://writinginthestream.com/wp-content/uploads/2026/03/randomgroupgenerator.html) | 3.5 | Teacher-owned local HTML grouping with attendance, class storage, drag/drop, and JSON import/export | constraints, privacy-friendly |
| 93 | [AlhazApp Group Generator](https://alhazapp.com/en/groups) | 3.4 | Random group splitter with optional group heads, reshuffle, share, and saved-list account option | — |
| 94 | [Classroom Toolkit Group Generator](https://classroomtoolkit.co.uk/group-generator) | 3.4 | Privacy-friendly classroom group generator with saved list and count/size modes | privacy-friendly |
| 95 | [Decidable Team Divider](https://decidable-tools.com/en/team-divider) | 3.4 | Team divider with single/bulk add, leader support, and re-division | — |
| 96 | [GetRandomNumber Random Team Generator](https://www.getrandomnumber.com/team-generator/) | 3.4 | Advanced team generator with save/load lists, size bounds, seed, balance mode, history, copy, and text export claims | — |
| 97 | [GolfSoftware Play All Schedule Generator](https://www.golfsoftware.com/tools/schedule/playall.html) | 3.4 | Golf groups that need multi-event pairings from preset golfer counts and group sizes | multi-round, constraints, privacy-friendly |
| 98 | [Groupformer](https://groupformer.com/) | 3.4 | Danish group former for repeated groups with gender/min-same-gender and host rotation use cases | — |
| 99 | [GroupGuru Online](https://www.groupguruonline.com/) | 3.4 | Organizer-led classroom/activity group maker with participant join codes and criteria-based grouping | constraints, self-join |
| 100 | [Kuakua Random Group Generator](https://kuakua.app/tools/random-group-generator) | 3.4 | Polished random group generator with count/size modes, reshuffle, and copy results | — |
| 101 | [LoCo Disc Golf Team Generator](https://www.locodiscgolf.com/teams/) | 3.4 | Disc-golf team generator with team-size mode, output format choice, reset, and copy | privacy-friendly |
| 102 | [MultiPicker Team Picker](https://multipicker.com/team-picker) | 3.4 | Simple teams where gender distribution, representatives, and custom team names matter | constraints |
| 103 | [Randomara Classroom Group Generator](https://randomara.com/random-team-generator/for-classroom/) | 3.4 | Classroom random team generator with copy and fullscreen controls | — |
| 104 | [RandomGroupGenerator.net](https://randomgroupgenerator.net/) | 3.4 | Polished one-off random groups with CSV/Excel-style exports | strong-exports |
| 105 | [Sorteio Random Team Generator](https://sorteio.com/random-team-generator) | 3.4 | Random team generator with team-count/participants-per-team modes, leaders, and copy result | — |
| 106 | [SpacebarCount Team Generator](https://www.spacebarcount.com/randomizers/team-generator/) | 3.4 | Polished browser-local team cards with bench and dedupe options | privacy-friendly |
| 107 | [SpinRandomTool Team Generator](https://spinrandomtool.com/team-generator/) | 3.4 | Local browser team generator with presets, history, copy, and no-upload claim | privacy-friendly |
| 108 | [Strategic Group Maker](https://workspace.google.com/marketplace/app/strategic_group_maker/997854293694) | 3.4 | Google Sheets add-on for strategic classroom groups and Zoom breakout export | constraints, strong-exports |
| 109 | [TeamGenerator.net Team Generator](https://www.teamgenerator.net/team-generator) | 3.4 | Sports and game teams balanced by skill ratings and roles | constraints |
| 110 | [TimeTiki Group Generator](https://timetiki.com/group-generator/) | 3.4 | Group-size generator with list utilities, copy, recent groups, and history | — |
| 111 | [Toolora Team Generator](https://toolora.info/en/t/team-generator/) | 3.4 | Private browser-side random teams with copy and settings share | privacy-friendly |
| 112 | [TXToolbox Smart Team Splitter](https://www.txtoolbox.com/tool/team-splitter) | 3.4 | Balanced team splitter with skill levels and greedy balancing algorithm | constraints |
| 113 | [VMaths Générateur d’Équipes Aléatoires](https://www.vmaths.fr/apps/generateur-equipes-aleatoires.html) | 3.4 | French random team generator with TXT/CSV import, 2-20 teams, copy controls, and Fisher-Yates documentation | — |
| 114 | [AI225 Team Generator](https://tools.ai225.com/en/tools/team-generator/) | 3.3 | Browser-side random teams with import, exclude toggles, history, copy, and export | ai-assisted |
| 115 | [Calculation Support Random Group Generator](https://www.calculation.support/en/work-school/random-group-generator) | 3.3 | Random group generator with placeholders, file import, and Excel download | — |
| 116 | [ClassInteractives Formgroup Creator](https://groupings.classinteractives.co.uk/) | 3.3 | UK-style form/class allocation using friends and must-avoid relationships | constraints, strong-exports |
| 117 | [Clock Buddies Generator](https://clockbuddies.skillsconverged.com/) | 3.3 | Training/classroom clock-buddies partner generator with duplicate checks and themed labels | — |
| 118 | [CodersTool Random Group Generator](https://www.coderstool.com/random-group-generator) | 3.3 | Reusable random groups with seed, history, sharing, TXT/CSV, and saved lists | strong-exports |
| 119 | [DateRounds](https://daterounds.com/) | 3.3 | Small free speed-dating or networking rotation events | multi-round, constraints, self-join |
| 120 | [DRAW-LOTS Team Generator](https://www.draw-lots.com/teams-generate/) | 3.3 | Team generator with seed/skill seeding controls, group sizing, and configurable picking | constraints |
| 121 | [FreeClassroomTools Group Generator](https://www.freeclassroomtools.com/tools/group-generator) | 3.3 | Teacher-focused random group generator with reshuffle and classroom display styling | privacy-friendly |
| 122 | [FreeToolly Random Group Picker](https://freetoolly.com/en/tools/random-group-picker) | 3.3 | Random group picker with count/size modes, leader/vice-leader assignment, and CSV export | — |
| 123 | [Lembog Random Group Generator](https://lembog.com/tools/random-group-generator) | 3.3 | Clean random group generator with quick group-count buttons and copy-all output | — |
| 124 | [MatchBalancer Volleyball Team Generator](https://matchbalancer.com/volleyball-team-generator) | 3.3 | Volleyball team balancing by skill, position, roster, and match history | constraints |
| 125 | [PickWinner Random Team Generator](https://pickwinner.tools/tools/random-team-generator) | 3.3 | Clean privacy-friendly random team cards with shareable URLs | privacy-friendly |
| 126 | [QuickRandomizer Random Team Generator](https://www.quickrandomizer.com/random-team-generator) | 3.3 | Modern Fisher-Yates team generator with copy-all and history | — |
| 127 | [RandAnimal Random Group Generator](https://randanimal.com/random-group-generator.html) | 3.3 | Random group generator with title, find, save, and print controls | — |
| 128 | [Random Media Hub Random Team Generator](https://www.randommediahub.com/random-team-generator) | 3.3 | Clean random team generator with count/size modes, quick team counts, shuffle, and copy | privacy-friendly |
| 129 | [Random-Group-Generator.com](https://random-group-generator.com/) | 3.3 | Single-session browser grouping with copy/export/share controls and lightweight balance modes | constraints, strong-exports |
| 130 | [Random.GG Team Generator](https://www.random.gg/team-generator/en) | 3.3 | Character-themed team generator with API access | — |
| 131 | [Randommer Random Team Generator](https://randommer.com/random-team-generator/) | 3.3 | Random team generator with duplicate removal, split-by-space, copy, and text download | privacy-friendly |
| 132 | [RandomOS Group Generator](https://randomos.co.uk/tools/group-generator/) | 3.3 | Clean random group generator with count/max-size modes and share link | privacy-friendly |
| 133 | [Spin of Wheel Team Generator](https://spinofwheel.com/team-generator) | 3.3 | Polished team generator with copy-all and balanced-size claims | — |
| 134 | [Sport Scheduler Pro Free Schedule Generator](https://sportschedulerpro.com/create) | 3.3 | Free round-robin team schedules with links and exports | multi-round, constraints, strong-exports |
| 135 | [WebRandom Random Team Generator](https://www.webrandom.com/) | 3.3 | No-account random teams with custom names, copy, text download, and share link | privacy-friendly |
| 136 | [Wooclap Team Picker](https://tool.wooclap.com/en/free-group-maker) | 3.3 | Polished simple random teams with strong export options | privacy-friendly, strong-exports |
| 137 | [Any One Will Do](https://anyonewilldo.com/) | 3.2 | Privacy-friendly browser-only random picker and group drafter | privacy-friendly |
| 138 | [AnyOnlineTool Group Generator Tool](https://anyonlinetool.com/en/tool/group-generator-tool) | 3.2 | Credit-based group generator with copy, CSV, PDF, API, and embed controls | strong-exports |
| 139 | [ClassroomTools.app Group Maker](https://www.classroomtools.app/tools/group-maker?names=Alice%2CBob%2CCharlie%2CDiana%2CEmma%2CFrank%2CGrace%2CHenry&groups=2) | 3.2 | Free no-tracking teacher group maker with URL-prefill and embed controls | privacy-friendly |
| 140 | [ClassSeats](https://app.classseats.app/) | 3.2 | Teacher classroom-management app with local class files, student import, seating, attendance, and group generation | privacy-friendly |
| 141 | [DecisionFlip Random Team Generator](https://decisionflip.com/random-team-generator) | 3.2 | Skill-aware random team maker with saved configurations and copy output | constraints |
| 142 | [Der Zufallsgenerator Gruppen Zufall](https://derzufallsgenerator.de/gruppen-zufall) | 3.2 | German random group/team generator with group names and group-leader options | — |
| 143 | [DigitaleTools Groepjesmaker](https://digitaletools.nl/tools/groepjesmaker/) | 3.2 | Dutch classroom group maker with count/participants modes and sharing | — |
| 144 | [FastRounds](https://fastrounds.com/) | 3.2 | Small free speed-networking round rotation events | multi-round, constraints, self-join |
| 145 | [Flipiffy Random Group Generator](https://flipiffy.com/random-tools/group-generator/) | 3.2 | Basic random groups with leaders, exclusions, saved list, CSV, and copy | constraints, strong-exports |
| 146 | [Grouperapp.net](https://grouperapp.net/) | 3.2 | Google Classroom teachers who want paid group history and preferences | constraints, strong-exports |
| 147 | [Groupify.it](https://groupify.it/) | 3.2 | Classroom peer-group tool with roster upload, sex field, group-size/count modes, and animation controls | — |
| 148 | [Keamk](https://www.keamk.com/random-team-generator) | 3.2 | Random teams with basic gender or skill balancing | constraints, strong-exports |
| 149 | [ParTeeOf18 Randomizer](https://parteeof18.com/randomizer/) | 3.2 | Productized golf pairing randomizer with random/manual/handicap/AB/ABCD and multi-round league ambitions | constraints |
| 150 | [PrepPanel Classroom Group Generator](https://preppanelclassroom.com/) | 3.2 | Chrome-extension classroom tool with ability-balanced groups and relationship rules | constraints |
| 151 | [PrintYourBrackets Round Robin Generator](https://www.printyourbrackets.com/round-robin-generator.php) | 3.2 | Tournament organizers who need printable round-robin schedules, pools, Excel export, and share links | multi-round, constraints, strong-exports |
| 152 | [Pudone Random Grouper](https://pudone.com/random-grouper/) | 3.2 | Privacy-first random group generator with count/size modes, custom group names, animation, copy, and download claims | — |
| 153 | [RandomPickerTool Team Generator](https://randompickertool.com/team-generator) | 3.2 | Clean no-tracking team generator with count/size modes, rebalance, and copy | privacy-friendly |
| 154 | [RandomTeamBuilder.com](https://randomteambuilder.com/) | 3.2 | Visual random teams with drag-and-drop adjustment and exclusion-rule claims | constraints |
| 155 | [RandoTeams](https://www.randoteams.com/) | 3.2 | Wheel-style random team splitter with split-all and drag-and-drop claims | — |
| 156 | [Raugen Random Team Generator](https://raugen.com/toolbox/random-team-generator) | 3.2 | Quick random teams with custom team names, copy-all output, basic stats, and local generation history | ai-assisted |
| 157 | [ScoreKeeperCo Random Team Generator](https://www.scorekeeper.co/random-team-generator) | 3.2 | Sports-oriented random team generator with reshuffle and scoreboard/bracket links | — |
| 158 | [slack-meetups](https://github.com/liddiard/slack-meetups) | 3.2 | Open-source Slack bot for recurring random 1:1 meetup rounds | multi-round |
| 159 | [Slumpgenerator Random Team Generator](https://slumpgenerator.com/random-team-generator) | 3.2 | No-account team randomizer with paste input, group-count/size modes, optional names, and leaders | — |
| 160 | [Speed Friending and Dating Matcher](https://github.com/machinekoder/speed-friending-and-dating-matcher) | 3.2 | Open-source CLI/server matcher for speed-friending and speed-dating events | — |
| 161 | [Stilest Random Team Generator](https://www.stilest.com/tools/random-team-generator) | 3.2 | Clean comma/newline team splitter with regenerate and copy controls | — |
| 162 | [Tekscape Random Group Generator](https://tekscape.io/tools/school/random-group-generator) | 3.2 | School random group generator with generated output and share/save actions | — |
| 163 | [TextGround Random Group Generator](https://www.textground.com/tools/random-group-generator/) | 3.2 | Simple group splitting with bulk import, reshuffle, copy, and download | — |
| 164 | [TienIchHay Random Group Generator](https://tienichhay.net/random-group.html) | 3.2 | Vietnamese/English random group generator with leader selection and CSV export | strong-exports |
| 165 | [Wordstopia Team Picker](https://www.wordstopia.com/wheel-team-picker.html) | 3.2 | Team picker with spin-for-first-turn, copy results, samples, and 2–8 teams | — |
| 166 | [YTool Random Group Generator](https://ytool.net/group/) | 3.2 | Multilingual random group tool with paste input, copy, TXT export, and Excel export | — |
| 167 | [1000tools Random Pairs Generator](https://1000tools.xyz/random-pairs-generator/) | 3.1 | Pair/triplet/quartet generator with bulk input, remainder handling, export, and history | — |
| 168 | [afreetools Smart Team Generator](https://afreetools.com/smart-team-generator) | 3.1 | Small smart-team experiments with skill, role, avoid-pair, and share-link controls | constraints |
| 169 | [AppSorteos Random Teams Generator](https://app-sorteos.com/en/apps/random-teams-generator) | 3.1 | Polished free random teams with leaders and share/export buttons | strong-exports |
| 170 | [Buchstaben.com Zufallsgruppen-Generator](https://www.buchstaben.com/zufallsgeneratoren/zufallsgruppen-generator) | 3.1 | German random group generator with group-count/size, leaders, and distribution settings | — |
| 171 | [Calculop Random Class Group Generator](https://calculop.com/en/calculators/random-tools/random-class-group-generator) | 3.1 | Random class group calculator with crypto-randomness explanation and similar random-tools variants | — |
| 172 | [Drawrilla Random Team Generator](https://drawrilla.com/tools/random-team-generator/) | 3.1 | Team generator with number-of-teams/member-per-team modes, generated lists, copy, and download | — |
| 173 | [Elysia Tools Random Group Generator](https://elysiatools.com/en/tools/random-group-generator) | 3.1 | Tool/API random group generator with separators, empty-group/order options, and prefix controls | privacy-friendly |
| 174 | [FateFactory Team Splitter](https://www.fatefactory.org/en/team-splitter) | 3.1 | Ad-light random teams with file import, local templates, sharing, and QR output | privacy-friendly |
| 175 | [FlipACoinOnline Random Team Generator](https://flipacoinonline.com/random-team-generator/) | 3.1 | Random teams with CSV download and team label styles | strong-exports |
| 176 | [GenKit Random Group Generator](https://gen-kit.com/tools/random-group-generator/) | 3.1 | Browser-side random group generator with sample data, reshuffle, copy, share, and bookmarks | — |
| 177 | [Group Generator Project](https://group-generator-project.netlify.app/) | 3.1 | Indonesian random group generator with theme toggle and image download | privacy-friendly |
| 178 | [Kalkulator Random Group Generator](https://kalkulator.com.ua/en/calculators/random-group-generator/) | 3.1 | Group division calculator with count/size modes, copy, print, statistics, and history | — |
| 179 | [LottoNames Team Generator](https://lottonames.app/en/team/) | 3.1 | Visual team picker with animated draw and team-count controls | — |
| 180 | [Mate.tools Random Team Generator](https://mate.tools/random-team-generator) | 3.1 | Simple browser-side teams with by-count/by-size modes, organizer selection, and copy | — |
| 181 | [PickerKit Team Picker](https://pickerkit.com/team-picker) | 3.1 | Polished random teams with representatives, share, and save/load file controls | — |
| 182 | [RandGenerator Random Group Generator](https://www.randgenerator.com/group.html) | 3.1 | Simple random group generator with copy results | — |
| 183 | [Randomly Random Group Generator](https://randomly.group/random-group) | 3.1 | Random group generator with single entry, bulk import, file upload, copy/export claims, and multilingual UI | — |
| 184 | [RandTools Random Team Generator](https://randtools.com/random-team-generator) | 3.1 | Privacy-conscious basic random team splitting with copy output | privacy-friendly, basic-randomizer |
| 185 | [Shibutz Random Group Generator](https://www.shibutz.com/free-tools/random-groups) | 3.1 | Teacher-focused random groups with fixed-size or fixed-count modes | — |
| 186 | [Simplewoody Team Generator](https://simplewoody.com/en/random/team-generator.html) | 3.1 | Simple random team generator with comma/newline input and copy results | — |
| 187 | [Team Balancer Generic Team Balance](https://www.team-balancer.com/generic-team-balance) | 3.1 | Attribute-based team balancer for small manual rosters | constraints |
| 188 | [Toolnest Random Team Generator](https://lab.golamrabbani.org/generators/random-team-generator) | 3.1 | Privacy-conscious basic teams with team-count/team-size modes and copy output | — |
| 189 | [TurboToolkit Split List Into Groups](https://turboutilkit.com/splitlistintogroups/) | 3.1 | General list splitting with randomize, dedupe, sorting, CSV/JSON/text output, copy, and TXT download | strong-exports |
| 190 | [Utils.fun Random Grouping](https://utils.fun/random-group) | 3.1 | Chinese-language browser grouping with copy/download output | privacy-friendly |
| 191 | [WheelOfNames.net Team Picker](https://wheelofnames.net/team-picker) | 3.1 | Ad-supported team picker with skill/custom-name toggles and text export | constraints |
| 192 | [A-Fitz Group Generator](https://github.com/A-Fitz/Group-Generator) | 3 | Open-source desktop group generator that considers student preferences | constraints |
| 193 | [ABCDTools Team Generator](https://www.abcdtools.com/en/team-generator) | 3 | Free team grouping tool with copyable group cards | — |
| 194 | [AI Random Generator Team Generator](https://ai-random-generator.com/random-team-generator) | 3 | Clean random team generator with plus/minus team count | basic-randomizer, ai-assisted |
| 195 | [Begoodtool Smart Grouping Tool](https://begoodtool.com/smart-grouping/en) | 3 | Experimental rule-based grouping with tags, violations, drag/drop, and Excel export | constraints |
| 196 | [Betext Random Team Generator](https://betext.io/random-team-generator/) | 3 | Basic random teams with leaders and CSV/TXT/copy output | strong-exports |
| 197 | [Camp Chieflings TeamGen-360](https://chieflings.com/tools/teamgen-360/) | 3 | Team generator with leaders and random team names | — |
| 198 | [ChatGPT (Free Version)](https://chatgpt.com/) | 3 | Natural-language grouping when users are willing to verify the output | constraints, ai-assisted |
| 199 | [Chirag Mehta Team Maker](https://chir.ag/projects/team-maker/) | 3 | Lightweight random teams with editable team names and CSV output | strong-exports |
| 200 | [CinderGPT Random Team Generator](https://www.cindergpt.com/tools/random-team) | 3 | Quick random teams with copy/download/share and local browser processing claims | — |
| 201 | [Coda Random Team Generator Template](https://coda.io/@makon/random-team-generator) | 3 | Coda template for reusable random team generation with players, team selection, and team names tables | — |
| 202 | [ConverterPanda Random Group Generator](https://converterpanda.com/random-group-generator/) | 3 | Basic random groups with remaining-member handling, naming styles, stats, export, and print | — |
| 203 | [DecodeIt Random Team Generator](https://decodeit.app/en/randomizers/random-team-generator) | 3 | Polished browser-based random team splitter with upload, examples, and custom team names | — |
| 204 | [DiceFlipper Team Generator](https://diceflipper.com/team-generator/) | 3 | Simple random balanced team splitter with low observed tracking | privacy-friendly, basic-randomizer |
| 205 | [Diverse Group Generation](https://diverse-group-generation.vercel.app/) | 3 | Small attribute-balanced grouping experiments | constraints |
| 206 | [DJPlaner GroupGenerator](https://djplaner.github.io/GroupGenerator/) | 3 | Tiny GitHub Pages random group generator with save/load allocation controls | privacy-friendly |
| 207 | [Edu4 Random Group Generator](https://www.edu4.com/random-group-generator/) | 3 | Multilingual classroom random group generator with shuffle-again | privacy-friendly, basic-randomizer |
| 208 | [EliteAI Tools Random Team Generator](https://eliteai.tools/tool/random-team-generator) | 3 | Random teams with captains and table/text/CSV output | ai-assisted |
| 209 | [EMFLS Random Team Generator](https://emfls.com/util/teamgen/) | 3 | Tiny browser-based team splitter with no-upload/no-tracking claim | privacy-friendly, basic-randomizer |
| 210 | [FateWheel Team Generator](https://fatewheel.com/tools/team-generator) | 3 | Visual random team assignment with team-count/team-size modes | — |
| 211 | [Glima AI Random Pair Generator](https://glima.ai/free-tools/ai-random-pair-name) | 3 | AI-branded random pair generator with no-repeat/specific-rule inputs | constraints, ai-assisted |
| 212 | [Golf Captains](https://www.golfcaptains.com/) | 3 | Account-based golf group captain assistant for rosters, availability, schedules, and pairings | — |
| 213 | [InYourLeague Secret Santa Team Generator](https://tools.inyourleague.net/en/random-secret-santa-team-generator-group-size-exclusion-en/) | 3 | Secret Santa-style teams with min/max sizes and exclusion pairs | constraints |
| 214 | [JarvisBox Team Picker](https://tools.jarvisbox.app/pick/team-picker/) | 3 | Privacy-friendly one-page team splitting with copy/download | privacy-friendly |
| 215 | [Lekktura Random Name Picker & Group Maker](https://lekktura.com/tools/random-name-picker) | 3 | Classroom name picking plus basic random groups | strong-exports |
| 216 | [LetsRandomize Random Team Generator](https://letsrandomize.org/tools/random-team-generator/) | 3 | Fast browser-side team splits with copy/share, recent history, and random-captain mode | — |
| 217 | [Maak Groepjes](https://maakgroepjes.netlify.app/) | 3 | Dutch classroom group maker with pasted lists, gender-mixing option, saved lists, and offline-ish local cookies | — |
| 218 | [MyAIUtility Team Generator](https://myaiutility.com/tools/team-generator/) | 3 | Simple team generator with import box, shuffle, copy, and manual move controls | — |
| 219 | [Nacho Caballero Random Group Generator](https://observablehq.com/@nachocab/random-group-generator) | 3 | Observable notebook for repeated random groups with pair-repeat minimization logic | multi-round |
| 220 | [NotchTools Team Maker](https://notchtools.com/team-maker) | 3 | Simple team maker with pasted players, team count/size controls, and editable team names | — |
| 221 | [Pandos Team Generator](https://pandos.io/team-generator) | 3 | Guided team formation workflow when email/server processing is acceptable | constraints |
| 222 | [PartyPlay Team Generator](https://partyplay.games/en/team-generator/) | 3 | Casual party/classroom teams with paste, saved lists, captain mode, copy, and share | — |
| 223 | [Penguin Tools Team Generator](https://penguintools.net/en/team-generator) | 3 | Simple random teams with team-count or members-per-team mode | — |
| 224 | [PickRandom.online Random Team Generator](https://www.pickrandom.online/random-team) | 3 | Private cryptographic browser-side random teams with no account | privacy-friendly |
| 225 | [pyslackrandomcoffee](https://github.com/tjansson60/pyslackrandomcoffee) | 3 | Open-source Slack random-coffee pair bot with recent-repeat avoidance | multi-round |
| 226 | [Quick Pick Team Generator](https://quickpick.tools/teams) | 3 | Simple random teams with optional skill balancing and share/fullscreen controls | constraints |
| 227 | [Randly Group Generator](https://randly.app/tools/group-generator) | 3 | Clean no-account random groups with multiple generated draws | privacy-friendly |
| 228 | [RandomGenerator.one Random Generator Pairs](https://randomgenerator.one/random-generator-pairs/) | 3 | Random pair generator with color-coded cards and odd-person handling | — |
| 229 | [Roulette Rush Team Generator](https://roulette-rush.vercel.app/tools/team-generator) | 3 | Visual marble-race team picker with weighted entries and no-signup flow | privacy-friendly |
| 230 | [Ruletaa Random Team Generator](https://ruletaa.net/en/team-generator) | 3 | Browser-local random groups with dedupe and CSV/image download | strong-exports |
| 231 | [Simple Toolz Random Group Generator](https://www.simple-toolz.com/random-group-generator) | 3 | Client-side random group generator with copy result | privacy-friendly |
| 232 | [SpinnChoose Random Team Generator](https://spinnchoose.com/random-team-generator/) | 3 | Casual sports, gaming, and classroom team splits with list/bracket views | — |
| 233 | [SpinOfLuck Team Picker Wheel](https://www.spinofluck.com/team-picker) | 3 | Ad-free wheel-based team picking with pick counts, weights, saved rosters, and fullscreen | — |
| 234 | [SpreadsheetPlanet Random Group Generator](https://spreadsheetplanet.com/calculators/random-group-generator/) | 3 | Spreadsheet tutorial-site group calculator with count/size modes and copy output | — |
| 235 | [Steven Mi Group Generator](https://steven-mi.github.io/group-generator/) | 3 | Tiny static random subgroup generator | privacy-friendly, basic-randomizer |
| 236 | [TeacherWorksheetGenerator Student Group Generator](https://teacherworksheetgenerator.com/tools/student-group-generator) | 3 | Fast classroom grouping with print/reset controls | basic-randomizer |
| 237 | [Top Teacher Group Maker Digi-Tool](https://topteacher.com.au/resource/group-maker-digi-tool) | 3 | Subscription teacher digi-tool with manual/auto grouping, saved student lists, configurations, and points | constraints |
| 238 | [Utility Tools Random Team Generator](https://tools.futureapp.work/en/team-generator) | 3 | Basic browser-side random team splitting with quick team-count controls | basic-randomizer |
| 239 | [UtilityNestAI Team Generator](https://www.utilitynestai.com/team-generator) | 3 | Small team splits with individual entry, skill-balance option, custom names, share, and export | constraints, ai-assisted |
| 240 | [WheelPlay Team Picker Wheel](https://wheelplay.net/team-picker-wheel/) | 3 | Visual team picking with CSV export, representatives, and label/gender distribution options | constraints, strong-exports |
| 241 | [WTools Random Team Generator](https://wtools.dev/team-generator) | 3 | Simple team picker with team-count preset and shuffle-again | basic-randomizer |
| 242 | [AllTools.dev Random Team Generator](https://alltools.dev/tools/random/random-team-generator/) | 2.9 | Crypto-random browser-side teams with print and share URL | — |
| 243 | [Classroom.Group Online Group Generator](https://classroom.group/online-group-generator) | 2.9 | Teachers who want a simple local web splitter and may later upgrade to the iOS Groups app | — |
| 244 | [DecideHub Team Generator](https://decidehub.app/team-generator/) | 2.9 | Sports-style two-to-six-team splits with copy and local saved rosters | privacy-friendly |
| 245 | [DecisionFlip Team Picker](https://decisionflip.com/team-picker) | 2.9 | Basic random teams with balanced/random/snake distribution modes | — |
| 246 | [FindUtils Random Picker / Team Mode](https://findutils.com/generate/random-picker/) | 2.9 | Privacy-leaning browser-side team splits inside a multipurpose random picker | — |
| 247 | [FunRandomPickers Random Team Generator](https://funrandompickers.com/teams/play) | 2.9 | Simple visual team cards with copy/share and fullscreen | — |
| 248 | [FunToSpin Team Generator](https://funtospin.com/random/team-generator/) | 2.9 | Simple classroom team generator | basic-randomizer |
| 249 | [LDDGO Random Group Generator](https://www.lddgo.net/en/common/random-group) | 2.9 | Random group generator with TXT/XLSX import and TXT/XLSX downloads | strong-exports |
| 250 | [Linkorama Zufallsgenerator Gruppen bilden](https://www.linkorama.ch/zufallsgenerator-gruppen-bilden/) | 2.9 | German random group generator with size/count modes | privacy-friendly, basic-randomizer |
| 251 | [Microsoft Excel](https://www.microsoft.com/microsoft-365/excel) | 2.9 | Spreadsheet users who want local files or organization-controlled rosters | constraints, strong-exports |
| 252 | [OnlineTool.me Random Team Generator](https://onlinetool.me/Random-Team-Generator/) | 2.9 | Basic random team generator with share-link control | basic-randomizer |
| 253 | [PickerBot Team Generator](https://pickerbot.app/team-generator/) | 2.9 | Animated random team generator with dark/light mode | basic-randomizer |
| 254 | [QuickWheelSpin Team Picker](https://quickwheelspin.com/team-picker) | 2.9 | Visual basic team picking with copy/share-image outputs | — |
| 255 | [Random Letter Generator Group Generator](https://randomlettergenerator.app/group-generator) | 2.9 | Polished simple random groups with paste input, group count, copy, and basic stats | — |
| 256 | [RandomGenerator.one Random Generator Group](https://randomgenerator.one/random-generator-group/) | 2.9 | Group-size randomizer with copy output | basic-randomizer |
| 257 | [RandomGroup.online](https://randomgroup.online/) | 2.9 | Multilingual basic random groups with copy, TXT, and Excel export | — |
| 258 | [RandomGroup.org Random Group Generator](https://randomgroup.org/) | 2.9 | No-account random groups with TXT/CSV export | strong-exports |
| 259 | [RandomizerKits Random Group Generator](https://www.randomizerkits.com/en/random-group) | 2.9 | Multilingual random group generator with count/size modes | basic-randomizer |
| 260 | [RapidWebApp Random Team Generator](https://www.rapidwebapp.com/random-team-generator) | 2.9 | Iframe-based random teams with custom names, leaders, copy, and image export | — |
| 261 | [Spinwheely Random Team Generator](https://spinwheely.com/random-team-generator) | 2.9 | Visual browser-side random teams with PDF, CSV, and text export | strong-exports |
| 262 | [TeamShufflr](https://teamshufflr.com/de/) | 2.9 | In-person workshops that want printable team cards rather than a normal result table | — |
| 263 | [TrumpExcel Random Team Generator](https://trumpexcel.com/tools/random-team-generator/) | 2.9 | Simple local random groups with spreadsheet-friendly output | strong-exports |
| 264 | [Wanglitou List Randomizer with Teams](https://www.wanglitou.com/list-randomizer/) | 2.9 | Seedable list randomization and simple team output with copy/TXT download | — |
| 265 | [Wheelpick Team Generator](https://wheelpick.app/team-generator) | 2.9 | Polished no-account browser-side random teams from a saved roster | — |
| 266 | [Zoom breakout room assignment](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062540) | 2.9 | Assigning live meeting participants directly into Zoom rooms | constraints |
| 267 | [A Lot Of Tools Team Generator](https://alotoftools.com/team-generator) | 2.8 | Basic team generator with add-name workflow and copy-oriented results | basic-randomizer |
| 268 | [AIOneTools Random Team Generator](https://aionetools.com/tools/picker/team-generator-wheel) | 2.8 | Simple browser-side random groups with shuffle and clean team cards | ai-assisted |
| 269 | [bCalculator Random Team Generator](https://bcalculator.com/tools/random-team-generator) | 2.8 | Basic random team generator with verified two-team output | basic-randomizer |
| 270 | [CalcTools.online Random Team Generator](https://calctools.online/en/random/team-generator) | 2.8 | Utility-site team generator with count/member modes | basic-randomizer |
| 271 | [CalculationClub Random Team Generator](https://calculationclub.com/random-team-generator/) | 2.8 | Basic random team generator with equal/unequal distribution toggle | basic-randomizer |
| 272 | [Cojoro Team Generator](https://cojoro.dedyn.io/RandTeamGen/index.html) | 2.8 | Standalone team generation with custom team names, leader selection, and multiple export formats if certificate warnings are acceptable | strong-exports |
| 273 | [DiceGameHub List Randomizer & Team Generator](https://dicegamehub.com/tools/list-randomizer) | 2.8 | Simple team generation with copy-all and image download | — |
| 274 | [EasyEduTools Group Maker](https://www.easyedutools.com/en/tools/group-maker) | 2.8 | Productized teacher group maker with roster sync, drag/drop, save, presentation order, and PDF/copy claims | — |
| 275 | [Games by Marco Team Generator](https://teams.gamesbymarco.com/) | 2.8 | Minimal private-ish random teams with team-count or team-size mode | privacy-friendly, basic-randomizer |
| 276 | [Generate-Random.org Random Team Generator](https://generate-random.org/teams) | 2.8 | Simple random teams with strong text/CSV/JSON exports if hosted processing is acceptable | strong-exports |
| 277 | [GeneratorHub Random Team Generator](https://generatorhub.org/other-generators/team-generator) | 2.8 | Basic random team generator with optional custom team names | — |
| 278 | [GeneratorSuite Random Team Generator](https://generatorsuite.com/random-team-generator) | 2.8 | Random team generator with members-per-team and number-of-teams controls | basic-randomizer |
| 279 | [GetRandomTools Random Grouping](https://www.getrandomtools.com/nl/random-group/) | 2.8 | Multilingual random grouping utility with file/list input and configurable separator | — |
| 280 | [Google Sheets](https://sheets.google.com/) | 2.8 | Spreadsheet users willing to build their own random grouping template | constraints, strong-exports |
| 281 | [GoOnlineTools Random Group Generator](https://goonlinetools.com/random-group-generator/) | 2.8 | Simple random groups with a modern UI, regenerate, statistics, and possible copy/download/share icons | constraints |
| 282 | [Groupify](https://groupify-kappa.vercel.app/) | 2.8 | Generated/manual/file member grouping tool with random grouping and Excel-style output claims | privacy-friendly |
| 283 | [Gynzy Group Maker](https://www.gynzy.com/en/library/items/group-maker) | 2.8 | Interactive whiteboard random groups inside Gynzy | — |
| 284 | [InkPx Random Group Generator](https://inkpx.com/random-group-generator) | 2.8 | Simple group-count splits with remembered local input history | — |
| 285 | [iwoithe Random Group Generator](https://github.com/iwoithe/Random-Group-Generator) | 2.8 | Open-source cross-platform random group generator repository | — |
| 286 | [James Baum Team Generator](https://www.jamesbaum.co.uk/team-generator/) | 2.8 | Classic team generator with themed team names | basic-randomizer |
| 287 | [Kody Tools Random Team Generator](https://www.kodytools.com/random-team-generator) | 2.8 | Simple utility-site random team generator with copy/share controls | basic-randomizer |
| 288 | [Kordu Team Randomizer](https://kordu.tools/tools/gaming/team-randomizer/) | 2.8 | Clean browser-side random teams with re-roll and copy | — |
| 289 | [Online-Calculator.org Random Team Generator](https://online-calculator.org/tools/random-team-generator.php) | 2.8 | Basic random team generator with verified two-team output | basic-randomizer |
| 290 | [OnlTools Random Group Generator](https://onltools.com/random-group-generator) | 2.8 | Simple online random groups with by-size and by-number modes | — |
| 291 | [Paji Lots Team Grouping](https://toolset.marco79423.net/en/random-group-generator) | 2.8 | Browser-side random team grouping with CSPRNG | — |
| 292 | [Pradoy Random Team Generator](https://www.pradoy.com/random-team-generator) | 2.8 | Random teams with max-size mode and themed team names | — |
| 293 | [Random Group Generator Chrome Extension](https://chromewebstore.google.com/detail/random-group-generator/ahdimffafoiopfpheklpnkmepibagijl) | 2.8 | Chrome extension for Excel/CSV random groups | strong-exports |
| 294 | [Random Question Maker Random Team Generator](https://randomquestionmaker.com/more-tools/random-team-generator) | 2.8 | Basic team generator embedded in a question-site tools page | basic-randomizer |
| 295 | [Random Team Generator Android App](https://play.google.com/store/apps/details?id=com.argonremote.randomteamgenerator&hl=en) | 2.8 | Android team generator with group management and manual assignment | — |
| 296 | [Randomdo Random Group Generator](https://www.randomdo.com/tools/random-group-generator) | 2.8 | Minimal group-size randomizer with shuffle/reset and optional numbering | privacy-friendly, basic-randomizer |
| 297 | [RandomLists.top Team Generator](https://randomlists.top/team-generator/) | 2.8 | Simple large-list random teams with rename, upload, copy, and save | — |
| 298 | [RandomlyFun Random Team Generator](https://randomlyfun.app/tools/random-team-generator) | 2.8 | Casual 2–6 team splits with reroll/copy/share | — |
| 299 | [Spin Name Picker Team Generator](https://spinnamepicker.com/team-generator) | 2.8 | Wheel/name-picker site with a dedicated team-generation mode | — |
| 300 | [Spinnee](https://spinnee.com/) | 2.8 | Browser-local spinning wheel for random selection, classroom picks, raffles, and lightweight group-formation workflows | — |
| 301 | [SpinPickOnline Team Picker](https://www.spinpickonline.com/team-picker) | 2.8 | Wheel-styled team generation with bulk add, regenerate, and share results | — |
| 302 | [SpinTheWheel.dev Team Picker Wheel](https://spinthewheel.dev/team-picker-wheel) | 2.8 | Wheel-based team picker with weights, import/export JSON, history, print, and themes | — |
| 303 | [teamX](https://teamx.ro/) | 2.8 | Random team generator with saved lists, team-size mode, and power-player marking | constraints |
| 304 | [The Decider Team Generator](https://www.the-decider.com/team-generator) | 2.8 | Quick random teams with by-count/by-size mode, reshuffle, and copy | — |
| 305 | [Thunderbit Random Team Generator](https://thunderbit.com/tool/random-team-generator) | 2.8 | Quick random teams with CSV download if hosted processing and marketing funnel are acceptable | strong-exports |
| 306 | [ToolsJam Group Generator](https://www.toolsjam.co/tools/classroom-event/group-generator) | 2.8 | Classroom group generator tied to shared student roster tools | — |
| 307 | [TPT Small Group Generator](https://www.teacherspayteachers.com/Product/Small-Group-Generator-13075850?msockid=0dcbe678248c6b9c19e7f3e625556a27) | 2.8 | Paid Teachers Pay Teachers small-group template with data-driven grouping claims | constraints |
| 308 | [Ubikami Random Team Generator](https://ubikami.com/randomteamgenerator) | 2.8 | Simple random team generator with generated results | basic-randomizer |
| 309 | [UD5 Random Team Generator](https://www.ud5.com/tool/random-team-generator) | 2.8 | Simple local team splits with cleanup, custom prefix, history, and export menu | — |
| 310 | [Utilizor Random Team Generator](https://www.utilizor.com/tools/random-team-generator) | 2.8 | Simple random team generator with creative team-name claims | — |
| 311 | [Vertex42 Random Group Generator Template](https://www.vertex42.com/ExcelTemplates/random-group-generator.html) | 2.8 | Spreadsheet users who want a downloadable Excel/Google Sheets random grouping template | strong-exports |
| 312 | [VirtualEscapeRooms Random Group Generator](https://virtualescaperooms.org/random-group-generator/) | 2.8 | Escape-room themed squad generator for team-building groups | basic-randomizer |
| 313 | [YesNoWheel Picker Random Team Generator](https://www.yesornowheelpicker.com/random-team-generator) | 2.8 | Basic browser-side random teams with bulk add and file import | — |
| 314 | [Be Youthful Random Team Maker](https://beyouthful.net/random-team-maker/) | 2.7 | Pair/team maker with CSV download and shuffle again | strong-exports |
| 315 | [ClassDojo Group Maker](https://www.classdojo.com/toolkit/groupmaker/) | 2.7 | Teachers already using ClassDojo who want quick classroom groups | constraints |
| 316 | [CodeBeautify Random Team Generator](https://codebeautify.org/random-team-generator) | 2.7 | Ad-supported quick random teams with per-team copy/download controls | — |
| 317 | [Fun Group Names Random Team Generator](https://fungroupnames.com/random-team-generator/) | 2.7 | A content-site group randomizer if the embedded script works in your browser | — |
| 318 | [Group Assigner](https://group-assigner.com/) | 2.7 | Quick classroom or workshop groups with random team names and focus mode | — |
| 319 | [HyperToolbox Random Group Generator](https://hypertoolbox.com/en/randomGrouping) | 2.7 | Browser-side random grouping with group-count and members-per-group modes | — |
| 320 | [Nancy's Hearth Random Team Generator](https://teams.nancyshearth.com/) | 2.7 | Very simple random teams for virtual game nights | privacy-friendly, basic-randomizer |
| 321 | [Online Stopwatch Random Group Generator](https://www.online-stopwatch.com/random-group-generators/) | 2.7 | Classroom presentation-style random groups with animated reveals | strong-exports |
| 322 | [Orgise Random Group Generator](https://orgise.github.io/web/utilities/random-group-generator/) | 2.7 | Tiny GitHub Pages random group generator with group-count or people-per-group modes | privacy-friendly, basic-randomizer |
| 323 | [RandomTools.app Random Team Generator](https://randomtools.app/random-team-generator/) | 2.7 | Simple random teams with copy output and recent-draw history | — |
| 324 | [Spin Numbers Make Random Teams](https://www.spinumbers.com/make-random-teams/) | 2.7 | Quick local random team splits with copy-only output | basic-randomizer |
| 325 | [SpinDrop Groepjesmaker](https://spindrop.us/nl/groepjesmaker/) | 2.7 | Dutch random group maker with people-per-group mode | basic-randomizer |
| 326 | [Suijidaquan Random Grouping Generator](https://www.suijidaquan.com/en/team-generator) | 2.7 | Multilingual random grouping page with share and configurable randomization | basic-randomizer |
| 327 | [Super Teacher Tools Classroom Seating / Groups](https://www.superteachertools.us/instantclassroom/group-maker.php) | 2.7 | Teachers who want saved class rosters plus simple random classroom groups | — |
| 328 | [Teacher Commons Group Maker](https://teachercommons.com/classroom-management-and-productivity-tools/group-maker) | 2.7 | Minimal classroom group maker from a teacher-tool site | basic-randomizer |
| 329 | [Transum Random Student Generator](https://www.transum.org/Software/RandomStudents/) | 2.7 | Teacher student arranger with saved class list and group-count arrangements | — |
| 330 | [UD5 Team Randomizer](https://www.ud5.com/tool/team-randomizer) | 2.7 | Simple team randomizer with count/size modes and copy results | — |
| 331 | [UtilityKit Random Team Generator](https://utilitykit.tools/random-team-generator) | 2.7 | Simple browser-side random squads on a low-friction page | privacy-friendly, basic-randomizer |
| 332 | [Vibox Random Team Generator](https://vibox.app/tools/fun/team.html) | 2.7 | Tiny no-account random team splitting with team-count or people-per-team mode | basic-randomizer |
| 333 | [VisualTimer Random Group Generator](https://visualtimer.com/tools/random-group-generator/) | 2.7 | Simple classroom random groups with reveal mode | privacy-friendly |
| 334 | [WayToLearnX Random Team Generator](https://tools.waytolearnx.com/en/random-team-generator) | 2.7 | Utility-site random team generator with group/member count inputs and share link | basic-randomizer |
| 335 | [Webby Student Group Generator](https://webby.tools/student-group-generator/) | 2.7 | Quick classroom random groups with printable PDF output | — |
| 336 | [WebCatalog Random Group Generator App](https://webcatalog.io/en/apps/random-group-generator) | 2.7 | Desktop-app wrapper/listing for a random group generator with constraints and export claims | constraints |
| 337 | [WheelOfNamesPicker Team Generator](https://wheelofnamespicker.org/pages/team-generator.html) | 2.7 | Simple team generator with equal-size/random-size modes and sample names | — |
| 338 | [WordMint Random Group Generator](https://wordmint.com/random-group-generator) | 2.7 | Simple classroom groups with a copy-to-clipboard button | — |
| 339 | [Ahsan Kamal Group Formation Tool](https://github.com/ahsankamal/Group-Formation-Tool) | 2.6 | Open-source Spring Boot CATME-style student group-formation project | constraints |
| 340 | [AnyTextEditor Random Team Generator](https://anytexteditor.com/random-team-generator) | 2.6 | Ad-heavy basic random team generator | basic-randomizer |
| 341 | [CalculatingHub Random Team Generator](https://www.calculatinghub.com/en/randomizers/team-generator/) | 2.6 | Separator-based random team generator with duplicate removal | basic-randomizer |
| 342 | [CBC Tools Random Groups](https://cbc-tools.github.io/random-groups/) | 2.6 | Static roster-based random groups app | privacy-friendly, basic-randomizer |
| 343 | [Euan Riggans Team Builder](https://teambuilder.euanriggans.com/) | 2.6 | Tiny local random team splitting with save/load for the roster | privacy-friendly, basic-randomizer |
| 344 | [Fotify Speed Dating Event Planner](https://fotify.app/tools/speed-dating-event-planner/) | 2.6 | Quick speed-dating event timing plans | multi-round |
| 345 | [Games4esl Random Group Generator](https://games4esl.com/teacher-tools/random-group-generator/) | 2.6 | Teachers who want quick random classroom groups and a printable PDF | basic-randomizer |
| 346 | [Juicy Tools Group Maker](https://juicytools.app/tools/group-maker) | 2.6 | Teacher suite group maker with free-trial account flow | — |
| 347 | [LiteTools Team Picker Wheel](https://www.litetools.net/p/team-picker-wheel.html) | 2.6 | Ad-supported team picker wheel with team-count control | basic-randomizer |
| 348 | [Lommeregnere Random Team Generator](https://lommeregnere.net/random-team-generator) | 2.6 | Danish-language random team generator with names textarea and team count | basic-randomizer |
| 349 | [RakkoTools Random Group Generator](https://en.rakko.tools/tools/59/) | 2.6 | Basic random groups with CSV export | strong-exports |
| 350 | [Random Number Lab Groups Generator](https://www.randomnumberlab.org/groupsgenerator) | 2.6 | Research-style number group generator for random sampling and subject assignment | privacy-friendly |
| 351 | [RandomHub Random Group Generator](https://randomhub.io/random-group-generator) | 2.6 | Minimal no-account random group splits with copy output | — |
| 352 | [RandomTools.io Team Generator](https://randomtools.io/teams-generator) | 2.6 | Ad-supported random team splitter with copy, print, and Excel export claims | — |
| 353 | [SmartFreeTools Team Generator](https://smartfreetools.com/random-team-generator-split-a-list-in-groups/) | 2.6 | Random team draw page with copy/Excel/print/PDF features described | — |
| 354 | [SpinTheWheel.io Team Draw Generator](https://spinthewheel.io/de/team-draw-generator) | 2.6 | Randomly pairing teams from two pots, not forming teams from people | — |
| 355 | [Teacher Toolset Random Group Maker](https://www.teacher-toolset.online/en/onlinetools/group-maker) | 2.6 | Classroom random groups when teachers can add/import a roster and export text | — |
| 356 | [TeachQuill Classroom Group Generator](https://teachquill.com/classroom-group-generator) | 2.6 | AI-assisted classroom grouping drafts from natural-language constraints | constraints, ai-assisted |
| 357 | [Toolita Team Picker](https://toolita.com/decision/team-picker/) | 2.6 | Casual random teams or fixed-size groups when ad/cookie load is acceptable | — |
| 358 | [Versakit Group Generator](https://versakit.net/generators/group) | 2.6 | Clean no-account random groups with copy/text download | privacy-friendly, basic-randomizer |
| 359 | [Wheel of Decision Team Generator](https://wheelofdecision.com/tool/team-generator/) | 2.6 | Simple team generation with history/statistics and local participant state | — |
| 360 | [AgentCalc Random Team Generator](https://agentcalc.com/random-team-generator) | 2.5 | Educational simple random teams with clear algorithm explanation | — |
| 361 | [Comment Picker Random Team Generator](https://commentpicker.com/team-generator.php) | 2.5 | Basic random teams with stronger copy/print/Excel output | strong-exports |
| 362 | [GraphPad QuickCalcs Random Assignment](https://www.graphpad.com/quickcalcs/randomize1/) | 2.5 | Research subject randomizer for treatment-group assignment and within-group shuffling | — |
| 363 | [IOTools Random Team Generator](https://iotools.cloud/tool/random-generator/random-team-generator/) | 2.5 | Basic random teams with duplicate removal, file import, copy buttons, and a client-side workflow | — |
| 364 | [MainFacts Random Team Generator](https://mainfacts.com/random-team-generator) | 2.5 | Older random team/group generator with delimiter options and multiple split results | basic-randomizer |
| 365 | [NameGenHub Name Group Generator](https://namegenhub.com/generator/name-group-generator/) | 2.5 | AI-assisted name grouping with natural-language directives and copy output | constraints, ai-assisted |
| 366 | [PiliApp Random Team Generator](https://pili.app/random/team/) | 2.5 | Localized simple team splitting with copy and saved session data | — |
| 367 | [Random Choice Generator Random Team Generator](https://randomchoicegenerator.com/random-team-generator/) | 2.5 | Very simple browser team splitting with shareable name-list URLs | basic-randomizer |
| 368 | [Random Team Generator GitHub App](https://randomteamgenerator.github.io/input.html) | 2.5 | Open-source, no-account random teams when privacy and simplicity matter more than features | privacy-friendly, basic-randomizer |
| 369 | [RandomGenerator.com.au Random Group Generator](https://www.randomgenerator.com.au/random-group-generator) | 2.5 | Basic target-group-size grouping with copy-all output | basic-randomizer |
| 370 | [RandomGroupGenerator.co](https://randomgroupgenerator.co/) | 2.5 | A clean, private, one-screen random split when exports do not matter | privacy-friendly, basic-randomizer |
| 371 | [RandomTeamGenerator Discord App](https://discord.com/discovery/applications/693300079838101504) | 2.5 | Discord bot for creating random teams in gaming/community servers | — |
| 372 | [RandoTools Random Team Generator](https://randotools.app/random-team-generator/) | 2.5 | Quick private-ish two-mode team splitting with per-team copy | basic-randomizer |
| 373 | [Randzy Team Generator](https://www.randzy.com/team-generator) | 2.5 | Simple add-name random team generator | basic-randomizer |
| 374 | [SpinTheNamePicker Team Generator](https://spinthenamepicker.com/pages/team-generator.html) | 2.5 | Quick sports/classroom team splits with equal-size or random-size mode | — |
| 375 | [SpinYourPick Team Splitter](https://spinyourpick.com/team-splitter) | 2.5 | Team splitter with local history | basic-randomizer |
| 376 | [The Word Finder Random Group Generator](https://www.thewordfinder.com/random-group-generator/) | 2.5 | Basic random groups with duplicate removal and custom group title fields | — |
| 377 | [Togarci GroupGenerator](https://togarci.github.io/GroupGenerator/) | 2.5 | Portuguese GitHub Pages random group generator with one-by-one name entry | privacy-friendly, basic-randomizer |
| 378 | [Virtual Science Teachers Random Group Generator](https://virtualscienceteachers.org/random-group-generator/) | 2.5 | Classroom number-based group generator for student-number assignments | privacy-friendly, basic-randomizer |
| 379 | [A School Random Pair Generator](https://www.aschool.us/random/random-pair.php) | 2.4 | Very basic classroom random groups with max-size or group-count modes | — |
| 380 | [AddressGenerator Random Team Generator](https://addressgenerator.app/random-team-generator) | 2.4 | Basic ad-supported random team generator | basic-randomizer |
| 381 | [ChooseRandom Groups](https://chooserandom.com/groups) | 2.4 | Simple online group generator with comma/enter participant entry and optional public raffle workflow | basic-randomizer |
| 382 | [ClassTools24 Random Group Generator](https://classtools24.com/random-group-generator/) | 2.4 | Simple random groups with fullscreen display and basic click-to-copy behavior | basic-randomizer |
| 383 | [GIGAcalculator Random Team Generator](https://www.gigacalculator.com/randomizers/random-team-generator.php) | 2.4 | Quick random sports/team splits when per-team copy is enough | basic-randomizer |
| 384 | [GroupGen](https://github.com/GroupGen/GroupGen) | 2.4 | Open-source offline/privacy-respecting random group generator repository | — |
| 385 | [Matthew Bickell Random Group Generator](https://groups.matthewbickell.co.uk/) | 2.4 | Tiny comma-separated random group generator | privacy-friendly, basic-randomizer |
| 386 | [Picker Online Wheel Team Picker](https://pickeronlinewheel.com/random-team-generator/) | 2.4 | Simple multi-step random team wheel with custom team-name positioning | basic-randomizer |
| 387 | [Random Generator Tools Random Group Generator](https://randomgeneratortools.com/random-group-generator/) | 2.4 | Tiny people-per-group random splitter with paste input | basic-randomizer |
| 388 | [Saiful Islam GroupMaker](https://saifulislamdev.github.io/groupmaker/) | 2.4 | Tiny comma-separated group maker with fixed group-size buttons | privacy-friendly, basic-randomizer |
| 389 | [Saroj Meher Random Group Generator](https://www.sarojmeher.com/tools/random-group-generator/) | 2.4 | Decorated random group output with color and image download options | — |
| 390 | [Semantic Pen Random Team Generator](https://www.semanticpen.com/tools/random-team-generator) | 2.4 | AI prompt-based random team generator page | constraints, ai-assisted |
| 391 | [TA Easy Random Group](https://www.ta-easy.com/random-group/en) | 2.4 | Very simple no-account random groups when export and rules do not matter | basic-randomizer |
| 392 | [ToolPrime Random Team Generator](https://toolprime.com/random-team-generator) | 2.4 | Basic random teams with TXT download | basic-randomizer |
| 393 | [University of Edinburgh Group Allocator](https://static.sps.ed.ac.uk/groupallocator/) | 2.4 | Bare-bones random groups with CSV download | privacy-friendly, strong-exports, basic-randomizer |
| 394 | [Wheelzify Random Team Generator Wheel](https://www.wheelzify.com/random-team-generator/) | 2.4 | Presentation-style wheel-based team picking rather than one-click team splitting | — |
| 395 | [Aslin Joel Team Randomizer](https://aslin-joel-r.github.io/team-randomizer/) | 2.3 | Small GitHub Pages team/random-person randomizer | privacy-friendly, basic-randomizer |
| 396 | [CommonTools Random Team Generator](https://www.commontools.org/tool/random-team-generator-124) | 2.3 | Basic random groups with TXT download | basic-randomizer |
| 397 | [Effie Random Group Generator](https://www.effie.pro/free-tools/random-group-generator) | 2.3 | A quick no-account two-or-more group split on Effie’s site | basic-randomizer |
| 398 | [Flippity Random Name Picker](https://www.flippity.net/v2/RandomNamePicker.htm) | 2.3 | Spreadsheet-backed classroom grouping and quick random teams | — |
| 399 | [GeneratorMix Random Team Generator](https://www.generatormix.com/random-team-generator) | 2.3 | Very basic random team splitter on a generator directory site | basic-randomizer |
| 400 | [Group M4ker](https://pyxidatol-c.github.io/group-m4ker/) | 2.3 | Field-trip/class group maker driven by uploaded student lists | privacy-friendly |
| 401 | [Icebreaker Games Random Group Generator](https://icebreaker-games.org/random-group-generator) | 2.3 | Fast icebreaker groups when copy-only output is enough | — |
| 402 | [OpenEduCat AI Group Generator](https://openeducat.org/ai/tools/group-generator/) | 2.3 | Institutions already evaluating OpenEduCat, not quick public grouping | constraints, ai-assisted |
| 403 | [Random Name Picker Team Generator](https://www.randomnamepicker.net/team-generator) | 2.3 | Older team generator with name-set support and members-per-team input | basic-randomizer |
| 404 | [RandThings Random Team Generator](https://randthings.com/team-generator/) | 2.3 | No-frills random teams from pasted names | basic-randomizer |
| 405 | [Research Randomizer](https://www.randomizer.org/) | 2.3 | Research random-number generator for assigning participants to conditions | basic-randomizer |
| 406 | [SoulATools Random Picker / Team Picker](https://soulatools.com/random-picker/) | 2.3 | Casual team splitting inside a broader random-picker tool | — |
| 407 | [SpinWheelNames Random Team Generator](https://spinwheelnames.com/random-team-generator) | 2.3 | Wheel-based visual team assignment | basic-randomizer |
| 408 | [Warren Institute Random Groups Generator](https://warreninstitute.org/tools/random-groups-generator.html) | 2.3 | Bare-bones classroom/team random grouping | basic-randomizer |
| 409 | [Alien Fusion Generator Random Group Generator](https://alienfusiongenerator.com/random-group-generator/) | 2.2 | Basic random groups with copy/download on an ad-heavy page | basic-randomizer |
| 410 | [Applorium Random Group Generator](https://applorium.com/blog/random-group-generator/) | 2.2 | One-off random teams on a quiet, low-friction blog page | basic-randomizer |
| 411 | [FlexOS Random Group Generator](https://www.flexos.work/tools/random-group-generator-easy-fast-team-sorting) | 2.2 | Tiny comma-separated team splits on a future-of-work blog page | basic-randomizer |
| 412 | [GroupGenerator.top](https://www.groupgenerator.top/) | 2.2 | Trying a simple random split with experimental AI-style instructions | basic-randomizer, ai-assisted |
| 413 | [Homeschool of 1 Random Team Generator](https://www.homeschoolof1.com/random-team-generator/) | 2.2 | Embedded classroom/homeschool team splitter inside an ad-heavy article | — |
| 414 | [MiniWebTool Random Group Generator](https://miniwebtool.com/random-group-generator/) | 2.2 | Fast basic web groups with arbitrary group size or team count | — |
| 415 | [Online Stopwatch Random Magic Hat Group Generator](https://www.online-stopwatch.com/random-group-generators/random-magic-hat-group-generator/) | 2.2 | Classroom display novelty when animated sorting matters more than features | basic-randomizer |
| 416 | [Peliah RandomGenerator](https://github.com/Peliah/RandomGenerator) | 2.2 | Open-source Tkinter desktop random group generator | basic-randomizer |
| 417 | [PickJa Random Group Generator](https://pickja.com/tools/random-group-generator) | 2.2 | Quick no-account random groups with group-count or members-per-group mode | — |
| 418 | [QuizBreaker Team Generator](https://www.quizbreaker.com/team-generator) | 2.2 | Not recommended; basic space-separated random teams on a QuizBreaker marketing page | basic-randomizer |
| 419 | [Random Group Generator Chrome Extension](https://chromewebstore.google.com/detail/random-group-generator/njpbladpjfebkonnclifnjapepbigmbg?hl=en) | 2.2 | Chrome users who want a tiny local random-group popup | privacy-friendly, basic-randomizer |
| 420 | [Random Group Generator Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/random-group-generator/) | 2.2 | Firefox add-on for simple locally saved random groups | basic-randomizer |
| 421 | [RandomGenerate.io Random Team Generator](https://randomgenerate.io/random-team-generator) | 2.2 | Basic random teams on a general random-generator site | basic-randomizer |
| 422 | [RandomLists Random Team Generator](https://www.randomlists.com/team-generator) | 2.2 | Simple random teams from a pasted list | basic-randomizer |
| 423 | [RandomReady Random Group Generator](https://www.randomready.com/random-group-generator/) | 2.2 | Very simple random group splits | basic-randomizer |
| 424 | [Spin the Crocodile Team Picker](https://spinthecrocodile.com/team-picker) | 2.2 | Visual team-member picker for captains, roles, and small classroom/team selections | basic-randomizer |
| 425 | [UltimateSolver Random Groups](https://www.ultimatesolver.com/en/random-groups) | 2.2 | Privacy-conscious basic random groups with cryptographic server randomness | basic-randomizer |
| 426 | [Group Randomizer Vercel App](https://group-randomizer-ten.vercel.app/) | 2.1 | Specialized spreadsheet-driven group randomizer for multi-day/group workflows | privacy-friendly |
| 427 | [HeySpinner](https://heyspinner.com/) | 2.1 | Public wheel spins when you want a visual random picker, not automatic team splitting | basic-randomizer |
| 428 | [iLeren Groepenmaker](https://ileren.be/apps/groepenmaker/index.html) | 2.1 | Dutch-speaking teachers who need a tiny no-account classroom splitter | privacy-friendly, basic-randomizer |
| 429 | [ImageCompresser Random Team Generator](https://imagecompresser.com/random-team-generator) | 2.1 | Basic random teams on an ad-supported utility site | basic-randomizer |
| 430 | [Mega Seating Plan Free Random Group Maker](https://www.seatingplan.com/tools/groupmaker) | 2.1 | Teachers who already use Seating Plan class lists | basic-randomizer |
| 431 | [Microapp Team Generator](https://microapp.io/team-generator/) | 2.1 | A minimal team split if you tolerate the consent wall | basic-randomizer |
| 432 | [My2lbox Random Group Generator](https://my2lbox.com/en/random-group-generator) | 2.1 | Tiny random or level-weighted groups when privacy/ad-tech tradeoffs are acceptable | constraints |
| 433 | [Random Teams Generator Android App](https://play.google.com/store/apps/details?id=com.dev.simonedipaolo.randomteamsgenerator&hl=en_US) | 2.1 | Simple Android random teams with generated names and flags | basic-randomizer |
| 434 | [RandomTeams.net](https://www.randomteams.net/) | 2.1 | Very simple team-size splitting with generated funny team names | basic-randomizer |
| 435 | [Repixify Random Team Generator](https://www.repixify.com/tools/random-team-generator) | 2.1 | Users who specifically want leader markers and custom team names and do not care about ad-tech | — |
| 436 | [1minusbeta Name Group Generator](https://1minusbeta.com/name-group-generator) | 2 | Ultra-minimal name grouping | privacy-friendly, basic-randomizer |
| 437 | [BestRandoms Random Team Generator](https://www.bestrandoms.com/random-team-generator) | 2 | Very basic ad-supported random group generation | basic-randomizer |
| 438 | [Breno Design Group Generator](https://www.breno.design/design-tool/group-generator) | 2 | Small rosters where you want to click-select names and make quick visual groups | basic-randomizer |
| 439 | [Calculate.co.nz Random Team Generator](https://www.calculate.co.nz/random-team-generator.php) | 2 | One-off random teams when page-only output is enough | basic-randomizer |
| 440 | [GoSpinWheel Random Group Generator](https://gospinwheel.com/random-group-generator) | 2 | Live wheel-based team assignment when presentation matters more than balanced rosters | basic-randomizer |
| 441 | [PinCalculator Random Group Generator](https://www.pincalculator.com/random-group-generator) | 2 | Tiny no-account random groups when one-by-one name entry is acceptable | basic-randomizer |
| 442 | [RandomCount Team Generator](https://randomcount.in/teamgenerator) | 2 | Tiny groups where adding names one at a time is acceptable | basic-randomizer |
| 443 | [Terrific Tools Random Group Generator](https://terrific.tools/randomizer/random-group-generator) | 2 | People who want a small browser tool with individual member entry and simple group-size controls | — |
| 444 | [MadeInText Random Group Generator](https://www.madeintext.com/random-group-generator/) | 1.9 | Very simple one-off random groups when privacy does not matter | basic-randomizer |
| 445 | [PureTables Random Group Generator](https://puretables.com/random-group-generator) | 1.9 | Very basic page-only random teams | basic-randomizer |
| 446 | [Sheffield Hallam TEL-e-vision Group Maker](https://teaching.shu.ac.uk/hwb/hwbtel/resources/TEL-e-vision/groupmaker.html) | 1.9 | Very quick no-account random classroom groups | basic-randomizer |
| 447 | [Web0 Random Team Generator](https://www.web0.it/random/team/en) | 1.9 | Ultra-minimal local random groups | privacy-friendly, basic-randomizer |
| 448 | [ClassTools Random Group Generator](https://www.classtools.net/random-group-generator/) | 1.8 | Very quick classroom group splits | basic-randomizer |
| 449 | [Musely Team Builder Generator](https://musely.ai/tools/team-builder-generator) | 1.8 | Not recommended unless Musely verification works for the user | constraints, ai-assisted |
| 450 | [Schule Dietmannsried Gruppen Generator](https://www.schule-dietmannsried.de/gruppen/) | 1.8 | Bare-bones German classroom group splitting | privacy-friendly, basic-randomizer |
| 451 | [Wheel Decide Random Team Generator](https://wheel-decide.com/randomteamgenerator.php) | 1.8 | Manual wheel-based team selection with add/remove segments | basic-randomizer |
| 452 | [Wheel of Names](https://wheelofnames.com/) | 1.8 | Random picking, raffles, and manual group-building workarounds | basic-randomizer |
| 453 | [AhaSlides Random Team Generator](https://ahaslides.com/features/random-team-generator/) | 1.7 | AhaSlides users who already want random-team generation inside an interactive presentation workflow | basic-randomizer |
| 454 | [BasedLabs Random Team Generator with Conditions](https://www.basedlabs.ai/tools/random-team-generator-with-conditions) | 1.6 | Prompt ideas for AI-assisted grouping, not a structured group generator | constraints, basic-randomizer, ai-assisted |
| 455 | [FreeTextTools Random Team Generator](https://www.freetexttools.org/random-team-generator/) | 1.6 | Feature-rich-looking team generator that did not produce visible teams in testing | — |
| 456 | [BasedLabs Random Group Generator](https://www.basedlabs.ai/tools/random-group-generator) | 1.4 | Prompt examples for AI group formation, not a dependable generator | constraints, basic-randomizer, ai-assisted |
| 457 | [Wordwall Random Team Generator Resource](https://wordwall.net/resource/37278876/random-team-generator) | 1.4 | A prebuilt Wordwall spin-wheel activity, not a real group generator | basic-randomizer |
| 458 | [DecisionMakerTool Team Picker](https://www.decisionmakertool.com/team-picker) | 1.3 | A visual picker page, not a real team generator | basic-randomizer |
| 459 | [Teach Starter Random Name Picker](https://www.teachstarter.com/us/widget/random-name-picker-us/) | 1.1 | Picking one student at a time, not generating groups | basic-randomizer |
| 460 | [RemagineAI Random Group Generator](https://remagineai.com/name-generator/random-group-generator) | 1 | Not recommended as a standalone group generator | basic-randomizer, ai-assisted |
| 461 | [Huqiu Random Group Generator](https://en.huqiu.com/random/random-group-generator.html) | 0.5 | Not recommended; page was inaccessible during review | basic-randomizer |

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

Tools that do not generate groups at all may be rejected or kept only as low-rated workaround entries. Sales-gated commercial platforms and adjacent event-networking products are tracked separately and are not star-rated unless a self-serve generator, open demo, or runnable implementation can be reviewed. Resources explicitly checked and rejected from the ranked dataset may also be recorded in the reviewed out-of-scope list.

## License

See [`LICENSE.md`](./LICENSE.md). In short: scripts are MIT licensed; review data and written content are published under CC BY 4.0.
