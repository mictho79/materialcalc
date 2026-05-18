import type { FAQItem } from '@components/FAQ.astro';

// FAQ items for the Board Feet Calculator page.
// Optimized for featured snippet (40-60 word answers) and long-tail PAA capture.

export const boardFeetFAQ: FAQItem[] = [
  {
    q: "What is a board foot in lumber?",
    a: "A board foot is a unit of volume used to measure rough lumber. One board foot equals 144 cubic inches, equivalent to a piece 12 inches long × 12 inches wide × 1 inch thick. It's the standard pricing unit for hardwoods like oak, walnut, and maple in the United States."
  },
  {
    q: "How do you calculate board feet?",
    a: "Board feet = (Thickness in inches × Width in inches × Length in inches) ÷ 144. If your length is in feet, divide by 12 instead of 144. For example, a 1×6 board that's 8 feet long calculates as (1 × 6 × 8) ÷ 12 = 4 board feet."
  },
  {
    q: "What's the difference between board feet and linear feet?",
    a: "Linear feet measure length only (one dimension). Board feet measure volume (three dimensions: thickness × width × length). Softwood dimensional lumber like 2×4s is typically sold by linear foot, while hardwoods sold rough are priced per board foot because dimensions vary widely."
  },
  {
    q: "How many board feet are in a 2x4?",
    a: "A 2×4 contains 0.67 board feet per linear foot. An 8-foot 2×4 has approximately 5.33 board feet using nominal dimensions, or 4 BF using actual dimensions (1.5 × 3.5 inches). Most software lumber pricing already accounts for this — confirm with your supplier whether they use nominal or actual."
  },
  {
    q: "Does board feet use nominal or actual lumber dimensions?",
    a: "Traditionally, board feet uses nominal dimensions (the listed size like 2×4). However, for rough hardwood and custom milling, actual measured dimensions are used. Hobbyists and woodworkers should always confirm with their supplier — it can change quantity by 25–30%."
  },
  {
    q: "How much waste factor should I add for woodworking projects?",
    a: "Add 10% waste for straight cuts in defect-free lumber, 15% for cabinet work with complex joinery, and 20% for furniture using highly figured wood or rough lumber with knots and defects. Hardwood is more expensive to over-order than softwood, but running short mid-project costs even more."
  },
  {
    q: "How much does a board foot of hardwood cost?",
    a: "Hardwood pricing in 2026: poplar $3–5/BF, red oak $5–8/BF, hard maple $6–9/BF, cherry $7–11/BF, walnut $10–16/BF, and exotic species $15–40+/BF. Premium grades and wider boards cost 30–50% more. Surfaced (S4S) lumber is roughly 25% more expensive than rough."
  },
  {
    q: "What's better — buying lumber by board foot or by piece?",
    a: "Buy by piece for standardized dimensional lumber (2×4s, 2×6s) where you need a specific count. Buy by board foot for rough hardwoods where you need a total volume but flexibility in piece dimensions. Most pro woodworkers buy hardwood by BF and softwood framing lumber by piece."
  },
  {
    q: "How many board feet for a deck?",
    a: "A 12×16 ft deck (192 sq ft) with 5/4 × 6 decking needs approximately 240 board feet for the deck surface alone, plus framing. Add 10% waste, so order ~265 BF. Total deck including joists, beams, and posts typically runs 400–500 BF for this size."
  },
  {
    q: "How many board feet to build kitchen cabinets?",
    a: "A 10-foot run of cabinets typically requires 200–300 board feet of hardwood for face frames, doors, and drawer fronts, plus 4–6 sheets of plywood for boxes. Add 15% waste for cabinet work. Costs run $1,500–$3,000 in material for solid hardwood doors in mid-range species."
  },
  {
    q: "Are board feet the same as cubic feet?",
    a: "No. One cubic foot equals 12 board feet. One board foot equals 144 cubic inches (1/12 of a cubic foot). Board feet is specific to lumber, while cubic feet measures any 3D volume. For lumber, board feet is the practical unit since it relates directly to usable wood material."
  },
  {
    q: "How do I price hardwood for a project?",
    a: "Calculate total board feet using this tool, multiply by the per-BF price for your chosen species and grade, then add 10–15% waste. Include a separate line for plywood, sheet goods, hardware, and finish. For pro estimates, mark up materials 15–25% to cover shop overhead and shipping."
  }
];
