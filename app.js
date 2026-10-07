(function () {
  "use strict";

  const lessons = window.ENGLISH_BLOOM_LESSONS || [];
  const grammarLessons = window.ENGLISH_BLOOM_GRAMMAR || [];
  const grammarCategories = window.ENGLISH_BLOOM_GRAMMAR_CATEGORIES || [];
  const bookContent = window.ENGLISH_GRAMMAR_BOOK || { theory: [], exercises: [], appendices: [], answers: {} };
  const app = document.querySelector("#app");
  const dialog = document.querySelector("#about-dialog");
  const resetDialog = document.querySelector("#reset-dialog");
  const STORAGE_KEY = "english-bloom-progress-v1";
  let lessonSession = null;
  let progress = loadProgress();

  function emptyProgress() {
    return { version: 4, lastLessonId: null, lastGrammarUnitId: null, lessons: {}, grammarUnits: {} };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyProgress();
      const parsed = JSON.parse(raw);
      if (![1, 2, 3, 4].includes(parsed?.version) || !parsed.lessons || typeof parsed.lessons !== "object") {
        throw new Error("Formato de progreso no válido");
      }
      const migratedGrammarUnits = Object.fromEntries(Object.entries(
        parsed.grammarUnits && typeof parsed.grammarUnits === "object" ? parsed.grammarUnits : {}
      ).map(([id, unit]) => [id, parsed.version < 3 ? { ...unit, exerciseAnswers: {} } : unit]));
      const migrated = {
        ...emptyProgress(),
        ...parsed,
        version: 4,
        lessons: parsed.lessons,
        grammarUnits: migratedGrammarUnits
      };
      if (parsed.version < 4) localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    } catch (_error) {
      try { localStorage.removeItem(STORAGE_KEY); } catch (_storageError) { /* La app continúa en memoria. */ }
      return emptyProgress();
    }
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (_error) { /* La app continúa en memoria. */ }
    window.dispatchEvent(new CustomEvent("english-bloom:data-changed", { detail: { source: "progress" } }));
  }

  function getLessonProgress(id) {
    return progress.lessons[id] || null;
  }

  function getGrammarProgress(id) {
    return progress.grammarUnits[id] || null;
  }

  function updateGrammarProgress(id, changes) {
    const current = getGrammarProgress(id) || { confidence: 0, notes: "" };
    progress.lastGrammarUnitId = id;
    progress.grammarUnits[id] = { ...current, ...changes, updatedAt: new Date().toISOString() };
    saveProgress();
  }

  function grammarPracticeStats(saved) {
    saved ||= {};
    const correct = saved.exerciseCorrect || {};
    const mistakes = saved.exerciseMistakes || {};
    const pendingKeys = Object.keys(mistakes).filter((key) => mistakes[key] > 0 && !correct[key]);
    return {
      correct: Object.values(correct).filter(Boolean).length,
      mistakes: Object.values(mistakes).reduce((total, count) => total + Number(count || 0), 0),
      pending: pendingKeys.length,
      pendingKeys
    };
  }

  function setActiveNav(name) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === name);
    });
  }

  function recordLessonOpen(id) {
    const current = getLessonProgress(id) || { attempts: 0, bestScore: 0, mastered: false };
    progress.lastLessonId = id;
    progress.lessons[id] = { ...current, lastOpenedAt: new Date().toISOString() };
    saveProgress();
  }

  function recordLessonResult(id, score) {
    const current = getLessonProgress(id) || { attempts: 0, bestScore: 0, mastered: false };
    progress.lastLessonId = id;
    progress.lessons[id] = {
      ...current,
      attempts: current.attempts + 1,
      bestScore: Math.max(current.bestScore, score),
      lastScore: score,
      mastered: current.mastered || score >= 80,
      lastCompletedAt: new Date().toISOString()
    };
    saveProgress();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function solutionCoversItem(solutionNumber, itemNumber) {
    if (solutionNumber === itemNumber || new RegExp(`^${itemNumber}[a-z]$`, "i").test(solutionNumber)) return true;
    const range = solutionNumber.match(/^(\d+)[–-](\d+)$/);
    return Boolean(range && Number(itemNumber) >= Number(range[1]) && Number(itemNumber) <= Number(range[2]));
  }

  function renderSheetLines(lines, options = {}) {
    if (!lines?.length) return '<p class="sheet-empty">Sin contenido adicional.</p>';
    return lines.map((line) => {
      if (!line.trim()) return '<span class="sheet-spacer" aria-hidden="true"></span>';
      const item = /^\d+[a-z]?\s+/i.test(line) || /^[a-h]:\s+/i.test(line);
      const itemNumber = line.match(/^(\d+[a-z]?)\s+(?!\d)/i)?.[1];
      const workedExample = Boolean(itemNumber && options.solutions
        && !options.solutions.some((solution) => solutionCoversItem(solution.number, itemNumber)));
      const note = /^(compare|note|some more examples|but|remember)\b/i.test(line);
      const reference = /(?:➜|see)\s+(?:unit|appendix)/i.test(line);
      const className = `${item ? "sheet-line is-item" : note ? "sheet-line is-note" : reference ? "sheet-line is-reference" : "sheet-line"}${workedExample ? " is-worked-example" : ""}`;
      const solution = itemNumber && options.solutions?.find((entry) => solutionCoversItem(entry.number, itemNumber));
      const blankCount = (line.match(/\[\[blank\]\]/g) || []).length;
      const answerGroup = solution && options.activity ? `${options.activity}:${itemNumber}` : "";
      let blankIndex = 0;
      const content = escapeHtml(line).replaceAll("[[blank]]", () => {
        if (!solution || !options.activity) return '<span class="exercise-inline-blank" role="img" aria-label="Hueco para completar"></span>';
        const answerId = blankCount === 1 ? `${options.activity}:${solution.number}` : `${answerGroup}:${blankIndex}`;
        const value = options.savedAnswers?.[answerId] || "";
        const field = `<input class="exercise-inline-input" type="text" autocomplete="off" spellcheck="false" placeholder="respuesta" value="${escapeHtml(value)}" data-book-answer data-inline-answer data-activity="${options.activity}" data-answer-number="${escapeHtml(solution.number)}" data-answer-group="${escapeHtml(answerGroup)}" data-answer-id="${escapeHtml(answerId)}" data-blank-index="${blankIndex}" aria-label="Respuesta ${escapeHtml(itemNumber)}, hueco ${blankIndex + 1}">`;
        blankIndex += 1;
        return field;
      });
      const feedback = solution && blankCount ? `<small class="inline-answer-feedback" aria-live="polite" data-answer-feedback><span data-answer-message></span><button type="button" data-reveal-answer hidden>Ver solución</button></small>` : "";
      return `<span class="${className}"${answerGroup ? ` data-answer-group-container="${escapeHtml(answerGroup)}" data-answer-source="${escapeHtml(line)}"` : ""}>${content}${feedback}${workedExample ? '<small class="worked-example-badge">Ejemplo resuelto</small>' : ""}</span>`;
    }).join("");
  }

  function renderRichRuns(runs) {
    return (runs || []).map((run) => {
      let content = escapeHtml(run.text);
      if (run.strong) content = `<strong>${content}</strong>`;
      if (run.italic) content = `<em>${content}</em>`;
      return content;
    }).join("");
  }

  function renderRichTheoryRow(row) {
    return `<div class="rich-theory-row is-${row.kind || "paragraph"}" style="--indent:${row.indent || 0}">
      ${(row.cells || []).map((cell) => `<span class="rich-theory-cell">${renderRichRuns(cell.runs)}</span>`).join("")}
    </div>`;
  }

  function renderRichTheorySection(section) {
    return `<section class="rich-theory-section">
      <header><span>${section.label}</span><h4>${renderRichRuns(section.heading)}</h4></header>
      <div class="rich-theory-content">
        ${section.blocks.map((block) => {
          if (block.type === "panel") return `<div class="rich-theory-panel">${block.rows.map(renderRichTheoryRow).join("")}</div>`;
          if (block.type === "image") return `<figure class="rich-theory-image is-${block.align || "center"}" style="--image-width:${block.width || 50}%"><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt || "")}" loading="lazy"></figure>`;
          return renderRichTheoryRow(block);
        }).join("")}
      </div>
    </section>`;
  }

  function renderExerciseAnswers(activity, savedAnswers = {}) {
    const allSolutions = bookContent.answers?.[activity.number] || [];
    if (!allSolutions.length) return '<p class="exercise-answer-missing">Este ejercicio no tiene una solución cerrada.</p>';
    const inlineItems = activity.lines
      .filter((line) => line.includes("[[blank]]"))
      .map((line) => line.match(/^(\d+[a-z]?)\s+/i)?.[1])
      .filter(Boolean);
    const solutions = allSolutions.filter((solution) => !inlineItems.some((number) => solutionCoversItem(solution.number, number)));
    if (!solutions.length) return "";
    return `
      <div class="exercise-answer-panel">
        <header>
          <strong>Completa el ejercicio</strong>
          <span>Usa la casilla con el mismo número del enunciado. Se corregirá al salir del campo.</span>
        </header>
        <div class="exercise-answer-grid">
          ${solutions.map((solution) => {
            const answerId = `${activity.number}:${solution.number}`;
            return `<label class="exercise-answer-field${solution.example ? " is-open-answer" : ""}">
              <span>Respuesta ${escapeHtml(solution.number)}</span>
              <textarea rows="1" spellcheck="false" placeholder="Escribe aquí…" data-book-answer data-activity="${activity.number}" data-answer-number="${escapeHtml(solution.number)}" data-answer-group="${escapeHtml(answerId)}" data-answer-id="${escapeHtml(answerId)}" aria-label="Respuesta ${escapeHtml(solution.number)} del ejercicio ${activity.number}">${escapeHtml(savedAnswers[answerId] || "")}</textarea>
              <small aria-live="polite" data-answer-feedback><span data-answer-message></span><button type="button" data-reveal-answer hidden>Ver solución</button></small>
            </label>`;
          }).join("")}
        </div>
      </div>`;
  }

  function renderBookSheet(content, kind, label, context = {}) {
    if (!content) return '<p class="book-content-missing">No se encontró el contenido de esta página.</p>';
    const number = context.number || content.unit || "";
    const title = context.title || content.title || label;
    let body = "";

    if (kind === "theory") {
      body = `<div class="sheet-theory-grid">${content.sections.map((section) => section.blocks?.length
        ? renderRichTheorySection(section)
        : `<section class="sheet-theory-section"><span class="sheet-section-label">${section.label}</span><div><h4>${escapeHtml(section.heading || "Idea clave")}</h4><div class="sheet-lines">${renderSheetLines(section.lines)}</div></div></section>`).join("")}</div>`;
    } else if (kind === "exercises") {
      body = `<div class="sheet-activities">${content.activities.map((activity) => `
        <section class="sheet-activity">
          <header><span>${activity.number}</span><h4>${escapeHtml(activity.instruction || "Practica")}</h4></header>
          <div class="sheet-lines exercise-lines">${renderSheetLines(activity.lines, { solutions: bookContent.answers?.[activity.number] || [], activity: activity.number, savedAnswers: context.savedAnswers || {} })}</div>
          ${renderExerciseAnswers(activity, context.savedAnswers)}
        </section>`).join("")}</div>`;
    } else {
      body = `<div class="sheet-appendix-sections">${content.sections.map((section) => `
        <section class="sheet-appendix-section">
          <header><span>${section.number}</span><h4>${escapeHtml(section.heading || "Referencia")}</h4></header>
          <div class="sheet-lines">${renderSheetLines(section.lines)}</div>
        </section>`).join("")}</div>`;
    }

    return `
      <article class="book-html-sheet is-${kind}" aria-label="${escapeHtml(label)}">
        <header class="sheet-header">
          <div class="sheet-unit-tab"><small>${kind === "appendix" ? "Appendix" : "Unit"}</small><strong>${number}</strong></div>
          <div><p>${kind === "exercises" ? "Exercises" : kind === "appendix" ? "Reference" : "Grammar"}</p><h3>${escapeHtml(title)}</h3></div>
        </header>
        <div class="sheet-body">${body}</div>
        <footer><span>English Bloom · HTML study edition</span><span>Página fuente ${content.pdfPage}</span></footer>
      </article>`;
  }

  function lessonCard(lesson, index) {
    const saved = getLessonProgress(lesson.id);
    const started = Boolean(saved?.lastOpenedAt || saved?.attempts);
    const mastered = Boolean(saved?.mastered);
    const label = mastered ? "Repasar lección" : started ? "Continuar lección" : "Empezar lección";
    const status = mastered ? "Dominada" : started ? "En progreso" : "Pendiente";
    const statusClass = mastered ? " is-mastered" : started ? " is-started" : "";
    const meta = saved?.attempts ? `Mejor: ${saved.bestScore}%` : `◷ ${lesson.duration} min`;
    return `
      <article class="lesson-card" style="--delay: ${index * 55}ms">
        <div class="lesson-icon accent-${lesson.accent}" aria-hidden="true">${lesson.icon}</div>
        <div class="lesson-number">LECCIÓN ${String(lesson.order).padStart(2, "0")}</div>
        <h3>${lesson.title}</h3>
        <p>${lesson.subtitle}</p>
        <div class="lesson-meta">
          <span>${meta}</span>
          <span class="status-pill${statusClass}">${status}</span>
        </div>
        <div class="card-progress" aria-hidden="true"><span style="width:${saved?.bestScore || 0}%"></span></div>
        <a class="card-action" href="#/lesson/${lesson.id}" aria-label="${label}: ${lesson.title}">
          ${label}<span aria-hidden="true">→</span>
        </a>
      </article>`;
  }

  function renderDashboard() {
    setActiveNav("home");
    const masteredCount = lessons.filter((lesson) => getLessonProgress(lesson.id)?.mastered).length;
    const attempts = lessons.reduce((total, lesson) => total + (getLessonProgress(lesson.id)?.attempts || 0), 0);
    const bestScore = Math.max(0, ...lessons.map((lesson) => getLessonProgress(lesson.id)?.bestScore || 0));
    const completion = Math.round((masteredCount / lessons.length) * 100);
    const nextLesson = lessons.find((lesson) => !getLessonProgress(lesson.id)?.mastered)
      || [...lessons].sort((a, b) => (getLessonProgress(a.id)?.bestScore || 0) - (getLessonProgress(b.id)?.bestScore || 0))[0];
    const heroTitle = masteredCount === lessons.length
      ? "Tu inglés ya está floreciendo."
      : masteredCount ? `${masteredCount} de ${lessons.length} lecciones dominadas.` : "Hoy es un buen día para empezar.";
    const actionLabel = masteredCount === lessons.length ? "Repasar una lección" : attempts ? "Continuar mi ruta" : "Empezar primera lección";
    const grammarStudied = grammarLessons.filter((unit) => (getGrammarProgress(unit.id)?.confidence || 0) >= 2).length;
    const grammarPercent = Math.round((grammarStudied / grammarLessons.length) * 100);
    const lastGrammarUnit = grammarLessons.find((unit) => unit.id === progress.lastGrammarUnitId);
    const practiceTotals = grammarLessons.reduce((totals, unit) => {
      const stats = grammarPracticeStats(getGrammarProgress(unit.id));
      totals.correct += stats.correct;
      totals.mistakes += stats.mistakes;
      totals.pending += stats.pending;
      return totals;
    }, { correct: 0, mistakes: 0, pending: 0 });
    document.title = "English Bloom · Mi curso de inglés";
    app.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">TU CURSO · NIVEL INTERMEDIO</p>
          <h1>Haz que tu inglés<br><em>florezca.</em></h1>
          <p class="hero-text">Teoría clara, práctica breve y una ruta que puedes seguir a tu ritmo.</p>
          <a class="primary-button" href="#/lesson/${nextLesson?.id || ""}">
            ${actionLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div class="progress-card" aria-label="Resumen de progreso">
          <div class="progress-ring" style="--progress: ${completion}">
            <div><strong>${completion}%</strong><span>completado</span></div>
          </div>
          <div>
            <p class="eyebrow">TU PROGRESO</p>
            <h2>${heroTitle}</h2>
            <div class="progress-stats">
              <span><strong>${masteredCount}/${lessons.length}</strong> dominadas</span>
              <span><strong>${bestScore}%</strong> mejor resultado</span>
            </div>
          </div>
        </div>
      </section>

      <section class="grammar-feature" aria-labelledby="grammar-feature-title">
        <div class="grammar-feature-number"><strong>${grammarLessons.length}</strong><span>unidades</span></div>
        <div>
          <p class="eyebrow">NUEVA BIBLIOTECA GRAMATICAL</p>
          <h2 id="grammar-feature-title">Todo <em>English Grammar in Use</em>, organizado.</h2>
          <p>Busca cualquier unidad, consulta una explicación breve en español y abre directamente la teoría o los ejercicios de tu PDF.</p>
          <div class="grammar-feature-progress"><span style="width:${grammarPercent}%"></span></div>
          <small>${grammarStudied} de ${grammarLessons.length} unidades estudiadas</small>
        </div>
        <div class="grammar-feature-actions">
          ${lastGrammarUnit ? `<a class="primary-button" href="#/grammar/${lastGrammarUnit.unit}">Continuar unidad ${lastGrammarUnit.unit} <span aria-hidden="true">→</span></a>` : `<a class="primary-button" href="#/grammar/1">Empezar unidad 1 <span aria-hidden="true">→</span></a>`}
          <a class="grammar-library-link" href="#/grammar">Ver las 145 unidades</a>
        </div>
      </section>

      <section class="materials-home-feature" aria-labelledby="materials-home-title">
        <span aria-hidden="true">📁</span>
        <div><p class="eyebrow">TU ESPACIO DE ESTUDIO</p><h2 id="materials-home-title">Organiza tus propios temas</h2><p>Crea carpetas, sube PDF, imágenes o vídeos y escribe tus apuntes en un board personal.</p></div>
        <a class="secondary-button" href="#/materials">Abrir Mis temas <span aria-hidden="true">→</span></a>
      </section>

      <section class="review-home-feature" aria-labelledby="review-home-title">
        <div><p class="eyebrow">REPASO INTELIGENTE</p><h2 id="review-home-title">${practiceTotals.pending ? `${practiceTotals.pending} respuestas necesitan repaso` : "Tu cola de repaso está al día"}</h2><p>${practiceTotals.correct} respuestas correctas · ${practiceTotals.mistakes} fallos registrados</p></div>
        <a class="secondary-button" href="#/review">Ver estadísticas y repasar <span aria-hidden="true">→</span></a>
      </section>

      <section class="course-section" aria-labelledby="course-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">RUTA DE APRENDIZAJE</p>
            <h2 id="course-title">Tus lecciones</h2>
          </div>
          <div class="section-tools">
            <p>Siguiente recomendada: <strong>${nextLesson?.subtitle || "Curso completado"}</strong></p>
            ${Object.keys(progress.lessons).length || Object.keys(progress.grammarUnits).length ? '<button class="reset-button" type="button" data-reset-progress>Reiniciar progreso</button>' : ""}
          </div>
        </div>
        <div class="lesson-grid">${lessons.map(lessonCard).join("")}</div>
      </section>`;

    document.querySelector("[data-reset-progress]")?.addEventListener("click", () => resetDialog.showModal());
  }

  function lessonIntro(lesson) {
    return `
      <div class="lesson-heading">
        <div class="lesson-icon accent-${lesson.accent}" aria-hidden="true">${lesson.icon}</div>
        <div>
          <p class="eyebrow">LECCIÓN ${String(lesson.order).padStart(2, "0")} · ${lesson.duration} MIN</p>
          <h1>${lesson.title}</h1>
          <p>${lesson.subtitle}</p>
        </div>
      </div>`;
  }

  function renderLesson(id) {
    const lesson = lessons.find((item) => item.id === id);
    if (!lesson) {
      location.hash = "#/";
      return;
    }

    lessonSession = null;
    recordLessonOpen(lesson.id);
    document.title = `${lesson.title} · English Bloom`;
    if (!lesson.exercises.length) {
      renderLessonPlaceholder(lesson);
      return;
    }

    app.innerHTML = `
      <section class="lesson-shell">
        <a class="back-link" href="#/">← Volver a mis lecciones</a>
        ${lessonIntro(lesson)}

        <section class="lesson-objectives" aria-labelledby="objectives-title">
          <p class="eyebrow">AL TERMINAR PODRÁS</p>
          <h2 id="objectives-title">Objetivos de la lección</h2>
          <ul>${lesson.objectives.map((objective) => `<li>${objective}</li>`).join("")}</ul>
        </section>

        <section class="theory-bubble" aria-labelledby="theory-title">
          <span class="bubble-tail" aria-hidden="true"></span>
          <p class="eyebrow">🌱 BURBUJA DE TEORÍA</p>
          <h2 id="theory-title">Entiende la idea</h2>
          <div class="theory-grid">
            ${lesson.theorySections.map((section) => `
              <article><h3>${section.title}</h3><p>${section.body}</p></article>
            `).join("")}
          </div>
        </section>

        <section class="examples" aria-labelledby="examples-title">
          <p class="eyebrow">MIRA CÓMO FUNCIONA</p>
          <h2 id="examples-title">Ejemplos</h2>
          <div class="example-list">
            ${lesson.examples.map((example) => `
              <article><strong>${example.phrase}</strong><span>${example.note}</span></article>
            `).join("")}
          </div>
        </section>

        <div class="practice-callout">
          <div><p class="eyebrow">AHORA TE TOCA A TI</p><h2>${lesson.exercises.length} ejercicios breves</h2></div>
          <button class="primary-button" type="button" data-start-practice>Empezar práctica <span aria-hidden="true">→</span></button>
        </div>

        <div class="reference-list">
          <strong>Referencias</strong>
          ${lesson.sourceReferences.map((source) => `<span>${source}</span>`).join("")}
        </div>
      </section>`;

    document.querySelector("[data-start-practice]").addEventListener("click", () => startPractice(lesson));
  }

  function renderLessonPlaceholder(lesson) {
    app.innerHTML = `
      <section class="lesson-shell">
        <a class="back-link" href="#/">← Volver a mis lecciones</a>
        ${lessonIntro(lesson)}
        <div class="theory-preview">
          <span class="bubble-tail" aria-hidden="true"></span>
          <p class="eyebrow">🌱 CONTENIDO EN PREPARACIÓN</p>
          <h2>Esta lección se incorporará en el siguiente hito.</h2>
          <p>La estructura ya está preparada para recibir su teoría, ejemplos y ejercicios.</p>
        </div>
        <div class="reference-list">
          <strong>Referencias previstas</strong>
          ${lesson.sourceReferences.map((source) => `<span>${source}</span>`).join("")}
        </div>
      </section>`;
  }

  function startPractice(lesson) {
    lessonSession = { lesson, index: 0, answers: [], selectedWords: [] };
    renderExercise();
  }

  function theoryReminder(lesson) {
    return `
      <details class="theory-reminder">
        <summary>Consultar la teoría</summary>
        ${lesson.theorySections.map((section) => `<div><strong>${section.title}</strong><p>${section.body}</p></div>`).join("")}
      </details>`;
  }

  function exerciseInput(exercise) {
    if (exercise.type === "fillBlank") {
      return `<label class="fill-answer"><span>Tu respuesta</span><input type="text" autocomplete="off" data-fill-answer placeholder="Escribe aquí…"></label>`;
    }

    if (exercise.type === "reorder") {
      return `
        <div class="ordered-answer" data-ordered-answer aria-live="polite"><span>Selecciona las palabras en orden</span></div>
        <div class="word-bank">
          ${exercise.words.map((word, index) => `<button type="button" class="word-chip" data-word-index="${index}">${word}</button>`).join("")}
        </div>
        <button type="button" class="text-button" data-clear-order>Limpiar frase</button>`;
    }

    if (exercise.type === "match") {
      const options = exercise.pairs.map((pair) => pair.right).reverse();
      return `<div class="match-list">
        ${exercise.pairs.map((pair, index) => `
          <label><span>${pair.left}</span><select data-match-index="${index}">
            <option value="">Elige…</option>
            ${options.map((option) => `<option value="${escapeHtml(option)}">${option}</option>`).join("")}
          </select></label>
        `).join("")}
      </div>`;
    }

    const contextualClass = exercise.type === "context" ? " context-options" : "";
    return `<fieldset class="choice-list${contextualClass}"><legend class="sr-only">Elige una respuesta</legend>
      ${exercise.options.map((option, index) => `
        <label><input type="radio" name="exercise-answer" value="${escapeHtml(option)}"><span class="choice-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></label>
      `).join("")}
    </fieldset>`;
  }

  function renderExercise() {
    const { lesson, index, answers } = lessonSession;
    const exercise = lesson.exercises[index];
    const progress = Math.round((index / lesson.exercises.length) * 100);
    app.innerHTML = `
      <section class="practice-shell">
        <a class="back-link" href="#/lesson/${lesson.id}">← Volver a la teoría</a>
        <div class="practice-topline">
          <span>Ejercicio ${index + 1} de ${lesson.exercises.length}</span>
          <span>${answers.filter(Boolean).length} aciertos</span>
        </div>
        <div class="practice-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
        ${theoryReminder(lesson)}
        <article class="exercise-card">
          <p class="eyebrow">${exercise.instruction}</p>
          <h1>${escapeHtml(exercise.prompt).replaceAll("\n", "<br>")}</h1>
          <div class="exercise-input">${exerciseInput(exercise)}</div>
          <p class="answer-warning" data-answer-warning role="alert"></p>
          <div class="exercise-actions"><button class="primary-button" type="button" data-check-answer>Comprobar respuesta</button></div>
        </article>
      </section>`;

    bindExerciseEvents(exercise);
  }

  function bindExerciseEvents(exercise) {
    if (exercise.type === "reorder") {
      document.querySelectorAll("[data-word-index]").forEach((button) => {
        button.addEventListener("click", () => {
          const index = Number(button.dataset.wordIndex);
          if (!lessonSession.selectedWords.includes(index)) lessonSession.selectedWords.push(index);
          button.disabled = true;
          updateOrderedAnswer(exercise);
        });
      });
      document.querySelector("[data-clear-order]").addEventListener("click", () => {
        lessonSession.selectedWords = [];
        document.querySelectorAll("[data-word-index]").forEach((button) => { button.disabled = false; });
        updateOrderedAnswer(exercise);
      });
    }
    document.querySelector("[data-check-answer]").addEventListener("click", () => checkAnswer(exercise));
  }

  function updateOrderedAnswer(exercise) {
    const target = document.querySelector("[data-ordered-answer]");
    const selected = lessonSession.selectedWords.map((index) => ({ index, word: exercise.words[index] }));
    target.innerHTML = selected.length
      ? selected.map((item) => `<button type="button" data-remove-word="${item.index}" aria-label="Quitar ${item.word}">${item.word}</button>`).join("")
      : "<span>Selecciona las palabras en orden</span>";
    target.querySelectorAll("[data-remove-word]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.removeWord);
        lessonSession.selectedWords = lessonSession.selectedWords.filter((item) => item !== index);
        document.querySelector(`[data-word-index="${index}"]`).disabled = false;
        updateOrderedAnswer(exercise);
      });
    });
  }

  function normalizeAnswer(value) {
    return String(value).trim().toLocaleLowerCase("en").replace(/[?.!,]/g, "").replace(/\s+/g, " ");
  }

  function collectAnswer(exercise) {
    if (exercise.type === "fillBlank") return document.querySelector("[data-fill-answer]").value;
    if (exercise.type === "reorder") return lessonSession.selectedWords.map((index) => exercise.words[index]).join(" ");
    if (exercise.type === "match") return [...document.querySelectorAll("[data-match-index]")].map((select) => select.value);
    return document.querySelector('input[name="exercise-answer"]:checked')?.value || "";
  }

  function answerIsCorrect(exercise, answer) {
    if (exercise.type === "match") {
      return answer.every((value, index) => value === exercise.pairs[index].right);
    }
    const accepted = exercise.acceptableAnswers || [exercise.correctAnswer];
    return accepted.some((value) => normalizeAnswer(value) === normalizeAnswer(answer));
  }

  function checkAnswer(exercise) {
    const answer = collectAnswer(exercise);
    const missing = Array.isArray(answer) ? answer.some((value) => !value) : !String(answer).trim();
    if (missing) {
      document.querySelector("[data-answer-warning]").textContent = "Elige o escribe una respuesta antes de continuar.";
      return;
    }

    const correct = answerIsCorrect(exercise, answer);
    lessonSession.answers.push(correct);
    document.querySelector(".exercise-card").classList.add(correct ? "is-correct" : "is-incorrect");
    document.querySelector(".exercise-input").querySelectorAll("input, select, button").forEach((control) => { control.disabled = true; });
    document.querySelector("[data-answer-warning]").remove();
    document.querySelector(".exercise-actions").innerHTML = `
      <div class="feedback" role="status">
        <strong>${correct ? "¡Muy bien!" : "Casi. Vamos a verlo."}</strong>
        <p>${exercise.explanation}</p>
      </div>
      <button class="primary-button" type="button" data-next-exercise>
        ${lessonSession.index === lessonSession.lesson.exercises.length - 1 ? "Ver resultado" : "Siguiente ejercicio"} <span aria-hidden="true">→</span>
      </button>`;
    document.querySelector("[data-next-exercise]").addEventListener("click", nextExercise);
  }

  function nextExercise() {
    lessonSession.index += 1;
    lessonSession.selectedWords = [];
    if (lessonSession.index >= lessonSession.lesson.exercises.length) renderResults();
    else renderExercise();
    window.scrollTo(0, 0);
  }

  function renderResults() {
    const { lesson, answers } = lessonSession;
    const correct = answers.filter(Boolean).length;
    const score = Math.round((correct / answers.length) * 100);
    const mastered = score >= 80;
    recordLessonResult(lesson.id, score);
    app.innerHTML = `
      <section class="result-shell">
        <div class="result-badge" aria-hidden="true">${mastered ? "🌿" : "💪"}</div>
        <p class="eyebrow">LECCIÓN TERMINADA</p>
        <h1>${mastered ? "¡Tema dominado!" : "Buen primer intento"}</h1>
        <p>${mastered ? "Has demostrado que entiendes esta estructura." : "Repasa la teoría y vuelve a intentarlo para llegar al 80 %."}</p>
        <div class="score-display"><strong>${score}%</strong><span>${correct} de ${answers.length} respuestas correctas</span></div>
        <div class="result-actions">
          <button class="primary-button" type="button" data-retry>Repetir ejercicios</button>
          <a class="secondary-button" href="#/">Volver al curso</a>
        </div>
      </section>`;
    document.querySelector("[data-retry]").addEventListener("click", () => startPractice(lesson));
  }

  function grammarStatus(confidence) {
    if (confidence >= 3) return { label: "Dominada", className: "is-mastered" };
    if (confidence >= 2) return { label: "Estudiada", className: "is-studied" };
    if (confidence >= 1) return { label: "Repasar", className: "is-started" };
    return { label: "Pendiente", className: "" };
  }

  function grammarCard(unit) {
    const saved = getGrammarProgress(unit.id);
    const status = grammarStatus(saved?.confidence || 0);
    const favorite = Boolean(saved?.favorite);
    return `
      <article class="grammar-card" data-grammar-card="${unit.id}">
        <div class="grammar-card-top">
          <span class="grammar-unit-number">${String(unit.unit).padStart(3, "0")}</span>
          <div><span class="status-pill ${status.className}">${status.label}</span><button class="favorite-button${favorite ? " is-favorite" : ""}" type="button" data-toggle-favorite="${unit.id}" aria-label="${favorite ? "Quitar de favoritos" : "Añadir a favoritos"}" aria-pressed="${favorite}">${favorite ? "★" : "☆"}</button></div>
        </div>
        <p>${unit.category}</p>
        <h3>${unit.title}</h3>
        <span class="grammar-page">PDF · página ${unit.theoryPage}</span>
        <a href="#/grammar/${unit.unit}" aria-label="Estudiar unidad ${unit.unit}: ${unit.title}">Estudiar unidad <span aria-hidden="true">→</span></a>
      </article>`;
  }

  function buildStudyPlan() {
    const groups = [
      grammarLessons.filter((unit) => getGrammarProgress(unit.id)?.confidence === 1),
      grammarLessons.filter((unit) => getGrammarProgress(unit.id)?.favorite && (getGrammarProgress(unit.id)?.confidence || 0) < 3),
      grammarLessons.filter((unit) => !getGrammarProgress(unit.id)?.confidence),
      grammarLessons.filter((unit) => getGrammarProgress(unit.id)?.confidence === 2),
      grammarLessons.filter((unit) => getGrammarProgress(unit.id)?.confidence === 3)
    ];
    const selected = [];
    groups.flat().forEach((unit) => {
      if (selected.length < 5 && !selected.some((item) => item.id === unit.id)) selected.push(unit);
    });
    return selected;
  }

  function renderGrammarLibrary() {
    setActiveNav("grammar");
    document.title = "Biblioteca gramatical · English Bloom";
    const studied = grammarLessons.filter((unit) => (getGrammarProgress(unit.id)?.confidence || 0) >= 2).length;
    const mastered = grammarLessons.filter((unit) => (getGrammarProgress(unit.id)?.confidence || 0) >= 3).length;
    const completion = Math.round((studied / grammarLessons.length) * 100);
    const studyPlan = buildStudyPlan();
    const lastUnit = grammarLessons.find((unit) => unit.id === progress.lastGrammarUnitId);

    app.innerHTML = `
      <section class="grammar-library">
        <a class="back-link" href="#/">← Volver a mi curso</a>
        <div class="grammar-library-hero">
          <div>
            <p class="eyebrow">ENGLISH GRAMMAR IN USE · 5TH EDITION</p>
            <h1>Biblioteca<br><em>gramatical.</em></h1>
            <p>Las 145 unidades del libro, con una guía breve en español y acceso directo a tu PDF.</p>
          </div>
          <div class="grammar-summary">
            <div class="progress-ring" style="--progress:${completion}"><div><strong>${completion}%</strong><span>estudiado</span></div></div>
            <dl>
              <div><dt>${studied}</dt><dd>estudiadas</dd></div>
              <div><dt>${mastered}</dt><dd>dominadas</dd></div>
              <div><dt>${grammarLessons.length - studied}</dt><dd>pendientes</dd></div>
            </dl>
          </div>
        </div>

        <section class="study-plan" aria-labelledby="study-plan-title">
          <div class="study-plan-heading">
            <div><p class="eyebrow">PLAN DE HOY</p><h2 id="study-plan-title">Cinco unidades para avanzar</h2></div>
            <div class="study-plan-links">
              ${lastUnit ? `<a href="#/grammar/${lastUnit.unit}">Continuar unidad ${lastUnit.unit} →</a>` : ""}
              <a href="#/grammar/appendices/1">Consultar los 7 apéndices →</a>
            </div>
          </div>
          <div class="study-plan-list">
            ${studyPlan.map((unit, index) => `<a href="#/grammar/${unit.unit}"><span>${index + 1}</span><div><small>Unidad ${unit.unit} · ${unit.category}</small><strong>${unit.title}</strong></div></a>`).join("")}
          </div>
        </section>

        <div class="grammar-filters" role="search">
          <label class="grammar-search"><span class="sr-only">Buscar unidades</span><span aria-hidden="true">⌕</span><input type="search" placeholder="Buscar: present perfect, prepositions…" data-grammar-search></label>
          <label><span class="sr-only">Filtrar por categoría</span><select data-grammar-category>
            <option value="">Todas las categorías</option>
            ${grammarCategories.map((category) => `<option value="${category.id}">${category.name}</option>`).join("")}
          </select></label>
          <label><span class="sr-only">Filtrar por estado</span><select data-grammar-status>
            <option value="">Todos los estados</option>
            <option value="0">Pendientes</option>
            <option value="1">Para repasar</option>
            <option value="2">Estudiadas</option>
            <option value="3">Dominadas</option>
            <option value="favorite">Solo favoritas</option>
          </select></label>
          <span class="filter-count" data-filter-count>${grammarLessons.length} unidades</span>
        </div>

        <div class="grammar-grid" data-grammar-grid>${grammarLessons.map(grammarCard).join("")}</div>
        <div class="empty-filter" data-empty-filter hidden><strong>No hay coincidencias.</strong><span>Prueba otra palabra o categoría.</span></div>
      </section>`;

    const search = document.querySelector("[data-grammar-search]");
    const category = document.querySelector("[data-grammar-category]");
    const statusFilter = document.querySelector("[data-grammar-status]");
    const filter = () => {
      const term = search.value.trim().toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let visible = 0;
      document.querySelectorAll("[data-grammar-card]").forEach((card) => {
        const unit = grammarLessons.find((item) => item.id === card.dataset.grammarCard);
        const saved = getGrammarProgress(unit.id);
        const haystack = `${unit.title} ${unit.summary} ${unit.category} ${unit.unit}`.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const statusMatches = !statusFilter.value
          || (statusFilter.value === "favorite" ? Boolean(saved?.favorite) : String(saved?.confidence || 0) === statusFilter.value);
        const matches = (!term || haystack.includes(term)) && (!category.value || unit.categoryId === category.value) && statusMatches;
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      document.querySelector("[data-filter-count]").textContent = `${visible} ${visible === 1 ? "unidad" : "unidades"}`;
      document.querySelector("[data-empty-filter]").hidden = visible !== 0;
    };
    search.addEventListener("input", filter);
    category.addEventListener("change", filter);
    statusFilter.addEventListener("change", filter);
    document.querySelectorAll("[data-toggle-favorite]").forEach((button) => {
      button.addEventListener("click", () => {
        const unitId = button.dataset.toggleFavorite;
        const favorite = !getGrammarProgress(unitId)?.favorite;
        updateGrammarProgress(unitId, { favorite });
        button.classList.toggle("is-favorite", favorite);
        button.textContent = favorite ? "★" : "☆";
        button.setAttribute("aria-pressed", String(favorite));
        button.setAttribute("aria-label", favorite ? "Quitar de favoritos" : "Añadir a favoritos");
        filter();
      });
    });
  }

  function renderGrammarUnit(unitNumber, initialSection = "theory") {
    const unit = grammarLessons.find((item) => item.unit === Number(unitNumber));
    if (!unit) {
      location.hash = "#/grammar";
      return;
    }

    setActiveNav("grammar");
    document.title = `Unidad ${unit.unit}: ${unit.title} · English Bloom`;
    updateGrammarProgress(unit.id, { lastOpenedAt: new Date().toISOString() });
    const saved = getGrammarProgress(unit.id);
    const confidence = saved?.confidence || 0;
    const status = grammarStatus(confidence);
    const previous = grammarLessons[unit.unit - 2];
    const next = grammarLessons[unit.unit];
    const theoryContent = bookContent.theory.find((item) => item.unit === unit.unit);
    const exerciseContent = bookContent.exercises.find((item) => item.unit === unit.unit);
    const practiceStats = grammarPracticeStats(saved);

    app.innerHTML = `
      <section class="grammar-unit-shell">
        <a class="back-link" href="#/grammar">← Volver a la biblioteca</a>
        <header class="grammar-unit-heading">
          <div class="grammar-unit-big">${String(unit.unit).padStart(3, "0")}</div>
          <div>
            <p class="eyebrow">${unit.category} · PDF PÁGINA ${unit.theoryPage}</p>
            <h1>${unit.title}</h1>
            <div class="unit-heading-actions"><span class="status-pill ${status.className}">${status.label}</span><button class="favorite-button${saved?.favorite ? " is-favorite" : ""}" type="button" data-unit-favorite aria-label="${saved?.favorite ? "Quitar de favoritos" : "Añadir a favoritos"}" aria-pressed="${Boolean(saved?.favorite)}">${saved?.favorite ? "★" : "☆"}</button></div>
          </div>
        </header>

        <section class="grammar-theory-bubble" aria-labelledby="grammar-key-title">
          <span class="bubble-tail" aria-hidden="true"></span>
          <p class="eyebrow">🌱 TEORÍA EXPRESS</p>
          <h2 id="grammar-key-title">La idea clave</h2>
          <p>${unit.summary}</p>
          <div class="study-tip"><strong>Cómo enfocarla</strong><span>${unit.studyGuide}</span></div>
        </section>

        <section class="book-reader" id="book-reader" aria-labelledby="book-reader-title">
          <header>
            <div><p class="eyebrow">LIBRO EN PANTALLA</p><h2 id="book-reader-title">Teoría · Unidad ${unit.unit}</h2></div>
            <div class="reader-tabs" role="group" aria-label="Contenido del libro">
              <button class="is-active" type="button" data-reader-tab="theory">Teoría</button>
              <button type="button" data-reader-tab="exercises">Ejercicios</button>
            </div>
          </header>
          <div class="reader-json-content" data-book-content tabindex="0">
            ${renderBookSheet(theoryContent, "theory", `Teoría de la unidad ${unit.unit}: ${unit.title}`, { number: unit.unit, title: unit.title })}
          </div>
          <p class="reader-note">Hoja reconstruida en HTML · Referencia: página ${unit.theoryPage} de tu copia local.</p>
        </section>

        <section class="unit-practice-stats" aria-label="Estadísticas de ejercicios de esta unidad">
          <span><strong>${practiceStats.correct}</strong> correctas</span>
          <span><strong>${practiceStats.mistakes}</strong> fallos</span>
          <span><strong>${practiceStats.pending}</strong> pendientes</span>
          ${practiceStats.pending ? '<a href="#/review">Abrir cola de repaso →</a>' : ""}
        </section>

        <section class="grammar-reflection" aria-labelledby="reflection-title">
          <div>
            <p class="eyebrow">TU SEGUIMIENTO</p>
            <h2 id="reflection-title">¿Cómo llevas esta unidad?</h2>
          </div>
          <label class="confidence-field">Nivel de dominio
            <select data-confidence>
              <option value="0" ${confidence === 0 ? "selected" : ""}>Pendiente</option>
              <option value="1" ${confidence === 1 ? "selected" : ""}>Necesito repasar</option>
              <option value="2" ${confidence === 2 ? "selected" : ""}>Entendida</option>
              <option value="3" ${confidence === 3 ? "selected" : ""}>Dominada</option>
            </select>
          </label>
          <label class="notes-field">Mis notas
            <textarea rows="5" maxlength="1000" placeholder="Escribe una regla, un ejemplo o una duda…" data-grammar-notes>${escapeHtml(saved?.notes || "")}</textarea>
          </label>
          <div class="notes-footer"><span data-note-status>Se guarda en este navegador.</span><button class="secondary-button" type="button" data-mark-studied>${confidence >= 2 ? "✓ Unidad estudiada" : "Marcar como estudiada"}</button></div>
        </section>

        <nav class="unit-pagination" aria-label="Navegación entre unidades">
          ${previous ? `<a href="#/grammar/${previous.unit}"><span>← Unidad ${previous.unit}</span><strong>${previous.title}</strong></a>` : "<span></span>"}
          ${next ? `<a href="#/grammar/${next.unit}"><span>Unidad ${next.unit} →</span><strong>${next.title}</strong></a>` : "<span></span>"}
        </nav>
      </section>`;

    document.querySelector("[data-confidence]").addEventListener("change", (event) => {
      updateGrammarProgress(unit.id, { confidence: Number(event.target.value) });
      renderGrammarUnit(unit.unit);
    });
    const notes = document.querySelector("[data-grammar-notes]");
    notes.addEventListener("blur", () => {
      updateGrammarProgress(unit.id, { notes: notes.value });
      document.querySelector("[data-note-status]").textContent = "Notas guardadas.";
    });
    document.querySelector("[data-mark-studied]").addEventListener("click", () => {
      updateGrammarProgress(unit.id, { confidence: Math.max(2, confidence), notes: notes.value });
      renderGrammarUnit(unit.unit);
    });
    document.querySelector("[data-unit-favorite]").addEventListener("click", () => {
      updateGrammarProgress(unit.id, { favorite: !getGrammarProgress(unit.id)?.favorite, notes: notes.value });
      renderGrammarUnit(unit.unit);
    });
    const normalizeBookAnswer = (value) => String(value)
      .toLocaleLowerCase("en")
      .normalize("NFKD")
      .replace(/[’‘]/g, "'")
      .replace(/\bwon't\b/g, "will not")
      .replace(/\bcan't\b/g, "cannot")
      .replace(/\b(\w+)n't\b/g, "$1 not")
      .replace(/\b(i|you|we|they)'re\b/g, "$1 are")
      .replace(/\b(he|she|it)'s\b/g, "$1 is")
      .replace(/\b(\w+)'ve\b/g, "$1 have")
      .replace(/\b(\w+)'ll\b/g, "$1 will")
      .replace(/[^a-z0-9']+/g, " ")
      .trim()
      .replace(/\s+/g, " ");
    const answerVariants = (solution) => (solution.accepted?.length ? solution.accepted : [solution.answer])
      .flatMap((expected) => [expected, expected.replace(/\(([^)]+)\)/g, ""), expected.replace(/[()]/g, "")])
      .flatMap((item) => item.split(/\s+(?:\/|or)\s+/i));
    const answerMatches = (value, solution) => {
      const answer = normalizeBookAnswer(value);
      if (!answer) return false;
      return answerVariants(solution).map(normalizeBookAnswer).includes(answer);
    };
    const inlineAnswerMatches = (inputs, field, solution) => {
      const values = inputs.map((input) => input.value.trim());
      if (inputs.length === 1) return answerMatches(values[0], solution);
      let index = 0;
      const completed = normalizeBookAnswer(field.dataset.answerSource.replace(/\[\[blank\]\]/g, () => values[index++] || ""));
      return answerVariants(solution).some((expected) => {
        const normalized = normalizeBookAnswer(expected);
        if (normalized && completed.includes(normalized)) return true;
        const segments = expected.split(/\s*(?:\.{2,}|…)\s*/).map(normalizeBookAnswer).filter(Boolean);
        return segments.length > 1 && segments.every((segment) => completed.includes(segment));
      }) || answerMatches(values.join(" ... "), solution);
    };
    const bindBookAnswers = () => {
      const groups = new Map();
      document.querySelectorAll("[data-book-answer]").forEach((input) => {
        const key = input.dataset.answerGroup || input.dataset.answerId;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(input);
      });
      groups.forEach((inputs, groupKey) => {
        inputs.sort((a, b) => Number(a.dataset.blankIndex || 0) - Number(b.dataset.blankIndex || 0));
        const firstInput = inputs[0];
        const solution = (bookContent.answers?.[firstInput.dataset.activity] || [])
          .find((item) => item.number === firstInput.dataset.answerNumber);
        const field = firstInput.closest(".exercise-answer-field, .sheet-line");
        const message = field.querySelector("[data-answer-message]");
        const revealButton = field.querySelector("[data-reveal-answer]");
        const validate = (commitAttempt) => {
          field.classList.remove("is-correct", "is-incorrect", "is-example");
          message.textContent = "";
          revealButton.hidden = true;
          const values = inputs.map((input) => input.value.trim());
          if (values.some((value) => !value) || !solution) return;
          if (solution.example) {
            if (commitAttempt) {
              field.classList.add("is-example");
              message.textContent = "Respuesta abierta";
              revealButton.textContent = "Ver ejemplo";
              revealButton.hidden = false;
            }
          } else if (firstInput.hasAttribute("data-inline-answer") ? inlineAnswerMatches(inputs, field, solution) : answerMatches(values[0], solution)) {
            field.classList.add("is-correct");
            message.textContent = "✓ Correcto";
            const saved = getGrammarProgress(unit.id) || {};
            if (!saved.exerciseCorrect?.[groupKey]) {
              updateGrammarProgress(unit.id, { exerciseCorrect: { ...(saved.exerciseCorrect || {}), [groupKey]: true } });
            }
          } else if (commitAttempt) {
            field.classList.add("is-incorrect");
            message.textContent = "Revisa tu respuesta";
            revealButton.textContent = "Ver solución";
            revealButton.hidden = false;
            const attempt = values.join("|");
            if (field.dataset.lastAttempt !== attempt) {
              field.dataset.lastAttempt = attempt;
              const saved = getGrammarProgress(unit.id) || {};
              const exerciseCorrect = { ...(saved.exerciseCorrect || {}) };
              delete exerciseCorrect[groupKey];
              updateGrammarProgress(unit.id, {
                exerciseCorrect,
                exerciseMistakes: { ...(saved.exerciseMistakes || {}), [groupKey]: Number(saved.exerciseMistakes?.[groupKey] || 0) + 1 }
              });
            }
          }
        };
        revealButton.addEventListener("click", () => {
          message.textContent = `${solution.example ? "Ejemplo" : "Solución"}: ${solution.answer}`;
          revealButton.hidden = true;
        });
        inputs.forEach((input) => input.addEventListener("input", () => {
          const exerciseAnswers = { ...(getGrammarProgress(unit.id)?.exerciseAnswers || {}) };
          exerciseAnswers[input.dataset.answerId] = input.value;
          updateGrammarProgress(unit.id, { exerciseAnswers });
          validate(false);
        }));
        inputs.forEach((input) => input.addEventListener("blur", () => {
          window.setTimeout(() => {
            if (!inputs.includes(document.activeElement)) validate(true);
          }, 0);
        }));
        validate(false);
      });
    };
    const showBookSection = (kind) => {
      const content = kind === "theory" ? theoryContent : exerciseContent;
      const label = `${kind === "theory" ? "Teoría" : "Ejercicios"} de la unidad ${unit.unit}: ${unit.title}`;
      document.querySelector("[data-book-content]").innerHTML = renderBookSheet(content, kind, label, { number: unit.unit, title: unit.title, savedAnswers: getGrammarProgress(unit.id)?.exerciseAnswers || {} });
      document.querySelector("#book-reader-title").textContent = `${kind === "theory" ? "Teoría" : "Ejercicios"} · Unidad ${unit.unit}`;
      document.querySelector(".reader-note").textContent = `Hoja reconstruida en HTML · Referencia: página ${content?.pdfPage || "?"} de tu copia local.`;
      document.querySelectorAll("[data-reader-tab]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.readerTab === kind);
      });
      if (kind === "exercises") bindBookAnswers();
    };
    document.querySelectorAll("[data-reader-tab]").forEach((button) => {
      button.addEventListener("click", () => showBookSection(button.dataset.readerTab));
    });
    if (initialSection === "exercises") showBookSection("exercises");
  }

  function renderReview() {
    setActiveNav("");
    document.title = "Repaso de errores · English Bloom";
    const units = grammarLessons.map((unit) => ({ unit, stats: grammarPracticeStats(getGrammarProgress(unit.id)) }))
      .filter((entry) => entry.stats.correct || entry.stats.mistakes)
      .sort((a, b) => b.stats.pending - a.stats.pending || b.stats.mistakes - a.stats.mistakes);
    const pending = units.filter((entry) => entry.stats.pending);
    const totals = units.reduce((result, entry) => ({
      correct: result.correct + entry.stats.correct,
      mistakes: result.mistakes + entry.stats.mistakes,
      pending: result.pending + entry.stats.pending
    }), { correct: 0, mistakes: 0, pending: 0 });
    app.innerHTML = `<section class="review-shell">
      <a class="back-link" href="#/">← Volver a mi curso</a>
      <header class="review-hero"><div><p class="eyebrow">TU PROGRESO REAL</p><h1>Repaso de errores</h1><p>La cola se actualiza automáticamente cuando corriges una respuesta que habías fallado.</p></div>
        <dl><div><dt>${totals.correct}</dt><dd>correctas</dd></div><div><dt>${totals.mistakes}</dt><dd>fallos</dd></div><div><dt>${totals.pending}</dt><dd>por repasar</dd></div></dl>
      </header>
      <section class="review-queue" aria-labelledby="review-queue-title">
        <div class="section-heading"><div><p class="eyebrow">COLA AUTOMÁTICA</p><h2 id="review-queue-title">Unidades prioritarias</h2></div><p>Empieza por las unidades con más respuestas todavía incorrectas.</p></div>
        ${pending.length ? `<div class="review-unit-list">${pending.map(({ unit, stats }) => `<article><span>${unit.unit}</span><div><small>${unit.category}</small><h3>${unit.title}</h3><p>${stats.pending} pendientes · ${stats.mistakes} fallos acumulados</p></div><a href="#/grammar/${unit.unit}/exercises">Repasar →</a></article>`).join("")}</div>` : '<div class="review-empty"><span aria-hidden="true">✓</span><strong>No tienes errores pendientes.</strong><p>Los ejercicios que falles aparecerán aquí automáticamente.</p></div>'}
      </section>
      ${units.length ? `<section class="review-table-section"><h2>Estadísticas por unidad</h2><div class="review-table" role="table"><div class="review-table-head" role="row"><span>Unidad</span><span>Correctas</span><span>Fallos</span><span>Pendientes</span></div>${units.map(({ unit, stats }) => `<a role="row" href="#/grammar/${unit.unit}/exercises"><strong>${unit.unit}. ${unit.title}</strong><span>${stats.correct}</span><span>${stats.mistakes}</span><span>${stats.pending}</span></a>`).join("")}</div></section>` : ""}
    </section>`;
  }

  function renderAppendix(appendixNumber) {
    const appendix = bookContent.appendices.find((item) => item.appendix === Number(appendixNumber));
    if (!appendix) {
      location.hash = "#/grammar/appendices/1";
      return;
    }

    setActiveNav("grammar");
    document.title = `Apéndice ${appendix.appendix}: ${appendix.title} · English Bloom`;
    const previous = bookContent.appendices[appendix.appendix - 2];
    const next = bookContent.appendices[appendix.appendix];
    app.innerHTML = `
      <section class="appendix-shell">
        <a class="back-link" href="#/grammar">← Volver a la biblioteca</a>
        <header class="appendix-heading">
          <div><p class="eyebrow">ENGLISH GRAMMAR IN USE · MATERIAL DE CONSULTA</p><h1>Apéndices.</h1><p>Reglas y tablas organizadas en hojas HTML para consultarlas sin abrir el PDF.</p></div>
        </header>
        <div class="appendix-layout">
          <nav class="appendix-nav" aria-label="Lista de apéndices">
            ${bookContent.appendices.map((item) => `<a class="${item.appendix === appendix.appendix ? "is-active" : ""}" href="#/grammar/appendices/${item.appendix}"><span>${String(item.appendix).padStart(2, "0")}</span><strong>${item.title}</strong></a>`).join("")}
          </nav>
          <article class="appendix-content">
            <p class="eyebrow">APÉNDICE ${appendix.appendix}</p>
            <h2>${appendix.title}</h2>
            ${appendix.pages.map((page, index) => `<section>${renderBookSheet(page, "appendix", `Apéndice ${appendix.appendix}: ${appendix.title}${appendix.pages.length > 1 ? ` · Parte ${index + 1}` : ""}`, { number: appendix.appendix, title: appendix.pages.length > 1 ? `${appendix.title} · Parte ${index + 1}` : appendix.title })}</section>`).join("")}
          </article>
        </div>
        <nav class="unit-pagination" aria-label="Navegación entre apéndices">
          ${previous ? `<a href="#/grammar/appendices/${previous.appendix}"><span>← Apéndice ${previous.appendix}</span><strong>${previous.title}</strong></a>` : "<span></span>"}
          ${next ? `<a href="#/grammar/appendices/${next.appendix}"><span>Apéndice ${next.appendix} →</span><strong>${next.title}</strong></a>` : "<span></span>"}
        </nav>
      </section>`;
  }

  function route() {
    const appendixMatch = location.hash.match(/^#\/grammar\/appendices\/(\d+)$/);
    const grammarMatch = location.hash.match(/^#\/grammar\/(\d+)(?:\/(exercises))?$/);
    const materialsMatch = location.hash.match(/^#\/materials(?:\/([^/]+))?$/);
    const match = location.hash.match(/^#\/lesson\/(.+)$/);
    if (appendixMatch) renderAppendix(appendixMatch[1]);
    else if (location.hash === "#/grammar/appendices") renderAppendix(1);
    else if (grammarMatch) renderGrammarUnit(grammarMatch[1], grammarMatch[2] || "theory");
    else if (location.hash === "#/grammar") renderGrammarLibrary();
    else if (materialsMatch) window.ENGLISH_BLOOM_MATERIALS.render({ app, setActiveNav, escapeHtml, topicId: materialsMatch[1] || null });
    else if (location.hash === "#/review") renderReview();
    else if (match) renderLesson(match[1]);
    else renderDashboard();
    window.scrollTo(0, 0);
  }

  document.querySelector("[data-about-button]").addEventListener("click", () => dialog.showModal());
  document.querySelector("[data-close-dialog]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  document.querySelector("[data-close-reset]").addEventListener("click", () => resetDialog.close());
  document.querySelector("[data-cancel-reset]").addEventListener("click", () => resetDialog.close());
  document.querySelector("[data-confirm-reset]").addEventListener("click", () => {
    progress = emptyProgress();
    try { localStorage.removeItem(STORAGE_KEY); } catch (_error) { /* La app continúa en memoria. */ }
    window.dispatchEvent(new CustomEvent("english-bloom:data-changed", { detail: { source: "progress" } }));
    resetDialog.close();
    location.hash = "#/";
    renderDashboard();
    window.scrollTo(0, 0);
  });
  resetDialog.addEventListener("click", (event) => {
    if (event.target === resetDialog) resetDialog.close();
  });
  window.addEventListener("hashchange", route);
  route();
})();
