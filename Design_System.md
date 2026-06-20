# Hamro Digital Studio Light Design System

## Direction

The site uses a luminous atelier direction: warm off-white foundations, editorial image-led layouts, deep charcoal text, and restrained bronze accents. Pages should feel bright, premium, and airy, with generous whitespace and high-key image treatment.

## Color Tokens

- Foundation: `#fdf8f2`
- Surface: `#fffdf9`
- Soft surface: `#f7f1ea`
- High surface: `#ece5de`
- Primary bronze: `#735a3a`
- Text: `#1c1b1a`
- Soft text: `#4d4540`
- Charcoal depth: `#181512`

## Typography

- Headline: Playfair Display
- Body: Source Serif 4
- Label: Plus Jakarta Sans

Use Playfair Display for major headings, page titles, brand text, and section titles. Use Source Serif 4 for paragraphs, descriptions, and long-form copy. Use Plus Jakarta Sans for navigation, buttons, eyebrows, tags, and compact UI labels.

## Usage

- Use full-bleed or large editorial imagery for hero and portfolio moments.
- Use flatter cream sections with minimal radius and subtle shadows.
- Use deep charcoal for primary headings, filled call-to-action buttons, and major CTA bands.
- Use bronze for eyebrows, active navigation states, borders, focus rings, and secondary actions.
- Keep imagery bright and clear; avoid heavy dark filters except for readable gallery overlays.
- Maintain roomy spacing between sections and compact, readable controls in the navigation.

## CSS Source

The canonical implementation lives in `app/globals.css` under the root tokens and shared component classes. New pages should reuse those variables and patterns instead of introducing page-specific palettes.
