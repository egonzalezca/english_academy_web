(function () {
  "use strict";

  // Guías de gramática C1. Contrato de datos: guides/schema.md
  const G = (window.C1_GUIDES = window.C1_GUIDES || []);

  G.push({
    id: "c1-inversion",
    level: "C1",
    category: "grammar",
    module: "Énfasis",
    order: 10,
    title: "Inversión: Never have I…",
    subtitle: "Adverbios negativos al principio de la frase",
    emoji: "🔄",
    minutes: 30,
    tags: ["inversion", "inversión", "never have i", "no sooner", "hardly", "not only", "only when"],
    objectives: [
      "Formar la inversión con **auxiliar + sujeto**",
      "Usar **No sooner… than / Hardly… when / Not until / Only then**",
      "Darle un registro formal y enfático a tu writing"
    ],
    slides: [
      { type: "cover", title: "Inversión", subtitle: "Never have I seen a structure that impresses examiners so much." },
      {
        type: "rule",
        title: "La fórmula",
        text: "Cuando una expresión **negativa o restrictiva** abre la frase, el orden cambia como en una pregunta.",
        formula: ["Adverbio + auxiliar + sujeto + verbo", "I have **never** seen… → **Never have I seen**…", "She **rarely** complains. → **Rarely does she** complain."],
        note: "Sin auxiliar (presente o pasado simple) añadimos **do / does / did**, igual que en las preguntas."
      },
      {
        type: "table",
        title: "Las más útiles",
        head: ["Expresión", "Ejemplo"],
        rows: [
          ["Never / Rarely / Seldom", "**Seldom have we** had such a good team."],
          ["Not only… but (also)", "**Not only did he** lie, **but** he also blamed me."],
          ["Under no circumstances", "**Under no circumstances should you** open it."],
          ["Little", "**Little did they know** what was coming."],
          ["At no time / In no way", "**At no time was** the public at risk."],
          ["Not once", "**Not once did she** look back."]
        ]
      },
      {
        type: "compare",
        title: "Justo después de…",
        columns: [
          { label: "No sooner… than", text: "Past perfect + **than** + pasado simple.", example: "No sooner had I sat down than the phone rang." },
          { label: "Hardly / Scarcely… when", text: "Past perfect + **when** + pasado simple.", example: "Hardly had we arrived when it started to rain." }
        ],
        note: "Error clásico: *No sooner… when* ✗ · *Hardly… than* ✗. Memoriza las parejas."
      },
      {
        type: "rule",
        title: "Only y Not until",
        text: "Con **Only** y **Not until** la inversión va en la **oración principal**, no en la primera parte.",
        formula: ["Only / Not until + tiempo, + auxiliar + sujeto", "**Only when** I got home **did I realise** I'd lost it.", "**Not until** the 1990s **did** the internet **become** popular.", "**Only then did she** understand."]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Never I have seen such chaos.", right: "Never **have I** seen such chaos.", why: "El auxiliar va antes del sujeto." },
          { wrong: "Rarely she goes out.", right: "Rarely **does she go** out.", why: "Sin auxiliar, añade does y el verbo en base." },
          { wrong: "Only when I arrived I saw him.", right: "Only when I arrived **did I see** him.", why: "La inversión va en la principal." },
          { wrong: "No sooner had I left when…", right: "No sooner had I left **than**…", why: "No sooner siempre con than." }
        ]
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "Dónde usarla en el examen",
        points: [
          "**Use of English 4**: transformaciones con NEVER, SOONER, ONLY, UNTIL, LITTLE, CIRCUMSTANCES.",
          "**Writing (essay, proposal)**: una inversión por texto basta. *Not only does this save money, but it also…*",
          "**Speaking**: suena forzada; mejor no abusar de ella."
        ]
      },
      {
        type: "summary",
        title: "Inversión",
        points: [
          "Adverbio negativo + **auxiliar + sujeto** + verbo",
          "Sin auxiliar → **do / does / did**",
          "**No sooner… than** · **Hardly / Scarcely… when** (+ past perfect)",
          "**Only when / Not until**: inversión en la oración principal",
          "Registro formal: ideal para essays y proposals"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Never ___ such a moving performance.", options: ["have I seen", "I have seen", "I saw", "did I saw"], correctAnswer: "have I seen", explanation: "Never al principio → **auxiliar + sujeto**: *have I seen*." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "No sooner had the match started ___ it began to pour with rain.", options: ["than", "when", "that", "then"], correctAnswer: "than", explanation: "La pareja fija es **No sooner… than**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Only after the meeting had finished ___ how serious the problem was.", options: ["did we realise", "we realised", "we did realise", "had realised we"], correctAnswer: "did we realise", explanation: "Con **Only after…** la inversión va en la oración principal: *did we realise*." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "As soon as I got into the bath, the doorbell rang.", keyword: "SOONER", prompt: "No ___ into the bath than the doorbell rang.", correctAnswer: "sooner had I got", acceptableAnswers: ["sooner had i got", "sooner had i gotten"], explanation: "**No sooner + had + sujeto + V3… than**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "You must not leave the building under any circumstances.", keyword: "SHOULD", prompt: "Under no circumstances ___ the building.", correctAnswer: "should you leave", acceptableAnswers: ["should you leave"], explanation: "**Under no circumstances + should + sujeto + verbo**." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "They had no idea that they were being watched.", keyword: "LITTLE", prompt: "___ that they were being watched.", correctAnswer: "Little did they know", acceptableAnswers: ["little did they know", "little did they realise", "little did they realize", "little did they suspect"], explanation: "**Little did + sujeto + know/realise** = no tenían ni idea." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "He not only forgot my birthday, he also forgot our anniversary.", keyword: "ONLY", prompt: "Not ___ my birthday, but he also forgot our anniversary.", correctAnswer: "only did he forget", acceptableAnswers: ["only did he forget"], explanation: "**Not only + did + sujeto + verbo base**, but (also)…" },
      { id: "e8", type: "reorder", instruction: "Ordena las palabras.", prompt: "Construye una frase con inversión.", words: ["Rarely", "does", "she", "admit", "her", "mistakes"], correctAnswer: "Rarely does she admit her mistakes", explanation: "Rarely + **does she** + verbo base." },
      { id: "e9", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Hardly had I closed my eyes ___ the baby started crying.", options: ["when", "than", "then", "that"], correctAnswer: "when", explanation: "La pareja fija es **Hardly… when**." },
      { id: "e10", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I didn't understand what she meant until I read the letter again.", keyword: "UNTIL", prompt: "Not ___ the letter again did I understand what she meant.", correctAnswer: "until I read", acceptableAnswers: ["until i read", "until i had read", "until i'd read"], explanation: "**Not until + oración, + did I…**: la inversión va después." }
    ]
  });

  G.push({
    id: "c1-advanced-conditionals",
    level: "C1",
    category: "grammar",
    module: "Condicionales",
    order: 20,
    title: "Condicionales avanzados",
    subtitle: "Should you…, Were I to…, Had I known…, But for…",
    emoji: "🔀",
    minutes: 30,
    tags: ["conditionals", "condicionales", "inversion", "but for", "provided", "unless", "otherwise", "supposing"],
    objectives: [
      "Formar condicionales con **inversión** sin *if*",
      "Usar **provided, as long as, unless, but for, otherwise**",
      "Combinar tiempos en **condicionales mixtos**"
    ],
    slides: [
      { type: "cover", title: "Condicionales avanzados", subtitle: "Had you studied this guide, you would already know it." },
      {
        type: "table",
        title: "Condicional con inversión",
        text: "En registro formal quitamos **if** e invertimos el auxiliar.",
        head: ["Tipo", "Con if", "Con inversión"],
        rows: [
          ["1.º", "If you **need** help, call me.", "**Should you need** help, call me."],
          ["2.º", "If I **were** rich, …", "**Were I** rich, …"],
          ["2.º (acción)", "If he **told** you, …", "**Were he to tell** you, …"],
          ["3.º", "If I **had known**, …", "**Had I known**, …"]
        ],
        note: "Negativa: **Had I not known** ✓ · *Hadn't I known* ✗"
      },
      {
        type: "list",
        title: "Alternativas a if",
        items: [
          { term: "provided / providing (that)", meaning: "siempre que (condición necesaria)", example: "You can borrow it provided you return it today." },
          { term: "as long as / so long as", meaning: "con tal de que", example: "I'll come as long as I finish work on time." },
          { term: "unless", meaning: "a menos que (= if… not)", example: "Unless we act now, it will be too late." },
          { term: "on condition that", meaning: "con la condición de que (formal)", example: "He agreed on condition that he remained anonymous." },
          { term: "supposing / suppose", meaning: "suponiendo que", example: "Supposing you lost your job, what would you do?" }
        ]
      },
      {
        type: "compare",
        title: "But for / Otherwise",
        columns: [
          { label: "But for + sustantivo", text: "= *If it hadn't been for / If it weren't for*.", example: "But for your help, I would have failed." },
          { label: "Otherwise", text: "= *si no*. Va **después** de una oración.", example: "Take a map; otherwise you'll get lost." }
        ],
        note: "También: **If it hadn't been for** the rain, we would have won. / **Without** her support, …"
      },
      {
        type: "rule",
        title: "Condicionales mixtos",
        text: "Mezclan tiempos cuando la condición y el resultado ocurren en **momentos distintos**.",
        formula: ["Pasado → presente: If + past perfect, would + verbo", "If I **had taken** the job, I **would be** in Paris now.", "Presente → pasado: If + past simple, would have + V3", "If I **weren't** so shy, I **would have spoken** to her."]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Unless you don't hurry, you'll miss it.", right: "Unless you **hurry**, you'll miss it.", why: "Unless ya es negativo." },
          { wrong: "If I would have known, I'd have come.", right: "If I **had known**, I'd have come.", why: "Nunca *would* en la oración con if." },
          { wrong: "Hadn't I seen it, …", right: "**Had I not** seen it, …", why: "En la inversión, la negación no se contrae." },
          { wrong: "Provided you will call, …", right: "Provided you **call**, …", why: "Tras provided/as long as, presente para el futuro." }
        ]
      },
      {
        type: "tip",
        emoji: "✍️",
        title: "En tu writing",
        text: "En **reports y proposals** queda muy bien una condicional con inversión en la recomendación final.",
        points: [
          "**Should the council approve** this proposal, residents would benefit greatly.",
          "**Were the company to invest** in training, staff turnover would fall.",
          "**Had the event been** better advertised, attendance would have been higher."
        ]
      },
      {
        type: "summary",
        title: "Condicionales C1",
        points: [
          "**Should** you + verbo = If you…",
          "**Were** I / **Were** he **to** + verbo = If I were / If he…",
          "**Had** I + V3 = If I had… · negativa: **Had I not**",
          "**Unless** = if not · **provided / as long as** = siempre que",
          "**But for** + sustantivo · **otherwise** = si no",
          "Mixtos: past perfect → would + verbo (y viceversa)"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ any problems, please contact reception.", options: ["Should you have", "Would you have", "Had you", "Were you have"], correctAnswer: "Should you have", explanation: "Primer condicional formal: **Should you + verbo**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ the traffic, we would have arrived on time.", options: ["But for", "Unless", "Provided", "Otherwise"], correctAnswer: "But for", explanation: "**But for + sustantivo** = si no hubiera sido por." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "If I had known about the problem, I would have helped.", keyword: "HAD", prompt: "___ about the problem, I would have helped.", correctAnswer: "Had I known", acceptableAnswers: ["had i known"], explanation: "Tercer condicional con inversión: **Had I known**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "You can stay here if you keep the place tidy.", keyword: "LONG", prompt: "You can stay here ___ the place tidy.", correctAnswer: "as long as you keep", acceptableAnswers: ["as long as you keep", "so long as you keep"], explanation: "**As long as** = con tal de que; presente con valor de futuro." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "If it hadn't been for her advice, I would have made a terrible mistake.", keyword: "FOR", prompt: "___ advice, I would have made a terrible mistake.", correctAnswer: "But for her", acceptableAnswers: ["but for her"], explanation: "**But for + sustantivo** sustituye a *If it hadn't been for*." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If I had studied medicine, I ___ a doctor now.", options: ["would be", "would have been", "will be", "had been"], correctAnswer: "would be", explanation: "Mixto: condición pasada → resultado **presente** (*now*): **would be**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "We'll miss the train ___ we leave right now.", options: ["unless", "provided", "as long as", "otherwise"], correctAnswer: "unless", explanation: "**Unless** = if… not: *si no salimos ya*." },
      { id: "e8", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "If the government decided to raise taxes, there would be protests.", keyword: "WERE", prompt: "___ raise taxes, there would be protests.", correctAnswer: "Were the government to", acceptableAnswers: ["were the government to"], explanation: "**Were + sujeto + to + verbo** = If + sujeto + pasado (acción hipotética)." },
      { id: "e9", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "Write it down; ___ you'll forget it.", correctAnswer: "otherwise", acceptableAnswers: ["otherwise", "or"], explanation: "**Otherwise** = si no (también vale *or*)." },
      { id: "e10", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If she weren't so stubborn, she ___ my advice yesterday.", options: ["would have taken", "would take", "had taken", "took"], correctAnswer: "would have taken", explanation: "Mixto: rasgo presente (*weren't so stubborn*) → resultado **pasado**: **would have taken**." }
    ]
  });

  G.push({
    id: "c1-cleft-sentences",
    level: "C1",
    category: "grammar",
    module: "Énfasis",
    order: 30,
    title: "Cleft sentences",
    subtitle: "It was… that / What I need is…",
    emoji: "🔦",
    minutes: 25,
    tags: ["cleft sentences", "emphasis", "énfasis", "what i need is", "it was that", "all i want"],
    objectives: [
      "Destacar una parte de la frase con **It is/was… that**",
      "Usar **What… is/was** y **All… is/was**",
      "Sonar más natural y enfático en Speaking y Writing"
    ],
    slides: [
      { type: "cover", title: "Cleft sentences", subtitle: "What makes them useful is that they put the focus exactly where you want it." },
      {
        type: "rule",
        title: "It is / It was… that",
        text: "Partimos la frase en dos para **destacar** un elemento: el sujeto, el objeto, el momento o el lugar.",
        formula: ["It + be + elemento destacado + that / who…", "Tom broke the vase. → **It was Tom who** broke the vase.", "→ **It was the vase that** Tom broke.", "→ **It was yesterday that** Tom broke it."]
      },
      {
        type: "rule",
        title: "What… is / was",
        text: "Empezamos con una cláusula con **What** y ponemos la información nueva al final.",
        formula: ["What + sujeto + verbo + be + foco", "I need a holiday. → **What I need is** a holiday.", "She annoys me with her lies. → **What annoys me is** her lies.", "He lost his job. → **What happened was (that)** he lost his job."],
        note: "Con acciones: **What I did was (to) call** the police."
      },
      {
        type: "table",
        title: "Otras estructuras",
        head: ["Estructura", "Ejemplo"],
        rows: [
          ["All… is / was", "**All I want is** a quiet life."],
          ["The thing (that)…", "**The thing that** surprised me **was** his calm."],
          ["The reason (why)…", "**The reason why** I left **was** the salary."],
          ["The place where…", "**The place where** we met **was** a library."],
          ["The person who…", "**The person who** helped me **was** my teacher."]
        ]
      },
      {
        type: "examples",
        title: "Suenan muy natural en Speaking",
        items: [
          { ok: true, en: "**What I like most about** this photo **is** the atmosphere.", es: "Parte 2: para empezar a comparar fotos." },
          { ok: true, en: "**What we need to decide is** which option is cheapest.", es: "Parte 3: para organizar la discusión." },
          { ok: true, en: "**It's not the money that** matters, **it's** the experience.", es: "Para contrastar ideas." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "What I need it is more time.", right: "What I need **is** more time.", why: "No se repite el sujeto con *it*." },
          { wrong: "It was in 2010 when I moved.", right: "It was in 2010 **that** I moved.", why: "En la cleft con It, usa **that** (no *when*)." },
          { wrong: "The thing what I hate is…", right: "The thing **that** I hate is… / **What** I hate is…", why: "*The thing what* no existe." }
        ]
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "En el examen",
        points: [
          "**Use of English 2** (open cloze): huecos con *what, it, that, all*.",
          "**Use of English 4**: claves como WHAT, ALL, IT, REASON.",
          "**Writing**: *What is clear is that…* o *It is for this reason that…* elevan el registro."
        ]
      },
      {
        type: "summary",
        title: "Cleft sentences",
        points: [
          "**It is/was** + foco + **that/who**…",
          "**What** + sujeto + verbo + **is/was** + foco",
          "**All** I want **is**… = lo único que quiero es…",
          "**The reason why / the thing that / the place where**…",
          "Con acciones: **What I did was (to)** + verbo"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "___ I really need right now is a long holiday.", correctAnswer: "What", acceptableAnswers: ["what"], explanation: "Cleft con **What… is**." },
      { id: "e2", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "It was my sister ___ told me the news.", correctAnswer: "who", acceptableAnswers: ["who", "that"], explanation: "Con persona: **It was… who / that**." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I only want you to tell the truth.", keyword: "ALL", prompt: "___ is for you to tell the truth.", correctAnswer: "All I want", acceptableAnswers: ["all i want"], explanation: "**All I want is** = lo único que quiero es." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "His rudeness really annoyed me.", keyword: "WHAT", prompt: "___ was his rudeness.", correctAnswer: "What really annoyed me", acceptableAnswers: ["what really annoyed me", "what annoyed me"], explanation: "**What annoyed me was** + foco." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I left because the pay was terrible.", keyword: "REASON", prompt: "The ___ was the terrible pay.", correctAnswer: "reason why I left", acceptableAnswers: ["reason why i left", "reason i left", "reason that i left"], explanation: "**The reason (why) I left was**…" },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It was in Rome ___ they first met.", options: ["that", "where", "when", "which"], correctAnswer: "that", explanation: "En las cleft con *It was + lugar/tiempo*, lo correcto en el examen es **that**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "What we did ___ call an ambulance immediately.", options: ["was", "did", "it was", "had"], correctAnswer: "was", explanation: "**What + sujeto + did + was (to) + verbo**." },
      { id: "e8", type: "reorder", instruction: "Ordena las palabras.", prompt: "Construye una cleft sentence.", words: ["It", "was", "Maria", "who", "found", "the", "solution"], correctAnswer: "It was Maria who found the solution", explanation: "**It was** + persona + **who** + resto." },
      { id: "e9", type: "context", instruction: "¿Qué frase usarías para empezar el Speaking parte 2?", prompt: "Quieres destacar qué te llama la atención de una foto.", options: ["What strikes me about this photo is the contrast.", "What strikes me about this photo it is the contrast.", "The thing what strikes me is the contrast."], correctAnswer: "What strikes me about this photo is the contrast.", explanation: "**What strikes me… is** + foco, sin *it* extra." }
    ]
  });

  G.push({
    id: "c1-participle-clauses",
    level: "C1",
    category: "grammar",
    module: "Oraciones complejas",
    order: 40,
    title: "Participle clauses",
    subtitle: "Having finished…, Built in 1890…, Feeling tired…",
    emoji: "🪢",
    minutes: 30,
    tags: ["participle clauses", "having done", "reduced relative", "participios"],
    objectives: [
      "Condensar dos oraciones con **-ing, V3 y having + V3**",
      "Reducir oraciones de relativo",
      "Evitar el **dangling participle** (sujeto incorrecto)"
    ],
    slides: [
      { type: "cover", title: "Participle clauses", subtitle: "Having learnt them, you'll write more concisely." },
      {
        type: "table",
        title: "Los tres tipos",
        head: ["Forma", "Valor", "Ejemplo"],
        rows: [
          ["-ing", "Activa, mismo momento o causa", "**Feeling** ill, she went home."],
          ["Having + V3", "Activa, acción **anterior**", "**Having finished** the report, he left."],
          ["V3", "**Pasiva**", "**Built** in 1890, the bridge is still in use."]
        ],
        note: "El sujeto de la participle clause tiene que ser **el mismo** que el de la oración principal."
      },
      {
        type: "examples",
        title: "Qué sustituyen",
        items: [
          { en: "**Not knowing** what to do, I called my mum.", es: "= Because I didn't know what to do… (causa)" },
          { en: "**Having lived** abroad, she speaks three languages.", es: "= Because she has lived abroad… (anterioridad)" },
          { en: "**Seen** from above, the city looks tiny.", es: "= When it is seen from above… (pasiva)" },
          { en: "**Walking** home, I bumped into an old friend.", es: "= While I was walking home… (simultánea)" }
        ]
      },
      {
        type: "rule",
        title: "Relativas reducidas",
        text: "Podemos quitar **who/which + be** y quedarnos con el participio.",
        formula: ["sustantivo + -ing / V3", "The man **who is sitting** there… → The man **sitting** there…", "Products **which are made** in China… → Products **made** in China…", "Anyone **who wants** to join… → Anyone **wanting** to join…"]
      },
      {
        type: "mistakes",
        title: "Dangling participle",
        items: [
          { wrong: "Walking down the street, the rain started.", right: "Walking down the street, **I** got caught in the rain.", why: "La lluvia no caminaba: el sujeto debe ser quien hace la acción." },
          { wrong: "Having eaten, the bill arrived.", right: "Having eaten, **we** asked for the bill.", why: "La cuenta no comió." },
          { wrong: "Finishing the exam, he went home.", right: "**Having finished** the exam, he went home.", why: "Para la acción anterior y terminada, mejor having + V3." }
        ]
      },
      {
        type: "compare",
        title: "-ing o V3",
        columns: [
          { label: "-ing (activa)", text: "El sujeto **hace** la acción.", example: "Using the latest technology, the company…" },
          { label: "V3 (pasiva)", text: "El sujeto **recibe** la acción.", example: "Used correctly, this tool saves hours." }
        ]
      },
      {
        type: "tip",
        emoji: "✍️",
        title: "En Writing",
        text: "Una o dos participle clauses por texto dan **variedad y concisión** (criterio *Language*).",
        points: [
          "**Having considered** both options, I believe…",
          "**Given** the current situation, the council should…",
          "**Based on** the survey results, this report recommends…"
        ]
      },
      {
        type: "summary",
        title: "Participle clauses",
        points: [
          "**-ing** = activa, simultánea o causa",
          "**Having + V3** = activa y anterior",
          "**V3** = pasiva",
          "Relativas reducidas: the man **sitting** / products **made**",
          "Mismo sujeto en las dos oraciones: ¡ojo al dangling participle!"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ the email, she logged off and went to bed.", options: ["Having sent", "Sent", "Being sent", "Having been sent"], correctAnswer: "Having sent", explanation: "Acción activa y anterior: **Having + V3**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ in 1889, the Eiffel Tower was initially criticised.", options: ["Completed", "Completing", "Having completed", "To complete"], correctAnswer: "Completed", explanation: "La torre **fue** terminada: pasiva → **V3**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ what to say, he remained silent.", options: ["Not knowing", "Knowing not", "Not known", "Having not know"], correctAnswer: "Not knowing", explanation: "Causa activa: **Not + -ing** (la negación va delante)." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "Anyone ___ (wish) to attend must register by Friday.", correctAnswer: "wishing", acceptableAnswers: ["wishing"], explanation: "Relativa reducida activa: anyone who wishes → anyone **wishing**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "Most of the goods ___ (sell) in this shop are locally produced.", correctAnswer: "sold", acceptableAnswers: ["sold"], explanation: "Relativa reducida pasiva: goods which are sold → goods **sold**." },
      { id: "e6", type: "context", instruction: "¿Qué frase es correcta?", prompt: "Elige la frase sin dangling participle.", options: ["Looking out of the window, I saw a fox.", "Looking out of the window, a fox appeared.", "Looking out of the window, the fox was seen."], correctAnswer: "Looking out of the window, I saw a fox.", explanation: "El sujeto (**I**) es quien mira por la ventana." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "___ (give) the circumstances, the decision seems reasonable.", correctAnswer: "Given", acceptableAnswers: ["given"], explanation: "**Given** = teniendo en cuenta. Muy útil en essays." },
      { id: "e8", type: "match", instruction: "Relaciona cada participle clause con su significado.", prompt: "Participle clause → equivalente", pairs: [
        { left: "Having read the book, …", right: "After I had read the book, …" },
        { left: "Read aloud, the poem …", right: "When it is read aloud, the poem …" },
        { left: "Reading the book, …", right: "While I was reading the book, …" }
      ], explanation: "Having + V3 = anterior · V3 = pasiva · -ing = simultánea." }
    ]
  });

  G.push({
    id: "c1-passive-reporting",
    level: "C1",
    category: "grammar",
    module: "Pasiva",
    order: 50,
    title: "It is said that… / He is said to…",
    subtitle: "Pasiva impersonal para opiniones y rumores",
    emoji: "📰",
    minutes: 25,
    tags: ["passive", "pasiva", "it is said", "is believed to", "reporting verbs", "impersonal"],
    objectives: [
      "Usar **It is said / believed / thought that…**",
      "Usar **Sb is said to + infinitivo** en todos los tiempos",
      "Escribir con el tono impersonal de un report"
    ],
    slides: [
      { type: "cover", title: "Pasiva de opinión", subtitle: "This structure is said to be one of the most tested in Use of English." },
      {
        type: "rule",
        title: "Dos formas",
        text: "Para contar lo que **la gente dice o cree** sin decir quién.",
        formula: ["1) It + is said + that + oración", "People say he is rich. → **It is said that** he is rich.", "2) Sujeto + is said + to + infinitivo", "→ **He is said to be** rich."],
        note: "Verbos típicos: say, believe, think, know, expect, report, consider, claim, estimate."
      },
      {
        type: "table",
        title: "El infinitivo cambia con el tiempo",
        head: ["Lo que se cree", "Forma"],
        rows: [
          ["Algo presente", "He is said **to be** rich."],
          ["Algo en curso", "She is thought **to be working** abroad."],
          ["Algo pasado", "He is believed **to have left** the country."],
          ["Pasado en curso", "They are said **to have been living** there for years."],
          ["Futuro", "Prices are expected **to rise**."]
        ]
      },
      {
        type: "examples",
        title: "Del activo al pasivo",
        items: [
          { en: "People think the painting **is** a fake. → The painting **is thought to be** a fake.", es: "Misma época → to + infinitivo." },
          { en: "People believe the thief **escaped** by car. → The thief **is believed to have escaped** by car.", es: "Creencia actual sobre el pasado → to have + V3." },
          { en: "People said the minister **had resigned**. → The minister **was said to have resigned**.", es: "Creencia pasada sobre algo anterior." }
        ]
      },
      {
        type: "rule",
        title: "There is thought to be…",
        text: "Con **there**, la estructura se mantiene:",
        formula: ["There + is/are + said + to be…", "People think there are 200 survivors. → **There are thought to be** 200 survivors.", "→ **It is thought that there are** 200 survivors."]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "He is said that he is rich.", right: "**It** is said that he is rich. / He is said **to be** rich.", why: "No mezcles las dos estructuras." },
          { wrong: "She is believed to leave yesterday.", right: "She is believed **to have left** yesterday.", why: "Hecho pasado → infinitivo perfecto." },
          { wrong: "It is said him to be rich.", right: "**He** is said to be rich.", why: "El sujeto de la persona va delante." }
        ]
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "En el examen",
        points: [
          "**Use of English 4**: claves típicas SAID, THOUGHT, BELIEVED, EXPECTED, CONSIDERED.",
          "**Report y proposal**: *It is widely believed that…*, *The new system is expected to…*",
          "Combina con adverbios: *It is **widely** / **generally** accepted that…*"
        ]
      },
      {
        type: "summary",
        title: "Pasiva de opinión",
        points: [
          "**It is said / thought / believed that** + oración",
          "Sujeto + **is said to** + infinitivo",
          "Pasado → **to have + V3** · en curso → **to be + -ing**",
          "**There is/are thought to be**…",
          "Perfecta para reports y essays formales"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "People say that the castle is haunted.", keyword: "SAID", prompt: "The castle ___ haunted.", correctAnswer: "is said to be", acceptableAnswers: ["is said to be"], explanation: "Sujeto + **is said to be**." },
      { id: "e2", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Police believe the suspect left the country last week.", keyword: "BELIEVED", prompt: "The suspect ___ the country last week.", correctAnswer: "is believed to have left", acceptableAnswers: ["is believed to have left"], explanation: "Creencia actual sobre algo pasado: **is believed to have + V3**." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Experts expect house prices to fall next year.", keyword: "EXPECTED", prompt: "House prices ___ next year.", correctAnswer: "are expected to fall", acceptableAnswers: ["are expected to fall"], explanation: "Futuro: **are expected to + infinitivo**." },
      { id: "e4", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The singer is thought ___ on a new album at the moment.", options: ["to be working", "to work", "to have worked", "working"], correctAnswer: "to be working", explanation: "Acción en curso ahora: **to be + -ing**." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ that the new law will reduce crime.", options: ["It is hoped", "It hopes", "He is hoped", "There is hoped"], correctAnswer: "It is hoped", explanation: "**It is hoped that** + oración." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "People think there are over a million species still undiscovered.", keyword: "THOUGHT", prompt: "There ___ over a million species still undiscovered.", correctAnswer: "are thought to be", acceptableAnswers: ["are thought to be"], explanation: "**There are thought to be**…" },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The painting was said ___ stolen years before.", options: ["to have been", "to be", "that it was", "being"], correctAnswer: "to have been", explanation: "Pasiva + anterioridad: **to have been + V3**." },
      { id: "e8", type: "context", instruction: "¿Qué frase es más adecuada para un report?", prompt: "Quieres decir que mucha gente opina que el horario es poco práctico.", options: ["It is widely felt that the timetable is impractical.", "Everybody says the timetable is rubbish.", "The timetable is said that it is impractical."], correctAnswer: "It is widely felt that the timetable is impractical.", explanation: "**It is widely felt / believed that** = registro formal e impersonal." }
    ]
  });

  G.push({
    id: "c1-subjunctive-unreal-past",
    level: "C1",
    category: "grammar",
    module: "Formas irreales",
    order: 60,
    title: "Subjuntivo y pasado irreal",
    subtitle: "I insist that he be…, It's time we left, I'd rather you didn't",
    emoji: "🎭",
    minutes: 25,
    tags: ["subjunctive", "subjuntivo", "it's time", "would rather", "as if", "insist that", "suggest"],
    objectives: [
      "Usar el **subjuntivo** tras *insist, recommend, essential…*",
      "Dominar **It's (high) time, would rather, as if**",
      "Elegir el tiempo correcto en situaciones irreales"
    ],
    slides: [
      { type: "cover", title: "Subjuntivo y pasado irreal", subtitle: "It's high time you mastered them." },
      {
        type: "rule",
        title: "El subjuntivo en inglés",
        text: "Tras verbos y adjetivos de **exigencia o recomendación**, usamos el verbo en **forma base** para todas las personas.",
        formula: ["verbo / adjetivo + that + sujeto + verbo base", "I insist that he **be** present.", "They recommended that she **take** a break.", "It is essential that everyone **arrive** on time."],
        note: "Sin -s en tercera persona y sin *to*. Negativa: that he **not be** late. En inglés británico también vale **should**: *that she should take*."
      },
      {
        type: "list",
        title: "Palabras que lo activan",
        items: [
          { term: "insist, demand, request, propose", meaning: "exigir, pedir, proponer" },
          { term: "suggest, recommend, advise", meaning: "sugerir, recomendar, aconsejar" },
          { term: "essential, vital, crucial, imperative", meaning: "imprescindible, fundamental" },
          { term: "important, necessary, advisable", meaning: "importante, necesario, aconsejable" }
        ]
      },
      {
        type: "table",
        title: "Pasado irreal: presente con forma de pasado",
        head: ["Estructura", "Ejemplo"],
        rows: [
          ["It's (high / about) time + pasado", "It's high time we **left**."],
          ["would rather + sujeto + pasado", "I'd rather you **didn't** smoke here."],
          ["as if / as though + pasado", "He talks as if he **knew** everything."],
          ["suppose / imagine + pasado", "Suppose you **won** the lottery…"]
        ],
        note: "Para el pasado real, retrocede otro tiempo: *I'd rather you **hadn't told** her.*"
      },
      {
        type: "compare",
        title: "Would rather",
        columns: [
          { label: "Mismo sujeto", text: "would rather + **infinitivo sin to**", example: "I'd rather stay at home." },
          { label: "Sujeto distinto", text: "would rather + sujeto + **pasado**", example: "I'd rather you stayed at home." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I suggest him to go.", right: "I suggest **(that) he go** / **he goes** / **going**.", why: "*Suggest* nunca va con objeto + to." },
          { wrong: "It's time we leave.", right: "It's time we **left**. / It's time **to leave**.", why: "It's time + sujeto + pasado." },
          { wrong: "I'd rather you don't come.", right: "I'd rather you **didn't** come.", why: "Sujeto distinto → pasado." },
          { wrong: "It's vital that he is told.", right: "It's vital that he **be** told.", why: "En registro formal, subjuntivo (también *should be*)." }
        ]
      },
      {
        type: "tip",
        emoji: "✍️",
        title: "En reports y proposals",
        points: [
          "*I would **recommend that** the council **invest** in cycle lanes.*",
          "*It is **essential that** staff **be** given proper training.*",
          "*I **suggest that** the event **take** place in spring.*"
        ]
      },
      {
        type: "summary",
        title: "Formas irreales",
        points: [
          "insist / recommend / essential **that** + verbo base",
          "Negativa: that he **not** be · alternativa: **should** + verbo",
          "**It's (high) time** + sujeto + pasado",
          "**would rather** + sujeto + pasado (sujeto distinto)",
          "**as if / as though** + pasado para irrealidad"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The doctor recommended that he ___ more exercise.", options: ["take", "takes", "to take", "taking"], correctAnswer: "take", explanation: "Subjuntivo: **recommend that + verbo base**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It's high time the government ___ something about pollution.", options: ["did", "does", "do", "will do"], correctAnswer: "did", explanation: "**It's high time + sujeto + pasado**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I'd rather you ___ anyone about this.", options: ["didn't tell", "don't tell", "not tell", "won't tell"], correctAnswer: "didn't tell", explanation: "Sujeto distinto → **would rather + sujeto + pasado**." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "We should go home now; it's very late.", keyword: "TIME", prompt: "It's ___ home; it's very late.", correctAnswer: "time we went", acceptableAnswers: ["time we went", "high time we went", "about time we went", "time for us to go"], explanation: "**It's time we went** (pasado irreal)." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I would prefer you not to use my computer.", keyword: "RATHER", prompt: "I ___ my computer.", correctAnswer: "would rather you didn't use", acceptableAnswers: ["would rather you didn't use", "would rather you did not use"], explanation: "**would rather + sujeto + pasado**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It is essential that every applicant ___ a valid passport.", options: ["have", "has got", "to have", "having"], correctAnswer: "have", explanation: "**essential that + verbo base**: *have* (sin -s)." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "She behaves as if she ___ the boss, but she isn't.", options: ["were", "is", "be", "has been"], correctAnswer: "were", explanation: "Irreal (no lo es) → **as if + pasado**; *were* para todas las personas en registro cuidado." },
      { id: "e8", type: "context", instruction: "¿Qué frase es correcta?", prompt: "Quieres sugerir a tu jefe que contrate a más personal.", options: ["I suggest that you hire more staff.", "I suggest you to hire more staff.", "I suggest to hire you more staff."], correctAnswer: "I suggest that you hire more staff.", explanation: "**suggest (that) + sujeto + verbo**. Nunca *suggest you to*." }
    ]
  });

  G.push({
    id: "c1-emphasis",
    level: "C1",
    category: "grammar",
    module: "Énfasis",
    order: 70,
    title: "Énfasis: do, such, so, the very…",
    subtitle: "Recursos para dar fuerza a lo que dices",
    emoji: "📣",
    minutes: 20,
    tags: ["emphasis", "énfasis", "emphatic do", "so such", "whatsoever", "the very", "by far"],
    objectives: [
      "Usar el **do enfático** y **so / such… that**",
      "Intensificar con **the very, at all, whatsoever, by far**",
      "Expresar contraste y convicción de forma natural"
    ],
    slides: [
      { type: "cover", title: "Énfasis", subtitle: "You really do need these tools at C1." },
      {
        type: "rule",
        title: "Do / does / did enfático",
        text: "En frases afirmativas, añadimos **do/does/did** (acentuado al hablar) para insistir o contradecir.",
        formula: ["do / does / did + verbo base", "I **do** understand your point, but…", "She **does** look tired today.", "\"You didn't call!\" — \"I **did** call! Twice!\""],
        note: "En imperativos suena amable: ***Do** sit down.*"
      },
      {
        type: "compare",
        title: "So o such",
        columns: [
          { label: "so + adjetivo / adverbio", text: "También **so much / so many / so few**.", example: "It was so cold that the lake froze." },
          { label: "such + (a) + adj + sustantivo", text: "Con sustantivos, contables o incontables.", example: "It was such a cold night that the lake froze." }
        ],
        note: "Formal con inversión: ***So** cold **was** the night that the lake froze.* · ***Such was** the demand that…*"
      },
      {
        type: "table",
        title: "Intensificadores",
        head: ["Recurso", "Ejemplo"],
        rows: [
          ["at all / whatsoever (negativas)", "I have no doubt **whatsoever**."],
          ["the very + sustantivo", "This is **the very** book I was looking for."],
          ["by far + superlativo", "It's **by far** the best option."],
          ["ever (tras wh-)", "What**ever** did you say to her?"],
          ["on earth / in the world", "Why **on earth** did you do that?"],
          ["the + comparativo, the +…", "**The sooner** we start, **the better**."]
        ]
      },
      {
        type: "examples",
        title: "Ejemplos útiles",
        items: [
          { en: "There's **no** evidence **whatsoever** to support this.", es: "Ninguna en absoluto (formal)." },
          { en: "**At the very least**, we should apologise.", es: "Como mínimo." },
          { en: "It's **nowhere near** as easy as it looks.", es: "Ni de lejos tan fácil." },
          { en: "**However hard** I try, I can't remember her name.", es: "Por mucho que lo intente." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "It was so a good film.", right: "It was **such a** good film. / The film was **so** good.", why: "So no va con a + sustantivo." },
          { wrong: "I did went there.", right: "I did **go** there.", why: "Tras do/did, verbo base." },
          { wrong: "He's by far better than me.", right: "He's **far / much** better than me. / He's **by far the best**.", why: "*By far* acompaña sobre todo al superlativo." }
        ]
      },
      {
        type: "summary",
        title: "Énfasis",
        points: [
          "**do / does / did** + verbo base para insistir",
          "**so** + adj · **such (a)** + adj + sustantivo",
          "Negativa reforzada: **at all / whatsoever**",
          "**the very** + sustantivo · **by far** + superlativo",
          "**The more…, the more…** · **however** + adj"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It was ___ boring lecture that half the audience fell asleep.", options: ["such a", "so", "so a", "such"], correctAnswer: "such a", explanation: "**such a** + adjetivo + sustantivo contable." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ apologise for the delay — it won't happen again.", options: ["do", "am", "did", "have"], correctAnswer: "do", explanation: "**Do** enfático en presente: *I do apologise*." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "There is no reason ___ to change the plan now.", correctAnswer: "whatsoever", acceptableAnswers: ["whatsoever", "whatever"], explanation: "**no + sustantivo + whatsoever** = en absoluto." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "The ___ you practise, the more confident you will feel.", correctAnswer: "more", acceptableAnswers: ["more"], explanation: "**The more…, the more…**" },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "The demand for tickets was so great that the website crashed.", keyword: "SUCH", prompt: "___ for tickets that the website crashed.", correctAnswer: "Such was the demand", acceptableAnswers: ["such was the demand"], explanation: "**Such was + sustantivo + that…** (inversión enfática)." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "This is ___ the most difficult exam I've ever taken.", options: ["by far", "very", "so", "much more"], correctAnswer: "by far", explanation: "**By far** + superlativo." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "Why on ___ did you tell him my secret?", correctAnswer: "earth", acceptableAnswers: ["earth"], explanation: "**Why on earth…?** expresa sorpresa o enfado." },
      { id: "e8", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I try very hard, but I can't understand this poem.", keyword: "HOWEVER", prompt: "___ try, I can't understand this poem.", correctAnswer: "However hard I", acceptableAnswers: ["however hard i", "however much i"], explanation: "**However + adjetivo/adverbio + sujeto + verbo** = por mucho que." }
    ]
  });

  G.push({
    id: "c1-ellipsis-substitution",
    level: "C1",
    category: "grammar",
    module: "Cohesión",
    order: 80,
    title: "Elipsis y sustitución",
    subtitle: "I hope so, I'm afraid not, do so, one/ones",
    emoji: "✂️",
    minutes: 20,
    tags: ["ellipsis", "substitution", "elipsis", "so", "not", "do so", "one", "ones"],
    objectives: [
      "Evitar repeticiones con **so, not, do so, one/ones**",
      "Omitir palabras tras auxiliares y *to*",
      "Ganar cohesión, un criterio clave en Writing"
    ],
    slides: [
      { type: "cover", title: "Elipsis y sustitución", subtitle: "Native speakers avoid repetition. So should you." },
      {
        type: "table",
        title: "So y not",
        text: "Sustituyen a una oración completa tras verbos de opinión.",
        head: ["Afirmativa", "Negativa"],
        rows: [
          ["I think **so**.", "I don't think **so**."],
          ["I hope **so**.", "I hope **not**."],
          ["I'm afraid **so**.", "I'm afraid **not**."],
          ["I suppose **so**.", "I suppose **not**. / I don't suppose so."]
        ],
        note: "Nunca: *I hope it* ✗ · *I think yes* ✗"
      },
      {
        type: "rule",
        title: "Do so / one / ones",
        formula: ["do so = repetir la acción (formal)", "He promised to call, but he didn't **do so**.", "one / ones = repetir un sustantivo contable", "I don't like the red shirt; I prefer the blue **one**.", "These shoes are nicer than my old **ones**."],
        note: "Con incontables no se usa *one*: *I prefer white wine to red* (no *red one*)."
      },
      {
        type: "rule",
        title: "Elipsis tras auxiliares y to",
        text: "Cortamos la frase en el auxiliar o en **to** para no repetir.",
        formula: ["auxiliar / to + ∅", "She can speak Russian, but I **can't**.", "\"Will you help?\" — \"I'd love **to**.\"", "I didn't want to go, but I **had to**.", "He's tired and **so am I**. / **Neither do I**."]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I think yes.", right: "I think **so**.", why: "Calco de «creo que sí»." },
          { wrong: "\"Do you want to come?\" \"I'd love.\"", right: "I'd love **to**.", why: "Con verbos + to, conserva el *to*." },
          { wrong: "I like it and so I do.", right: "I like it and **so do I**.", why: "So + auxiliar + sujeto." },
          { wrong: "I prefer this one information.", right: "I prefer **this** information.", why: "One no sustituye incontables." }
        ]
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "Use of English 2",
        text: "En el **open cloze** aparecen mucho huecos con *so, not, one, do, neither, nor*.",
        points: [
          "Si el hueco sigue a *think, hope, suppose, afraid*, prueba con **so / not**.",
          "Si se repite un sustantivo contable, piensa en **one / ones**.",
          "*Neither / nor* + auxiliar + sujeto para coincidir en negativo."
        ]
      },
      {
        type: "summary",
        title: "Elipsis y sustitución",
        points: [
          "I think / hope **so** · I hope / I'm afraid **not**",
          "**do so** = repetir una acción",
          "**one / ones** = repetir un contable",
          "Corta en el auxiliar o en **to**: *I'd love to*",
          "**So do I / Neither do I / Nor can she**"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "\"Will it rain tomorrow?\" — \"I hope ___.\"", options: ["not", "no", "don't", "it not"], correctAnswer: "not", explanation: "**I hope not** = espero que no." },
      { id: "e2", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "These glasses are too strong. I need weaker ___.", correctAnswer: "ones", acceptableAnswers: ["ones"], explanation: "Plural contable → **ones**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "\"Are you coming to the party?\" — \"I'd love ___, but I'm working.\"", correctAnswer: "to", acceptableAnswers: ["to"], explanation: "Elipsis tras **to**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "Residents were asked to leave, but many refused to do ___.", correctAnswer: "so", acceptableAnswers: ["so"], explanation: "**do so** sustituye *leave*." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "\"I don't eat meat.\" — \"___ do I.\"", options: ["Neither", "So", "Either", "Also"], correctAnswer: "Neither", explanation: "Coincidir en negativo: **Neither do I**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "\"Is the shop still open?\" — \"I'm afraid ___. It closed at six.\"", options: ["not", "no", "so", "isn't"], correctAnswer: "not", explanation: "**I'm afraid not** = me temo que no." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "She said she would finish the report today, and she ___.", correctAnswer: "did", acceptableAnswers: ["did", "has"], explanation: "Elipsis con auxiliar: *and she **did** (finish it)*." },
      { id: "e8", type: "context", instruction: "¿Qué respuesta es correcta?", prompt: "Te preguntan: \"Do you think the exam will be difficult?\" y crees que sí.", options: ["I think so.", "I think yes.", "I think it."], correctAnswer: "I think so.", explanation: "**I think so** es la única correcta." }
    ]
  });

  G.push({
    id: "c1-advanced-future",
    level: "C1",
    category: "grammar",
    module: "Tiempos verbales",
    order: 90,
    title: "Futuros avanzados",
    subtitle: "be to, be about to, be bound to, was going to…",
    emoji: "🔭",
    minutes: 25,
    tags: ["future", "futuro", "be to", "be about to", "be bound to", "on the verge", "future in the past", "be due to"],
    objectives: [
      "Expresar planes oficiales con **be to** y **be due to**",
      "Matizar la probabilidad con **bound to, likely to, sure to**",
      "Hablar del **futuro en el pasado**"
    ],
    slides: [
      { type: "cover", title: "Futuros avanzados", subtitle: "You are about to discover the future beyond will." },
      {
        type: "table",
        title: "Futuro inmediato y oficial",
        head: ["Estructura", "Uso", "Ejemplo"],
        rows: [
          ["be about to", "Va a pasar ya", "The film **is about to** start."],
          ["be on the verge / point of + -ing", "A punto de (gran cambio)", "They're **on the verge of** splitting up."],
          ["be to + verbo", "Plan oficial / orden", "The PM **is to visit** Spain next week."],
          ["be due to + verbo", "Horario previsto", "The train **is due to** arrive at 6."]
        ]
      },
      {
        type: "list",
        title: "Grados de probabilidad",
        items: [
          { term: "be bound to / be sure to", meaning: "seguro que", example: "Don't worry, she's bound to call." },
          { term: "be (highly) likely to", meaning: "probablemente", example: "Prices are likely to rise." },
          { term: "be unlikely to", meaning: "es poco probable", example: "He's unlikely to win." },
          { term: "there's every chance (that)", meaning: "hay muchas posibilidades", example: "There's every chance it will work." }
        ]
      },
      {
        type: "rule",
        title: "Futuro en el pasado",
        text: "Para hablar de algo que **era futuro** desde un momento pasado.",
        formula: ["was going to / was about to / would / was to", "I **was going to** call you, but I forgot.", "I **was about to** leave when she arrived.", "He **was to become** president ten years later.", "They **were to have married** in May, but…"],
        note: "*Was to have + V3* = estaba previsto, pero **no ocurrió**."
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "I'm about to finishing.", right: "I'm about to **finish**.", why: "About to + verbo base." },
          { wrong: "We're on the verge to win.", right: "We're on the verge **of winning**.", why: "Verge / point **of + -ing**." },
          { wrong: "She's likely winning.", right: "She's likely **to win**.", why: "Be likely **to** + infinitivo." }
        ]
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "En el examen",
        points: [
          "**Use of English 4**: claves BOUND, VERGE, POINT, DUE, LIKELY, ABOUT.",
          "**Listening y Reading**: *be to* aparece en noticias: *The museum is to close*.",
          "**Essay**: *This trend is likely to continue* suena más académico que *will continue*."
        ]
      },
      {
        type: "summary",
        title: "Futuros avanzados",
        points: [
          "**be about to** + verbo · **on the verge of** + -ing",
          "**be to** = plan oficial · **be due to** = horario",
          "**bound to** (seguro) · **likely / unlikely to**",
          "Futuro en el pasado: **was going to / was about to / would**",
          "**was to have + V3** = plan que no se cumplió"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Hurry up! The train is ___ leave.", options: ["about to", "bound to", "due", "on the verge to"], correctAnswer: "about to", explanation: "Algo inminente: **about to + verbo**." },
      { id: "e2", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "I'm sure they will lose the match.", keyword: "BOUND", prompt: "They ___ the match.", correctAnswer: "are bound to lose", acceptableAnswers: ["are bound to lose", "'re bound to lose"], explanation: "**be bound to** = seguro que." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "The company was very close to going bankrupt.", keyword: "VERGE", prompt: "The company was ___ bankrupt.", correctAnswer: "on the verge of going", acceptableAnswers: ["on the verge of going", "on the verge of becoming"], explanation: "**on the verge of + -ing**." },
      { id: "e4", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The President ___ the hospital tomorrow morning, a spokesperson announced.", options: ["is to open", "is opening to", "is about opening", "will to open"], correctAnswer: "is to open", explanation: "Plan oficial anunciado: **be to + verbo**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "The flight should land at 10.30, according to the schedule.", keyword: "DUE", prompt: "The flight ___ at 10.30.", correctAnswer: "is due to land", acceptableAnswers: ["is due to land", "is due to arrive"], explanation: "Horario previsto: **be due to + verbo**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ phone you last night, but I fell asleep.", options: ["was going to", "am going to", "will", "was bound to"], correctAnswer: "was going to", explanation: "Intención pasada no cumplida: **was going to**." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "It's probable that the minister will resign.", keyword: "LIKELY", prompt: "The minister ___ resign.", correctAnswer: "is likely to", acceptableAnswers: ["is likely to", "is very likely to", "is highly likely to"], explanation: "**be likely to + verbo**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "They ___ married in June, but the wedding was cancelled.", options: ["were to have got", "were to get", "are to have got", "would get"], correctAnswer: "were to have got", explanation: "Plan previsto que **no** se cumplió: **were to have + V3**." }
    ]
  });

  G.push({
    id: "c1-advanced-modals",
    level: "C1",
    category: "grammar",
    module: "Modales",
    order: 100,
    title: "Modales avanzados",
    subtitle: "needn't have, might as well, may well, be supposed to",
    emoji: "🧭",
    minutes: 25,
    tags: ["modals", "modales", "needn't have", "didn't need to", "might as well", "may well", "be supposed to", "was able to"],
    objectives: [
      "Distinguir **needn't have** y **didn't need to**",
      "Usar **might as well, may well, be supposed to**",
      "Elegir entre **could** y **was able to**"
    ],
    slides: [
      { type: "cover", title: "Modales avanzados", subtitle: "You might as well learn them now." },
      {
        type: "compare",
        title: "Needn't have / didn't need to",
        columns: [
          { label: "needn't have + V3", text: "Lo **hiciste**, pero no hacía falta.", example: "I needn't have cooked — they'd already eaten." },
          { label: "didn't need to + verbo", text: "No hacía falta (normalmente **no lo hiciste**).", example: "I didn't need to cook, so I went out." }
        ]
      },
      {
        type: "table",
        title: "Expresiones modales C1",
        head: ["Expresión", "Significado", "Ejemplo"],
        rows: [
          ["might / may as well", "ya que estamos…", "It's late. We **might as well** stay."],
          ["may / might well", "es bastante probable", "She **may well** be right."],
          ["be supposed to", "se supone que", "You'**re supposed to** wear a helmet."],
          ["had better", "más vale que", "You'**d better** hurry."],
          ["can't help + -ing", "no poder evitar", "I **can't help** laughing."]
        ]
      },
      {
        type: "compare",
        title: "Could o was able to",
        columns: [
          { label: "could", text: "Capacidad **general** en el pasado.", example: "I could swim when I was five." },
          { label: "was able to / managed to", text: "Conseguir algo **en una ocasión concreta**.", example: "The fire spread, but everyone was able to escape." }
        ],
        note: "En negativa vale cualquiera: *I couldn't / wasn't able to open it.*"
      },
      {
        type: "examples",
        title: "Más matices",
        items: [
          { en: "You **should have seen** his face!", es: "¡Tendrías que haber visto su cara! (énfasis)" },
          { en: "He **would** always **leave** his socks on the floor.", es: "would = hábito pasado (a menudo molesto)." },
          { en: "**Shall I** open the window?", es: "Ofrecimiento." },
          { en: "You **could have told** me!", es: "Reproche." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "We could catch the last bus last night.", right: "We **were able to / managed to** catch the last bus.", why: "Ocasión concreta conseguida." },
          { wrong: "You'd better to go.", right: "You'd better **go**.", why: "Had better + verbo base." },
          { wrong: "I can't help to laugh.", right: "I can't help **laughing**.", why: "Can't help + -ing." }
        ]
      },
      {
        type: "summary",
        title: "Modales avanzados",
        points: [
          "**needn't have + V3** = lo hice sin necesidad",
          "**didn't need to** = no hacía falta",
          "**might as well** = ya que estamos · **may well** = probablemente",
          "**be supposed to** = se supone que · **had better** + base",
          "**was able to / managed to** para logros concretos"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ an umbrella — it didn't rain at all and I carried it all day.", options: ["needn't have taken", "didn't need to take", "mustn't have taken", "couldn't take"], correctAnswer: "needn't have taken", explanation: "Lo llevaste sin necesidad: **needn't have + V3**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The museum was free, so we ___ buy tickets.", options: ["didn't need to", "needn't have", "mustn't", "hadn't better"], correctAnswer: "didn't need to", explanation: "No hacía falta y **no** los compraron: **didn't need to**." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "There's nothing good on TV, so let's go to bed.", keyword: "WELL", prompt: "There's nothing good on TV, so we ___ to bed.", correctAnswer: "might as well go", acceptableAnswers: ["might as well go", "may as well go"], explanation: "**might / may as well** = ya que estamos, mejor…" },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Despite the storm, the pilot succeeded in landing the plane.", keyword: "ABLE", prompt: "Despite the storm, the pilot ___ the plane.", correctAnswer: "was able to land", acceptableAnswers: ["was able to land"], explanation: "Logro concreto: **was able to**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Passengers are expected to show their tickets on request.", keyword: "SUPPOSED", prompt: "Passengers ___ their tickets on request.", correctAnswer: "are supposed to show", acceptableAnswers: ["are supposed to show"], explanation: "**be supposed to** = se supone que (obligación esperada)." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Don't throw that away — it ___ be valuable.", options: ["may well", "might as well", "had better", "needn't"], correctAnswer: "may well", explanation: "**may well** = es bastante probable que." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I couldn't help ___ when he fell off his chair.", options: ["laughing", "laugh", "to laugh", "laughed"], correctAnswer: "laughing", explanation: "**can't help + -ing**." },
      { id: "e8", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "It's a good idea for you to see a doctor about that cough.", keyword: "BETTER", prompt: "You ___ a doctor about that cough.", correctAnswer: "had better see", acceptableAnswers: ["had better see", "'d better see", "had better go and see"], explanation: "**had better + verbo base**." }
    ]
  });

  G.push({
    id: "c1-nominalisation",
    level: "C1",
    category: "grammar",
    module: "Estilo formal",
    order: 110,
    title: "Nominalización",
    subtitle: "De «they decided» a «the decision was made»",
    emoji: "🏛️",
    minutes: 20,
    tags: ["nominalisation", "nominalización", "formal", "essay", "report", "academic"],
    objectives: [
      "Convertir verbos y adjetivos en **sustantivos**",
      "Escribir con el estilo académico que piden essays y reports",
      "Reconocer la nominalización en Use of English 3 y 4"
    ],
    slides: [
      { type: "cover", title: "Nominalización", subtitle: "The use of nouns is the key to a formal style." },
      {
        type: "rule",
        title: "¿Qué es?",
        text: "Expresar acciones y cualidades con **sustantivos** en lugar de verbos. El texto suena más **objetivo, denso y formal**.",
        formula: ["verbo / adjetivo → sustantivo", "Prices **rose** sharply. → There was a sharp **rise** in prices.", "People are **aware** of… → There is growing **awareness** of…"]
      },
      {
        type: "table",
        title: "Antes y después",
        head: ["Neutral", "Nominalizado"],
        rows: [
          ["The council decided to…", "The council's **decision** to…"],
          ["Many people are unemployed.", "**Unemployment** is high."],
          ["If we invest more…", "Greater **investment** would…"],
          ["Because the bus arrived late…", "Due to the late **arrival** of the bus…"],
          ["We must reduce waste.", "A **reduction** in waste is essential."]
        ]
      },
      {
        type: "list",
        title: "Sufijos clave",
        items: [
          { term: "-tion / -sion", meaning: "decide → decision · reduce → reduction" },
          { term: "-ment", meaning: "develop → development · improve → improvement" },
          { term: "-ance / -ence", meaning: "appear → appearance · depend → dependence" },
          { term: "-ity / -ness", meaning: "able → ability · aware → awareness" },
          { term: "-al", meaning: "arrive → arrival · refuse → refusal" }
        ]
      },
      {
        type: "mistakes",
        title: "Cuidado con abusar",
        items: [
          { wrong: "The implementation of the improvement of the organisation of…", right: "Improving **how we organise**…", why: "Demasiados sustantivos encadenados dificultan la lectura." },
          { wrong: "There was a decrease of prices.", right: "There was a decrease **in** prices.", why: "rise / fall / increase / decrease **in**." }
        ]
      },
      {
        type: "tip",
        emoji: "✍️",
        title: "Frases para tu essay",
        points: [
          "*The **introduction** of a sugar tax would lead to a **reduction** in obesity.*",
          "*There has been a marked **increase** in remote working.*",
          "*The **lack** of affordable housing is a major **concern**.*"
        ]
      },
      {
        type: "summary",
        title: "Nominalización",
        points: [
          "Verbo / adjetivo → **sustantivo** para sonar formal",
          "Sufijos: **-tion, -ment, -ance, -ity, -ness, -al**",
          "**rise / fall / increase / decrease in**",
          "**Due to the** + sustantivo en lugar de *because* + oración",
          "Úsala con moderación: claridad ante todo"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "There has been a sharp ___ in the number of tourists. (INCREASE)", correctAnswer: "increase", acceptableAnswers: ["increase"], explanation: "*Increase* es verbo y sustantivo: **an increase in**." },
      { id: "e2", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The government's ___ to raise taxes was unpopular. (DECIDE)", correctAnswer: "decision", acceptableAnswers: ["decision"], explanation: "decide → **decision**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The flight was delayed due to the late ___ of the crew. (ARRIVE)", correctAnswer: "arrival", acceptableAnswers: ["arrival"], explanation: "arrive → **arrival** (-al)." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Public ___ of climate change has grown considerably. (AWARE)", correctAnswer: "awareness", acceptableAnswers: ["awareness"], explanation: "aware → **awareness** (-ness)." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción más formal.", prompt: "Elige la versión adecuada para un report.", options: ["The closure of the library has caused widespread disappointment.", "They closed the library and loads of people are upset.", "People are really sad because the library closed."], correctAnswer: "The closure of the library has caused widespread disappointment.", explanation: "Nominalización (**closure, disappointment**) = registro formal." },
      { id: "e6", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "We couldn't play because it was raining heavily.", keyword: "DUE", prompt: "The match was cancelled ___ rain.", correctAnswer: "due to heavy", acceptableAnswers: ["due to heavy", "due to the heavy"], explanation: "**due to + sustantivo** (heavy rain)." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la preposición correcta.", prompt: "Experts predict a significant fall ___ unemployment.", options: ["in", "of", "on", "at"], correctAnswer: "in", explanation: "**a fall / rise / increase / decrease in**." },
      { id: "e8", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The ___ of new technology has transformed the industry. (INTRODUCE)", correctAnswer: "introduction", acceptableAnswers: ["introduction"], explanation: "introduce → **introduction**." }
    ]
  });

  G.push({
    id: "c1-concession-contrast",
    level: "C1",
    category: "grammar",
    module: "Cohesión",
    order: 120,
    title: "Concesión y contraste",
    subtitle: "despite, albeit, much as, tired as I was…",
    emoji: "⚖️",
    minutes: 25,
    tags: ["concession", "contrast", "despite", "in spite of", "although", "albeit", "much as", "whereas", "nevertheless"],
    objectives: [
      "Usar **despite / in spite of** con la estructura correcta",
      "Incorporar **albeit, much as, adjetivo + as**",
      "Conectar ideas opuestas en el essay"
    ],
    slides: [
      { type: "cover", title: "Concesión y contraste", subtitle: "Difficult as it may seem, it's easy once you see the patterns." },
      {
        type: "table",
        title: "¿Qué va detrás?",
        head: ["Conector", "Estructura"],
        rows: [
          ["although / even though / though", "+ oración"],
          ["despite / in spite of", "+ sustantivo / -ing"],
          ["despite the fact that", "+ oración"],
          ["however / nevertheless / nonetheless", "Nueva oración, con coma"],
          ["whereas / while", "+ oración (contraste entre dos cosas)"]
        ]
      },
      {
        type: "examples",
        title: "La misma idea, cinco formas",
        items: [
          { en: "**Although** it was raining, we went out." },
          { en: "**Despite** the rain, we went out." },
          { en: "**In spite of** it raining, we went out." },
          { en: "**Despite the fact that** it was raining, we went out." },
          { en: "It was raining. **Nevertheless**, we went out." }
        ]
      },
      {
        type: "list",
        title: "Nivel C1",
        items: [
          { term: "adjetivo / adverbio + as / though + sujeto + verbo", meaning: "por muy… que", example: "Tired as I was, I kept working." },
          { term: "much as + oración", meaning: "por mucho que", example: "Much as I like him, I can't trust him." },
          { term: "albeit + adjetivo / adverbio", meaning: "aunque (formal)", example: "It was a success, albeit a limited one." },
          { term: "even so / all the same", meaning: "aun así", example: "It's expensive. Even so, it's worth it." },
          { term: "notwithstanding", meaning: "no obstante (muy formal)", example: "Notwithstanding these problems, the project succeeded." }
        ]
      },
      {
        type: "mistakes",
        title: "Errores típicos",
        items: [
          { wrong: "Despite of the rain…", right: "**Despite** the rain… / **In spite of** the rain…", why: "Nunca *despite of*." },
          { wrong: "Despite it was late, …", right: "**Although** it was late / **Despite the fact that** it was late…", why: "Despite no va seguido de oración." },
          { wrong: "Although he is rich, but he is unhappy.", right: "Although he is rich, he is unhappy.", why: "No combines although con but." },
          { wrong: "As tired as I was, I worked.", right: "**Tired as** I was, I worked.", why: "Sin el primer *as*." }
        ]
      },
      {
        type: "tip",
        emoji: "✍️",
        title: "En el essay",
        text: "El essay del C1 te pide **comparar** dos opciones: los conectores de contraste son imprescindibles.",
        points: [
          "*While* public transport is cheaper, cycling is healthier.",
          "*Admittedly*, the cost is high. *Nevertheless*, the benefits outweigh it.",
          "*Much as* I understand the concerns, I believe…"
        ]
      },
      {
        type: "summary",
        title: "Contraste y concesión",
        points: [
          "**although / even though** + oración",
          "**despite / in spite of** + sustantivo / -ing (nunca *despite of*)",
          "**however / nevertheless** + coma, nueva oración",
          "**Adj + as + sujeto + verbo**: *Strange as it seems…*",
          "**much as** = por mucho que · **albeit** = aunque (formal)"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ feeling ill, she went to work.", options: ["Despite", "Although", "However", "Despite of"], correctAnswer: "Despite", explanation: "**Despite + -ing**." },
      { id: "e2", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Although the hotel was expensive, it was very disappointing.", keyword: "SPITE", prompt: "In ___ expensive, the hotel was very disappointing.", correctAnswer: "spite of being", acceptableAnswers: ["spite of being"], explanation: "**In spite of + -ing**." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Although I was exhausted, I couldn't sleep.", keyword: "AS", prompt: "___ was, I couldn't sleep.", correctAnswer: "Exhausted as I", acceptableAnswers: ["exhausted as i"], explanation: "**Adjetivo + as + sujeto + verbo**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "The plan was successful, ___ only partially.", correctAnswer: "albeit", acceptableAnswers: ["albeit", "although", "though"], explanation: "**albeit** + adverbio/adjetivo = aunque." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ I admire her talent, I find her difficult to work with.", options: ["Much as", "Despite", "However", "In spite"], correctAnswer: "Much as", explanation: "**Much as** + oración = por mucho que." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The first option is cheaper, ___ the second is more reliable.", options: ["whereas", "despite", "nevertheless", "albeit"], correctAnswer: "whereas", explanation: "Contraste entre dos cosas en la misma frase: **whereas**." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "She didn't have any experience, but she got the job.", keyword: "FACT", prompt: "Despite ___ have any experience, she got the job.", correctAnswer: "the fact that she didn't", acceptableAnswers: ["the fact that she didn't", "the fact that she did not", "the fact she didn't"], explanation: "**Despite the fact that + oración**." },
      { id: "e8", type: "context", instruction: "¿Qué frase es correcta?", prompt: "Elige la frase sin errores.", options: ["Despite the traffic, we arrived on time.", "Despite of the traffic, we arrived on time.", "Although the traffic, we arrived on time."], correctAnswer: "Despite the traffic, we arrived on time.", explanation: "**Despite + sustantivo**, sin *of*." }
    ]
  });
})();
