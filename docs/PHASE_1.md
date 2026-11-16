# Phase 1 — Calm Ledger token foundation

Completed against `7b667f5`; Phase 2 has not started.

## Changes

- Added Direction A colour roles for light/dark, including separate decorative-divider and control-border tokens, semantic soft colours, focus colour, scrim and inverse toast colours.
- Added rem-based type sizes and unitless Indic-friendly line heights; 4/8/12/16/24/32 spacing; semantic radii; flat/floating/sheet elevation; motion duration/easing/travel tokens.
- Replaced presentation literals in the stylesheet and static HTML `style` attributes with token references. Existing component dimensions are explicitly named for the later shared-component phase. Zero values, percentages, structural grid definitions and the 600px sheet breakpoint remain structural CSS.
- Applied the A palette, typography, spacing and elevation to existing selectors; matched dark browser theme colour to the new background. Kept the existing gradient stops and logo assets, and permanent white paper previews.
- No markup restructuring, event-handler changes, new dependency, font download or build step.

## Verification

Served with Python's `python3 -m http.server 8871 --bind 127.0.0.1` using an isolated serving directory that exposes the repository at `/jyot-khata/`. Screenshots used `http://127.0.0.1:8871/jyot-khata/`; the service-worker check used `http://localhost:8871/jyot-khata/` because the existing registration code recognises that hostname.

Used installed Chrome through the already bundled Playwright runtime, with fresh temporary browser profiles and synthetic data only. No package was installed or added to the application. Viewport height was 900 CSS px and device scale factor was 1. Captures use full pages for routes and viewport captures for open sheets; autofocus was allowed to settle and sheets were returned to the top for consistent screenshots.

| Width | Light | Dark |
| --- | --- | --- |
| 320px | 14 states captured and checked | 14 states captured and checked |
| 375px | 14 states captured and checked | 14 states captured and checked |
| 414px | 14 states captured and checked | 14 states captured and checked |
| 768px | 14 states captured and checked | 14 states captured and checked |

States: Onboarding, Home, Client, Day Book, Messages/Templates, Settings, client form, entry form, entry detail, message sheet, template editor, receipt sheet, statement sheet and confirmation. Fixture has Hindi, Gujarati and English names; pending, advance, clear and no-entry clients; and bill/received/given records.

- 112 screenshot files in [screenshots/phase-1](screenshots/phase-1/); raw measurements in [checks.json](screenshots/phase-1/checks.json).
- All eight viewport/theme sets visually reviewed using overview sheets, with full-size inspection of representative 320px screens.
- No JavaScript runtime errors or HTTP failures in the screenshot matrix. Receipt/statement previews generated in every viewport/theme combination.
- No new page or sheet overflow conditions compared with the baseline matrix. All input/select/textarea font sizes measured at least 16px.
- Syntax check and `git diff --check` passed; all CSS custom-property references resolve.
- Functional JavaScript is identical after normalising static HTML style attributes. `save()`/`saved()`, financial functions, sheet/history handling, export/import and sharing, and canvas/PDF generators were additionally compared byte-for-byte with the baseline where applicable.
- A legacy-format synthetic save without `meta.onboarded` loaded correctly; its ₹750 pending balance and Gujarati initial `કિ` remained correct. Storage key is still `jyotkhata.v1`.
- A cached reload worked offline at `/jyot-khata/` with service-worker scope preserved; reduced-motion sheet transition measured `0s`. Evidence: [compatibility.json](screenshots/phase-1/compatibility.json).

## Remaining work — deliberately deferred to the requested later phases

This is a token foundation, not the final Calm Ledger component/layout implementation or an accessibility-conformance claim.

- Existing message-sheet horizontal overflow remains at 320px and 375px in both themes. The three-column Copy/WhatsApp/Share row is unchanged. Phase 2/3 must reflow it.
- Existing horizontal filter strips, faint control outlines and undersized chip/small-button/variable targets remain. Control-border/focus/press tokens are available; Phase 2 will apply the shared-component states and minimum targets.
- Small-screen client action labels wrap tightly; long form/template content still requires vertical scrolling. Footer, list-density and title/name wrapping improvements belong to Phases 3–5.
- Native date-picker icon contrast still needs the Phase 2 control treatment in dark mode.
- Full screen-reader, real-device keyboard, 200% text and worst-case long-name/₹9,99,99,999.99 testing remains for Phase 5. Chrome viewport emulation does not establish Android/iPhone behaviour.
- New functional observations were recorded in [FOLLOW_UPS.md](FOLLOW_UPS.md), not fixed.

The pre-existing untracked `docs/DESIGN.md` and `docs/DESIGN_AUDIT.md` were read and left unchanged; they are not staged by this phase commit.

**Next step:** wait for the owner to say “continue” before Phase 2.
