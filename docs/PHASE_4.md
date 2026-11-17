# Phase 4 — Messages, Settings, Onboarding and Day Book

Implemented against Phase 3 commit `31d54af`, using Direction A, Calm Ledger. Phase 5 has not started.

## Presentation changes

- **Messages/Templates:** clearer distinction between editing a template and sending a client message. Language filters, template count and New template lead into grouped, divided rows. Template names wrap, and Indic previews carry their language attribute.
- **Template editor:** persistent title and Save footer surround a scrolling body. A native expandable “Insert a field” section gives each variable a visible explanation. The sample preview is labelled as example data, expands within the body and uses the selected language. Existing text protection, starter text, insertion, save, reset and delete behavior remain intact.
- **Settings:** Backup & export is first, followed by the existing Auto / Light / Dark controls. Business profile fields, logo and receipt/contact details are grouped. Native disclosures shorten optional sections, installation instructions and invitations. Save settings stays at the end of the profile, with explicit manual-save guidance; it does not obscure fields. The danger zone remains separate.
- **Onboarding:** compact brand header, concise local-storage explanation, business name and message language first. Optional owner, phone and logo controls are grouped below. The original validation and setup handler are unchanged.
- **Day Book:** visible filter labels, clearly scoped totals, an explicit “Export shown CSV” action and grouped rows by date. On narrow screens amounts move below the client identity. Existing period/type/mode filtering and empty-result reset are retained.

The presentation retains the established light/dark tokens, system fonts, warm Jyot brand accents, flat grouped surfaces and reduced-motion behavior. No new dependencies, assets, CDN, build step, storage keys or service-worker changes.

## Checks

Served locally with `python3 -m http.server 8871 --bind 127.0.0.1 --directory work/server`, under the `/jyot-khata/` sub-path. Used installed Chrome and the existing bundled Playwright runtime in isolated profiles with synthetic ledger data.

| Width | Light | Dark |
| --- | --- | --- |
| 320px | Passed | Passed |
| 375px | Passed | Passed |
| 414px | Passed | Passed |
| 768px | Passed | Passed |

- **112 baseline screen/sheet checks:** fourteen states at each width/theme. No JavaScript errors, HTTP failures, horizontal page/sheet overflow, shared targets below 44px or selected-state ARIA mismatches. Inputs, selects and textareas measure at least 16px. See [checks.json](screenshots/phase-4/checks.json).
- **24 additional layout checks:** expanded Settings, expanded Onboarding, and template editor at 480px height, across all eight width/theme combinations. The editor Save footer remains inside the viewport, with a scrollable body. Expanded sections have no horizontal overflow and controls remain at least 44px. The field insertion grid was also checked at 320px in both themes.
- **138 PNG screenshots:** saved in [screenshots/phase-4](screenshots/phase-4/). Reviewed all eight overview sets and full-size examples of the changed screens, expanded sections and short editor. Full-page screenshots retain the fixed bottom navigation at the initial viewport position; content remains vertically scrollable.
- **Interactions:** required onboarding validation; Gujarati setup with optional fields collapsed; profile edits, receipt preferences and persistence; Light/Dark/Auto without losing form drafts; Auto responds to device preference. JSON backup download, restore cancellation and confirmed restore passed. All five Day Book periods, type/mode filtering, empty-result reset and CSV content matching the displayed entries passed.
- **Templates:** Gujarati filtering and preview language, field insertion, built-in save/reset and cancellation, custom Gujarati starter/save, and browser Back through nested delete confirmation and editor passed. Saved data and the updated Settings screen reload offline under the sub-path. See [flow-checks.json](screenshots/phase-4/flow-checks.json).
- **Protected source:** all JavaScript outside the five presentation functions is byte-identical to Phase 3, including the appearance controller. Storage/save/saved, money maths, message/share helpers, router, sheets/history, receipt/PDF/statement generation, backup/restore and global event handlers are unchanged. Within the template editor, the only new non-markup statements set textarea/preview language attributes. Both script blocks pass `node --check`; CSS variables resolve; `git diff --check` passes. See [source-checks.json](screenshots/phase-4/source-checks.json).

These are Chromium viewport checks, not physical Android/iPhone keyboard, native-share or screen-reader certification. Full dialog naming/focus work, text zoom and the long-name/extreme-amount stress matrix remain Phase 5. No new functional defects were identified; the existing items in [FOLLOW_UPS.md](FOLLOW_UPS.md) remain unchanged.

## Publication

The owner authorized publication after checks. Publish this phase as a normal fast-forward update to `main`, then confirm GitHub Pages serves HTML identical to the committed file at `https://prajeshsoni-1.github.io/jyot-khata/`. Existing saved ledgers remain compatible. No hosting configuration change is needed.

The pre-existing untracked `docs/DESIGN.md` and `docs/DESIGN_AUDIT.md` were read and left unchanged, outside this commit.

Stop after publication and wait for “continue” before Phase 5.
