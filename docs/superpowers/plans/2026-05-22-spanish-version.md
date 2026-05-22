# Spanish (ES) Version Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Launch a native-Spanish (Mexico + neutral LatAm) version of MaterialCal under `/es/` covering the top 10 calculators, metric-default, with reciprocal hreflang.

**Architecture:** Subdirectory `/es/` on the same domain. Existing calculator widgets are parametrized with a `lang` prop that selects UI strings from i18n dictionaries and switches the default unit system to metric (including metric result output: m³ + toneladas). ES pages are new `.astro` files with natively-written Spanish content. `calculators.ts` is extended with `_es` fields. `BaseLayout` emits hreflang.

**Tech Stack:** Astro 4.16 (static SSG), TypeScript, vanilla JS inline scripts. No test framework — verification is `npm run build` + `curl` route checks + `grep` on built HTML (the established project pattern).

**Spanish quality bar (applies to every content step):** Native LatAm Spanish, real construction trade vocabulary (concreto, grava, arena, varilla, cimbra, losa, mortero, toneladas, m³). NOT literal translation. Relocalized metric examples. Original FAQs. This is a hard requirement, not a nice-to-have.

---

## File Structure

**New files:**
- `src/i18n/types.ts` — `UIStrings` and calculator-option types
- `src/i18n/en.ts` — English strings (extracted from current hardcoded labels)
- `src/i18n/es.ts` — Spanish strings (native LatAm)
- `src/i18n/index.ts` — `getStrings(lang)` helper
- `src/pages/es/index.astro` — ES hub
- `src/pages/es/calculadora-de-concreto.astro` (+ 9 more ES calculator pages)
- `src/data/faqs/es/concreto.ts` (+ 9 more ES FAQ files)

**Modified files:**
- `src/data/calculators.ts` — add `_es` fields + ES helpers
- `src/layouts/BaseLayout.astro` — `lang` + `alternates` (hreflang) props
- `src/components/Header.astro` — `lang` prop + language switcher
- `src/components/Footer.astro` — `lang` prop
- 10 calculator components — `lang` prop, dict labels, metric default + metric result output
- `src/pages/sitemap.xml.ts` — include ES URLs
- The 10 EN calculator pages — add `alternates` to wire hreflang back to ES

---

## Task 1: i18n types and dictionaries (shared chrome + widget labels)

**Files:**
- Create: `src/i18n/types.ts`
- Create: `src/i18n/en.ts`
- Create: `src/i18n/es.ts`
- Create: `src/i18n/index.ts`

- [ ] **Step 1: Define the types**

Create `src/i18n/types.ts`:

```ts
export type Lang = 'en' | 'es';

export interface NavStrings {
  calculators: string;
  about: string;
  methodology: string;
  contact: string;
  homeAria: string;
  switchTo: string;        // label for the language switcher target
}

export interface WidgetStrings {
  calculator: string;      // "Calculator" / "Calculadora"
  imperial: string;
  metric: string;
  units: string;           // aria-label
  shape: string;           // aria-label
  rectangle: string;
  circle: string;
  triangle: string;
  trapezoid: string;
  length: string;
  width: string;
  diameter: string;
  depth: string;
  height: string;
  base: string;
  price: string;
  optional: string;
  wasteFactor: string;
  wasteNone: string;
  wasteRecommended: string;
  youNeed: string;
  totalCost: string;
  copyResult: string;
  copied: string;
  print: string;
  share: string;
  // result units
  cubicYards: string;      // "cubic yards" / "metros cúbicos"
  cubicMeters: string;
  tons: string;            // "tons" / "toneladas"
  bags: string;            // "bags" / "sacos"
}

export interface FooterStrings {
  tagline: string;
  popular: string;
  moreCalculators: string;
  browseAll: string;
  company: string;
  about: string;
  methodology: string;
  contact: string;
  privacy: string;
  terms: string;
  disclaimer: string;     // the "© … all calculations are estimates" line
}

export interface UIStrings {
  nav: NavStrings;
  widget: WidgetStrings;
  footer: FooterStrings;
}
```

- [ ] **Step 2: Write the English dictionary**

Create `src/i18n/en.ts` mirroring the current hardcoded English strings:

```ts
import type { UIStrings } from './types';

export const en: UIStrings = {
  nav: {
    calculators: 'Calculators',
    about: 'About',
    methodology: 'Methodology',
    contact: 'Contact',
    homeAria: 'MaterialCal home',
    switchTo: 'Español'
  },
  widget: {
    calculator: 'Calculator',
    imperial: 'Imperial', metric: 'Metric', units: 'Units', shape: 'Shape',
    rectangle: '▭ Rectangle', circle: '● Circle', triangle: '▲ Triangle', trapezoid: '⬢ Trapezoid',
    length: 'Length', width: 'Width', diameter: 'Diameter', depth: 'Depth', height: 'Height', base: 'Base',
    price: 'Price', optional: '(optional)',
    wasteFactor: 'Waste factor', wasteNone: 'None', wasteRecommended: '5% (recommended)',
    youNeed: 'You need', totalCost: 'total cost',
    copyResult: '📋 Copy result', copied: '✓ Copied', print: '🖨 Print', share: '↗ Share',
    cubicYards: 'cubic yards', cubicMeters: 'cubic meters', tons: 'tons', bags: 'bags'
  },
  footer: {
    tagline: 'Free, accurate calculators for every construction and landscaping material. Trusted by contractors and homeowners.',
    popular: 'Popular', moreCalculators: 'More Calculators', browseAll: 'Browse all →',
    company: 'Company', about: 'About', methodology: 'Methodology', contact: 'Contact',
    privacy: 'Privacy', terms: 'Terms',
    disclaimer: 'All calculations are estimates — always confirm with your supplier before ordering.'
  }
};
```

- [ ] **Step 3: Write the Spanish dictionary (native LatAm)**

Create `src/i18n/es.ts`:

```ts
import type { UIStrings } from './types';

export const es: UIStrings = {
  nav: {
    calculators: 'Calculadoras',
    about: 'Acerca de',
    methodology: 'Metodología',
    contact: 'Contacto',
    homeAria: 'Inicio de MaterialCal',
    switchTo: 'English'
  },
  widget: {
    calculator: 'Calculadora',
    imperial: 'Imperial', metric: 'Métrico', units: 'Unidades', shape: 'Forma',
    rectangle: '▭ Rectángulo', circle: '● Círculo', triangle: '▲ Triángulo', trapezoid: '⬢ Trapecio',
    length: 'Largo', width: 'Ancho', diameter: 'Diámetro', depth: 'Profundidad', height: 'Altura', base: 'Base',
    price: 'Precio', optional: '(opcional)',
    wasteFactor: 'Desperdicio', wasteNone: 'Ninguno', wasteRecommended: '5% (recomendado)',
    youNeed: 'Necesitas', totalCost: 'costo total',
    copyResult: '📋 Copiar resultado', copied: '✓ Copiado', print: '🖨 Imprimir', share: '↗ Compartir',
    cubicYards: 'yardas cúbicas', cubicMeters: 'metros cúbicos', tons: 'toneladas', bags: 'sacos'
  },
  footer: {
    tagline: 'Calculadoras gratuitas y precisas para cada material de construcción y jardinería. Útiles para constructores y propietarios.',
    popular: 'Populares', moreCalculators: 'Más calculadoras', browseAll: 'Ver todas →',
    company: 'Empresa', about: 'Acerca de', methodology: 'Metodología', contact: 'Contacto',
    privacy: 'Privacidad', terms: 'Términos',
    disclaimer: 'Todos los cálculos son estimaciones — confirma siempre con tu proveedor antes de comprar.'
  }
};
```

- [ ] **Step 4: Write the accessor**

Create `src/i18n/index.ts`:

```ts
import type { Lang, UIStrings } from './types';
import { en } from './en';
import { es } from './es';

const dicts: Record<Lang, UIStrings> = { en, es };

export const getStrings = (lang: Lang = 'en'): UIStrings => dicts[lang];
export type { Lang, UIStrings } from './types';
```

- [ ] **Step 5: Verify it compiles**

Run: `cd c:/Users/micth/Desktop/dev/seo/claud/calcbtp && npx astro check 2>&1 | tail -20`
Expected: no errors referencing `src/i18n/*`. (Pre-existing `.astro` import-conflict hints may remain — ignore those.)

- [ ] **Step 6: Commit**

```bash
git add src/i18n/
git commit -m "Add i18n string dictionaries (en/es) for ES version"
```

---

## Task 2: Extend calculators.ts with ES fields and helpers

**Files:**
- Modify: `src/data/calculators.ts`

- [ ] **Step 1: Extend the interfaces**

In `src/data/calculators.ts`, add to `CalculatorMeta` (after `priority`):

```ts
  // Spanish (ES) version — Phase 1
  slug_es?: string;
  title_es?: string;
  shortTitle_es?: string;
  description_es?: string;
  status_es?: 'live' | 'planned';
```

Add to the `Cluster` interface:

```ts
  name_es?: string;
  description_es?: string;
```

- [ ] **Step 2: Populate ES fields for the 10 Phase-1 calculators**

Set these `_es` fields on the matching entries (leave all other calculators without `_es` fields → they stay EN-only). Use native LatAm terms:

| EN slug | slug_es | title_es | shortTitle_es |
|---|---|---|---|
| concrete-calculator | calculadora-de-concreto | Calculadora de Concreto — Losas, Zapatas y Columnas | Concreto |
| square-footage-calculator | calculadora-de-metros-cuadrados | Calculadora de Metros Cuadrados | Metros cuadrados |
| gravel-calculator | calculadora-de-grava | Calculadora de Grava — Volumen, Peso y Costo | Grava |
| paint-calculator | calculadora-de-pintura | Calculadora de Pintura — Paredes y Techos | Pintura |
| sand-calculator | calculadora-de-arena | Calculadora de Arena | Arena |
| tile-calculator | calculadora-de-azulejos | Calculadora de Azulejos y Loseta | Azulejos |
| cubic-feet-calculator | calculadora-de-metros-cubicos | Calculadora de Metros Cúbicos | Metros cúbicos |
| asphalt-calculator | calculadora-de-asfalto | Calculadora de Asfalto | Asfalto |
| stone-calculator | calculadora-de-piedra | Calculadora de Piedra | Piedra |
| stair-calculator | calculadora-de-escaleras | Calculadora de Escaleras — Huella y Peralte | Escaleras |

Set `status_es: 'live'` and a native `description_es` (one sentence) on each of these 10. Example for concrete:

```ts
    description_es: 'Calcula el concreto que necesitas en metros cúbicos y sacos para losas, zapatas y columnas.',
```

Add `name_es` / `description_es` to each cluster used by the 10 (aggregates, volume, surfaces, structure):

```ts
  { id: 'aggregates', name: 'Aggregates & Stone', name_es: 'Agregados y piedra',
    description: '…', description_es: 'Grava, piedra triturada, arena y roca decorativa.' },
  { id: 'volume',     name: 'Volume & Measurement', name_es: 'Volumen y medidas',
    description: '…', description_es: 'Metros cúbicos, metros cuadrados, volumen.' },
  { id: 'surfaces',   name: 'Surfaces & Paving', name_es: 'Superficies y pavimento',
    description: '…', description_es: 'Concreto, asfalto, azulejos y pisos.' },
  { id: 'structure',  name: 'Structure & Roofing', name_es: 'Estructura y techos',
    description: '…', description_es: 'Escaleras, muros, estructura.' },
```

- [ ] **Step 3: Add ES helper functions**

At the bottom of `src/data/calculators.ts`:

```ts
export const getLiveCalculatorsES = () =>
  CALCULATORS.filter(c => c.status_es === 'live');

export const getCalculatorBySlugEs = (slugEs: string) =>
  CALCULATORS.find(c => c.slug_es === slugEs);

export const getRelatedCalculatorsES = (slug: string, count = 4) => {
  const current = getCalculator(slug);
  if (!current) return [];
  const liveEs = getLiveCalculatorsES().filter(c => c.slug !== slug);
  const sameCluster = liveEs.filter(c => c.cluster === current.cluster);
  const others = liveEs.filter(c => c.cluster !== current.cluster);
  return [...sameCluster, ...others].slice(0, count);
};
```

- [ ] **Step 4: Verify build still works**

Run: `npm run build 2>&1 | tail -5`
Expected: `[build] Complete!`, 32 pages (no new pages yet — data only).

- [ ] **Step 5: Commit**

```bash
git add src/data/calculators.ts
git commit -m "Extend calculators catalog with ES fields and helpers"
```

---

## Task 3: BaseLayout hreflang + lang support

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Extend Props and head**

Change the frontmatter Props interface in `src/layouts/BaseLayout.astro` to add:

```ts
  lang?: 'en' | 'es';
  alternates?: { lang: string; href: string }[];
```

Destructure with default: `const { title, description, canonical, schema, noindex, lang = 'en', alternates } = Astro.props;`

Change `<html lang="en">` to `<html lang={lang}>`.

Add after the canonical link:

```astro
  {alternates && alternates.map(a => (
    <link rel="alternate" hreflang={a.lang} href={a.href} />
  ))}
```

Change the OG locale line — add:

```astro
  <meta property="og:locale" content={lang === 'es' ? 'es_MX' : 'en_US'} />
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -3`
Expected: `[build] Complete!`

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "Add lang + hreflang support to BaseLayout"
```

---

## Task 4: Header & Footer lang prop + language switcher

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Header accepts lang + switcher**

In `src/components/Header.astro` frontmatter add:

```ts
import { getStrings } from '@i18n/index';
export interface Props { lang?: 'en' | 'es'; switchHref?: string; }
const { lang = 'en', switchHref } = Astro.props;
const t = getStrings(lang).nav;
const base = lang === 'es' ? '/es' : '';
```

Replace the nav link labels with `{t.calculators}` etc., and point calculator/about/etc. links at `{base}/calculators/`, `{base}/about/` (about stays EN path in Phase 1 — see Step 3). Update `aria-label={t.homeAria}` and the logo `href={lang === 'es' ? '/es/' : '/'}`.

Add a language switcher link in the nav:

```astro
<a class="lang-switch" href={switchHref || (lang === 'es' ? '/' : '/es/')}>{t.switchTo}</a>
```

- [ ] **Step 2: Add `@i18n` path alias**

Confirm `tsconfig.json` has the alias. If not present, add to `compilerOptions.paths`:

```json
"@i18n/*": ["src/i18n/*"]
```

Check current aliases first:
Run: `grep -A8 '"paths"' tsconfig.json`
If `@i18n` is missing, add it; if `@components` style differs, match the existing pattern.

- [ ] **Step 3: Footer accepts lang**

In `src/components/Footer.astro`, import `getStrings`, add `Props { lang?: 'en'|'es' }`, default `'en'`, pull `const t = getStrings(lang).footer;`. Replace section headings and the tagline/disclaimer with `t.*`. For ES, the "Company" column links point to the **existing EN** trust pages (`/about/`, `/privacy/`, `/terms/`) per spec (Phase 1 trust pages stay EN). The "Popular"/"More Calculators" columns on ES link to `/es/<slug_es>/` of live ES calcs.

- [ ] **Step 4: Verify EN unchanged**

Run: `npm run build 2>&1 | tail -3 && grep -o 'MaterialCal' dist/index.html | head -1`
Expected: build completes; EN homepage still renders. Manually confirm EN nav labels unchanged in `dist/index.html`:
Run: `grep -oE '>(Calculators|About|Methodology|Contact)<' dist/index.html | sort -u`
Expected: English labels present.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro tsconfig.json
git commit -m "Add lang prop + language switcher to Header/Footer"
```

---

## Task 5: Parametrize the FIRST widget (Concrete) — establishes the pattern

This task converts `ConcreteCalculator.astro` to accept `lang` and, in ES/metric
mode, output metric results (m³ + sacos). This is the reference pattern for all
subsequent widget tasks.

**Files:**
- Modify: `src/components/ConcreteCalculator.astro`

- [ ] **Step 1: Add lang prop + strings in frontmatter**

At the top of `src/components/ConcreteCalculator.astro`:

```astro
---
import { getStrings } from '@i18n/index';
export interface Props { lang?: 'en' | 'es'; }
const { lang = 'en' } = Astro.props;
const t = getStrings(lang).widget;
const metricDefault = lang === 'es';
---
```

- [ ] **Step 2: Replace hardcoded labels with `{t.*}`**

Replace the unit toggle, field labels, result label ("You need" → `{t.youNeed}`),
result unit ("cubic yards" → bound to a span the script updates), and button text
(`{t.copyResult}`, `{t.print}`, `{t.share}`) with dictionary values.

For the unit toggle, set the active button based on `metricDefault`:

```astro
<button type="button" class={metricDefault ? '' : 'active'} data-units="imperial" aria-pressed={(!metricDefault).toString()}>{t.imperial}</button>
<button type="button" class={metricDefault ? 'active' : ''} data-units="metric" aria-pressed={metricDefault.toString()}>{t.metric}</button>
```

Give the result unit element an id so the script can swap it:

```astro
<span class="unit" id="cc-unit">{metricDefault ? t.cubicMeters : t.cubicYards}</span>
```

- [ ] **Step 3: Make the script output metric volume in metric mode**

In the inline `<script>`, after computing `cubicYards`, derive the displayed
volume and unit from the active unit system:

```js
const isMetric = root.querySelector('.unit-toggle button.active').dataset.units === 'metric';
const cubicMeters = cubicYards * 0.764555;
const vol = isMetric ? cubicMeters : cubicYards;
const unitEl = document.getElementById('cc-unit');
if (unitEl) unitEl.textContent = isMetric ? '{t.cubicMeters}' : '{t.cubicYards}';
$('#cc-yards').textContent = vol.toFixed(2);
```

Note: `is:inline` scripts cannot read Astro variables directly. Pass the two
unit strings via `data-*` attributes on the tool root instead:

```astro
<div class="tool" id="concrete-tool" data-unit-yd={t.cubicYards} data-unit-m3={t.cubicMeters} data-unit-tons={t.tons}>
```

and in the script read `root.dataset.unitYd` / `root.dataset.unitM3`.

- [ ] **Step 4: Verify EN page still correct**

Run: `npm run build 2>&1 | tail -3`
Then: `grep -oE 'id="cc-unit"[^>]*>[^<]*' dist/concrete-calculator/index.html`
Expected: shows `cubic yards` (EN page, `lang` defaults to en, imperial default).

- [ ] **Step 5: Commit**

```bash
git add src/components/ConcreteCalculator.astro
git commit -m "Parametrize ConcreteCalculator with lang + metric output"
```

---

## Task 6: First ES page — calculadora-de-concreto (reference page pattern)

**Files:**
- Create: `src/data/faqs/es/concreto.ts`
- Create: `src/pages/es/calculadora-de-concreto.astro`
- Modify: `src/pages/concrete-calculator.astro` (add `alternates` for hreflang back to ES)

- [ ] **Step 1: Write the ES FAQ data (native, 10-12 Q&A)**

Create `src/data/faqs/es/concreto.ts` exporting `concretoFAQ: FAQItem[]` with
10-12 native LatAm questions (e.g. "¿Cuánto concreto necesito para una losa?",
"¿Cuántos sacos de cemento por metro cúbico?", "¿Qué espesor debe tener una
losa?"). Answers use metric (m³, cm, kg, sacos de 50 kg) and LatAm terms. Import
type: `import type { FAQItem } from '@components/FAQ.astro';`

- [ ] **Step 2: Write the ES page (~2000 words native)**

Create `src/pages/es/calculadora-de-concreto.astro` modeled on the EN page
structure (BaseLayout + Breadcrumb + widget + article + FAQ + RelatedCalculators)
but with:
- `lang="es"` passed to BaseLayout and `<ConcreteCalculator lang="es" />`
- `alternates` linking EN↔ES↔x-default:
  ```ts
  const alternates = [
    { lang: 'en', href: 'https://materialcal.com/concrete-calculator/' },
    { lang: 'es', href: 'https://materialcal.com/es/calculadora-de-concreto/' },
    { lang: 'x-default', href: 'https://materialcal.com/concrete-calculator/' }
  ];
  ```
- Breadcrumb in Spanish (Inicio / Calculadoras / Calculadora de Concreto), hrefs to `/es/...`
- Native Spanish article: formula in metric, worked example in m³, LatAm cost
  context (sacos de cemento, concreto premezclado), "errores comunes" section.
- JSON-LD schema with `inLanguage: 'es'`, ES name/description, ES HowTo steps.
- Related list from `getRelatedCalculatorsES('concrete-calculator')`, rendering
  `c.shortTitle_es` and `/${c.slug_es}/` hrefs.

- [ ] **Step 3: Wire hreflang back from the EN page**

In `src/pages/concrete-calculator.astro`, add the same `alternates` array and
pass `alternates={alternates}` to `<BaseLayout>`.

- [ ] **Step 4: Build + verify both directions**

Run: `npm run build 2>&1 | tail -3`
Run: `grep -c hreflang dist/concrete-calculator/index.html dist/es/calculadora-de-concreto/index.html`
Expected: 3 hreflang links in each file.
Run: `grep -oE 'id="cc-unit"[^>]*>[^<]*' dist/es/calculadora-de-concreto/index.html`
Expected: shows `metros cúbicos` (ES page defaults to metric).

- [ ] **Step 5: Commit**

```bash
git add src/pages/es/calculadora-de-concreto.astro src/data/faqs/es/concreto.ts src/pages/concrete-calculator.astro
git commit -m "Add ES concrete calculator page + hreflang wiring"
```

---

## Tasks 7-15: Remaining 9 calculators (repeat the Task 5+6 pattern)

Each task below = (a) parametrize the widget with `lang` + metric output exactly
as in Task 5, and (b) create the ES page + ES FAQ + wire hreflang exactly as in
Task 6. Per-calculator specifics:

### Task 7: Square footage → `calculadora-de-metros-cuadrados`
- Widget: `SquareFootageCalculator.astro`. Metric mode already outputs sq ft via
  m→ft conversion; for ES, output **m²** directly (display area in m² when metric:
  `sqm = sqft / 10.7639`, label "metros cuadrados"). Result already computes `sqm`.
- Page sections: cómo medir metros cuadrados, formas irregulares, conversión
  m²↔hectáreas, tabla de referencia (recámara, sala, lote), desperdicio.

### Task 8: Gravel → `calculadora-de-grava`
- Widget: `GravelCalculator.astro`. Metric output m³ + toneladas. Density options
  converted to t/m³ (e.g. 1.42 t/yd³ → 1.86 t/m³; multiply each by 1.30795) and
  reworded ("Grava triturada", "Grava de río", "Piedra caliza").
- Page: usos (caminos, drenaje, decorativo), tipos de grava LatAm, profundidad
  recomendada, cómo pedir por tonelada/m³.

### Task 9: Paint → `calculadora-de-pintura`
- Widget: `PaintCalculator.astro`. Metric: area in m², coverage in m²/litro
  (convert 350 sq ft/gal → ~8.6 m²/L; offer litros). Output **litros** not gallons.
  Mode labels: Paredes / Techo / Exterior.
- Page: rendimiento por litro, manos de pintura, imprimante (sellador), tipos de
  pintura (vinílica/esmalte), errores comunes.

### Task 10: Sand → `calculadora-de-arena`
- Widget: `SandCalculator.astro`. Metric output m³ + toneladas + sacos.
  Sand-type options reworded ("Arena de río", "Arena fina", "Arena de concreto").
- Page: tipos de arena, usos (mortero, concreto, juntas), peso por m³.

### Task 11: Tile → `calculadora-de-azulejos`
- Widget: `TileCalculator.astro`. Tile sizes in cm (30×30, 45×45, 60×60) +
  keep inch options. Area in m². Output piezas + adhesivo (kg) + boquilla.
- Page: cómo calcular azulejos, desperdicio por patrón, loseta vs porcelanato,
  adhesivo y boquilla.

### Task 12: Cubic feet → `calculadora-de-metros-cubicos`
- Widget: `CubicFeetCalculator.astro`. Reframe primary output to **m³** when
  metric. Page focuses on volumen en m³ (the imperial cubic-feet framing is
  secondary for ES).
- Page: cómo calcular metros cúbicos, conversión m³↔litros↔ft³, ejemplos.

### Task 13: Asphalt → `calculadora-de-asfalto`
- Widget: `AsphaltCalculator.astro`. Metric output toneladas + m³. Density in t/m³.
- Page: cálculo de asfalto por tonelada, espesor de carpeta, compactación, costo.

### Task 14: Stone → `calculadora-de-piedra`
- Widget: `StoneCalculator.astro`. Metric output m³ + toneladas. Stone-type
  options in t/m³, LatAm terms ("Piedra triturada", "Piedra de río", "Laja").
- Page: tipos de piedra decorativa, usos, profundidad, peso por m³.

### Task 15: Stair → `calculadora-de-escaleras`
- Widget: `StairCalculator.astro`. All inputs metric (cm) by default. Output in cm.
  Code-check note adapted (mention typical LatAm comfort ranges; do NOT cite IRC
  as law — phrase as "rangos recomendados": peralte 17-18 cm, huella 28-30 cm).
- Page: cómo calcular peralte y huella, fórmula 2·peralte+huella, largo de zanca,
  errores comunes. Terms: peralte (rise), huella (tread/run), zanca (stringer),
  contrahuella (riser face).

**For each of Tasks 7-15, the steps are:**
- [ ] Parametrize the widget (lang prop, dict labels, metric default, metric result output) — as Task 5
- [ ] Write ES FAQ file `src/data/faqs/es/<name>.ts` (10-12 native Q&A, metric)
- [ ] Write ES page `src/pages/es/<slug_es>.astro` (~2000 words native, metric examples, ES schema inLanguage, ES breadcrumb, ES related list)
- [ ] Add `alternates` to the matching EN page for reciprocal hreflang
- [ ] Build + verify: `grep -c hreflang` = 3 on both files; ES widget result unit shows metric
- [ ] Commit (`git commit -m "Add ES <name> calculator page + widget i18n"`)

---

## Task 16: ES hub page

**Files:**
- Create: `src/pages/es/index.astro`

- [ ] **Step 1: Build the ES hub**

Model on `src/pages/calculators.astro` but `lang="es"`, native Spanish copy
("Calculadoras de materiales de construcción"), iterate `getLiveCalculatorsES()`
grouped by cluster using `name_es`, cards linking to `/es/<slug_es>/` with
`shortTitle_es` + `description_es`. Add `alternates` to the EN `/calculators/`
hub and back. Meta title/description in Spanish.

- [ ] **Step 2: Build + verify**

Run: `npm run build 2>&1 | tail -3 && curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/es/` (after `npm run dev` if needed)
Expected: hub lists 10 ES calculators.

- [ ] **Step 3: Commit**

```bash
git add src/pages/es/index.astro src/pages/calculators.astro
git commit -m "Add ES hub page"
```

---

## Task 17: Sitemap + final SEO audit

**Files:**
- Modify: `src/pages/sitemap.xml.ts`

- [ ] **Step 1: Add ES URLs to sitemap**

In `src/pages/sitemap.xml.ts`, import `getLiveCalculatorsES`, and append:
- `${SITE}/es/` (hub, priority 0.9)
- one entry per ES calc: `${SITE}/es/${c.slug_es}/` (priority 0.8, monthly)

- [ ] **Step 2: Build + verify URL count**

Run: `npm run build 2>&1 | tail -3 && grep -c "<url>" dist/sitemap.xml`
Expected: 32 (existing) + 11 (10 ES calcs + ES hub) = 43.

- [ ] **Step 3: hreflang audit across all ES pages**

Run: `for f in dist/es/*/index.html; do echo -n "$f: "; grep -c hreflang "$f"; done`
Expected: each ES page has 3 hreflang links.

- [ ] **Step 4: EN regression check (all 25 EN routes still 200 + unchanged titles)**

Run (with dev server up):
```bash
for r in / /calculators/ /concrete-calculator/ /gravel-calculator/ /paint-calculator/ /square-footage-calculator/ /sand-calculator/ /tile-calculator/ /cubic-feet-calculator/ /asphalt-calculator/ /stone-calculator/ /stair-calculator/; do echo -n "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:4321$r) $r\n"; done
```
Expected: all 200.

- [ ] **Step 5: Commit**

```bash
git add src/pages/sitemap.xml.ts
git commit -m "Add ES URLs to sitemap"
```

---

## Task 18: Final build, push, deploy

- [ ] **Step 1: Clean build**

Run: `npm run build 2>&1 | tail -5`
Expected: `[build] Complete!`, 43 pages.

- [ ] **Step 2: Push**

```bash
git push
```
Cloudflare Pages auto-deploys.

- [ ] **Step 3: Post-deploy SEO actions (manual, by user)**

- Re-submit `https://materialcal.com/sitemap.xml` in Search Console (it now
  includes ES URLs).
- URL-inspect the top ES pages (concreto, metros-cuadrados, grava, pintura).
- Optionally add `materialcal.com/es/` as a separate property or rely on the
  domain property.

---

## Self-Review Notes

- **Spec coverage:** market/units (Tasks 5-15 metric default + metric output),
  10 calcs (Tasks 6-15), slugs (Task 2), components parametrized not duplicated
  (Tasks 5-15), calculators.ts `_es` fields + helpers (Task 2), hreflang +
  og:locale + inLanguage (Tasks 3,6-15), sitemap (Task 17), language switcher
  (Task 4), native content rule (stated globally + per task), EN-links for ES
  trust pages (Task 4 Step 3). All covered.
- **Metric-output finding:** the existing metric toggle only converts inputs, not
  the displayed result unit. Tasks 5-15 explicitly add metric result output
  (m³/toneladas/litros/m²) — this is essential for LatAm usability.
- **Density conversion factor:** t/yd³ → t/m³ = ×1.30795 (used in Tasks 8,10,13,14).
  Volume yd³ → m³ = ×0.764555 (Tasks 5,8,10,13,14). Verify worked examples
  numerically during execution.
- **No test framework:** verification is build + curl + grep throughout, matching
  the project's established practice.
