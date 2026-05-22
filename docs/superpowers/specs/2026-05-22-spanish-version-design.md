# MaterialCal — Spanish (ES) Version Design

**Date:** 2026-05-22
**Status:** Approved (design), pending spec review
**Author:** Michael Thomas + Claude

## Goal

Launch a Spanish-language version of MaterialCal targeting the Mexico + neutral
Latin American market, reusing the existing domain authority. Phase 1 covers the
top 8–10 highest-volume construction calculators. The Spanish must read as native
LatAm writing — not literal translation.

## Target market & localization rules

- **Market:** Mexico + neutral LatAm (covers MX, CO, AR, CL, PE…).
- **Language register:** neutral LatAm Spanish. Construction terminology must be
  the real trade vocabulary used in LatAm, NOT calques from English:
  - "concreto" (not "hormigón", which is Spain)
  - "grava", "arena", "varilla", "cimbra", "losa", "castillo", "mortero"
  - "metros cuadrados" / "metros cúbicos", "toneladas", "kilogramos"
- **Units:** **metric by default** when `lang="es"`. The imperial/metric toggle
  stays available, but metric is pre-selected and all worked examples use metric.
- **Currency:** price field stays optional with no fixed currency symbol (LatAm
  spans many currencies). Use generic "$ por …" / "precio por …" wording.
- **Content quality bar:** each page is written natively (~2000 words), with
  relocalized examples (m³, not cubic yards), local trade terms, and original
  FAQs. No machine/word-for-word translation. This is the make-or-break rule.

## Architecture: subdirectory `/es/` + parametrized components

### URL structure

```
materialcal.com/                              → EN homepage (unchanged)
materialcal.com/es/                            → ES hub ("Calculadoras de materiales")
materialcal.com/es/calculadora-de-concreto/
materialcal.com/es/calculadora-de-metros-cuadrados/
…
```

- Subdirectory `/es/` inherits domain authority (better SEO than a subdomain for
  a new locale).
- **Translated slugs** with real ES keywords (boosts ES SEO).
- `trailingSlash: 'always'` is preserved (matches existing config).

### Phase 1 calculators (10)

| ES slug | EN source page | Notes |
|---|---|---|
| `calculadora-de-concreto` | concrete-calculator | Highest LatAm volume |
| `calculadora-de-metros-cuadrados` | square-footage-calculator | 201k EN; reframe to m² |
| `calculadora-de-grava` | gravel-calculator | |
| `calculadora-de-pintura` | paint-calculator | |
| `calculadora-de-arena` | sand-calculator | |
| `calculadora-de-azulejos` | tile-calculator | "azulejos" / "loseta" |
| `calculadora-de-metros-cubicos` | cubic-feet-calculator | Reframe imperial→metric |
| `calculadora-de-asfalto` | asphalt-calculator | |
| `calculadora-de-piedra` | stone-calculator | |
| `calculadora-de-escaleras` | stair-calculator | |

Slugs are subject to keyword validation during implementation; the design treats
the above as the working set.

## Components: parametrize with `lang`, do not duplicate

The 25 existing calculator widgets have hardcoded English UI labels ("Length",
"Width", "Imperial", "Metric", "You need", result strings, copy/share button
text). Phase 1 only needs the 10 widgets above, but the mechanism is shared.

### Approach: i18n string dictionaries + `lang` prop

1. Create `src/i18n/en.ts` and `src/i18n/es.ts` exporting a typed `UIStrings`
   object: shared widget labels (units toggle, shape names, field labels,
   result labels, button text) plus shared chrome (nav, footer).
2. Add a `lang?: 'en' | 'es'` prop (default `'en'`) to each Phase-1 calculator
   component. The component reads its labels from the dictionary for that `lang`.
3. **Default units:** when `lang === 'es'`, the metric toggle button renders with
   the `active` class (and `aria-pressed="true"`) instead of imperial, and the
   inline `<script>` initializes in metric mode.
4. EN pages keep working unchanged (default `lang="en"`, default imperial).

Calculation logic is unchanged — only labels and the default-unit selection vary.

### Calculator-specific content (selects, options)

Some widgets have domain content in `<option>` text (e.g. material density
dropdowns: "Crushed stone (#57) — 1.42 t/yd³"). For ES these become metric and
LatAm-worded ("Piedra triturada — 1.68 t/m³"). These option lists move into the
i18n dictionaries (per-calculator namespaces) so the same component renders the
right list per language.

## Data: extend `calculators.ts`

Add optional ES fields to `CalculatorMeta`:

```ts
interface CalculatorMeta {
  // …existing…
  slug_es?: string;
  title_es?: string;
  shortTitle_es?: string;
  description_es?: string;
  status_es?: 'live' | 'planned';   // independent ES rollout state
}
```

New helpers:
- `getLiveCalculatorsES()` → calcs where `status_es === 'live'`.
- `getCalculatorBySlugEs(slug)` → lookup by ES slug.
- `getRelatedCalculatorsES(slug, count)` → ES related list.

Cluster names also get ES labels (`CLUSTERS` gains `name_es`, `description_es`).

## SEO: multilingual signals

### BaseLayout changes

- Add `lang?: 'en' | 'es'` prop → sets `<html lang="…">`.
- Add an `alternates` prop (array of `{ lang, href }`) → render reciprocal
  **hreflang** tags on every page that has both versions:
  ```html
  <link rel="alternate" hreflang="en" href="https://materialcal.com/concrete-calculator/">
  <link rel="alternate" hreflang="es" href="https://materialcal.com/es/calculadora-de-concreto/">
  <link rel="alternate" hreflang="x-default" href="https://materialcal.com/concrete-calculator/">
  ```
  Both EN and ES versions of a page reference each other (and themselves).
- `og:locale` set per language (`en_US` / `es_MX`).
- JSON-LD schema `inLanguage` field added; schema content (names, descriptions,
  HowTo steps, FAQ) is the ES content on ES pages.

### Sitemap

`src/pages/sitemap.xml.ts` extends to include ES URLs from
`getLiveCalculatorsES()` plus the ES hub. Optionally emit `xhtml:link`
alternates per URL (nice-to-have, not required for Phase 1).

### robots.txt

No change needed (already `Allow: /`, sitemap reference unchanged).

## Navigation: language switcher

- Header and Footer get a small language selector (🇺🇸 EN / 🇲🇽 ES) that links to
  the equivalent page in the other language when one exists, otherwise to that
  language's hub.
- ES pages use ES nav labels (Calculadoras / Acerca de / Metodología / Contacto)
  from the i18n dictionary.

## Out of scope (Phase 1)

- Remaining 15 calculators in ES (Phase 2, after ES indexation is validated).
- ES versions of trust pages (about/methodology/contact/privacy/terms) — in
  Phase 1 the ES footer links to the existing EN trust pages; full ES trust
  pages are Phase 2.
- Other languages (FR, PT) — future.
- Per-country currency handling — deferred (price stays generic).

## Success criteria

- 10 ES calculator pages + ES hub live under `/es/`.
- Each ES widget fully localized, metric default, calculations correct.
- hreflang reciprocity validated (EN↔ES) with no duplicate-content flags.
- ES URLs present in sitemap and submitted to Search Console.
- Spanish reads as native LatAm construction writing (manual quality check).
- EN site unchanged and still passing (no regressions).

## Risks & mitigations

- **Bad/literal Spanish** → primary risk. Mitigation: native rewriting with real
  trade vocabulary, relocalized metric examples, per-page review.
- **Component refactor breaks EN** → mitigation: `lang` defaults to `'en'`,
  EN behavior is the unchanged default path; smoke-test all EN routes after.
- **Wrong slugs (keyword mismatch)** → mitigation: validate ES slugs against
  real search terms before finalizing.
- **Density/unit conversion errors** → mitigation: convert t/yd³ → t/m³ carefully
  and verify worked examples numerically.
