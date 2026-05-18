import type { FAQItem } from '@components/FAQ.astro';

export const stairFAQ: FAQItem[] = [
  {
    q: "How do I calculate stair rise and run?",
    a: "Measure total rise floor-to-floor in inches. Divide by your target rise per step (usually 7-7.75 inches) and round to a whole number — that's your riser count. Then divide total rise by riser count to get the actual rise per step. Treads (run) are usually 10-11 inches. Total run = (risers − 1) × tread depth."
  },
  {
    q: "What is the standard stair rise and run?",
    a: "Per the International Residential Code (IRC R311.7.5): maximum rise of 7.75 inches and minimum tread depth of 10 inches. Most residential stairs are built at 7 to 7.5 inches rise and 10 to 11 inches tread. Commercial stairs allow shallower rises (down to 4 inches) for accessibility."
  },
  {
    q: "What is the maximum rise on a stair step?",
    a: "7.75 inches per the IRC for residential. Above 7.75 inches, the step is too steep for safe walking — falls increase dramatically above 8 inches of rise. Public and commercial spaces allow only 7 inches maximum. ADA-compliant stairs cap rise at 7 inches and require a tread of at least 11 inches."
  },
  {
    q: "How long should a stair stringer be?",
    a: "Stringer length = √(total rise² + total run²). For a typical 108-inch (9 ft) total rise with 130-inch total run: √(108² + 130²) = √(11664 + 16900) = √28564 ≈ 169 inches (14 ft 1 in). Use 2x12 lumber for stringers; 2x10 only for short runs of 8 steps or less."
  },
  {
    q: "How many steps for an 8-foot ceiling?",
    a: "8 ft floor-to-floor is 96 inches plus floor thickness. Assume 105-108 inches total rise. At 7.5 inch rise per step: 14 risers. The top one lands on the upper floor, so you walk up 14 steps total but only see 13 treads. For 9 ft ceilings, expect 15-16 risers."
  },
  {
    q: "What's the rule for stair rise plus run?",
    a: "Rule of thumb: rise + run = 17 to 18 inches. A 7.5 inch rise paired with a 10.5 inch tread (sum 18) is comfortable for most people. Steeper stairs (rise + run < 17) feel cramped; shallower (sum > 18) feel awkward and trip-prone. The 2 × rise + run = 24-25 inch formula is also used."
  },
  {
    q: "What is stair headroom requirement?",
    a: "Minimum 80 inches measured vertically from the front edge of any tread to the ceiling, soffit, or any obstruction above (IRC R311.7.2). Most stairs achieve this naturally; trouble spots are stairs under low ceilings, stairs to attics, and stairs with a doorway at the top landing."
  },
  {
    q: "How wide should stairs be?",
    a: "IRC minimum is 36 inches wide above the handrail. 36-42 inches is standard residential. For two-way traffic or moving furniture: 48 inches. Stairs to attic or basement-only spaces can be 32 inches in some jurisdictions. Always check your local code — some areas require wider than 36 inches."
  },
  {
    q: "What's the difference between rise and tread?",
    a: "Rise is the vertical height of one step. Tread is the horizontal depth — what your foot lands on. A 7-inch rise with a 10-inch tread makes a comfortable step. Riser is the vertical board between treads (sometimes left open). Nosing is the slight overhang of the tread beyond the riser below it (typically 0.75 to 1.25 inches)."
  },
  {
    q: "How many stairs do I need for a deck?",
    a: "Measure deck height to ground. Most decks are 24-36 inches above grade. At 7.5 inch rise per step: 24-inch deck = 4 risers (3 treads); 30-inch deck = 4 risers; 36-inch deck = 5 risers. Anything 30 inches or higher requires a handrail by code."
  },
  {
    q: "Can I have winder or curved stairs?",
    a: "Yes, but the tread depth at the walk line (12 inches from the narrow end) must still meet code minimum (usually 10-11 inches). Winders are common at landings to save space. Spiral stairs have separate rules — typically 26-inch minimum diameter, 6.75-inch tread minimum. Curved stairs are complex and usually require professional design."
  },
  {
    q: "What size lumber for stair stringers?",
    a: "2x12 is the standard for residential stair stringers. After notching out the rise and run cuts, at least 3.5-5 inches of solid wood must remain at the narrowest point (the throat). 2x10 lumber doesn't leave enough throat for code compliance with typical 7.5 inch risers. Use pressure-treated lumber for exterior stairs."
  }
];
