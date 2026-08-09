## 1. Inspect the current viewer contract

- [ ] 1.1 Trace the current Study tools markup, action handlers, Undo visibility/timer, translation labels, and generated-deck substitution boundaries in `tsofa.html` and `create-example-flashcards.py`.
- [ ] 1.2 Record the current keyboard/focus behavior and identify the stable focus targets for each native disclosure.

## 2. Split the tool information architecture

- [ ] 2.1 Replace the single Study tools disclosure with labeled Practice, Reading, and Session & export disclosures while preserving all existing action handlers.
- [ ] 2.2 Keep Practice actions together, separate Remove visually from routine actions, and make Undo contextual to an available removal without changing recovery semantics.
- [ ] 2.3 Add subgroup spacing/labels and preserve the compact visual hierarchy; avoid introducing a dashboard or unrelated decorative treatment.
- [ ] 2.4 Add authored `:focus-visible` styling for summaries and viewer controls, and implement predictable focus retention/return after keyboard disclosure interaction.

## 3. Make grouped controls responsive

- [ ] 3.1 Replace the fixed four-column secondary grid with a content-aware grid that wraps long labels at intermediate widths.
- [ ] 3.2 Allow timer, print/download, and language rows to wrap or stack without horizontal overflow.
- [ ] 3.3 Verify 44px minimum touch targets, long translated labels, and card/primary-navigation reachability at desktop, intermediate, and mobile widths.

## 4. Synchronize content and generated decks

- [ ] 4.1 Update `README.md` to describe the new tool groups and contextual Undo behavior if user-facing wording changes.
- [ ] 4.2 Regenerate all tracked example decks with `python create-example-flashcards.py` and review generated changes for template synchronization only.

## 5. Validate the implementation

- [ ] 5.1 Run Python compilation, JavaScript syntax checks for the template and generated decks, strict OpenSpec validation, and the Impeccable detector.
- [ ] 5.2 Browser-test the closed viewer and each disclosure at 1011×674, including focus order, Practice-only height, tool outcomes, and focus return.
- [ ] 5.3 Browser-test intermediate/mobile widths and a long-label language for wrapping, touch target size, no horizontal scrolling, and reachable primary controls.
- [ ] 5.4 Regression-test card navigation/flip, shuffle/invert, removal/Undo expiry, timer, print, download, editor access, offline loading, and at least one generated deck.
