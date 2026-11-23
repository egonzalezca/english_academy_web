(function () {
  "use strict";

  // Guías de vocabulario B1, B2 y C1. Contrato de datos: guides/schema.md
  const G = (window.C1_GUIDES = window.C1_GUIDES || []);

  G.push({
    id: "c1-collocations-verb-noun",
    level: "C1",
    category: "vocabulary",
    module: "Collocations",
    order: 10,
    title: "Collocations C1: verbo + sustantivo",
    subtitle: "Las combinaciones que suben la nota en Use of English y Writing",
    emoji: "🧩",
    minutes: 25,
    tags: ["collocations", "vocabulary", "use of english part 1", "essay"],
    objectives: [
      "Usar 15 collocations de nivel C1 en tus essays",
      "Evitar calcos del español como *make a photo*",
      "Resolver huecos de **Use of English parte 1**"
    ],
    slides: [
      { type: "cover", title: "Collocations C1", subtitle: "Palabras que van juntas porque sí. Y que el examinador espera ver." },
      {
        type: "rule",
        title: "¿Qué es una collocation?",
        text: "Una combinación que los nativos usan **por costumbre**, no por lógica. No se traduce palabra por palabra: se aprende como un bloque.",
        formula: ["verbo + sustantivo", "**make** a decision ✓   do a decision ✗", "**pay** attention ✓   put attention ✗"],
        note: "Use of English parte 1 evalúa sobre todo esto: las cuatro opciones significan algo parecido, pero **solo una combina** con la palabra de al lado."
      },
      {
        type: "list",
        title: "Para tus essays",
        items: [
          { term: "draw a conclusion", meaning: "sacar una conclusión", example: "It is too early to draw any firm conclusions." },
          { term: "raise awareness (of)", meaning: "concienciar sobre", example: "The campaign aims to raise awareness of mental health." },
          { term: "pose a threat (to)", meaning: "suponer una amenaza", example: "Rising sea levels pose a serious threat to coastal cities." },
          { term: "address / tackle an issue", meaning: "abordar un problema", example: "The government has failed to tackle the issue." },
          { term: "play a role (in)", meaning: "desempeñar un papel", example: "Education plays a key role in reducing inequality." }
        ]
      },
      {
        type: "list",
        title: "Trabajo y estudios",
        items: [
          { term: "meet a deadline", meaning: "cumplir un plazo", example: "We worked all weekend to meet the deadline." },
          { term: "gain experience", meaning: "adquirir experiencia", example: "Volunteering is a great way to gain experience." },
          { term: "carry out research", meaning: "llevar a cabo una investigación", example: "The team carried out research into sleep patterns." },
          { term: "reach an agreement", meaning: "llegar a un acuerdo", example: "Both sides finally reached an agreement." },
          { term: "take advantage of", meaning: "aprovechar", example: "Take advantage of every opportunity to practise." }
        ]
      },
      {
        type: "list",
        title: "Adjetivo / adverbio + palabra",
        text: "En C1 se nota la diferencia en el **intensificador**: *very* no siempre es la mejor opción.",
        items: [
          { term: "heavy traffic / a heavy smoker", meaning: "tráfico denso / fumador empedernido" },
          { term: "a narrow escape", meaning: "salvarse por los pelos" },
          { term: "a strong accent", meaning: "un acento marcado" },
          { term: "bitterly disappointed", meaning: "profundamente decepcionado" },
          { term: "deeply concerned", meaning: "muy preocupado" }
        ]
      },
      {
        type: "mistakes",
        title: "Calcos del español",
        items: [
          { wrong: "make a research", right: "**carry out / do** research", why: "*Research* es incontable y va con *carry out* o *do*." },
          { wrong: "say a lie", right: "**tell** a lie", why: "*Tell* va con lie, the truth, a story, a joke." },
          { wrong: "win experience", right: "**gain** experience", why: "*Win* se usa con premios y competiciones." },
          { wrong: "make a photo", right: "**take** a photo", why: "Calco de «hacer una foto»." }
        ]
      },
      {
        type: "tip",
        emoji: "🎯",
        title: "Use of English · Parte 1",
        text: "No elijas la palabra que «suena» parecida al español: elige la que **combina con la palabra ancla**.",
        points: [
          "Lee la frase completa antes de mirar las opciones.",
          "Busca la palabra **ancla**: el sustantivo o la preposición que va junto al hueco.",
          "Guarda cada collocation nueva en tu board con **una frase de ejemplo**, no suelta."
        ]
      },
      {
        type: "summary",
        title: "Collocations clave",
        points: [
          "**draw** a conclusion · **raise** awareness · **pose** a threat",
          "**tackle / address** an issue · **play** a role",
          "**meet** a deadline · **gain** experience · **reach** an agreement",
          "**carry out** research · **take** advantage of",
          "Intensificadores: **bitterly** disappointed, **deeply** concerned"
        ]
      }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la palabra que completa la collocation.", prompt: "Scientists are still trying to ___ a conclusion from the data.", options: ["draw", "take", "make", "pull"], correctAnswer: "draw", explanation: "La collocation es **draw a conclusion**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la palabra que completa la collocation.", prompt: "Air pollution ___ a serious threat to public health.", options: ["poses", "makes", "puts", "does"], correctAnswer: "poses", explanation: "**Pose a threat** = suponer una amenaza." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la palabra que completa la collocation.", prompt: "We worked all weekend to ___ the deadline.", options: ["meet", "reach", "arrive", "achieve"], correctAnswer: "meet", explanation: "Los plazos se **meet** (cumplen). *Reach* va con *agreement* o *conclusion*." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la palabra que falta.", prompt: "The new law fails to ___ the issue of affordable housing.", correctAnswer: "address", acceptableAnswers: ["address", "tackle"], explanation: "**Address / tackle an issue** = abordar un problema." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la palabra que falta.", prompt: "Social media can play an important ___ in political campaigns.", correctAnswer: "role", acceptableAnswers: ["role", "part"], explanation: "**Play a role / play a part (in)**." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la palabra que completa la collocation.", prompt: "She was ___ disappointed not to get the job.", options: ["bitterly", "strongly", "heavily", "highly"], correctAnswer: "bitterly", explanation: "**Bitterly disappointed** es la combinación natural. *Highly* va con *recommended, likely, qualified*." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la palabra que completa la collocation.", prompt: "The university will ___ research into the effects of screen time.", options: ["carry out", "make", "give", "put on"], correctAnswer: "carry out", explanation: "**Carry out research**. Nunca *make a research*." },
      { id: "e8", type: "match", instruction: "Relaciona cada verbo con su complemento.", prompt: "Verbo → complemento", pairs: [
        { left: "take", right: "advantage of" },
        { left: "reach", right: "an agreement" },
        { left: "gain", right: "experience" },
        { left: "raise", right: "awareness" }
      ], explanation: "take advantage of · reach an agreement · gain experience · raise awareness." },
      { id: "e9", type: "context", instruction: "¿Qué frase es más natural en un essay?", prompt: "Quieres escribir: «Hay que concienciar sobre el reciclaje».", options: ["We need to raise awareness of recycling.", "We need to make conscious about recycling.", "We need to rise awareness of recycling."], correctAnswer: "We need to raise awareness of recycling.", explanation: "**Raise** (transitivo) **awareness of**. *Rise* es intransitivo: no lleva objeto." },
      { id: "e10", type: "multipleChoice", instruction: "Elige la palabra que completa la collocation.", prompt: "They had a ___ escape when their car skidded off the road.", options: ["narrow", "thin", "small", "short"], correctAnswer: "narrow", explanation: "**A narrow escape** = salvarse por los pelos." }
    ]
  });

  G.push({
    id: "b1-make-do-have-take",
    level: "B1",
    category: "vocabulary",
    module: "Collocations",
    order: 10,
    title: "Make, do, have, take",
    subtitle: "Los verbos comodín que más errores provocan",
    emoji: "🧰",
    minutes: 15,
    tags: ["make", "do", "have", "take", "collocations", "vocabulario"],
    objectives: ["Elegir entre **make** y **do**", "Usar **have** y **take** en expresiones fijas", "Evitar calcos de «hacer»"],
    slides: [
      { type: "cover", title: "Make, do, have, take", subtitle: "Don't make a mistake. Do your best." },
      { type: "compare", title: "Make o do", columns: [
        { label: "make = crear, producir", text: "a mistake, a decision, a phone call, money, progress, an effort, a noise, a complaint, an excuse", example: "She made a lot of progress." },
        { label: "do = actividad, tarea", text: "homework, the housework, a job, business, sport, research, your best, someone a favour", example: "Can you do me a favour?" }
      ] },
      { type: "list", title: "Have y take", items: [
        { term: "have", meaning: "a shower, a break, a party, a good time, an argument, lunch, a look" },
        { term: "take", meaning: "a photo, a seat, an exam, a taxi, part in, place, care of, your time" }
      ] },
      { type: "mistakes", title: "Calcos de «hacer»", items: [
        { wrong: "do a mistake", right: "**make** a mistake", why: "make: crear/producir." },
        { wrong: "make sport", right: "**do** sport", why: "do: actividades." },
        { wrong: "make a photo", right: "**take** a photo", why: "Calco del español." },
        { wrong: "make a party", right: "**have / throw** a party", why: "Calco del español." }
      ] },
      { type: "summary", title: "Verbos comodín", points: ["**make** a decision, a mistake, money, progress, an effort", "**do** homework, sport, research, your best, a favour", "**have** a shower, a break, a good time", "**take** a photo, an exam, part in, place"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige el verbo correcto.", prompt: "I need to ___ a phone call before the meeting.", options: ["make", "do", "take"], correctAnswer: "make", explanation: "**make a phone call**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige el verbo correcto.", prompt: "Could you ___ me a favour?", options: ["do", "make", "have"], correctAnswer: "do", explanation: "**do someone a favour**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige el verbo correcto.", prompt: "Let's ___ a break for ten minutes.", options: ["have", "make", "do"], correctAnswer: "have", explanation: "**have / take a break**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe make, do, have o take.", prompt: "The meeting will ___ place on Friday.", correctAnswer: "take", acceptableAnswers: ["take"], explanation: "**take place** = tener lugar." },
      { id: "e5", type: "fillBlank", instruction: "Escribe make, do, have o take.", prompt: "Don't worry, everyone can ___ mistakes.", correctAnswer: "make", acceptableAnswers: ["make"], explanation: "**make mistakes**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe make, do, have o take.", prompt: "I always ___ the housework on Saturdays.", correctAnswer: "do", acceptableAnswers: ["do"], explanation: "**do the housework**." },
      { id: "e7", type: "match", instruction: "Relaciona.", prompt: "Verbo → expresión", pairs: [
        { left: "make", right: "a decision" }, { left: "do", right: "your homework" }, { left: "have", right: "a good time" }, { left: "take", right: "part in" }
      ], explanation: "Aprende cada verbo con sus combinaciones." },
      { id: "e8", type: "multipleChoice", instruction: "Elige el verbo correcto.", prompt: "She ___ a lot of money selling cakes online.", options: ["made", "did", "took"], correctAnswer: "made", explanation: "**make money**." }
    ]
  });

  G.push({
    id: "b1-phrasal-verbs",
    level: "B1",
    category: "vocabulary",
    module: "Phrasal verbs",
    order: 20,
    title: "Phrasal verbs esenciales",
    subtitle: "Los 15 que usarás todos los días",
    emoji: "🧷",
    minutes: 15,
    tags: ["phrasal verbs", "give up", "look for", "turn on", "find out"],
    objectives: ["Aprender 15 phrasal verbs de uso diario", "Saber cuáles se pueden **separar**", "Usarlos en contexto"],
    slides: [
      { type: "cover", title: "Phrasal verbs B1", subtitle: "Don't give up. Look them up and pick them up." },
      { type: "list", title: "En casa y en el día a día", items: [
        { term: "get up / wake up", meaning: "levantarse / despertarse" },
        { term: "turn on / off", meaning: "encender / apagar", example: "Turn off the lights." },
        { term: "put on / take off", meaning: "ponerse / quitarse (ropa)" },
        { term: "look for / look after", meaning: "buscar / cuidar" },
        { term: "find out", meaning: "averiguar", example: "I found out the truth." }
      ] },
      { type: "list", title: "Relaciones y planes", items: [
        { term: "give up", meaning: "dejar de, rendirse", example: "He gave up smoking." },
        { term: "get on (well) with", meaning: "llevarse bien con" },
        { term: "pick up", meaning: "recoger; aprender sin estudiar", example: "I'll pick you up at 8." },
        { term: "call off", meaning: "cancelar" },
        { term: "look forward to + -ing", meaning: "tener ganas de" }
      ] },
      { type: "rule", title: "¿Separable?", text: "Con muchos phrasal verbs el objeto puede ir en medio. Si es un **pronombre**, tiene que ir en medio.", formula: ["Turn **the TV** off. ✓ · Turn off **the TV**. ✓", "Turn **it** off. ✓ · Turn off it. ✗", "No separables: look **after** the kids / get **on with** him"] },
      { type: "summary", title: "Phrasal verbs B1", points: ["turn on/off · put on · take off", "look for · look after · find out", "give up · pick up · call off", "get on with · look forward to + -ing", "Pronombre en medio: turn **it** off"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Can you ___ my cat while I'm on holiday?", options: ["look after", "look for", "look up"], correctAnswer: "look after", explanation: "**look after** = cuidar." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The match was ___ because of the snow.", options: ["called off", "turned off", "put off on"], correctAnswer: "called off", explanation: "**call off** = cancelar." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It's cold. ___ your coat.", options: ["Put on", "Take off", "Turn on"], correctAnswer: "Put on", explanation: "**put on** = ponerse." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I'm trying to give ___ sugar.", correctAnswer: "up", acceptableAnswers: ["up"], explanation: "**give up** = dejar de." },
      { id: "e5", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I need to find ___ what time the train leaves.", correctAnswer: "out", acceptableAnswers: ["out"], explanation: "**find out** = averiguar." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The radio is too loud. Please turn ___.", options: ["it down", "down it", "it under"], correctAnswer: "it down", explanation: "Pronombre **en medio**: turn **it** down." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "Do you get ___ well with your colleagues?", correctAnswer: "on", acceptableAnswers: ["on", "along"], explanation: "**get on / along with** = llevarse bien." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I'm looking forward to ___ you.", options: ["seeing", "see", "saw"], correctAnswer: "seeing", explanation: "**look forward to + -ing**." }
    ]
  });

  G.push({
    id: "b2-phrasal-verbs",
    level: "B2",
    category: "vocabulary",
    module: "Phrasal verbs",
    order: 30,
    title: "Phrasal verbs B2",
    subtitle: "Para hablar de trabajo, problemas y relaciones",
    emoji: "🪝",
    minutes: 20,
    tags: ["phrasal verbs", "come up with", "put up with", "run out of", "turn down", "bring up"],
    objectives: ["Aprender 15 phrasal verbs frecuentes en el examen", "Reconocer los de **tres palabras**", "Usarlos en transformaciones"],
    slides: [
      { type: "cover", title: "Phrasal verbs B2", subtitle: "Come up with ideas, put up with problems, carry on learning." },
      { type: "list", title: "Problemas y soluciones", items: [
        { term: "come up with", meaning: "idear, proponer", example: "She came up with a brilliant plan." },
        { term: "put up with", meaning: "aguantar, tolerar", example: "I can't put up with the noise." },
        { term: "run out of", meaning: "quedarse sin", example: "We've run out of milk." },
        { term: "sort out", meaning: "solucionar, organizar" },
        { term: "deal with", meaning: "ocuparse de, gestionar" }
      ] },
      { type: "list", title: "Trabajo y decisiones", items: [
        { term: "turn down", meaning: "rechazar", example: "He turned down the job offer." },
        { term: "take on", meaning: "asumir; contratar", example: "We're taking on new staff." },
        { term: "carry on", meaning: "continuar" },
        { term: "set up", meaning: "fundar, montar", example: "She set up her own company." },
        { term: "put off", meaning: "aplazar", example: "Don't put off your homework." }
      ] },
      { type: "list", title: "Personas y relaciones", items: [
        { term: "bring up", meaning: "criar; sacar un tema" },
        { term: "look up to", meaning: "admirar" },
        { term: "let down", meaning: "decepcionar, fallar" },
        { term: "fall out (with)", meaning: "enfadarse, pelearse" },
        { term: "turn up", meaning: "aparecer, presentarse" }
      ] },
      { type: "summary", title: "Phrasal verbs B2", points: ["come up with · put up with · run out of", "turn down · take on · set up · put off", "bring up · look up to · let down · fall out", "Muy frecuentes en Use of English 1 y 4"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "She ___ the offer because the salary was too low.", options: ["turned down", "turned up", "took on"], correctAnswer: "turned down", explanation: "**turn down** = rechazar." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I don't know how you ___ such rude neighbours.", options: ["put up with", "come up with", "catch up with"], correctAnswer: "put up with", explanation: "**put up with** = aguantar." },
      { id: "e3", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "There's no petrol left in the car.", keyword: "RUN", prompt: "We have ___ petrol.", correctAnswer: "run out of", acceptableAnswers: ["run out of"], explanation: "**run out of** = quedarse sin." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "They postponed the meeting until next week.", keyword: "PUT", prompt: "They ___ until next week.", correctAnswer: "put off the meeting", acceptableAnswers: ["put off the meeting", "put the meeting off"], explanation: "**put off** = aplazar (separable)." },
      { id: "e5", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "I've always looked up ___ my older sister.", correctAnswer: "to", acceptableAnswers: ["to"], explanation: "**look up to** = admirar." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Only five people ___ for the meeting.", options: ["turned up", "turned down", "set up"], correctAnswer: "turned up", explanation: "**turn up** = presentarse." },
      { id: "e7", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "She was raised by her grandparents.", keyword: "BROUGHT", prompt: "She was ___ her grandparents.", correctAnswer: "brought up by", acceptableAnswers: ["brought up by"], explanation: "**bring up** = criar (pasiva: was brought up)." },
      { id: "e8", type: "match", instruction: "Relaciona.", prompt: "Phrasal verb → significado", pairs: [
        { left: "set up", right: "fundar" }, { left: "let down", right: "decepcionar" }, { left: "sort out", right: "solucionar" }, { left: "carry on", right: "continuar" }
      ], explanation: "Repasa la lista y crea tus propios ejemplos." }
    ]
  });

  G.push({
    id: "b2-dependent-prepositions",
    level: "B2",
    category: "vocabulary",
    module: "Preposiciones",
    order: 40,
    title: "Preposiciones dependientes",
    subtitle: "depend on, interested in, responsible for…",
    emoji: "📌",
    minutes: 20,
    tags: ["prepositions", "preposiciones", "depend on", "interested in", "good at"],
    objectives: ["Memorizar las combinaciones más frecuentes", "Evitar las traducciones directas del español", "Usar **-ing** después de la preposición"],
    slides: [
      { type: "cover", title: "Preposiciones dependientes", subtitle: "It depends on you. Not of you." },
      { type: "table", title: "Adjetivo + preposición", head: ["Prep.", "Adjetivos"], rows: [
        ["of", "afraid, aware, capable, fond, proud, tired"], ["in", "interested, involved"], ["at", "good, bad, brilliant, surprised"], ["about", "worried, excited, upset"], ["for", "famous, responsible, suitable"], ["with", "pleased, satisfied, familiar"]
      ] },
      { type: "table", title: "Verbo + preposición", head: ["Prep.", "Verbos"], rows: [
        ["on", "depend, rely, concentrate, insist"], ["in", "believe, succeed, specialise"], ["for", "apply, apologise, blame sb"], ["from", "suffer, recover, prevent sb"], ["of", "consist, accuse sb, approve"], ["to", "object, refer, belong"]
      ] },
      { type: "mistakes", title: "Calcos del español", items: [
        { wrong: "depend of", right: "depend **on**", why: "Calco de «depender de»." },
        { wrong: "married with", right: "married **to**", why: "Casado **con** = married to." },
        { wrong: "consist in", right: "consist **of**", why: "consist of = constar de." },
        { wrong: "interested on", right: "interested **in**", why: "Combinación fija." }
      ] },
      { type: "summary", title: "Preposiciones", points: ["depend / rely **on** · interested **in** · good **at**", "responsible **for** · afraid **of** · worried **about**", "married **to** · consist **of** · suffer **from**", "Preposición + **-ing**", "Apréndelas en bloque con un ejemplo"] }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe la preposición.", prompt: "Whether we go or not depends ___ the weather.", correctAnswer: "on", acceptableAnswers: ["on", "upon"], explanation: "**depend on**." },
      { id: "e2", type: "fillBlank", instruction: "Escribe la preposición.", prompt: "She's very good ___ solving problems.", correctAnswer: "at", acceptableAnswers: ["at"], explanation: "**good at**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la preposición.", prompt: "Who is responsible ___ this mess?", correctAnswer: "for", acceptableAnswers: ["for"], explanation: "**responsible for**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la preposición.", prompt: "He has been married ___ Claire for ten years.", correctAnswer: "to", acceptableAnswers: ["to"], explanation: "**married to**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la preposición.", prompt: "The team consists ___ eleven players.", correctAnswer: "of", acceptableAnswers: ["of"], explanation: "**consist of**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la preposición.", prompt: "She's recovering ___ a serious illness.", correctAnswer: "from", acceptableAnswers: ["from"], explanation: "**recover from**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Are you aware ___ the risks?", options: ["of", "about", "on"], correctAnswer: "of", explanation: "**aware of**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I'm not interested in ___ politics.", options: ["discussing", "discuss", "to discuss"], correctAnswer: "discussing", explanation: "Preposición + **-ing**." }
    ]
  });

  G.push({
    id: "b2-confusing-words",
    level: "B2",
    category: "vocabulary",
    module: "Palabras confusas",
    order: 50,
    title: "Falsos amigos y palabras confusas",
    subtitle: "actually, eventually, rise/raise, affect/effect…",
    emoji: "🎭",
    minutes: 20,
    tags: ["false friends", "falsos amigos", "rise raise", "affect effect", "actually", "eventually", "sensible"],
    objectives: ["Evitar los falsos amigos más peligrosos", "Distinguir parejas como **rise / raise**", "Ganar precisión en Use of English 1"],
    slides: [
      { type: "cover", title: "Falsos amigos", subtitle: "Actually, they're not what they seem." },
      { type: "table", title: "Falsos amigos", head: ["Inglés", "Significa", "No significa"], rows: [
        ["actually", "en realidad", "actualmente (= currently)"], ["eventually", "finalmente", "eventualmente"], ["sensible", "sensato", "sensible (= sensitive)"], ["embarrassed", "avergonzado", "embarazada (= pregnant)"], ["assist", "ayudar", "asistir (= attend)"], ["library", "biblioteca", "librería (= bookshop)"]
      ] },
      { type: "table", title: "Parejas confusas", head: ["Pareja", "Diferencia"], rows: [
        ["rise / raise", "**rise** sin objeto (prices rise) · **raise** con objeto (raise prices)"], ["affect / effect", "**affect** = verbo · **effect** = sustantivo"], ["lose / miss", "**lose** algo que tienes · **miss** un tren, una oportunidad"], ["borrow / lend", "**borrow** = tomar prestado · **lend** = prestar"], ["remind / remember", "**remind** sb (hacer recordar) · **remember** (recordar tú)"]
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "Actually I live in Madrid. (= ahora)", right: "**Currently / At the moment** I live in Madrid.", why: "actually = en realidad." },
        { wrong: "Can you borrow me your pen?", right: "Can you **lend** me your pen?", why: "lend = prestar." },
        { wrong: "I assisted the conference.", right: "I **attended** the conference.", why: "attend = asistir." }
      ] },
      { type: "summary", title: "Falsos amigos", points: ["actually = en realidad · currently = actualmente", "eventually = finalmente · sensible = sensato", "rise (sin objeto) / raise (con objeto)", "affect (verbo) / effect (sustantivo)", "borrow / lend · lose / miss · attend ≠ assist"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The company has decided to ___ salaries by 3%.", options: ["raise", "rise", "arise"], correctAnswer: "raise", explanation: "Con objeto (salaries) → **raise**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The new law will ___ thousands of people.", options: ["affect", "effect", "infect"], correctAnswer: "affect", explanation: "Verbo → **affect**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "After hours of waiting, we ___ got a table.", options: ["eventually", "actually", "possibly"], correctAnswer: "eventually", explanation: "**eventually** = finalmente." },
      { id: "e4", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Could you ___ me some money until Friday?", options: ["lend", "borrow", "rent"], correctAnswer: "lend", explanation: "**lend** = prestar." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Hurry up or we'll ___ the bus!", options: ["miss", "lose", "loose"], correctAnswer: "miss", explanation: "**miss** el bus." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "It was a very ___ decision; you thought about all the risks.", options: ["sensible", "sensitive", "sensual"], correctAnswer: "sensible", explanation: "**sensible** = sensato." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "This song always ___ me of my childhood.", correctAnswer: "reminds", acceptableAnswers: ["reminds"], explanation: "**remind sb of** = hacer recordar." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "More than 500 people ___ the meeting.", options: ["attended", "assisted", "attended to"], correctAnswer: "attended", explanation: "**attend** = asistir a." }
    ]
  });

  G.push({
    id: "c1-idioms",
    level: "C1",
    category: "vocabulary",
    module: "Idioms",
    order: 20,
    title: "Idioms para el C1",
    subtitle: "Expresiones que suenan naturales (sin pasarse)",
    emoji: "🦉",
    minutes: 20,
    tags: ["idioms", "expressions", "expresiones", "speaking", "use of english"],
    objectives: ["Aprender 15 idioms frecuentes en el C1", "Usarlos en Speaking sin sonar forzado", "Reconocerlos en Use of English y Listening"],
    slides: [
      { type: "cover", title: "Idioms C1", subtitle: "Once in a blue moon, a guide hits the nail on the head." },
      { type: "list", title: "Dificultad y esfuerzo", items: [
        { term: "a steep learning curve", meaning: "algo que cuesta aprender al principio" },
        { term: "go the extra mile", meaning: "esforzarse más de lo necesario" },
        { term: "bite off more than you can chew", meaning: "abarcar demasiado" },
        { term: "be in the same boat", meaning: "estar en la misma situación" },
        { term: "cut corners", meaning: "hacer algo de forma chapucera para ahorrar" }
      ] },
      { type: "list", title: "Opinión y comunicación", items: [
        { term: "hit the nail on the head", meaning: "dar en el clavo" },
        { term: "beat about the bush", meaning: "andarse por las ramas" },
        { term: "a double-edged sword", meaning: "un arma de doble filo" },
        { term: "the tip of the iceberg", meaning: "la punta del iceberg" },
        { term: "on the fence", meaning: "indeciso" }
      ] },
      { type: "list", title: "Tiempo y frecuencia", items: [
        { term: "once in a blue moon", meaning: "muy de vez en cuando" },
        { term: "in the nick of time", meaning: "justo a tiempo" },
        { term: "call it a day", meaning: "dar por terminado (el trabajo)" },
        { term: "at the drop of a hat", meaning: "sin pensarlo, al instante" },
        { term: "sooner or later", meaning: "tarde o temprano" }
      ] },
      { type: "tip", emoji: "⚠️", title: "Cómo usarlos", points: ["En **Speaking**, 1–2 idioms naturales bastan.", "En **essays y reports**, evita los coloquiales; *a double-edged sword* o *the tip of the iceberg* sí encajan.", "Nunca cambies las palabras: *hit the nail on the **head***, no *on the top*."] },
      { type: "summary", title: "Idioms", points: ["go the extra mile · cut corners · in the same boat", "hit the nail on the head · beat about the bush", "a double-edged sword · the tip of the iceberg", "once in a blue moon · in the nick of time", "Pocos y bien usados"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Social media is a double-___ sword: it connects us but can also isolate us.", options: ["edged", "sided", "bladed"], correctAnswer: "edged", explanation: "**a double-edged sword**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Stop beating about the ___ and tell me what happened.", options: ["bush", "tree", "field"], correctAnswer: "bush", explanation: "**beat about the bush** = andarse por las ramas." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "We arrived at the airport just in the ___ of time.", correctAnswer: "nick", acceptableAnswers: ["nick"], explanation: "**in the nick of time** = justo a tiempo." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "These cases are only the tip of the ___.", correctAnswer: "iceberg", acceptableAnswers: ["iceberg"], explanation: "**the tip of the iceberg**." },
      { id: "e5", type: "multipleChoice", instruction: "¿Qué significa?", prompt: "\"I only eat fast food once in a blue moon.\"", options: ["very rarely", "every month", "at night"], correctAnswer: "very rarely", explanation: "**once in a blue moon** = muy de vez en cuando." },
      { id: "e6", type: "multipleChoice", instruction: "¿Qué significa?", prompt: "\"She always goes the extra mile for her customers.\"", options: ["She makes more effort than necessary.", "She travels a lot.", "She works far from home."], correctAnswer: "She makes more effort than necessary.", explanation: "**go the extra mile**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "It's late and we're all tired. Let's call it a ___.", correctAnswer: "day", acceptableAnswers: ["day"], explanation: "**call it a day**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The builders ___ corners, and now the roof is leaking.", options: ["cut", "turned", "broke"], correctAnswer: "cut", explanation: "**cut corners**." }
    ]
  });

  G.push({
    id: "c1-phrasal-verbs",
    level: "C1",
    category: "vocabulary",
    module: "Phrasal verbs",
    order: 30,
    title: "Phrasal verbs C1",
    subtitle: "Los que aparecen en lecturas y transformaciones avanzadas",
    emoji: "⚙️",
    minutes: 20,
    tags: ["phrasal verbs", "advanced", "bring about", "rule out", "account for", "draw up"],
    objectives: ["Aprender 15 phrasal verbs de registro alto", "Usarlos en essays y reports", "Reconocerlos en Use of English 1 y 4"],
    slides: [
      { type: "cover", title: "Phrasal verbs C1", subtitle: "What brought about this guide? The need to rule out mistakes." },
      { type: "list", title: "Causa, efecto y análisis", items: [
        { term: "bring about", meaning: "provocar, ocasionar", example: "The reforms brought about major changes." },
        { term: "account for", meaning: "explicar; representar (%)", example: "Tourism accounts for 12% of GDP." },
        { term: "rule out", meaning: "descartar", example: "Police have not ruled out foul play." },
        { term: "stem from", meaning: "derivar de", example: "The problem stems from a lack of funding." },
        { term: "boil down to", meaning: "reducirse a, resumirse en" }
      ] },
      { type: "list", title: "Trabajo y proyectos", items: [
        { term: "draw up", meaning: "redactar (un plan, contrato)" },
        { term: "carry out", meaning: "llevar a cabo" },
        { term: "phase out", meaning: "eliminar gradualmente" },
        { term: "iron out", meaning: "resolver (problemas pequeños)" },
        { term: "fall through", meaning: "fracasar, venirse abajo (un plan)" }
      ] },
      { type: "list", title: "Personas y actitudes", items: [
        { term: "come across as", meaning: "dar la impresión de", example: "He comes across as arrogant." },
        { term: "stand up for", meaning: "defender" },
        { term: "live up to", meaning: "estar a la altura de" },
        { term: "get away with", meaning: "salirse con la suya" },
        { term: "frown upon", meaning: "estar mal visto" }
      ] },
      { type: "summary", title: "Phrasal verbs C1", points: ["bring about · account for · rule out · stem from", "draw up · carry out · phase out · fall through", "come across as · live up to · get away with", "Encajan en essays: *stem from, bring about, account for*"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Doctors have ___ the possibility of infection.", options: ["ruled out", "ruled off", "ruled over"], correctAnswer: "ruled out", explanation: "**rule out** = descartar." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Many of his problems ___ from a difficult childhood.", options: ["stem", "come", "result"], correctAnswer: "stem", explanation: "**stem from** = derivar de." },
      { id: "e3", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "Young people account ___ a third of the population.", correctAnswer: "for", acceptableAnswers: ["for"], explanation: "**account for** = representar." },
      { id: "e4", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "The film wasn't as good as I had expected.", keyword: "LIVE", prompt: "The film didn't ___ my expectations.", correctAnswer: "live up to", acceptableAnswers: ["live up to"], explanation: "**live up to** = estar a la altura." },
      { id: "e5", type: "fillBlank", instruction: "Completa con 3–6 palabras, incluida la palabra clave.", context: "Our plans to buy the house failed at the last minute.", keyword: "THROUGH", prompt: "Our plans to buy the house ___ at the last minute.", correctAnswer: "fell through", acceptableAnswers: ["fell through"], explanation: "**fall through** = venirse abajo." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The government plans to ___ petrol cars by 2035.", options: ["phase out", "phase in", "draw up"], correctAnswer: "phase out", explanation: "**phase out** = eliminar gradualmente." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "In the interview, she ___ as very confident.", options: ["came across", "came up", "came over to"], correctAnswer: "came across", explanation: "**come across as** = dar la impresión de." },
      { id: "e8", type: "match", instruction: "Relaciona.", prompt: "Phrasal verb → significado", pairs: [
        { left: "bring about", right: "provocar" }, { left: "draw up", right: "redactar" }, { left: "iron out", right: "resolver detalles" }, { left: "get away with", right: "salirse con la suya" }
      ], explanation: "Phrasal verbs de registro alto." }
    ]
  });

  G.push({
    id: "c1-discourse-markers",
    level: "C1",
    category: "vocabulary",
    module: "Writing",
    order: 40,
    title: "Conectores C1 para Writing",
    subtitle: "Más allá de however y moreover",
    emoji: "🧵",
    minutes: 20,
    tags: ["linking words", "discourse markers", "conectores", "writing", "essay", "cohesion"],
    objectives: ["Variar los conectores para subir *Organisation*", "Usar conectores de registro alto con precisión", "Evitar el abuso y los errores de puntuación"],
    slides: [
      { type: "cover", title: "Conectores C1", subtitle: "Furthermore, moreover, in addition… and beyond." },
      { type: "table", title: "Por función", head: ["Función", "Conectores C1"], rows: [
        ["Añadir", "what is more · not to mention · coupled with"],
        ["Contrastar", "that said · even so · conversely · by contrast"],
        ["Conceder", "admittedly · granted · while it is true that"],
        ["Causa", "owing to · on account of · given that"],
        ["Consecuencia", "consequently · hence · thus · as a result"],
        ["Ejemplificar", "a case in point · notably · to illustrate"]
      ] },
      { type: "examples", title: "En un párrafo", items: [
        { en: "**Admittedly**, public transport can be unreliable. **That said**, it remains the most sustainable option.", es: "Conceder y contraargumentar." },
        { en: "**Owing to** budget cuts, several libraries have closed. **Consequently**, …", es: "Causa + consecuencia." },
        { en: "Cities like Copenhagen are **a case in point**.", es: "Ejemplificar." }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "Owing to it was raining…", right: "Owing to **the rain** / **Given that** it was raining", why: "owing to + sustantivo." },
        { wrong: "Moreover, … Moreover, … Moreover, …", right: "Varía: *what is more, in addition, furthermore*", why: "La repetición baja Organisation." },
        { wrong: "However the plan failed.", right: "However**,** the plan failed.", why: "Coma tras however al inicio." }
      ] },
      { type: "summary", title: "Conectores C1", points: ["Añadir: what is more · coupled with", "Contrastar: that said · conversely", "Conceder: admittedly · granted", "Causa: owing to + sustantivo · given that + oración", "Consecuencia: hence · thus · consequently"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ the heavy snow, the school was closed.", options: ["Owing to", "Given that", "Hence"], correctAnswer: "Owing to", explanation: "+ sustantivo → **owing to**." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___, the plan has some flaws. Nevertheless, it is worth trying.", options: ["Admittedly", "Consequently", "Hence"], correctAnswer: "Admittedly", explanation: "Concesión → **Admittedly**." },
      { id: "e3", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Cars are expensive to run. ___, many young people choose to cycle.", options: ["Consequently", "Conversely", "Granted"], correctAnswer: "Consequently", explanation: "Consecuencia → **Consequently**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "Finland is a case in ___: its education system is world-famous.", correctAnswer: "point", acceptableAnswers: ["point"], explanation: "**a case in point** = un ejemplo claro." },
      { id: "e5", type: "fillBlank", instruction: "Escribe una sola palabra.", prompt: "That ___, there are some disadvantages to consider.", correctAnswer: "said", acceptableAnswers: ["said"], explanation: "**That said** = dicho esto." },
      { id: "e6", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "Cities are crowded; rural areas, ___, are losing population.", options: ["by contrast", "therefore", "what is more"], correctAnswer: "by contrast", explanation: "Contraste entre dos cosas → **by contrast**." },
      { id: "e7", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "___ that most staff work remotely, the office could be smaller.", options: ["Given", "Owing", "Despite"], correctAnswer: "Given", explanation: "**Given that** + oración." },
      { id: "e8", type: "match", instruction: "Relaciona cada conector con su función.", prompt: "Conector → función", pairs: [
        { left: "what is more", right: "añadir" }, { left: "conversely", right: "contrastar" }, { left: "granted", right: "conceder" }, { left: "hence", right: "consecuencia" }
      ], explanation: "Variedad = mejor Organisation." }
    ]
  });

  G.push({
    id: "c1-formal-register",
    level: "C1",
    category: "vocabulary",
    module: "Writing",
    order: 50,
    title: "Registro formal: palabras que suben de nivel",
    subtitle: "get → obtain, need → require, help → assist",
    emoji: "🎩",
    minutes: 20,
    tags: ["register", "formal", "registro", "vocabulary", "report", "proposal", "letter"],
    objectives: ["Sustituir verbos y expresiones neutras por formales", "Ajustar el registro según la tarea de Writing", "Evitar mezclar registros"],
    slides: [
      { type: "cover", title: "Registro formal", subtitle: "We would like to request your attention, not ask for it." },
      { type: "table", title: "Neutral → formal", head: ["Neutral", "Formal"], rows: [
        ["get", "obtain / receive"], ["need", "require"], ["help", "assist"], ["start / end", "commence / conclude"], ["find out", "discover / ascertain"], ["ask for", "request"], ["think about", "consider"]
      ] },
      { type: "table", title: "Expresiones", head: ["Informal", "Formal"], rows: [
        ["a lot of", "a considerable amount / number of"], ["about (= approx.)", "approximately"], ["so", "therefore / consequently"], ["but", "however / nevertheless"], ["I think", "It would appear that / I believe"]
      ] },
      { type: "compare", title: "¿Qué tarea, qué registro?", columns: [
        { label: "Formal", text: "Report, proposal, carta a una institución, essay.", example: "I would be grateful if you could…" },
        { label: "Semiformal / informal", text: "Review, email a un amigo o compañero.", example: "You really should check it out!" }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "I'm writing to ask for info about the course.", right: "I am writing to **request further information** regarding the course.", why: "Sin contracciones ni abreviaturas." },
        { wrong: "Loads of people turned up.", right: "**A considerable number of** people attended.", why: "Coloquialismo en un report." },
        { wrong: "Dear Sir… Cheers!", right: "Dear Sir or Madam… **Yours faithfully**", why: "Mantén un registro coherente." }
      ] },
      { type: "summary", title: "Registro formal", points: ["get → obtain · need → require · help → assist", "ask for → request · find out → ascertain", "a lot of → a considerable number of", "Sin contracciones ni phrasal verbs coloquiales", "Un único registro en todo el texto"] }
    ],
    exercises: [
      { id: "e1", type: "multipleChoice", instruction: "Elige la versión formal.", prompt: "\"We need more staff.\"", options: ["Additional staff are required.", "We need loads more people.", "More staff, please!"], correctAnswer: "Additional staff are required.", explanation: "need → **require** + pasiva." },
      { id: "e2", type: "multipleChoice", instruction: "Elige la versión formal.", prompt: "\"Can you help me?\"", options: ["I would appreciate your assistance.", "Help me out, will you?", "Gimme a hand."], correctAnswer: "I would appreciate your assistance.", explanation: "help → **assistance**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la palabra formal equivalente a \"get\".", prompt: "Further details can be ___ from the main office.", correctAnswer: "obtained", acceptableAnswers: ["obtained"], explanation: "get → **obtain**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la palabra formal equivalente a \"start\".", prompt: "The ceremony will ___ at 10 a.m.", correctAnswer: "commence", acceptableAnswers: ["commence", "begin"], explanation: "start → **commence / begin**." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la versión formal.", prompt: "\"About 200 people came.\"", options: ["Approximately 200 people attended.", "Around 200 folks showed up.", "Like 200 people came."], correctAnswer: "Approximately 200 people attended.", explanation: "about → **approximately**; came → **attended**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la palabra formal equivalente a \"ask for\".", prompt: "I would like to ___ a refund.", correctAnswer: "request", acceptableAnswers: ["request"], explanation: "ask for → **request**." },
      { id: "e7", type: "multipleChoice", instruction: "¿Qué tarea admite registro informal?", prompt: "Elige la tarea.", options: ["Un email a un amigo recomendándole un curso", "Un report para el director", "Una carta de queja a una aerolínea"], correctAnswer: "Un email a un amigo recomendándole un curso", explanation: "Destinatario cercano → informal." },
      { id: "e8", type: "match", instruction: "Relaciona cada palabra con su equivalente formal.", prompt: "Neutral → formal", pairs: [
        { left: "think about", right: "consider" }, { left: "find out", right: "ascertain" }, { left: "end", right: "conclude" }, { left: "so", right: "therefore" }
      ], explanation: "Vocabulario formal para reports y cartas." }
    ]
  });

  G.push({
    id: "b1-prepositions-time-place",
    level: "B1",
    category: "vocabulary",
    module: "Preposiciones",
    order: 30,
    title: "In, on, at: tiempo y lugar",
    subtitle: "Las tres preposiciones que todos fallamos",
    emoji: "📍",
    minutes: 15,
    tags: ["prepositions", "preposiciones", "in", "on", "at", "time", "place"],
    objectives: ["Usar **in / on / at** con horas, días, meses y años", "Elegir la preposición de lugar correcta", "Recordar las expresiones fijas"],
    slides: [
      { type: "cover", title: "In, on, at", subtitle: "See you at 8, on Friday, in the café." },
      { type: "table", title: "Tiempo: de lo concreto a lo general", head: ["Prep.", "Con…", "Ejemplos"], rows: [
        ["at", "horas y momentos", "at 7 pm, at night, at the weekend, at Christmas"],
        ["on", "días y fechas", "on Monday, on 4 July, on my birthday"],
        ["in", "meses, años, estaciones, partes del día", "in May, in 2020, in summer, in the morning"]
      ], note: "Sin preposición: **next / last / this / every** (*next Monday*, no *on next Monday*)." },
      { type: "table", title: "Lugar", head: ["Prep.", "Idea", "Ejemplos"], rows: [
        ["at", "un punto, un lugar de actividad", "at the bus stop, at work, at a party"],
        ["on", "una superficie, una línea", "on the table, on the wall, on the 2nd floor"],
        ["in", "dentro de un espacio", "in the box, in Madrid, in the car"]
      ] },
      { type: "list", title: "Expresiones fijas", items: [
        { term: "on time / in time", meaning: "puntual / con tiempo suficiente" },
        { term: "in the end / at the end of", meaning: "al final (finalmente) / al final de algo" },
        { term: "on the bus / in a taxi", meaning: "transporte público con *on*, coche y taxi con *in*" },
        { term: "at home / at university", meaning: "sin artículo" }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "in Monday", right: "**on** Monday", why: "Días con on." },
        { wrong: "on next week", right: "**next week**", why: "Sin preposición con next/last/this." },
        { wrong: "in the night", right: "**at** night", why: "Excepción frecuente." },
        { wrong: "arrive to Madrid", right: "arrive **in** Madrid / **at** the station", why: "arrive in (ciudad) / at (lugar concreto)." }
      ] },
      { type: "summary", title: "In, on, at", points: ["**at** + hora · **on** + día · **in** + mes/año/estación", "**at** night · **in** the morning", "Sin preposición: next, last, this, every", "Lugar: at (punto) · on (superficie) · in (dentro)", "on time (puntual) · in time (a tiempo)"] }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe in, on o at.", prompt: "The meeting starts ___ 9.30.", correctAnswer: "at", acceptableAnswers: ["at"], explanation: "Horas → **at**." },
      { id: "e2", type: "fillBlank", instruction: "Escribe in, on o at.", prompt: "My birthday is ___ 12 March.", correctAnswer: "on", acceptableAnswers: ["on"], explanation: "Fechas → **on**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe in, on o at.", prompt: "We usually go skiing ___ winter.", correctAnswer: "in", acceptableAnswers: ["in"], explanation: "Estaciones → **in**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe in, on o at.", prompt: "I can't sleep ___ night when it's hot.", correctAnswer: "at", acceptableAnswers: ["at"], explanation: "**at night**." },
      { id: "e5", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "I'll see you ___ Friday.", options: ["next", "on next", "in next"], correctAnswer: "next", explanation: "Con *next*, sin preposición." },
      { id: "e6", type: "fillBlank", instruction: "Escribe in, on o at.", prompt: "There's a beautiful painting ___ the wall.", correctAnswer: "on", acceptableAnswers: ["on"], explanation: "Superficie → **on**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe in, on o at.", prompt: "We waited ___ the bus stop for twenty minutes.", correctAnswer: "at", acceptableAnswers: ["at"], explanation: "Punto concreto → **at**." },
      { id: "e8", type: "multipleChoice", instruction: "Elige la opción correcta.", prompt: "The train left ___ time, at exactly 8.00.", options: ["on", "in", "at"], correctAnswer: "on", explanation: "**on time** = puntual." }
    ]
  });

  G.push({
    id: "b2-word-formation",
    level: "B2",
    category: "vocabulary",
    module: "Word formation",
    order: 60,
    title: "Word formation B2",
    subtitle: "Familias de palabras: sustantivo, adjetivo, verbo y adverbio",
    emoji: "🌳",
    minutes: 20,
    tags: ["word formation", "suffixes", "sufijos", "nouns", "adjectives"],
    objectives: ["Formar sustantivos, adjetivos y adverbios con sufijos", "Reconocer la categoría que pide la frase", "Preparar Use of English 3"],
    slides: [
      { type: "cover", title: "Word formation B2", subtitle: "Create → creation → creative → creatively." },
      { type: "table", title: "Familias completas", head: ["Verbo", "Sustantivo", "Adjetivo"], rows: [
        ["create", "creation / creativity", "creative"], ["decide", "decision", "decisive"], ["succeed", "success", "successful"], ["develop", "development", "developing / developed"], ["compete", "competition / competitor", "competitive"]
      ] },
      { type: "rule", title: "¿Qué categoría necesito?", formula: ["Pistas en la frase", "the / a / adjetivo + ___ → **sustantivo**", "be / very / a + ___ + sustantivo → **adjetivo**", "___ + verbo / adjetivo → **adverbio** (-ly)", "to / can / will + ___ → **verbo**"] },
      { type: "list", title: "Sufijos de adjetivo", items: [
        { term: "-ful / -less", meaning: "con / sin: useful, useless" },
        { term: "-ous", meaning: "dangerous, famous, ambitious" },
        { term: "-able / -ible", meaning: "comfortable, flexible, reliable" },
        { term: "-ive", meaning: "attractive, expensive, effective" },
        { term: "-al / -ic", meaning: "national, economic, historic" }
      ] },
      { type: "mistakes", title: "Errores típicos", items: [
        { wrong: "a very success businessman", right: "a very **successful** businessman", why: "Delante de sustantivo → adjetivo." },
        { wrong: "She sings beautiful.", right: "She sings **beautifully**.", why: "Modifica a un verbo → adverbio." },
        { wrong: "The develop of the city", right: "The **development** of the city", why: "Tras the… of → sustantivo." }
      ] },
      { type: "summary", title: "Word formation B2", points: ["Identifica primero la **categoría**", "Sustantivo: -tion, -ment, -ness, -ity, -ance", "Adjetivo: -ful, -less, -ous, -able, -ive, -al", "Adverbio: adjetivo + **-ly**", "Aprende las palabras en **familias**"] }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Her ___ in the exam surprised everyone. (SUCCEED)", correctAnswer: "success", acceptableAnswers: ["success"], explanation: "Tras posesivo → sustantivo: **success**." },
      { id: "e2", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "It's a very ___ market, so prices are low. (COMPETE)", correctAnswer: "competitive", acceptableAnswers: ["competitive"], explanation: "Antes de sustantivo → adjetivo: **competitive**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "This app is completely ___. It never works. (USE)", correctAnswer: "useless", acceptableAnswers: ["useless"], explanation: "Sentido negativo → **useless**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Please drive ___ — the roads are icy. (CARE)", correctAnswer: "carefully", acceptableAnswers: ["carefully"], explanation: "Modifica a *drive* → adverbio: **carefully**." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The ___ of the new stadium will take two years. (BUILD)", correctAnswer: "building", acceptableAnswers: ["building", "construction"], explanation: "Tras *the… of* → sustantivo: **building**." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Climbing without a rope is extremely ___. (DANGER)", correctAnswer: "dangerous", acceptableAnswers: ["dangerous"], explanation: "Tras *extremely* → adjetivo: **dangerous**." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "We need to make a ___ by Friday. (DECIDE)", correctAnswer: "decision", acceptableAnswers: ["decision"], explanation: "Tras *a* → sustantivo: **decision**." },
      { id: "e8", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "She has a very ___ personality; she always has new ideas. (CREATE)", correctAnswer: "creative", acceptableAnswers: ["creative"], explanation: "Antes de sustantivo → adjetivo: **creative**." }
    ]
  });

  G.push({
    id: "c1-word-formation-advanced",
    level: "C1",
    category: "vocabulary",
    module: "Word formation",
    order: 60,
    title: "Word formation C1",
    subtitle: "Prefijos, dobles transformaciones y cambios internos",
    emoji: "🧪",
    minutes: 25,
    tags: ["word formation", "prefixes", "prefijos", "use of english part 3", "advanced"],
    objectives: ["Aplicar **prefijo + sufijo** a la vez", "Dominar los cambios internos de raíz", "Resolver huecos de nivel C1 en Use of English 3"],
    slides: [
      { type: "cover", title: "Word formation C1", subtitle: "UNDERSTAND → misunderstandings. Dos cambios en una sola palabra." },
      { type: "table", title: "Dobles transformaciones", head: ["Base", "Resultado", "Cambios"], rows: [
        ["RELY", "unreliable", "un- + -able"], ["DEPEND", "independence", "in- + -ence"], ["EMPLOY", "unemployment", "un- + -ment"], ["RESPONSIBLE", "irresponsibility", "ir- + -ity"], ["CONCEIVE", "inconceivable", "in- + -able"]
      ] },
      { type: "table", title: "Cambios internos", head: ["Base", "Forma derivada"], rows: [
        ["deep / wide / long / strong", "depth / width / length / strength"], ["choose / lose", "choice / loss"], ["explain / pronounce", "explanation / pronunciation"], ["maintain / sustain", "maintenance / sustenance"], ["proud / brave", "pride / bravery"]
      ] },
      { type: "list", title: "Prefijos de nivel C1", items: [
        { term: "over- / under-", meaning: "overestimate, underrated" },
        { term: "mis-", meaning: "misleading, misconception" },
        { term: "counter-", meaning: "counterproductive" },
        { term: "out-", meaning: "outnumber, outweigh, outgrow" },
        { term: "self- / well-", meaning: "self-confidence, well-informed" }
      ] },
      { type: "mistakes", title: "Trampas de ortografía", items: [
        { wrong: "pronounciation", right: "**pronunciation**", why: "Cambia la raíz: pronounce → pronunciation." },
        { wrong: "maintainance", right: "**maintenance**", why: "Cambio interno." },
        { wrong: "independance", right: "**independence**", why: "-ence, no -ance." },
        { wrong: "irresponsable", right: "**irresponsible**", why: "-ible, no -able." }
      ] },
      { type: "tip", emoji: "🎯", title: "Use of English 3", points: ["Lee la **frase entera**: el sentido negativo suele estar en el contexto (*but*, *sadly*, *however*).", "Comprueba **singular o plural** antes de escribir.", "En C1 es habitual que una respuesta necesite **dos cambios**."] },
      { type: "summary", title: "Word formation C1", points: ["Prefijo + sufijo: **unreliable**, **irresponsibility**", "Cambios internos: depth, strength, choice, pride", "Prefijos: over-, under-, mis-, counter-, out-", "Ortografía: pronunciation, maintenance, independence", "Busca el sentido negativo en el contexto"] }
    ],
    exercises: [
      { id: "e1", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The train service is notoriously ___; it's often late. (RELY)", correctAnswer: "unreliable", acceptableAnswers: ["unreliable"], explanation: "Sentido negativo + adjetivo: **un- + -able**." },
      { id: "e2", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Youth ___ has risen sharply in the region. (EMPLOY)", correctAnswer: "unemployment", acceptableAnswers: ["unemployment"], explanation: "Sustantivo negativo: **un- + -ment**." },
      { id: "e3", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The ___ of the river at this point is about 200 metres. (WIDE)", correctAnswer: "width", acceptableAnswers: ["width"], explanation: "Cambio interno: wide → **width**." },
      { id: "e4", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "The headline was deliberately ___ and exaggerated the risks. (LEAD)", correctAnswer: "misleading", acceptableAnswers: ["misleading"], explanation: "**mis- + -ing**: misleading = engañoso." },
      { id: "e5", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Banning phones completely could prove ___. (PRODUCT)", correctAnswer: "counterproductive", acceptableAnswers: ["counterproductive", "counter-productive"], explanation: "**counter- + -ive** = contraproducente." },
      { id: "e6", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "In the end, the benefits ___ the costs. (WEIGH)", correctAnswer: "outweighed", acceptableAnswers: ["outweighed", "outweigh"], explanation: "**outweigh** = pesar más que (aquí en pasado)." },
      { id: "e7", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Regular ___ of the equipment is essential. (MAINTAIN)", correctAnswer: "maintenance", acceptableAnswers: ["maintenance"], explanation: "Cambio interno: maintain → **maintenance**." },
      { id: "e8", type: "fillBlank", instruction: "Escribe la forma correcta de la palabra en mayúsculas.", prompt: "Leaving the children alone was completely ___ of him. (RESPONSIBLE)", correctAnswer: "irresponsible", acceptableAnswers: ["irresponsible"], explanation: "Negativo con r- → **ir-responsible**." }
    ]
  });
})();
