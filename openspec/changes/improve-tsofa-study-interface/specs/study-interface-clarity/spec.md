## ADDED Requirements

### Requirement: Primary study controls are labeled and hierarchically grouped
The application SHALL expose visible text labels for primary study actions, including previous, next, flip, and remove, and SHALL group secondary study tools separately from authoring and deck-management tools.

#### Scenario: First-time user identifies core actions
- **WHEN** a user opens a deck without hovering any control
- **THEN** the user can identify previous, next, flip, and remove actions from visible labels and the card progress remains visible

#### Scenario: User opens secondary tools
- **WHEN** a user activates the labeled study-tools disclosure
- **THEN** formatting, timer, print, download, and related study utilities are revealed without removing the primary study controls

#### Scenario: User opens authoring tools
- **WHEN** a user activates the labeled edit/deck-tools disclosure
- **THEN** editing and deck-management actions are revealed in a distinct group from study navigation

### Requirement: The flashcard supports accessible keyboard interaction
The application SHALL expose the flashcard as a focusable, keyboard-operable flip control with an accessible name, visible focus styling, and an instruction that communicates click, keyboard, or touch flipping.

#### Scenario: Keyboard user flips a card
- **WHEN** the flashcard has focus and the user presses Enter or Space
- **THEN** the card flips once, the default page-scroll behavior for Space is prevented, and focus remains on the card

#### Scenario: Keyboard user sees focus
- **WHEN** keyboard focus enters the flashcard
- **THEN** a clearly visible focus indicator is rendered without relying on color alone

### Requirement: The layout remains usable at narrow widths
The application SHALL allow grouped controls to wrap or stack at narrow viewport widths without clipping labels, obscuring the card, or making the primary study actions unreachable.

#### Scenario: Small viewport study
- **WHEN** a deck is opened in a narrow mobile-sized viewport
- **THEN** the card, progress, flip, and navigation controls remain visible or reachable, and labels do not overflow their control boundaries
