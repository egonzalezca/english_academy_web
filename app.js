(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // Datos
  // ---------------------------------------------------------------------------
  const LEVELS = [
    { id: "B1", name: "B1", label: "Intermedio", description: "Las bases que el C1 da por supuestas: tiempos, comparativos, modales y conectores esenciales." },
    { id: "B2", name: "B2", label: "Intermedio alto", description: "Condicionales, pasiva, estilo indirecto, modales en pasado y el vocabulario que separa un B2 de un B1." },
    { id: "C1", name: "C1", label: "Avanzado", description: "Inversión, cleft sentences, participle clauses, collocations e idioms: lo que te da la nota en el C1." }
  ];
  const CATEGORIES = { grammar: "Gramática", vocabulary: "Vocabulario", exam: "Examen" };
  const LEVEL_ORDER = { B1: 1, B2: 2, C1: 3 };
  const CATEGORY_ORDER = { grammar: 1, vocabulary: 2, exam: 3 };
  const exam = window.C1_EXAM || { papers: [], scale: [] };
  const guides = (window.C1_GUIDES || []).slice().sort((a, b) =>
    (LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level])
    || (CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category])
    || ((a.order || 0) - (b.order || 0)));
  const guideById = new Map(guides.map((guide) => [guide.id, guide]));

  const app = document.querySelector("#app");
  const dialog = document.querySelector("#about-dialog");
  const resetDialog = document.querySelector("#reset-dialog");
  const STORAGE_KEY = "english-bloom-progress-v1";
  const PROGRESS_VERSION = 5;
  let session = null;
  let carousel = null;
  let progress = loadProgress();

  // ---------------------------------------------------------------------------
  // Progreso
  // ---------------------------------------------------------------------------
  function emptyProgress() {
    return { version: PROGRESS_VERSION, lastGuideId: null, guides: {}, activity: {}, plan: null, mistakes: {} };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyProgress();
      const parsed = JSON.parse(raw);
      if (parsed?.version === PROGRESS_VERSION && parsed.guides && typeof parsed.guides === "object") {
        return { ...emptyProgress(), ...parsed };
      }
      if ([1, 2, 3, 4].includes(parsed?.version)) {
        // Versión anterior (lecciones y biblioteca del libro): se conserva aparte
        // para no perder notas, pero el curso nuevo empieza de cero.
        const migrated = { ...emptyProgress(), legacy: { lessons: parsed.lessons || {}, grammarUnits: parsed.grammarUnits || {} } };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        return migrated;
      }
      throw new Error("Formato de progreso no válido");
    } catch (_error) {
      return emptyProgress();
    }
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (_error) { /* La app continúa en memoria. */ }
    window.dispatchEvent(new CustomEvent("english-bloom:data-changed", { detail: { source: "progress" } }));
  }

  function todayKey(date = new Date()) {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }

  function recordActivity() {
    const key = todayKey();
    progress.activity[key] = (progress.activity[key] || 0) + 1;
  }

  function streakDays() {
    let streak = 0;
    const cursor = new Date();
    if (!progress.activity[todayKey(cursor)]) cursor.setDate(cursor.getDate() - 1);
    while (progress.activity[todayKey(cursor)]) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  // Cola de repaso: cada ejercicio fallado se guarda como "guía::ejercicio" y
  // sale de la cola en cuanto se responde bien (en cualquier modo).
  function recordExerciseResult(guideId, exerciseId, correct) {
    const key = `${guideId}::${exerciseId}`;
    progress.mistakes ||= {};
    if (correct) delete progress.mistakes[key];
    else progress.mistakes[key] = { count: (progress.mistakes[key]?.count || 0) + 1, lastWrongAt: new Date().toISOString() };
    saveProgress();
  }

  function pendingMistakes() {
    return Object.keys(progress.mistakes || {}).map((key) => {
      const [guideId, exerciseId] = key.split("::");
      const guide = guideById.get(guideId);
      const exercise = guide?.exercises.find((item) => item.id === exerciseId);
      return guide && exercise ? { guide, exercise, ...progress.mistakes[key] } : null;
    }).filter(Boolean);
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swap]] = [copy[swap], copy[index]];
    }
    return copy;
  }

  function guideProgress(id) {
    return progress.guides[id] || null;
  }

  function updateGuide(id, changes) {
    const current = guideProgress(id) || { attempts: 0, bestScore: 0, read: false, lastSlide: 0 };
    progress.guides[id] = { ...current, ...changes, updatedAt: new Date().toISOString() };
    progress.lastGuideId = id;
    saveProgress();
  }

  function guideStatus(guide) {
    const saved = guideProgress(guide.id);
    if (saved?.bestScore >= 80) return { key: "mastered", label: "Dominada", className: "is-mastered" };
    if (saved?.attempts) return { key: "practised", label: `Práctica ${saved.bestScore}%`, className: "is-started" };
    if (saved?.read) return { key: "read", label: "Leída", className: "is-studied" };
    if (saved) return { key: "started", label: "Empezada", className: "is-started" };
    return { key: "pending", label: "Pendiente", className: "" };
  }

  function isMastered(guide) {
    return guideStatus(guide).key === "mastered";
  }

  function nextRecommended() {
    const last = guideById.get(progress.lastGuideId);
    if (last && !isMastered(last)) return last;
    return guides.find((guide) => !isMastered(guide)) || guides[0];
  }

  // ---------------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------------
  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Formato ligero para el contenido de las guías: **negrita**, ==resaltado==,
  // *cursiva* y saltos de línea. El texto se escapa antes de aplicar el formato.
  function fmt(value) {
    return escapeHtml(value)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/==(.+?)==/g, "<mark>$1</mark>")
      .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>")
      .replaceAll("\n", "<br>");
  }

  function setActiveNav(name) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === name);
    });
  }

  function levelSlug(level) {
    return String(level || "").toLowerCase();
  }

  function formatDate(date, options = { day: "numeric", month: "short" }) {
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  }

  function daysUntil(isoDate) {
    if (!isoDate) return null;
    const target = new Date(`${isoDate}T00:00:00`);
    const today = new Date(`${todayKey()}T00:00:00`);
    return Math.round((target - today) / 86400000);
  }

  function guideMinutes(guide) {
    return guide.minutes || Math.max(15, Math.round(guide.slides.length * 2 + guide.exercises.length * 1.5));
  }

  // ---------------------------------------------------------------------------
  // Tarjetas
  // ---------------------------------------------------------------------------
  function guideCard(guide, index = 0) {
    const status = guideStatus(guide);
    return `
      <a class="guide-card" data-level="${levelSlug(guide.level)}" href="#/guide/${guide.id}" style="--delay:${index * 45}ms">
        <div class="guide-thumb">
          <span class="guide-thumb-level">${guide.level}</span>
          <span class="guide-thumb-emoji" aria-hidden="true">${guide.emoji || "📘"}</span>
          <strong>${fmt(guide.title)}</strong>
          <small>${fmt(guide.subtitle || "")}</small>
        </div>
        <div class="guide-card-body">
          <span class="guide-card-meta">${CATEGORIES[guide.category] || ""}${guide.module ? ` · ${escapeHtml(guide.module)}` : ""}</span>
          <span class="guide-card-foot"><span>◷ ${guideMinutes(guide)} min · ${guide.slides.length} fichas</span><span class="status-pill ${status.className}">${status.label}</span></span>
        </div>
      </a>`;
  }

  function levelStats(level) {
    const items = guides.filter((guide) => guide.level === level);
    const mastered = items.filter(isMastered).length;
    const read = items.filter((guide) => guideStatus(guide).key !== "pending").length;
    return { total: items.length, mastered, read, percent: items.length ? Math.round((mastered / items.length) * 100) : 0 };
  }

  // ---------------------------------------------------------------------------
  // Inicio
  // ---------------------------------------------------------------------------
  function renderHome() {
    setActiveNav("home");
    document.title = "English Bloom · Tu camino al C1 Advanced";
    const total = guides.length;
    const mastered = guides.filter(isMastered).length;
    const read = guides.filter((guide) => guideStatus(guide).key !== "pending").length;
    const percent = total ? Math.round((mastered / total) * 100) : 0;
    const next = nextRecommended();
    const started = Boolean(Object.keys(progress.guides).length);
    const remaining = daysUntil(progress.plan?.examDate);
    const streak = streakDays();
    const upcoming = guides.filter((guide) => !isMastered(guide) && guide.id !== next?.id).slice(0, 4);
    const pendingCount = pendingMistakes().length;
    const slideCount = guides.reduce((sum, guide) => sum + guide.slides.length, 0);
    const exerciseCount = guides.reduce((sum, guide) => sum + guide.exercises.length, 0);

    app.innerHTML = `
      <section class="hero" data-hero>
        <div class="hero-copy">
          <p class="eyebrow">Cambridge C1 Advanced</p>
          <h1 class="chrome-text">Del B1 al C1.<br>Ficha a ficha.</h1>
          <p class="hero-text">Todo el temario de gramática, vocabulario y cada parte del examen, en guías visuales que se leen en minutos.</p>
          <div class="hero-actions">
            ${next ? `<a class="primary-button" href="#/guide/${next.id}">${started ? "Continuar" : "Empezar ahora"}</a>` : ""}
            <a class="text-link" href="#/exam">Conoce el examen <span aria-hidden="true">›</span></a>
          </div>
          ${next ? `<p class="hero-next">${started ? "Siguiente" : "Primera guía"}: <a href="#/guide/${next.id}">${fmt(next.title)}</a></p>` : ""}
        </div>
        <span class="scroll-cue" aria-hidden="true"></span>
      </section>

      <section class="statement" data-reveal>
        <p class="statement-big"><span class="chrome-text">${total} guías.</span> <span class="chrome-text">${slideCount} fichas.</span> <span class="chrome-text">${exerciseCount} ejercicios.</span></p>
        <p class="statement-sub">Teoría en español, práctica en inglés y la estrategia exacta para cada parte del examen.</p>
      </section>

      <section class="bento" aria-label="Tu progreso">
        <article class="bento-tile bento-progress" data-reveal>
          <div class="progress-ring" style="--progress: ${percent}"><div><strong>${percent}%</strong><span>dominado</span></div></div>
          <div>
            <p class="eyebrow">Tu progreso</p>
            <h2>${mastered ? `${mastered} de ${total} guías dominadas.` : started ? "Vas por buen camino." : "Hoy es un buen día para empezar."}</h2>
            <p>${read} de ${total} guías abiertas</p>
          </div>
        </article>
        <article class="bento-tile" data-reveal>
          <p class="eyebrow">Racha</p>
          <strong class="bento-number chrome-text">${streak}</strong>
          <p>${streak === 1 ? "día seguido" : "días seguidos"} estudiando</p>
        </article>
        <a class="bento-tile" href="#/plan" data-reveal>
          <p class="eyebrow">Examen</p>
          ${remaining !== null && remaining >= 0 ? `<strong class="bento-number chrome-text">${remaining}</strong><p>días para el examen</p>` : `<strong class="bento-number chrome-text">—</strong><p>Fija la fecha y crea tu plan <span aria-hidden="true">›</span></p>`}
        </a>
        <a class="bento-tile bento-review" href="#/review" data-reveal>
          <p class="eyebrow">Repaso inteligente</p>
          <h2>${pendingCount ? `${pendingCount} ${pendingCount === 1 ? "ejercicio espera" : "ejercicios esperan"} repaso.` : "Tu cola de repaso está al día."}</h2>
          <p>Errores, key word transformations al azar y tests por nivel <span aria-hidden="true">›</span></p>
        </a>
      </section>

      <section class="home-section" aria-labelledby="levels-title">
        <header class="section-heading" data-reveal>
          <p class="eyebrow">El temario</p>
          <h2 id="levels-title">Tres niveles.<br><span class="chrome-text">Un objetivo.</span></h2>
          <p>Si ya tienes un B2 sólido, empieza por C1 y usa B1 y B2 para repasar lo que falle.</p>
        </header>
        <div class="level-grid">
          ${LEVELS.map((level, index) => {
            const stats = levelStats(level.id);
            return `
              <a class="level-card" data-level="${levelSlug(level.id)}" href="#/guides?level=${level.id}" data-reveal style="--i:${index}">
                <span class="level-orb" aria-hidden="true">${level.name}</span>
                <h3>${level.label}</h3>
                <p>${level.description}</p>
                <div class="card-progress" aria-hidden="true"><span style="width:${stats.percent}%"></span></div>
                <span class="level-card-meta">${stats.mastered}/${stats.total} dominadas <span aria-hidden="true">›</span></span>
              </a>`;
          }).join("")}
        </div>
      </section>

      ${upcoming.length ? `
        <section class="home-section" aria-labelledby="next-title">
          <header class="section-heading section-heading-row" data-reveal>
            <h2 id="next-title">A continuación.</h2>
            <a class="text-link" href="#/guides">Ver todas las guías <span aria-hidden="true">›</span></a>
          </header>
          <div class="guide-grid">${upcoming.map(guideCard).join("")}</div>
        </section>` : ""}

      ${started ? `<p class="home-reset"><button class="text-button" type="button" data-reset-progress>Reiniciar progreso</button></p>` : ""}`;

    document.querySelector("[data-reset-progress]")?.addEventListener("click", () => resetDialog.showModal());
  }

  // ---------------------------------------------------------------------------
  // Catálogo de guías
  // ---------------------------------------------------------------------------
  function renderGuideList(params) {
    setActiveNav("guides");
    document.title = "Guías · English Bloom";
    const state = {
      level: LEVELS.some((level) => level.id === params.get("level")) ? params.get("level") : "all",
      category: CATEGORIES[params.get("cat")] ? params.get("cat") : "all",
      query: params.get("q") || ""
    };
    const chip = (group, value, label) => `<button type="button" class="filter-chip${state[group] === value ? " is-active" : ""}" data-filter-group="${group}" data-filter-value="${value}" aria-pressed="${state[group] === value}">${label}</button>`;

    app.innerHTML = `
      <section class="guides-shell">
        <header class="page-hero">
          <p class="eyebrow">GUÍAS DE ESTUDIO</p>
          <h1>Todo el temario,<br><em>en fichas.</em></h1>
          <p>Desliza las fichas, practica al final y marca tu progreso. Una guía está dominada cuando sacas un 80 % o más.</p>
        </header>
        <div class="guide-filters" role="search">
          <div class="chip-row" aria-label="Nivel">${chip("level", "all", "Todos los niveles")}${LEVELS.map((level) => chip("level", level.id, level.name)).join("")}</div>
          <div class="chip-row" aria-label="Tipo">${chip("category", "all", "Todo")}${Object.entries(CATEGORIES).map(([id, label]) => chip("category", id, label)).join("")}</div>
          <label class="guide-search"><span class="sr-only">Buscar guía</span><input type="search" placeholder="Buscar: inversion, phrasal verbs, essay…" value="${escapeHtml(state.query)}" data-guide-search></label>
        </div>
        <div data-guide-results></div>
      </section>`;

    const results = document.querySelector("[data-guide-results]");
    const paint = () => {
      const query = state.query.trim().toLocaleLowerCase("es");
      const filtered = guides.filter((guide) =>
        (state.level === "all" || guide.level === state.level)
        && (state.category === "all" || guide.category === state.category)
        && (!query || [guide.title, guide.subtitle, guide.module, ...(guide.tags || [])].join(" ").toLocaleLowerCase("es").includes(query)));
      const groups = LEVELS.map((level) => ({ level, items: filtered.filter((guide) => guide.level === level.id) })).filter((group) => group.items.length);
      results.innerHTML = groups.length
        ? groups.map((group) => `
            <section class="guide-group" data-level="${levelSlug(group.level.id)}">
              <h2><span class="level-badge">${group.level.name}</span>${group.level.label}<small>${group.items.length} ${group.items.length === 1 ? "guía" : "guías"}</small></h2>
              <div class="guide-grid">${group.items.map(guideCard).join("")}</div>
            </section>`).join("")
        : '<p class="empty-filter"><strong>No hay guías con estos filtros.</strong> Prueba con otro nivel o búsqueda.</p>';
      const search = new URLSearchParams();
      if (state.level !== "all") search.set("level", state.level);
      if (state.category !== "all") search.set("cat", state.category);
      if (state.query) search.set("q", state.query);
      history.replaceState(null, "", `#/guides${search.toString() ? `?${search}` : ""}`);
    };

    document.querySelectorAll("[data-filter-group]").forEach((button) => {
      button.addEventListener("click", () => {
        state[button.dataset.filterGroup] = button.dataset.filterValue;
        document.querySelectorAll(`[data-filter-group="${button.dataset.filterGroup}"]`).forEach((other) => {
          const active = other === button;
          other.classList.toggle("is-active", active);
          other.setAttribute("aria-pressed", String(active));
        });
        paint();
      });
    });
    document.querySelector("[data-guide-search]").addEventListener("input", (event) => {
      state.query = event.target.value;
      paint();
    });
    paint();
  }

  // ---------------------------------------------------------------------------
  // Fichas (slides)
  // ---------------------------------------------------------------------------
  const slideRenderers = {
    cover(slide, guide) {
      return `
        <div class="cover-inner">
          <span class="slide-kicker">${guide.level} · ${CATEGORIES[guide.category] || ""}</span>
          <span class="slide-emoji" aria-hidden="true">${slide.emoji || guide.emoji || "📘"}</span>
          <h2>${fmt(slide.title || guide.title)}</h2>
          <p>${fmt(slide.subtitle || guide.subtitle || "")}</p>
          <span class="slide-swipe" aria-hidden="true">Desliza →</span>
        </div>`;
    },
    rule(slide) {
      return `
        <h3>${fmt(slide.title)}</h3>
        ${slide.text ? `<p class="slide-lead">${fmt(slide.text)}</p>` : ""}
        ${slide.formula?.length ? `<div class="slide-formula">${slide.formula.map((line) => `<p>${fmt(line)}</p>`).join("")}</div>` : ""}
        ${slide.note ? `<p class="slide-note">${fmt(slide.note)}</p>` : ""}`;
    },
    table(slide) {
      return `
        <h3>${fmt(slide.title)}</h3>
        ${slide.text ? `<p class="slide-lead">${fmt(slide.text)}</p>` : ""}
        <div class="slide-table-wrap"><table class="slide-table">
          ${slide.head ? `<thead><tr>${slide.head.map((cell) => `<th scope="col">${fmt(cell)}</th>`).join("")}</tr></thead>` : ""}
          <tbody>${slide.rows.map((row) => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${fmt(cell)}</th>` : `<td>${fmt(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>
        ${slide.note ? `<p class="slide-note">${fmt(slide.note)}</p>` : ""}`;
    },
    examples(slide) {
      return `
        <h3>${fmt(slide.title)}</h3>
        <ul class="slide-examples">
          ${slide.items.map((item) => `
            <li class="${item.ok === false ? "is-wrong" : item.ok === true ? "is-right" : ""}">
              <span class="slide-mark" aria-hidden="true">${item.ok === false ? "✗" : item.ok === true ? "✓" : "•"}</span>
              <div><strong lang="en">${fmt(item.en)}</strong>${item.es ? `<span>${fmt(item.es)}</span>` : ""}</div>
            </li>`).join("")}
        </ul>`;
    },
    mistakes(slide) {
      return `
        <h3>${fmt(slide.title || "Errores típicos")}</h3>
        <ul class="slide-mistakes">
          ${slide.items.map((item) => `
            <li>
              <p class="mistake-wrong"><span aria-hidden="true">✗</span><s lang="en">${fmt(item.wrong)}</s></p>
              <p class="mistake-right"><span aria-hidden="true">✓</span><span lang="en">${fmt(item.right)}</span></p>
              ${item.why ? `<small>${fmt(item.why)}</small>` : ""}
            </li>`).join("")}
        </ul>`;
    },
    tip(slide) {
      return `
        <div class="slide-tip">
          <span class="slide-tip-emoji" aria-hidden="true">${slide.emoji || "💡"}</span>
          <h3>${fmt(slide.title)}</h3>
          ${slide.text ? `<p class="slide-lead">${fmt(slide.text)}</p>` : ""}
          ${slide.points?.length ? `<ul class="slide-points">${slide.points.map((point) => `<li>${fmt(point)}</li>`).join("")}</ul>` : ""}
        </div>`;
    },
    compare(slide) {
      return `
        <h3>${fmt(slide.title)}</h3>
        <div class="slide-compare">
          ${slide.columns.map((column) => `
            <div>
              <strong lang="en">${fmt(column.label)}</strong>
              <p>${fmt(column.text)}</p>
              ${column.example ? `<p class="slide-compare-example" lang="en">${fmt(column.example)}</p>` : ""}
            </div>`).join("")}
        </div>
        ${slide.note ? `<p class="slide-note">${fmt(slide.note)}</p>` : ""}`;
    },
    list(slide) {
      return `
        <h3>${fmt(slide.title)}</h3>
        ${slide.text ? `<p class="slide-lead">${fmt(slide.text)}</p>` : ""}
        <dl class="slide-list">
          ${slide.items.map((item) => `
            <div>
              <dt lang="en">${fmt(item.term)}</dt>
              <dd>${fmt(item.meaning)}${item.example ? `<em lang="en">${fmt(item.example)}</em>` : ""}</dd>
            </div>`).join("")}
        </dl>`;
    },
    steps(slide) {
      return `
        <h3>${fmt(slide.title)}</h3>
        ${slide.text ? `<p class="slide-lead">${fmt(slide.text)}</p>` : ""}
        <ol class="slide-steps">${slide.steps.map((step) => `<li>${fmt(step)}</li>`).join("")}</ol>
        ${slide.note ? `<p class="slide-note">${fmt(slide.note)}</p>` : ""}`;
    },
    summary(slide) {
      return `
        <span class="slide-summary-label">CHULETA</span>
        <h3>${fmt(slide.title || "Resumen")}</h3>
        <ul class="slide-points is-summary">${slide.points.map((point) => `<li>${fmt(point)}</li>`).join("")}</ul>
        <span class="slide-save" aria-hidden="true">🔖 Guárdala para repasar</span>`;
    }
  };

  function renderSlide(slide, guide, index, total) {
    const renderer = slideRenderers[slide.type] || slideRenderers.rule;
    return `
      <article class="slide slide-${escapeHtml(slide.type)}" aria-roledescription="ficha" aria-label="Ficha ${index + 1} de ${total}">
        <header class="slide-top"><span>English Bloom · ${guide.level}</span><span>${index + 1}/${total}</span></header>
        <div class="slide-body">${renderer(slide, guide)}</div>
      </article>`;
  }

  // ---------------------------------------------------------------------------
  // Vista de guía con carrusel
  // ---------------------------------------------------------------------------
  function siblings(guide) {
    const index = guides.indexOf(guide);
    return { previous: guides[index - 1] || null, next: guides[index + 1] || null };
  }

  function renderGuide(id, requestedSlide = null) {
    const guide = guideById.get(id);
    if (!guide) { location.hash = "#/guides"; return; }
    setActiveNav(guide.category === "exam" ? "exam" : "guides");
    document.title = `${guide.title} · English Bloom`;
    const saved = guideProgress(guide.id);
    recordActivity();
    updateGuide(guide.id, { lastOpenedAt: new Date().toISOString() });
    const status = guideStatus(guide);
    const { previous, next } = siblings(guide);
    const total = guide.slides.length;

    app.innerHTML = `
      <section class="guide-shell" data-level="${levelSlug(guide.level)}">
        <a class="back-link" href="${guide.category === "exam" ? "#/exam" : `#/guides?level=${guide.level}`}">← ${guide.category === "exam" ? "Volver al examen" : `Guías ${guide.level}`}</a>
        <div class="guide-layout">
          <div class="guide-viewer">
            <div class="carousel" data-carousel tabindex="0" aria-roledescription="carrusel" aria-label="Fichas de ${escapeHtml(guide.title)}. Usa las flechas para avanzar.">
              <div class="carousel-track" data-track>${guide.slides.map((slide, index) => renderSlide(slide, guide, index, total)).join("")}</div>
              <button class="carousel-arrow is-prev" type="button" data-prev aria-label="Ficha anterior">‹</button>
              <button class="carousel-arrow is-next" type="button" data-next aria-label="Ficha siguiente">›</button>
            </div>
            <div class="carousel-dots" role="tablist" aria-label="Elegir ficha">
              ${guide.slides.map((_slide, index) => `<button type="button" role="tab" data-dot="${index}" aria-label="Ir a la ficha ${index + 1}"></button>`).join("")}
            </div>
          </div>
          <aside class="guide-panel">
            <p class="eyebrow"><span class="level-badge">${guide.level}</span> ${CATEGORIES[guide.category] || ""}${guide.module ? ` · ${escapeHtml(guide.module)}` : ""}</p>
            <h1>${fmt(guide.title)}</h1>
            <p class="guide-panel-subtitle">${fmt(guide.subtitle || "")}</p>
            <div class="guide-panel-meta">
              <span>◷ ${guideMinutes(guide)} min</span><span>${total} fichas</span><span>${guide.exercises.length} ejercicios</span>
              <span class="status-pill ${status.className}" data-guide-status>${status.label}</span>
            </div>
            ${guide.objectives?.length ? `<div class="guide-objectives"><strong>Al terminar podrás</strong><ul>${guide.objectives.map((item) => `<li>${fmt(item)}</li>`).join("")}</ul></div>` : ""}
            <div class="guide-panel-actions">
              ${guide.exercises.length ? `<a class="primary-button" href="#/guide/${guide.id}/practice">Practicar ${guide.exercises.length} ejercicios <span aria-hidden="true">→</span></a>` : ""}
              <button class="secondary-button" type="button" data-print>Imprimir / PDF</button>
            </div>
            ${saved?.attempts ? `<p class="guide-panel-score">Mejor resultado: <strong>${saved.bestScore}%</strong> · ${saved.attempts} ${saved.attempts === 1 ? "intento" : "intentos"}</p>` : ""}
            <nav class="guide-pagination" aria-label="Otras guías">
              ${previous ? `<a href="#/guide/${previous.id}"><span>← Anterior</span><strong>${fmt(previous.title)}</strong></a>` : "<span></span>"}
              ${next ? `<a href="#/guide/${next.id}"><span>Siguiente →</span><strong>${fmt(next.title)}</strong></a>` : "<span></span>"}
            </nav>
          </aside>
        </div>
      </section>`;

    setupCarousel(guide, Number.isInteger(requestedSlide) ? requestedSlide : saved?.lastSlide || 0);
    document.querySelector("[data-print]").addEventListener("click", () => window.print());
  }

  function setupCarousel(guide, startIndex) {
    const track = document.querySelector("[data-track]");
    const root = document.querySelector("[data-carousel]");
    const dots = [...document.querySelectorAll("[data-dot]")];
    const prev = document.querySelector("[data-prev]");
    const next = document.querySelector("[data-next]");
    const total = guide.slides.length;
    let current = -1;
    let saveTimer;

    const paint = (index) => {
      if (index === current) return;
      current = index;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
        dot.setAttribute("aria-selected", String(dotIndex === index));
      });
      prev.disabled = index === 0;
      next.disabled = index === total - 1;
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => {
        const saved = guideProgress(guide.id) || {};
        const changes = { lastSlide: index };
        if (index === total - 1 && !saved.read) changes.read = true;
        updateGuide(guide.id, changes);
        if (changes.read) {
          const pill = document.querySelector("[data-guide-status]");
          const status = guideStatus(guide);
          if (pill) { pill.textContent = status.label; pill.className = `status-pill ${status.className}`; }
        }
      }, 400);
    };

    const go = (index, smooth = true) => {
      const target = Math.max(0, Math.min(total - 1, index));
      track.scrollTo({ left: target * track.clientWidth, behavior: smooth ? "smooth" : "auto" });
      paint(target);
    };

    track.addEventListener("scroll", () => {
      paint(Math.round(track.scrollLeft / Math.max(1, track.clientWidth)));
    }, { passive: true });
    prev.addEventListener("click", () => go(current - 1));
    next.addEventListener("click", () => go(current + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => go(index)));
    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") { event.preventDefault(); go(current + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); go(current - 1); }
    });

    carousel = { go: (delta) => go(current + delta) };
    const start = Math.max(0, Math.min(startIndex, total - 1));
    paint(start);
    // El desplazamiento inicial espera al layout, pero el estado ya es correcto.
    requestAnimationFrame(() => track.scrollTo({ left: start * track.clientWidth, behavior: "auto" }));
  }

  // ---------------------------------------------------------------------------
  // Práctica (motor de ejercicios)
  // ---------------------------------------------------------------------------
  function startPractice(id) {
    const guide = guideById.get(id);
    if (!guide || !guide.exercises.length) { location.hash = guide ? `#/guide/${id}` : "#/guides"; return; }
    setActiveNav(guide.category === "exam" ? "exam" : "guides");
    document.title = `Práctica · ${guide.title} · English Bloom`;
    session = {
      kind: "guide", guide, title: guide.title, backHref: `#/guide/${guide.id}`, backLabel: "Volver a las fichas",
      items: guide.exercises.map((exercise) => ({ guide, exercise })), index: 0, answers: [], selectedWords: [], mistakes: []
    };
    renderExercise();
  }

  function summaryReminder(guide) {
    const summary = guide.slides.find((slide) => slide.type === "summary");
    if (!summary) return "";
    return `
      <details class="theory-reminder">
        <summary>Ver la chuleta</summary>
        <div><ul class="slide-points is-summary">${summary.points.map((point) => `<li>${fmt(point)}</li>`).join("")}</ul></div>
      </details>`;
  }

  function exerciseInput(exercise) {
    if (exercise.type === "fillBlank") {
      return `<label class="fill-answer"><span>Tu respuesta</span><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" lang="en" data-fill-answer placeholder="Escribe aquí…"></label>`;
    }

    if (exercise.type === "reorder") {
      return `
        <div class="ordered-answer" data-ordered-answer aria-live="polite"><span>Selecciona las palabras en orden</span></div>
        <div class="word-bank">
          ${exercise.words.map((word, index) => `<button type="button" class="word-chip" data-word-index="${index}">${escapeHtml(word)}</button>`).join("")}
        </div>
        <button type="button" class="text-button" data-clear-order>Limpiar frase</button>`;
    }

    if (exercise.type === "match") {
      const options = exercise.pairs.map((pair) => pair.right).reverse();
      return `<div class="match-list">
        ${exercise.pairs.map((pair, index) => `
          <label><span lang="en">${fmt(pair.left)}</span><select data-match-index="${index}">
            <option value="">Elige…</option>
            ${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}
          </select></label>
        `).join("")}
      </div>`;
    }

    const contextualClass = exercise.type === "context" ? " context-options" : "";
    return `<fieldset class="choice-list${contextualClass}"><legend class="sr-only">Elige una respuesta</legend>
      ${exercise.options.map((option, index) => `
        <label><input type="radio" name="exercise-answer" value="${escapeHtml(option)}"><span class="choice-letter">${String.fromCharCode(65 + index)}</span><span lang="en">${fmt(option)}</span></label>
      `).join("")}
    </fieldset>`;
  }

  function renderExercise() {
    const { index, answers, items } = session;
    const { guide, exercise } = items[index];
    const percent = Math.round((index / items.length) * 100);
    const promptHtml = fmt(exercise.prompt).replaceAll("___", '<span class="blank" aria-label="hueco">_____</span>');
    app.innerHTML = `
      <section class="practice-shell" data-level="${levelSlug(guide.level)}">
        <a class="back-link" href="${session.backHref}">← ${escapeHtml(session.backLabel)}</a>
        ${session.kind !== "guide" ? `<p class="practice-source"><span class="level-badge">${guide.level}</span> ${escapeHtml(session.title)} · de la guía <a href="#/guide/${guide.id}">${fmt(guide.title)}</a></p>` : ""}
        <div class="practice-topline">
          <span>Ejercicio ${index + 1} de ${items.length}</span>
          <span>${answers.filter(Boolean).length} aciertos</span>
        </div>
        <div class="practice-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><span style="width:${percent}%"></span></div>
        ${summaryReminder(guide)}
        <article class="exercise-card">
          <p class="eyebrow">${fmt(exercise.instruction)}</p>
          ${exercise.context ? `<p class="exercise-context" lang="en">${fmt(exercise.context)}</p>` : ""}
          ${exercise.keyword ? `<p class="exercise-keyword" lang="en">${escapeHtml(exercise.keyword)}</p>` : ""}
          <h1 lang="en">${promptHtml}</h1>
          <div class="exercise-input">${exerciseInput(exercise)}</div>
          <p class="answer-warning" data-answer-warning role="alert"></p>
          <div class="exercise-actions"><button class="primary-button" type="button" data-check-answer>Comprobar respuesta</button></div>
        </article>
      </section>`;

    bindExerciseEvents(exercise);
    document.querySelector("[data-fill-answer]")?.focus();
  }

  function bindExerciseEvents(exercise) {
    if (exercise.type === "reorder") {
      document.querySelectorAll("[data-word-index]").forEach((button) => {
        button.addEventListener("click", () => {
          const wordIndex = Number(button.dataset.wordIndex);
          if (!session.selectedWords.includes(wordIndex)) session.selectedWords.push(wordIndex);
          button.disabled = true;
          updateOrderedAnswer(exercise);
        });
      });
      document.querySelector("[data-clear-order]").addEventListener("click", () => {
        session.selectedWords = [];
        document.querySelectorAll("[data-word-index]").forEach((button) => { button.disabled = false; });
        updateOrderedAnswer(exercise);
      });
    }
    document.querySelector("[data-fill-answer]")?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkAnswer(exercise);
    });
    document.querySelector("[data-check-answer]").addEventListener("click", () => checkAnswer(exercise));
  }

  function updateOrderedAnswer(exercise) {
    const target = document.querySelector("[data-ordered-answer]");
    const selected = session.selectedWords.map((index) => ({ index, word: exercise.words[index] }));
    target.innerHTML = selected.length
      ? selected.map((item) => `<button type="button" data-remove-word="${item.index}" aria-label="Quitar ${escapeHtml(item.word)}">${escapeHtml(item.word)}</button>`).join("")
      : "<span>Selecciona las palabras en orden</span>";
    target.querySelectorAll("[data-remove-word]").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.removeWord);
        session.selectedWords = session.selectedWords.filter((item) => item !== index);
        document.querySelector(`[data-word-index="${index}"]`).disabled = false;
        updateOrderedAnswer(exercise);
      });
    });
  }

  function normalizeAnswer(value) {
    return String(value)
      .trim()
      .toLocaleLowerCase("en")
      .replace(/[’‘`´]/g, "'")
      .replace(/[?.!,;:"“”]/g, "")
      .replace(/\s+/g, " ");
  }

  function collectAnswer(exercise) {
    if (exercise.type === "fillBlank") return document.querySelector("[data-fill-answer]").value;
    if (exercise.type === "reorder") return session.selectedWords.map((index) => exercise.words[index]).join(" ");
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

  function correctAnswerText(exercise) {
    if (exercise.type === "match") return exercise.pairs.map((pair) => `${pair.left} → ${pair.right}`).join(" · ");
    return exercise.correctAnswer || exercise.acceptableAnswers?.[0] || "";
  }

  function checkAnswer(exercise) {
    if (!document.querySelector("[data-check-answer]")) return;
    const answer = collectAnswer(exercise);
    const missing = Array.isArray(answer) ? answer.some((value) => !value) : !String(answer).trim();
    if (missing) {
      document.querySelector("[data-answer-warning]").textContent = "Elige o escribe una respuesta antes de continuar.";
      return;
    }

    const correct = answerIsCorrect(exercise, answer);
    const current = session.items[session.index];
    session.answers.push(correct);
    recordExerciseResult(current.guide.id, exercise.id, correct);
    if (!correct) session.mistakes.push({ exercise, guide: current.guide, answer: Array.isArray(answer) ? answer.join(" · ") : answer });
    document.querySelector(".exercise-card").classList.add(correct ? "is-correct" : "is-incorrect");
    document.querySelector(".exercise-input").querySelectorAll("input, select, button").forEach((control) => { control.disabled = true; });
    document.querySelector("[data-answer-warning]").remove();
    const last = session.index === session.items.length - 1;
    document.querySelector(".exercise-actions").innerHTML = `
      <div class="feedback" role="status">
        <strong>${correct ? "¡Muy bien!" : "Casi. Vamos a verlo."}</strong>
        ${correct ? "" : `<p class="feedback-answer">Respuesta correcta: <strong lang="en">${escapeHtml(correctAnswerText(exercise))}</strong></p>`}
        <p>${fmt(exercise.explanation)}</p>
      </div>
      <button class="primary-button" type="button" data-next-exercise>
        ${last ? "Ver resultado" : "Siguiente ejercicio"} <span aria-hidden="true">→</span>
      </button>`;
    const nextButton = document.querySelector("[data-next-exercise]");
    nextButton.addEventListener("click", nextExercise);
    nextButton.focus();
  }

  function nextExercise() {
    session.index += 1;
    session.selectedWords = [];
    if (session.index >= session.items.length) renderResults();
    else renderExercise();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function mistakesList(mistakes) {
    if (!mistakes.length) return "";
    return `
      <div class="result-mistakes">
        <h2>Para repasar</h2>
        <ul>${mistakes.map((item) => `
          <li><p lang="en">${fmt(item.exercise.context ? `${item.exercise.context} → ${item.exercise.prompt}` : item.exercise.prompt)}</p>
          <span>Tu respuesta: <s lang="en">${escapeHtml(item.answer)}</s></span>
          <span>Correcta: <strong lang="en">${escapeHtml(correctAnswerText(item.exercise))}</strong></span>
          ${session.kind !== "guide" ? `<a href="#/guide/${item.guide.id}">Repasar la guía «${fmt(item.guide.title)}» →</a>` : ""}</li>`).join("")}
        </ul>
      </div>`;
  }

  function renderResults() {
    if (session.kind !== "guide") { renderReviewResults(); return; }
    const { guide, answers, mistakes } = session;
    const correct = answers.filter(Boolean).length;
    const score = Math.round((correct / answers.length) * 100);
    const mastered = score >= 80;
    const saved = guideProgress(guide.id) || { attempts: 0, bestScore: 0 };
    recordActivity();
    updateGuide(guide.id, {
      attempts: (saved.attempts || 0) + 1,
      bestScore: Math.max(saved.bestScore || 0, score),
      lastScore: score,
      lastCompletedAt: new Date().toISOString()
    });
    const { next } = siblings(guide);
    app.innerHTML = `
      <section class="result-shell" data-level="${levelSlug(guide.level)}">
        <div class="result-badge" aria-hidden="true">${mastered ? "🏆" : "💪"}</div>
        <p class="eyebrow">PRÁCTICA TERMINADA</p>
        <h1>${mastered ? "¡Guía dominada!" : "Buen intento"}</h1>
        <p>${mastered ? "Has demostrado que controlas esta estructura." : "Repasa las fichas y vuelve a intentarlo para llegar al 80 %."}</p>
        <div class="score-display"><strong>${score}%</strong><span>${correct} de ${answers.length} respuestas correctas</span></div>
        ${mistakesList(mistakes)}
        <div class="result-actions">
          <button class="primary-button" type="button" data-retry>Repetir ejercicios</button>
          ${mastered && next ? `<a class="secondary-button" href="#/guide/${next.id}">Siguiente guía →</a>` : `<a class="secondary-button" href="#/guide/${guide.id}">Volver a las fichas</a>`}
        </div>
      </section>`;
    document.querySelector("[data-retry]").addEventListener("click", () => startPractice(guide.id));
  }

  // ---------------------------------------------------------------------------
  // Repaso: errores, transformaciones al azar y tests mixtos
  // ---------------------------------------------------------------------------
  const REVIEW_MODES = {
    mistakes: { title: "Repaso de errores", size: 15, describe: "Solo los ejercicios que has fallado. Salen de la cola cuando los aciertas." },
    kwt: { title: "Key word transformations", size: 8, describe: "Transformaciones al azar de todas las guías, como en Use of English 4." },
    level: { title: "Test mixto", size: 12, describe: "Gramática y vocabulario mezclados de un nivel." },
    vocabulary: { title: "Test de vocabulario", size: 12, describe: "Collocations, phrasal verbs, idioms y registro." }
  };

  function reviewPool(mode, level) {
    const all = guides.flatMap((guide) => guide.exercises.map((exercise) => ({ guide, exercise })));
    if (mode === "mistakes") return pendingMistakes().sort((a, b) => b.count - a.count).map(({ guide, exercise }) => ({ guide, exercise }));
    if (mode === "kwt") return all.filter((item) => item.exercise.keyword);
    if (mode === "vocabulary") return all.filter((item) => item.guide.category === "vocabulary");
    return all.filter((item) => item.guide.level === level && item.guide.category !== "exam");
  }

  function startReview(mode, level) {
    const key = REVIEW_MODES[mode] ? mode : "mistakes";
    const config = REVIEW_MODES[key];
    const safeLevel = LEVELS.some((item) => item.id === level) ? level : "C1";
    const pool = reviewPool(key, safeLevel);
    if (!pool.length) { location.hash = "#/review"; return; }
    const items = key === "mistakes" ? pool.slice(0, config.size) : shuffle(pool).slice(0, config.size);
    setActiveNav("review");
    const title = key === "level" ? `${config.title} ${safeLevel}` : config.title;
    document.title = `${title} · English Bloom`;
    session = { kind: "review", mode: key, level: safeLevel, title, backHref: "#/review", backLabel: "Volver al repaso", items, index: 0, answers: [], selectedWords: [], mistakes: [] };
    renderExercise();
  }

  function renderReviewResults() {
    const { answers, mistakes, mode, level, title } = session;
    const correct = answers.filter(Boolean).length;
    const score = Math.round((correct / answers.length) * 100);
    recordActivity();
    progress.reviewSessions = (progress.reviewSessions || 0) + 1;
    saveProgress();
    const remaining = pendingMistakes().length;
    app.innerHTML = `
      <section class="result-shell">
        <div class="result-badge" aria-hidden="true">${score >= 80 ? "🎯" : "🔁"}</div>
        <p class="eyebrow">${escapeHtml(title).toUpperCase()}</p>
        <h1>${score >= 80 ? "¡Muy buen trabajo!" : "Sigue practicando"}</h1>
        <p>${mode === "mistakes" ? (remaining ? `Te quedan ${remaining} ejercicios en la cola de repaso.` : "Tu cola de repaso está vacía.") : "Los ejercicios que has fallado se han añadido a tu cola de repaso."}</p>
        <div class="score-display"><strong>${score}%</strong><span>${correct} de ${answers.length} respuestas correctas</span></div>
        ${mistakesList(mistakes)}
        <div class="result-actions">
          ${mode !== "mistakes" || remaining ? '<button class="primary-button" type="button" data-again>Otra ronda</button>' : ""}
          <a class="secondary-button" href="#/review">Volver al repaso</a>
        </div>
      </section>`;
    document.querySelector("[data-again]")?.addEventListener("click", () => startReview(mode, level));
  }

  function renderReview() {
    setActiveNav("review");
    document.title = "Repaso · English Bloom";
    const pending = pendingMistakes();
    const byGuide = [...pending.reduce((map, item) => map.set(item.guide, (map.get(item.guide) || 0) + 1), new Map())]
      .sort((a, b) => b[1] - a[1]);
    const kwtCount = reviewPool("kwt").length;
    app.innerHTML = `
      <section class="review-page">
        <header class="page-hero">
          <p class="eyebrow">REPASO</p>
          <h1>Practica lo que<br><em>más te cuesta.</em></h1>
          <p>Repasar lo que fallas es lo que más rápido sube la nota. Cada ejercicio fallado entra en tu cola y sale cuando lo aciertas.</p>
        </header>
        <div class="review-modes">
          <article class="review-mode is-featured">
            <span class="review-mode-count">${pending.length}</span>
            <h2>${REVIEW_MODES.mistakes.title}</h2>
            <p>${REVIEW_MODES.mistakes.describe}</p>
            ${pending.length ? `<a class="primary-button" href="#/review/start?mode=mistakes">Repasar ${Math.min(pending.length, REVIEW_MODES.mistakes.size)} ${pending.length === 1 ? "error" : "errores"} →</a>` : '<p class="review-empty-note">Cola vacía: haz la práctica de alguna guía y vuelve aquí.</p>'}
          </article>
          <article class="review-mode" data-level="c1">
            <span class="review-mode-count" aria-hidden="true">🔑</span>
            <h2>${REVIEW_MODES.kwt.title}</h2>
            <p>${REVIEW_MODES.kwt.describe} Hay ${kwtCount} en el banco.</p>
            <a class="primary-button" href="#/review/start?mode=kwt">Empezar 8 al azar →</a>
          </article>
          <article class="review-mode">
            <span class="review-mode-count" aria-hidden="true">🧪</span>
            <h2>${REVIEW_MODES.level.title}</h2>
            <p>${REVIEW_MODES.level.describe} 12 preguntas al azar.</p>
            <div class="review-level-buttons">${LEVELS.map((level) => `<a class="level-pill" data-level="${levelSlug(level.id)}" href="#/review/start?mode=level&level=${level.id}">${level.id}</a>`).join("")}</div>
          </article>
          <article class="review-mode">
            <span class="review-mode-count" aria-hidden="true">🧩</span>
            <h2>${REVIEW_MODES.vocabulary.title}</h2>
            <p>${REVIEW_MODES.vocabulary.describe}</p>
            <a class="primary-button" href="#/review/start?mode=vocabulary">Empezar 12 al azar →</a>
          </article>
        </div>
        ${byGuide.length ? `
          <section class="review-weak">
            <h2>Tus puntos débiles</h2>
            <ul>${byGuide.slice(0, 8).map(([guide, count]) => `<li data-level="${levelSlug(guide.level)}"><a href="#/guide/${guide.id}"><span class="level-badge">${guide.level}</span>${fmt(guide.title)}</a><span>${count} ${count === 1 ? "error" : "errores"}</span></li>`).join("")}</ul>
          </section>` : ""}
      </section>`;
  }

  // ---------------------------------------------------------------------------
  // Examen
  // ---------------------------------------------------------------------------
  function renderExam() {
    setActiveNav("exam");
    document.title = "C1 Advanced · English Bloom";
    const guidesForPart = (partId) => guides.filter((guide) => (guide.examParts || [guide.examPart]).includes(partId));
    app.innerHTML = `
      <section class="exam-shell" data-level="c1">
        <header class="page-hero">
          <p class="eyebrow">CAMBRIDGE C1 ADVANCED</p>
          <h1>Conoce el examen<br><em>por dentro.</em></h1>
          <p>Cuatro pruebas y cinco destrezas, cada una vale un 20 % de la nota final. Aquí tienes cada parte, qué se evalúa y su guía de estrategia.</p>
        </header>
        <div class="exam-overview">
          ${exam.papers.map((paper) => `
            <a class="exam-paper-card" href="#paper-${paper.id}">
              <span class="exam-paper-emoji" aria-hidden="true">${paper.emoji}</span>
              <strong>${escapeHtml(paper.name)}</strong>
              <span>${escapeHtml(paper.duration)} · ${paper.parts.length} partes</span>
              <span class="exam-weight">${escapeHtml(paper.weight)}</span>
            </a>`).join("")}
        </div>
        ${exam.papers.map((paper) => `
          <section class="exam-paper" id="paper-${paper.id}">
            <header><span aria-hidden="true">${paper.emoji}</span><div><h2>${escapeHtml(paper.name)}</h2><p>${escapeHtml(paper.duration)} · ${escapeHtml(paper.weight)} de la nota${paper.note ? ` · ${escapeHtml(paper.note)}` : ""}</p></div></header>
            <ol class="exam-parts">
              ${paper.parts.map((part) => {
                const partGuides = guidesForPart(part.id);
                return `
                  <li>
                    <span class="exam-part-number">${part.number}</span>
                    <div>
                      <strong lang="en">${escapeHtml(part.name)}</strong>
                      <p>${fmt(part.task)}</p>
                      <small>${[part.questions ? `${part.questions} ${part.questions === 1 ? "tarea" : "preguntas"}` : "", part.marks].filter(Boolean).map(escapeHtml).join(" · ")}</small>
                    </div>
                    ${partGuides.length ? `<div class="exam-part-links">${partGuides.map((guide) => `<a class="exam-part-link" href="#/guide/${guide.id}">${partGuides.length > 1 ? escapeHtml(guide.title.split(": ").pop()) : "Guía"} <span aria-hidden="true">→</span></a>`).join("")}</div>` : '<span class="exam-part-soon">Guía en preparación</span>'}
                  </li>`;
              }).join("")}
            </ol>
          </section>`).join("")}
        <section class="exam-scale">
          <h2>¿Cómo se puntúa?</h2>
          <p>Cada destreza se puntúa en la <strong>Cambridge English Scale</strong> y la nota final es la media de las cinco.</p>
          <div class="slide-table-wrap"><table class="slide-table">
            <thead><tr><th scope="col">Puntuación</th><th scope="col">Resultado</th></tr></thead>
            <tbody>${exam.scale.map((row) => `<tr><th scope="row">${escapeHtml(row.range)}</th><td>${fmt(row.result)}</td></tr>`).join("")}</tbody>
          </table></div>
          <p class="exam-disclaimer">El formato puede cambiar: revisa siempre la información oficial de Cambridge English antes de inscribirte.</p>
        </section>
      </section>`;
  }

  // ---------------------------------------------------------------------------
  // Plan de estudio
  // ---------------------------------------------------------------------------
  function mondayOf(date) {
    const result = new Date(date);
    result.setHours(0, 0, 0, 0);
    result.setDate(result.getDate() - ((result.getDay() + 6) % 7));
    return result;
  }

  function buildPlan(examDate, hoursPerWeek) {
    const start = mondayOf(new Date());
    const end = new Date(`${examDate}T00:00:00`);
    const weekCount = Math.max(1, Math.ceil((end - start + 86400000) / (7 * 86400000)));
    const reviewWeeks = weekCount >= 8 ? 2 : weekCount >= 3 ? 1 : 0;
    const studyWeeks = Math.max(1, weekCount - reviewWeeks);
    const pending = guides.filter((guide) => !isMastered(guide));
    const totalMinutes = pending.reduce((sum, guide) => sum + guideMinutes(guide), 0);
    const capacity = Math.max(hoursPerWeek * 60, Math.ceil(totalMinutes / studyWeeks));
    const weeks = [];
    let cursor = 0;
    for (let week = 0; week < weekCount; week += 1) {
      const weekStart = new Date(start);
      weekStart.setDate(start.getDate() + week * 7);
      const entry = { start: todayKey(weekStart), guideIds: [], tasks: [] };
      if (week < studyWeeks) {
        let used = 0;
        while (cursor < pending.length && (used === 0 || used + guideMinutes(pending[cursor]) <= capacity)) {
          used += guideMinutes(pending[cursor]);
          entry.guideIds.push(pending[cursor].id);
          cursor += 1;
        }
        if (week % 2 === 1) entry.tasks.push("Writing: escribe un texto de 220–260 palabras y revísalo con la guía de Writing");
        if (week % 2 === 0) entry.tasks.push("Listening: un podcast o charla en inglés de 20 min tomando notas");
        if (week > 0) entry.tasks.push("Repaso: repite la práctica de las guías por debajo del 80 %");
      } else {
        entry.tasks.push("Simulacro completo de Reading and Use of English (1 h 30 min)");
        entry.tasks.push("Simulacro de Writing: essay + una tarea de la parte 2");
        entry.tasks.push("Listening y Speaking cronometrados (partes 1–4)");
        entry.tasks.push("Repaso final de chuletas de las guías con menor nota");
      }
      weeks.push(entry);
    }
    return { examDate, hoursPerWeek, createdAt: new Date().toISOString(), weeks, doneWeeks: {}, neededHours: Math.ceil(capacity / 60) };
  }

  function renderPlan() {
    setActiveNav("plan");
    document.title = "Plan de estudio · English Bloom";
    const plan = progress.plan;
    const remaining = daysUntil(plan?.examDate);
    const thisWeek = todayKey(mondayOf(new Date()));
    const minDate = todayKey(new Date(Date.now() + 86400000));
    app.innerHTML = `
      <section class="plan-shell">
        <header class="page-hero">
          <p class="eyebrow">PLAN DE ESTUDIO</p>
          <h1>Tu calendario<br><em>hasta el examen.</em></h1>
          <p>Indica la fecha del examen y las horas que puedes dedicar cada semana. El plan reparte las guías pendientes y reserva las últimas semanas para simulacros.</p>
        </header>
        <form class="plan-form" data-plan-form>
          <label><span>Fecha del examen</span><input type="date" name="examDate" required min="${minDate}" value="${escapeHtml(plan?.examDate || "")}"></label>
          <label><span>Horas por semana</span><select name="hours">${[2, 3, 4, 5, 6, 8, 10, 12, 15].map((hours) => `<option value="${hours}"${(plan?.hoursPerWeek || 5) === hours ? " selected" : ""}>${hours} h</option>`).join("")}</select></label>
          <button class="primary-button" type="submit">${plan ? "Regenerar plan" : "Crear mi plan"}</button>
        </form>
        ${plan ? `
          <div class="plan-summary">
            <div><strong>${remaining !== null && remaining >= 0 ? remaining : 0}</strong><span>días para el examen</span></div>
            <div><strong>${plan.weeks.length}</strong><span>semanas</span></div>
            <div><strong>${Object.values(plan.doneWeeks || {}).filter(Boolean).length}</strong><span>semanas completadas</span></div>
          </div>
          ${plan.neededHours > plan.hoursPerWeek ? `<p class="plan-warning">Para cubrir todas las guías necesitarías unas <strong>${plan.neededHours} h por semana</strong>. El plan está calculado con ese ritmo; si no llegas, prioriza las guías C1 y las del examen.</p>` : ""}
          <ol class="plan-weeks">
            ${plan.weeks.map((week, index) => {
              const start = new Date(`${week.start}T00:00:00`);
              const end = new Date(start);
              end.setDate(start.getDate() + 6);
              const done = Boolean(plan.doneWeeks?.[week.start]);
              const isCurrent = week.start === thisWeek;
              const weekGuides = week.guideIds.map((id) => guideById.get(id)).filter(Boolean);
              return `
                <li class="plan-week${isCurrent ? " is-current" : ""}${done ? " is-done" : ""}">
                  <header>
                    <div><strong>Semana ${index + 1}</strong><span>${formatDate(start)} – ${formatDate(end)}${isCurrent ? " · esta semana" : ""}</span></div>
                    <label class="plan-check"><input type="checkbox" data-week="${week.start}"${done ? " checked" : ""}> Hecha</label>
                  </header>
                  ${weekGuides.length ? `<ul class="plan-guides">${weekGuides.map((guide) => {
                    const status = guideStatus(guide);
                    return `<li data-level="${levelSlug(guide.level)}"><a href="#/guide/${guide.id}"><span class="level-badge">${guide.level}</span>${fmt(guide.title)}</a><span class="status-pill ${status.className}">${status.label}</span></li>`;
                  }).join("")}</ul>` : ""}
                  ${week.tasks.length ? `<ul class="plan-tasks">${week.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul>` : ""}
                </li>`;
            }).join("")}
          </ol>` : ""}
      </section>`;

    document.querySelector("[data-plan-form]").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const examDate = String(data.get("examDate"));
      if (!examDate || daysUntil(examDate) < 1) return;
      progress.plan = buildPlan(examDate, Number(data.get("hours")) || 5);
      saveProgress();
      renderPlan();
    });
    document.querySelectorAll("[data-week]").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        progress.plan.doneWeeks = { ...(progress.plan.doneWeeks || {}), [checkbox.dataset.week]: checkbox.checked };
        if (checkbox.checked) recordActivity();
        saveProgress();
        checkbox.closest(".plan-week").classList.toggle("is-done", checkbox.checked);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Movimiento: aparición al hacer scroll, hero ligado al scroll y transiciones
  // entre páginas (View Transitions API). Todo se desactiva con reduced motion.
  // ---------------------------------------------------------------------------
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const REVEAL_SELECTORS = ".page-hero, .guide-filters, .guide-group, .exam-overview, .exam-paper, .exam-scale, .review-mode, .review-weak, .plan-form, .plan-summary, .plan-week, .guide-panel";
  // Revela los bloques que ya han entrado (o pasado) por la ventana. Se calcula
  // con getBoundingClientRect en cada frame de scroll: no depende de
  // IntersectionObserver y nunca deja contenido oculto si el usuario salta.
  function revealVisible() {
    const limit = window.innerHeight * 0.92;
    document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach((element) => {
      if (element.getBoundingClientRect().top < limit) element.classList.add("is-revealed");
    });
  }

  function enhance() {
    document.querySelectorAll(REVEAL_SELECTORS).forEach((element) => element.setAttribute("data-reveal", ""));
    if (reducedMotion.matches) document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-revealed"));
    updateScrollEffects();
  }

  function updateScrollEffects() {
    const hero = document.querySelector("[data-hero]");
    if (hero) {
      const progressValue = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.85)));
      hero.style.setProperty("--p", progressValue.toFixed(3));
    }
    document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 8);
    revealVisible();
  }

  window.addEventListener("resize", updateScrollEffects, { passive: true });
  // El trabajo por evento es mínimo (unas pocas lecturas de posición), así que
  // se hace directamente: requestAnimationFrame se pausa en pestañas o iframes
  // en segundo plano y dejaría bloques sin revelar.
  window.addEventListener("scroll", updateScrollEffects, { passive: true });

  function navigate() {
    if (document.startViewTransition && !reducedMotion.matches) document.startViewTransition(() => route());
    else route();
  }

  // ---------------------------------------------------------------------------
  // Router
  // ---------------------------------------------------------------------------
  function route() {
    carousel = null;
    session = null;
    const [path, query = ""] = location.hash.replace(/^#/, "").split("?");
    const params = new URLSearchParams(query);
    const practiceMatch = path.match(/^\/guide\/([^/]+)\/practice$/);
    const guideMatch = path.match(/^\/guide\/([^/]+)$/);
    if (practiceMatch) startPractice(decodeURIComponent(practiceMatch[1]));
    else if (guideMatch) renderGuide(decodeURIComponent(guideMatch[1]), params.has("slide") ? Math.max(0, Number.parseInt(params.get("slide"), 10) - 1 || 0) : null);
    else if (path === "/guides") renderGuideList(params);
    else if (path === "/exam") renderExam();
    else if (path === "/review") renderReview();
    else if (path === "/review/start") startReview(params.get("mode"), params.get("level"));
    else if (path === "/plan") renderPlan();
    else renderHome();
    window.scrollTo({ top: 0, behavior: "instant" });
    enhance();
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
    renderHome();
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  resetDialog.addEventListener("click", (event) => {
    if (event.target === resetDialog) resetDialog.close();
  });
  document.documentElement.classList.add("js-motion");
  window.addEventListener("hashchange", navigate);
  route();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { /* La app funciona sin modo offline. */ }));
  }
})();
