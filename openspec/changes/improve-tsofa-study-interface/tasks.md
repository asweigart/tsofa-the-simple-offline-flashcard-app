## 1. Inspect and establish the shared interaction foundation

- [x] 1.1 Trace the existing control markup, card flip/navigation handlers, editor draft lifecycle, remove/undo flow, download/print actions, and generator substitutions in `tsofa.html` and `create-example-flashcards.py`.
- [x] 1.2 Add scoped CSS custom properties and reusable layout/status styles while preserving the existing visual direction and offline single-file constraints.
- [x] 1.3 Add a reusable concise status/live-region helper and ensure it is keyboard- and screen-reader-compatible without interrupting study flow.

## 2. Clarify the study interface

- [x] 2.1 Replace ambiguous primary symbol-only actions with visible labels and explicit accessible names, retaining familiar keyboard and touch interactions.
- [x] 2.2 Group primary navigation/flip controls separately from secondary study utilities and authoring/deck-management controls using native labeled disclosure.
- [x] 2.3 Make the flashcard focusable and keyboard-operable with Enter/Space flipping, visible focus styling, and clear flip instructions while preserving click and swipe behavior.
- [x] 2.4 Add responsive wrapping/stacking rules for control groups and verify labels and primary actions remain usable at narrow widths.

## 3. Harden editing and destructive actions

- [x] 3.1 Capture editor-open draft state and implement cancel behavior that closes unchanged drafts immediately but confirms discard for modified drafts while retaining the draft on keep-editing.
- [x] 3.2 Add visible success or rejection feedback for editor Apply and Download/Print outcomes, including invalid or unavailable action paths.
- [x] 3.3 Refactor card removal to retain the removed card for the existing recovery window, expose a labeled Undo action, restore the logical position on undo, and distinguish recovery styling from destructive styling.
- [x] 3.4 Announce removal, undo, shuffle, inversion, timer changes, editor updates, and other meaningful state transitions through the shared status mechanism without repetitive navigation noise.

## 4. Synchronize documentation and generated decks

- [x] 4.1 Update `README.md` for changed labels, study-tools disclosure, editor cancellation, and removal/undo behavior where current instructions are affected.
- [x] 4.2 Regenerate tracked example decks with `python create-example-flashcards.py` when template changes require it, then review generated diffs for synchronization and unrelated changes.

## 5. Validate the change

- [x] 5.1 Run `python -m py_compile create-example-flashcards.py` and any available HTML/JavaScript syntax checks without adding dependencies.
- [ ] 5.2 Serve the repository and manually verify a representative deck plus `tsofa.html`: labeled controls, disclosure groups, card focus/Enter/Space, click/touch flip, responsive layout, shuffle/invert/timer feedback, print/download feedback, and editor apply/cancel flows.
- [ ] 5.3 Manually verify remove → status/Undo → restore, expired recovery, keyboard focus visibility, and screen-reader-visible status announcements; record any browser/runtime limitations separately from static validation.
- [x] 5.4 Confirm generated decks load offline and preserve existing card navigation, printing, downloading, and editor behavior after regeneration.

Browser validation note: the local browser verified the rendered hierarchy, Enter/Space flipping, shuffle status, removal/Undo status, generated-deck loading, and no console warnings. The native editor discard confirmation was reached, but the browser harness reset while the dialog was open; responsive, expiry, and screen-reader behavior remain release-gate checks.
