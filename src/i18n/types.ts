export type Lang = 'en' | 'es';

export interface NavStrings {
  calculators: string;
  about: string;
  methodology: string;
  contact: string;
  homeAria: string;
  switchTo: string;        // label for the language switcher target
}

export interface WidgetStrings {
  calculator: string;      // "Calculator" / "Calculadora"
  imperial: string;
  metric: string;
  units: string;           // aria-label
  shape: string;           // aria-label
  rectangle: string;
  circle: string;
  triangle: string;
  trapezoid: string;
  length: string;
  width: string;
  diameter: string;
  depth: string;
  height: string;
  base: string;
  price: string;
  optional: string;
  wasteFactor: string;
  wasteNone: string;
  wasteRecommended: string;
  youNeed: string;
  totalCost: string;
  copyResult: string;
  copied: string;
  print: string;
  share: string;
  // result units
  cubicYards: string;      // "cubic yards" / "metros cúbicos"
  cubicMeters: string;
  tons: string;            // "tons" / "toneladas"
  bags: string;            // "bags" / "sacos"
}

export interface FooterStrings {
  tagline: string;
  popular: string;
  moreCalculators: string;
  browseAll: string;
  company: string;
  about: string;
  methodology: string;
  contact: string;
  privacy: string;
  terms: string;
  disclaimer: string;     // the "© … all calculations are estimates" line
}

export interface UIStrings {
  nav: NavStrings;
  widget: WidgetStrings;
  footer: FooterStrings;
}
