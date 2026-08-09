## ADDED Requirements

### Requirement: Editor cancellation protects unsaved drafts
The application SHALL retain the current editor draft until the user explicitly confirms discard, SHALL close immediately when no changes exist, and SHALL provide an option to continue editing when changes do exist.

#### Scenario: Cancel an unchanged editor
- **WHEN** the user opens the editor and cancels without modifying the draft
- **THEN** the editor closes without a confirmation prompt and the deck remains unchanged

#### Scenario: Cancel a changed editor
- **WHEN** the user cancels after changing the draft
- **THEN** the application offers keep editing and discard choices, retains the draft if keep editing is selected, and discards it only if discard is confirmed

#### Scenario: Apply an editor draft
- **WHEN** the user applies a valid draft
- **THEN** the deck updates, the editor closes or returns to its documented post-apply state, and a visible status message confirms the update

### Requirement: Card removal is reversible and communicated
The application SHALL provide a reversible remove action, a visibly labeled Undo recovery action while recovery is available, and distinct destructive and recovery styling.

#### Scenario: Remove the current card
- **WHEN** the user activates Remove
- **THEN** the card is removed from the active study sequence, the next valid study state is shown, and a concise status message identifies that the card was removed and can be undone

#### Scenario: Undo removal
- **WHEN** the user activates the labeled Undo action while recovery is available
- **THEN** the removed card is restored once at its prior logical position or documented fallback position, and the status message confirms restoration

#### Scenario: Recovery expires
- **WHEN** the removal recovery window expires without Undo
- **THEN** the Undo action is disabled or removed and the application does not restore the card from that expired action

### Requirement: Meaningful state changes are announced
The application SHALL provide concise visible feedback and an accessible polite live-region announcement for successful or rejected shuffle, inversion, timer, download, print, editor, removal, and undo actions.

#### Scenario: Study state changes
- **WHEN** the user shuffles, inverts, or changes the timer
- **THEN** the current state and resulting action are announced without a blocking modal

#### Scenario: Download or print outcome
- **WHEN** the user requests a download or print
- **THEN** the application reports the initiated or rejected outcome through the status mechanism

#### Scenario: Rapid navigation
- **WHEN** the user rapidly moves between cards without another state change
- **THEN** the application does not produce repetitive feedback for unchanged actions that obscures the study experience
