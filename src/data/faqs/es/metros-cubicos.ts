import type { FAQItem } from '@components/FAQ.astro';

export const metrosCubicosFAQ: FAQItem[] = [
  {
    q: "¿Cómo se calculan los metros cúbicos?",
    a: "El metro cúbico (m³) mide volumen, es decir, el espacio en tres dimensiones. Para una caja o un espacio rectangular se multiplica largo × ancho × alto, todo en metros: un cajón de 2 m × 1.5 m × 1 m da 3 m³. Para un cilindro (tinaco, columna, tubo) usa π × (diámetro ÷ 2)² × altura. Lo más importante es que las tres medidas estén en la misma unidad antes de multiplicar."
  },
  {
    q: "¿Cuál es la fórmula del volumen?",
    a: "Para un prisma rectangular, Volumen = largo × ancho × alto. Para un cilindro, Volumen = π × radio² × altura, donde el radio es la mitad del diámetro. Por ejemplo, un tinaco cilíndrico de 1 m de diámetro y 1.2 m de altura tiene un radio de 0.5 m: 3.1416 × 0.5² × 1.2 = 0.94 m³, casi 940 litros."
  },
  {
    q: "¿Cuántos litros tiene un metro cúbico?",
    a: "Un metro cúbico equivale a 1,000 litros exactos. Es una de las conversiones más útiles para agua: un tinaco de 1,100 litros ocupa 1.1 m³, y una cisterna de 5 m³ almacena 5,000 litros. Para pasar de metros cúbicos a litros multiplica por 1,000; para el camino inverso, divide entre 1,000."
  },
  {
    q: "¿Cómo convierto pies cúbicos a metros cúbicos?",
    a: "Multiplica los pies cúbicos por 0.0283 para obtener metros cúbicos (1 ft³ = 0.0283 m³). Para el camino contrario, multiplica los metros cúbicos por 35.31. Por ejemplo, un contenedor de 1,170 ft³ equivale a 1,170 × 0.0283 ≈ 33 m³. Esta conversión sirve cuando una ficha técnica o un equipo de importación viene en pies cúbicos."
  },
  {
    q: "¿Cómo calculo los metros cúbicos de concreto que necesito?",
    a: "Multiplica largo × ancho × espesor, todo en metros. Para una losa de 5 m × 4 m con 10 cm de espesor (0.10 m): 5 × 4 × 0.10 = 2 m³ de concreto. Recuerda convertir el espesor de centímetros a metros (divide entre 100) y agrega un 5 a 10% extra por mermas y desniveles del terreno."
  },
  {
    q: "¿Cuántos metros cúbicos de tierra o relleno necesito?",
    a: "Calcula el volumen del espacio a rellenar con largo × ancho × profundidad en metros. Para rellenar un área de 10 m × 3 m con 20 cm de profundidad (0.20 m): 10 × 3 × 0.20 = 6 m³. La tierra y los materiales sueltos se asientan al compactarse, así que pide entre 15 y 25% de más si necesitas un nivel firme."
  },
  {
    q: "¿Cuántos metros cúbicos carga un camión de volteo?",
    a: "Depende del tipo. Un camión de volteo de 7 m³ (de tres toneladas) es común para obras chicas; los de doble eje cargan de 12 a 14 m³, y los de mayor capacidad llegan a 20 m³ o más. Materiales como grava, arena o tierra suelen venderse y entregarse por metro cúbico, así que conviene saber cuántos viajes necesitas antes de pedir."
  },
  {
    q: "¿Qué significa cubicar?",
    a: "Cubicar es calcular el volumen de algo en metros cúbicos: un terreno excavado, un montón de material, la caja de un camión o el espacio de una habitación. En la construcción se cubica para saber cuánto material mover, comprar o transportar. El procedimiento es el mismo: medir las tres dimensiones en metros y multiplicarlas."
  },
  {
    q: "¿Cuál es la diferencia entre metros cuadrados y metros cúbicos?",
    a: "El metro cuadrado (m²) mide superficie en dos dimensiones (largo × ancho) y se usa para piso o pintura. El metro cúbico (m³) mide volumen en tres dimensiones (largo × ancho × alto) y se usa para concreto, agua, tierra o grava. Una habitación de 20 m² con techo de 2.5 m de alto encierra 50 m³ de espacio."
  },
  {
    q: "¿Cómo calculo el volumen de un cilindro o tinaco?",
    a: "Usa Volumen = π × radio² × altura. Mide el diámetro, divídelo entre dos para obtener el radio, elévalo al cuadrado, multiplícalo por π (3.1416) y por la altura, todo en metros. Un tinaco de 1.1 m de diámetro y 1.3 m de altura tiene un radio de 0.55 m: 3.1416 × 0.55² × 1.3 ≈ 1.24 m³, unos 1,240 litros."
  },
  {
    q: "¿Cuál es el error más común al calcular metros cúbicos?",
    a: "Mezclar unidades. El error número uno es multiplicar metros por centímetros sin convertir: si el espesor de una losa es de 10 cm hay que usar 0.10 m, no 10. Otro error frecuente es confundir volumen con superficie, o usar las medidas exteriores de un tinaco cuando lo que importa es la capacidad interior. Pasa todo a metros con decimales desde el inicio."
  },
  {
    q: "¿Cuántos metros cúbicos de agua caben en una cisterna?",
    a: "Multiplica largo × ancho × alto interior, en metros. Una cisterna de 2 m × 2 m × 1.5 m tiene 6 m³, es decir, 6,000 litros. Para tinacos cilíndricos usa la fórmula del cilindro. Como referencia, una familia de cuatro personas consume entre 0.6 y 1 m³ de agua al día, así que una cisterna de 6 m³ cubre alrededor de una semana."
  }
];
