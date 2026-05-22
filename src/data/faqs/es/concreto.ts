import type { FAQItem } from '@components/FAQ.astro';

export const concretoFAQ: FAQItem[] = [
  {
    q: "¿Cuánto concreto necesito para una losa?",
    a: "Para una losa de 3 × 3 m con 10 cm de espesor: 3 × 3 × 0.10 = 0.90 m³. Para una losa de 6 × 6 m a 10 cm: 3.60 m³. Siempre agrega un 10% de desperdicio por la cimbra y los derrames, así que pide al menos un 10% extra cuando contrates concreto premezclado."
  },
  {
    q: "¿Cuántos sacos de cemento por metro cúbico de concreto?",
    a: "Para un concreto estándar de unos 200 kg/cm² (f'c = 200) se usan aproximadamente 7 sacos de cemento de 50 kg por metro cúbico, junto con cerca de 0.5 m³ de arena, 0.55 m³ de grava y 180 a 200 litros de agua. Para resistencias mayores (250 o 300 kg/cm²) sube a 8 o 9 sacos por m³."
  },
  {
    q: "¿Qué espesor debe tener una losa de concreto?",
    a: "Para banquetas y patios: 8 a 10 cm. Para cocheras y pisos que reciben vehículos ligeros: 10 a 12 cm. Para áreas de carga pesada (camiones, naves): 15 a 20 cm. Las losas de entrepiso se calculan según el proyecto estructural, normalmente de 10 a 15 cm más la capa de compresión. Siempre coloca una base de grava compactada debajo."
  },
  {
    q: "¿Conviene más concreto premezclado o hecho en obra?",
    a: "Para volúmenes menores a 1 m³ (postes, registros, reparaciones) sale mejor mezclar en obra con revolvedora o a mano. De 1 a 3 m³ depende de la mano de obra y el tiempo disponible. Arriba de 3 m³, el concreto premezclado en olla es más barato, más rápido y de calidad más uniforme porque la dosificación es controlada."
  },
  {
    q: "¿Cuánto cuesta un metro cúbico de concreto?",
    a: "El concreto premezclado cuesta entre $1,800 y $2,800 MXN por m³ aproximadamente, según la resistencia (f'c) y la región. Hay cargo extra por bombeo y por pedidos pequeños. Hecho con sacos de cemento sale más caro por m³ una vez que sumas cemento, arena, grava y mano de obra, además del tiempo. Confirma siempre el precio local con tu proveedor."
  },
  {
    q: "¿Cuánto concreto necesito para una zapata?",
    a: "Multiplica largo × ancho × profundidad, todo en metros. Por ejemplo, una zapata corrida de 10 m de largo × 0.40 m de ancho × 0.30 m de profundidad da 1.2 m³. Para zapatas aisladas suma el volumen de cada dado. Agrega 10% de desperdicio porque el terreno casi nunca queda parejo."
  },
  {
    q: "¿Cuánto concreto lleva una columna o castillo?",
    a: "Para una columna circular usa π × radio² × altura. Una columna de 30 cm de diámetro y 3 m de alto lleva 0.21 m³. Para un castillo de 15 × 15 cm y 3 m: 0.0675 m³ cada uno. Multiplica por el número de columnas o castillos. Usa cimbra de tubo de cartón o de madera bien aplomada."
  },
  {
    q: "¿Cuál es la diferencia entre concreto y cemento?",
    a: "El cemento es solo el aglomerante (el polvo gris que viene en saco). El concreto es la mezcla final: cemento + arena + grava + agua. Decir 'piso de cemento' es incorrecto técnicamente; lo correcto es 'piso de concreto'. El cemento es un ingrediente del concreto, no el material terminado."
  },
  {
    q: "¿Cuánto pesa un metro cúbico de concreto?",
    a: "El concreto normal pesa alrededor de 2,400 kg (2.4 toneladas) por metro cúbico ya fraguado. Recién mezclado pesa un poco más por el agua. Toma esto en cuenta para el transporte, la cimbra y el apuntalamiento: una losa pequeña ya representa varias toneladas de carga."
  },
  {
    q: "¿Cuánto tarda en fraguar y curar el concreto?",
    a: "Fraguado inicial: 4 a 8 horas (se puede caminar con cuidado). Endurece para tránsito de personas: 24 a 48 horas. Resiste vehículos ligeros: 7 días. Resistencia de diseño (curado de 28 días): 28 días. Mantén el concreto húmedo los primeros 7 días con plástico, costales mojados o membrana de curado; si se seca rápido pierde resistencia."
  },
  {
    q: "¿Cuánta varilla necesito para una losa?",
    a: "Para una losa de piso de 10 cm es común usar malla electrosoldada 6×6-10/10, o varilla del #3 (3/8\") en cuadrícula de 20 a 25 cm. La separación exacta depende del proyecto estructural y de la carga. Coloca el acero a media altura de la losa con separadores (silletas), nunca apoyado en el suelo."
  },
  {
    q: "¿Necesito una barrera de humedad debajo de la losa?",
    a: "Para losas interiores (cocheras, cuartos, bodegas): sí, conviene poner plástico (polietileno calibre 600 o más) sobre la base de grava para evitar que suba la humedad. Para losas exteriores (patios, banquetas) normalmente no es necesario; lo importante ahí es el buen drenaje y una base de grava bien compactada."
  }
];
