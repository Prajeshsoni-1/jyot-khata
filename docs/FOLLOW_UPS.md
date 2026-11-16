# Functional follow-ups outside the presentation scope

Baseline: commit `7b667f5`. Recorded during Phase 1; **none of these behaviours were changed**. Source references use function names so they remain useful as CSS lines move.

The fixed save/saved contract, opening-balance validation, edited-message replacement confirmation, No dues filter, empty-result reset actions, language-aware template starter and grapheme initials are the accepted baseline, not outstanding work.

## F1 — Storage failure presentation does not cover every active surface

**Priority: high. Source-confirmed, not fault-injected in Phase 1.** `render()` returns early for onboarding before inserting `storageBanner()`. When an entry fails to save and the existing post-save message flow opens a sheet, the persistent banner is on the underlying page rather than in the active sheet. A short failure toast is still shown by the existing contract.

Future acceptance: the owner can see persistent unsaved status and reach backup in onboarding and while a sheet is active. Decide the interaction separately; do not modify `save()`, `saved()`, sheet history or share fallback behaviour during this presentation project.

## F2 — Unsaved drafts are discarded by closing or navigating away

**Priority: medium. Source-confirmed.** Message language/template replacement now asks before discarding edited text. Closing via the backdrop, Close, Escape/Back or navigating to Templates still discards the draft. Client/entry/template forms and Settings have the same general navigation-loss risk.

Future acceptance: define a consistent draft/discard policy and separately test Android history, stacked confirmations and returning from external share. This is not permission to introduce guards in the current phases.

## F3 — Large or unbroken content can exceed canvas layout bounds

**Priority: medium. Source-derived risk; not a demonstrated output failure in Phase 1.** `wrapLines()` only breaks at whitespace; `fit()` stops at a minimum size even when text still exceeds its allotted width. The receipt summary moves with detail height while its footer is fixed. Long references/names and maximum detail content need dedicated A5/A4 output tests.

Future acceptance: test worst-case Hindi/Gujarati names, unbroken references, large values and long notes before considering generator changes. Keep `renderReceipt`, `renderStatement`, drawing helpers and `buildPDF` unchanged in this project.

## F4 — Restore validation can silently omit entries and accepts only shallow client validation

**Priority: medium. Source-confirmed.** `importBackup()` filters entries with an invalid ID/type/integer amount/date pattern before displaying the replacement confirmation. It does not disclose how many entries were omitted; client records are not validated beyond the clients array check, and the date check is a pattern rather than a calendar-validity check.

Future acceptance: review validation and disclose rejected records before replacement, in a separately authorised backup/restore change. No restore logic is altered here.
