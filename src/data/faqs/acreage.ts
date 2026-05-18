import type { FAQItem } from '@components/FAQ.astro';

export const acreageFAQ: FAQItem[] = [
  {
    q: "How big is an acre?",
    a: "One acre equals 43,560 square feet, 4,047 square meters, or 0.4047 hectares. Visually, an acre is roughly the size of an American football field minus the end zones (a football field including end zones is 1.32 acres). It's also about 16 standard tennis courts side by side."
  },
  {
    q: "How do you calculate acreage?",
    a: "Calculate the area in square feet, then divide by 43,560 (the number of square feet in 1 acre). For a rectangle: length × width ÷ 43,560 = acres. For example, a 200 ft × 150 ft lot is 30,000 sq ft ÷ 43,560 = 0.69 acres."
  },
  {
    q: "How many square feet in an acre?",
    a: "An acre contains exactly 43,560 square feet. This converts to 4,840 square yards, 4,046.86 square meters, or 0.4047 hectares. The acre was historically defined as the area one yoke of oxen could plow in a day — roughly a furlong (660 ft) by a chain (66 ft)."
  },
  {
    q: "How many acres is a football field?",
    a: "A standard American football field is exactly 1.32 acres total (including the two end zones). The playing field without end zones (100 yards × 53.33 yards) is 1.10 acres. A FIFA soccer pitch (typical size) is roughly 1.76 acres, slightly larger than American football."
  },
  {
    q: "How do I measure an irregular shaped lot?",
    a: "For irregular lots, break the area into rectangles, triangles, and trapezoids you can measure individually. Add the results together. For 4-sided lots with no right angles, you can use Bretschneider's formula or use a property survey with GPS coordinates from your county records."
  },
  {
    q: "How many acres is one hectare?",
    a: "One hectare equals 2.4711 acres. Conversely, one acre equals 0.4047 hectares. Hectares are the standard land measurement in most of the world outside the US — one hectare is 10,000 square meters, or a 100m × 100m square."
  },
  {
    q: "How many lots fit on an acre?",
    a: "It depends on local zoning. Typical residential lots are 5,000 to 10,000 sq ft, so an acre fits 4-9 single-family homes. Higher-density zoning (townhomes) can fit 12-20 units per acre; rural zoning often requires 1+ acre per home, so the answer is 1."
  },
  {
    q: "What's the cost of an acre of land?",
    a: "US land prices vary enormously by location: rural farmland $3,000-8,000/acre; suburban undeveloped land $20,000-100,000/acre; close-in urban lots $200,000-2,000,000/acre. Always check local comps via your county assessor or USDA NASS land value reports for accurate pricing."
  },
  {
    q: "How do you calculate acres from feet?",
    a: "Multiply length × width in feet to get square feet, then divide by 43,560 to get acres. Shortcut: a 1-acre square is roughly 209 × 209 feet. A 1/2-acre is about 148 × 148 feet. A 1/4-acre lot is roughly 105 × 105 feet."
  },
  {
    q: "How big is a half acre?",
    a: "A half acre is 21,780 square feet, or about 148 ft × 148 ft as a square. That's roughly 2,022 square meters. For visual comparison: a half acre fits 4-6 typical single-family suburban homes, or roughly the size of an Olympic swimming pool plus surrounding deck area."
  },
  {
    q: "How many acres is 10,000 square feet?",
    a: "10,000 square feet equals 0.2296 acres, or just under 1/4 acre. To remember the conversion: divide square feet by 43,560 to get acres. 10,000 sq ft is also 929 square meters (0.0929 hectares) — useful for international property comparisons."
  },
  {
    q: "How do I calculate the perimeter of an acre?",
    a: "Perimeter depends on shape. A perfectly square acre (209.08 ft per side) has a 836-foot perimeter. A long narrow acre (43.56 ft × 1,000 ft) has a 2,087-foot perimeter. The square shape gives minimum perimeter; any deviation increases fence/border length."
  }
];
