# Phase 3 — Home, Client and working sheets

Completed against Phase 2 commit `9b0adc1`. Phase 4 has not started.

## Changes

- Home now uses one flat overview panel with a dominant pending amount and two secondary received totals. Large secondary amounts cause the summary columns to stack. Client names can occupy two lines; small-screen amounts move below the name. Add client sits beside the client section heading, avoiding a floating control over ledger rows. The existing backup reminder, search, filters and reset action remain available.
- Client names wrap in the header. The balance panel has quiet borders and clear total/received labels. Received is the first full-width shortcut; Bill / Due and Given / refund remain visible below it. Communication and statement actions share a secondary row. Ledger entries share one divided surface and explicitly label the balance as the balance after each entry.
- Client form, entry form, entry detail, message, receipt and statement sheets now have a fixed title region and action footer around a scrolling body. This is markup/CSS restructuring inside the existing sheet implementation. No open, close, Back, history or submit behavior changed. On short viewports these sheets can use the full available height.
- Entry forms separate client identity from the title and explain the selected transaction's effect on pending. Existing field names, validation, amount parsing, autofocus and submit handlers remain intact. Client phone is visibly optional. Destructive form actions are separated from the persistent Save action.
- Entry details use a clearly labelled amount and stacked key/value details on narrow screens. Message sheets identify current versus entry-date account context, retain draft protection, and label the main action “Open WhatsApp.” The message textarea exposes its selected language.
- Receipt sheets include a readable HTML amount/client/date/mode summary that follows the selected language. A5/A4 previews are labelled; statements identify the selected period and “Preview: page 1 of N.” Share/download actions remain visible while the preview scrolls. The generated files and share fallback order are unchanged.
- Confirmations receive readable consequence text through CSS. Dialog title associations, focus return/containment, template-editor restructuring and the remaining screen-specific work stay assigned to later phases.

## Verification

Local server: `python3 -m http.server 8871 --bind 127.0.0.1 --directory work/server`, exposing the repository at `/jyot-khata/`. Used installed Chrome and the already bundled Playwright runtime with isolated profiles and synthetic data. No new application dependencies, CDN, build step, assets or service-worker changes.

| Width | Light | Dark |
| --- | --- | --- |
| 320px | 14 screen/sheet states passed | 14 screen/sheet states passed |
| 375px | 14 screen/sheet states passed | 14 screen/sheet states passed |
| 414px | 14 screen/sheet states passed | 14 screen/sheet states passed |
| 768px | 14 screen/sheet states passed | 14 screen/sheet states passed |

The matrix covers Onboarding, Home, Client, Day Book, Messages/Templates, Settings, client form, entry form, entry detail, message, template editor, receipt, statement and confirmation. Viewport height is 900px; DPR is 1. Routes use full-page captures; sheets use viewport captures after autofocus settles. All eight width/theme overview sets were visually reviewed, with representative full-size mobile inspection.

- **112 matrix checks:** no JavaScript errors, HTTP failures, page/sheet horizontal overflow, undersized shared targets or selected-state ARIA mismatches. Inputs/selects/textareas measure at least 16px. [Measurements](screenshots/phase-3/checks.json).
- **122 PNG screenshots:** 112 matrix images, eight short-height entry forms and two long-name/large-amount examples, saved in [screenshots/phase-3](screenshots/phase-3/).
- **Entry flow:** invalid opening balance prevents client creation; adding a client, bill ₹12.34, cash received ₹2.34, given ₹1.00 and editing the bill to ₹15.34 results in ₹14.00 pending. The same existing post-save message flow, edited-text cancellation and browser Back behavior passed.
- **Documents:** receipt and selected-month statement downloaded through their new footers as valid PDF files. Selected receipt language updates its HTML summary. A simulated statement generation failure retains a visible error and disabled sharing, without a stale preparing label.
- **Short height:** at 480px high in every requested width/theme combination, Save stays fully within the viewport and the last entry field can scroll above the footer. This is a viewport test, not a claim about a real mobile keyboard.
- **Large content:** an 80-character Gujarati client name and a ₹9,99,99,999.99 entry render without horizontal page overflow at 375px. The full long Hindi/Gujarati, extreme-value, 320px and text-zoom stress matrix remains Phase 5.
- **Persistence/offline:** saved synthetic ledger data survives reload and a cached offline reload under `/jyot-khata/`. [Flow measurements](screenshots/phase-3/flow-checks.json).
- **Protected source:** storage/save/saved, money maths, message expansion/share helpers, the entire sheet/history block, receipt/PDF/share generation, statement drawing, backup/restore and global events remain byte-identical to Phase 2. Client/entry form and entry-detail handlers, submit logic and autofocus also match exactly. Both scripts pass `node --check`, all CSS variable references resolve, and `git diff --check` passes. [Source checks](screenshots/phase-3/source-checks.json).

## Publishing and remaining work

The owner explicitly requested “make it live” during this phase. GitHub Pages is configured to publish `main` at `https://prajeshsoni-1.github.io/jyot-khata/`. Publish the verified Phase 1–3 commits as a normal fast-forward update, then verify the deployed HTML against the committed file. No hosting configuration change is needed.

Old ledger data, the `jyotkhata.v1` storage key and the separate appearance preference remain compatible. No real client data was accessed during checks. Actual Android/iPhone keyboard, native-share and screen-reader testing is still outstanding; the current automated checks do not establish full WCAG conformance.

Functional issues already recorded in [FOLLOW_UPS.md](FOLLOW_UPS.md) remain unchanged. The pre-existing untracked `docs/DESIGN.md` and `docs/DESIGN_AUDIT.md` are unchanged and excluded from this commit.

**Next step:** finish the authorised publication, then stop until the owner says “continue” for Phase 4.
