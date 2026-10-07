(function () {
  "use strict";

  // Contrato de contenido: cada lección conserva esta forma para que el curso
  // pueda ampliarse sin cambiar el motor de la aplicación.
  window.ENGLISH_BLOOM_LESSONS = [
    {
      id: "conversation-tags",
      order: 1,
      title: "Keep the conversation going",
      subtitle: "Conversaciones y question tags",
      duration: 12,
      icon: "💬",
      accent: "coral",
      objectives: [
        "Confirmar información con question tags",
        "Elegir la coletilla correcta según el verbo",
        "Mantener una conversación de forma natural"
      ],
      sourceReferences: ["English for Everyone · Módulo 1", "English Grammar in Use · Unidad 52"],
      theorySections: [
        {
          title: "Una pregunta pequeña al final",
          body: "Las question tags son coletillas que añadimos al final de una frase para confirmar algo o invitar a la otra persona a responder. Si la frase es afirmativa, la coletilla suele ser negativa; si la frase es negativa, suele ser afirmativa."
        },
        {
          title: "Reutiliza el auxiliar",
          body: "La coletilla conserva el auxiliar de la frase: is cambia a isn't, have a haven't y can a can't. Con el presente simple usamos do o does; con el pasado simple, did. El pronombre sustituye al sujeto."
        }
      ],
      examples: [
        { phrase: "You're from Madrid, aren't you?", note: "Frase afirmativa + coletilla negativa." },
        { phrase: "She doesn't work here, does she?", note: "Frase negativa + coletilla afirmativa." },
        { phrase: "They went home, didn't they?", note: "El pasado simple usa did." }
      ],
      exercises: [
        {
          id: "tags-choice",
          type: "multipleChoice",
          instruction: "Elige la coletilla correcta.",
          prompt: "Laura is your sister, ___?",
          options: ["is she", "isn't she", "doesn't she"],
          correctAnswer: "isn't she",
          explanation: "La frase usa is y es afirmativa, por eso la coletilla es negativa: isn't she?"
        },
        {
          id: "tags-fill",
          type: "fillBlank",
          instruction: "Completa la frase.",
          prompt: "You like coffee, ___?",
          correctAnswer: "don't you",
          acceptableAnswers: ["don't you", "dont you"],
          explanation: "Like está en presente simple. Con you usamos do; al ser afirmativa, la coletilla es don't you?"
        },
        {
          id: "tags-order",
          type: "reorder",
          instruction: "Ordena las palabras para crear una pregunta natural.",
          prompt: "Construye la frase completa.",
          words: ["isn't", "This", "restaurant", "it", "great", "is"],
          correctAnswer: "This restaurant is great isn't it",
          explanation: "This restaurant is great, isn't it? confirma una opinión positiva con una coletilla negativa."
        },
        {
          id: "tags-match",
          type: "match",
          instruction: "Relaciona cada frase con su coletilla.",
          prompt: "Selecciona una opción para cada frase.",
          pairs: [
            { left: "He can swim", right: "can't he?" },
            { left: "They aren't late", right: "are they?" },
            { left: "Marta called", right: "didn't she?" }
          ],
          explanation: "Cada coletilla reutiliza el auxiliar o el tiempo verbal y cambia de afirmativo a negativo, o al revés."
        },
        {
          id: "tags-context",
          type: "context",
          instruction: "Elige la respuesta que mantiene mejor la conversación.",
          prompt: "A: The class starts at six, doesn't it?\nB: ___",
          options: ["Yes, that's right.", "At the library.", "I am starting."],
          correctAnswer: "Yes, that's right.",
          explanation: "La persona A pide confirmación. Yes, that's right confirma la información de forma natural."
        }
      ]
    },
    {
      id: "routines-present-simple",
      order: 2,
      title: "My everyday rhythm",
      subtitle: "Rutinas y presente simple",
      duration: 14,
      icon: "⏰",
      accent: "sky",
      objectives: [
        "Describir rutinas con el presente simple",
        "Usar correctamente do, does y la tercera persona",
        "Situar adverbios de frecuencia en una frase"
      ],
      sourceReferences: ["English for Everyone · Módulos 8–9", "English Grammar in Use · Unidades 2–4"],
      theorySections: [
        {
          title: "Hábitos y hechos habituales",
          body: "Usamos el presente simple para rutinas, costumbres y situaciones que se repiten. Con I, you, we y they usamos la forma base del verbo; con he, she e it normalmente añadimos -s."
        },
        {
          title: "Preguntas y frecuencia",
          body: "Las preguntas empiezan con do o does: Do you work on Fridays? Does she walk to work? Los adverbios como usually y often van antes del verbo principal, pero después de be."
        }
      ],
      examples: [
        { phrase: "I usually get up at seven.", note: "Usually aparece antes del verbo principal." },
        { phrase: "Daniel works from home.", note: "Con he, she o it añadimos -s al verbo." },
        { phrase: "How often do you cook?", note: "Do forma la pregunta con you." }
      ],
      exercises: [
        {
          id: "routines-choice",
          type: "multipleChoice",
          instruction: "Elige la forma correcta.",
          prompt: "My brother ___ to work at eight.",
          options: ["go", "goes", "is go"],
          correctAnswer: "goes",
          explanation: "My brother equivale a he, por eso el verbo lleva -s: goes."
        },
        {
          id: "routines-fill",
          type: "fillBlank",
          instruction: "Completa la pregunta con una palabra.",
          prompt: "How often ___ you exercise?",
          correctAnswer: "do",
          explanation: "En presente simple usamos do para formar preguntas con you."
        },
        {
          id: "routines-order",
          type: "reorder",
          instruction: "Ordena las palabras.",
          prompt: "Construye una frase sobre una rutina.",
          words: ["before", "usually", "bed", "reads", "She"],
          correctAnswer: "She usually reads before bed",
          explanation: "El adverbio usually se coloca entre el sujeto y el verbo principal."
        },
        {
          id: "routines-match",
          type: "match",
          instruction: "Relaciona cada sujeto con su verbo.",
          prompt: "Presta atención a la tercera persona.",
          pairs: [
            { left: "I", right: "play tennis" },
            { left: "Maya", right: "studies English" },
            { left: "Our dog", right: "sleeps downstairs" }
          ],
          explanation: "I mantiene la forma base; Maya y our dog son tercera persona singular y sus verbos cambian."
        },
        {
          id: "routines-context",
          type: "context",
          instruction: "Elige la respuesta más natural.",
          prompt: "A: How often do you go swimming?\nB: ___",
          options: ["Twice a week.", "At the sports centre.", "For two hours yesterday."],
          correctAnswer: "Twice a week.",
          explanation: "How often pregunta por frecuencia, por eso respondemos Twice a week."
        }
      ]
    },
    {
      id: "clothes-present-continuous",
      order: 3,
      title: "What are you wearing?",
      subtitle: "Ropa y presente continuo",
      duration: 13,
      icon: "👕",
      accent: "violet",
      objectives: [
        "Describir acciones que ocurren ahora",
        "Construir be + verbo terminado en -ing",
        "Hablar de ropa y situaciones temporales"
      ],
      sourceReferences: ["English for Everyone · Módulo 13", "English Grammar in Use · Unidad 1"],
      theorySections: [
        {
          title: "Lo que sucede en este momento",
          body: "El presente continuo describe una acción en progreso ahora o alrededor del momento actual. Se forma con am, is o are y el verbo terminado en -ing."
        },
        {
          title: "La forma -ing",
          body: "Normalmente añadimos -ing: wear → wearing. Si el verbo termina en -e, quitamos esa letra: make → making. En verbos cortos a veces duplicamos la consonante final: sit → sitting."
        }
      ],
      examples: [
        { phrase: "I'm wearing a green sweater.", note: "I utiliza am, que se contrae como 'm." },
        { phrase: "She's trying on a jacket.", note: "Una acción que ocurre ahora." },
        { phrase: "They aren't waiting outside.", note: "La negación se coloca después de are." }
      ],
      exercises: [
        {
          id: "continuous-choice",
          type: "multipleChoice",
          instruction: "Elige la forma correcta.",
          prompt: "Look! Tom ___ a blue jacket.",
          options: ["wears", "is wearing", "wearing"],
          correctAnswer: "is wearing",
          explanation: "Look! indica que la acción ocurre ahora. Tom usa is + wearing."
        },
        {
          id: "continuous-fill",
          type: "fillBlank",
          instruction: "Completa con dos palabras.",
          prompt: "We ___ for the bus right now.",
          correctAnswer: "are waiting",
          acceptableAnswers: ["are waiting", "'re waiting"],
          explanation: "Con we usamos are y el verbo wait toma la terminación -ing."
        },
        {
          id: "continuous-order",
          type: "reorder",
          instruction: "Ordena las palabras.",
          prompt: "Forma una frase en presente continuo.",
          words: ["new", "trying", "They", "shoes", "are", "on"],
          correctAnswer: "They are trying on new shoes",
          explanation: "La estructura es sujeto + are + verbo en -ing; try on es un phrasal verb."
        },
        {
          id: "continuous-match",
          type: "match",
          instruction: "Relaciona cada sujeto con la forma correcta.",
          prompt: "Une las dos partes de cada frase.",
          pairs: [
            { left: "I", right: "am wearing boots" },
            { left: "She", right: "is carrying a bag" },
            { left: "We", right: "are looking for a coat" }
          ],
          explanation: "I combina con am, she con is y we con are."
        },
        {
          id: "continuous-context",
          type: "context",
          instruction: "Elige la respuesta adecuada.",
          prompt: "A: Why can't Ana answer the phone?\nB: ___",
          options: ["She's having a shower.", "She has a shower every day.", "She had a shower."],
          correctAnswer: "She's having a shower.",
          explanation: "La pregunta pide una razón actual; el presente continuo describe lo que Ana está haciendo ahora."
        }
      ]
    },
    {
      id: "childhood-past-simple",
      order: 4,
      title: "When I was younger",
      subtitle: "Infancia y pasado simple",
      duration: 15,
      icon: "🎈",
      accent: "amber",
      objectives: [
        "Contar acciones terminadas en el pasado",
        "Distinguir verbos regulares e irregulares",
        "Crear preguntas con did"
      ],
      sourceReferences: ["English for Everyone · Módulo 20", "English Grammar in Use · Unidad 5"],
      theorySections: [
        {
          title: "Un momento pasado y terminado",
          body: "Usamos el pasado simple para acciones completas en un momento anterior: yesterday, last year o when I was a child. Los verbos regulares suelen terminar en -ed; los irregulares tienen formas propias."
        },
        {
          title: "Preguntas con did",
          body: "Para preguntar usamos did + sujeto + forma base: Did you play? Después de did el verbo no va en pasado. La negación se forma con didn't + forma base."
        }
      ],
      examples: [
        { phrase: "I lived near the sea as a child.", note: "Live es regular: lived." },
        { phrase: "We went there every summer.", note: "Went es el pasado irregular de go." },
        { phrase: "Did you enjoy school?", note: "Después de did usamos enjoy, no enjoyed." }
      ],
      exercises: [
        {
          id: "past-choice",
          type: "multipleChoice",
          instruction: "Elige la forma correcta.",
          prompt: "Yesterday, I ___ my grandparents.",
          options: ["visit", "visited", "did visited"],
          correctAnswer: "visited",
          explanation: "Yesterday sitúa la acción en el pasado. Visit es regular y forma visited."
        },
        {
          id: "past-fill",
          type: "fillBlank",
          instruction: "Completa con el pasado de go.",
          prompt: "Leo ___ to school by bus last year.",
          correctAnswer: "went",
          explanation: "Go es irregular: su forma de pasado es went."
        },
        {
          id: "past-order",
          type: "reorder",
          instruction: "Ordena las palabras para crear una pregunta.",
          prompt: "Pregunta por una fiesta pasada.",
          words: ["the", "you", "Did", "party", "enjoy"],
          correctAnswer: "Did you enjoy the party",
          explanation: "La pregunta sigue el orden did + sujeto + verbo base + complemento."
        },
        {
          id: "past-match",
          type: "match",
          instruction: "Relaciona el presente con su pasado.",
          prompt: "Une cada verbo con su forma irregular.",
          pairs: [
            { left: "buy", right: "bought" },
            { left: "take", right: "took" },
            { left: "grow", right: "grew" }
          ],
          explanation: "Bought, took y grew son formas irregulares que conviene aprender como vocabulario."
        },
        {
          id: "past-context",
          type: "context",
          instruction: "Elige la respuesta que corresponde.",
          prompt: "A: What did you do last weekend?\nB: ___",
          options: ["I visited an old friend.", "I visit an old friend.", "I am visiting an old friend."],
          correctAnswer: "I visited an old friend.",
          explanation: "La pregunta está en pasado y menciona last weekend, así que respondemos con visited."
        }
      ]
    },
    {
      id: "travel-present-perfect",
      order: 5,
      title: "Places I've been",
      subtitle: "Viajes y presente perfecto",
      duration: 16,
      icon: "✈️",
      accent: "mint",
      objectives: [
        "Hablar de experiencias sin indicar un momento terminado",
        "Formar have o has + participio",
        "Usar ever y never en preguntas y respuestas"
      ],
      sourceReferences: ["English for Everyone · Módulo 24", "English Grammar in Use · Unidades 7–8"],
      theorySections: [
        {
          title: "Experiencias conectadas con el presente",
          body: "El presente perfecto habla de experiencias ocurridas antes de ahora cuando el momento exacto no importa. Se forma con have o has y el participio: I have travelled; she has seen."
        },
        {
          title: "Ever y never",
          body: "Ever significa alguna vez y aparece a menudo en preguntas. Never significa nunca y ya contiene una idea negativa: Have you ever flown alone? I have never flown alone."
        }
      ],
      examples: [
        { phrase: "I've visited Rome twice.", note: "La experiencia forma parte de la vida hasta ahora." },
        { phrase: "Has Leo ever travelled abroad?", note: "Has concuerda con Leo; ever pregunta por cualquier momento." },
        { phrase: "We have never missed a flight.", note: "Never se coloca entre have y el participio." }
      ],
      exercises: [
        {
          id: "perfect-choice",
          type: "multipleChoice",
          instruction: "Elige el auxiliar correcto.",
          prompt: "Sara ___ visited Portugal twice.",
          options: ["have", "has", "did"],
          correctAnswer: "has",
          explanation: "Sara equivale a she, por eso usamos has + visited."
        },
        {
          id: "perfect-fill",
          type: "fillBlank",
          instruction: "Completa con el participio correcto.",
          prompt: "Have you ever ___ sushi?",
          correctAnswer: "tried",
          explanation: "Después de have necesitamos el participio. Try es regular y cambia la y por i: tried."
        },
        {
          id: "perfect-order",
          type: "reorder",
          instruction: "Ordena las palabras.",
          prompt: "Construye una experiencia negativa.",
          words: ["missed", "never", "a", "have", "We", "flight"],
          correctAnswer: "We have never missed a flight",
          explanation: "Never se sitúa después de have y antes del participio missed."
        },
        {
          id: "perfect-match",
          type: "match",
          instruction: "Relaciona el verbo con su participio.",
          prompt: "Une las formas irregulares.",
          pairs: [
            { left: "see", right: "seen" },
            { left: "fly", right: "flown" },
            { left: "take", right: "taken" }
          ],
          explanation: "Seen, flown y taken son participios irregulares usados después de have o has."
        },
        {
          id: "perfect-context",
          type: "context",
          instruction: "Elige la respuesta más natural.",
          prompt: "A: Have you ever been to Scotland?\nB: ___",
          options: ["Yes, I went there in 2024.", "Yes, I have go there.", "Yes, I am there yesterday."],
          correctAnswer: "Yes, I went there in 2024.",
          explanation: "La respuesta confirma la experiencia y después usa pasado simple porque menciona un momento terminado: in 2024."
        }
      ]
    },
    {
      id: "future-plans",
      order: 6,
      title: "Plans in motion",
      subtitle: "Planes futuros y going to",
      duration: 15,
      icon: "🗓️",
      accent: "blue",
      objectives: [
        "Diferenciar planes acordados e intenciones",
        "Usar el presente continuo para preparativos concretos",
        "Formar be going to correctamente"
      ],
      sourceReferences: ["English for Everyone · Módulos 35–37", "English Grammar in Use · Unidades 19–20"],
      theorySections: [
        {
          title: "Preparativos ya acordados",
          body: "Usamos el presente continuo para planes futuros concretos, normalmente con hora, lugar o personas acordadas: We're meeting Eva at seven. El contexto futuro evita confundirlo con una acción actual."
        },
        {
          title: "Intenciones y predicciones",
          body: "Be going to expresa una intención decidida o una predicción basada en lo que vemos. Conserva el verbo be: I am going to study; they are going to leave."
        }
      ],
      examples: [
        { phrase: "I'm meeting Sam on Friday.", note: "Es un plan acordado con otra persona." },
        { phrase: "We're going to save more money.", note: "Es una intención ya decidida." },
        { phrase: "Look at those clouds! It's going to rain.", note: "La evidencia presente permite hacer una predicción." }
      ],
      exercises: [
        {
          id: "future-choice",
          type: "multipleChoice",
          instruction: "Elige la forma correcta.",
          prompt: "We ___ meeting the designer tomorrow at ten.",
          options: ["are", "do", "going"],
          correctAnswer: "are",
          explanation: "Es un preparativo concreto. El presente continuo se forma con we are + meeting."
        },
        {
          id: "future-fill",
          type: "fillBlank",
          instruction: "Completa con una palabra.",
          prompt: "I ___ going to learn to drive this year.",
          correctAnswer: "am",
          acceptableAnswers: ["am", "'m"],
          explanation: "Going to necesita el verbo be. Con I usamos am o la contracción 'm."
        },
        {
          id: "future-order",
          type: "reorder",
          instruction: "Ordena las palabras.",
          prompt: "Expresa una intención futura.",
          words: ["June", "going", "travel", "They", "in", "to", "are"],
          correctAnswer: "They are going to travel in June",
          explanation: "La estructura es sujeto + be + going to + verbo base."
        },
        {
          id: "future-match",
          type: "match",
          instruction: "Relaciona cada situación con el plan adecuado.",
          prompt: "Piensa si es un acuerdo, una intención o una predicción.",
          pairs: [
            { left: "Mesa reservada a las ocho", right: "We're having dinner at eight." },
            { left: "Decisión de ahorrar", right: "I'm going to save more." },
            { left: "Nubes negras", right: "It's going to rain." }
          ],
          explanation: "Un horario acordado usa presente continuo; una intención y una predicción con evidencia usan going to."
        },
        {
          id: "future-context",
          type: "context",
          instruction: "Elige la respuesta más natural.",
          prompt: "A: What are you doing on Saturday?\nB: ___",
          options: ["I'm meeting Clara for lunch.", "I meet Clara yesterday.", "I going meet Clara."],
          correctAnswer: "I'm meeting Clara for lunch.",
          explanation: "La pregunta pide un plan concreto para el sábado; respondemos con presente continuo."
        }
      ]
    }
  ];
})();
