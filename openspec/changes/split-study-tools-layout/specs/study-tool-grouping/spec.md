## ADDED Requirements

### Requirement: Viewer tools are grouped by user intent
The viewer SHALL provide separate labeled disclosures for Practice, Reading, and Session & export tools rather than exposing all secondary controls under one Study tools group.

#### Scenario: User opens practice tools
- **WHEN** the user opens the Practice disclosure
- **THEN** shuffle, question/answer swap, removal, and available recovery actions are shown together, while reading, timer, export, and language controls remain outside that group

#### Scenario: User opens reading tools
- **WHEN** the user opens the Reading disclosure
- **THEN** font-size and text-alignment controls are shown without presenting removal, timer, export, or language controls in the same group

#### Scenario: User opens session and export tools
- **WHEN** the user opens the Session & export disclosure
- **THEN** timer, print, download, and language controls are shown together and practice controls remain outside that group

### Requirement: Practice controls communicate destructive and recovery hierarchy
The viewer SHALL distinguish routine practice actions from Remove and SHALL show Undo as an available recovery action only while a removal can be undone.

#### Scenario: No removal is available
- **WHEN** the viewer has no recoverable removal
- **THEN** Undo is hidden or visually collapsed and does not compete with active practice actions

#### Scenario: A card is removed
- **WHEN** the user removes a card
- **THEN** Undo becomes visible and enabled in the Practice group, uses recovery styling distinct from Remove, and remains available for the existing recovery window

#### Scenario: Recovery expires
- **WHEN** the recovery window expires
- **THEN** Undo is hidden or disabled and the Practice group returns to its no-recovery state

### Requirement: Disclosure use preserves keyboard control
The viewer SHALL provide visible focus styling for summaries and controls and SHALL preserve or restore a predictable focus target when a disclosure is closed.

#### Scenario: Keyboard user opens and closes a group
- **WHEN** the user focuses a disclosure summary, opens it, uses a control, and closes the group
- **THEN** focus remains on the summary or returns to the card/primary study row through a predictable documented path, with no focus loss to the page body
