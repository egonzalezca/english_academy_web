(function () {
  "use strict";

  // Guías de estrategia para cada parte del C1 Advanced. Cada guía enlaza con
  // window.C1_EXAM mediante examPart. Contrato de datos: guides/schema.md
  const G = (window.C1_GUIDES = window.C1_GUIDES || []);

  G.push({
    id: "exam-rue-4-key-word-transformation",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-4",
    order: 40,
    title: "Use of English 4: Key word transformation",
    subtitle: "6 preguntas, hasta 2 puntos cada una",
    emoji: "🔑",
    minutes: 30,
    tags: ["use of english", "part 4", "transformations", "key word"],
    objectives: [
      "Conocer las reglas exactas de la tarea",
      "Reconocer las **estructuras más evaluadas**",
      "Asegurar al menos **1 punto** aunque no sepas la respuesta completa"
    ],
    slides: [
      { type: "cover", title: "Key word transformation", subtitle: "La parte que más puntos da por pregunta en Use of English." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Te dan una frase, una **palabra clave** y una segunda frase incompleta. La completas para que signifique **exactamente lo mismo**.",
        formula: ["3–6 palabras, incluida la clave", "**No cambies** la palabra clave (ni tiempo, ni plural).", "Las contracciones cuentan como **dos palabras** (*can't* = can not)."],
        note: "Cada respuesta vale **2 puntos** y suele dividirse en dos partes de 1 punto: puedes sumar aunque falles la mitad."
      },
      {
        type: "steps",
        title: "Ejemplo resuelto",
        steps: [
          "Frase 1: *It's possible that Jack didn't receive my message.*",
          "Palabra clave: **MAY**",
          "Frase 2: *Jack ________ my message.*",
          "✓ Jack **may not have received** my message. (4 palabras)"
        ],
        note: "Puntos: 1 por **may not have** + 1 por **received**."
      },
      {
        type: "table",
        title: "Lo que más se evalúa",
        head: ["Estructura", "Ejemplo"],
        rows: [
          ["Pasiva", "They're building a bridge → A bridge **is being built**"],
          ["Estilo indirecto", "\"Don't touch it,\" she said → She **told me not to** touch it"],
          ["Modales en pasado", "I'm sure he forgot → He **must have forgotten**"],
          ["Inversión", "I had never seen… → **Never had I seen**…"],
          ["Wish / if only", "I regret not studying → I **wish I had studied**"],
          ["Phrasal verbs", "They cancelled it → They **called it off**"],
          ["Collocations", "He decided → He **made a decision**"]
        ]
      },
      {
        type: "steps",
        title: "Estrategia en 5 pasos",
        steps: [
          "Compara las dos frases: ¿qué información **falta** en la segunda?",
          "Mira qué estructura **exige** la palabra clave (¿verbo, preposición, phrasal verb, sustantivo?).",
          "Escribe la respuesta y **cuenta las palabras** (3–6 con la clave).",
          "Revisa el **tiempo verbal** y que no falte ni sobre nada (*not, already, ever*).",
          "¿No la sabes entera? **Escribe algo**: la mitad correcta da 1 punto."
        ]
      },
      {
        type: "mistakes",
        title: "Errores que cuestan puntos",
        items: [
          { wrong: "Cambiar la palabra clave (MAKE → made)", right: "Usa **make** tal cual", why: "Si la modificas, la respuesta vale 0." },
          { wrong: "Escribir 7 palabras", right: "Máximo **6**, incluida la clave", why: "Una respuesta demasiado larga no puntúa." },
          { wrong: "Añadir o perder información", right: "**Mismo significado**, ni más ni menos", why: "Olvidar un *not* o un *already* cambia el sentido." },
          { wrong: "Escribir la frase entera en la hoja", right: "Escribe **solo** las palabras del hueco", why: "Solo se corrige lo que va en el hueco." }
        ]
      },
      {
        type: "tip",
        emoji: "💡",
        title: "El truco del C1",
        text: "Muchas transformaciones convierten un **verbo** en **sustantivo + collocation**. Estudia collocations y suben a la vez las partes 1 y 4.",
        points: [
          "He decided → He **made the decision**",
          "She wasn't interested → She **had no interest in**",
          "It doesn't matter to me → It **makes no difference** to me",
          "I didn't realise → It **didn't occur to me** that…"
        ]
      },
      {
        type: "summary",
        title: "Key word transformation",
        points: [
          "**3–6 palabras** con la clave; contracciones = 2 palabras",
          "La palabra clave **no se toca**",
          "2 puntos por pregunta, normalmente **1 + 1**",
          "Top estructuras: pasiva, estilo indirecto, modales, inversión, wish, phrasal verbs",
          "Nunca dejes un hueco en blanco"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I'm sure she didn't see the email.", keyword: "CAN'T", prompt: "She ___ the email.", correctAnswer: "can't have seen", acceptableAnswers: ["can't have seen"], explanation: "Deducción negativa en pasado: **can't have + V3**." },
      { id: "e2", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "They postponed the concert because of the storm.", keyword: "PUT", prompt: "The concert ___ because of the storm.", correctAnswer: "was put off", acceptableAnswers: ["was put off"], explanation: "Postpone = **put off**, y en pasiva: **was put off**." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "\"Don't touch the paintings,\" the guard said to us.", keyword: "TOLD", prompt: "The guard ___ the paintings.", correctAnswer: "told us not to touch", acceptableAnswers: ["told us not to touch"], explanation: "Orden negativa en estilo indirecto: **tell + persona + not to + infinitivo**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I regret not taking the job.", keyword: "WISH", prompt: "I ___ the job.", correctAnswer: "wish I had taken", acceptableAnswers: ["wish i had taken", "wish i'd taken"], explanation: "Arrepentimiento sobre el pasado: **wish + past perfect**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I have never seen such a beautiful sunset.", keyword: "NEVER", prompt: "___ such a beautiful sunset.", correctAnswer: "Never have I seen", acceptableAnswers: ["never have i seen"], explanation: "Inversión tras adverbio negativo: **Never + auxiliar + sujeto + V3**." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "It wasn't necessary for you to bring a present, but you did.", keyword: "NEED", prompt: "You ___ a present.", correctAnswer: "needn't have brought", acceptableAnswers: ["needn't have brought", "need not have brought"], explanation: "Lo hiciste pero no hacía falta: **needn't have + V3**. (*Didn't need to bring* no indica que lo trajeras)." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Lucy decided to accept the offer at the last minute.", keyword: "DECISION", prompt: "Lucy ___ to accept the offer at the last minute.", correctAnswer: "made the decision", acceptableAnswers: ["made the decision", "made a decision", "took the decision", "took a decision"], explanation: "Verbo → collocation: decide = **make / take a decision**." },
      { id: "e8", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Paul was not interested in the project at all.", keyword: "INTEREST", prompt: "Paul ___ the project at all.", correctAnswer: "had no interest in", acceptableAnswers: ["had no interest in", "showed no interest in", "took no interest in"], explanation: "Adjetivo → sustantivo: not interested in = **have / show no interest in**." }
    ]
  });

  G.push({
    id: "exam-rue-1-multiple-choice-cloze",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-1",
    order: 10,
    title: "Use of English 1: Multiple-choice cloze",
    subtitle: "8 huecos, 4 opciones: gana el vocabulario preciso",
    emoji: "🎯",
    minutes: 25,
    tags: ["use of english", "part 1", "multiple choice cloze", "collocations", "vocabulary"],
    objectives: [
      "Saber qué evalúa realmente la parte 1",
      "Aplicar una estrategia para descartar opciones",
      "Practicar con huecos de collocations, phrasal verbs y expresiones fijas"
    ],
    slides: [
      { type: "cover", title: "Multiple-choice cloze", subtitle: "Cuatro palabras parecidas. Solo una encaja." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Un texto de unas 200 palabras con **8 huecos**. Para cada uno eliges entre **A, B, C o D**.",
        formula: ["8 preguntas · 1 punto cada una", "Tiempo recomendado: **≈ 10 minutos**", "Las 4 opciones suelen ser de la **misma categoría** (4 verbos, 4 sustantivos…)."]
      },
      {
        type: "table",
        title: "Qué se evalúa",
        head: ["Tipo", "Ejemplo"],
        rows: [
          ["Collocations", "**meet** a deadline (no *reach*, *arrive*)"],
          ["Phrasal verbs", "**come up with** an idea"],
          ["Expresiones fijas", "**in** the long **run**, **take** into account"],
          ["Preposición dependiente", "**capable of**, **responsible for**"],
          ["Matiz de significado", "**gaze** / glance / stare / glimpse"],
          ["Conectores", "**even though** / despite / however"]
        ]
      },
      {
        type: "steps",
        title: "Estrategia",
        steps: [
          "Lee el texto entero **sin mirar las opciones** para entender el tema.",
          "En cada hueco, mira las palabras de **antes y después**: ¿hay una preposición o un sustantivo que «exija» una palabra?",
          "Descarta las opciones que no encajan **gramaticalmente** (¿va seguida de *to*, *-ing*, *of*?).",
          "Entre las que quedan, elige por **collocation**, no por traducción.",
          "Relee la frase completa con tu opción. Nunca dejes un hueco vacío."
        ]
      },
      {
        type: "examples",
        title: "Ejemplo resuelto",
        items: [
          { en: "The research team hopes to ___ light on the causes of the disease.", es: "A throw · B shed · C cast · D put" },
          { ok: true, en: "**B shed** → *shed light on* = arrojar luz sobre", es: "*Cast* va con *doubt* o *a shadow*; *throw a party*." },
          { en: "She has a ___ knowledge of Italian art.", es: "A wide · B deep · C large · D strong" },
          { ok: true, en: "**B deep** → *a deep knowledge of*", es: "*Wide* iría con *range*; *strong* con *accent* o *interest*." }
        ]
      },
      {
        type: "mistakes",
        title: "Trampas habituales",
        items: [
          { wrong: "Elegir por «falso amigo»", right: "*actually* = en realidad; *eventually* = finalmente", why: "*Actual* no es «actual» (= current)." },
          { wrong: "Ignorar la preposición siguiente", right: "*result **in*** vs *consist **of*** vs *depend **on***", why: "La preposición suele decidir la respuesta." },
          { wrong: "Elegir la palabra «más difícil»", right: "La correcta no tiene por qué ser la más rara", why: "Se evalúa precisión, no sofisticación." }
        ]
      },
      {
        type: "tip",
        emoji: "📚",
        title: "Cómo prepararla",
        points: [
          "Aprende vocabulario en **bloques**: *pay attention to*, *take advantage of*.",
          "Lee prensa en inglés y subraya combinaciones de palabras, no palabras sueltas.",
          "Repasa las guías de **collocations**, **phrasal verbs** y **dependent prepositions**."
        ]
      },
      {
        type: "summary",
        title: "Parte 1",
        points: [
          "8 huecos · 4 opciones · 1 punto · ≈ 10 min",
          "Evalúa **collocations, phrasal verbs, expresiones fijas**",
          "Mira las palabras **alrededor** del hueco",
          "Descarta por gramática, decide por collocation",
          "Nunca dejes un hueco vacío"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la palabra correcta (estilo parte 1).", prompt: "Before making a decision, you should ___ into account all the possible risks.", options: ["take", "bring", "put", "hold"], correctAnswer: "take", explanation: "Expresión fija: **take into account**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la palabra correcta (estilo parte 1).", prompt: "The new policy is likely to ___ in significant savings.", options: ["result", "lead", "cause", "produce"], correctAnswer: "result", explanation: "**result in**. *Lead* necesitaría *to*; *cause* y *produce* no llevan *in*." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la palabra correcta (estilo parte 1).", prompt: "It took her months to ___ up with a name for the company.", options: ["come", "make", "get", "think"], correctAnswer: "come", explanation: "Phrasal verb: **come up with** = idear." },
      { id: "e4", type: "multipleChoice", instruction: "Elige la palabra correcta (estilo parte 1).", prompt: "He caught a brief ___ of the singer as she got into the car.", options: ["glimpse", "stare", "gaze", "view"], correctAnswer: "glimpse", explanation: "**catch a glimpse of** = ver fugazmente." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la palabra correcta (estilo parte 1).", prompt: "Regular exercise can make a huge ___ to your mental health.", options: ["difference", "change", "effect", "influence"], correctAnswer: "difference", explanation: "**make a difference to**. *Effect* y *influence* van con *have … on*." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la palabra correcta (estilo parte 1).", prompt: "In the long ___, investing in education benefits everyone.", options: ["run", "distance", "way", "time"], correctAnswer: "run", explanation: "Expresión fija: **in the long run** = a la larga (también existe *in the long term*)." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la palabra correcta (estilo parte 1).", prompt: "The success of the project will ___ on the support of local residents.", options: ["depend", "trust", "count", "base"], correctAnswer: "depend", explanation: "**depend on**. *Count on* exige un sujeto persona; *base* iría en pasiva (*be based on*); *trust* no lleva *on*." },
      { id: "e8", type: "multipleChoice", instruction: "¿Qué estrategia es la más eficaz?", prompt: "Dudas entre dos opciones en un hueco de la parte 1.", options: ["Comprobar cuál combina con la palabra o preposición de al lado.", "Elegir la que más se parece al español.", "Elegir la palabra más larga o sofisticada.", "Dejar el hueco vacío para no perder puntos."], correctAnswer: "Comprobar cuál combina con la palabra o preposición de al lado.", explanation: "La parte 1 evalúa **combinaciones**; no restan puntos por fallar." }
    ]
  });

  G.push({
    id: "exam-rue-2-open-cloze",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-2",
    order: 20,
    title: "Use of English 2: Open cloze",
    subtitle: "Una palabra por hueco: gramática pura",
    emoji: "🕳️",
    minutes: 25,
    tags: ["use of english", "part 2", "open cloze", "grammar", "prepositions"],
    objectives: [
      "Conocer los tipos de palabra que faltan",
      "Analizar la gramática alrededor del hueco",
      "Practicar con huecos típicos de C1"
    ],
    slides: [
      { type: "cover", title: "Open cloze", subtitle: "Sin opciones. Solo tú, la gramática y una palabra." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Texto con **8 huecos**. En cada uno escribes **una sola palabra**, en MAYÚSCULAS en la hoja de respuestas.",
        formula: ["8 preguntas · 1 punto cada una", "Tiempo recomendado: **≈ 10 minutos**", "La **ortografía** debe ser correcta. Las contracciones no valen (*don't* = 2 palabras)."]
      },
      {
        type: "table",
        title: "Qué suele faltar",
        head: ["Categoría", "Ejemplos"],
        rows: [
          ["Preposiciones", "in, on, of, despite, without"],
          ["Conectores", "although, whereas, unless, otherwise"],
          ["Relativos", "who, which, whose, whom, where"],
          ["Auxiliares", "had, been, being, do, would"],
          ["Determinantes", "few, little, much, such, whose"],
          ["Partes de expresiones", "as **far** as, in **spite** of, by **means** of"]
        ]
      },
      {
        type: "steps",
        title: "Estrategia",
        steps: [
          "Lee el texto entero primero para captar el sentido general.",
          "En cada hueco pregúntate: ¿qué **categoría** falta? (verbo, preposición, conector…)",
          "Mira si es parte de una **expresión fija** o de un phrasal verb.",
          "Comprueba el **sentido**: ¿positivo o negativo, contraste o adición?",
          "Relee la frase entera. ¿Suena natural?"
        ]
      },
      {
        type: "examples",
        title: "Ejemplos resueltos",
        items: [
          { en: "___ the bad weather, the match went ahead.", es: "✓ **Despite** (seguido de sustantivo)" },
          { en: "She is the woman ___ husband won the prize.", es: "✓ **whose** (posesivo)" },
          { en: "Hardly ___ we arrived when it started to rain.", es: "✓ **had** (inversión)" },
          { en: "As ___ as I know, the shop closes at six.", es: "✓ **far** (expresión fija)" }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Escribir dos palabras: *in spite*", right: "**Una sola palabra** por hueco", why: "Si escribes dos, no puntúa." },
          { wrong: "Escribir *dont*", right: "Las contracciones no caben", why: "*don't* son dos palabras." },
          { wrong: "No mirar la frase siguiente", right: "Lee **más allá** del hueco", why: "A veces la clave está después (p. ej., *than*, *as*)." }
        ]
      },
      {
        type: "tip",
        emoji: "🧠",
        title: "Patrones que repiten",
        points: [
          "*the + comparativo…, **the** + comparativo*",
          "*so / such… **that***",
          "*no matter **how / what***",
          "*It is (high) time…*, *What I need **is**…*",
          "*not **only**… but also*"
        ]
      },
      {
        type: "summary",
        title: "Parte 2",
        points: [
          "8 huecos · **una palabra** · 1 punto · ≈ 10 min",
          "Falta gramática: preposiciones, conectores, relativos, auxiliares",
          "Busca **expresiones fijas** y estructuras",
          "Ortografía correcta, sin contracciones",
          "Lee siempre la frase completa"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "___ the fact that he trained hard, he didn't qualify.", correctAnswer: "Despite", acceptableAnswers: ["despite"], explanation: "**Despite the fact that** + oración." },
      { id: "e2", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "This is the town ___ my grandparents grew up.", correctAnswer: "where", acceptableAnswers: ["where"], explanation: "Relativo de lugar: **where**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "No ___ how hard I try, I can't remember his name.", correctAnswer: "matter", acceptableAnswers: ["matter"], explanation: "Expresión fija: **no matter how**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "The more you read, ___ better your vocabulary becomes.", correctAnswer: "the", acceptableAnswers: ["the"], explanation: "**The more…, the better…**" },
      { id: "e5", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "The museum, ___ was built in 1850, attracts thousands of visitors.", correctAnswer: "which", acceptableAnswers: ["which"], explanation: "Relativa explicativa (con comas): **which**, nunca *that*." },
      { id: "e6", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "You won't pass ___ you start studying more seriously.", correctAnswer: "unless", acceptableAnswers: ["unless"], explanation: "**unless** = if not." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "It was ___ a good film that we watched it twice.", correctAnswer: "such", acceptableAnswers: ["such"], explanation: "**such a** + adjetivo + sustantivo + **that**." },
      { id: "e8", type: "fillBlank", instruction: "Escribe una sola palabra (estilo parte 2).", prompt: "Not only ___ she speak French, but she also speaks Arabic.", correctAnswer: "does", acceptableAnswers: ["does"], explanation: "Inversión: **Not only does she speak**…" }
    ]
  });

  G.push({
    id: "exam-rue-3-word-formation",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-3",
    order: 30,
    title: "Use of English 3: Word formation",
    subtitle: "Prefijos, sufijos y cambios internos",
    emoji: "🧬",
    minutes: 25,
    tags: ["use of english", "part 3", "word formation", "prefixes", "suffixes"],
    objectives: [
      "Identificar la **categoría** de palabra que pide el hueco",
      "Aplicar prefijos negativos y sufijos frecuentes",
      "Evitar los fallos de ortografía y plural"
    ],
    slides: [
      { type: "cover", title: "Word formation", subtitle: "UNDERSTAND → misunderstanding. Una palabra, muchas formas." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Texto con **8 huecos**. Al final de cada línea hay una palabra en MAYÚSCULAS que debes **transformar**.",
        formula: ["8 preguntas · 1 punto cada una", "Puede requerir **prefijo + sufijo** a la vez", "La ortografía cuenta: *beginning*, *argument*, *responsibility*"]
      },
      {
        type: "steps",
        title: "Cuatro preguntas por hueco",
        steps: [
          "¿Qué **categoría** necesito? (sustantivo, adjetivo, verbo, adverbio)",
          "¿Es **singular o plural**? (¿hay *a*, *many*, verbo en plural?)",
          "¿El sentido es **positivo o negativo**? (¿necesito *un-, dis-, in-*?)",
          "¿Hay **cambios internos**? (*long → length*, *deep → depth*)"
        ]
      },
      {
        type: "table",
        title: "Sufijos frecuentes",
        head: ["Categoría", "Sufijos", "Ejemplos"],
        rows: [
          ["Sustantivo", "-tion, -ment, -ity, -ness, -ance, -ence", "assessment, reliability, awareness"],
          ["Persona", "-er, -or, -ist, -ant, -ee", "competitor, scientist, applicant, employee"],
          ["Adjetivo", "-ful, -less, -ous, -ive, -able, -al", "harmless, ambitious, sustainable"],
          ["Verbo", "-ise/-ize, -en, -ify", "modernise, strengthen, simplify"],
          ["Adverbio", "-ly", "increasingly, remarkably"]
        ]
      },
      {
        type: "list",
        title: "Prefijos que más salen",
        items: [
          { term: "un- / in- / im- / il- / ir-", meaning: "negativo", example: "unaware, inaccurate, impatient, illegal, irrelevant" },
          { term: "dis- / mis-", meaning: "contrario / equivocado", example: "disapprove, misinterpret" },
          { term: "over- / under-", meaning: "demasiado / poco", example: "overestimate, underpaid" },
          { term: "re- / out-", meaning: "de nuevo / superar", example: "reconsider, outnumber" }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "SUCCEED → succesful", right: "**successful**", why: "Doble *c* y doble *s*." },
          { wrong: "ARGUE → arguement", right: "**argument**", why: "Se pierde la *e*." },
          { wrong: "COMPETE → competitors (cuando hay *a*)", right: "a **competitor**", why: "Revisa singular/plural." },
          { wrong: "BELIEVE → unbelievable (sentido positivo)", right: "Comprueba si el texto pide negativo", why: "No añadas prefijos porque sí." }
        ]
      },
      {
        type: "tip",
        emoji: "🗂️",
        title: "Cómo prepararla",
        text: "Cuando aprendas una palabra nueva, anota **toda su familia**:",
        points: [
          "*rely → reliable → unreliable → reliability → reliably*",
          "*compete → competition → competitor → competitive → competitively*",
          "*long → length → lengthen → lengthy*"
        ]
      },
      {
        type: "summary",
        title: "Parte 3",
        points: [
          "8 huecos · transformar la palabra en mayúsculas",
          "1) categoría 2) plural 3) negativo 4) cambio interno",
          "Sufijos: -tion, -ment, -ity, -ness, -ive, -ous, -able",
          "Prefijos: un-, in-, dis-, mis-, over-, under-",
          "La ortografía cuenta"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The ___ of the bridge took almost five years. (CONSTRUCT)", correctAnswer: "construction", acceptableAnswers: ["construction"], explanation: "Tras *the… of* → sustantivo: **construction**." },
      { id: "e2", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "His explanation was completely ___ to the question. (RELEVANT)", correctAnswer: "irrelevant", acceptableAnswers: ["irrelevant"], explanation: "Sentido negativo + *r* inicial → **ir-relevant**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The company is looking for ___ candidates with leadership skills. (AMBITION)", correctAnswer: "ambitious", acceptableAnswers: ["ambitious"], explanation: "Antes de sustantivo → adjetivo: **ambitious**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "We need to ___ the walls before winter. (STRONG)", correctAnswer: "strengthen", acceptableAnswers: ["strengthen"], explanation: "Tras *to* → verbo: strong → **strengthen** (cambio interno + -en)." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Online shopping has become ___ popular over the last decade. (INCREASE)", correctAnswer: "increasingly", acceptableAnswers: ["increasingly"], explanation: "Modifica a un adjetivo → adverbio: **increasingly**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "There were over 200 ___ in the marathon. (COMPETE)", correctAnswer: "competitors", acceptableAnswers: ["competitors"], explanation: "Personas y plural (*200*): **competitors**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The journalist was accused of ___ the minister's words. (INTERPRET)", correctAnswer: "misinterpreting", acceptableAnswers: ["misinterpreting"], explanation: "Prefijo *mis-* (equivocadamente) + **-ing** tras preposición." },
      { id: "e8", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The ___ of the swimming pool is fifty metres. (LONG)", correctAnswer: "length", acceptableAnswers: ["length"], explanation: "Cambio interno: long → **length**." }
    ]
  });

  G.push({
    id: "exam-rue-5-multiple-choice",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-5",
    order: 50,
    title: "Reading 5: Multiple choice",
    subtitle: "Un texto largo, 6 preguntas, 2 puntos cada una",
    emoji: "🔍",
    minutes: 25,
    tags: ["reading", "part 5", "multiple choice", "attitude", "opinion"],
    objectives: [
      "Identificar los **tipos de pregunta** de la parte 5",
      "Localizar la respuesta en el texto sin dejarse engañar",
      "Reconocer actitud, tono y significado implícito"
    ],
    slides: [
      { type: "cover", title: "Reading · Parte 5", subtitle: "Lee entre líneas: aquí se evalúa la opinión, no solo los datos." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Un texto de unas **650–750 palabras** (artículo, novela, ensayo) con **6 preguntas** de 4 opciones.",
        formula: ["6 preguntas · **2 puntos** cada una", "Tiempo recomendado: **≈ 18 minutos**", "Las preguntas siguen el **orden del texto**."]
      },
      {
        type: "table",
        title: "Tipos de pregunta",
        head: ["Pregunta", "Qué buscar"],
        rows: [
          ["What is the writer's attitude to…?", "Adjetivos y adverbios valorativos"],
          ["What does 'it' refer to in line X?", "La frase anterior"],
          ["What does the phrase '…' suggest?", "Significado figurado / implícito"],
          ["Why does the writer mention…?", "La **función** del ejemplo"],
          ["In the final paragraph, the writer…", "Conclusión, propósito"]
        ]
      },
      {
        type: "steps",
        title: "Estrategia",
        steps: [
          "Lee el **título y la entradilla** y haz una lectura rápida del texto (2–3 min).",
          "Lee la **pregunta** (sin mirar las opciones) y localiza la parte del texto.",
          "Lee esa parte con atención y formula **tu propia respuesta**.",
          "Ahora mira las opciones: elige la que coincide con tu respuesta.",
          "Comprueba por qué las otras tres son **incorrectas**."
        ]
      },
      {
        type: "mistakes",
        title: "Las opciones trampa",
        items: [
          { wrong: "Repite palabras exactas del texto", right: "La correcta suele **parafrasear**", why: "Las mismas palabras son a menudo un distractor." },
          { wrong: "Es verdad, pero no responde a la pregunta", right: "Responde **exactamente** lo que se pregunta", why: "Lee la pregunta dos veces." },
          { wrong: "Va demasiado lejos (*always, never, all*)", right: "Desconfía de los **absolutos**", why: "El texto suele matizar más." },
          { wrong: "Usa tu conocimiento del mundo", right: "Solo cuenta **lo que dice el texto**", why: "No es un examen de cultura general." }
        ]
      },
      {
        type: "list",
        title: "Vocabulario de actitud",
        items: [
          { term: "sceptical / dismissive", meaning: "escéptico / despectivo" },
          { term: "ambivalent / undecided", meaning: "con sentimientos encontrados" },
          { term: "nostalgic / wistful", meaning: "nostálgico / melancólico" },
          { term: "ironic / tongue-in-cheek", meaning: "irónico / en tono de broma" },
          { term: "grudging admiration", meaning: "admiración a regañadientes" }
        ]
      },
      {
        type: "summary",
        title: "Parte 5",
        points: [
          "1 texto · 6 preguntas · **2 puntos** · ≈ 18 min",
          "Preguntas en el **orden del texto**",
          "Responde tú primero y luego mira las opciones",
          "Desconfía de las palabras copiadas y los absolutos",
          "Aprende el vocabulario de **actitud y tono**"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Lee el fragmento y responde.", prompt: "\"Critics hailed the novel as a masterpiece; I confess I struggled to finish it.\"\nWhat is the writer's attitude to the novel?", options: ["Less enthusiastic than the critics", "As enthusiastic as the critics", "Angry about the critics' reviews", "Unsure whether it was finished"], correctAnswer: "Less enthusiastic than the critics", explanation: "*I confess I struggled* contrasta con *hailed as a masterpiece*: menos entusiasmo." },
      { id: "e2", type: "multipleChoice", instruction: "Lee el fragmento y responde.", prompt: "\"The app promises to change your life. Mine remains, so far, stubbornly unchanged.\"\nThe writer's tone is…", options: ["ironic", "furious", "nostalgic", "enthusiastic"], correctAnswer: "ironic", explanation: "*stubbornly unchanged* frente a *change your life*: tono **irónico**." },
      { id: "e3", type: "multipleChoice", instruction: "Lee el fragmento y responde.", prompt: "\"Many scientists dismissed her theory. Twenty years later, the same experts were quoting it in their own papers.\"\nWhy does the writer mention the experts quoting the theory?", options: ["To show how opinions of her work changed", "To criticise the experts for copying", "To explain the theory in detail", "To suggest that her theory was wrong"], correctAnswer: "To show how opinions of her work changed", explanation: "Pregunta de **función**: el ejemplo muestra el cambio de opinión." },
      { id: "e4", type: "multipleChoice", instruction: "Lee el fragmento y responde.", prompt: "\"I admired his determination, though I could never quite bring myself to like him.\"\nThe writer feels…", options: ["grudging respect for him", "deep affection for him", "complete indifference to him", "open hostility towards him"], correctAnswer: "grudging respect for him", explanation: "Admira su determinación pero no le cae bien: **respeto a regañadientes**." },
      { id: "e5", type: "multipleChoice", instruction: "¿Qué estrategia es la correcta?", prompt: "Una opción repite casi palabra por palabra una frase del texto.", options: ["Comprobar si realmente responde a la pregunta, porque puede ser un distractor.", "Elegirla directamente, porque está en el texto.", "Descartarla siempre.", "Elegirla solo si es la más larga."], correctAnswer: "Comprobar si realmente responde a la pregunta, porque puede ser un distractor.", explanation: "Las palabras copiadas son un distractor frecuente; la correcta suele parafrasear." },
      { id: "e6", type: "multipleChoice", instruction: "Vocabulario de actitud.", prompt: "A writer who is 'sceptical' about a claim…", options: ["doubts that it is true", "strongly agrees with it", "finds it funny", "has never heard of it"], correctAnswer: "doubts that it is true", explanation: "**Sceptical** = escéptico, duda de algo." },
      { id: "e7", type: "multipleChoice", instruction: "¿Verdadero o falso?", prompt: "En la parte 5, las preguntas siguen el orden del texto.", options: ["Verdadero", "Falso"], correctAnswer: "Verdadero", explanation: "Sí: la pregunta 31 está antes en el texto que la 32, etc. (la última puede referirse a todo el texto)." }
    ]
  });

  G.push({
    id: "exam-rue-6-cross-text",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-6",
    order: 60,
    title: "Reading 6: Cross-text multiple matching",
    subtitle: "Cuatro autores, una pregunta: ¿quién opina qué?",
    emoji: "🧑‍🤝‍🧑",
    minutes: 25,
    tags: ["reading", "part 6", "cross-text", "opinions", "agree disagree"],
    objectives: [
      "Entender el formato «mismo tema, cuatro opiniones»",
      "Resumir la postura de cada autor en una frase",
      "Reconocer el lenguaje de acuerdo y desacuerdo"
    ],
    slides: [
      { type: "cover", title: "Reading · Parte 6", subtitle: "Which writer shares B's view? Which one disagrees with the others?" },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "**Cuatro textos breves** (A–D) de autores distintos sobre el mismo tema. Respondes **4 preguntas** que comparan sus opiniones.",
        formula: ["4 preguntas · **2 puntos** cada una", "Tiempo recomendado: **≈ 12 minutos**", "Las letras **pueden repetirse**."]
      },
      {
        type: "table",
        title: "Tipos de pregunta",
        head: ["Pregunta", "Qué hacer"],
        rows: [
          ["Which writer **shares** A's opinion on X?", "Busca la opinión de A sobre X y compárala"],
          ["Which writer has a **different** view from the others on X?", "Compara los 4 sobre X"],
          ["Which writer **expresses a similar view** to C about X?", "Igual que la primera"]
        ]
      },
      {
        type: "steps",
        title: "Estrategia",
        steps: [
          "Lee las **4 preguntas** y subraya el **tema** de cada una (X).",
          "Lee el texto A y anota en el margen su opinión sobre cada tema.",
          "Repite con B, C y D: tendrás una **tabla mental** de opiniones.",
          "Responde comparando tus notas, no releyendo todo.",
          "Ojo: un autor puede tratar varios temas; lee **todo** su texto."
        ]
      },
      {
        type: "list",
        title: "Lenguaje de opinión",
        items: [
          { term: "It is undeniable that… / There is no doubt that…", meaning: "convicción" },
          { term: "It could be argued that… / Some would claim…", meaning: "opinión ajena (no necesariamente la del autor)" },
          { term: "While it is true that…, …", meaning: "concesión seguida de la opinión real" },
          { term: "This is, however, an overstatement.", meaning: "desacuerdo" },
          { term: "I remain unconvinced that…", meaning: "escepticismo" }
        ]
      },
      {
        type: "mistakes",
        title: "Trampas habituales",
        items: [
          { wrong: "Confundir la opinión de otros con la del autor", right: "*Some claim… but* → la opinión está tras **but**", why: "Los autores citan ideas para rebatirlas." },
          { wrong: "Quedarte con la primera frase", right: "Lee el texto hasta el final", why: "La conclusión puede matizar todo." },
          { wrong: "Buscar las mismas palabras", right: "Busca la **misma idea**", why: "Los autores parafrasean." }
        ]
      },
      {
        type: "summary",
        title: "Parte 6",
        points: [
          "4 textos (A–D) · 4 preguntas · **2 puntos** · ≈ 12 min",
          "Subraya el **tema** de cada pregunta",
          "Anota la opinión de cada autor sobre cada tema",
          "Distingue opinión propia y citada (*some claim… but*)",
          "Las letras pueden repetirse"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Cuál es la opinión del autor?", prompt: "\"Some argue that homework improves discipline. In my experience, however, it mostly breeds resentment.\"", options: ["The writer thinks homework causes negative feelings.", "The writer thinks homework improves discipline.", "The writer has no clear opinion."], correctAnswer: "The writer thinks homework causes negative feelings.", explanation: "La opinión real llega tras **however**." },
      { id: "e2", type: "multipleChoice", instruction: "¿Coinciden los autores?", prompt: "A: \"Remote work boosts productivity.\"\nB: \"Freed from the office, staff achieve far more.\"", options: ["They agree.", "They disagree.", "B does not mention productivity."], correctAnswer: "They agree.", explanation: "*achieve far more* parafrasea *boosts productivity*." },
      { id: "e3", type: "multipleChoice", instruction: "¿Coinciden los autores?", prompt: "A: \"Social media has brought people closer.\"\nB: \"For all the talk of connection, users report feeling lonelier than ever.\"", options: ["They disagree.", "They agree.", "Neither has an opinion."], correctAnswer: "They disagree.", explanation: "B contradice a A: *lonelier than ever*." },
      { id: "e4", type: "multipleChoice", instruction: "¿Qué indica la expresión?", prompt: "\"While it is true that the museum is expensive, the experience justifies the price.\"", options: ["The writer thinks the museum is worth visiting.", "The writer thinks the museum is too expensive to visit.", "The writer has not visited the museum."], correctAnswer: "The writer thinks the museum is worth visiting.", explanation: "*While it is true that…* = concesión; la opinión real va después." },
      { id: "e5", type: "multipleChoice", instruction: "Vocabulario de opinión.", prompt: "\"I remain unconvinced that the scheme will work.\" The writer is…", options: ["doubtful", "certain", "enthusiastic", "indifferent"], correctAnswer: "doubtful", explanation: "**Unconvinced** = no convencido, escéptico." },
      { id: "e6", type: "multipleChoice", instruction: "Formato.", prompt: "En la parte 6, ¿puede la misma letra (A, B, C o D) ser la respuesta de dos preguntas?", options: ["Sí", "No"], correctAnswer: "Sí", explanation: "Las letras **pueden repetirse**." }
    ]
  });

  G.push({
    id: "exam-rue-7-gapped-text",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-7",
    order: 70,
    title: "Reading 7: Gapped text",
    subtitle: "Seis párrafos fuera de su sitio (y uno que sobra)",
    emoji: "🧱",
    minutes: 25,
    tags: ["reading", "part 7", "gapped text", "cohesion", "paragraphs"],
    objectives: [
      "Usar las **pistas de cohesión** para recolocar párrafos",
      "Detectar referencias: pronombres, *this/these*, conectores",
      "Gestionar el párrafo que sobra"
    ],
    slides: [
      { type: "cover", title: "Reading · Parte 7", subtitle: "Un puzle de párrafos. Las piezas encajan por las palabras de los bordes." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Un texto de unas 800 palabras al que le faltan **6 párrafos**. Tienes **7 opciones** (A–G): sobra una.",
        formula: ["6 preguntas · **2 puntos** cada una", "Tiempo recomendado: **≈ 18 minutos**", "Cada letra se usa **una sola vez**."]
      },
      {
        type: "table",
        title: "Pistas de cohesión",
        head: ["Tipo", "Ejemplos"],
        rows: [
          ["Pronombres", "he, she, they, it → ¿a quién se refieren?"],
          ["Demostrativos", "**This** decision…, **these** findings…, **such** a…"],
          ["Conectores", "However, Nevertheless, As a result, What's more"],
          ["Tiempo", "Two years later…, At first…, Eventually…"],
          ["Repetición / sinónimos", "the expedition → the journey → the trip"]
        ]
      },
      {
        type: "steps",
        title: "Estrategia",
        steps: [
          "Lee el **texto principal** completo (sin los párrafos) para seguir la historia.",
          "Lee los 7 párrafos A–G y fíjate en su **primera y última frase**.",
          "En cada hueco, mira la frase de **antes y de después** del hueco.",
          "Coloca primero los huecos **más claros** y deja los dudosos.",
          "Al final, lee el texto completo con tus respuestas: ¿fluye?"
        ]
      },
      {
        type: "examples",
        title: "Ejemplo de pista",
        items: [
          { en: "…The team finally reached the summit at dawn. **[GAP]** By then, however, two of them were suffering from frostbite.", es: "El hueco debe hablar de llegar a la cumbre y preparar el contraste con *however*." },
          { ok: true, en: "Párrafo: \"**It** was a moment of pure joy. They took photos and celebrated…\"", es: "*It* = llegar a la cumbre; *however* contrasta la alegría con el problema." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Fijarte solo en el tema", right: "Comprueba la **conexión gramatical**", why: "Varios párrafos hablan del mismo tema." },
          { wrong: "Mirar solo la frase anterior", right: "Comprueba **antes y después**", why: "El párrafo debe encajar por los dos lados." },
          { wrong: "Forzar todos los párrafos", right: "Recuerda que **uno sobra**", why: "El que sobra suele ser muy parecido a otro." }
        ]
      },
      {
        type: "summary",
        title: "Parte 7",
        points: [
          "6 huecos · 7 párrafos (sobra 1) · **2 puntos** · ≈ 18 min",
          "Lee primero el texto principal",
          "Pistas: pronombres, **this/these**, conectores, tiempo",
          "El párrafo debe encajar **antes y después**",
          "Relee el texto completo al final"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Qué frase encaja después?", prompt: "\"The village had no electricity until 1985.\" → ___", options: ["This changed everything for the local farmers.", "However, they had had electricity for years.", "Electricity was invented in the 19th century."], correctAnswer: "This changed everything for the local farmers.", explanation: "**This** se refiere a la llegada de la electricidad." },
      { id: "e2", type: "multipleChoice", instruction: "¿Qué frase encaja después?", prompt: "\"Most experts predicted the project would fail.\" → ___", options: ["They could not have been more wrong.", "As a result, it was a failure.", "It was built in a small town."], correctAnswer: "They could not have been more wrong.", explanation: "*They* = the experts, y anuncia el contraste." },
      { id: "e3", type: "multipleChoice", instruction: "¿Qué frase encaja antes?", prompt: "___ → \"These findings surprised even the researchers themselves.\"", options: ["The study showed that teenagers sleep less than adults.", "Many people enjoy reading.", "The weather was cold that day."], correctAnswer: "The study showed that teenagers sleep less than adults.", explanation: "**These findings** necesita un estudio con resultados justo antes." },
      { id: "e4", type: "multipleChoice", instruction: "Formato.", prompt: "En la parte 7 hay…", options: ["7 párrafos para 6 huecos", "6 párrafos para 6 huecos", "8 párrafos para 6 huecos"], correctAnswer: "7 párrafos para 6 huecos", explanation: "Sobra **un** párrafo." },
      { id: "e5", type: "multipleChoice", instruction: "¿Qué palabra señala contraste con lo anterior?", prompt: "Elige el conector de contraste.", options: ["Nevertheless", "Furthermore", "Consequently", "Similarly"], correctAnswer: "Nevertheless", explanation: "**Nevertheless** = sin embargo." },
      { id: "e6", type: "multipleChoice", instruction: "Estrategia.", prompt: "¿Qué conviene leer primero?", options: ["El texto principal completo", "Solo los párrafos A–G", "Solo la última frase del texto"], correctAnswer: "El texto principal completo", explanation: "Necesitas entender la estructura y la historia antes de colocar piezas." }
    ]
  });

  G.push({
    id: "exam-rue-8-multiple-matching",
    level: "C1",
    category: "exam",
    module: "Reading and Use of English",
    examPart: "rue-8",
    order: 80,
    title: "Reading 8: Multiple matching",
    subtitle: "10 afirmaciones, varias secciones: lectura rápida",
    emoji: "🗺️",
    minutes: 20,
    tags: ["reading", "part 8", "multiple matching", "scanning", "paraphrase"],
    objectives: [
      "Practicar la lectura **selectiva** (scanning)",
      "Reconocer **paráfrasis** entre preguntas y texto",
      "Gestionar el tiempo al final del examen"
    ],
    slides: [
      { type: "cover", title: "Reading · Parte 8", subtitle: "Which section mentions…? Encontrar rápido, sin leer todo palabra por palabra." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Un texto dividido en **secciones** (A–D, A–F…) o varios textos breves. Relacionas **10 afirmaciones** con la sección correcta.",
        formula: ["10 preguntas · **1 punto** cada una", "Tiempo recomendado: **≈ 15 minutos**", "Las letras **se repiten**."]
      },
      {
        type: "steps",
        title: "Estrategia",
        steps: [
          "Lee las **10 afirmaciones** y subraya la idea clave de cada una.",
          "Lee la sección A con atención media y marca qué afirmaciones encajan.",
          "Repite con cada sección. Muchas afirmaciones se resolverán solas.",
          "Para las que faltan, busca **sinónimos** de la idea clave.",
          "Si te quedas sin tiempo, **adivina**: no se restan puntos."
        ]
      },
      {
        type: "table",
        title: "Paráfrasis típicas",
        head: ["Afirmación", "En el texto"],
        rows: [
          ["regrets a decision", "I wish I hadn't… / With hindsight…"],
          ["was initially reluctant", "At first I wasn't keen on…"],
          ["underestimated the difficulty", "It turned out to be much harder than I thought"],
          ["received unexpected help", "Out of the blue, a stranger offered…"],
          ["changed career", "I gave up law to become…"]
        ]
      },
      {
        type: "mistakes",
        title: "Trampas habituales",
        items: [
          { wrong: "Una palabra igual en dos secciones", right: "Busca la que expresa **exactamente** la idea", why: "Las palabras repetidas son distractores." },
          { wrong: "Leer cada sección 10 veces", right: "Lee cada sección **una vez** con todas las preguntas en mente", why: "Ahorrarás muchísimo tiempo." },
          { wrong: "Dejar respuestas en blanco", right: "Responde todas", why: "No penaliza fallar." }
        ]
      },
      {
        type: "tip",
        emoji: "⏱️",
        title: "Gestión del tiempo",
        text: "La parte 8 es la última del Reading and Use of English. Llega con **15 minutos** como mínimo.",
        points: [
          "Use of English (1–4): ≈ 40 min",
          "Partes 5 y 7: ≈ 18 min cada una",
          "Parte 6: ≈ 12 min · Parte 8: ≈ 15 min",
          "Pasa las respuestas a la hoja **sobre la marcha** (no hay tiempo extra)."
        ]
      },
      {
        type: "summary",
        title: "Parte 8",
        points: [
          "10 afirmaciones · **1 punto** · ≈ 15 min",
          "Subraya la idea clave de cada afirmación",
          "Lee cada sección una vez con todas las preguntas en mente",
          "Busca **paráfrasis**, no palabras iguales",
          "No dejes nada en blanco"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Qué fragmento expresa la idea?", prompt: "Afirmación: \"The writer regrets a decision.\"", options: ["\"Looking back, I should never have sold the house.\"", "\"I decided to sell the house in 2010.\"", "\"Selling a house is a big decision.\""], correctAnswer: "\"Looking back, I should never have sold the house.\"", explanation: "*Looking back + should never have* = arrepentimiento." },
      { id: "e2", type: "multipleChoice", instruction: "¿Qué fragmento expresa la idea?", prompt: "Afirmación: \"The writer was initially reluctant to take part.\"", options: ["\"At first I wasn't keen, but my friends persuaded me.\"", "\"I joined the team in the first week.\"", "\"Taking part was the best thing I did.\""], correctAnswer: "\"At first I wasn't keen, but my friends persuaded me.\"", explanation: "*wasn't keen* = reluctant; *at first* = initially." },
      { id: "e3", type: "multipleChoice", instruction: "¿Qué fragmento expresa la idea?", prompt: "Afirmación: \"The writer underestimated how hard the task would be.\"", options: ["\"It turned out to be far tougher than I'd imagined.\"", "\"The task was hard, as I had expected.\"", "\"I find most tasks easy.\""], correctAnswer: "\"It turned out to be far tougher than I'd imagined.\"", explanation: "*far tougher than I'd imagined* = subestimó la dificultad." },
      { id: "e4", type: "multipleChoice", instruction: "¿Qué fragmento expresa la idea?", prompt: "Afirmación: \"The writer received help from an unexpected source.\"", options: ["\"Out of the blue, my old maths teacher offered to coach me.\"", "\"My coach helped me every day, as agreed.\"", "\"I never asked anyone for help.\""], correctAnswer: "\"Out of the blue, my old maths teacher offered to coach me.\"", explanation: "*Out of the blue* = inesperadamente." },
      { id: "e5", type: "multipleChoice", instruction: "Gestión del tiempo.", prompt: "¿Cuánto tiempo conviene reservar para la parte 8?", options: ["Unos 15 minutos", "Unos 5 minutos", "Unos 30 minutos"], correctAnswer: "Unos 15 minutos", explanation: "≈ 15 minutos para 10 preguntas de 1 punto." },
      { id: "e6", type: "multipleChoice", instruction: "Vocabulario.", prompt: "\"With hindsight, I'd have chosen a different university.\" This expresses…", options: ["regret", "pride", "uncertainty about the future", "excitement"], correctAnswer: "regret", explanation: "**With hindsight** = visto en retrospectiva → arrepentimiento." }
    ]
  });

  G.push({
    id: "exam-writing-essay",
    level: "C1",
    category: "exam",
    module: "Writing",
    examPart: "w-1",
    order: 110,
    title: "Writing 1: El essay",
    subtitle: "Estructura, plantilla y frases para la tarea obligatoria",
    emoji: "🖋️",
    minutes: 35,
    tags: ["writing", "essay", "part 1", "template", "linking words"],
    objectives: [
      "Entender la tarea: **dos de tres** aspectos y cuál es más importante",
      "Usar una estructura de 4–5 párrafos que funciona siempre",
      "Conocer los **4 criterios** con los que te corrigen"
    ],
    slides: [
      { type: "cover", title: "El essay del C1", subtitle: "220–260 palabras. Obligatorio. Y con una estructura que puedes llevar aprendida." },
      {
        type: "rule",
        title: "Cómo es la tarea",
        text: "Te dan un tema (p. ej., *how to encourage people to exercise*), **tres aspectos** y tres opiniones de apoyo.",
        formula: ["Elige **2 de los 3** aspectos", "**Compáralos** y decide cuál es más importante / eficaz, con razones", "Puedes usar las opiniones, pero **con tus palabras**"],
        note: "Si tratas los tres aspectos, el examinador lo ve como no seguir la tarea. Si no eliges uno, pierdes puntos en *Content*."
      },
      {
        type: "table",
        title: "Estructura ganadora",
        head: ["Párrafo", "Contenido", "≈ palabras"],
        rows: [
          ["1. Introducción", "Contexto del tema + qué vas a analizar", "40"],
          ["2. Aspecto 1", "Idea + explicación + ejemplo + limitación", "70"],
          ["3. Aspecto 2", "Idea + explicación + ejemplo + comparación", "70"],
          ["4. Conclusión", "Cuál es **más** eficaz y **por qué**", "50"]
        ]
      },
      {
        type: "list",
        title: "Frases para cada parte",
        items: [
          { term: "Introducción", meaning: "In recent years, there has been growing concern about… This essay will consider…" },
          { term: "Añadir", meaning: "Furthermore, … / What is more, … / Not only…, but…" },
          { term: "Contrastar", meaning: "On the other hand, … / While X is…, Y… / That said, …" },
          { term: "Ejemplificar", meaning: "A case in point is… / This is particularly true of…" },
          { term: "Concluir", meaning: "On balance, I believe… / All things considered, X is by far the more effective…" }
        ]
      },
      {
        type: "table",
        title: "Cómo te corrigen",
        text: "Cada criterio vale **0–5** puntos (total 20).",
        head: ["Criterio", "Qué buscan"],
        rows: [
          ["Content", "Cubres lo que pide la tarea, sin irte del tema"],
          ["Communicative achievement", "Registro y formato adecuados; el lector entiende tu postura"],
          ["Organisation", "Párrafos claros, conectores variados, cohesión"],
          ["Language", "Gramática y vocabulario **variados y precisos**"]
        ]
      },
      {
        type: "mistakes",
        title: "Errores que bajan la nota",
        items: [
          { wrong: "Tratar los tres aspectos", right: "Elige **dos**", why: "Así lo exige la tarea." },
          { wrong: "No decir cuál es más importante", right: "Conclusión con postura clara", why: "Es el objetivo del essay." },
          { wrong: "Copiar las opiniones del enunciado", right: "**Parafrasea** con tu propio lenguaje", why: "Copiar no demuestra nivel." },
          { wrong: "Contracciones e informalidad", right: "Registro **formal / neutral**", why: "*It's* y *loads of* no encajan." }
        ]
      },
      {
        type: "tip",
        emoji: "💎",
        title: "Sube el criterio Language",
        points: [
          "Una **inversión**: *Not only does exercise improve health, but…*",
          "Una **condicional avanzada**: *Were the government to invest…*",
          "**Nominalización**: *the introduction of…*, *a reduction in…*",
          "Collocations: *pose a threat*, *raise awareness*, *play a key role*"
        ]
      },
      {
        type: "summary",
        title: "Essay",
        points: [
          "220–260 palabras · **2 de 3** aspectos · elige el más importante",
          "4 párrafos: intro · aspecto 1 · aspecto 2 · conclusión",
          "Registro formal, sin contracciones",
          "Criterios: Content, Communicative achievement, Organisation, Language",
          "≈ 45 min: 5 planificar · 35 escribir · 5 revisar"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Formato.", prompt: "En el essay te dan tres aspectos. ¿Cuántos debes desarrollar?", options: ["Dos", "Uno", "Los tres"], correctAnswer: "Dos", explanation: "La tarea pide **dos** de los tres y decidir cuál es más importante." },
      { id: "e2", type: "multipleChoice", instruction: "¿Qué frase es mejor para concluir?", prompt: "Elige la conclusión más adecuada.", options: ["On balance, I believe that education campaigns would be by far the more effective approach.", "So that's what I think about this.", "In conclusion, both are good and bad."], correctAnswer: "On balance, I believe that education campaigns would be by far the more effective approach.", explanation: "Postura **clara** y registro formal." },
      { id: "e3", type: "multipleChoice", instruction: "Registro.", prompt: "¿Qué frase es adecuada para un essay?", options: ["A significant number of people find it difficult to exercise regularly.", "Loads of people can't be bothered to exercise.", "Lots of folks don't exercise, which is kinda bad."], correctAnswer: "A significant number of people find it difficult to exercise regularly.", explanation: "Registro neutral/formal, sin coloquialismos." },
      { id: "e4", type: "reorder", instruction: "Ordena la estructura del essay.", prompt: "Pon los párrafos en orden.", words: ["Introduction", "First-aspect", "Second-aspect", "Conclusion"], correctAnswer: "Introduction First-aspect Second-aspect Conclusion", explanation: "Intro → aspecto 1 → aspecto 2 → conclusión con postura." },
      { id: "e5", type: "match", instruction: "Relaciona cada función con un conector.", prompt: "Función → conector", pairs: [
        { left: "Añadir", right: "Furthermore" },
        { left: "Contrastar", right: "On the other hand" },
        { left: "Ejemplificar", right: "A case in point is" },
        { left: "Concluir", right: "All things considered" }
      ], explanation: "Variar los conectores mejora *Organisation*." },
      { id: "e6", type: "multipleChoice", instruction: "Criterios.", prompt: "¿Qué criterio penaliza no responder a todos los puntos de la tarea?", options: ["Content", "Language", "Organisation"], correctAnswer: "Content", explanation: "**Content** valora si cubres todo lo que pide la tarea." },
      { id: "e7", type: "multipleChoice", instruction: "¿Qué frase demuestra más nivel C1?", prompt: "Elige la frase más rica gramaticalmente.", options: ["Were local councils to invest in sports facilities, participation would almost certainly rise.", "If councils invest in sports facilities, more people will do sport.", "Councils should invest in sports. Then people do more sport."], correctAnswer: "Were local councils to invest in sports facilities, participation would almost certainly rise.", explanation: "Condicional con inversión + vocabulario preciso." },
      { id: "e8", type: "multipleChoice", instruction: "Longitud.", prompt: "¿Cuántas palabras debe tener el essay?", options: ["220–260", "140–190", "300–350"], correctAnswer: "220–260", explanation: "Ambas tareas de Writing C1: **220–260 palabras**." }
    ]
  });

  G.push({
    id: "exam-writing-report",
    level: "C1",
    category: "exam",
    module: "Writing",
    examPart: "w-2",
    order: 120,
    title: "Writing 2: El report",
    subtitle: "Informe con títulos, datos y recomendaciones",
    emoji: "📊",
    minutes: 30,
    tags: ["writing", "report", "part 2", "headings", "recommendations"],
    objectives: [
      "Distinguir el report del proposal",
      "Organizarlo con **títulos** y un lenguaje impersonal",
      "Redactar hallazgos y **recomendaciones** convincentes"
    ],
    slides: [
      { type: "cover", title: "El report", subtitle: "Para tu jefe, tu profesor o un comité: lo que pasó y qué se recomienda." },
      {
        type: "rule",
        title: "Qué es",
        text: "Un informe sobre una **situación que ya existe o ya ha ocurrido** (un evento, un servicio, una encuesta), dirigido a un superior.",
        formula: ["Pasado / presente: **qué pasó y cómo fue**", "Tono **formal e impersonal**", "Títulos claros para cada sección"],
        note: "Report = evalúa algo existente. Proposal = propone algo para el **futuro**."
      },
      {
        type: "table",
        title: "Estructura",
        head: ["Título", "Contenido"],
        rows: [
          ["Introduction", "Propósito: *The aim of this report is to…*"],
          ["Sección 1 (p. ej., Strengths)", "Lo positivo, con datos o ejemplos"],
          ["Sección 2 (p. ej., Weaknesses)", "Lo mejorable"],
          ["Recommendations", "Qué se debería hacer y por qué"],
          ["Conclusion (opcional)", "Una frase de cierre"]
        ]
      },
      {
        type: "list",
        title: "Frases útiles",
        items: [
          { term: "The aim / purpose of this report is to…", meaning: "introducir el propósito" },
          { term: "It was found that… / The majority of respondents…", meaning: "presentar resultados" },
          { term: "A significant proportion of… / Only a handful of…", meaning: "cantidades" },
          { term: "It is (strongly) recommended that…", meaning: "recomendar (+ subjuntivo)" },
          { term: "Should these measures be implemented, …", meaning: "condicional formal" }
        ]
      },
      {
        type: "examples",
        title: "Del informal al report",
        items: [
          { ok: false, en: "Loads of people said the food was awful.", es: "Demasiado informal." },
          { ok: true, en: "**A considerable number of** participants **expressed dissatisfaction with** the catering.", es: "Impersonal y preciso." },
          { ok: false, en: "I think you should open the library later.", es: "Personal y directo." },
          { ok: true, en: "**It is recommended that** opening hours **be extended** until 9 p.m.", es: "Pasiva + subjuntivo." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Escribirlo como una carta (Dear Sir…)", right: "Usa **título** y secciones", why: "Formato incorrecto = Communicative achievement bajo." },
          { wrong: "Narrar sin evaluar", right: "Valora: **puntos fuertes, débiles, recomendaciones**", why: "El lector necesita conclusiones." },
          { wrong: "Opinión personal todo el rato (I think…)", right: "Impersonal: *It was felt that…*", why: "El report es objetivo." }
        ]
      },
      {
        type: "summary",
        title: "Report",
        points: [
          "Evalúa algo **existente**; destinatario: un superior",
          "**Títulos**: Introduction · secciones · Recommendations",
          "Lenguaje impersonal: *It was found that…*, pasiva",
          "Recomendaciones: *It is recommended that… + verbo base*",
          "220–260 palabras"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Report o proposal?", prompt: "Tu jefe te pide evaluar cómo fue la conferencia de la semana pasada.", options: ["Report", "Proposal", "Review"], correctAnswer: "Report", explanation: "Evalúa algo **que ya ocurrió** → report." },
      { id: "e2", type: "multipleChoice", instruction: "¿Qué frase abre mejor un report?", prompt: "Elige la introducción.", options: ["The aim of this report is to evaluate the new canteen and suggest improvements.", "Hi! I'm writing to tell you about the canteen.", "Once upon a time, the canteen opened."], correctAnswer: "The aim of this report is to evaluate the new canteen and suggest improvements.", explanation: "Propósito claro y formal." },
      { id: "e3", type: "multipleChoice", instruction: "Registro.", prompt: "¿Qué frase es adecuada en un report?", options: ["The majority of respondents were satisfied with the service.", "Most people loved it, honestly.", "Everyone was super happy."], correctAnswer: "The majority of respondents were satisfied with the service.", explanation: "Impersonal y preciso." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "It is recommended that the gym ___ open at weekends.", correctAnswer: "be", acceptableAnswers: ["be", "remain", "stay"], explanation: "Subjuntivo tras **recommended that**: *be / remain open*." },
      { id: "e5", type: "multipleChoice", instruction: "Formato.", prompt: "¿Qué rasgo es típico del report?", options: ["Títulos para cada sección", "Saludo Dear… y despedida Yours…", "Un título llamativo con humor"], correctAnswer: "Títulos para cada sección", explanation: "El report se organiza con **headings**." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Most students said they were unhappy with the timetable.", keyword: "MAJORITY", prompt: "The ___ expressed dissatisfaction with the timetable.", correctAnswer: "majority of students", acceptableAnswers: ["majority of students", "majority of the students"], explanation: "**The majority of** + sustantivo." }
    ]
  });

  G.push({
    id: "exam-writing-proposal",
    level: "C1",
    category: "exam",
    module: "Writing",
    examPart: "w-2",
    order: 130,
    title: "Writing 2: El proposal",
    subtitle: "Convencer a un comité de que financie tu idea",
    emoji: "💼",
    minutes: 30,
    tags: ["writing", "proposal", "part 2", "persuasive", "future"],
    objectives: [
      "Plantear una propuesta **de futuro** con títulos",
      "Persuadir con beneficios concretos",
      "Usar condicionales y lenguaje de sugerencia formal"
    ],
    slides: [
      { type: "cover", title: "El proposal", subtitle: "Una idea, un presupuesto y buenas razones para aprobarla." },
      {
        type: "rule",
        title: "Qué es",
        text: "Un documento que **propone** algo nuevo (un proyecto, una mejora, un uso de un dinero) a un comité, una empresa o un ayuntamiento.",
        formula: ["Futuro / condicional: **qué se haría y qué beneficios traería**", "Formal y **persuasivo**", "Con títulos, como el report"]
      },
      {
        type: "table",
        title: "Estructura",
        head: ["Título", "Contenido"],
        rows: [
          ["Introduction", "Propósito: *This proposal outlines…*"],
          ["Current situation", "El problema o la necesidad actual"],
          ["Proposed changes / Suggestions", "Qué propones, en detalle"],
          ["Benefits", "Por qué merece la pena"],
          ["Conclusion", "Llamada final a aprobarlo"]
        ]
      },
      {
        type: "list",
        title: "Frases útiles",
        items: [
          { term: "This proposal outlines / sets out…", meaning: "introducir" },
          { term: "At present, … / There is currently a lack of…", meaning: "situación actual" },
          { term: "I would suggest that… / One option would be to…", meaning: "proponer" },
          { term: "This would enable… / This would result in…", meaning: "beneficios" },
          { term: "I trust that the committee will give this proposal careful consideration.", meaning: "cerrar" }
        ]
      },
      {
        type: "compare",
        title: "Report vs proposal",
        columns: [
          { label: "Report", text: "Evalúa algo **existente**. Pasado y presente. Recomendaciones al final.", example: "The festival was well attended, but…" },
          { label: "Proposal", text: "Propone algo **nuevo**. Futuro y condicional. Beneficios en el centro.", example: "A new community garden would…" }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Ideas vagas: *do more activities*", right: "Concreta: *weekly coding workshops for teenagers*", why: "El comité necesita detalles." },
          { wrong: "Olvidar los beneficios", right: "Sección **Benefits** con consecuencias claras", why: "Es lo que convence." },
          { wrong: "Usar *will* para todo", right: "*would*: es una propuesta, no un hecho", why: "Matiza con condicionales." }
        ]
      },
      {
        type: "summary",
        title: "Proposal",
        points: [
          "Propone algo **nuevo** a un comité o superior",
          "Títulos: Introduction · Current situation · Suggestions · Benefits · Conclusion",
          "**would**, *I would suggest that…*, *This would enable…*",
          "Detalles concretos y beneficios claros",
          "220–260 palabras"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Report o proposal?", prompt: "El ayuntamiento ofrece dinero para un proyecto juvenil y pide ideas.", options: ["Proposal", "Report", "Essay"], correctAnswer: "Proposal", explanation: "Propones algo **nuevo** → proposal." },
      { id: "e2", type: "multipleChoice", instruction: "¿Qué frase abre mejor un proposal?", prompt: "Elige la introducción.", options: ["This proposal outlines a plan to create a study area in the old library.", "I want to tell you my opinion about the library.", "The aim of this essay is to discuss libraries."], correctAnswer: "This proposal outlines a plan to create a study area in the old library.", explanation: "**This proposal outlines…** es la fórmula clásica." },
      { id: "e3", type: "multipleChoice", instruction: "¿Qué frase expresa mejor un beneficio?", prompt: "Elige la frase más adecuada.", options: ["This would enable residents to meet and share skills.", "This will definitely make everyone happy forever.", "It's nice."], correctAnswer: "This would enable residents to meet and share skills.", explanation: "*would enable* + beneficio concreto." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "At present, there is a ___ of affordable leisure facilities for teenagers.", correctAnswer: "lack", acceptableAnswers: ["lack", "shortage"], explanation: "**a lack / shortage of** = falta de." },
      { id: "e5", type: "multipleChoice", instruction: "Formato.", prompt: "¿Qué sección es imprescindible en un proposal?", options: ["Benefits", "Dear Sir or Madam", "Rating out of 5"], correctAnswer: "Benefits", explanation: "Los **beneficios** son el corazón de la propuesta." },
      { id: "e6", type: "multipleChoice", instruction: "¿Qué frase es la más formal para cerrar?", prompt: "Elige el cierre.", options: ["I trust that the committee will give this proposal careful consideration.", "Hope you like it!", "That's all, thanks."], correctAnswer: "I trust that the committee will give this proposal careful consideration.", explanation: "Cierre formal y persuasivo." }
    ]
  });

  G.push({
    id: "exam-writing-review",
    level: "C1",
    category: "exam",
    module: "Writing",
    examPart: "w-2",
    order: 140,
    title: "Writing 2: La review",
    subtitle: "Describir, valorar y recomendar con estilo",
    emoji: "⭐",
    minutes: 30,
    tags: ["writing", "review", "part 2", "describe", "recommend"],
    objectives: [
      "Combinar **descripción, opinión y recomendación**",
      "Enganchar al lector con un título y un inicio atractivos",
      "Usar vocabulario evaluativo preciso"
    ],
    slides: [
      { type: "cover", title: "La review", subtitle: "Una crítica que se lee con gusto y ayuda a decidir." },
      {
        type: "rule",
        title: "Qué es",
        text: "Una crítica para una revista o web sobre un libro, película, restaurante, app, exposición… Suele pedir **comparar** o valorar un aspecto concreto.",
        formula: ["Describir + **evaluar** + **recomendar**", "Registro **semiformal**, con personalidad", "Título atractivo"]
      },
      {
        type: "table",
        title: "Estructura",
        head: ["Párrafo", "Contenido"],
        rows: [
          ["Título + intro", "Engancha y presenta qué vas a reseñar"],
          ["Descripción", "Lo esencial (sin contar todo el argumento)"],
          ["Valoración", "Puntos fuertes y débiles, con ejemplos"],
          ["Recomendación", "¿Para quién es? ¿Merece la pena?"]
        ]
      },
      {
        type: "list",
        title: "Vocabulario evaluativo",
        items: [
          { term: "gripping / thought-provoking / moving", meaning: "absorbente / que hace pensar / conmovedor" },
          { term: "predictable / far-fetched / overrated", meaning: "previsible / inverosímil / sobrevalorado" },
          { term: "stunning visuals / a stellar cast", meaning: "imágenes espectaculares / reparto brillante" },
          { term: "falls short of expectations", meaning: "no está a la altura" },
          { term: "well worth a visit / a must-see", meaning: "merece mucho la pena / imprescindible" }
        ]
      },
      {
        type: "examples",
        title: "Inicios con gancho",
        items: [
          { ok: true, en: "Have you ever wondered what it would be like to live without the internet for a month?", es: "Pregunta retórica." },
          { ok: true, en: "Few films manage to be both hilarious and heartbreaking. This one does.", es: "Afirmación contundente." },
          { ok: false, en: "In this review I will write about a film.", es: "Plano y sin interés." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Contar todo el argumento", right: "Descripción **breve**, más valoración", why: "Se evalúa tu capacidad de valorar." },
          { wrong: "Solo *good / bad / nice*", right: "Adjetivos precisos: *gripping, overrated*", why: "Criterio Language." },
          { wrong: "Olvidar la recomendación", right: "Termina diciendo **a quién** la recomiendas", why: "Es parte de la tarea." }
        ]
      },
      {
        type: "summary",
        title: "Review",
        points: [
          "Título atractivo + inicio con gancho",
          "Describir poco, **valorar** mucho",
          "Adjetivos precisos: gripping, far-fetched, thought-provoking",
          "Recomendación final clara",
          "Semiformal: puedes dirigirte al lector (*you*)"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Qué inicio engancha más?", prompt: "Elige el mejor inicio para una review.", options: ["Imagine a restaurant where the menu changes every single day.", "This is a review of a restaurant.", "I went to a restaurant last week."], correctAnswer: "Imagine a restaurant where the menu changes every single day.", explanation: "Implica al lector y despierta curiosidad." },
      { id: "e2", type: "match", instruction: "Relaciona cada adjetivo con su significado.", prompt: "Adjetivo → significado", pairs: [
        { left: "gripping", right: "absorbente" },
        { left: "far-fetched", right: "inverosímil" },
        { left: "overrated", right: "sobrevalorado" },
        { left: "thought-provoking", right: "que hace pensar" }
      ], explanation: "Vocabulario evaluativo de nivel C1." },
      { id: "e3", type: "multipleChoice", instruction: "¿Qué frase recomienda mejor?", prompt: "Elige la recomendación final.", options: ["Anyone with an interest in history will find this exhibition well worth a visit.", "Go if you want.", "It is an exhibition."], correctAnswer: "Anyone with an interest in history will find this exhibition well worth a visit.", explanation: "Dice **a quién** y **por qué**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "Sadly, the sequel falls ___ of the original.", correctAnswer: "short", acceptableAnswers: ["short"], explanation: "**fall short of** = no estar a la altura." },
      { id: "e5", type: "multipleChoice", instruction: "Registro.", prompt: "¿Qué registro es el adecuado para una review en una revista?", options: ["Semiformal, con personalidad", "Muy formal e impersonal", "Muy informal, con abreviaturas"], correctAnswer: "Semiformal, con personalidad", explanation: "La review admite un tono cercano." },
      { id: "e6", type: "multipleChoice", instruction: "Contenido.", prompt: "¿Qué parte debe ocupar más espacio?", options: ["La valoración", "El resumen del argumento", "La biografía del autor"], correctAnswer: "La valoración", explanation: "Describir poco y **valorar** mucho." }
    ]
  });

  G.push({
    id: "exam-writing-letter-email",
    level: "C1",
    category: "exam",
    module: "Writing",
    examPart: "w-2",
    order: 150,
    title: "Writing 2: Email y carta",
    subtitle: "Formal o informal: el registro lo es todo",
    emoji: "✉️",
    minutes: 30,
    tags: ["writing", "letter", "email", "formal", "informal", "register"],
    objectives: [
      "Elegir el **registro** según el destinatario",
      "Usar aperturas y cierres correctos",
      "Pasar de una frase informal a una formal"
    ],
    slides: [
      { type: "cover", title: "Email y carta", subtitle: "A quién escribes decide cómo escribes." },
      {
        type: "rule",
        title: "Qué es",
        text: "Respondes a una situación: quejarte, solicitar algo, dar consejo, aplicar a un puesto… El destinatario puede ser un **director, una empresa o un amigo**.",
        formula: ["Identifica **destinatario y propósito**", "Ajusta el **registro**: formal, neutral o informal", "Responde a **todos** los puntos del enunciado"]
      },
      {
        type: "table",
        title: "Aperturas y cierres",
        head: ["Registro", "Apertura", "Cierre"],
        rows: [
          ["Formal (no sabes el nombre)", "Dear Sir or Madam,", "Yours faithfully,"],
          ["Formal (sabes el nombre)", "Dear Ms Taylor,", "Yours sincerely,"],
          ["Neutral", "Dear Tom,", "Best regards, / Kind regards,"],
          ["Informal", "Hi Anna,", "All the best, / Take care,"]
        ]
      },
      {
        type: "table",
        title: "Informal → formal",
        head: ["Informal", "Formal"],
        rows: [
          ["I'm writing about…", "I am writing with regard to…"],
          ["Can you tell me…?", "I would be grateful if you could inform me…"],
          ["Sorry for…", "Please accept my apologies for…"],
          ["I want a refund.", "I would like to request a full refund."],
          ["Write back soon!", "I look forward to hearing from you."]
        ]
      },
      {
        type: "list",
        title: "Frases por propósito",
        items: [
          { term: "Queja", meaning: "I wish to express my dissatisfaction with… / I trust this matter will be resolved promptly." },
          { term: "Solicitud de empleo", meaning: "I would like to apply for the position of… / I believe I would be an asset to…" },
          { term: "Consejo (informal)", meaning: "If I were you, I'd… / Have you thought about…? / Whatever you do, don't…" }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Dear Sir… Yours sincerely", right: "Dear Sir or Madam… **Yours faithfully**", why: "Sin nombre → faithfully." },
          { wrong: "Mezclar *Hi!* con *I would be grateful*", right: "Mantén **un registro coherente**", why: "Communicative achievement." },
          { wrong: "Olvidar un punto del enunciado", right: "Marca y cubre **cada punto**", why: "Content." }
        ]
      },
      {
        type: "summary",
        title: "Email y carta",
        points: [
          "Destinatario + propósito → **registro**",
          "Sin nombre: Dear Sir or Madam / **Yours faithfully**",
          "Con nombre: Dear Ms X / **Yours sincerely**",
          "Formal: sin contracciones, *I would be grateful if…*",
          "Cubre todos los puntos del enunciado"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige el cierre correcto.", prompt: "Empiezas con \"Dear Sir or Madam,\". ¿Cómo terminas?", options: ["Yours faithfully,", "Yours sincerely,", "Love,"], correctAnswer: "Yours faithfully,", explanation: "Sin nombre → **Yours faithfully**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la versión formal.", prompt: "\"Can you send me more info?\"", options: ["I would be grateful if you could send me further information.", "Send me more info, please.", "Gimme more info!"], correctAnswer: "I would be grateful if you could send me further information.", explanation: "*I would be grateful if you could…* + *further information*." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I look forward to ___ from you.", correctAnswer: "hearing", acceptableAnswers: ["hearing"], explanation: "*look forward to* + **-ing**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I am writing with ___ to your advertisement in yesterday's newspaper.", correctAnswer: "regard", acceptableAnswers: ["regard", "reference"], explanation: "**with regard / reference to**." },
      { id: "e5", type: "multipleChoice", instruction: "Registro.", prompt: "Escribes a un amigo para aconsejarle. ¿Qué frase encaja?", options: ["If I were you, I'd take the job in London.", "It is strongly recommended that you accept the position.", "Yours faithfully, I advise acceptance."], correctAnswer: "If I were you, I'd take the job in London.", explanation: "Informal y natural para un amigo." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la versión formal.", prompt: "\"Sorry for the late reply.\"", options: ["Please accept my apologies for the delay in replying.", "Soz for the late reply!", "Sorry I'm late, mate."], correctAnswer: "Please accept my apologies for the delay in replying.", explanation: "**Please accept my apologies for…**" }
    ]
  });

  G.push({
    id: "exam-listening",
    level: "C1",
    category: "exam",
    module: "Listening",
    examPart: "l-1",
    examParts: ["l-1", "l-2", "l-3", "l-4"],
    order: 160,
    title: "Listening: las 4 partes",
    subtitle: "Formato, estrategias y trampas de cada parte",
    emoji: "🎧",
    minutes: 30,
    tags: ["listening", "multiple choice", "sentence completion", "multiple matching", "distractors"],
    objectives: [
      "Conocer el formato de las **4 partes** del Listening",
      "Aprovechar el tiempo de lectura previo",
      "Detectar **distractores** típicos"
    ],
    slides: [
      { type: "cover", title: "Listening", subtitle: "≈ 40 minutos, 30 preguntas, todo se escucha dos veces." },
      {
        type: "table",
        title: "Las 4 partes",
        head: ["Parte", "Tarea", "Preguntas"],
        rows: [
          ["1", "3 conversaciones breves · 3 opciones", "6"],
          ["2", "Monólogo · completar frases", "8"],
          ["3", "Entrevista · 4 opciones", "6"],
          ["4", "5 monólogos · 2 tareas de relacionar", "10"]
        ]
      },
      {
        type: "steps",
        title: "Estrategia general",
        steps: [
          "Usa el **tiempo de lectura** para subrayar palabras clave de las preguntas.",
          "Anticipa: ¿qué tipo de información necesitas (número, opinión, lugar)?",
          "En la **primera escucha**, responde lo que puedas.",
          "En la **segunda**, confirma y resuelve las dudosas.",
          "Al final, pasa las respuestas a la hoja (hay 5 min en papel)."
        ]
      },
      {
        type: "rule",
        title: "Parte 2: completar frases",
        text: "Escribes las **palabras exactas** que oyes (normalmente 1–3).",
        formula: ["La frase del papel **no** es igual a lo que oyes", "Escribe lo que oyes, **sin parafrasear**", "La **ortografía** debe ser correcta"],
        note: "Predice la categoría: si pone *made of ___*, buscas un material."
      },
      {
        type: "mistakes",
        title: "Distractores típicos",
        items: [
          { wrong: "El hablante menciona una opción… y la descarta", right: "Escucha hasta el final: *I thought about X, **but** in the end…*", why: "Lo primero que oyes no siempre es la respuesta." },
          { wrong: "Elegir la opción con las palabras que oyes", right: "Busca la **misma idea**, parafraseada", why: "Las palabras exactas suelen ser trampa." },
          { wrong: "Parte 4: centrarte solo en la tarea 1", right: "Atiende a **las dos tareas** en cada hablante", why: "Hay que responder ambas a la vez." }
        ]
      },
      {
        type: "tip",
        emoji: "🎙️",
        title: "Cómo entrenarlo",
        points: [
          "Podcasts y charlas (BBC, TED) **sin subtítulos**, tomando notas.",
          "Practica la **parte 4** escuchando opiniones breves y resumiendo cada una en 3 palabras.",
          "Dictados cortos para la ortografía de la parte 2."
        ]
      },
      {
        type: "summary",
        title: "Listening",
        points: [
          "4 partes · 30 preguntas · cada audio **dos veces**",
          "Usa el tiempo de lectura para anticipar",
          "Parte 2: palabras **exactas**, ortografía correcta",
          "Cuidado con lo que se menciona y se descarta",
          "Parte 4: dos tareas a la vez"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Formato.", prompt: "¿Cuántas veces se escucha cada audio?", options: ["Dos", "Una", "Tres"], correctAnswer: "Dos", explanation: "Todo el Listening se escucha **dos veces**." },
      { id: "e2", type: "multipleChoice", instruction: "Distractores.", prompt: "Oyes: \"I was going to study medicine, but in the end I chose architecture.\" ¿Qué estudió?", options: ["Architecture", "Medicine", "Both"], correctAnswer: "Architecture", explanation: "*but in the end* introduce la respuesta real." },
      { id: "e3", type: "multipleChoice", instruction: "Parte 2.", prompt: "En el papel: \"The museum's roof is made of ___.\" ¿Qué tipo de palabra buscas?", options: ["Un material", "Una fecha", "Un nombre de persona"], correctAnswer: "Un material", explanation: "*made of* + **material**." },
      { id: "e4", type: "multipleChoice", instruction: "Parte 2.", prompt: "¿Qué debes escribir en la parte 2?", options: ["Las palabras exactas que oyes", "Un sinónimo de lo que oyes", "Una frase completa"], correctAnswer: "Las palabras exactas que oyes", explanation: "Palabras **exactas**, sin parafrasear." },
      { id: "e5", type: "multipleChoice", instruction: "Formato.", prompt: "En la parte 4, cada hablante…", options: ["se relaciona con una opción de cada una de las dos tareas", "responde a 3 preguntas de opción múltiple", "completa una frase"], correctAnswer: "se relaciona con una opción de cada una de las dos tareas", explanation: "Dos tareas simultáneas de relacionar (5 + 5)." },
      { id: "e6", type: "multipleChoice", instruction: "Paráfrasis.", prompt: "Oyes: \"I couldn't have done it without my brother.\" ¿Qué opción coincide?", options: ["Her brother's support was essential.", "She did it on her own.", "Her brother didn't help."], correctAnswer: "Her brother's support was essential.", explanation: "Paráfrasis de *couldn't have done it without*." }
    ]
  });

  G.push({
    id: "exam-speaking-1-2",
    level: "C1",
    category: "exam",
    module: "Speaking",
    examPart: "s-1",
    examParts: ["s-1", "s-2"],
    order: 170,
    title: "Speaking 1 y 2: Interview y long turn",
    subtitle: "Respuestas desarrolladas y comparar fotos en 1 minuto",
    emoji: "🗣️",
    minutes: 30,
    tags: ["speaking", "part 1", "part 2", "photos", "compare", "speculate"],
    objectives: [
      "Desarrollar respuestas en la parte 1 sin enrollarte",
      "Comparar dos fotos y responder **las dos preguntas**",
      "Especular con lenguaje variado"
    ],
    slides: [
      { type: "cover", title: "Speaking · Partes 1 y 2", subtitle: "Primera impresión y un minuto para brillar." },
      {
        type: "rule",
        title: "Parte 1: Interview (≈ 2 min)",
        text: "Preguntas personales: dónde vives, estudios, trabajo, aficiones, planes. Responde con **2–3 frases**.",
        formula: ["Respuesta + razón + ejemplo", "*Do you prefer working alone or in a team?*", "→ *It depends, really. For creative tasks I'd rather work with others, because ideas bounce around. But when I need to concentrate, I definitely work better alone.*"]
      },
      {
        type: "rule",
        title: "Parte 2: Long turn (≈ 4 min)",
        text: "Recibes **3 fotos** y dos preguntas. Hablas **1 minuto** sobre **dos** de ellas. Luego respondes 30 s a una pregunta sobre las fotos de tu compañero.",
        formula: ["**Compara** dos fotos (no las describas)", "Responde **las dos preguntas** impresas", "Especula: *They might be…, It looks as if…*"]
      },
      {
        type: "list",
        title: "Lenguaje para comparar y especular",
        items: [
          { term: "Whereas in this picture…, in this one…", meaning: "comparar" },
          { term: "Both pictures show… / Unlike the first photo…", meaning: "semejanza / diferencia" },
          { term: "They might / could / may well be…", meaning: "posibilidad" },
          { term: "It looks as if / as though…", meaning: "apariencia" },
          { term: "I'd imagine that… / My guess would be that…", meaning: "suposición" }
        ]
      },
      {
        type: "steps",
        title: "Plan para el minuto",
        steps: [
          "Elige rápido las **dos fotos** más fáciles de comparar.",
          "Frase inicial: *Both photos show people…, but…*",
          "Responde la **primera pregunta** comparando.",
          "Responde la **segunda pregunta** especulando.",
          "Si te sobra tiempo: *Personally, I'd find… more…*"
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Describir cada foto por separado", right: "**Compara** desde el principio", why: "La tarea pide comparar." },
          { wrong: "Responder solo una pregunta", right: "Cubre **las dos** preguntas", why: "Están impresas sobre las fotos." },
          { wrong: "Respuestas de una palabra en la parte 1", right: "Desarrolla: respuesta + razón + ejemplo", why: "No hay material para evaluarte." },
          { wrong: "Memorizar respuestas largas", right: "Natural y adaptado a la pregunta", why: "Los examinadores lo detectan." }
        ]
      },
      {
        type: "summary",
        title: "Partes 1 y 2",
        points: [
          "Parte 1: 2–3 frases · respuesta + razón + ejemplo",
          "Parte 2: 1 min · **compara dos fotos** · responde **dos preguntas**",
          "Especula: *might be, it looks as if, I'd imagine*",
          "30 s sobre las fotos de tu compañero",
          "Escucha la pregunta: está impresa sobre las fotos"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Qué respuesta es mejor para la parte 1?", prompt: "\"What do you enjoy doing in your free time?\"", options: ["I'm really into hiking. It's a great way to switch off, and there are some stunning trails near my town.", "Hiking.", "I like many things, for example hiking, reading, cinema, music, sport, cooking, travelling, swimming…"], correctAnswer: "I'm really into hiking. It's a great way to switch off, and there are some stunning trails near my town.", explanation: "Respuesta + razón + detalle, sin enrollarse." },
      { id: "e2", type: "multipleChoice", instruction: "Formato.", prompt: "En la parte 2, ¿sobre cuántas fotos hablas?", options: ["Dos de tres", "Las tres", "Una"], correctAnswer: "Dos de tres", explanation: "Eliges **dos** de las tres fotos." },
      { id: "e3", type: "multipleChoice", instruction: "¿Qué frase especula mejor?", prompt: "Quieres suponer cómo se sienten las personas de la foto.", options: ["They may well be feeling a bit anxious about the result.", "They are anxious.", "I know they are anxious."], correctAnswer: "They may well be feeling a bit anxious about the result.", explanation: "*may well be* = especulación, con vocabulario matizado." },
      { id: "e4", type: "multipleChoice", instruction: "¿Qué frase compara mejor?", prompt: "Elige la mejor apertura para la parte 2.", options: ["Both photos show people working, but whereas the first is in an office, the second is outdoors.", "In the first photo there is a man. He has a computer.", "This is a photo."], correctAnswer: "Both photos show people working, but whereas the first is in an office, the second is outdoors.", explanation: "**Compara** desde la primera frase." },
      { id: "e5", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "It looks as ___ they've just received some good news.", correctAnswer: "if", acceptableAnswers: ["if", "though"], explanation: "**It looks as if / as though**." },
      { id: "e6", type: "multipleChoice", instruction: "Tiempo.", prompt: "¿Cuánto tiempo hablas solo en la parte 2?", options: ["1 minuto", "30 segundos", "3 minutos"], correctAnswer: "1 minuto", explanation: "1 minuto con tus fotos y unos 30 s sobre las de tu compañero." }
    ]
  });

  G.push({
    id: "exam-speaking-3-4",
    level: "C1",
    category: "exam",
    module: "Speaking",
    examPart: "s-3",
    examParts: ["s-3", "s-4"],
    order: 180,
    title: "Speaking 3 y 4: Discusión y decisión",
    subtitle: "Interactuar, matizar y llegar a un acuerdo",
    emoji: "🤝",
    minutes: 30,
    tags: ["speaking", "part 3", "part 4", "collaborative", "discussion", "agree", "disagree"],
    objectives: [
      "Gestionar la conversación con tu compañero",
      "Llegar a una **decisión** en el minuto final",
      "Desarrollar opiniones abstractas en la parte 4"
    ],
    slides: [
      { type: "cover", title: "Speaking · Partes 3 y 4", subtitle: "Aquí se evalúa cómo interactúas, no solo cómo hablas." },
      {
        type: "rule",
        title: "Parte 3: Collaborative task (≈ 4 min)",
        text: "Recibís un **diagrama** con una pregunta central y 5 opciones.",
        formula: ["**2 min**: comentáis las opciones juntos", "**1 min**: nueva pregunta → llegad a una **decisión**", "No hace falta comentar todas las opciones"]
      },
      {
        type: "list",
        title: "Lenguaje de interacción",
        items: [
          { term: "Shall we start with…? / What do you reckon?", meaning: "iniciar / invitar" },
          { term: "That's a good point, and on top of that…", meaning: "acordar y añadir" },
          { term: "I see what you mean, but don't you think…?", meaning: "discrepar con educación" },
          { term: "Going back to what you said about…", meaning: "retomar" },
          { term: "So, are we agreed that…? / Shall we go for…?", meaning: "decidir" }
        ]
      },
      {
        type: "rule",
        title: "Parte 4: Discussion (≈ 5 min)",
        text: "Preguntas **abstractas** relacionadas con el tema de la parte 3. Puede ser individual o con tu compañero.",
        formula: ["Opinión + razón + ejemplo + matiz", "*Some people say technology isolates us. What do you think?*", "→ *To some extent, yes. Although social media connects us, it can replace face-to-face contact. That said, for people living abroad it's a lifeline.*"]
      },
      {
        type: "list",
        title: "Matizar como un C1",
        items: [
          { term: "To some extent / Up to a point", meaning: "hasta cierto punto" },
          { term: "It depends on… / It's not as simple as that", meaning: "matizar" },
          { term: "That said, … / Having said that, …", meaning: "dicho esto" },
          { term: "I'd go as far as to say…", meaning: "opinión fuerte" },
          { term: "I've never really thought about it, but…", meaning: "ganar tiempo" }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Monologar sin dejar hablar", right: "Pregunta a tu compañero, **reacciona** a lo que dice", why: "Se evalúa *Interactive communication*." },
          { wrong: "Comentar las 5 opciones a toda prisa", right: "Profundiza en **2–3**", why: "Calidad mejor que cantidad." },
          { wrong: "No decidir en la parte 3", right: "Intentad acordar (o acordad que discrepáis)", why: "La tarea pide una decisión." },
          { wrong: "*I don't know* y silencio", right: "Gana tiempo: *That's a tricky one…*", why: "Siempre hay algo que decir." }
        ]
      },
      {
        type: "summary",
        title: "Partes 3 y 4",
        points: [
          "Parte 3: 2 min discusión + 1 min **decisión**",
          "Invita, reacciona, discrepa con educación",
          "Profundiza en pocas opciones",
          "Parte 4: opinión + razón + ejemplo + **matiz**",
          "Frases para ganar tiempo: *That's a tricky one…*"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "¿Qué frase discrepa con educación?", prompt: "Tu compañero dice que la opción A es la mejor; tú no estás de acuerdo.", options: ["I see what you mean, but don't you think option B would reach more people?", "No, you're wrong.", "Option A is stupid."], correctAnswer: "I see what you mean, but don't you think option B would reach more people?", explanation: "Reconoce su punto y propone una alternativa." },
      { id: "e2", type: "multipleChoice", instruction: "Formato.", prompt: "En la parte 3, ¿qué se hace en el último minuto?", options: ["Llegar a una decisión", "Describir una foto", "Hablar de tu familia"], correctAnswer: "Llegar a una decisión", explanation: "Nueva pregunta y **1 minuto** para decidir." },
      { id: "e3", type: "multipleChoice", instruction: "¿Qué respuesta es mejor para la parte 4?", prompt: "\"Do you think people work too much nowadays?\"", options: ["To some extent, yes. Many people are constantly connected to work emails. That said, flexible working has given others more control over their time.", "Yes.", "I don't know."], correctAnswer: "To some extent, yes. Many people are constantly connected to work emails. That said, flexible working has given others more control over their time.", explanation: "Opinión + razón + ejemplo + matiz." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "So, are we ___ that the community garden is the best option?", correctAnswer: "agreed", acceptableAnswers: ["agreed"], explanation: "**Are we agreed that…?** para cerrar la decisión." },
      { id: "e5", type: "match", instruction: "Relaciona cada frase con su función.", prompt: "Frase → función", pairs: [
        { left: "What do you reckon?", right: "Invitar a opinar" },
        { left: "Having said that, …", right: "Matizar" },
        { left: "That's a tricky one…", right: "Ganar tiempo" },
        { left: "Shall we go for the second one?", right: "Proponer una decisión" }
      ], explanation: "Variar el lenguaje funcional mejora la nota." },
      { id: "e6", type: "multipleChoice", instruction: "Estrategia.", prompt: "Hay 5 opciones en el diagrama y 2 minutos. ¿Qué es mejor?", options: ["Profundizar en 2 o 3 opciones", "Comentar las 5 muy rápido", "Hablar solo de 1 todo el tiempo sin dejar hablar"], correctAnswer: "Profundizar en 2 o 3 opciones", explanation: "No hace falta cubrirlas todas; se valora la profundidad y la interacción." }
    ]
  });
})();
