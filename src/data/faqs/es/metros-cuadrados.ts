import type { FAQItem } from '@components/FAQ.astro';

export const metrosCuadradosFAQ: FAQItem[] = [
  {
    q: "¿Cómo se calculan los metros cuadrados?",
    a: "Para un espacio rectangular, multiplica el largo por el ancho, ambos en metros: un cuarto de 4 m × 3 m da 12 m². Para áreas con otra forma usa su fórmula: círculo = π × (diámetro ÷ 2)²; triángulo = (base × altura) ÷ 2; trapecio = (lado₁ + lado₂) × altura ÷ 2. Si el espacio es irregular, divídelo en rectángulos, calcula cada uno y suma los resultados."
  },
  {
    q: "¿Cómo mido un cuarto de forma irregular?",
    a: "El método más sencillo es dividir el espacio en rectángulos. Dibuja un croquis del cuarto y traza líneas que lo separen en figuras simples (las plantas en L o en T se arman con dos o tres rectángulos). Mide cada rectángulo, calcula su superficie (largo × ancho) y suma todas las áreas. Para los huecos de un ventanal usa la fórmula del trapecio."
  },
  {
    q: "¿Cuántos metros cuadrados tiene una hectárea?",
    a: "Una hectárea (ha) equivale a 10,000 m², es decir, un cuadrado de 100 × 100 metros. Para pasar de metros cuadrados a hectáreas divide entre 10,000: un terreno de 5,000 m² es 0.5 ha. Para el camino inverso, multiplica las hectáreas por 10,000. La hectárea se usa sobre todo para terrenos grandes, parcelas y predios rústicos."
  },
  {
    q: "¿Cómo convierto pies cuadrados a metros cuadrados?",
    a: "Multiplica los pies cuadrados por 0.0929 para obtener metros cuadrados (1 ft² = 0.0929 m²). Para el camino contrario, multiplica los metros cuadrados por 10.764. Por ejemplo, 500 ft² × 0.0929 ≈ 46.5 m². Esto es útil cuando un mueble, una alfombra o un material vienen con medidas en pies cuadrados."
  },
  {
    q: "¿Qué factor de desperdicio debo agregar?",
    a: "Depende del material y del trazo. Para piso laminado o vinílico en línea recta agrega 10%; en diagonal sube a 15%, y en patrones como espiga hasta 20%. Para loseta cerámica deja un 10% y compra una caja extra para reparaciones futuras, porque el tono cambia entre lotes. Para pintura y pasto basta con un 5 a 10%."
  },
  {
    q: "¿Cuántos metros cuadrados cubre un litro de pintura?",
    a: "Un litro de pintura rinde de 10 a 12 m² por mano en una pared lisa y sellada. En superficies porosas, rugosas o sin sellador el rendimiento baja a 6 u 8 m². Para una pared de 30 m² a dos manos calcula unos 5 a 6 litros. Recuerda que el área de pared se obtiene multiplicando el perímetro del cuarto por la altura del techo."
  },
  {
    q: "¿Cómo calculo los metros cuadrados de pasto o tepe?",
    a: "Mide solo el área útil de jardín, sin contar banquetas, andadores, macetas ni construcciones. El error más común es sobrestimar el pasto entre un 15 y 25% por incluir zonas que no llevan césped. El tepe en rollo cubre cerca de 1 m² por pieza; agrega un 10% de desperdicio para los cortes en orillas y curvas."
  },
  {
    q: "¿Los metros cuadrados de techo son iguales a los del terreno?",
    a: "No. La superficie del techo es mayor que la huella de la construcción porque está inclinado. Una losa plana sí coincide con el área de la planta, pero un techo a dos aguas tiene más superficie según su pendiente. Para pedir teja o lámina, calcula el área real de la pendiente, no la del terreno que cubre."
  },
  {
    q: "¿Cómo calculo la superficie de un terreno?",
    a: "Si el terreno es rectangular, multiplica frente por fondo. Para lotes irregulares, marca las esquinas y divídelo en triángulos o rectángulos; calcula cada figura y suma. Las escrituras suelen indicar la superficie en metros cuadrados. Un lote típico de 10 × 20 m son 200 m²; uno de 8 × 15 m, 120 m²."
  },
  {
    q: "¿Cuál es la diferencia entre metros cuadrados y metros lineales?",
    a: "El metro cuadrado (m²) mide superficie (largo × ancho) y se usa para piso, pintura o pasto. El metro lineal mide solo longitud en una dirección y se usa para zoclo, molduras, cornisas o cerca. No los multiplies entre sí: 10 metros lineales de zoclo no son 10 m², son simplemente 10 metros de largo de material."
  },
  {
    q: "¿Cómo paso metros cuadrados a precio por metro cuadrado?",
    a: "Multiplica la superficie total (ya con el desperdicio incluido) por el precio por metro cuadrado del material. Por ejemplo, 50 m² de piso a $250/m² dan $12,500. Si el precio viene por caja, divide la superficie entre el rendimiento de cada caja para saber cuántas comprar, y redondea siempre hacia arriba."
  },
  {
    q: "¿Qué cuenta como metros cuadrados de construcción de una casa?",
    a: "En general se contabiliza el área techada y habitable: recámaras, sala, comedor, cocina, baños y pasillos, medida por el exterior de los muros. Normalmente no se cuentan la cochera descubierta, los patios, las terrazas sin techo ni los pretiles. Los criterios varían por estado y por avalúo, así que conviene confirmar antes de comprar o vender."
  }
];
