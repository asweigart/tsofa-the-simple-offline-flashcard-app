## Why

TSOFA's study card is focused, but its surrounding controls currently expose a dense wall of symbols and mix everyday study actions with authoring and deck-management tools. The critique also found that removal and editor cancellation can feel unsafe, while important state changes are mostly silent. This change makes the core study path self-explanatory and preserves user control without adding dependencies or compromising offline use.

## What Changes

- Replace ambiguous primary icon-only controls with concise visible labels and explicit control groups.
- Keep navigation and flip actions prominent while progressively disclosing secondary study tools and authoring/deck-management actions.
- Make the flashcard itself keyboard-focusable with an explicit accessible role, focus treatment, and clear flip guidance.
- Require confirmation before discarding an edited draft, retain the draft until discard is confirmed, and visibly acknowledge Apply and Download outcomes.
- Make card removal reversible and clearly communicated with a labeled Undo action and an accessible status message.
- Announce shuffle, inversion, timer changes, downloads, editor updates, removal, and other meaningful state transitions through lightweight visible/live status feedback.
- Consolidate repeated presentation tokens where practical while preserving the existing offline, single-file implementation and institutional visual direction.

## Capabilities

### New Capabilities

- `study-interface-clarity`: Defines the labeled, grouped, progressively disclosed study and utility controls, accessible card interaction, and responsive presentation.
- `safe-editing-and-feedback`: Defines draft-preserving editor cancellation, reversible removal, outcome feedback, and accessible state announcements.

### Modified Capabilities

<!-- No existing repository capability specifications were found. -->

## Impact

- `tsofa.html`: primary HTML, CSS, and JavaScript changes for controls, editor flow, removal/undo, status announcements, focus behavior, and responsive layout.
- `create-example-flashcards.py` and generated `flashcards-*.html`: regenerated only if template changes require synchronized standalone decks.
- `README.md`: update user-facing instructions if control labels, editor cancellation, or study-tool disclosure behavior changes the documented workflow.
- No server, build system, package, or runtime dependency changes.
