import type { FAQItem } from '@components/FAQ.astro';

export const deckFAQ: FAQItem[] = [
  {
    q: "How many deck boards do I need?",
    a: "Divide deck width by board width plus gap. Standard 2x6 deck boards (5.5 inch actual) plus 1/8 inch gap covers about 5.625 inches per board. For a 12 ft wide deck: 12 × 12 ÷ 5.625 = 26 board widths. Multiply by length of deck and divide by board length, add 10% waste. A 12 by 16 ft deck typically needs 35-40 boards of 12 ft 2x6."
  },
  {
    q: "What's the standard joist spacing for a deck?",
    a: "16 inches on center is standard for pressure-treated 2x6 decking. 12 inches OC required for composite decking, 5/4 inch boards, or boards laid at 45° angle. 24 inches OC allowed for 2x6 PT only if local code permits and load is low. Always check joist manufacturer recommendations and local code."
  },
  {
    q: "How long do deck boards last?",
    a: "Pressure-treated 2x6: 15-20 years with annual stain/seal. Cedar: 15-25 years. Redwood: 20-30 years. Composite (Trex, TimberTech): 25-50 years with warranty. Tropical hardwood (Ipe, Cumaru): 50+ years. Maintenance is the biggest factor — annual cleaning and re-staining doubles wood deck life."
  },
  {
    q: "How much does a deck cost per square foot?",
    a: "Pressure-treated DIY: $15-25/sq ft materials, $25-45/sq ft installed. Cedar DIY: $25-35/sq ft, installed $40-65/sq ft. Composite DIY: $30-50/sq ft, installed $40-80/sq ft. Tropical hardwood: $40-70/sq ft DIY, $60-110/sq ft installed. A typical 200 sq ft deck costs $4,000-15,000 depending on material and complexity."
  },
  {
    q: "Do I need permits for a deck?",
    a: "Almost always yes. Most jurisdictions require permits for any deck attached to a house, over 30 inches above grade, or over 200 sq ft. Permit fees: $100-500 typically. Inspections usually required at footing, framing, and final. Building without permit creates resale issues, insurance problems, and possible mandatory removal."
  },
  {
    q: "How deep should deck footings be?",
    a: "Below the local frost line. In northern US: 36-48 inches deep. Mid-Atlantic: 24-36 inches. Southern US: 12-24 inches. Concrete footing diameter: 10-12 inches typical, sized per local load tables. Use concrete tubes (Sonotube) for clean column shapes. Always rest deck post on top of footing, not in it — water pools at base of buried posts."
  },
  {
    q: "What size joists for a deck?",
    a: "2x8 joists at 16 inches OC span 10-12 feet (depends on lumber grade and deck load). 2x10 at 16 inches OC: 14-16 ft span. 2x12 at 16 inches OC: 17-19 ft span. Span tables vary by lumber species and grade. Use joist hangers at ledger board — never toe-nail joists to a structural ledger."
  },
  {
    q: "How wide should deck board gaps be?",
    a: "1/8 inch gap between boards is standard. Pressure-treated lumber arrives wet; install tight (no gap) and it'll shrink to about 1/8 inch as it dries. Dry kiln-dried lumber: install with 1/8 inch spacer. Composite: 1/4 inch gap for thermal expansion (check manufacturer). Larger gaps cause heel-catching and trip hazards."
  },
  {
    q: "Should I use deck screws or nails?",
    a: "Screws — exterior-rated coated deck screws (gray or tan), GRK or stainless for premium. Nails work loose over years of expansion/contraction; screws don't. Use 3 inch screws for decking attached to 2x lumber. Hidden fastener systems for composite boards. Galvanized hardware (joist hangers, post anchors) — stainless in coastal zones."
  },
  {
    q: "Can I build a deck over an existing concrete patio?",
    a: "Yes, called a 'floating deck' or 'patio deck.' Use 2x4 sleepers on top of the patio, then attach decking boards on top. Total height increase: 3-4 inches typically. Requires good drainage under the deck and corrosion-resistant fasteners. Easier than excavating but adds height that may affect door clearances or stairs."
  },
  {
    q: "When does a deck need a railing?",
    a: "IRC requires guardrails on decks more than 30 inches above grade. Guard height: minimum 36 inches for residential, 42 inches in some jurisdictions and for commercial. Baluster spacing: must not allow passage of a 4 inch sphere. Top rail must support 200 lbs of point load. Stair handrail: required for 4+ risers."
  },
  {
    q: "How do I attach a deck to my house?",
    a: "Through a ledger board bolted to the house rim joist with 1/2 inch lag screws or through-bolts every 16-24 inches in staggered pattern. CRITICAL: use proper flashing above and below ledger to prevent water intrusion into the house wall (this is the #1 cause of deck collapse). Consider a free-standing deck with no ledger if the house wall can't be properly flashed."
  }
];
