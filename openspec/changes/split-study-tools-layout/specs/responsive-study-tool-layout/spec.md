## ADDED Requirements

### Requirement: Grouped controls adapt to available width
The viewer SHALL use content-aware wrapping for grouped buttons, timer controls, export controls, and language selection so localized labels do not clip or force horizontal scrolling at desktop, intermediate, or mobile widths.

#### Scenario: Intermediate desktop width
- **WHEN** the viewer is displayed between 521px and 800px wide
- **THEN** secondary controls wrap or resize based on available content width, and no button label is clipped or pushed outside the viewer

#### Scenario: Narrow mobile width
- **WHEN** the viewer is displayed at or below the mobile breakpoint
- **THEN** grouped controls stack or wrap with touch targets of at least 44px, while the card and primary navigation remain reachable

#### Scenario: Long localized labels
- **WHEN** a language with longer translated labels is selected
- **THEN** buttons may wrap to multiple lines within their bounds, timer/export rows remain usable, and no horizontal page scrolling is introduced

### Requirement: Open utility content remains proportionate to the study surface
The viewer SHALL keep low-frequency Session & export controls behind their own disclosure and SHALL avoid requiring the open Practice group to display the full utility surface.

#### Scenario: User opens only Practice
- **WHEN** the user opens Practice in the normal study flow
- **THEN** the resulting content remains compact enough to keep the card and primary study controls within the user’s immediate context at a 1011×674 viewport

#### Scenario: User needs export or language
- **WHEN** the user opens Session & export
- **THEN** the additional controls appear without changing the layout or focus behavior of the Practice and Reading groups
