import type { FAQItem } from '@components/FAQ.astro';

export const escalerasFAQ: FAQItem[] = [
  {
    q: "¿Cómo se calcula el peralte y la huella de una escalera?",
    a: "Empieza por la altura total (de piso a piso). Divide esa altura entre un peralte cómodo de 17 a 18 cm para saber cuántos escalones necesitas, y redondea al número entero más cercano. Luego divide la altura total entre ese número de escalones para obtener el peralte real. La huella (la profundidad del paso) cómoda va de 28 a 30 cm. Por ejemplo, con 280 cm de altura total: 280 ÷ 17.5 ≈ 16 escalones, y 280 ÷ 16 = 17.5 cm de peralte real."
  },
  {
    q: "¿Cuál es la fórmula de la huella cómoda (regla de Blondel)?",
    a: "La regla más usada dice que 2 × peralte + huella debe quedar entre 63 y 65 cm. Por ejemplo, con un peralte de 17.5 cm y una huella de 28 cm: 2 × 17.5 + 28 = 63 cm, que está dentro del rango cómodo. Si el resultado se sale de 63 a 65 cm, la escalera se siente o muy empinada (cansa al subir) o muy tendida (es fácil tropezar al bajar)."
  },
  {
    q: "¿Cuántos escalones necesito para una altura determinada?",
    a: "Divide la altura total entre el peralte deseado y redondea al entero más cercano. Para 2.80 m (280 cm) con peralte de 17.5 cm: 280 ÷ 17.5 = 16 escalones. Para una entreplanta de 3.00 m (300 cm): 300 ÷ 17.5 ≈ 17 escalones, con un peralte real de 17.6 cm. Recuerda medir de piso terminado a piso terminado, incluyendo el espesor del firme y del piso de acabado."
  },
  {
    q: "¿Qué es el peralte y qué es la huella?",
    a: "El peralte es la altura vertical de cada escalón (lo que subes con cada paso). La huella es la profundidad horizontal donde apoyas el pie. La contrahuella es la cara vertical (frontal) del escalón, que puede ir cerrada o abierta. Un peralte cómodo es de 17 a 18 cm y una huella cómoda de 28 a 30 cm."
  },
  {
    q: "¿Cómo calculo el largo de la zanca?",
    a: "La zanca es la viga diagonal que sostiene los escalones. Su largo se calcula con el teorema de Pitágoras: largo = √(altura total² + recorrido total²). Por ejemplo, con 280 cm de altura total y 420 cm de recorrido: √(280² + 420²) = √(78,400 + 176,400) = √254,800 ≈ 505 cm, o sea unos 5.05 m. Conviene comprar la zanca con algo de holgura para los cortes."
  },
  {
    q: "¿Cuál es el ancho recomendado de una escalera?",
    a: "Para una escalera interior de casa habitación se recomienda un ancho mínimo de 90 cm; lo cómodo es de 100 a 120 cm para que dos personas puedan cruzarse o subir muebles. En espacios de servicio o escaleras secundarias se aceptan 80 cm. Para edificios y locales con mucha circulación los anchos son mayores y dependen del reglamento local de construcción."
  },
  {
    q: "¿Qué pendiente o ángulo debe tener una escalera?",
    a: "Una escalera cómoda tiene una pendiente de entre 30° y 38° aproximadamente. Con peralte de 17.5 cm y huella de 28 cm el ángulo ronda los 32°, que es muy cómodo. Por arriba de 40° la escalera se siente empinada y cansada; por debajo de 25° ocupa demasiado espacio y obliga a dar pasos largos. La calculadora te muestra el ángulo resultante de tus medidas."
  },
  {
    q: "¿Cuánto espacio horizontal ocupa una escalera?",
    a: "El recorrido total es (número de escalones − 1) × huella. Para 16 escalones con huella de 28 cm: 15 × 28 = 420 cm, es decir 4.20 m de largo en planta. Por eso conviene revisar desde el principio si la escalera cabe en el hueco disponible; si no cabe, se puede reducir un poco la huella, aumentar el peralte dentro del rango cómodo o agregar un descanso para cambiar de dirección."
  },
  {
    q: "¿Cuándo necesito un descanso en la escalera?",
    a: "Conviene poner un descanso (una plataforma plana) cuando la escalera tiene más de unos 16 a 18 escalones seguidos, cuando cambia de dirección (en L o en U) o cuando el recorrido es muy largo. El descanso da un respiro al subir y mejora la seguridad. Su fondo (profundidad) debe ser al menos igual al ancho de la escalera."
  },
  {
    q: "¿Cuáles son las partes de una escalera?",
    a: "Las principales son: el peralte (altura de cada escalón), la huella (donde pisas), la contrahuella (la cara vertical del escalón), la zanca (la viga diagonal que sostiene los escalones), el descanso (la plataforma intermedia), el barandal o pasamanos (la barra de la que te agarras) y los balaustres (los barrotes verticales del barandal). La altura total es la distancia de piso a piso."
  },
  {
    q: "¿A qué altura va el barandal o pasamanos?",
    a: "El pasamanos suele colocarse de 85 a 95 cm medidos en vertical desde la nariz del escalón. Debe ser continuo de arriba a abajo y fácil de tomar con la mano. Si la escalera tiene más de 3 o 4 escalones o hay caída a un costado, conviene poner barandal. Los balaustres deben quedar lo bastante juntos para que no pase un objeto de unos 10 cm (importante con niños)."
  },
  {
    q: "¿Cuáles son los errores más comunes al construir una escalera?",
    a: "Los más frecuentes son: que los peraltes no sean todos iguales (la diferencia entre escalones provoca tropiezos), olvidar descontar el espesor de la huella en el primer escalón al cortar la zanca, dejar la huella demasiado corta para el pie, no dejar suficiente altura libre de paso por encima (mínimo recomendado 2.00 m) y no poner barandal donde hace falta. Mantén todos los peraltes dentro de unos pocos milímetros de diferencia."
  }
];
