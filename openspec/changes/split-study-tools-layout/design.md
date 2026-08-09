## Context

The viewer in `tsofa.html` currently has one openable Study tools disclosure whose content combines practice-state actions, reading preferences, timing, printing, downloading, and language selection. The target layout is a 600px single-column offline page, and the supplied 1011×674 browser view shows the expanded group behaving like a dense settings panel. The implementation must remain inline, dependency-free, multilingual, touch-friendly, and synchronized into generated decks.

## Goals / Non-Goals

**Goals:**

- Make the open utility state scannable by separating controls according to user intent.
- Keep practice actions closest to the study flow and move low-frequency management/export actions behind a separate disclosure.
- Make removal/recovery hierarchy explicit without changing the existing data or undo behavior.
- Support long translations and intermediate widths through content-aware wrapping.
- Strengthen keyboard focus visibility and return focus to the study surface after disclosure use.

**Non-Goals:**

- No change to flashcard data, editor serialization, keyboard shortcut meanings, or print/download formats.
- No new framework, dependency, server behavior, persistence, analytics, or visual redesign outside the viewer tool area.
- No forced modal or custom disclosure system where native HTML disclosure is sufficient.

## Decisions

1. **Use three purpose-based native disclosures.** Practice contains shuffle, swap, remove, and contextual undo. Reading contains font size and alignment. Session & export contains timer, print, download, and language. Native `<details>` preserves keyboard/touch semantics and avoids custom focus-management code. A single disclosure was rejected because it creates category overload; a modal was rejected because these tools do not require protected focus.

2. **Make Practice the only initially expanded utility group, if an expanded state is retained.** This keeps the most study-relevant actions discoverable while preventing export and language controls from expanding into the first view. The implementation SHALL preserve the user’s ability to close every group.

3. **Keep Undo contextual.** The Undo control remains in Practice but is hidden or visually collapsed until a removal is available, then becomes visible/enabled with its existing recovery status. This gives recovery prominence when needed without presenting a disabled equal-weight action on every study session.

4. **Use content-aware grids and flex wrapping.** Secondary actions SHALL use `repeat(auto-fit, minmax(min(100%, 10rem), 1fr))` or an equivalent layout, while timer and export rows SHALL wrap. This replaces the current fixed four-column assumption and tolerates localized labels without horizontal clipping.

5. **Add shared focus treatment and focus return.** `summary:focus-visible`, buttons, select, and the card SHALL have a visible focus indicator. When a disclosure closes after interaction, focus SHALL return to its summary or the card according to the interaction path; no focus trap is needed.

6. **Preserve semantic color roles while reducing visual competition.** Practice actions retain their existing semantic colors, but destructive Remove is separated from routine practice controls through spacing or a subgroup label, and Undo uses recovery styling. No new palette or decorative surface is introduced.

7. **Regenerate examples from the template.** After updating `tsofa.html`, run the existing generator with UTF-8 handling and review all generated deck changes for expected synchronization.

## Risks / Trade-offs

- [Risk] More disclosures can make a rarely used tool harder to find. → Mitigation: use explicit labels, keep Practice visible/first, and preserve keyboard shortcuts.
- [Risk] Contextual Undo disappearing could reduce discoverability after a removal. → Mitigation: show a concise status message and reveal Undo immediately while recovery is available.
- [Risk] Long translations may still exceed a single control width. → Mitigation: allow button text to wrap, use min-width constraints, and test representative long-language labels at desktop and mobile widths.
- [Risk] Focus return could feel surprising after mouse use. → Mitigation: return focus only after keyboard-originated disclosure interaction or use the summary as the stable fallback; verify with keyboard smoke tests.
- [Risk] Regeneration can produce broad diffs. → Mitigation: compare the template-derived changes and exclude unrelated source-data changes.

## Migration Plan

1. Update viewer markup/CSS and minimal disclosure/focus behavior in `tsofa.html`.
2. Update README control guidance if labels or group names change.
3. Regenerate tracked standalone decks.
4. Run syntax, strict OpenSpec, detector, and desktop/mobile browser checks.
5. Roll back the scoped template, documentation, and generated outputs if the grouped layout causes navigation, print, or editor regressions.

## Open Questions

- Confirm whether “Session & export” or “More tools” best matches the project’s preferred terminology after implementation review.
- Confirm whether Practice should remain open by default in generated decks or start closed for a fully minimal first viewport.
