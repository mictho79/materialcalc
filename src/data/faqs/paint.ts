import type { FAQItem } from '@components/FAQ.astro';

export const paintFAQ: FAQItem[] = [
  {
    q: "How much paint do I need for a 12x14 room?",
    a: "For a 12 by 14 room with 8 ft ceilings: walls are (12+14) × 2 × 8 = 416 sq ft. Subtract one door (20 sq ft) and two windows (15 sq ft each) = 366 sq ft paintable. With 2 coats at 350 sq ft/gal coverage: 366 × 2 ÷ 350 = 2.1 gallons. Round up to 2.5 gallons or one gallon plus one quart."
  },
  {
    q: "How much area does one gallon of paint cover?",
    a: "Standard interior latex paint covers 350-400 sq ft per gallon on smooth walls in a single coat. Textured walls drop to 250-300 sq ft per gallon. Bare drywall or fresh masonry absorbs more, dropping coverage to 200-250 sq ft per gallon. Always check the can label — premium paints can cover 450 sq ft."
  },
  {
    q: "How many coats of paint do I need?",
    a: "Two coats is the standard for most residential repainting — first coat lays down color, second coat evens out coverage. One coat works for refreshing the same color over recently painted walls. Three coats are needed for light over dark, dark over white, or coverage over patchwork repairs."
  },
  {
    q: "Do I need primer?",
    a: "Yes, for: bare drywall, raw wood, dark-to-light color changes, repaired patches, glossy surfaces, water stains, and high-moisture areas. Skip primer when: recoating same color, modern paint-and-primer-in-one products are being used, and surface is clean. Primer typically covers 200-300 sq ft per gallon."
  },
  {
    q: "How do I calculate paint for an exterior?",
    a: "Measure perimeter of house × wall height for total wall area. Subtract windows and doors. Add 5-10% for waste, soffits, and trim. A typical 2,000 sq ft house has about 2,400 sq ft of exterior wall — needs 7-8 gallons for two coats. Exterior paint coverage runs 300-400 sq ft per gallon depending on surface texture."
  },
  {
    q: "How much paint for a ceiling?",
    a: "Ceiling area = room length × room width. A 12 × 14 room has 168 sq ft of ceiling. With flat ceiling paint (typical 350 sq ft/gal) at 2 coats: 168 × 2 ÷ 350 = 0.96 gallon. Round up to one gallon. Ceilings only need one coat if you're refreshing the same white."
  },
  {
    q: "How much does it cost to paint a room?",
    a: "DIY: $50-150 in paint and supplies for an average bedroom. Professional: $300-700 per room, varying by region, prep work, and ceiling height. The paint itself ($80-150) is usually 20-30% of the total professional cost — the rest is labor, prep, and supplies."
  },
  {
    q: "What's the difference between flat, eggshell, and satin paint?",
    a: "Flat hides imperfections but marks easily — best for ceilings and low-traffic walls. Eggshell has subtle sheen and wipes clean — most popular for living areas. Satin is slightly shinier and more durable — great for hallways and kids' rooms. Semi-gloss for trim and bathrooms. Gloss for doors and cabinets."
  },
  {
    q: "How much paint per square foot?",
    a: "1 gallon ÷ 350 sq ft coverage = roughly 1 gallon per 175 sq ft for 2 coats, or about $0.13 per sq ft in paint alone at $45/gallon. Add primer ($0.05-0.08/sq ft) and supplies for total DIY material cost around $0.20-0.30 per sq ft of wall."
  },
  {
    q: "Can I mix gallons of paint to get the same color?",
    a: "Yes — and it's strongly recommended. Open all cans of the same color, pour them together into a 5-gallon bucket, and stir thoroughly. This is called 'boxing' the paint. Different cans can have subtle batch variations; mixing them eliminates color streaks at can-changeover points on the wall."
  },
  {
    q: "How long does paint take to dry?",
    a: "Latex paint is dry to the touch in 1 hour, recoatable in 4 hours, fully cured in 30 days. Don't apply the second coat too early — it can lift the first. Don't wash freshly painted walls for 30 days; the paint film is still hardening. Oil-based paints take longer: 6-8 hours recoat time, 7 days cure."
  },
  {
    q: "How do I store leftover paint?",
    a: "Wipe rim clean, hammer lid tight, store upside down in a cool place. Inverting creates an airtight seal at the bottom (now top). Properly stored latex paint lasts 5-10 years. Discard if it smells sour, has a thick skin throughout the can, or won't blend when stirred."
  }
];
