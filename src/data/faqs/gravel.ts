import type { FAQItem } from '@components/FAQ.astro';

// FAQ items for the Gravel Calculator page.
// Pulled from real People-Also-Ask data on the gravel SERP.
// Answers kept short (40-60 words) for featured snippet optimization.

export const gravelFAQ: FAQItem[] = [
  {
    q: "How many tons of gravel do I need for a 1000 sq ft driveway?",
    a: "For a 1000 sq ft driveway at 4 inches deep, you need approximately 12.3 cubic yards or 16.7 tons of standard gravel. Add a 5–10% waste factor for compaction and spillage, so order around 18 tons to be safe. At a 6-inch depth (4-inch base plus 2-inch top), bump that to 25 tons."
  },
  {
    q: "How much does a yard of gravel cost?",
    a: "A cubic yard of standard gravel costs between $15 and $75, depending on type and location. Bulk delivery of 5+ yards usually runs $40–$50 per yard. Decorative options like pea gravel and river rock cost more, around $50–$100 per yard. Delivery typically adds $50–$150 in most US regions."
  },
  {
    q: "How thick should a gravel driveway be?",
    a: "A residential gravel driveway should be 4–6 inches thick total: a 4-inch base layer of larger crushed stone (#411 or dense grade), then a 2-inch top layer of finer gravel. Commercial or heavy-use driveways need 8–12 inches with a stronger compacted base."
  },
  {
    q: "How much area does one ton of gravel cover?",
    a: "One ton of standard gravel covers approximately 75 square feet at 4 inches deep, 100 square feet at 3 inches, or 150 square feet at 2 inches. Coverage decreases proportionally with depth, and varies by 10–15% depending on the gravel type and compaction."
  },
  {
    q: "What's the difference between cubic yards and tons of gravel?",
    a: "Cubic yards measure volume, tons measure weight. The conversion depends on density: 1 cubic yard of standard gravel weighs about 1.35 tons. Crushed stone is denser at 1.42 t/yd³, and pea gravel is even heavier at 1.50 t/yd³. Most suppliers sell by the ton."
  },
  {
    q: "Should I add a waste factor when ordering gravel?",
    a: "Yes. Gravel compacts during installation and you'll lose some during spreading and edge work. For driveways, add 5%; for large patios or irregular shapes, add 10%. Always round up to the nearest half ton when ordering — paying for one extra delivery costs far more than over-ordering."
  },
  {
    q: "What size gravel is best for a driveway?",
    a: "For driveways, use a base layer of larger crushed stone (3/4 to 1.5 inches) for stability, topped with smaller gravel (3/8 to 1/2 inch) for a smooth finish. Avoid pure pea gravel as a top layer — it shifts under vehicle weight and creates ruts within months."
  },
  {
    q: "Is gravel cheaper than concrete or asphalt?",
    a: "Yes, significantly. Gravel costs $1–3 per square foot installed, versus $6–12 for concrete and $7–15 for asphalt. Over a 25-year period, gravel is still cheaper despite needing annual top-ups, though concrete and asphalt require less maintenance and handle heavy vehicle traffic better."
  },
  {
    q: "How long does a gravel driveway last?",
    a: "A properly installed gravel driveway with landscape fabric, compacted base, and edge restraint lasts 15–25 years. Cheap installations without fabric or edging may need full replacement in 5–8 years. Annual maintenance (1/2 inch top-up) is essential for the longer lifespan."
  },
  {
    q: "Do I need landscape fabric under gravel?",
    a: "Yes for almost all applications. Non-woven geotextile fabric prevents gravel from migrating into the soil below (which causes gradual disappearance) and significantly reduces weed growth. The exception is French drains, where you only want fabric on the sides and top, not the bottom."
  },
  {
    q: "How much does gravel delivery cost?",
    a: "Local gravel delivery (within 25 miles) typically costs $50–$150 as a flat fee. Beyond 25 miles, expect $5–$15 per additional mile. Most suppliers have a 1-ton or 1-cubic-yard minimum. Delivery is often free for orders over 10–15 tons in competitive markets."
  },
  {
    q: "Can I install gravel myself, or do I need a professional?",
    a: "Most gravel projects are DIY-friendly if you have a wheelbarrow, rake, and access to a rented plate compactor ($40–60/day). Excavation for driveways often requires a small loader or tractor, which justifies hiring out. Patios and walkways are easy weekend projects for most homeowners."
  },
  {
    q: "What is the best gravel for drainage?",
    a: "For drainage applications like French drains, use ASTM #57 crushed stone (3/4 inch washed). The angular, uniformly-sized pieces create maximum void space for water flow. Avoid pea gravel for drainage — its smooth surfaces pack tightly and reduce flow capacity by up to 40%."
  }
];
