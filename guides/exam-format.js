(function () {
  "use strict";

  // Formato del Cambridge C1 Advanced (versión vigente desde 2015, en papel y en
  // ordenador). Cada parte enlaza con su guía mediante el campo examPart.
  window.C1_EXAM = {
    papers: [
      {
        id: "rue",
        emoji: "📖",
        name: "Reading and Use of English",
        duration: "1 h 30 min",
        weight: "40 %",
        note: "56 preguntas · Reading y Use of English se puntúan por separado (20 % cada uno)",
        parts: [
          { id: "rue-1", number: 1, name: "Multiple-choice cloze", questions: 8, marks: "1 punto cada una", task: "Texto con 8 huecos y 4 opciones por hueco. Evalúa **vocabulario**: collocations, phrasal verbs, expresiones fijas y matices de significado." },
          { id: "rue-2", number: 2, name: "Open cloze", questions: 8, marks: "1 punto cada una", task: "Texto con 8 huecos sin opciones: escribes **una sola palabra**. Evalúa gramática: preposiciones, conectores, auxiliares, pronombres, artículos." },
          { id: "rue-3", number: 3, name: "Word formation", questions: 8, marks: "1 punto cada una", task: "Texto con 8 huecos y una palabra base en mayúsculas: la transformas con **prefijos y sufijos** (sustantivos, adjetivos, negativos, plurales)." },
          { id: "rue-4", number: 4, name: "Key word transformation", questions: 6, marks: "hasta 2 puntos cada una", task: "Reescribes una frase con **3 a 6 palabras** incluida una palabra clave que no puedes cambiar. Combina gramática y vocabulario." },
          { id: "rue-5", number: 5, name: "Multiple choice", questions: 6, marks: "2 puntos cada una", task: "Texto largo con 6 preguntas de 4 opciones: **opinión y actitud del autor**, propósito, detalle, referencia y significado implícito." },
          { id: "rue-6", number: 6, name: "Cross-text multiple matching", questions: 4, marks: "2 puntos cada una", task: "Cuatro textos breves de autores distintos sobre un mismo tema: identificas **en qué coinciden o discrepan**." },
          { id: "rue-7", number: 7, name: "Gapped text", questions: 6, marks: "2 puntos cada una", task: "Texto del que se han quitado 6 párrafos: los recolocas (sobra uno). Evalúa **cohesión y estructura** del texto." },
          { id: "rue-8", number: 8, name: "Multiple matching", questions: 10, marks: "1 punto cada una", task: "Un texto dividido en secciones o varios textos breves: relacionas 10 afirmaciones con la sección correcta. Evalúa **lectura rápida y localización** de información." }
        ]
      },
      {
        id: "writing",
        emoji: "✍️",
        name: "Writing",
        duration: "1 h 30 min",
        weight: "20 %",
        note: "2 textos de 220–260 palabras",
        parts: [
          { id: "w-1", number: 1, name: "Essay (obligatorio)", questions: 1, marks: "20 puntos", task: "Ensayo a partir de unas notas con **tres aspectos**: desarrollas **dos**, los comparas y defiendes cuál es más importante o eficaz." },
          { id: "w-2", number: 2, name: "Una tarea a elegir", questions: 1, marks: "20 puntos", task: "Eliges entre **email/carta, proposal, report o review**. Se valoran: Content, Communicative Achievement, Organisation y Language (5 puntos cada uno)." }
        ]
      },
      {
        id: "listening",
        emoji: "🎧",
        name: "Listening",
        duration: "≈ 40 min",
        weight: "20 %",
        note: "30 preguntas · cada audio se escucha dos veces",
        parts: [
          { id: "l-1", number: 1, name: "Multiple choice", questions: 6, marks: "1 punto cada una", task: "Tres conversaciones breves sin relación entre sí, con **2 preguntas de 3 opciones** cada una: opinión, actitud, propósito, acuerdo." },
          { id: "l-2", number: 2, name: "Sentence completion", questions: 8, marks: "1 punto cada una", task: "Monólogo de unos 3 minutos: completas 8 frases con **palabras exactas** que oyes (1–3 palabras). La ortografía cuenta." },
          { id: "l-3", number: 3, name: "Multiple choice", questions: 6, marks: "1 punto cada una", task: "Entrevista o conversación de unos 4 minutos con **6 preguntas de 4 opciones**: actitudes, opiniones y detalles." },
          { id: "l-4", number: 4, name: "Multiple matching", questions: 10, marks: "1 punto cada una", task: "Cinco monólogos breves sobre un tema y **dos tareas simultáneas** (5 + 5): relacionas cada hablante con una opción de cada lista." }
        ]
      },
      {
        id: "speaking",
        emoji: "🗣️",
        name: "Speaking",
        duration: "15 min",
        weight: "20 %",
        note: "en pareja, con dos examinadores",
        parts: [
          { id: "s-1", number: 1, name: "Interview", questions: 0, marks: "≈ 2 min", task: "Preguntas sobre ti: estudios, trabajo, aficiones, planes. Respuestas **desarrolladas** (2–3 frases), no monosílabos." },
          { id: "s-2", number: 2, name: "Long turn", questions: 0, marks: "≈ 4 min", task: "Recibes tres fotos y hablas **1 minuto** sobre dos de ellas respondiendo dos preguntas. Después comentas brevemente (30 s) las de tu compañero." },
          { id: "s-3", number: 3, name: "Collaborative task", questions: 0, marks: "≈ 4 min", task: "Con tu compañero comentáis las opciones de un diagrama (**2 min**) y después tenéis **1 minuto** para llegar a una decisión." },
          { id: "s-4", number: 4, name: "Discussion", questions: 0, marks: "≈ 5 min", task: "Preguntas más **abstractas** relacionadas con el tema de la parte 3. Se valora argumentar, matizar e interactuar." }
        ]
      }
    ],
    scale: [
      { range: "200–210", result: "Aprobado con **grado A**: Cambridge certifica nivel **C2**" },
      { range: "193–199", result: "Aprobado con **grado B**: nivel **C1**" },
      { range: "180–192", result: "Aprobado con **grado C**: nivel **C1**" },
      { range: "160–179", result: "No apruebas el C1, pero recibes un certificado de nivel **B2**" },
      { range: "< 160", result: "Sin certificado" }
    ]
  };
})();
