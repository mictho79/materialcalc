import type { FAQItem } from '@components/FAQ.astro';

export const piedraFAQ: FAQItem[] = [
  {
    q: "¿Cómo calculo cuánta piedra necesito?",
    a: "Mide el largo y el ancho del área en metros, define la profundidad en centímetros y multiplica: Volumen (m³) = Largo × Ancho × (Profundidad ÷ 100). Por ejemplo, una cama decorativa de 5 × 3 m con 6 cm de piedra de río: 5 × 3 × 0.06 = 0.9 m³. Para pasar a toneladas, multiplica los m³ por la densidad (2.09 t/m³ para piedra de río), lo que da unas 1.9 toneladas. Agrega de 5 a 10% de desperdicio."
  },
  {
    q: "¿Cómo convierto metros cúbicos de piedra a toneladas?",
    a: "Multiplica los metros cúbicos por la densidad del material. La piedra triturada pesa alrededor de 1.86 t/m³, la roca decorativa de jardín 1.70 t/m³, la piedra de río 2.03 a 2.09 t/m³, la piedra caliza 1.90 t/m³, el mármol triturado 1.96 t/m³ y la piedra volcánica (tezontle) apenas 0.72 t/m³. Por ejemplo, 2 m³ de piedra triturada = 2 × 1.86 = 3.72 toneladas."
  },
  {
    q: "¿Qué profundidad de piedra debo poner?",
    a: "Depende del uso. Para camas decorativas y jardineras: 5 a 8 cm sobre geotextil. Para senderos peatonales: 8 a 10 cm. Para drenajes alrededor de la casa: 8 a 10 cm. Para caminos y entradas de auto: 15 cm en total (base de piedra triturada más capa superior). Más de 8 cm en zonas decorativas se ve artificial y desperdicia material."
  },
  {
    q: "¿Cuál es la diferencia entre piedra triturada y piedra de río?",
    a: "La piedra triturada sale de quebrar roca: sus caras son angulares y se traban al compactar, ideal para bases, drenajes y caminos. La piedra de río (canto rodado) es lisa y redondeada por la acción del agua; no compacta y se usa casi siempre como decoración en jardines, ríos secos y bordes. Para estabilidad usa triturada; para verse bien y dejar suelta, piedra de río."
  },
  {
    q: "¿Qué piedra sirve para un drenaje?",
    a: "Usa piedra triturada angular limpia de 2 a 4 cm (sin finos ni arena), porque sus piezas dejan huecos por donde corre el agua. Evita la piedra de río lisa: se acomoda apretada y reduce el paso del agua. Coloca el tubo perforado rodeado de esta piedra y envuelve la zanja con geotextil para que no se tape con tierra."
  },
  {
    q: "¿Cuánta piedra cubre una tonelada?",
    a: "Una tonelada de piedra triturada (1.86 t/m³) rinde alrededor de 0.54 m³, que cubren unos 5.4 m² a 10 cm de espesor, 10.7 m² a 5 cm o 21.5 m² a 2.5 cm. La piedra de río, más pesada, rinde menos superficie por tonelada; la piedra volcánica, mucho más ligera, rinde bastante más. La cobertura baja en proporción directa al espesor."
  },
  {
    q: "¿Necesito poner geotextil debajo de la piedra?",
    a: "Sí, en casi todos los casos decorativos y de drenaje. La tela geotextil (no tejida) evita que la piedra se hunda en la tierra y se mezcle con el suelo, y reduce mucho la maleza. Sin geotextil, la piedra va desapareciendo dentro del terreno en pocos años. Traslapa las uniones unos 15 cm y fíjalas con grapas cada medio metro."
  },
  {
    q: "¿Qué piedra puedo usar en una fogata o asador?",
    a: "Usa piedra volcánica (tezontle) o roca volcánica diseñada para calor: resiste altas temperaturas y no estalla. Nunca uses piedra de río, piedra caliza ni arenisca alrededor del fuego, porque atrapan humedad y pueden agrietarse o reventar al calentarse. La piedra volcánica es además muy ligera (0.72 t/m³), así que necesitas pocas toneladas."
  },
  {
    q: "¿Cuánto cuesta la piedra en México?",
    a: "Los precios varían por región y proveedor. A granel, la piedra triturada ronda los $350 a $600 MXN por m³; la piedra caliza es algo más barata; la piedra de río o canto rodado decorativo puede llegar a $700 a $1,500 MXN por m³, y el mármol triturado o la piedra de playa, todavía más. A esto súmale el flete, que casi siempre se cobra aparte."
  },
  {
    q: "¿Conviene comprar piedra a granel o en saco?",
    a: "Para proyectos chicos (menos de media tonelada) el saco de ferretería o tlapalería es práctico, pero sale 3 a 5 veces más caro por tonelada. A partir de 1 a 1.5 toneladas conviene pedir a granel con flete. Las piedras decorativas exóticas a veces solo se consiguen en saco. Para caminos, drenajes o cualquier obra grande, pide a granel."
  },
  {
    q: "¿Debo agregar un factor de desperdicio al pedir piedra?",
    a: "Sí. La piedra triturada se compacta y siempre se pierde algo al esparcir y emparejar los bordes; en formas irregulares se desperdicia más. Agrega 5% para áreas regulares y 10% para camas decorativas, terreno inclinado o formas irregulares. Redondea hacia arriba al medio metro cúbico o a la media tonelada: pagar otro flete cuesta mucho más que pedir un poco de más."
  },
  {
    q: "¿La piedra decorativa se debe compactar?",
    a: "No. La piedra de río, el mármol triturado y la piedra volcánica deben quedar sueltas: compactarlas arruina su aspecto y su función. Solo se compacta la piedra triturada angular cuando forma la base de un camino o una entrada de auto. Para las camas decorativas, solo rastrilla para nivelar y deja la piedra suelta sobre el geotextil."
  }
];
