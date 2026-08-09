## Context

TSOFA is a self-contained HTML application with inline CSS and JavaScript, generated into standalone decks by `create-example-flashcards.py`. The current `tsofa.html` exposes study, formatting, timer, printing, downloading, editing, and removal controls in a single crowded surface. The implementation must remain dependency-free, work when opened offline, preserve existing flashcard formats and keyboard/touch behavior, and keep generated decks synchronized with the template.

## Goals / Non-Goals

**Goals:**

- Establish a clear hierarchy: card navigation and flip first, secondary study tools next, authoring/deck management behind labeled disclosure.
- Make all important actions understandable without relying on hover tooltips or symbol recognition.
- Preserve drafts until an explicit discard decision and provide reversible removal with visible and screen-reader feedback.
- Provide a small status/live-region mechanism reused by state-changing actions.
- Improve keyboard focus, responsive wrapping, and token reuse without changing the flashcard data model.

**Non-Goals:**

- No framework, package, network request, server persistence, or build pipeline.
- No redesign of the flashcard content format or replacement of the existing editor model.
- No new study scheduling, scoring, authentication, or analytics features.

## Decisions

1. **Use semantic HTML disclosure for secondary controls.** Keep navigation, flip, and progress visible; place formatting, timer, print/download, and edit/deck actions in labeled `<details>` groups or an equivalent native disclosure. This gives keyboard and touch users a discoverable control while avoiding a permanently expanded utility wall. A custom modal/menu was rejected because it adds focus-management complexity to a zero-build page.

2. **Treat the card as an accessible button-like interaction.** Add a focusable semantic control (or equivalent `role="button"` with `tabindex="0"`), visible `:focus-visible` styling, an accessible name, and Enter/Space activation while retaining click and swipe behavior. A non-focusable clickable `div` was rejected because it excludes keyboard users and makes the flip affordance hard to discover.

3. **Centralize transient feedback.** Add one visible status element backed by `role="status"`/`aria-live="polite"`, with a small helper used by shuffle, inversion, timer changes, downloads, editor apply/cancel, and removal/undo. Status text is concise and non-modal; destructive confirmation remains explicit only where needed.

4. **Use draft snapshots for editor cancellation.** Capture the editor's initial state when it opens, keep the current draft in place while the editor is open, and confirm only when cancellation would discard changes. Apply commits the draft and reports success; cancel with no changes closes immediately; cancel with changes offers keep editing or discard. Refresh-based discard guidance is removed.

5. **Implement removal as a reversible state transition.** Remove the current card from the active deck, retain enough data and position to restore it, announce the removal, and expose a labeled Undo action for the existing undo window. Undo restores the card and focus/state consistently. The recovery action uses a non-destructive visual treatment distinct from the red remove action.

6. **Use CSS custom properties for repeated presentation tokens.** Define the existing palette, spacing, and type scale at the single-file root and replace repeated literals only in touched regions. This addresses detector findings without broad visual churn or introducing an external design system.

7. **Regenerate examples from the template.** The implementation changes `tsofa.html` first, then runs `python create-example-flashcards.py` when the generator contract requires updated standalone decks. Generated diffs are reviewed for content-only synchronization and unrelated output changes are excluded.

## Risks / Trade-offs

- [Risk] Existing generated decks may contain small template substitutions or copied inline state that differs from `tsofa.html`. → Mitigation: inspect the generator and compare a regenerated representative deck before applying broad output updates.
- [Risk] Disclosure changes could hide a frequently used utility from existing users. → Mitigation: use clear group labels, preserve keyboard shortcuts, and keep the primary study row unchanged.
- [Risk] Reversible removal could conflict with existing history/undo behavior. → Mitigation: trace current removal and undo data flow, preserve its semantics, and add focused tests/manual cases for remove → undo → navigation.
- [Risk] Live-region announcements may become noisy during rapid navigation. → Mitigation: announce meaningful state changes only, avoid announcing every unchanged render, and keep messages short.
- [Risk] Static checks cannot prove accessibility or browser interaction. → Mitigation: require manual keyboard, touch, responsive, editor, removal, download, and generated-deck smoke checks in the task validation.

## Migration Plan

1. Update the template and editor/control behavior in `tsofa.html`.
2. Update `README.md` only where the user-facing control workflow changes.
3. Regenerate example decks if required by the generator and review the diff.
4. Run Python syntax validation and serve the repository for browser smoke testing.
5. Roll back by restoring the scoped template, documentation, and generated files if a regression is found; no persistent migration is required.

## Open Questions

- Confirm the existing removal undo lifetime and preserve it unless the implementation exposes a clear reason to adjust it.
- Confirm which generated decks are tracked outputs before regenerating all examples.
