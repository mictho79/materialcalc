import type { FAQItem } from '@components/FAQ.astro';

export const azulejosFAQ: FAQItem[] = [
  {
    q: "¿Cómo calculo cuántos azulejos necesito?",
    a: "Primero saca la superficie del piso o muro en metros cuadrados: largo × ancho. Después divide esa superficie entre el área de una pieza. Un azulejo de 45 × 45 cm cubre 0.2025 m² (0.45 × 0.45), así que un cuarto de 12 m² lleva 12 ÷ 0.2025 ≈ 60 piezas. Por último agrega el factor de desperdicio: con 10% serían unas 66 piezas. Redondea siempre hacia la caja completa de arriba."
  },
  {
    q: "¿Cuánto desperdicio de azulejo debo considerar?",
    a: "Depende del trazo. Para una colocación recta, paralela a los muros, agrega 10%. Para un trazo en diagonal sube a 15%, porque genera más cortes en las orillas. Para patrones tipo ladrillo (cuatrapeado) o espiga llega hasta 20%. Si el cuarto tiene muchos recovecos, columnas o es un baño chico con muchos cortes, suma un 5% extra. Siempre conviene quedarse con piezas de sobra para reparaciones."
  },
  {
    q: "¿Cuál es la diferencia entre azulejo de cerámica y porcelanato?",
    a: "La cerámica se fabrica con arcilla cocida a menor temperatura: es más porosa (absorbe hasta 3% de agua), más suave y fácil de cortar. Sirve para muros, cocinas y pisos de poco tránsito. El porcelanato se cuece a mayor temperatura, queda mucho más denso (absorbe menos de 0.5% de agua), resiste el rayado y el congelamiento. Es el indicado para pisos de mucho tránsito, exteriores y zonas húmedas como regaderas."
  },
  {
    q: "¿Cuál es la diferencia entre azulejo y loseta?",
    a: "En la práctica de la región, 'azulejo' suele referirse a la pieza de muro (más delgada, vidriada, para baños y cocinas), mientras que 'loseta' o 'piso' es la pieza de piso (más gruesa y resistente al tránsito). En la ferretería los términos a veces se mezclan, así que lo importante es checar la ficha: busca que la pieza de piso tenga buena resistencia al desgaste (PEI 3 o más) y, si es zona húmeda, que sea antiderrapante."
  },
  {
    q: "¿Cuánto pegazulejo o adhesivo necesito por metro cuadrado?",
    a: "Como regla práctica, calcula unos 5 kg de adhesivo (pegazulejo) por metro cuadrado con una llana dentada estándar. Un saco de 20 kg rinde aproximadamente 4 m². Para piezas de formato grande (60 × 60 cm o más) el consumo sube a 6 u 8 kg/m² porque la llana es más profunda y conviene encolar también el reverso de la pieza (doble encolado). Para 12 m² con piezas medianas calcula unos 60 kg, es decir 3 sacos."
  },
  {
    q: "¿Cuánta boquilla o lechada lleva el trabajo?",
    a: "El consumo de boquilla depende del tamaño de la pieza y del ancho de la junta. Para piso de formato medio con junta de 3 mm, calcula alrededor de 0.5 kg/m². Las piezas chicas (mosaico) consumen mucho más boquilla porque hay más junta por metro cuadrado, y las de formato grande con junta mínima consumen menos. Una bolsa de 1 kg suele rendir entre 2 y 4 m² según el caso."
  },
  {
    q: "¿Qué ancho de junta debo dejar entre azulejos?",
    a: "Para piso de cerámica o porcelanato rectificado, una junta de 2 a 3 mm es lo común. Para piezas no rectificadas conviene 3 a 5 mm, porque las orillas no son perfectamente parejas y la junta disimula esa diferencia. Nunca pegues las piezas a 'hueso' (sin junta): el piso necesita esa holgura para absorber los movimientos por temperatura y humedad, o las piezas se levantan o se truenan."
  },
  {
    q: "¿Por qué debo comprar piezas de más y del mismo lote?",
    a: "El color del azulejo cambia ligeramente de un lote de producción a otro, aunque sea el mismo modelo. Por eso conviene comprar todo el material de una sola vez y verificar que las cajas traigan el mismo número de lote (tono y calibre). Además, guarda una caja extra: si dentro de un par de años se te quiebra una pieza, será casi imposible encontrar el mismo tono y tendrás que reponer toda el área."
  },
  {
    q: "¿Cómo se instala el piso de azulejo paso a paso?",
    a: "Primero prepara la base: debe estar firme, nivelada y limpia. Encuentra el centro del cuarto con dos hilos cruzados y haz una colocación en seco para que los cortes en los muros queden parejos. Extiende el pegazulejo con llana dentada, asienta cada pieza con un giro y usa crucetas para juntas uniformes. Deja secar 24 horas antes de aplicar la boquilla. Rellena las juntas con la llana de hule en diagonal, limpia con esponja húmeda y deja curar antes de pisar o mojar."
  },
  {
    q: "¿Cuáles son los errores más comunes al colocar azulejo?",
    a: "Los más frecuentes son: no considerar el desperdicio y quedarse corto a media obra; mezclar piezas de distinto lote y que se noten franjas de color; no planear el trazo y dejar tiras delgadas pegadas a un muro; usar una llana del tamaño equivocado (poco adhesivo deja piezas huecas que suenan); aplicar la boquilla antes de que seque el pegazulejo; y dejar las crucetas puestas o aplicar la boquilla con el adhesivo todavía fresco en las juntas."
  },
  {
    q: "¿Puedo colocar azulejo nuevo sobre uno viejo?",
    a: "Sí, siempre que el piso viejo esté firme, bien adherido, sin piezas flojas ni huecas y razonablemente nivelado. Lija o pica la superficie vidriada para dar agarre, límpiala bien y usa un adhesivo de buena calidad apto para sobreposición. Toma en cuenta que el piso sube de nivel (varios milímetros), lo que puede afectar puertas y desniveles con otros cuartos. Si el piso viejo está agrietado o se mueve, es mejor retirarlo."
  },
  {
    q: "¿Cómo calculo el costo total del azulejo?",
    a: "Multiplica el número de piezas (ya con desperdicio) por el precio de cada una, o la superficie total por el precio por metro cuadrado. A eso súmale el adhesivo, la boquilla, las crucetas y el sellador. Por ejemplo, 12 m² de loseta a $200/m² son $2,400 de piezas; agrega unos $600 a $900 de pegazulejo y boquilla. La mano de obra de colocación se cobra aparte, normalmente por metro cuadrado."
  }
];
