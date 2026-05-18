// Master catalog of all calculators on the site.
// Used for the /calculators/ hub, footer, related lists, and sitemap.
// Add new calculators here as we build them.

export interface CalculatorMeta {
  slug: string;           // URL slug, e.g. "gravel-calculator"
  title: string;          // Display title, e.g. "Gravel Calculator"
  shortTitle: string;     // For cards & nav, e.g. "Gravel"
  cluster: ClusterId;
  description: string;    // One-line, used in hub + footer + related
  searchVolume?: number;  // Monthly US search volume (for our reference, not displayed)
  status: 'live' | 'planned';
  priority: 1 | 2 | 3;    // 1 = phase 1 launch, 2 = phase 2, 3 = phase 3+
}

export type ClusterId =
  | 'aggregates'
  | 'volume'
  | 'soil'
  | 'surfaces'
  | 'structure'
  | 'outdoor'
  | 'cost';

export interface Cluster {
  id: ClusterId;
  name: string;
  description: string;
}

export const CLUSTERS: Cluster[] = [
  { id: 'aggregates', name: 'Aggregates & Stone', description: 'Gravel, crushed stone, sand and decorative rock.' },
  { id: 'volume',     name: 'Volume & Measurement', description: 'Cubic yards, cubic feet, square footage, board feet.' },
  { id: 'soil',       name: 'Soil & Garden',     description: 'Mulch, topsoil, compost and fill dirt.' },
  { id: 'surfaces',   name: 'Surfaces & Paving', description: 'Asphalt, concrete, pavers, tile and flooring.' },
  { id: 'structure',  name: 'Structure & Roofing', description: 'Roof pitch, stairs, drywall, insulation.' },
  { id: 'outdoor',    name: 'Outdoor & Fencing', description: 'Fence, deck and paint coverage.' },
  { id: 'cost',       name: 'Cost & Pricing',    description: 'Material cost estimates by state and project.' }
];

export const CALCULATORS: CalculatorMeta[] = [
  // ─── PHASE 1 — LAUNCH (evergreen, easier ranking targets) ──────────────
  {
    slug: 'board-feet-calculator',
    title: 'Board Feet Calculator',
    shortTitle: 'Board Feet',
    cluster: 'volume',
    description: 'Calculate board feet for lumber projects — instant volume and cost.',
    searchVolume: 33100,
    status: 'live',
    priority: 1
  },
  {
    slug: 'cubic-feet-calculator',
    title: 'Cubic Feet Calculator',
    shortTitle: 'Cubic Feet',
    cluster: 'volume',
    description: 'Convert any dimensions to cubic feet — supports any unit.',
    searchVolume: 40500,
    status: 'live',
    priority: 1
  },
  {
    slug: 'cubic-yard-calculator',
    title: 'Cubic Yard Calculator',
    shortTitle: 'Cubic Yard',
    cluster: 'volume',
    description: 'Find how many cubic yards of material you need.',
    searchVolume: 40500,
    status: 'live',
    priority: 1
  },
  {
    slug: 'gravel-calculator',
    title: 'Gravel Calculator',
    shortTitle: 'Gravel',
    cluster: 'aggregates',
    description: 'Estimate gravel volume, weight and total cost for your project.',
    searchVolume: 60500,
    status: 'live',
    priority: 1
  },
  {
    slug: 'stone-calculator',
    title: 'Stone Calculator',
    shortTitle: 'Stone',
    cluster: 'aggregates',
    description: 'Crushed and decorative stone — volume, tons and bag count.',
    searchVolume: 22200,
    status: 'live',
    priority: 1
  },

  // ─── PHASE 2 — TOPICAL DEPTH ──────────────────────────────────────────
  { slug: 'pea-gravel-calculator',    title: 'Pea Gravel Calculator',    shortTitle: 'Pea Gravel',    cluster: 'aggregates', description: 'Quantity needed for pea gravel projects.', status: 'live', priority: 2 },
  { slug: 'crushed-stone-calculator', title: 'Crushed Stone Calculator', shortTitle: 'Crushed Stone', cluster: 'aggregates', description: 'Crushed stone volume and tonnage.',           status: 'live', priority: 2 },
  { slug: 'river-rock-calculator',    title: 'River Rock Calculator',    shortTitle: 'River Rock',    cluster: 'aggregates', description: 'Decorative river rock estimator.',           status: 'live', priority: 2 },
  { slug: 'sand-calculator',          title: 'Sand Calculator',          shortTitle: 'Sand',          cluster: 'aggregates', description: 'Sand volume, weight and bag count.',         status: 'live', priority: 2 },
  { slug: 'mulch-calculator',         title: 'Mulch Calculator',         shortTitle: 'Mulch',         cluster: 'soil',       description: 'How much mulch you need for any garden.',    searchVolume: 60500, status: 'live', priority: 2 },
  { slug: 'topsoil-calculator',       title: 'Topsoil Calculator',       shortTitle: 'Topsoil',       cluster: 'soil',       description: 'Topsoil volume for beds, lawns and fill.',   status: 'live', priority: 2 },
  { slug: 'soil-calculator',          title: 'Soil Calculator',          shortTitle: 'Soil',          cluster: 'soil',       description: 'Garden soil and fill dirt estimator.',       searchVolume: 22200, status: 'live', priority: 2 },
  { slug: 'compost-calculator',       title: 'Compost Calculator',       shortTitle: 'Compost',       cluster: 'soil',       description: 'Compost volume for gardens and amendments.', status: 'live', priority: 2 },
  { slug: 'acreage-calculator',       title: 'Acreage Calculator',       shortTitle: 'Acreage',       cluster: 'volume',     description: 'Calculate land area in acres.',              searchVolume: 22200, status: 'live', priority: 2 },

  // ─── PHASE 3 — VERTICAL EXPANSION ──────────────────────────────────────
  { slug: 'concrete-calculator',      title: 'Concrete Calculator',      shortTitle: 'Concrete',      cluster: 'surfaces',   description: 'Concrete volume and bag count.',             status: 'live', priority: 3 },
  { slug: 'asphalt-calculator',       title: 'Asphalt Calculator',       shortTitle: 'Asphalt',       cluster: 'surfaces',   description: 'Asphalt tonnage and cost estimate.',         searchVolume: 27100, status: 'live', priority: 3 },
  { slug: 'paver-calculator',         title: 'Paver Calculator',         shortTitle: 'Pavers',        cluster: 'surfaces',   description: 'How many pavers for any patio or path.',     status: 'live', priority: 3 },
  { slug: 'tile-calculator',          title: 'Tile Calculator',          shortTitle: 'Tile',          cluster: 'surfaces',   description: 'Tile and grout for floors and walls.',       searchVolume: 33100, status: 'live', priority: 3 },
  { slug: 'roof-pitch-calculator',    title: 'Roof Pitch Calculator',    shortTitle: 'Roof Pitch',    cluster: 'structure',  description: 'Calculate roof pitch, slope and angle.',     searchVolume: 27100, status: 'live', priority: 3 },
  { slug: 'stair-calculator',         title: 'Stair Calculator',         shortTitle: 'Stairs',        cluster: 'structure',  description: 'Stair rise, run and stringer length.',       searchVolume: 33100, status: 'live', priority: 3 },
  { slug: 'drywall-calculator',       title: 'Drywall Calculator',       shortTitle: 'Drywall',       cluster: 'structure',  description: 'Drywall sheets and screws estimator.',       searchVolume: 22200, status: 'live', priority: 3 },
  { slug: 'fence-calculator',         title: 'Fence Calculator',         shortTitle: 'Fence',         cluster: 'outdoor',    description: 'Fence posts, rails and panels.',             searchVolume: 40500, status: 'live', priority: 3 },
  { slug: 'deck-calculator',          title: 'Deck Calculator',          shortTitle: 'Deck',          cluster: 'outdoor',    description: 'Decking boards and fasteners.',              searchVolume: 33100, status: 'live', priority: 3 },
  { slug: 'paint-calculator',         title: 'Paint Calculator',         shortTitle: 'Paint',         cluster: 'outdoor',    description: 'Paint coverage for interior and exterior.',  searchVolume: 60500, status: 'live', priority: 3 },

  // ─── PHASE 4 — MONEY PAGES ─────────────────────────────────────────────
  { slug: 'square-footage-calculator', title: 'Square Footage Calculator', shortTitle: 'Square Footage', cluster: 'volume', description: 'Total square footage for any shape or area.', searchVolume: 201000, status: 'live', priority: 3 }
];

// Helper functions
export const getCalculator = (slug: string) =>
  CALCULATORS.find(c => c.slug === slug);

export const getCalculatorsByCluster = (cluster: ClusterId) =>
  CALCULATORS.filter(c => c.cluster === cluster);

export const getLiveCalculators = () =>
  CALCULATORS.filter(c => c.status === 'live');

export const getRelatedCalculators = (slug: string, count = 4) => {
  const current = getCalculator(slug);
  if (!current) return [];
  // Prefer same cluster, then any
  const sameCluster = CALCULATORS.filter(c => c.cluster === current.cluster && c.slug !== slug);
  const others = CALCULATORS.filter(c => c.cluster !== current.cluster);
  return [...sameCluster, ...others].slice(0, count);
};
