(function () {
  "use strict";

  // Guías de gramática B2. Contrato de datos: guides/schema.md
  const G = (window.C1_GUIDES = window.C1_GUIDES || []);

  G.push({
    id: "b2-past-modals-deduction",
    level: "B2",
    category: "grammar",
    module: "Modales",
    order: 90,
    title: "Must have, might have, can't have",
    subtitle: "Deducir qué pasó en el pasado",
    emoji: "🕵️",
    minutes: 25,
    tags: ["modals", "deduction", "modales", "must have", "might have", "can't have", "should have"],
    objectives: [
      "Expresar certeza o posibilidad sobre el pasado",
      "Elegir entre **must, might/may/could** y **can't/couldn't have**",
      "No confundir la deducción con **should have** (crítica)"
    ],
    slides: [
      { type: "cover", title: "Must have, might have, can't have", subtitle: "Cómo deducir qué pasó cuando no lo sabes seguro." },
      {
        type: "rule",
        title: "La fórmula",
        text: "Para hacer **deducciones sobre el pasado** usamos un modal + **have + participio** (V3).",
        formula: ["modal + have + V3", "She **must have left** early.", "They **can't have seen** us."],
        note: "El modal nunca cambia: ni *musted* ni *must had*. Siempre **have**, también con he/she/it."
      },
      {
        type: "table",
        title: "¿Cómo de seguro estás?",
        head: ["Certeza", "Modal", "Ejemplo"],
        rows: [
          ["≈ 100 % sí", "must have", "The lights are off. They **must have gone** to bed."],
          ["Es posible", "might / may / could have", "He **might have missed** the train."],
          ["≈ 100 % no", "can't / couldn't have", "She **can't have finished** — she only started ten minutes ago."]
        ],
        note: "Para la deducción negativa **no** se usa *mustn't have*: usa **can't have** o **couldn't have**."
      },
      {
        type: "examples",
        title: "En contexto",
        items: [
          { ok: true, en: "You **must have been** exhausted after the flight.", es: "Seguro que estabas agotado." },
          { ok: true, en: "I **may have left** my keys at the office.", es: "Puede que me haya dejado las llaves en la oficina." },
          { ok: true, en: "He **couldn't have known** about the party — nobody told him.", es: "Es imposible que lo supiera." },
          { ok: true, en: "They **must have been sleeping** when we called.", es: "Forma continua: modal + have been + -ing." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "She mustn't have seen it.", right: "She **can't have** seen it.", why: "Deducción negativa = can't / couldn't have." },
          { wrong: "He must has gone.", right: "He must **have** gone.", why: "Después de un modal siempre va have, nunca has o had." },
          { wrong: "They might have went.", right: "They might have **gone**.", why: "Participio (V3), no pasado simple." }
        ]
      },
      {
        type: "compare",
        title: "No lo confundas",
        columns: [
          { label: "could have + V3", text: "Posibilidad en el pasado **o** algo que era posible pero **no ocurrió**.", example: "You could have called me! (podías, pero no lo hiciste)" },
          { label: "should have + V3", text: "**Crítica o arrepentimiento**: lo correcto habría sido…", example: "You should have told me earlier." }
        ],
        note: "Ninguno de los dos expresa certeza: para eso, **must have**."
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "En el examen",
        text: "En **Key word transformation** (Use of English, parte 4) es muy habitual convertir *I'm sure / perhaps / it's impossible* en un modal de deducción.",
        points: [
          "I'm sure she forgot. → She **must have forgotten**.",
          "Perhaps he took it. → He **might have taken** it.",
          "I'm sure they didn't see us. → They **can't have seen** us."
        ]
      },
      {
        type: "summary",
        title: "Deducción en pasado",
        points: [
          "**must have** + V3 → estoy casi seguro de que **sí**",
          "**might / may / could have** + V3 → es **posible**",
          "**can't / couldn't have** + V3 → estoy casi seguro de que **no**",
          "Forma continua: **must have been + -ing**",
          "**should have** ≠ deducción: es crítica o arrepentimiento"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Her eyes are red. She ___ crying.", options: ["must have been", "can't have been", "should have been"], correctAnswer: "must have been", explanation: "Los ojos rojos son una prueba clara: deducción afirmativa con **must have been + -ing**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "He ___ the instructions carefully — he asked a question that was answered on page one.", options: ["must have read", "can't have read", "should have read"], correctAnswer: "can't have read", explanation: "La prueba indica que es imposible que las leyera: **can't have read**." },
      { id: "e3", type: "fillBlank", instruction: "Completa con un modal de deducción y el verbo entre paréntesis.", prompt: "I'm not sure, but I think I ___ (leave) my phone in the taxi.", correctAnswer: "might have left", acceptableAnswers: ["might have left", "may have left", "could have left"], explanation: "No estás seguro: posibilidad → **might / may / could have left**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con un modal de deducción y el verbo entre paréntesis.", prompt: "The streets are wet. It ___ (rain) during the night.", correctAnswer: "must have rained", acceptableAnswers: ["must have rained"], explanation: "Las calles mojadas son una prueba: **must have rained**." },
      { id: "e5", type: "fillBlank", instruction: "Completa la segunda frase con 3–6 palabras, incluida la palabra clave.", context: "I'm sure Tom didn't break the window.", keyword: "CAN'T", prompt: "Tom ___ the window.", correctAnswer: "can't have broken", acceptableAnswers: ["can't have broken"], explanation: "I'm sure… didn't → **can't have + V3**. La palabra clave no puede cambiar (no vale *cannot*)." },
      { id: "e6", type: "fillBlank", instruction: "Completa la segunda frase con 3–6 palabras, incluida la palabra clave.", context: "Perhaps Anna forgot about the meeting.", keyword: "MIGHT", prompt: "Anna ___ about the meeting.", correctAnswer: "might have forgotten", acceptableAnswers: ["might have forgotten"], explanation: "Perhaps → posibilidad: **might have forgotten** (participio de *forget*)." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "You ___ me you were coming! I would have made dinner.", options: ["should have told", "must have told", "can't have told"], correctAnswer: "should have told", explanation: "No es una deducción, es una crítica: **should have told** = deberías habérmelo dicho." },
      { id: "e8", type: "reorder", instruction: "Ordena las palabras.", prompt: "Construye la frase completa.", words: ["They", "must", "have", "been", "waiting", "for", "hours"], correctAnswer: "They must have been waiting for hours", explanation: "Forma continua de la deducción: **must have been + -ing**." },
      { id: "e9", type: "match", instruction: "Relaciona cada situación con la deducción más lógica.", prompt: "Situación → deducción", pairs: [
        { left: "The car isn't in the garage.", right: "Someone must have borrowed it." },
        { left: "She has never been to Japan.", right: "She can't have met him in Tokyo." },
        { left: "I don't know where Leo is.", right: "He might have gone to the gym." }
      ], explanation: "Prueba fuerte → must have · imposible → can't have · no lo sabes → might have." },
      { id: "e10", type: "context", instruction: "¿Qué dirías en esta situación?", prompt: "Tu amiga sale sonriendo con una carta de la universidad en la mano.", options: ["You must have got in!", "You can't have got in!", "You should have got in!"], correctAnswer: "You must have got in!", explanation: "Su sonrisa es una prueba clara: **must have got in** (seguro que te han admitido)." }
    ]
  });

  G.push({
    id: "b2-present-perfect-continuous",
    level: "B2",
    category: "grammar",
    module: "Tiempos verbales",
    order: 10,
    title: "Present perfect simple vs continuous",
    subtitle: "I've read vs I've been reading",
    emoji: "⏳",
    minutes: 25,
    tags: ["present perfect", "continuous", "for", "since", "tiempos"],
    objectives: [
      "Elegir entre **resultado** (simple) y **actividad** (continuous)",
      "Usar **for, since, already, yet, just** correctamente",
      "Saber qué verbos no admiten la forma continua"
    ],
    slides: [
      { type: "cover", title: "Present perfect simple vs continuous", subtitle: "I've been studying this for ages… and I've finally understood it." },
      {
        type: "compare",
        title: "La diferencia clave",
        columns: [
          { label: "have + V3", text: "**Resultado** o cantidad terminada. ¿Cuánto / cuántos?", example: "I've written three emails." },
          { label: "have been + -ing", text: "**Actividad** y duración. ¿Cuánto tiempo? Puede no haber terminado.", example: "I've been writing emails all morning." }
        ]
      },
      {
        type: "examples",
        title: "Pistas para elegir",
        items: [
          { en: "She's **painted** the kitchen. It looks great.", es: "Terminado, vemos el resultado." },
          { en: "She's **been painting** the kitchen. Her hands are covered in paint.", es: "Actividad reciente: vemos las consecuencias." },
          { en: "How many pages **have you read**?", es: "Cantidad → simple." },
          { en: "How long **have you been reading**?", es: "Duración → continuous." }
        ]
      },
      {
        type: "table",
        title: "For, since y compañía",
        head: ["Palabra", "Uso", "Ejemplo"],
        rows: [
          ["for", "periodo de tiempo", "for two years, for ages"],
          ["since", "punto de inicio", "since 2019, since I was a child"],
          ["already / just", "afirmativas", "I've **just** finished."],
          ["yet", "negativas y preguntas, al final", "Have you finished **yet**?"],
          ["ever / never", "experiencias", "Have you **ever** been to India?"]
        ]
      },
      {
        type: "rule",
        title: "Verbos de estado",
        text: "Los verbos de **estado** (no de acción) casi nunca van en forma continua.",
        formula: ["know, believe, own, belong, understand, like, want, need…", "I've **known** her for years. ✓", "I've been knowing her for years. ✗"]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I live here since 2015.", right: "I **have lived / have been living** here since 2015.", why: "Desde el pasado hasta ahora → present perfect." },
          { wrong: "I've been seeing that film twice.", right: "I've **seen** that film twice.", why: "Número de veces → simple." },
          { wrong: "I've finished it yesterday.", right: "I **finished** it yesterday.", why: "Con un tiempo pasado concreto → past simple." }
        ]
      },
      {
        type: "summary",
        title: "Present perfect",
        points: [
          "Simple = **resultado / cantidad**: I've written 3 emails",
          "Continuous = **actividad / duración**: I've been writing for hours",
          "**for** + periodo · **since** + punto de inicio",
          "Verbos de estado → solo simple",
          "Tiempo pasado concreto (yesterday, in 2010) → past simple"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ three chapters of the book so far.", options: ["have read", "have been reading", "read"], correctAnswer: "have read", explanation: "Cantidad terminada (*three chapters*) → **present perfect simple**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "You look exhausted! What ___?", options: ["have you been doing", "have you done", "did you do"], correctAnswer: "have you been doing", explanation: "Actividad reciente con consecuencias visibles → **continuous**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe for o since.", prompt: "They have been married ___ 2012.", correctAnswer: "since", acceptableAnswers: ["since"], explanation: "Punto de inicio → **since**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "I ___ (know) Laura for more than ten years.", correctAnswer: "have known", acceptableAnswers: ["have known", "'ve known"], explanation: "*Know* es de estado → **have known**." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "How long ___ for a new job?", options: ["have you been looking", "have you looked", "are you looking"], correctAnswer: "have you been looking", explanation: "*How long* + actividad en curso → **continuous**." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I started learning Japanese two years ago and I'm still learning it.", keyword: "BEEN", prompt: "I ___ Japanese for two years.", correctAnswer: "have been learning", acceptableAnswers: ["have been learning", "'ve been learning", "have been studying"], explanation: "Actividad que empezó en el pasado y continúa → **have been + -ing**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Have you finished your homework ___?", options: ["yet", "already", "since"], correctAnswer: "yet", explanation: "**yet** en preguntas y negativas, al final." },
      { id: "e8", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "This is the first time I've eaten sushi.", keyword: "NEVER", prompt: "I ___ sushi before.", correctAnswer: "have never eaten", acceptableAnswers: ["have never eaten", "'ve never eaten", "have never tried", "have never had"], explanation: "*First time* = **never… before**." }
    ]
  });

  G.push({
    id: "b2-past-perfect",
    level: "B2",
    category: "grammar",
    module: "Tiempos verbales",
    order: 20,
    title: "Past perfect simple y continuous",
    subtitle: "Lo que había pasado antes de otro pasado",
    emoji: "⏪",
    minutes: 20,
    tags: ["past perfect", "narrative tenses", "had done", "had been doing"],
    objectives: [
      "Ordenar acciones pasadas con **had + V3**",
      "Expresar duración anterior con **had been + -ing**",
      "Combinar los tiempos narrativos en una historia"
    ],
    slides: [
      { type: "cover", title: "Past perfect", subtitle: "By the time I arrived, the party had already finished." },
      {
        type: "rule",
        title: "El pasado del pasado",
        text: "Usamos **had + V3** para una acción **anterior** a otra acción pasada.",
        formula: ["had + V3", "When I got to the station, the train **had left**.", "(primero se fue el tren, luego llegué yo)"],
        note: "Compara: *When I got there, the train **left*** = llegué y justo entonces salió."
      },
      {
        type: "rule",
        title: "Past perfect continuous",
        text: "Para la **duración** de una actividad hasta un momento del pasado.",
        formula: ["had been + -ing", "She was tired because she **had been working** all night.", "We **had been waiting** for an hour when the bus finally came."]
      },
      {
        type: "table",
        title: "Tiempos narrativos",
        head: ["Tiempo", "Función", "Ejemplo"],
        rows: [
          ["Past simple", "Acciones principales", "I **opened** the door."],
          ["Past continuous", "Escena de fondo", "It **was raining**."],
          ["Past perfect", "Algo anterior", "Someone **had broken** in."],
          ["Past perfect cont.", "Duración anterior", "They **had been living** there for years."]
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I had seen him yesterday.", right: "I **saw** him yesterday.", why: "Sin otra acción pasada de referencia, basta el past simple." },
          { wrong: "When I arrived, she already left.", right: "When I arrived, she **had already left**.", why: "Acción anterior → past perfect." },
          { wrong: "I had been knowing him for years.", right: "I **had known** him for years.", why: "Verbo de estado → simple." }
        ]
      },
      {
        type: "tip",
        emoji: "🔑",
        title: "Palabras que lo anuncian",
        points: [
          "**by the time** I arrived… · **before** · **after** · **already**",
          "**It was the first time** I had ever… (*It was the first time I had flown*)",
          "**No sooner had I…** / **Hardly had I…** (inversión C1)"
        ]
      },
      {
        type: "summary",
        title: "Past perfect",
        points: [
          "**had + V3** = anterior a otro pasado",
          "**had been + -ing** = duración hasta un momento pasado",
          "**by the time, already, before, after**",
          "*It was the first time I had…*",
          "Sin referencia pasada → past simple"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "By the time we reached the cinema, the film ___.", options: ["had already started", "already started", "has already started"], correctAnswer: "had already started", explanation: "Anterior a *reached* → **past perfect**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Her eyes were red because she ___.", options: ["had been crying", "has cried", "was cry"], correctAnswer: "had been crying", explanation: "Actividad anterior con consecuencias en el pasado → **had been + -ing**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "It was the first time I ___ (fly) in a helicopter.", correctAnswer: "had flown", acceptableAnswers: ["had flown", "'d flown", "had ever flown"], explanation: "*It was the first time* + **past perfect**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "We ___ (wait) for two hours when the doctor finally saw us.", correctAnswer: "had been waiting", acceptableAnswers: ["had been waiting", "'d been waiting"], explanation: "Duración hasta un momento pasado → **had been waiting**." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "When I got home, I realised I ___ my keys at work.", options: ["had left", "left", "have left"], correctAnswer: "had left", explanation: "Dejarlas fue **anterior** a darse cuenta." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "The guests left before Mark arrived.", keyword: "ALREADY", prompt: "When Mark arrived, the guests ___.", correctAnswer: "had already left", acceptableAnswers: ["had already left", "had already gone"], explanation: "**had already + V3**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ him at a conference in 2018.", options: ["met", "had met", "had been meeting"], correctAnswer: "met", explanation: "Hecho pasado aislado → **past simple**." },
      { id: "e8", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I had never seen such a big crowd before that day.", keyword: "FIRST", prompt: "It was the ___ seen such a big crowd.", correctAnswer: "first time I had", acceptableAnswers: ["first time i had", "first time i'd"], explanation: "*It was the first time I had* + V3." }
    ]
  });

  G.push({
    id: "b2-future-continuous-perfect",
    level: "B2",
    category: "grammar",
    module: "Tiempos verbales",
    order: 30,
    title: "Future continuous y future perfect",
    subtitle: "This time tomorrow… / By next year…",
    emoji: "🚀",
    minutes: 20,
    tags: ["future continuous", "future perfect", "will be doing", "will have done", "by"],
    objectives: [
      "Describir acciones en curso en el futuro",
      "Expresar acciones **terminadas** antes de un momento futuro",
      "Usar **by, by the time, this time next week**"
    ],
    slides: [
      { type: "cover", title: "Futuros B2", subtitle: "By the end of this guide, you'll have learnt two new tenses." },
      {
        type: "compare",
        title: "Dos futuros",
        columns: [
          { label: "will be + -ing", text: "Acción **en curso** en un momento futuro.", example: "This time tomorrow I'll be lying on a beach." },
          { label: "will have + V3", text: "Acción **terminada antes** de un momento futuro.", example: "By 2030, I'll have paid off my mortgage." }
        ]
      },
      {
        type: "table",
        title: "Expresiones de tiempo",
        head: ["Expresión", "Tiempo típico"],
        rows: [
          ["this time next week / at 8 tomorrow", "future continuous"],
          ["by Friday / by the time you arrive", "future perfect"],
          ["for + periodo (by then)", "future perfect continuous"]
        ],
        note: "*By the time* + presente simple: *By the time you **arrive**, I'll have finished.*"
      },
      {
        type: "examples",
        title: "Más usos",
        items: [
          { en: "**Will you be using** the car tonight?", es: "Pregunta educada sobre planes (no es una petición directa)." },
          { en: "By June, she**'ll have been working** here for ten years.", es: "Future perfect continuous: duración hasta un momento futuro." },
          { en: "Don't call at 9 — **we'll be having** dinner.", es: "Acción en curso." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "By the time you will arrive, …", right: "By the time you **arrive**, …", why: "Tras by the time / when → presente." },
          { wrong: "I'll have finish by 6.", right: "I'll have **finished** by 6.", why: "will have + V3." },
          { wrong: "Until Friday I'll have finished.", right: "**By** Friday I'll have finished.", why: "*By* = no más tarde de; *until* = hasta (duración)." }
        ]
      },
      {
        type: "summary",
        title: "Futuros B2",
        points: [
          "**will be + -ing** = en curso en el futuro",
          "**will have + V3** = terminado antes de un momento futuro",
          "**by / by the time** + presente",
          "**Will you be + -ing…?** = pregunta educada",
          "**will have been + -ing** = duración hasta un momento futuro"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "This time next week, we ___ across Iceland.", options: ["will be driving", "will have driven", "drive"], correctAnswer: "will be driving", explanation: "En curso en un momento futuro → **future continuous**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "By the end of the year, I ___ over 50 books.", options: ["will have read", "will be reading", "read"], correctAnswer: "will have read", explanation: "Terminado antes de un momento futuro → **future perfect**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "By the time you ___ (get) here, the meeting will have finished.", correctAnswer: "get", acceptableAnswers: ["get"], explanation: "Tras **by the time**, presente simple." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I'll have sent the report ___ Friday at the latest.", correctAnswer: "by", acceptableAnswers: ["by"], explanation: "**by** = no más tarde de." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "The builders will finish the house before the end of June.", keyword: "HAVE", prompt: "The builders ___ the house by the end of June.", correctAnswer: "will have finished", acceptableAnswers: ["will have finished", "will have completed", "will have built"], explanation: "**will have + V3** + *by*." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción más educada.", prompt: "Quieres saber si tu compañero necesita la sala esta tarde.", options: ["Will you be using the meeting room this afternoon?", "Will you use the meeting room this afternoon?", "Do you use the meeting room this afternoon?"], correctAnswer: "Will you be using the meeting room this afternoon?", explanation: "El future continuous suena más neutro y educado." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "In May, my parents ___ (be) married for 40 years.", correctAnswer: "will have been", acceptableAnswers: ["will have been", "'ll have been"], explanation: "Duración que se completa en un momento futuro → **will have been**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Don't phone me at 8 — I ___ my yoga class.", options: ["will be doing", "will have done", "do"], correctAnswer: "will be doing", explanation: "Acción en curso a esa hora → **will be doing**." }
    ]
  });

  G.push({
    id: "b2-third-mixed-conditionals",
    level: "B2",
    category: "grammar",
    module: "Condicionales",
    order: 40,
    title: "Tercer condicional y mixtos",
    subtitle: "If I had known… I would have / I would be",
    emoji: "🔁",
    minutes: 25,
    tags: ["third conditional", "mixed conditionals", "condicionales", "if i had known"],
    objectives: [
      "Hablar de un pasado **imaginario** con el tercer condicional",
      "Combinar pasado y presente en **condicionales mixtos**",
      "Repasar las cuatro condicionales básicas"
    ],
    slides: [
      { type: "cover", title: "Tercer condicional y mixtos", subtitle: "If I had studied this earlier, I would have passed. And I'd be a C1 now." },
      {
        type: "table",
        title: "Repaso rápido",
        head: ["Tipo", "Estructura", "Ejemplo"],
        rows: [
          ["Zero", "If + presente, presente", "If you heat ice, it melts."],
          ["1.º", "If + presente, will", "If it rains, we'll stay in."],
          ["2.º", "If + pasado, would", "If I had time, I'd travel."],
          ["3.º", "If + past perfect, would have + V3", "If I'd left earlier, I'd have caught it."]
        ]
      },
      {
        type: "rule",
        title: "Tercer condicional",
        text: "Situación **imaginaria en el pasado**: algo que **no** ocurrió y su consecuencia.",
        formula: ["If + had + V3, would / could / might have + V3", "If you **had told** me, I **would have helped**.", "We **might have won** if we **hadn't made** that mistake."],
        note: "Ojo con *'d*: en *If I'd known* = had; en *I'd have helped* = would."
      },
      {
        type: "compare",
        title: "Condicionales mixtos",
        columns: [
          { label: "Pasado → presente", text: "If + past perfect, **would + verbo**", example: "If I had taken that job, I'd be rich now." },
          { label: "Presente → pasado", text: "If + pasado, **would have + V3**", example: "If I spoke French, I would have applied for the job." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "If I would have known, …", right: "If I **had known**, …", why: "Nunca *would* en la parte del if." },
          { wrong: "If I had known, I would helped.", right: "…I would **have** helped.", why: "would have + V3." },
          { wrong: "If I had studied, I would have a better job now… (con *would have*)", right: "Resultado presente → **would + verbo**", why: "Mira si el resultado es pasado o presente." }
        ]
      },
      {
        type: "summary",
        title: "Condicionales",
        points: [
          "3.º: **If + had + V3, would have + V3** (pasado irreal)",
          "Mixto 1: **If + had + V3, would + verbo** (resultado presente)",
          "Mixto 2: **If + pasado, would have + V3** (rasgo presente, resultado pasado)",
          "También **could / might have**",
          "Nunca *would* después de *if*"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If we ___ the map, we wouldn't have got lost.", options: ["had checked", "checked", "would have checked"], correctAnswer: "had checked", explanation: "Tercer condicional: **If + had + V3**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If she hadn't missed the flight, she ___ in Rome now.", options: ["would be", "would have been", "will be"], correctAnswer: "would be", explanation: "Mixto: pasado → resultado **presente** (*now*)." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "If you had asked me, I ___ (help) you.", correctAnswer: "would have helped", acceptableAnswers: ["would have helped", "'d have helped", "could have helped"], explanation: "**would have + V3**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I didn't know you were in hospital, so I didn't visit you.", keyword: "HAD", prompt: "If I ___ you were in hospital, I would have visited you.", correctAnswer: "had known", acceptableAnswers: ["had known", "had realised", "had realized"], explanation: "**If + had + V3**." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If I weren't afraid of heights, I ___ the climb with you last week.", options: ["would have done", "would do", "had done"], correctAnswer: "would have done", explanation: "Mixto: rasgo presente → resultado **pasado** (*last week*)." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "We lost the match because our goalkeeper was injured.", keyword: "WOULDN'T", prompt: "If our goalkeeper hadn't been injured, we ___ the match.", correctAnswer: "wouldn't have lost", acceptableAnswers: ["wouldn't have lost"], explanation: "**wouldn't have + V3**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If it ___ tomorrow, we'll cancel the picnic.", options: ["rains", "will rain", "rained"], correctAnswer: "rains", explanation: "Primer condicional: **If + presente, will**." },
      { id: "e8", type: "multipleChoice", instruction: "¿Qué significa?", prompt: "\"If I'd known, I'd have come.\" Los dos 'd significan…", options: ["had… would", "would… had", "would… would"], correctAnswer: "had… would", explanation: "If I **had** known, I **would** have come." }
    ]
  });

  G.push({
    id: "b2-wish-if-only",
    level: "B2",
    category: "grammar",
    module: "Formas irreales",
    order: 50,
    title: "Wish e if only",
    subtitle: "Deseos y arrepentimientos",
    emoji: "🌠",
    minutes: 20,
    tags: ["wish", "if only", "regret", "deseos", "would"],
    objectives: [
      "Expresar deseos sobre el **presente** y el **pasado**",
      "Quejarte de comportamientos con **wish + would**",
      "Usar **if only** para dar más intensidad"
    ],
    slides: [
      { type: "cover", title: "Wish e if only", subtitle: "I wish I had found this guide sooner." },
      {
        type: "table",
        title: "Tres estructuras",
        head: ["Deseo sobre…", "Estructura", "Ejemplo"],
        rows: [
          ["el presente", "wish + **pasado**", "I wish I **lived** by the sea."],
          ["el pasado (arrepentimiento)", "wish + **past perfect**", "I wish I **had studied** harder."],
          ["algo molesto que otro hace", "wish + sb + **would**", "I wish you **would stop** interrupting."]
        ],
        note: "Con *be*, en registro cuidado: *I wish I **were** taller.*"
      },
      {
        type: "rule",
        title: "If only",
        text: "Igual que *wish*, pero **más intenso** y emocional.",
        formula: ["If only + pasado / past perfect / would", "**If only** I **had** more time!", "**If only** I **hadn't said** that.", "**If only** it **would stop** raining!"]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I wish I have a car.", right: "I wish I **had** a car.", why: "Deseo presente → pasado." },
          { wrong: "I wish I would be taller.", right: "I wish I **were** taller.", why: "*would* no se usa con *I* ni con estados." },
          { wrong: "I wish I didn't go to that party.", right: "I wish I **hadn't gone**.", why: "Arrepentimiento pasado → past perfect." }
        ]
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "Transformaciones típicas",
        points: [
          "I regret not going. → I **wish I had gone**.",
          "It's a pity I can't swim. → I **wish I could** swim.",
          "Please stop talking! → I **wish you would stop** talking."
        ]
      },
      {
        type: "summary",
        title: "Wish",
        points: [
          "Presente: **wish + pasado** (*were*)",
          "Pasado: **wish + had + V3**",
          "Queja: **wish + sb + would**",
          "**wish + could** para habilidades",
          "**If only** = más intenso"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I wish I ___ more free time.", options: ["had", "have", "would have"], correctAnswer: "had", explanation: "Deseo presente → **pasado**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I wish I ___ so much at the party last night.", options: ["hadn't eaten", "didn't eat", "wouldn't eat"], correctAnswer: "hadn't eaten", explanation: "Arrepentimiento pasado → **past perfect**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I wish my neighbours ___ their music down.", options: ["would turn", "turned", "had turned"], correctAnswer: "would turn", explanation: "Queja sobre lo que otros hacen → **would**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I regret not taking the job in Berlin.", keyword: "WISH", prompt: "I ___ the job in Berlin.", correctAnswer: "wish I had taken", acceptableAnswers: ["wish i had taken", "wish i'd taken", "wish i had accepted"], explanation: "**wish + had + V3**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "It's a pity I can't play the guitar.", keyword: "COULD", prompt: "I wish ___ the guitar.", correctAnswer: "I could play", acceptableAnswers: ["i could play"], explanation: "Habilidad → **wish + could**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "If only I ___ (be) a bit taller!", correctAnswer: "were", acceptableAnswers: ["were", "was"], explanation: "Deseo presente → **were** (también *was* en registro informal)." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Please stop leaving your shoes in the hall!", keyword: "WOULD", prompt: "I wish ___ leaving your shoes in the hall.", correctAnswer: "you would stop", acceptableAnswers: ["you would stop"], explanation: "**wish + sb + would** para quejarse." },
      { id: "e8", type: "context", instruction: "¿Qué dirías?", prompt: "Suspendiste un examen porque no estudiaste.", options: ["If only I had studied!", "If only I study!", "I wish I would study!"], correctAnswer: "If only I had studied!", explanation: "Arrepentimiento pasado: **If only + had + V3**." }
    ]
  });

  G.push({
    id: "b2-passive-causative",
    level: "B2",
    category: "grammar",
    module: "Pasiva",
    order: 60,
    title: "Pasiva y causativa",
    subtitle: "It was built… / I had my car repaired",
    emoji: "🔧",
    minutes: 25,
    tags: ["passive", "pasiva", "causative", "have something done", "get something done"],
    objectives: [
      "Formar la pasiva en **todos los tiempos**",
      "Usar **have / get something done**",
      "Decidir cuándo la pasiva es la mejor opción"
    ],
    slides: [
      { type: "cover", title: "Pasiva y causativa", subtitle: "This guide was written to be understood." },
      {
        type: "table",
        title: "be + V3 en cada tiempo",
        head: ["Tiempo", "Pasiva"],
        rows: [
          ["Presente", "English **is spoken** here."],
          ["Presente continuo", "The road **is being repaired**."],
          ["Pasado", "It **was built** in 1900."],
          ["Present perfect", "The tickets **have been sold**."],
          ["Futuro / modal", "It **will be / must be** done."],
          ["Infinitivo / -ing", "I want **to be told**. I hate **being ignored**."]
        ]
      },
      {
        type: "rule",
        title: "¿Cuándo usarla?",
        text: "Cuando lo importante es **la acción o el objeto**, no quién la hace (o no lo sabemos).",
        formula: ["Objeto + be + V3 (+ by + agente)", "My bike **was stolen**. (no sé quién)", "The novel **was written by** Orwell. (agente relevante)"],
        note: "Verbos con dos objetos: *They gave **me** a prize* → ***I was given** a prize* (más natural)."
      },
      {
        type: "rule",
        title: "Causativa",
        text: "Cuando **otra persona** hace algo **por ti** (normalmente porque pagas).",
        formula: ["have / get + objeto + V3", "I **had my hair cut** yesterday.", "We're **getting the kitchen painted**.", "She **had her phone stolen**. (experiencia negativa)"]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I cut my hair at the hairdresser's.", right: "I **had my hair cut**.", why: "Si lo hace otro, causativa." },
          { wrong: "The house was build in 1990.", right: "The house was **built**.", why: "be + **V3**." },
          { wrong: "It has been sell.", right: "It has been **sold**.", why: "Participio irregular." },
          { wrong: "I had repaired my car (lo hizo el mecánico).", right: "I had **my car repaired**.", why: "Orden: have + **objeto** + V3." }
        ]
      },
      {
        type: "summary",
        title: "Pasiva y causativa",
        points: [
          "**be + V3** en cualquier tiempo",
          "Agente con **by** solo si es relevante",
          "*I was given…* con verbos de dos objetos",
          "**have / get + objeto + V3** = alguien lo hace por ti",
          "Orden de la causativa: **objeto antes del participio**"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The new hospital ___ next year.", options: ["will be opened", "will open by", "is opening by"], correctAnswer: "will be opened", explanation: "Pasiva de futuro: **will be + V3**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Our flat ___ at the moment, so we're staying with friends.", options: ["is being decorated", "is decorated", "has decorated"], correctAnswer: "is being decorated", explanation: "En curso ahora → **is being + V3**." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "A mechanic is going to repair my car tomorrow.", keyword: "HAVING", prompt: "I'm ___ tomorrow.", correctAnswer: "having my car repaired", acceptableAnswers: ["having my car repaired", "having my car fixed"], explanation: "Causativa: **have + objeto + V3**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Someone has stolen my wallet.", keyword: "BEEN", prompt: "My wallet ___.", correctAnswer: "has been stolen", acceptableAnswers: ["has been stolen"], explanation: "Present perfect pasivo: **has been + V3**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "They gave Maria an award for her research.", keyword: "WAS", prompt: "Maria ___ for her research.", correctAnswer: "was given an award", acceptableAnswers: ["was given an award", "was awarded a prize", "was given a prize"], explanation: "Persona como sujeto: **was given** + objeto." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I hate ___ what to do.", options: ["being told", "be told", "telling"], correctAnswer: "being told", explanation: "*hate* + -ing en pasiva: **being + V3**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "The bridge was ___ (design) by a famous engineer.", correctAnswer: "designed", acceptableAnswers: ["designed"], explanation: "be + **V3**." },
      { id: "e8", type: "context", instruction: "¿Qué frase es correcta?", prompt: "Le dices a un amigo que el dentista te sacó una muela.", options: ["I had a tooth taken out.", "I took out a tooth.", "I had taken out a tooth."], correctAnswer: "I had a tooth taken out.", explanation: "Lo hizo otro: **have + objeto + V3**." }
    ]
  });

  G.push({
    id: "b2-reported-speech",
    level: "B2",
    category: "grammar",
    module: "Estilo indirecto",
    order: 70,
    title: "Estilo indirecto y reporting verbs",
    subtitle: "She said that… / He accused me of…",
    emoji: "💬",
    minutes: 30,
    tags: ["reported speech", "estilo indirecto", "reporting verbs", "suggest", "accuse", "deny"],
    objectives: [
      "Retroceder tiempos y cambiar referencias",
      "Transformar **preguntas** y **órdenes**",
      "Usar reporting verbs con su **estructura** correcta"
    ],
    slides: [
      { type: "cover", title: "Estilo indirecto", subtitle: "She told me it would be easy. She was right." },
      {
        type: "table",
        title: "Retroceso de tiempos",
        head: ["Directo", "Indirecto"],
        rows: [
          ["\"I **am** tired.\"", "She said she **was** tired."],
          ["\"I**'ve finished**.\"", "He said he **had finished**."],
          ["\"I **saw** it.\"", "She said she **had seen** it."],
          ["\"I **will** call.\"", "He said he **would** call."],
          ["\"I **can** help.\"", "She said she **could** help."]
        ],
        note: "Cambian también: today → **that day**, tomorrow → **the next day**, here → **there**, ago → **before**."
      },
      {
        type: "rule",
        title: "Preguntas y órdenes",
        formula: ["Preguntas: orden de **afirmativa**", "\"Where do you live?\" → She asked me where **I lived**.", "\"Are you OK?\" → He asked **if / whether** I was OK.", "Órdenes: tell / ask + sb + (not) to", "\"Don't move!\" → He told us **not to move**."]
      },
      {
        type: "table",
        title: "Reporting verbs",
        head: ["Estructura", "Verbos"],
        rows: [
          ["+ to + inf.", "agree, offer, promise, refuse, threaten"],
          ["+ sb + to + inf.", "advise, encourage, persuade, remind, warn"],
          ["+ -ing", "admit, deny, recommend, suggest"],
          ["+ prep. + -ing", "accuse sb **of**, apologise **for**, insist **on**, blame sb **for**"],
          ["+ that", "explain, claim, complain, point out"]
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "She asked me where did I live.", right: "She asked me where **I lived**.", why: "Sin inversión ni *did*." },
          { wrong: "He said me that…", right: "He **told** me that… / He **said** that…", why: "*Say* no lleva objeto de persona." },
          { wrong: "She suggested me to go.", right: "She suggested **going** / **that I (should) go**.", why: "*Suggest* nunca + sb + to." },
          { wrong: "He denied to steal it.", right: "He denied **stealing** it.", why: "*Deny* + -ing." }
        ]
      },
      {
        type: "summary",
        title: "Estilo indirecto",
        points: [
          "Un tiempo **atrás**: am → was, will → would",
          "Preguntas: **if / whether** + orden afirmativo",
          "Órdenes: **tell sb (not) to**",
          "**say** (that) vs **tell sb** (that)",
          "Aprende cada reporting verb con su estructura"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "\"I'm working from home today,\" she said. → She said she ___ from home that day.", options: ["was working", "is working", "has worked"], correctAnswer: "was working", explanation: "Presente continuo → **pasado continuo**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "He asked me where ___.", options: ["I had parked", "had I parked", "did I park"], correctAnswer: "I had parked", explanation: "Orden de afirmativa y retroceso de tiempo." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "\"I didn't break the window,\" said Tom.", keyword: "DENIED", prompt: "Tom ___ the window.", correctAnswer: "denied breaking", acceptableAnswers: ["denied breaking", "denied having broken"], explanation: "**deny + -ing**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "\"You stole my idea!\" Anna said to Mark.", keyword: "ACCUSED", prompt: "Anna ___ her idea.", correctAnswer: "accused Mark of stealing", acceptableAnswers: ["accused mark of stealing", "accused him of stealing"], explanation: "**accuse sb of + -ing**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "\"Don't forget to lock the door,\" Mum said to me.", keyword: "REMINDED", prompt: "Mum ___ the door.", correctAnswer: "reminded me to lock", acceptableAnswers: ["reminded me to lock"], explanation: "**remind sb to + infinitivo**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "She ___ me that the shop was closed.", options: ["told", "said", "explained"], correctAnswer: "told", explanation: "**tell + persona + that**. (*explained to me* llevaría *to*)." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "\"Shall we go to the beach?\" said Jo.", keyword: "SUGGESTED", prompt: "Jo ___ to the beach.", correctAnswer: "suggested going", acceptableAnswers: ["suggested going", "suggested that we go", "suggested that we should go", "suggested we go", "suggested we should go"], explanation: "**suggest + -ing** o **suggest (that) we (should) go**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "\"I'll definitely pay you back,\" he said. → He ___ me back.", options: ["promised to pay", "promised paying", "promised me paying"], correctAnswer: "promised to pay", explanation: "**promise + to + infinitivo**." }
    ]
  });

  G.push({
    id: "b2-relative-clauses",
    level: "B2",
    category: "grammar",
    module: "Oraciones complejas",
    order: 80,
    title: "Oraciones de relativo",
    subtitle: "who, which, whose, whom… con y sin comas",
    emoji: "🔗",
    minutes: 25,
    tags: ["relative clauses", "relativos", "who", "which", "whose", "whom", "defining", "non-defining"],
    objectives: [
      "Distinguir relativas **especificativas** y **explicativas**",
      "Elegir entre **who, which, that, whose, whom, where**",
      "Saber cuándo se puede **omitir** el relativo"
    ],
    slides: [
      { type: "cover", title: "Relativas", subtitle: "The guide which you're reading now is the one that explains them." },
      {
        type: "table",
        title: "Los pronombres",
        head: ["Pronombre", "Para", "Ejemplo"],
        rows: [
          ["who", "personas", "The woman **who** called…"],
          ["which", "cosas", "The car **which** I bought…"],
          ["that", "personas o cosas (solo sin comas)", "The book **that** changed my life…"],
          ["whose", "posesión", "The man **whose** dog bit me…"],
          ["whom", "persona objeto (formal)", "The person **to whom** I spoke…"],
          ["where / when", "lugar / tiempo", "The day **when** we met…"]
        ]
      },
      {
        type: "compare",
        title: "Con o sin comas",
        columns: [
          { label: "Defining (sin comas)", text: "Información **necesaria** para saber de quién hablamos. Vale *that*.", example: "The students who passed got a certificate. (solo los que aprobaron)" },
          { label: "Non-defining (con comas)", text: "Información **extra**. No vale *that* ni se omite el relativo.", example: "My brother, who lives in Oslo, is a pilot." }
        ]
      },
      {
        type: "rule",
        title: "Omitir el relativo",
        text: "En las **especificativas**, si el relativo es **objeto**, puede desaparecer.",
        formula: ["The film (which) **we** saw was great. ✓ (we = sujeto)", "The man **who called** you… ✗ no se omite (who = sujeto)"],
        note: "*Which* puede referirse a **toda la oración**: *He passed, **which** surprised everyone.*"
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "My mother, that is a doctor, …", right: "My mother, **who** is a doctor, …", why: "Con comas no se usa *that*." },
          { wrong: "The man which I met…", right: "The man **who / that** I met…", why: "*Which* solo para cosas." },
          { wrong: "The house where I live in…", right: "The house **where** I live / **which** I live **in**", why: "No dupliques la preposición." },
          { wrong: "The girl who her bag was stolen…", right: "The girl **whose** bag was stolen…", why: "Posesión → whose." }
        ]
      },
      {
        type: "summary",
        title: "Relativas",
        points: [
          "**who** personas · **which** cosas · **that** ambos (sin comas)",
          "**whose** = posesión · **whom** = objeto formal",
          "Con comas = información extra: nunca *that*",
          "Relativo objeto en especificativas → puede omitirse",
          "**which** puede referirse a toda una oración"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "That's the author ___ latest novel won the prize.", options: ["whose", "who", "which"], correctAnswer: "whose", explanation: "Posesión → **whose**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Barcelona, ___ I lived for five years, is a fantastic city.", options: ["where", "that", "which"], correctAnswer: "where", explanation: "Lugar + explicativa → **where** (nunca *that* con comas)." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "He failed the exam, ___ was a big surprise to everyone.", correctAnswer: "which", acceptableAnswers: ["which"], explanation: "**which** se refiere a toda la oración anterior." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "The manager, to ___ I complained, was very helpful.", correctAnswer: "whom", acceptableAnswers: ["whom"], explanation: "Tras preposición, para personas: **whom**." },
      { id: "e5", type: "multipleChoice", instruction: "¿En qué frase se puede omitir el relativo?", prompt: "Elige la frase.", options: ["The jacket that I bought is too small.", "The woman who lives next door is a nurse.", "My car, which is red, is fast."], correctAnswer: "The jacket that I bought is too small.", explanation: "Especificativa y relativo **objeto** (*I bought it*)." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "My sister, ___ works in a bank, is getting married.", options: ["who", "that", "which"], correctAnswer: "who", explanation: "Persona + explicativa → **who**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I'll never forget the day ___ I met your father.", correctAnswer: "when", acceptableAnswers: ["when", "that"], explanation: "Tiempo → **when** (o *that* en especificativa)." },
      { id: "e8", type: "context", instruction: "¿Qué frase es correcta?", prompt: "Elige la frase sin errores.", options: ["The hotel where we stayed was excellent.", "The hotel where we stayed in was excellent.", "The hotel, that we stayed in, was excellent."], correctAnswer: "The hotel where we stayed was excellent.", explanation: "*where* ya incluye la preposición." }
    ]
  });

  G.push({
    id: "b2-used-to-would",
    level: "B2",
    category: "grammar",
    module: "Hábitos",
    order: 100,
    title: "Used to, would, be/get used to",
    subtitle: "Hábitos pasados y acostumbrarse",
    emoji: "🔄",
    minutes: 20,
    tags: ["used to", "would", "be used to", "get used to", "habits", "hábitos"],
    objectives: [
      "Hablar de hábitos y estados **pasados**",
      "Distinguir **used to + verbo** y **be used to + -ing**",
      "Usar **get used to** para el proceso de acostumbrarse"
    ],
    slides: [
      { type: "cover", title: "Used to y compañía", subtitle: "I used to hate grammar. Now I'm used to studying it every day." },
      {
        type: "table",
        title: "Cuatro estructuras",
        head: ["Estructura", "Significado", "Ejemplo"],
        rows: [
          ["used to + verbo", "hábito o estado pasado", "I **used to live** in Paris."],
          ["would + verbo", "hábito pasado (solo acciones)", "Every summer we **would go** camping."],
          ["be used to + -ing", "estar acostumbrado", "I'**m used to getting** up early."],
          ["get used to + -ing", "acostumbrarse (proceso)", "I'm **getting used to driving** on the left."]
        ]
      },
      {
        type: "compare",
        title: "Used to o would",
        columns: [
          { label: "used to", text: "Acciones **y estados**.", example: "I used to have long hair. ✓" },
          { label: "would", text: "Solo **acciones** repetidas, no estados.", example: "I would have long hair. ✗" }
        ]
      },
      {
        type: "rule",
        title: "Negativas y preguntas",
        formula: ["didn't use to · Did you use to…?", "I **didn't use to** like coffee.", "**Did** you **use to** play an instrument?"],
        note: "Para el presente no existe *use to*: usa **usually**. *I usually get up at 7.*"
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I'm used to get up early.", right: "I'm used to **getting** up early.", why: "Be used to + -ing (to es preposición)." },
          { wrong: "I use to go to the gym.", right: "I **usually** go to the gym.", why: "Para hábitos presentes, *usually*." },
          { wrong: "Did you used to…?", right: "Did you **use** to…?", why: "Tras *did*, forma base." }
        ]
      },
      {
        type: "summary",
        title: "Used to",
        points: [
          "**used to + verbo** = antes sí, ahora no",
          "**would + verbo** = hábito pasado (solo acciones)",
          "**be used to + -ing** = estar acostumbrado",
          "**get used to + -ing** = acostumbrarse",
          "Presente → **usually**"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "When I was a child, I ___ afraid of the dark.", options: ["used to be", "would be", "was used to being"], correctAnswer: "used to be", explanation: "Estado pasado → **used to** (no *would*)." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "After two years in London, I'm finally ___ the weather.", options: ["used to", "use to", "used"], correctAnswer: "used to", explanation: "**be used to** + sustantivo." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "Nurses are used to ___ (work) at night.", correctAnswer: "working", acceptableAnswers: ["working"], explanation: "be used to + **-ing**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Living in a big city is still strange for me.", keyword: "USED", prompt: "I'm not ___ in a big city yet.", correctAnswer: "used to living", acceptableAnswers: ["used to living"], explanation: "**be used to + -ing**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I played tennis a lot when I was younger, but I don't now.", keyword: "USE", prompt: "I ___ tennis a lot.", correctAnswer: "used to play", acceptableAnswers: ["used to play"], explanation: "Hábito pasado: **used to + verbo**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It took me months to ___ the new software.", options: ["get used to", "use to", "be used"], correctAnswer: "get used to", explanation: "Proceso de acostumbrarse → **get used to**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ live in the countryside when you were young?", options: ["Did you use to", "Did you used to", "Were you used to"], correctAnswer: "Did you use to", explanation: "Pregunta: **Did you use to**…" },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Every Sunday my grandfather ___ us stories about the war.", options: ["would tell", "was used to tell", "uses to tell"], correctAnswer: "would tell", explanation: "Acción repetida en el pasado → **would** (o *used to*)." }
    ]
  });

  G.push({
    id: "b2-gerund-infinitive",
    level: "B2",
    category: "grammar",
    module: "Verbos",
    order: 110,
    title: "Gerundio o infinitivo",
    subtitle: "remember doing vs remember to do",
    emoji: "🔀",
    minutes: 25,
    tags: ["gerund", "infinitive", "gerundio", "infinitivo", "remember", "stop", "try", "regret"],
    objectives: [
      "Saber qué verbos van con **-ing** y cuáles con **to**",
      "Dominar los verbos que **cambian de significado**",
      "Usar *-ing* después de preposiciones"
    ],
    slides: [
      { type: "cover", title: "Gerundio o infinitivo", subtitle: "Stop to think, or stop thinking? It changes everything." },
      {
        type: "table",
        title: "Los más comunes",
        head: ["+ -ing", "+ to + infinitivo"],
        rows: [
          ["avoid, enjoy, mind, miss", "afford, agree, decide, hope"],
          ["consider, suggest, deny", "manage, offer, refuse, seem"],
          ["can't stand, can't help", "tend, threaten, expect, plan"],
          ["look forward to, be used to", "would like, would prefer"]
        ],
        note: "Tras **preposición**, siempre -ing: *interested **in learning**, good **at cooking***."
      },
      {
        type: "table",
        title: "Cambian de significado",
        head: ["Verbo", "+ -ing", "+ to"],
        rows: [
          ["remember / forget", "recordar algo **pasado**", "acordarse de **hacer** algo"],
          ["stop", "**dejar** de hacer", "parar **para** hacer"],
          ["try", "**probar** algo a ver si funciona", "**intentar** (con esfuerzo)"],
          ["regret", "arrepentirse de algo hecho", "lamentar **comunicar** (formal)"],
          ["go on", "**seguir** haciendo lo mismo", "pasar a hacer **otra** cosa"]
        ]
      },
      {
        type: "examples",
        title: "Ejemplos",
        items: [
          { en: "I remember **meeting** her in 2015.", es: "Recuerdo haberla conocido." },
          { en: "Remember **to lock** the door.", es: "Acuérdate de cerrar." },
          { en: "He stopped **smoking**. / He stopped **to smoke**.", es: "Dejó de fumar. / Paró para fumar." },
          { en: "Try **restarting** it. / I tried **to open** it, but it was stuck.", es: "Prueba a reiniciarlo. / Intenté abrirlo." },
          { en: "We regret **to inform** you that…", es: "Lamentamos comunicarle que…" }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I look forward to see you.", right: "I look forward to **seeing** you.", why: "*to* es preposición aquí." },
          { wrong: "I'm thinking to change jobs.", right: "I'm thinking **of / about changing** jobs.", why: "Preposición + -ing." },
          { wrong: "She suggested to go out.", right: "She suggested **going** out.", why: "*suggest* + -ing." }
        ]
      },
      {
        type: "summary",
        title: "Gerundio o infinitivo",
        points: [
          "-ing: avoid, enjoy, mind, consider, suggest, deny",
          "to: afford, agree, decide, manage, refuse, seem",
          "Preposición + **-ing** (look forward **to** seeing)",
          "remember / forget / stop / try / regret / go on **cambian** de significado",
          "Aprende cada verbo con su estructura"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I'll never forget ___ the Grand Canyon for the first time.", options: ["seeing", "to see", "see"], correctAnswer: "seeing", explanation: "Recuerdo de algo **pasado** → **-ing**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Did you remember ___ some milk?", options: ["to buy", "buying", "buy"], correctAnswer: "to buy", explanation: "Acordarse de **hacer** algo → **to**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "We stopped ___ some photos of the view.", options: ["to take", "taking", "take"], correctAnswer: "to take", explanation: "Paramos **para** hacer fotos → **to**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "If the printer doesn't work, try ___ (turn) it off and on again.", correctAnswer: "turning", acceptableAnswers: ["turning"], explanation: "Probar algo a ver si funciona → **try + -ing**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "They can't afford ___ (buy) a new car this year.", correctAnswer: "to buy", acceptableAnswers: ["to buy"], explanation: "**afford + to**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "Would you mind ___ (open) the window?", correctAnswer: "opening", acceptableAnswers: ["opening"], explanation: "**mind + -ing**." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I'm sorry that I didn't tell you the truth.", keyword: "REGRET", prompt: "I ___ you the truth.", correctAnswer: "regret not telling", acceptableAnswers: ["regret not telling", "regret not having told"], explanation: "Arrepentirse de algo pasado → **regret + -ing**." },
      { id: "e8", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Smoking is something I gave up last year.", keyword: "STOPPED", prompt: "I ___ last year.", correctAnswer: "stopped smoking", acceptableAnswers: ["stopped smoking"], explanation: "Dejar de hacer → **stop + -ing**." }
    ]
  });

  G.push({
    id: "b2-articles",
    level: "B2",
    category: "grammar",
    module: "Determinantes",
    order: 120,
    title: "Artículos: a, the o nada",
    subtitle: "El error invisible de los hispanohablantes",
    emoji: "🅰️",
    minutes: 20,
    tags: ["articles", "artículos", "the", "a", "zero article"],
    objectives: [
      "Saber cuándo **no** poner artículo (donde el español sí lo pone)",
      "Usar **a/an** y **the** con lugares, instituciones y nombres",
      "Corregir errores típicos de hispanohablantes"
    ],
    slides: [
      { type: "cover", title: "Artículos", subtitle: "Life is short. Learn the articles." },
      {
        type: "rule",
        title: "La gran diferencia con el español",
        text: "En inglés, para hablar **en general** de plurales e incontables **no** se pone artículo.",
        formula: ["∅ + plural / incontable = en general", "**People** need **love**. (La gente necesita amor)", "I hate **mosquitoes**. (Odio los mosquitos)", "**The** people at the party were nice. (concretas)"]
      },
      {
        type: "table",
        title: "Cuándo usar cada uno",
        head: ["Artículo", "Uso", "Ejemplo"],
        rows: [
          ["a / an", "uno cualquiera, profesiones", "She's **an** engineer."],
          ["the", "algo concreto o único", "**the** sun, **the** book I lent you"],
          ["the", "ríos, mares, cordilleras, países plurales", "**the** Thames, **the** Alps, **the** USA"],
          ["∅", "generalizaciones, la mayoría de países y ciudades", "Spain, Madrid, **life**, **music**"],
          ["∅", "comidas, deportes, idiomas", "have **lunch**, play **tennis**, speak **English**"]
        ]
      },
      {
        type: "compare",
        title: "Instituciones",
        columns: [
          { label: "Sin artículo: función", text: "go to **school / hospital / prison / church / bed**", example: "He's in hospital. (es paciente)" },
          { label: "Con the: el edificio", text: "Vas al lugar por otro motivo.", example: "I went to the hospital to visit him." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "The life is beautiful.", right: "**Life** is beautiful.", why: "Generalización → ∅." },
          { wrong: "She is teacher.", right: "She is **a** teacher.", why: "Profesiones con a/an." },
          { wrong: "I play the football.", right: "I play **football**.", why: "Deportes sin artículo." },
          { wrong: "Children love the chocolate.", right: "Children love **chocolate**.", why: "Incontable en general → ∅." }
        ]
      },
      {
        type: "summary",
        title: "Artículos",
        points: [
          "Generalizar con plural / incontable → **sin artículo**",
          "**a / an** con profesiones y algo no concreto",
          "**the** con lo concreto o único",
          "the + ríos, mares, cordilleras, *the USA / the UK*",
          "go to **school / bed / hospital** (función) sin artículo"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ is the most important thing in life.", options: ["Health", "The health", "A health"], correctAnswer: "Health", explanation: "Generalización con incontable → **sin artículo**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "My brother is ___ architect.", options: ["an", "the", "—"], correctAnswer: "an", explanation: "Profesiones con **a/an** (an + vocal)." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "We sailed down ___ Danube.", options: ["the", "a", "—"], correctAnswer: "the", explanation: "Ríos con **the**." },
      { id: "e4", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "She was taken to ___ hospital after the accident.", options: ["—", "a the", "an"], correctAnswer: "—", explanation: "Como paciente: **go to hospital** sin artículo (inglés británico)." },
      { id: "e5", type: "context", instruction: "¿Qué frase es correcta?", prompt: "Quieres decir «Me encantan los perros» en general.", options: ["I love dogs.", "I love the dogs.", "I love a dogs."], correctAnswer: "I love dogs.", explanation: "Generalización → plural **sin artículo**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Have you ever been to ___ United Kingdom?", options: ["the", "—", "a"], correctAnswer: "the", explanation: "Países con *Kingdom, States, Republic* → **the**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ people I met on holiday were really friendly.", options: ["The", "—", "A"], correctAnswer: "The", explanation: "Personas **concretas** → **the**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Do you want to play ___ chess after dinner?", options: ["—", "the", "a"], correctAnswer: "—", explanation: "Juegos y deportes **sin artículo**." }
    ]
  });
})();
