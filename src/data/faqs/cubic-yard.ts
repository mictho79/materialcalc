import type { FAQItem } from '@components/FAQ.astro';

export const cubicYardFAQ: FAQItem[] = [
  {
    q: "How many cubic feet are in a cubic yard?",
    a: "There are exactly 27 cubic feet in 1 cubic yard. A cubic yard is a cube measuring 3 feet on each side: 3 × 3 × 3 = 27 cubic feet. This conversion is the most important number to remember when ordering bulk landscaping or construction materials."
  },
  {
    q: "How big is a cubic yard?",
    a: "A cubic yard is a 3-foot cube — picture a box that's 36 inches long, 36 inches wide, and 36 inches tall. It holds 27 cubic feet, about 202 US gallons, or 765 liters. Visually, it's roughly the size of a standard kitchen oven turned on its back."
  },
  {
    q: "How much does a cubic yard weigh?",
    a: "Weight per cubic yard depends on material. Approximate weights: dry topsoil 1.3 tons, gravel 1.35 tons, sand 1.35 tons, crushed stone 1.42 tons, dirt/fill 1.45 tons, mulch 0.95 tons, asphalt 2.0 tons, concrete 2.4 tons. Wet materials weigh significantly more."
  },
  {
    q: "How many cubic yards do I need for a concrete slab?",
    a: "For a typical concrete slab 4 inches thick, multiply the area in square feet by 0.0123 to get cubic yards. For example, a 10 × 12 ft slab at 4 inches = 1.48 cubic yards. Always order 5–10% extra to account for spillage and uneven sub-grade."
  },
  {
    q: "How do you calculate cubic yards from feet?",
    a: "Multiply length × width × depth (all in feet), then divide by 27. If depth is in inches, divide it by 12 first to convert to feet. Formula: cubic yards = (L × W × D in feet) ÷ 27. For an irregular shape, break it into rectangles and add the results together."
  },
  {
    q: "How many cubic yards in a dump truck?",
    a: "Standard dump trucks hold 10 to 16 cubic yards. A typical single-axle dump truck carries 6–8 yards; a tandem-axle truck holds 10–14 yards; a tri-axle holds 14–18 yards. Maximum legal weight (around 25 tons in most US states) often limits the load before volume does."
  },
  {
    q: "What's the formula for cubic yards of mulch?",
    a: "Length × Width × Depth (in feet) ÷ 27. For mulch, depth is typically 2–4 inches, so use depth ÷ 12 first. Example: a 200 sq ft bed at 3 inches deep needs 200 × 0.25 ÷ 27 = 1.85 cubic yards of mulch."
  },
  {
    q: "How many cubic yards in a ton?",
    a: "The conversion depends on the material. For standard gravel, 1 ton ≈ 0.74 cubic yards. For topsoil, 1 ton ≈ 0.77 cubic yards. For sand, 1 ton ≈ 0.74 cubic yards. For mulch, 1 ton ≈ 1.05 cubic yards. Concrete: 1 ton ≈ 0.42 cubic yards."
  },
  {
    q: "How do you convert cubic yards to cubic meters?",
    a: "Multiply cubic yards by 0.7646 to get cubic meters, or divide cubic meters by 0.7646 (×1.308) to get cubic yards. 1 cubic yard = 0.7646 cubic meters. 1 cubic meter = 1.308 cubic yards. Most US suppliers use cubic yards; most metric suppliers use cubic meters."
  },
  {
    q: "What size is a yard of soil?",
    a: "One cubic yard of soil covers approximately 100 square feet at 3 inches deep, 50 square feet at 6 inches deep, or 25 square feet at 12 inches deep. A yard of soil weighs about 1.3 tons (2,600 lb) when dry and up to 2 tons when wet."
  },
  {
    q: "How much does a yard of gravel cover?",
    a: "One cubic yard of gravel covers approximately 100 sq ft at 3 inches deep, 81 sq ft at 4 inches, or 54 sq ft at 6 inches deep. Coverage decreases as depth increases. For driveways at 6 inches total depth, plan on ~50 sq ft of coverage per cubic yard."
  },
  {
    q: "Can I calculate cubic yards for irregular shapes?",
    a: "Yes — break the irregular area into rectangles, triangles, or trapezoids. Calculate each section separately, then add the volumes together. For curved or organic shapes, approximate with the closest standard geometry and round up by 10–15% to ensure enough material."
  }
];
