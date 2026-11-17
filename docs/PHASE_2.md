# Phase 2 — Calm Ledger shared components and appearance

Completed against Phase 1 commit `257aa88`. Phase 3 has not started.

## Changes

- Refined buttons, chips, fields, cards, list rows, bottom sheets, banners, toasts, empty states and bottom navigation toward the requested restrained, simple, premium appearance. Kept Jyot branding and the Direction A warm palette.
- Applied visible control borders, quieter semantic button fills, grouped client rows, neutral avatars, subtle pressed feedback and a solid focus ring. Reduced decorative emphasis; primary actions retain the strongest colour.
- Shared interactive targets are at least 44px; icon buttons are 48px, inputs at least 52px and navigation targets 64px. Inputs retain at least 16px text and the existing Indic-friendly line heights.
- Selected chips and entry segments show a check and expose `aria-pressed`; existing selection handlers update both together. Chips wrap, and compact action rows stack at narrow widths. The message-sheet horizontal overflow seen in Phase 1 is resolved in the test matrix.
- Sheet headers remain available while scrolling. Reduced-motion preferences remove transitions and pressed movement. Sheet history/opening/closing logic and toast duration are unchanged.
- Added the requested **Auto / Light / Dark** control in Settings. Auto follows live device changes; explicit choices override the device. Native controls and browser theme colour follow the effective theme. Switching themes preserves unsaved business-profile fields.
- Appearance uses the separate browser preference `jyotkhata.appearance.v1`. The ledger key/model remains `jyotkhata.v1`; backups are unchanged and do not include appearance. If preference storage fails, the theme applies for the session with a visible notice.

## Verification

Served locally with `python3 -m http.server 8871 --bind 127.0.0.1 --directory work/server`, with the repository exposed at `/jyot-khata/`. Used installed Chrome through the already bundled Playwright runtime, isolated profiles and synthetic ledger data only. No dependencies were added.

| Width | Light | Dark |
| --- | --- | --- |
| 320px | 14 states passed | 14 states passed |
| 375px | 14 states passed | 14 states passed |
| 414px | 14 states passed | 14 states passed |
| 768px | 14 states passed | 14 states passed |

States: Onboarding, Home, Client, Day Book, Messages/Templates, Settings, client form, entry form, entry detail, message sheet, template editor, receipt sheet, statement sheet and confirmation. Viewport height: 900 CSS px; DPR: 1. Route screenshots capture full pages; sheet screenshots capture the viewport after autofocus settles and scrolling returns to the top.

- Saved **114 PNG screenshots** in [screenshots/phase-2](screenshots/phase-2/): 112 matrix captures plus two explicit-theme override examples. Reviewed all eight width/theme overview sets and representative full-size mobile captures.
- Matrix: no JavaScript errors, HTTP failures, horizontal page/sheet overflow, undersized shared interactive targets or selected-state ARIA mismatches. Input/select/textarea sizes measured at least 16px. Evidence: [checks.json](screenshots/phase-2/checks.json).
- Selected soft-red text contrast: approximately 5.81:1 in light and 5.92:1 in dark; primary filled-button contrast and control-border contrast were checked. This is component verification, not a full accessibility-conformance claim.
- Explicit Light over dark OS and Dark over light OS passed. Choices survive reload; Auto responds to live OS changes. Unsaved Settings text survives theme changes, and ledger storage bytes remain unchanged.
- A legacy-format synthetic save without `meta.onboarded` loaded correctly with a 75,000-paise pending balance and whole-grapheme Gujarati initial `કિ`.
- Payment-mode/type selected semantics, dirty-message replacement cancellation, nested confirmation dismissal and browser Back closing the message sheet passed. Reduced-motion sheet transition measured `0s`.
- Simulated appearance-preference write failure preserved the session theme and showed the non-persistence notice. A cached offline reload at `http://localhost:8871/jyot-khata/` retained the chosen dark theme. Evidence: [theme-checks.json](screenshots/phase-2/theme-checks.json).
- Storage/save/saved, money maths, sheet/history handling, receipt/PDF/share implementation, statement canvas implementation and backup/restore blocks match Phase 1 byte-for-byte. Changes inside receipt/statement sheet UI only add selected-state semantics.
- Both scripts pass `node --check`; CSS variable references resolve; `git diff --check` passes.

## Remaining phases and limits

- Phase 3: Home/Client hierarchy, action placement, entry form and sheet layout. At 320px, long sheets still require vertical scrolling; form footer placement is part of that work.
- Phase 4: Messages/Templates, Settings, Onboarding and Day Book screen-specific layouts. Only the requested appearance control and shared component styling were added to Settings here.
- Phase 5: dialog titles, focus return, long Hindi/Gujarati names, extreme amounts, text enlargement and broader accessibility polish. Sheet history behavior must stay intact.
- Chrome viewport checks do not establish real Android/iPhone keyboard or native-share behavior. No native share flow was changed.
- Existing functional observations remain in [FOLLOW_UPS.md](FOLLOW_UPS.md); none were fixed in this phase.

The pre-existing untracked `docs/DESIGN.md` and `docs/DESIGN_AUDIT.md` remain unchanged and are excluded from this phase commit.

**Next step:** wait for the owner to say “continue” before Phase 3.
