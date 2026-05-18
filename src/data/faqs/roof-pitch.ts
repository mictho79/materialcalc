import type { FAQItem } from '@components/FAQ.astro';

export const roofPitchFAQ: FAQItem[] = [
  {
    q: "How do I calculate roof pitch?",
    a: "Roof pitch is expressed as rise over run, typically per 12 inches of horizontal distance. Measure the vertical rise of the roof over a 12-inch horizontal span. If the roof rises 6 inches over 12 inches of run, the pitch is 6/12. Use a level and ruler at the gable end."
  },
  {
    q: "What is a 6/12 roof pitch?",
    a: "A 6/12 roof pitch means the roof rises 6 inches vertically for every 12 inches horizontally. This equals 26.57 degrees, or a 50% slope. 6/12 is the most common residential pitch in the US — comfortable to walk on, sheds water well, and works with most shingle types."
  },
  {
    q: "What roof pitch is best for snow?",
    a: "For heavy snow regions, use 8/12 or steeper (33+ degrees). Snow slides off steeper roofs reducing snow load on structure. Below 4/12, snow accumulates and ice dams form at eaves. 12/12 (45°) is excellent for snow but requires careful safety planning during construction and maintenance."
  },
  {
    q: "How do I convert roof pitch to degrees?",
    a: "Use the formula: angle = arctan(rise ÷ 12). Examples: 3/12 = 14.04°, 4/12 = 18.43°, 6/12 = 26.57°, 8/12 = 33.69°, 12/12 = 45°. Most building codes specify pitch in rise/run; framing calculations often need degrees."
  },
  {
    q: "What's the minimum pitch for shingles?",
    a: "Standard asphalt shingles need 4/12 minimum pitch. Below 4/12 (down to 2/12), use special low-slope underlayment and double-overlap shingles per manufacturer specs. Below 2/12, switch to membrane roofing (rubber, TPO, EPDM) — shingles cannot shed water at flat or near-flat angles."
  },
  {
    q: "How much does roof pitch affect square footage?",
    a: "Steeper pitches dramatically increase actual roof surface area. For a 1,000 sq ft footprint: 4/12 pitch = 1,054 sq ft surface (5% more), 6/12 = 1,118 sq ft (12% more), 8/12 = 1,202 sq ft (20% more), 12/12 = 1,414 sq ft (41% more). This is why steep roofs cost more to roof."
  },
  {
    q: "What is a roofing square?",
    a: "A roofing square equals 100 square feet of roof surface area. Shingles, underlayment, and most roofing materials are sold by the square. A typical 2,000 sq ft house with 6/12 roof has approximately 22-24 squares of roof surface (footprint × 1.118 × waste factor)."
  },
  {
    q: "How do I measure roof pitch without going on the roof?",
    a: "Measure from inside the attic at a rafter: use a 12-inch level held horizontally against the rafter's vertical face, then measure from the level's far end up to the rafter — that's your rise per 12 inches of run. From outside, use a smartphone app with built-in clinometer."
  },
  {
    q: "What pitch is considered low slope vs steep?",
    a: "Low slope: 2/12 to 4/12 (under 18° angle) — requires special roofing. Conventional: 4/12 to 9/12 (18-37°) — standard residential, walkable. Steep slope: 10/12 to 12/12 (40-45°) — requires roof jacks and harnesses. Extreme: over 12/12 — specialty work only, scaffolding required."
  },
  {
    q: "How does pitch affect roof cost?",
    a: "Steeper pitches cost more in three ways: (1) more material due to greater surface area, (2) higher labor due to safety equipment and slower work, (3) extra delivery and waste from cut shingles. A 6/12 to 12/12 upgrade typically increases roofing cost by 40-60% beyond the surface area difference."
  },
  {
    q: "Can I walk on my roof to measure?",
    a: "Up to 6/12 (26.6°) most adults can walk carefully with proper footwear (rubber-soled shoes). 7/12 to 9/12 needs caution and ideally a partner. 10/12 and steeper requires roof jacks, harness, and ideally professional measurement. Falls from roofs cause 30% of construction fatalities — don't risk it."
  },
  {
    q: "What's the formula for roof rafter length?",
    a: "Rafter length = run × √((rise² + 12²) ÷ 144) for runs in feet and rise in inches per 12. Simpler: multiply the horizontal run by the rafter multiplier from the pitch (6/12 = 1.118). For a 15 ft run at 6/12 pitch: 15 × 1.118 = 16.77 ft rafter length, add overhang for full length."
  }
];
