import type { FAQItem } from '@components/FAQ.astro';

export const pinturaFAQ: FAQItem[] = [
  {
    q: "¿Cuántos litros de pintura necesito para un cuarto?",
    a: "Calcula el área de las paredes (perímetro × altura) y réstale puertas y ventanas. Por ejemplo, un cuarto de 4 × 3.5 m con paredes de 2.5 m tiene un perímetro de 15 m, así que el área es 15 × 2.5 = 37.5 m². Réstale una puerta (1.9 m²) y dos ventanas (2.8 m²) y quedan unos 32.8 m². A dos manos son 65.6 m² de cobertura; con una pintura estándar de 8.6 m²/L necesitas alrededor de 8 litros (un poco menos de media cubeta de 19 L)."
  },
  {
    q: "¿Cuál es el rendimiento de un litro de pintura?",
    a: "Una pintura vinílica de buena calidad rinde entre 8 y 12 m² por litro en una pared lisa y de un solo color. El rendimiento baja a 6 o 7 m²/L en muros texturados o con tirol, y a 5 m²/L en muro nuevo sin sellador. Como referencia, una cubeta de 19 litros cubre aproximadamente de 150 a 190 m² a una mano en condiciones normales."
  },
  {
    q: "¿Cuántas manos de pintura debo aplicar?",
    a: "Dos manos es lo estándar para casi cualquier repintado. Aplica una sola mano solo si refrescas el mismo color sobre una superficie en buen estado. Usa tres manos cuando pintas un color claro encima de uno oscuro, sobre muro nuevo o cuando el color es muy intenso (rojos y amarillos cubren mal). Aplicar sellador primero casi siempre te ahorra una mano de pintura de color."
  },
  {
    q: "¿Conviene comprar pintura por litro o por cubeta de 19 litros?",
    a: "La cubeta de 19 litros sale bastante más económica por litro que los botes chicos. Conviene cuando necesitas más de 8 a 10 litros, es decir, para uno o varios cuartos completos. Para retoques o un solo muro, el bote de 1 o 4 litros es más práctico. Calcula primero los litros que necesitas y redondea hacia arriba para no quedarte corto a media pared."
  },
  {
    q: "¿Cómo mido las paredes restando puertas y ventanas?",
    a: "Mide el perímetro del cuarto (suma el largo de todas las paredes) y multiplícalo por la altura para obtener el área bruta. Luego réstale las aberturas: una puerta estándar ocupa cerca de 1.9 m² y una ventana promedio unos 1.4 m². Si tienes ventanales o puertas corredizas grandes, mídelos uno por uno (alto × ancho) en lugar de usar el promedio."
  },
  {
    q: "¿Necesito aplicar sellador o imprimante antes de pintar?",
    a: "Sí en varios casos: sobre muro nuevo (aplanado o tablaroca), cuando hay manchas de humedad o grasa, y al cambiar de un color oscuro a uno claro. El sellador uniforma la absorción del muro, mejora la adherencia y hace que la pintura de color rinda más. En un repintado normal sobre una pared en buen estado y del mismo tono, puedes omitirlo."
  },
  {
    q: "¿Qué tipo de pintura uso para interiores?",
    a: "Para paredes y techos interiores, la pintura vinílica (vinil acrílica) base agua es la más usada: es económica, de bajo olor, seca rápido y se limpia con agua. Para puertas, marcos y zonas que se lavan mucho (cocina, baño), conviene un esmalte base agua, que da un acabado más duro y resistente. Reserva los esmaltes base aceite para herrería y superficies que necesiten máxima dureza."
  },
  {
    q: "¿Qué pintura debo usar en exteriores?",
    a: "Usa una pintura para exteriores (vinil acrílica para exterior o pintura impermeabilizante), formulada para resistir el sol, la lluvia y los cambios de temperatura. Aplica siempre dos manos y pinta cuando no se esperen lluvias en las próximas 24 horas y la temperatura esté entre 10 y 30 °C. En muros muy expuestos, una pintura impermeabilizante elastomérica protege mejor contra filtraciones."
  },
  {
    q: "¿Cuánto cuesta pintar un cuarto en México?",
    a: "Solo en pintura, un cuarto promedio (unos 33 m² de pared a dos manos) gasta alrededor de 8 litros. Una pintura vinílica de gama media cuesta entre $90 y $150 MXN por litro, así que la pintura sale en $700 a $1,200 MXN aproximadamente. Súmale sellador, rodillos, brochas, cinta y plásticos. La mano de obra de un pintor se cobra aparte, normalmente por m² o por día."
  },
  {
    q: "¿Por qué se ve disparejo el color después de pintar?",
    a: "Las causas más comunes son: aplicar una sola mano cuando se necesitaban dos, no sellar un muro nuevo o muy absorbente, mezclar cubetas de distinto lote sin revolverlas juntas, o dejar secar de más entre brochazos y rodillos (marcas de empalme). Para un acabado parejo, mezcla todas las cubetas del mismo color en un recipiente grande antes de empezar y mantén el filo húmedo trabajando por secciones."
  },
  {
    q: "¿Cuánto tiempo debo esperar entre manos de pintura?",
    a: "Con pintura vinílica base agua, espera de 2 a 4 horas entre manos en clima templado y seco. Si hay mucha humedad o frío, deja más tiempo. Aplicar la segunda mano demasiado pronto levanta la primera y arruina el acabado. Los esmaltes base aceite tardan más: de 6 a 8 horas o lo que indique el envase."
  },
  {
    q: "¿Cuánta pintura sobra debo guardar para retoques?",
    a: "Compra de 10 a 15% de más y guarda un bote sin abrir como pintura de retoque. La pintura de la misma compra (mismo lote) garantiza que el retoque empate de color. Etiqueta el bote con el nombre del cuarto y la fecha, y guárdalo bien cerrado en un lugar fresco. La pintura ya abierta y usada seca distinto, aunque sea exactamente el mismo color."
  }
];
