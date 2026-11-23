(function () {
  "use strict";

  const G = (window.C1_GUIDES = window.C1_GUIDES || []);

  G.push({
    id: "b1-present-simple-continuous",
    level: "B1",
    category: "grammar",
    module: "Tiempos verbales",
    order: 10,
    title: "Present simple vs present continuous",
    subtitle: "Rutinas, verdades y acciones en curso",
    emoji: "🕐",
    minutes: 15,
    tags: ["present simple", "present continuous", "state verbs", "presente"],
    objectives: ["Distinguir rutina y acción en curso", "Usar el present continuous para planes", "Reconocer los verbos de estado"],
    slides: [
      { type: "cover", title: "Present simple vs continuous", subtitle: "I usually study at night, but today I'm studying in the morning." },
      { type: "compare", title: "La diferencia", columns: [
        { label: "Present simple", text: "Rutinas, hábitos, verdades generales, horarios.", example: "Water boils at 100°C. The train leaves at 6." },
        { label: "Present continuous", text: "Acciones **ahora** o temporales, cambios, **planes** de futuro.", example: "I'm staying with my aunt this month." }
      ] },
      { type: "table", title: "Palabras pista", head: ["Simple", "Continuous"], rows: [
        ["always, usually, often, never", "now, at the moment, currently"],
        ["every day, on Mondays", "this week, these days, today"],
        ["once a month", "Look! / Listen!"]
      ] },
      { type: "rule", title: "Verbos de estado", text: "Expresan estados, no acciones: normalmente **no** van en continuo.", formula: ["know, like, love, hate, want, need, believe, own, seem, understand", "I **know** the answer. ✓ · I'm knowing ✗", "Cambian de sentido: I **think** so (opino) / I'm **thinking** about it (pienso)"] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "I am going to the gym every day.", right: "I **go** to the gym every day.", why: "Rutina → simple." },
        { wrong: "She don't like fish.", right: "She **doesn't** like fish.", why: "3.ª persona: does / doesn't." },
        { wrong: "I'm wanting a coffee.", right: "I **want** a coffee.", why: "Verbo de estado." }
      ] },
      { type: "summary", title: "Presente", points: ["Simple: rutinas, verdades, horarios", "Continuous: ahora, temporal, planes", "Verbos de estado → simple", "he / she / it + **-s**, **doesn't**"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Shh! The baby ___.", options: ["is sleeping", "sleeps", "sleep"], correctAnswer: "is sleeping", explanation: "Acción ahora → **continuous**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "My father ___ coffee every morning.", options: ["drinks", "is drinking", "drink"], correctAnswer: "drinks", explanation: "Rutina → **simple** con -s." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ what you mean.", options: ["understand", "am understanding", "understands"], correctAnswer: "understand", explanation: "Verbo de estado → **simple**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "We ___ (meet) our new manager tomorrow at 10.", correctAnswer: "are meeting", acceptableAnswers: ["are meeting", "'re meeting"], explanation: "Plan acordado → **present continuous**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "The film ___ (start) at 8.30 tonight.", correctAnswer: "starts", acceptableAnswers: ["starts"], explanation: "Horario → **present simple**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "She ___ (not / eat) meat.", correctAnswer: "doesn't eat", acceptableAnswers: ["doesn't eat", "does not eat"], explanation: "Negativa 3.ª persona: **doesn't + verbo base**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Prices ___ every month at the moment.", options: ["are rising", "rise", "rises"], correctAnswer: "are rising", explanation: "Cambio en curso → **continuous**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "What ___ for a living?", options: ["do you do", "are you doing", "you do"], correctAnswer: "do you do", explanation: "Profesión (permanente) → **What do you do?**" }
    ]
  });

  G.push({
    id: "b1-past-tenses",
    level: "B1",
    category: "grammar",
    module: "Tiempos verbales",
    order: 20,
    title: "Past simple vs past continuous",
    subtitle: "Contar historias: acción y escena",
    emoji: "📽️",
    minutes: 15,
    tags: ["past simple", "past continuous", "when", "while", "pasado"],
    objectives: ["Narrar con past simple y past continuous", "Usar **when** y **while**", "Repasar verbos irregulares clave"],
    slides: [
      { type: "cover", title: "Past simple vs continuous", subtitle: "I was walking home when it started to rain." },
      { type: "compare", title: "La diferencia", columns: [
        { label: "Past simple", text: "Acciones **terminadas**, una tras otra.", example: "I got up, had a shower and left." },
        { label: "Past continuous", text: "Acción **en curso** en un momento pasado (escena de fondo).", example: "At 8 pm I was having dinner." }
      ] },
      { type: "rule", title: "When y while", formula: ["Acción larga (continuous) + acción corta (simple)", "I **was cooking when** the phone **rang**.", "**While** I **was cooking**, the phone **rang**.", "Dos acciones largas: **While** I was cooking, he was watching TV."] },
      { type: "table", title: "Irregulares que más se fallan", head: ["Base", "Pasado", "Participio"], rows: [
        ["bring", "brought", "brought"], ["catch", "caught", "caught"], ["choose", "chose", "chosen"], ["fall", "fell", "fallen"], ["lie (tumbarse)", "lay", "lain"], ["lay (poner)", "laid", "laid"]
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "I didn't went.", right: "I didn't **go**.", why: "Tras did/didn't, forma base." },
        { wrong: "When I arrived, she was cook.", right: "…she was **cooking**.", why: "was + **-ing**." },
        { wrong: "I was knowing him.", right: "I **knew** him.", why: "Verbo de estado." }
      ] },
      { type: "summary", title: "Pasado", points: ["Simple: acciones terminadas", "Continuous: acción en curso / escena", "**when** + acción corta · **while** + acción larga", "didn't + **forma base**"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ TV when the lights went out.", options: ["was watching", "watched", "am watching"], correctAnswer: "was watching", explanation: "Acción larga interrumpida → **past continuous**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "She ___ her leg while she was skiing.", options: ["broke", "was breaking", "breaks"], correctAnswer: "broke", explanation: "Acción corta → **past simple**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "We ___ (not / see) the match last night.", correctAnswer: "didn't see", acceptableAnswers: ["didn't see", "did not see"], explanation: "**didn't + forma base**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "He ___ (bring) some flowers to the party.", correctAnswer: "brought", acceptableAnswers: ["brought"], explanation: "Irregular: bring → **brought**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "___ I was waiting for the bus, I met an old friend.", correctAnswer: "While", acceptableAnswers: ["while", "as"], explanation: "**While** + acción larga." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "At 10 o'clock last night, I ___ in bed reading.", options: ["was lying", "lay", "laid"], correctAnswer: "was lying", explanation: "En curso a una hora concreta → **was lying**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "They ___ (catch) the last train home.", correctAnswer: "caught", acceptableAnswers: ["caught"], explanation: "catch → **caught**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "What ___ when I called you?", options: ["were you doing", "did you do", "you were doing"], correctAnswer: "were you doing", explanation: "En curso cuando llamé → **were you doing**." }
    ]
  });

  G.push({
    id: "b1-present-perfect-past-simple",
    level: "B1",
    category: "grammar",
    module: "Tiempos verbales",
    order: 30,
    title: "Present perfect vs past simple",
    subtitle: "Have you ever…? / When did you…?",
    emoji: "🧳",
    minutes: 15,
    tags: ["present perfect", "past simple", "ever", "never", "been", "gone"],
    objectives: ["Elegir entre experiencia y momento concreto", "Usar **ever, never, just, already, yet**", "Distinguir **been** y **gone**"],
    slides: [
      { type: "cover", title: "Present perfect vs past simple", subtitle: "I've been to London three times. I went last in 2022." },
      { type: "compare", title: "La regla de oro", columns: [
        { label: "Present perfect", text: "Experiencias **sin fecha**, resultado presente, periodo no terminado.", example: "I've lost my keys. (ahora no las tengo)" },
        { label: "Past simple", text: "Momento **concreto** y terminado en el pasado.", example: "I lost my keys yesterday." }
      ] },
      { type: "table", title: "Palabras pista", head: ["Present perfect", "Past simple"], rows: [
        ["ever, never, already, yet, just", "yesterday, last week, ago"],
        ["this week (no terminada), so far", "in 2010, when I was a child"],
        ["for / since (hasta ahora)", "When…? (pregunta por el momento)"]
      ] },
      { type: "compare", title: "Been o gone", columns: [
        { label: "has been to", text: "Fue **y volvió**.", example: "She's been to Japan. (ya está aquí)" },
        { label: "has gone to", text: "Fue y **sigue allí**.", example: "She's gone to Japan. (no está)" }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "I have seen him yesterday.", right: "I **saw** him yesterday.", why: "Fecha concreta → past simple." },
        { wrong: "Did you ever go to Paris?", right: "**Have you ever been** to Paris?", why: "Experiencia → present perfect." },
        { wrong: "When have you arrived?", right: "When **did** you arrive?", why: "*When* → past simple." }
      ] },
      { type: "summary", title: "Present perfect vs past simple", points: ["Experiencia / resultado → **have + V3**", "Fecha o momento concreto → **past simple**", "**When…?** siempre con past simple", "**been** (fue y volvió) vs **gone** (sigue allí)"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ to Australia?", options: ["Have you ever been", "Did you ever go", "Have you ever gone"], correctAnswer: "Have you ever been", explanation: "Experiencia → **Have you ever been**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ my first car in 2015.", options: ["bought", "have bought", "had bought"], correctAnswer: "bought", explanation: "Fecha concreta → **past simple**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Tom isn't here. He ___ to the supermarket.", options: ["has gone", "has been", "went to"], correctAnswer: "has gone", explanation: "Fue y **sigue allí** → **has gone**." },
      { id: "e4", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "When ___ working here?", options: ["did you start", "have you started", "you started"], correctAnswer: "did you start", explanation: "*When* pregunta por un momento concreto → **past simple**: *When did you start…?*" },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "I ___ (just / finish) my homework.", correctAnswer: "have just finished", acceptableAnswers: ["have just finished", "'ve just finished"], explanation: "**have just + V3**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "She ___ three cups of coffee so far today.", options: ["has had", "had", "has"], correctAnswer: "has had", explanation: "*so far today* (periodo no terminado) → **present perfect**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "We moved here two years ___.", options: ["ago", "since", "for"], correctAnswer: "ago", explanation: "**ago** con past simple." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I've never ___ such a good pizza.", options: ["eaten", "ate", "eat"], correctAnswer: "eaten", explanation: "have + **participio**: eat → ate → **eaten**." }
    ]
  });

  G.push({
    id: "b1-future-forms",
    level: "B1",
    category: "grammar",
    module: "Tiempos verbales",
    order: 40,
    title: "Will, going to y presente continuo",
    subtitle: "Tres formas de hablar del futuro",
    emoji: "📅",
    minutes: 15,
    tags: ["future", "will", "going to", "present continuous", "futuro"],
    objectives: ["Distinguir decisión espontánea, intención y plan", "Hacer predicciones con **will** y **going to**", "Usar el presente para horarios"],
    slides: [
      { type: "cover", title: "El futuro en inglés", subtitle: "I'm going to learn this. I think I'll remember it." },
      { type: "table", title: "¿Qué forma uso?", head: ["Forma", "Uso", "Ejemplo"], rows: [
        ["will", "decisión espontánea, promesa, opinión", "I'll help you. I think it'll rain."],
        ["going to", "intención, predicción con pruebas", "Look at those clouds! It's going to rain."],
        ["present continuous", "plan acordado (con hora/lugar)", "I'm meeting Ana at 6."],
        ["present simple", "horarios", "The plane lands at 9."]
      ] },
      { type: "examples", title: "En contexto", items: [
        { en: "\"The phone's ringing.\" — \"**I'll get** it!\"", es: "Decisión en el momento." },
        { en: "I**'m going to** study medicine.", es: "Intención ya decidida." },
        { en: "We**'re flying** to Rome on Friday.", es: "Plan con billetes comprados." }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "I will go to the dentist tomorrow at 5 (cita).", right: "I'**m going** to the dentist tomorrow at 5.", why: "Cita acordada → present continuous." },
        { wrong: "When I will finish, I'll call you.", right: "When I **finish**, I'll call you.", why: "Tras when / if / as soon as → presente." },
        { wrong: "I go to help you.", right: "I'**ll** help you.", why: "Ofrecimiento → will." }
      ] },
      { type: "summary", title: "Futuro", points: ["**will**: decisión espontánea, promesa, opinión", "**going to**: intención o predicción con pruebas", "**present continuous**: planes acordados", "when / as soon as + **presente**"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "\"I'm cold.\" — \"I ___ the window.\"", options: ["'ll close", "'m closing", "close"], correctAnswer: "'ll close", explanation: "Decisión espontánea → **will**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Watch out! You ___ fall!", options: ["'re going to", "will", "are"], correctAnswer: "'re going to", explanation: "Predicción con pruebas → **going to**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I ___ my grandparents this weekend. I've already booked the train.", options: ["'m visiting", "'ll visit", "visit"], correctAnswer: "'m visiting", explanation: "Plan acordado → **present continuous**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "I'll text you as soon as I ___ (arrive).", correctAnswer: "arrive", acceptableAnswers: ["arrive"], explanation: "Tras **as soon as** → presente." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "The concert ___ (begin) at 9 pm.", correctAnswer: "begins", acceptableAnswers: ["begins", "starts"], explanation: "Horario → **present simple**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I think Spain ___ the match.", options: ["will win", "is winning", "wins"], correctAnswer: "will win", explanation: "Opinión (*I think*) → **will**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I promise I ___ tell anyone.", options: ["won't", "'m not going", "don't"], correctAnswer: "won't", explanation: "Promesa → **won't**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "She ___ a new job next year — she's already decided.", options: ["is going to look for", "will look for", "looks for"], correctAnswer: "is going to look for", explanation: "Intención decidida → **going to**." }
    ]
  });

  G.push({
    id: "b1-comparatives",
    level: "B1",
    category: "grammar",
    module: "Adjetivos",
    order: 50,
    title: "Comparativos y superlativos",
    subtitle: "bigger, more expensive, the best, as… as",
    emoji: "📏",
    minutes: 15,
    tags: ["comparatives", "superlatives", "comparativos", "as as", "much", "far"],
    objectives: ["Formar comparativos y superlativos", "Comparar con **as… as** y **not as… as**", "Matizar con **much, far, slightly, a bit**"],
    slides: [
      { type: "cover", title: "Comparativos", subtitle: "Learning English is getting easier and easier." },
      { type: "table", title: "Cómo se forman", head: ["Adjetivo", "Comparativo", "Superlativo"], rows: [
        ["1 sílaba: cheap", "cheap**er**", "the cheap**est**"], ["acabado en -y: easy", "eas**ier**", "the eas**iest**"], ["2+ sílabas: expensive", "**more** expensive", "the **most** expensive"], ["good / bad / far", "better / worse / further", "the best / the worst / the furthest"]
      ] },
      { type: "list", title: "Más estructuras", items: [
        { term: "as + adj + as / not as… as", meaning: "tan… como / no tan… como", example: "It's not as cold as yesterday." },
        { term: "much / far / a lot + comparativo", meaning: "mucho más", example: "It's far cheaper online." },
        { term: "slightly / a bit + comparativo", meaning: "un poco más", example: "She's slightly taller than me." },
        { term: "comparativo + and + comparativo", meaning: "cada vez más", example: "It's getting hotter and hotter." }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "more cheaper", right: "**cheaper**", why: "No dupliques." },
        { wrong: "She is taller that me.", right: "taller **than** me", why: "than, no *that*." },
        { wrong: "the most good", right: "**the best**", why: "Irregular." },
        { wrong: "as tall than", right: "as tall **as**", why: "as… as." }
      ] },
      { type: "summary", title: "Comparativos", points: ["Corto: **-er / -est**", "Largo: **more / most**", "good → better → best", "**as… as** · **much / far** + comparativo", "**than**, nunca *that*"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "This exercise is ___ than the last one.", options: ["easier", "more easy", "easyer"], correctAnswer: "easier", explanation: "-y → **-ier**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It was the ___ day of my life.", options: ["worst", "baddest", "most bad"], correctAnswer: "worst", explanation: "bad → worse → **the worst**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "My new flat isn't as big ___ my old one.", correctAnswer: "as", acceptableAnswers: ["as"], explanation: "**not as… as**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del adjetivo entre paréntesis.", prompt: "This is the ___ (interesting) book I've ever read.", correctAnswer: "most interesting", acceptableAnswers: ["most interesting"], explanation: "Largo → **the most**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Trains are cheaper than planes.", keyword: "EXPENSIVE", prompt: "Trains are ___ planes.", correctAnswer: "less expensive than", acceptableAnswers: ["less expensive than", "not as expensive as", "not so expensive as"], explanation: "**less… than** / **not as… as**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The city is getting ___ every year.", options: ["busier and busier", "more and more busy", "busiest and busiest"], correctAnswer: "busier and busier", explanation: "**comparativo + and + comparativo**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Living in London is ___ more expensive than living in Leeds.", options: ["far", "very", "so"], correctAnswer: "far", explanation: "**far / much** + comparativo (nunca *very*)." },
      { id: "e8", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "She runs faster ___ her brother.", correctAnswer: "than", acceptableAnswers: ["than"], explanation: "**than**." }
    ]
  });

  G.push({
    id: "b1-modals-obligation",
    level: "B1",
    category: "grammar",
    module: "Modales",
    order: 60,
    title: "Must, have to, should, can",
    subtitle: "Obligación, prohibición, consejo y permiso",
    emoji: "🚦",
    minutes: 15,
    tags: ["modals", "must", "have to", "should", "mustn't", "don't have to", "modales"],
    objectives: ["Distinguir **mustn't** y **don't have to**", "Dar consejos con **should / ought to**", "Expresar permiso y capacidad con **can / could**"],
    slides: [
      { type: "cover", title: "Modales básicos", subtitle: "You don't have to memorise everything. But you mustn't skip this one." },
      { type: "table", title: "Cuál es cuál", head: ["Modal", "Significado", "Ejemplo"], rows: [
        ["must", "obligación (personal / normas escritas)", "I **must** call Mum."],
        ["have to", "obligación externa", "I **have to** wear a uniform."],
        ["mustn't", "**prohibido**", "You **mustn't** smoke here."],
        ["don't have to", "**no es necesario**", "You **don't have to** come."],
        ["should / ought to", "consejo", "You **should** see a doctor."],
        ["can / could", "permiso, capacidad", "**Can** I sit here? I **could** swim at 5."]
      ] },
      { type: "compare", title: "¡Cuidado!", columns: [
        { label: "mustn't", text: "No puedes: está **prohibido**.", example: "You mustn't use your phone in the exam." },
        { label: "don't have to", text: "No hace falta, pero **puedes**.", example: "You don't have to bring food; there's a café." }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "You must to go.", right: "You must **go**.", why: "Modal + verbo base, sin to." },
        { wrong: "I musted work yesterday.", right: "I **had to** work yesterday.", why: "*Must* no tiene pasado: had to." },
        { wrong: "She cans swim.", right: "She **can** swim.", why: "Los modales no llevan -s." }
      ] },
      { type: "summary", title: "Modales", points: ["**must / have to** = obligación", "**mustn't** = prohibido", "**don't have to** = no es necesario", "**should** = consejo", "Pasado de must → **had to**"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "You ___ park here. It's a fire exit.", options: ["mustn't", "don't have to", "shouldn't to"], correctAnswer: "mustn't", explanation: "Prohibición → **mustn't**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It's Saturday, so I ___ get up early.", options: ["don't have to", "mustn't", "can't"], correctAnswer: "don't have to", explanation: "No es necesario → **don't have to**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "You look tired. You ___ go to bed earlier.", options: ["should", "must to", "have"], correctAnswer: "should", explanation: "Consejo → **should**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta.", prompt: "Yesterday I ___ (must) stay late at work.", correctAnswer: "had to", acceptableAnswers: ["had to"], explanation: "Pasado de must → **had to**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "It isn't necessary to book a table.", keyword: "HAVE", prompt: "You ___ a table.", correctAnswer: "don't have to book", acceptableAnswers: ["don't have to book", "do not have to book", "don't have to reserve"], explanation: "**don't have to** = no es necesario." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ I borrow your pen?", options: ["Can", "Must", "Should"], correctAnswer: "Can", explanation: "Pedir permiso → **Can / Could I…?**" },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "You ought ___ apologise to her.", correctAnswer: "to", acceptableAnswers: ["to"], explanation: "**ought to** + verbo base." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "When I was five, I ___ already read.", options: ["could", "can", "must"], correctAnswer: "could", explanation: "Capacidad pasada → **could**." }
    ]
  });

  G.push({
    id: "b1-first-second-conditional",
    level: "B1",
    category: "grammar",
    module: "Condicionales",
    order: 70,
    title: "Condicionales 0, 1 y 2",
    subtitle: "Reales, probables e imaginarias",
    emoji: "❓",
    minutes: 15,
    tags: ["conditionals", "zero", "first", "second", "condicionales", "if"],
    objectives: ["Formar condicionales 0, 1 y 2", "Elegir entre situación real e imaginaria", "Usar **unless** y **if I were you**"],
    slides: [
      { type: "cover", title: "Condicionales 0, 1 y 2", subtitle: "If you study this, you'll understand it. If I were you, I'd start now." },
      { type: "table", title: "Las tres primeras", head: ["Tipo", "Estructura", "Uso"], rows: [
        ["Zero", "If + presente, presente", "verdades: If you heat ice, it melts."],
        ["1.º", "If + presente, will", "futuro probable: If it rains, I'll stay in."],
        ["2.º", "If + pasado, would", "imaginario: If I won the lottery, I'd travel."]
      ] },
      { type: "examples", title: "Expresiones útiles", items: [
        { en: "**If I were you**, I'd accept the offer.", es: "Dar consejos (were para todas las personas)." },
        { en: "**Unless** you hurry, you'll miss the bus.", es: "unless = if not." },
        { en: "What **would** you do **if** you lost your job?", es: "Situación hipotética." }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "If it will rain, …", right: "If it **rains**, …", why: "Nunca will tras if." },
        { wrong: "If I would have money, …", right: "If I **had** money, …", why: "Nunca would tras if." },
        { wrong: "Unless you don't study, …", right: "Unless you **study**, …", why: "unless ya es negativo." }
      ] },
      { type: "summary", title: "Condicionales", points: ["0: If + presente, presente", "1: If + presente, **will**", "2: If + pasado, **would**", "**If I were you, I'd…**", "**unless** = if not"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If you ___ water to 100 degrees, it boils.", options: ["heat", "will heat", "heated"], correctAnswer: "heat", explanation: "Verdad general → **zero conditional**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If I see Tom, I ___ him your message.", options: ["'ll give", "'d give", "give"], correctAnswer: "'ll give", explanation: "Probable → **will**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If I ___ rich, I'd buy a house by the sea.", options: ["were", "am", "will be"], correctAnswer: "were", explanation: "Imaginario → **pasado** (were)." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta del verbo entre paréntesis.", prompt: "If it ___ (not / rain) tomorrow, we'll go to the beach.", correctAnswer: "doesn't rain", acceptableAnswers: ["doesn't rain", "does not rain"], explanation: "Tras if → **presente**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "My advice is to talk to your boss.", keyword: "WERE", prompt: "If I ___ talk to your boss.", correctAnswer: "were you I would", acceptableAnswers: ["were you i would", "were you i'd", "were you, i would", "were you, i'd"], explanation: "**If I were you, I would…**" },
      { id: "e6", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "We'll be late ___ we leave now.", correctAnswer: "unless", acceptableAnswers: ["unless"], explanation: "**unless** = if not." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "What would you do if you ___ a wallet in the street?", options: ["found", "find", "will find"], correctAnswer: "found", explanation: "Hipotético → **pasado**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "If you don't hurry, you ___ the train.", options: ["'ll miss", "'d miss", "missed"], correctAnswer: "'ll miss", explanation: "Primer condicional → **will**." }
    ]
  });

  G.push({
    id: "b1-quantifiers",
    level: "B1",
    category: "grammar",
    module: "Determinantes",
    order: 80,
    title: "Contables, incontables y cuantificadores",
    subtitle: "much, many, a few, a little, some, any",
    emoji: "🧮",
    minutes: 15,
    tags: ["countable", "uncountable", "much", "many", "few", "little", "some", "any", "cuantificadores"],
    objectives: ["Distinguir contables e incontables", "Usar **much / many / a lot of**", "Matizar con **a few / few / a little / little**"],
    slides: [
      { type: "cover", title: "Cuantificadores", subtitle: "How much information do you need? Just a little." },
      { type: "table", title: "Con qué va cada uno", head: ["Contables (plural)", "Incontables"], rows: [
        ["many, (a) few, several", "much, (a) little"], ["How many…?", "How much…?"], ["a lot of / lots of / some / any", "a lot of / lots of / some / any"]
      ], note: "Incontables típicos que en español son contables: **advice, information, news, furniture, luggage, equipment, research**." },
      { type: "compare", title: "A few / few", columns: [
        { label: "a few / a little", text: "**Algo** (visión positiva).", example: "I have a few friends here. (tengo algunos)" },
        { label: "few / little", text: "**Poco**, casi nada (visión negativa).", example: "Few people came. (casi nadie)" }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "an advice / advices", right: "**some advice** / **a piece of advice**", why: "advice es incontable." },
        { wrong: "How many money…?", right: "How **much** money…?", why: "money es incontable." },
        { wrong: "The news are good.", right: "The news **is** good.", why: "news es incontable (singular)." },
        { wrong: "I have much friends.", right: "I have **a lot of / many** friends.", why: "friends es contable." }
      ] },
      { type: "summary", title: "Cuantificadores", points: ["**many / few** + contables", "**much / little** + incontables", "a few / a little = algo · few / little = casi nada", "advice, information, news, furniture → incontables", "Afirmativas: mejor **a lot of** que *much*"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "How ___ luggage are you taking?", options: ["much", "many", "few"], correctAnswer: "much", explanation: "luggage es incontable → **much**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Can you give me some ___?", options: ["advice", "advices", "an advice"], correctAnswer: "advice", explanation: "**advice** es incontable." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Hurry up! We have very ___ time.", options: ["little", "few", "a few"], correctAnswer: "little", explanation: "Incontable + negativo → **little**." },
      { id: "e4", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I've got ___ ideas for the project. Let's discuss them.", options: ["a few", "a little", "much"], correctAnswer: "a few", explanation: "Contable + positivo → **a few**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe is o are.", prompt: "The news ___ really surprising.", correctAnswer: "is", acceptableAnswers: ["is"], explanation: "*news* es incontable → **is**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "How ___ people came to the meeting?", correctAnswer: "many", acceptableAnswers: ["many"], explanation: "people (contable) → **many**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "We need some new ___ for the living room.", options: ["furniture", "furnitures", "a furniture"], correctAnswer: "furniture", explanation: "**furniture** es incontable." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Very ___ students passed the exam, so the teacher was disappointed.", options: ["few", "a few", "little"], correctAnswer: "few", explanation: "Contable + negativo → **few**." }
    ]
  });

  G.push({
    id: "b1-linking-words",
    level: "B1",
    category: "grammar",
    module: "Cohesión",
    order: 90,
    title: "Conectores básicos",
    subtitle: "because, so, although, however, in addition…",
    emoji: "🔌",
    minutes: 15,
    tags: ["linking words", "conectores", "because", "so", "although", "however", "but"],
    objectives: ["Unir ideas con causa, consecuencia, contraste y adición", "Colocar bien **however** y **although**", "Preparar la base para los conectores C1"],
    slides: [
      { type: "cover", title: "Conectores básicos", subtitle: "Although they're simple, they make a big difference." },
      { type: "table", title: "Por función", head: ["Función", "Conectores"], rows: [
        ["Adición", "and, also, too, as well, in addition, moreover"],
        ["Contraste", "but, although, however, on the other hand"],
        ["Causa", "because, because of, since, as"],
        ["Consecuencia", "so, therefore, as a result"],
        ["Finalidad", "to, in order to, so that"]
      ] },
      { type: "examples", title: "Dónde se colocan", items: [
        { en: "It was cold, **but** we went out.", es: "but une dos oraciones." },
        { en: "**Although** it was cold, we went out.", es: "although + oración." },
        { en: "It was cold. **However**, we went out.", es: "however empieza oración, con coma." },
        { en: "We stayed in **because of** the rain.", es: "because of + sustantivo." }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "Although it was late, but we stayed.", right: "Although it was late, we stayed.", why: "No uses although y but juntos." },
        { wrong: "because the rain", right: "because **of** the rain / because **it rained**", why: "because + oración; because of + sustantivo." },
        { wrong: "I went there for buy bread.", right: "I went there **to** buy bread.", why: "Finalidad: to + verbo." }
      ] },
      { type: "summary", title: "Conectores", points: ["but / although / however (contraste)", "because + oración · because of + sustantivo", "so / therefore (consecuencia)", "to / in order to (finalidad)", "Nunca although + but"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The flight was cancelled ___ the storm.", options: ["because of", "because", "so"], correctAnswer: "because of", explanation: "+ sustantivo → **because of**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ he was ill, he went to work.", options: ["Although", "However", "But"], correctAnswer: "Although", explanation: "**Although** + oración." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The hotel was lovely. ___, the food was terrible.", options: ["However", "Although", "Because"], correctAnswer: "However", explanation: "**However,** al inicio de oración." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I was tired, ___ I went to bed early.", correctAnswer: "so", acceptableAnswers: ["so"], explanation: "Consecuencia → **so**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "She saved money in order ___ buy a car.", correctAnswer: "to", acceptableAnswers: ["to"], explanation: "**in order to** + verbo." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "He speaks French. ___, he's learning German.", options: ["In addition", "However", "Because"], correctAnswer: "In addition", explanation: "Adición → **In addition**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "We stayed at home ___ it was raining.", correctAnswer: "because", acceptableAnswers: ["because", "as", "since"], explanation: "+ oración → **because / as / since**." },
      { id: "e8", type: "context", instruction: "¿Qué frase es correcta?", prompt: "Elige la frase sin errores.", options: ["Although it was expensive, we bought it.", "Although it was expensive, but we bought it.", "Although of the price, we bought it."], correctAnswer: "Although it was expensive, we bought it.", explanation: "**Although + oración**, sin *but*." }
    ]
  });

  G.push({
    id: "b1-passive-basics",
    level: "B1",
    category: "grammar",
    module: "Pasiva",
    order: 100,
    title: "Pasiva básica",
    subtitle: "is made, was built, will be sent",
    emoji: "🏭",
    minutes: 15,
    tags: ["passive", "pasiva", "is made", "was built", "by"],
    objectives: ["Formar la pasiva en presente y pasado", "Saber cuándo incluir **by**", "Pasar de activa a pasiva"],
    slides: [
      { type: "cover", title: "Pasiva básica", subtitle: "English is spoken all over the world." },
      { type: "rule", title: "La fórmula", text: "El objeto pasa a ser el sujeto; lo importante es la acción, no quién la hace.", formula: ["sujeto + be + V3 (+ by…)", "They make cars here. → Cars **are made** here.", "Someone stole my bike. → My bike **was stolen**.", "Picasso painted it. → It **was painted by** Picasso."] },
      { type: "table", title: "Presente y pasado", head: ["Tiempo", "Ejemplo"], rows: [
        ["Presente", "Rice **is grown** in Asia."], ["Pasado", "The letter **was sent** yesterday."], ["Futuro", "The results **will be published** tomorrow."], ["Modal", "It **can be done**."]
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "The house was build in 1990.", right: "…was **built**.", why: "be + participio." },
        { wrong: "English speaks in Canada.", right: "English **is spoken**.", why: "Falta be + V3." },
        { wrong: "It was made by someone.", right: "It was made.", why: "Si el agente no importa, omite by." }
      ] },
      { type: "summary", title: "Pasiva", points: ["**be + V3**", "Presente: is/are + V3 · pasado: was/were + V3", "**by** solo si el agente importa", "Útil en descripciones de procesos"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Coffee ___ in Colombia.", options: ["is grown", "grows by", "is grow"], correctAnswer: "is grown", explanation: "Presente pasivo: **is + V3**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The Mona Lisa ___ by Leonardo da Vinci.", options: ["was painted", "painted", "is painting"], correctAnswer: "was painted", explanation: "Pasado pasivo + agente relevante." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma pasiva del verbo entre paréntesis.", prompt: "My car ___ (steal) last night.", correctAnswer: "was stolen", acceptableAnswers: ["was stolen"], explanation: "**was + V3** (steal → stolen)." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma pasiva del verbo entre paréntesis.", prompt: "The winners ___ (announce) tomorrow.", correctAnswer: "will be announced", acceptableAnswers: ["will be announced"], explanation: "Futuro pasivo: **will be + V3**." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "They speak Portuguese in Brazil.", keyword: "SPOKEN", prompt: "Portuguese ___ Brazil.", correctAnswer: "is spoken in", acceptableAnswers: ["is spoken in"], explanation: "**is spoken in**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "These shoes ___ in Italy.", options: ["were made", "made", "were make"], correctAnswer: "were made", explanation: "**were + V3**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma pasiva del verbo entre paréntesis.", prompt: "This problem can ___ (solve) easily.", correctAnswer: "be solved", acceptableAnswers: ["be solved"], explanation: "Modal pasivo: **can be + V3**." },
      { id: "e8", type: "multipleChoice", instruction: "¿Qué frase es más natural?", prompt: "Elige la mejor opción.", options: ["The museum was opened in 2005.", "The museum was opened by people in 2005.", "Somebody opened by the museum in 2005."], correctAnswer: "The museum was opened in 2005.", explanation: "*by people* no aporta información: omítelo." }
    ]
  });
})();
