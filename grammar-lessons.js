(function () {
  "use strict";

  const categories = [
    { id: "present-past", name: "Presente y pasado", from: 1, to: 18, guide: "Identifica primero el momento de la acción y después decide si importa su duración, repetición o resultado." },
    { id: "future", name: "Futuro", from: 19, to: 25, guide: "Distingue entre planes acordados, intenciones, predicciones y decisiones tomadas al hablar." },
    { id: "modals", name: "Modales y condicionales", from: 26, to: 41, guide: "Observa el grado de certeza, obligación o posibilidad que comunica cada verbo modal y cada condición." },
    { id: "passive", name: "Voz pasiva", from: 42, to: 46, guide: "Busca quién recibe la acción y construye la forma adecuada de be seguida del participio." },
    { id: "reported-questions", name: "Estilo indirecto y preguntas", from: 47, to: 52, guide: "Presta atención al orden de las palabras, los auxiliares y los cambios de tiempo verbal." },
    { id: "verb-patterns", name: "Patrones verbales", from: 53, to: 68, guide: "Aprende cada verbo junto con el patrón que lo acompaña: -ing, infinitivo o preposición." },
    { id: "nouns-articles", name: "Sustantivos y determinantes", from: 69, to: 91, guide: "Comprueba si el sustantivo es contable, singular, plural, general o específico antes de elegir el determinante." },
    { id: "relative", name: "Oraciones de relativo", from: 92, to: 97, guide: "Decide qué información identifica al nombre y cuál solo añade un dato extra." },
    { id: "adjectives", name: "Adjetivos y comparaciones", from: 98, to: 108, guide: "Distingue si describes un nombre, una acción, una intensidad o una comparación." },
    { id: "word-order", name: "Orden y conectores", from: 109, to: 120, guide: "Localiza la función de cada bloque de la frase y usa el conector que exprese la relación exacta." },
    { id: "prepositions", name: "Preposiciones", from: 121, to: 136, guide: "Estudia las preposiciones dentro de expresiones completas; la traducción palabra por palabra suele fallar." },
    { id: "phrasal-verbs", name: "Phrasal verbs", from: 137, to: 145, guide: "Aprende cada phrasal verb como una unidad y comprueba si permite separar el verbo de la partícula." }
  ];

  const raw = `
Present continuous (I am doing)||Forma acciones en progreso con am/is/are + verbo en -ing y distingue sus usos temporales.
Present simple (I do)||Describe hábitos, hechos y situaciones estables usando correctamente la tercera persona.
Present continuous and present simple 1||Contrasta lo que sucede ahora con lo que ocurre de manera habitual.
Present continuous and present simple 2||Distingue acciones temporales de estados y verbos que normalmente no se usan en continuo.
Past simple (I did)||Cuenta acciones terminadas en un momento pasado con verbos regulares e irregulares.
Past continuous (I was doing)||Describe una acción que estaba en progreso en un momento del pasado.
Present perfect 1 (I have done)||Conecta una acción pasada con el presente mediante have/has + participio.
Present perfect 2 (I have done)||Practica experiencias y resultados presentes sin indicar un momento pasado terminado.
Present perfect continuous (I have been doing)||Destaca la duración o continuidad de una actividad iniciada antes de ahora.
Present perfect continuous and simple||Elige entre destacar la actividad en curso o su resultado y cantidad completada.
How long have you (been)...?||Pregunta por la duración de estados y actividades que continúan en el presente.
For, since, when and how long||Usa for para periodos, since para puntos de inicio y when para momentos terminados.
Present perfect and past 1||Decide entre presente perfecto y pasado simple según exista o no un tiempo terminado.
Present perfect and past 2||Afianza el contraste entre experiencias conectadas al presente y hechos pasados fechados.
Past perfect (I had done)||Sitúa una acción anterior a otra acción o momento del pasado.
Past perfect continuous (I had been doing)||Expresa cuánto tiempo llevaba ocurriendo una actividad antes de otro hecho pasado.
Have and have got||Usa have y have got para posesión, relaciones y características en registros habituales.
Used to (do)||Habla de hábitos y situaciones pasadas que ya no son ciertas.
Present tenses for the future||Utiliza el presente continuo para acuerdos y el presente simple para horarios futuros.
I'm going to (do)||Expresa intenciones decididas y predicciones basadas en evidencia presente.
Will and shall 1||Usa will para decisiones espontáneas, ofrecimientos, promesas y predicciones.
Will and shall 2||Amplía los usos de will y shall en propuestas, expectativas y situaciones futuras.
I will and I'm going to||Diferencia una decisión tomada al hablar de una intención ya existente.
Will be doing and will have done||Describe acciones en progreso o ya completadas en un punto futuro.
When I do and when I've done; if and when||Usa presente, no will, en subordinadas futuras con when e if.
Can, could and be able to||Expresa capacidad y posibilidad en diferentes tiempos y situaciones.
Could do and could have done||Distingue una posibilidad presente o futura de una oportunidad pasada no realizada.
Must and can't||Formula deducciones lógicas positivas y negativas a partir de la evidencia.
May and might 1||Expresa posibilidades presentes y futuras con distintos grados de incertidumbre.
May and might 2||Habla de posibilidades pasadas y situaciones hipotéticas con formas perfectas.
Have to and must||Diferencia obligaciones externas, necesidades prácticas y obligaciones sentidas por quien habla.
Must, mustn't and needn't||Separa obligación, prohibición y ausencia de necesidad.
Should 1||Da consejos, expresa expectativas y comenta lo que sería correcto hacer.
Should 2||Usa should en estructuras de recomendación, sorpresa y situaciones hipotéticas.
I'd better and it's time||Formula advertencias con had better y señala que una acción ya debería ocurrir.
Would||Reconoce would en hipótesis, hábitos pasados, preferencias y peticiones corteses.
Requests, offers, permission and invitations||Elige can, could o would para pedir, ofrecer, invitar y solicitar permiso con cortesía.
If I do and if I did||Contrasta condiciones posibles con situaciones imaginarias o poco probables.
If I knew and I wish I knew||Expresa situaciones presentes irreales y deseos sobre una realidad diferente.
If I had known and I wish I had known||Habla de condiciones pasadas irreales, consecuencias imaginadas y arrepentimientos.
Wish||Construye deseos sobre el presente, el pasado y cambios que quieres que ocurran.
Passive 1 (is done / was done)||Forma la pasiva básica con be + participio en presente y pasado.
Passive 2 (be done / been done / being done)||Construye pasivas con infinitivo, formas perfectas y tiempos continuos.
Passive 3||Selecciona voz activa o pasiva según sea más importante el agente o el resultado.
It is said that / he is said to||Presenta información atribuida a fuentes generales con estructuras pasivas impersonales.
Have something done||Expresa que encargas o recibes un servicio realizado por otra persona.
Reported speech 1||Cuenta lo dicho por alguien adaptando pronombres, tiempos y referencias temporales.
Reported speech 2||Practica verbos introductores y los cambios que dependen del contexto del relato.
Questions 1||Construye preguntas directas con el auxiliar, sujeto y verbo en el orden correcto.
Questions 2 (indirect questions)||Forma preguntas indirectas sin invertir sujeto y verbo en la parte subordinada.
Auxiliary verbs and short responses||Usa auxiliares para evitar repeticiones, mostrar acuerdo y crear respuestas breves.
Question tags||Añade coletillas afirmativas o negativas para confirmar información y mantener la conversación.
Verb + -ing||Aprende qué verbos van seguidos de gerundio y cómo construir su negación.
Verb + to||Aprende los verbos que requieren infinitivo con to y las estructuras que forman.
Verb + object + to||Construye patrones en los que una persona u objeto aparece antes del infinitivo.
Verb + -ing or to 1||Observa cómo cambia el significado de remember, regret y otros verbos según el patrón.
Verb + -ing or to 2||Distingue los sentidos de try, need y help con gerundio o infinitivo.
Verb + -ing or to 3||Contrasta gustos generales con deseos concretos usando like y would like.
Prefer and would rather||Expresa preferencias generales y elecciones en situaciones concretas.
Preposition + -ing||Usa el gerundio después de preposiciones en expresiones verbales y nominales.
Be/get used to||Diferencia estar acostumbrado, acostumbrarse y el antiguo hábito expresado por used to.
Verb + preposition + -ing||Aprende combinaciones de verbo y preposición que exigen gerundio.
There's no point in -ing / it's worth -ing||Emplea expresiones fijas para valorar si una actividad merece la pena o tiene sentido.
To, for and so that||Expresa propósito eligiendo infinitivo, for + nombre o una oración con so that.
Adjective + to||Combina adjetivos con infinitivos para expresar reacciones, dificultad y valoraciones.
Afraid to do and afraid of -ing||Distingue temor a actuar voluntariamente de temor a que algo ocurra.
See somebody do / doing||Contrasta una acción completa observada con una acción vista mientras ocurría.
-ing clauses||Reduce oraciones y conecta acciones relacionadas usando cláusulas terminadas en -ing.
Countable and uncountable 1||Distingue nombres contables e incontables para elegir plural, artículo y cuantificador.
Countable and uncountable 2||Reconoce nombres que cambian de significado o uso según sean contables.
Countable nouns with a/an and some||Usa a/an con un singular no específico y some cuando la cantidad no se concreta.
A/an and the||Decide si introduces algo por primera vez o te refieres a algo ya identificado.
The 1||Utiliza the cuando hablante y oyente pueden identificar la persona o cosa concreta.
The 2 (school / the school)||Distingue la función general de un lugar del edificio o lugar específico.
The 3 (children / the children)||Contrasta referencias generales en plural con grupos concretos ya identificados.
The 4 (the giraffe / the telephone / the old)||Usa the con especies, inventos y grupos expresados mediante adjetivos.
Names with and without the 1||Aprende qué nombres geográficos llevan artículo y cuáles se usan sin él.
Names with and without the 2||Amplía el uso del artículo en edificios, organizaciones, periódicos y nombres propios.
Singular and plural||Controla plurales regulares, irregulares y nombres con concordancia especial.
Noun + noun||Crea nombres compuestos donde el primer sustantivo describe el tipo o propósito del segundo.
Possessive 's and of||Elige entre la forma posesiva con 's y una construcción con of.
Myself, yourself, themselves||Usa pronombres reflexivos cuando sujeto y objeto son la misma persona o para dar énfasis.
A friend of mine / my own / by myself||Expresa pertenencia, exclusividad e independencia con estructuras posesivas especiales.
There and it||Usa there para presentar existencia e it para tiempo, distancia, clima y referencias conocidas.
Some and any||Elige some o any según el tipo de frase, la expectativa y la intención comunicativa.
No, none, any, nothing and nobody||Construye significados negativos sin usar dobles negaciones incorrectas.
Much, many, little, few, a lot and plenty||Expresa cantidades grandes o pequeñas según el sustantivo y el matiz deseado.
All / most / no + of||Decide cuándo un cuantificador necesita of antes de un pronombre o determinante.
Both, neither and either||Habla de dos elementos indicando los dos, ninguno o cualquiera de ellos.
All, every and whole||Distingue totalidad colectiva, cada miembro de un grupo y una unidad completa.
Each and every||Contrasta la atención individual de each con la generalización de every.
Relative clauses 1: who/that/which||Añade información que identifica personas o cosas mediante pronombres relativos.
Relative clauses 2: omitting the relative pronoun||Reconoce cuándo el pronombre relativo es objeto y puede omitirse.
Relative clauses 3: whose/whom/where||Expresa posesión, referencia formal a personas y lugares dentro de una relativa.
Relative clauses 4: extra information 1||Añade información no esencial entre comas sin usar that.
Relative clauses 5: extra information 2||Amplía las relativas explicativas con preposiciones, cuantificadores y referencias completas.
-ing and -ed clauses||Reduce relativas usando participios activos en -ing o participios pasivos en -ed.
Adjectives ending in -ing and -ed||Distingue la causa de una sensación de la persona que la experimenta.
Adjectives: order and linking verbs||Coloca varios adjetivos en un orden natural y úsalos tras verbos como look o feel.
Adjectives and adverbs 1||Elige adjetivo para describir un nombre y adverbio para modificar una acción.
Adjectives and adverbs 2||Practica formas especiales como well, fast, hard y hardly sin confundir sus significados.
So and such||Intensifica cualidades con so y grupos nominales con such.
Enough and too||Expresa suficiencia con enough y exceso problemático con too.
Quite, pretty, rather and fairly||Modula la intensidad de adjetivos y adverbios con diferencias de tono y expectativa.
Comparative 1||Forma comparativos cortos y largos para establecer diferencias entre dos elementos.
Comparative 2||Matiza comparaciones con much, a bit, any, no y estructuras progresivas.
Comparative 3 (as...as / than)||Expresa igualdad, desigualdad y comparaciones mediante as...as y than.
Superlative||Señala el grado máximo dentro de un grupo con -est o most.
Word order 1: object, place and time||Ordena verbo, objeto, lugar y tiempo sin separar indebidamente el verbo de su objeto.
Word order 2: adverbs with the verb||Coloca adverbios de frecuencia y otras expresiones en la posición natural de la frase.
Still, any more, yet and already||Sitúa acciones que continúan, terminan o suceden antes o después de lo esperado.
Even||Destaca información sorprendente colocando even delante del elemento enfatizado.
Although, though, in spite of and despite||Contrasta ideas usando una oración completa o una expresión nominal.
In case||Habla de una precaución tomada porque algo podría suceder.
Unless, as long as and provided||Formula condiciones negativas y requisitos necesarios para que algo ocurra.
As||Usa as para acciones simultáneas, cambios paralelos, causas y funciones.
Like and as||Distingue comparación o semejanza de función y manera real.
Like, as if and as though||Describe apariencias y comparaciones reales o imaginarias.
During, for and while||Diferencia el periodo en que sucede algo, su duración y dos acciones simultáneas.
By, until and by the time||Contrasta una fecha límite con una situación que continúa hasta cierto momento.
At, on and in (time)||Elige la preposición temporal según precisión, día o periodo amplio.
On time, in time, at the end and in the end||Diferencia puntualidad, margen suficiente, final de algo y resultado definitivo.
In, at and on (position) 1||Sitúa elementos dentro de espacios, en puntos concretos o sobre superficies.
In, at and on (position) 2||Aplica las preposiciones de posición a edificios, eventos, direcciones y lugares.
In, at and on (position) 3||Afianza expresiones espaciales frecuentes y excepciones de uso.
To, at, in and into||Distingue movimiento hacia un destino, posición y entrada en un espacio.
In, on and at: other uses||Aprende expresiones fijas en las que estas preposiciones no indican solo lugar o tiempo.
By||Usa by para medios, autoría, cercanía, fechas límite y expresiones de medida.
Noun + preposition||Aprende sustantivos junto con la preposición que introduce su complemento.
Adjective + preposition 1||Memoriza combinaciones frecuentes de adjetivo y preposición dentro de frases completas.
Adjective + preposition 2||Amplía las combinaciones de adjetivos con of, to, with, at, for y about.
Verb + preposition 1: to and at||Distingue verbos dirigidos a una persona o cosa con to y at.
Verb + preposition 2: about/for/of/after||Aprende el significado completo que adquiere cada verbo con su preposición.
Verb + preposition 3: about and of||Contrasta combinaciones verbales parecidas que seleccionan about u of.
Verb + preposition 4: of/for/from/on||Practica patrones verbales fijos y el complemento que introducen.
Verb + preposition 5: in/into/with/to/on||Completa el repertorio de verbos que requieren una preposición concreta.
Phrasal verbs 1: introduction||Reconoce verbo, partícula, significado y posición posible del objeto.
Phrasal verbs 2: in/out||Aprende phrasal verbs frecuentes construidos con in y out.
Phrasal verbs 3: out||Amplía los sentidos que aporta out en distintas combinaciones verbales.
Phrasal verbs 4: on/off 1||Estudia combinaciones con on y off relacionadas con continuidad, conexión y separación.
Phrasal verbs 5: on/off 2||Practica nuevos significados idiomáticos de verbos seguidos de on u off.
Phrasal verbs 6: up/down||Relaciona up y down con aumento, reducción, movimiento y finalización.
Phrasal verbs 7: up 1||Aprende phrasal verbs con up y comprueba cuáles permiten separar el objeto.
Phrasal verbs 8: up 2||Amplía los significados no literales de nuevas combinaciones con up.
Phrasal verbs 9: away/back||Usa away y back para expresar distancia, desaparición, devolución y respuesta.
  `.trim().split("\n").map((line) => line.split("||"));

  function categoryFor(unit) {
    return categories.find((category) => unit >= category.from && unit <= category.to);
  }

  window.ENGLISH_BLOOM_GRAMMAR_CATEGORIES = categories;
  window.ENGLISH_BLOOM_GRAMMAR = raw.map(([title, summary], index) => {
    const unit = index + 1;
    const category = categoryFor(unit);
    return {
      id: `grammar-${unit}`,
      unit,
      title,
      summary,
      categoryId: category.id,
      category: category.name,
      studyGuide: category.guide,
      theoryPage: 12 + unit * 2,
      exercisePage: 13 + unit * 2
    };
  });
})();
