import type { FAQItem } from '@components/FAQ.astro';

export const squareFootageFAQ: FAQItem[] = [
  {
    q: "How do I calculate square footage?",
    a: "Multiply length by width for any rectangular area. A 12 ft by 14 ft room is 12 × 14 = 168 sq ft. For non-rectangular spaces, break the area into rectangles and sum the parts, or use the dedicated shape modes (circle, triangle, trapezoid) above."
  },
  {
    q: "How many square feet is a 10x10 room?",
    a: "A 10 ft by 10 ft room is exactly 100 square feet. That equals 11.11 square yards or 9.29 square meters. It's a common size for a small bedroom, home office, or storage area."
  },
  {
    q: "How do I calculate square footage of an irregular room?",
    a: "Divide the space into simple rectangles, triangles, or other regular shapes. Calculate the area of each piece separately, then add them together. For example, an L-shaped room becomes two rectangles. For curved walls, treat them as circles or circle segments."
  },
  {
    q: "How do I convert square feet to square yards?",
    a: "Divide square feet by 9 to get square yards (since 1 yard = 3 feet, 1 sq yd = 9 sq ft). 300 sq ft ÷ 9 = 33.33 sq yd. This conversion matters for carpet, sod, and concrete which are often priced by the yard."
  },
  {
    q: "How do I convert square feet to acres?",
    a: "Divide square feet by 43,560 to get acres. A 100 ft by 100 ft lot is 10,000 sq ft ÷ 43,560 = 0.23 acres. A standard residential lot of about 0.25 acres is roughly 10,890 sq ft."
  },
  {
    q: "How do I calculate square footage of a circle?",
    a: "Multiply pi (3.14159) by the radius squared. For a circular patio with a 12 ft diameter (6 ft radius): 3.14159 × 6² = 113 sq ft. Use the circle mode in the calculator and just enter the diameter — it does the math automatically."
  },
  {
    q: "How do I calculate square footage of a triangle?",
    a: "Multiply base × height × 0.5. A triangular garden bed 10 ft along the base and 8 ft tall: 10 × 8 × 0.5 = 40 sq ft. Use the height perpendicular to the base, not the slanted side length."
  },
  {
    q: "How much waste factor should I add when buying materials?",
    a: "Standard straight-cut layouts: 5-10%. Diagonal patterns or rooms with many cuts and angles: 10-15%. Highly patterned tile or wood with matching needed: 15-20%. The waste covers cutting losses, mistakes, and future repairs from a matching batch."
  },
  {
    q: "How many square feet are in a 12x16 room?",
    a: "A 12 ft by 16 ft room is 192 square feet. That's 21.33 sq yd, 17.84 sq m, or 0.0044 acres. Common for a small living room, master bedroom, or one-car garage interior space."
  },
  {
    q: "How do I find the square footage of my house?",
    a: "Measure exterior wall lengths and multiply length × width for each level. Subtract garage and unfinished spaces. Multi-story homes: sum each floor. Most county property records list square footage — but verify with a tape measure, since builder figures sometimes include garage or unconditioned space."
  },
  {
    q: "What's the difference between linear feet and square feet?",
    a: "Linear feet measure length only (one dimension), like 50 feet of fence. Square feet measure area (two dimensions), like 50 sq ft of flooring. Wood trim and fencing are sold by linear foot; flooring and roofing are sold by square foot."
  },
  {
    q: "How many square feet in a square yard of carpet?",
    a: "1 square yard = 9 square feet. Carpet priced at $30/sq yd costs $3.33/sq ft. For a 200 sq ft room: 22.2 sq yd needed (add 10% waste = 24.4 yd² to order). Carpet rolls come in 12-ft widths, so seam placement affects how much you actually buy."
  }
];
