## Why

The current Study tools disclosure improves labeling but still expands into a dense settings-like panel containing practice actions, reading preferences, timing, export, and language selection. At a 1011×674 viewport this interrupts the study rhythm and makes unrelated controls appear equally important. Splitting the tools by mental model will preserve discoverability while returning the interface to TSOFA’s focused “Quiet Study Desk” character.

## What Changes

- Split the single Study tools disclosure into purpose-based groups: Practice, Reading, and Session/Export or equivalent user-facing labels.
- Keep study-state actions together and separate destructive removal/recovery from routine actions through hierarchy and contextual Undo visibility.
- Move print, download, and language controls behind a separate lower-priority disclosure so opening practice tools does not reveal the entire utility surface.
- Add clear subgroup labels and spacing that communicate relationships without creating a dashboard-like panel.
- Add authored focus styling for summaries and controls, and return focus to the study surface after a disclosure is closed where appropriate.
- Replace the fixed four-column assumption with content-aware wrapping that tolerates long translations at intermediate widths.
- Preserve existing actions, keyboard/touch behavior, offline operation, printing, editor access, and generated-deck synchronization.

## Capabilities

### New Capabilities

- `study-tool-grouping`: Defines the purpose-based grouping, hierarchy, disclosure behavior, and contextual recovery presentation for viewer tools.
- `responsive-study-tool-layout`: Defines wrapping, focus, and narrow/intermediate viewport behavior for the grouped controls.

### Modified Capabilities

<!-- No existing repository capability specifications were found. -->

## Impact

- `tsofa.html`: viewer markup, CSS grouping/focus styles, responsive layout, and small disclosure/focus behavior changes.
- `README.md`: update viewer-control descriptions if the new groups or labels change user-facing guidance.
- `create-example-flashcards.py` and generated `flashcards-*.html`: regenerate synchronized standalone decks after the template changes.
- No new dependencies, services, data formats, or build steps.
