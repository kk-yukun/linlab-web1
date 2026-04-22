(function () {
  const data = window.LIN_LAB_DATA;

  if (!data) {
    return;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app");

    if (!root) {
      return;
    }

    const ctx = createContext();
    syncMeta(ctx);

    root.innerHTML = [
      renderHeader(ctx),
      `<main>${renderPage(ctx)}</main>`,
      renderFooter(ctx),
      renderGalleryModal(ctx)
    ].join("");

    bindHeader();
    bindReveal();
    bindPublicationFilters();
    bindGalleryModal();
  });

  function createContext() {
    const page = document.body.dataset.page || "home";
    const lang = document.body.dataset.lang || "en";
    const base = document.body.dataset.base || ".";

    return {
      page,
      lang,
      base,
      path(url) {
        if (!url) {
          return "";
        }
        if (/^(https?:|mailto:|tel:|#)/.test(url)) {
          return url;
        }
        const cleanBase = base === "." ? "" : base.replace(/\/$/, "");
        const joined = cleanBase ? `${cleanBase}/${url}` : url;
        return encodeURI(joined);
      },
      tr(value) {
        if (value == null) {
          return "";
        }
        if (typeof value === "string" || typeof value === "number") {
          return String(value);
        }
        return value[lang] || value.en || "";
      }
    };
  }

  function syncMeta(ctx) {
    const pageMeta = data.pages[ctx.page];

    if (!pageMeta) {
      return;
    }

    document.title = ctx.tr(pageMeta.metaTitle);

    const description = ctx.tr(pageMeta.metaDescription);
    const descEl = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (descEl) {
      descEl.setAttribute("content", description);
    }
    if (ogTitle) {
      ogTitle.setAttribute("content", ctx.tr(pageMeta.metaTitle));
    }
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }
  }

  function renderPage(ctx) {
    switch (ctx.page) {
      case "research":
        return renderResearchPage(ctx);
      case "team":
        return renderTeamPage(ctx);
      case "publications":
        return renderPublicationsPage(ctx);
      case "activities":
        return renderActivitiesPage(ctx);
      case "join":
        return renderJoinPage(ctx);
      case "home":
      default:
        return renderHomePage(ctx);
    }
  }

  function renderHeader(ctx) {
    const navLinks = data.nav
      .map((item) => {
        const href = pageUrl(item.key, ctx.lang, ctx);
        const activeClass = item.key === ctx.page ? " is-active" : "";
        return `<a class="${activeClass.trim()}" href="${href}">${ctx.tr(item.label)}</a>`;
      })
      .join("");

    const switchLang = ctx.lang === "en" ? "zh" : "en";
    const switchLabel = switchLang === "en" ? "English" : "中文";

    return `
      <header class="site-header" data-header>
        <div class="container header-inner">
          <a class="brand" href="${pageUrl("home", ctx.lang, ctx)}" aria-label="${ctx.tr(data.site.name)}">
            <span class="brand-mark">${data.site.shortName}</span>
            <span class="brand-sub">${ctx.tr(data.site.brandLine || data.site.affiliation)}</span>
          </a>
          <div class="nav-wrap">
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" data-nav-toggle>
              ${ctx.lang === "en" ? "Menu" : "菜单"}
            </button>
            <nav class="site-nav" id="primary-nav" data-nav>
              ${navLinks}
            </nav>
            <a class="lang-switch" href="${pageUrl(ctx.page, switchLang, ctx)}" lang="${switchLang}">
              ${switchLabel}
            </a>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter(ctx) {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <section class="footer-card">
              <h3>${ctx.tr(data.site.name)}</h3>
              <p>${ctx.tr(data.site.fullName)}</p>
              <p>${ctx.tr(data.site.affiliation)}</p>
            </section>
            <section class="footer-card">
              <h3>${ctx.lang === "en" ? "Contact" : "联系方式"}</h3>
              <p><a href="mailto:${data.site.email}">${data.site.email}</a></p>
              <p>${ctx.tr(data.site.address)}</p>
              <p><a href="${data.site.recruitmentUrl}" target="_blank" rel="noopener noreferrer">${ctx.lang === "en" ? "Institute recruitment page" : "研究院招聘页面"}</a></p>
            </section>
          </div>
          <div class="footer-meta">
            <span>${ctx.tr(data.site.affiliation)}</span>
            <span>${ctx.lang === "en" ? "Mechanistic biology, immunity, and computational research." : "聚焦机制生物学、免疫与计算研究。"}</span>
          </div>
        </div>
      </footer>
    `;
  }

  function renderHero(ctx, pageKey, options) {
    const pageData = data.pages[pageKey];
    const variant = options && options.variant ? options.variant : pageKey === "home" ? "home" : "compact";
    const heroClass = ["page-hero", `page-hero--${variant}`, options && options.side ? "page-hero--with-side" : "page-hero--solo"]
      .filter(Boolean)
      .join(" ");
    return `
      <section class="${heroClass}">
        <div class="container page-hero-inner">
          <div class="page-hero-copy reveal">
            <span class="eyebrow">${ctx.tr(pageData.heroKicker)}</span>
            <h1 class="page-hero-title">${ctx.tr(pageData.heroTitle)}</h1>
            <p class="page-hero-subtitle">${ctx.tr(pageData.heroText)}</p>
            ${options && options.actions ? options.actions : ""}
            ${options && options.extra ? options.extra : ""}
          </div>
          ${options && options.side ? options.side : ""}
        </div>
      </section>
    `;
  }

  function renderHomePage(ctx) {
    const highlightedThemes = data.researchThemes
      .map((theme) => renderThemeFeatureCard(theme, ctx))
      .join("");

    const featuredPubs = data.publications
      .filter((item) => item.featured)
      .slice(0, 4)
      .map((item) => renderFeaturedPublication(item, ctx))
      .join("");

    const updates = data.activities.updates
      .map((item) => renderUpdateCard(item, ctx))
      .join("");

    const portalCards = data.homeQuickLinks
      .map((item) => renderPortalCard(item, ctx))
      .join("");

    const heroActions = `
      <div class="hero-actions">
        <a class="btn btn-primary" href="${pageUrl("research", ctx.lang, ctx)}">${ctx.lang === "en" ? "Explore research" : "查看研究方向"}</a>
        <a class="btn btn-secondary" href="${pageUrl("join", ctx.lang, ctx)}">${ctx.lang === "en" ? "Join the lab" : "加入课题组"}</a>
      </div>
    `;

    const heroSide = `
      <aside class="hero-card reveal">
        <h3>${ctx.tr(data.pages.home.heroCardTitle)}</h3>
        <ul>
          <li><span>${ctx.lang === "en" ? "PI" : "PI"}</span><strong>Anning Lin</strong></li>
          <li><span>${ctx.lang === "en" ? "Affiliation" : "机构"}</span><strong>${ctx.tr(data.site.affiliation)}</strong></li>
          <li><span>${ctx.lang === "en" ? "Email" : "邮箱"}</span><strong>${data.site.email}</strong></li>
          <li><span>${ctx.lang === "en" ? "Research" : "研究"}</span><strong>${ctx.lang === "en" ? "Signaling, immunity, AI biology" : "信号、免疫、AI 生物学"}</strong></li>
        </ul>
      </aside>
    `;

    const pi = data.team.pi;
    const overview = data.pages.home.sectionTitles;

    return `
      ${renderHero(ctx, "home", {
        actions: heroActions,
        side: heroSide,
        extra: `<div class="journal-strip">${data.site.journals.map((name) => `<span>${name}</span>`).join("")}</div>`
      })}

      <section class="section-shell">
        <div class="container">
          ${renderSectionHead(ctx, overview.overviewKicker, overview.overviewTitle, overview.overviewText)}
          <div class="portal-grid">${portalCards}</div>
          <p class="section-bridge reveal">${ctx.lang === "en" ? "Current research themes" : "当前研究主线"}</p>
          <div class="theme-grid theme-grid-home">${highlightedThemes}</div>
        </div>
      </section>

      <section class="section-shell alt">
        <div class="container">
          ${renderSectionHead(ctx, overview.piKicker, overview.piTitle, ctx.tr(pi.summary))}
          <article class="portrait-card reveal">
            <img class="portrait" src="${ctx.path(pi.photo)}" alt="${pi.name}">
            <div class="intro">
              <span class="member-label">${ctx.tr(pi.role)}</span>
              <h3 class="name">${pi.name}</h3>
              <p class="role">${ctx.tr(pi.title)}</p>
              <p>${ctx.tr(pi.summary)}</p>
              <ul class="member-meta">
                ${ctx.tr(pi.education).map((line) => `<li>${line}</li>`).join("")}
                <li><a href="mailto:${pi.email}">${pi.email}</a></li>
              </ul>
              <div class="hero-actions">
                <a class="btn btn-primary" href="${pageUrl("team", ctx.lang, ctx)}">${ctx.lang === "en" ? "View team" : "查看团队"}</a>
                <a class="btn btn-ghost" href="mailto:${pi.email}">${ctx.lang === "en" ? "Contact PI" : "联系 PI"}</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="section-shell">
        <div class="container">
          ${renderSectionHead(ctx, overview.pubsKicker, overview.pubsTitle, overview.pubsText)}
          <div class="publication-grid">${featuredPubs}</div>
        </div>
      </section>

      <section class="section-shell alt">
        <div class="container">
          ${renderSectionHead(ctx, overview.updatesKicker, overview.updatesTitle, overview.updatesText)}
          <div class="news-grid">${updates}</div>
        </div>
      </section>

      <section class="section-shell">
        <div class="container">
          ${renderSectionHead(ctx, overview.contactKicker, overview.contactTitle, overview.contactText)}
          <div class="split-layout">
            <article class="info-card reveal">
              <h3>${ctx.lang === "en" ? "How to reach us" : "如何联系"}</h3>
              <ul class="quick-list">
                <li>${ctx.tr(data.site.affiliation)}</li>
                <li>${ctx.tr(data.site.location)}</li>
                <li><a href="mailto:${data.site.email}">${data.site.email}</a></li>
              </ul>
              <p>${ctx.lang === "en" ? "If you are interested in joining, send a concise introduction, your CV, and relevant research interests." : "如果你希望加入课题组，请发送简要自我介绍、个人简历以及相关研究兴趣说明。"}</p>
              <div class="hero-actions">
                <a class="btn btn-primary" href="${pageUrl("join", ctx.lang, ctx)}">${ctx.lang === "en" ? "Recruitment page" : "前往招生页面"}</a>
                <a class="btn btn-ghost" href="${data.site.recruitmentUrl}" target="_blank" rel="noopener noreferrer">${ctx.lang === "en" ? "Institute notice" : "研究院通知"}</a>
              </div>
            </article>
            <article class="quote-card reveal">
              <span class="section-kicker">${ctx.lang === "en" ? "Scientific direction" : "科学方向"}</span>
              <h3>${ctx.lang === "en" ? "Mechanistic rigor, disease relevance, and computational breadth." : "以机制严谨性、疾病相关性与计算拓展为共同核心。"}</h3>
              <p>${ctx.lang === "en" ? "Projects in the lab are designed to connect signaling logic with disease phenotypes, moving from pathway mechanism toward interpretable intervention strategies." : "课题组的项目设计强调把信号通路逻辑与疾病表型相连接，从机制问题推进到可解释的干预策略。"}
              </p>
              <p class="signature">${ctx.lang === "en" ? "Experimental and computational work are treated as complementary routes to the same biological questions." : "实验与计算不是分离的模块，而是通向同一生物学问题的两条互补路径。"}</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function renderResearchPage(ctx) {
    const themeSummaryCard = renderHeroFactsCard(
      ctx,
      ctx.lang === "en" ? "Program outline" : "研究结构",
      [
        {
          label: ctx.lang === "en" ? "Themes" : "主线",
          value: ctx.lang === "en" ? `${data.researchThemes.length} connected programs` : `${data.researchThemes.length} 条相互关联主线`
        },
        {
          label: ctx.lang === "en" ? "Disease focus" : "疾病场景",
          value: ctx.lang === "en" ? "Cancer, autoimmunity, neuroinflammation" : "癌症、自身免疫、神经炎症"
        },
        {
          label: ctx.lang === "en" ? "Methods" : "方法",
          value: ctx.lang === "en" ? "Biochemistry, models, multi-omics" : "生物化学、模型系统、多组学"
        },
        {
          label: ctx.lang === "en" ? "Goal" : "目标",
          value: ctx.lang === "en" ? "Mechanism to intervention" : "从机制走向干预"
        }
      ]
    );
    const body = data.researchThemes
      .map((theme) => {
        const rep = getPublication(theme.representativePublication);
        return `
          <article class="theme-card reveal">
            <div class="left">
              <span class="theme-label">${ctx.tr(theme.title)}</span>
              <h3 style="margin-top: 16px;">${ctx.tr(theme.title)}</h3>
              <p style="margin-top: 14px;">${ctx.tr(theme.summary)}</p>
              <div class="panel-note" style="margin-top: 18px;">
                <strong>${ctx.lang === "en" ? "Key questions" : "核心问题"}</strong>
                <ul class="bullet-list">
                  ${ctx.tr(theme.questions).map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="panel-note">
                <strong>${ctx.lang === "en" ? "Approach" : "研究路径"}</strong>
                <ul class="bullet-list">
                  ${ctx.tr(theme.approach).map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
              <div class="panel-note">
                <strong>${ctx.lang === "en" ? "Keywords" : "关键词"}</strong>
                <ul class="keyword-list">
                  ${theme.keywords.map((item) => `<li>${ctx.tr(item)}</li>`).join("")}
                </ul>
              </div>
              ${
                rep
                  ? `<div class="panel-note">
                      <strong>${ctx.lang === "en" ? "Representative paper" : "代表论文"}</strong>
                      <p>${rep.title}</p>
                      <p style="margin-top: 8px;">${rep.journal} · ${rep.year}</p>
                      <p style="margin-top: 10px;"><a class="publication-link" href="${pageUrl("publications", ctx.lang, ctx)}">${ctx.lang === "en" ? "Open publication archive" : "查看论文归档"}</a></p>
                    </div>`
                  : ""
              }
            </div>
          </article>
        `;
      })
      .join("");

    return `
      ${renderHero(ctx, "research", { side: themeSummaryCard })}
      <section class="section-shell">
        <div class="container">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Program structure" : "研究结构",
            ctx.lang === "en"
              ? "Research themes are organized around biological decisions rather than isolated techniques."
              : "研究方向以生物学决策问题为核心组织，而不是简单按技术分类。",
            ctx.lang === "en"
              ? "Each theme combines mechanistic questions, disease relevance, and a practical route for experimental or computational validation."
              : "每条主线都同时强调机制问题、疾病相关性，以及可落地的实验或计算验证路径。"
          )}
          <div class="theme-stack">${body}</div>
        </div>
      </section>
    `;
  }

  function renderTeamPage(ctx) {
    const team = data.team;
    const teamSummaryCard = renderHeroFactsCard(
      ctx,
      ctx.lang === "en" ? "Team composition" : "团队构成",
      [
        { label: ctx.lang === "en" ? "PI" : "负责人", value: "1" },
        { label: ctx.lang === "en" ? "Research staff" : "科研人员", value: String(team.staff.length) },
        { label: ctx.lang === "en" ? "Ph.D. students" : "博士生", value: String(team.phd.length) },
        { label: ctx.lang === "en" ? "Master's students" : "硕士生", value: String(team.masters.length) },
        { label: ctx.lang === "en" ? "Alumni" : "校友", value: String(team.alumni.length) }
      ]
    );
    return `
      ${renderHero(ctx, "team", { side: teamSummaryCard })}
      <section class="section-shell">
        <div class="container member-section">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Principal investigator" : "课题负责人",
            ctx.lang === "en" ? "Scientific leadership" : "研究领导力",
            ctx.tr(team.pi.summary)
          )}
          ${renderPiCard(team.pi, ctx)}
        </div>
      </section>

      <section class="section-shell alt">
        <div class="container member-section">
          ${renderMemberSection(
            ctx,
            ctx.lang === "en" ? "Research staff" : "科研人员",
            ctx.lang === "en" ? "Postdoctoral fellows and research support" : "博士后与科研支持人员",
            ctx.lang === "en"
              ? "Researchers who sustain experimental execution, coordination, and project continuity across the lab."
              : "承担实验推进、项目协调与实验室运行支持的科研成员。",
            team.staff
          )}
        </div>
      </section>

      <section class="section-shell">
        <div class="container member-section">
          ${renderMemberSection(
            ctx,
            ctx.lang === "en" ? "Ph.D. students" : "博士生",
            ctx.lang === "en" ? "Doctoral researchers across mechanistic and computational programs" : "覆盖机制与计算方向的博士研究生",
            ctx.lang === "en"
              ? "Doctoral trainees pursuing long-form projects in signaling biology, immunity, disease models, and computational analysis."
              : "围绕信号生物学、免疫、疾病模型与计算分析开展长期课题训练的博士生。",
            team.phd
          )}
        </div>
      </section>

      <section class="section-shell alt">
        <div class="container member-section">
          ${renderMemberSection(
            ctx,
            ctx.lang === "en" ? "Master's students" : "硕士生",
            ctx.lang === "en" ? "Graduate trainees building experimental and analytical foundations" : "建立实验与分析基础的硕士研究生",
            ctx.lang === "en"
              ? "Graduate students developing strong foundations in experimental workflows, analysis, and scientific communication."
              : "在实验流程、数据分析与学术表达方面建立扎实基础的硕士研究生。",
            team.masters
          )}
        </div>
      </section>

      <section class="section-shell">
        <div class="container member-section">
          ${renderMemberSection(
            ctx,
            ctx.lang === "en" ? "Alumni" : "校友",
            ctx.lang === "en" ? "Recent graduates and next steps" : "近期毕业生与后续去向",
            ctx.lang === "en" ? "Former lab members and their current destinations." : "课题组毕业成员及其当前去向。",
            team.alumni
          )}
        </div>
      </section>
    `;
  }

  function renderPublicationsPage(ctx) {
    const filters = [
      { key: "all", label: ctx.lang === "en" ? "All records" : "全部" },
      { key: "featured", label: ctx.lang === "en" ? "Featured" : "精选" },
      { key: "research", label: ctx.lang === "en" ? "Research articles" : "研究论文" },
      { key: "review", label: ctx.lang === "en" ? "Reviews" : "综述" }
    ];

    const sorted = [...data.publications].sort((a, b) => b.year - a.year);
    const list = sorted.map((item) => renderPublicationRow(item, ctx)).join("");
    const publicationSummaryCard = renderHeroFactsCard(
      ctx,
      ctx.lang === "en" ? "Archive scope" : "归档范围",
      [
        {
          label: ctx.lang === "en" ? "Years" : "年份",
          value: `${Math.min(...data.publications.map((item) => item.year))}-${Math.max(...data.publications.map((item) => item.year))}`
        },
        {
          label: ctx.lang === "en" ? "Records" : "记录数",
          value: String(data.publications.length)
        },
        {
          label: ctx.lang === "en" ? "Research" : "研究论文",
          value: String(data.publications.filter((item) => item.category === "research").length)
        },
        {
          label: ctx.lang === "en" ? "Reviews" : "综述",
          value: String(data.publications.filter((item) => item.category === "review").length)
        }
      ]
    );

    return `
      ${renderHero(ctx, "publications", { side: publicationSummaryCard })}
      <section class="section-shell">
        <div class="container publication-panel">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Structured archive" : "结构化归档",
            ctx.lang === "en"
              ? "Representative papers and foundational work in one archive."
              : "在同一页面集中呈现代表论文与基础工作。",
            ctx.lang === "en"
              ? "Filter the archive by category. All PDF links are explicit, and DOI links are included when available."
              : "可按类别筛选论文；所有 PDF 链接均为明确条目，已知 DOI 也一并给出。"
          )}
          <div class="publication-filters" data-publication-filters>
            ${filters
              .map(
                (item, index) => `
                  <button class="filter-button" type="button" data-filter="${item.key}" aria-pressed="${index === 0 ? "true" : "false"}">
                    ${item.label}
                  </button>
                `
              )
              .join("")}
          </div>
          <div class="publication-list" data-publication-list>
            ${list}
          </div>
        </div>
      </section>
    `;
  }

  function renderActivitiesPage(ctx) {
    const updates = data.activities.updates.map((item) => renderUpdateCard(item, ctx)).join("");
    const gallery = data.activities.gallery
      .map(
        (item, index) => `
          <article class="gallery-card reveal">
            <button type="button" data-gallery-item data-gallery-src="${ctx.path(item.image)}" data-gallery-title="${escapeHtml(ctx.tr(item.title))}" data-gallery-caption="${escapeHtml(ctx.tr(item.caption))}">
              <img src="${ctx.path(item.image)}" alt="${escapeHtml(ctx.tr(item.title))}">
              <div class="gallery-caption">
                <strong>${ctx.tr(item.title)}</strong>
                <span>${ctx.tr(item.caption)}</span>
              </div>
            </button>
          </article>
        `
      )
      .join("");
    const activitiesSummaryCard = renderHeroFactsCard(
      ctx,
      ctx.lang === "en" ? "Page contents" : "页面内容",
      [
        { label: ctx.lang === "en" ? "Highlights" : "亮点", value: String(data.activities.updates.length) },
        { label: ctx.lang === "en" ? "Gallery images" : "图片数量", value: String(data.activities.gallery.length) },
        {
          label: ctx.lang === "en" ? "Coverage" : "内容范围",
          value: ctx.lang === "en" ? "Papers, seminars, group moments" : "论文、讨论、团队活动"
        }
      ]
    );

    return `
      ${renderHero(ctx, "activities", { side: activitiesSummaryCard })}
      <section class="section-shell">
        <div class="container">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Research highlights" : "研究亮点",
            ctx.lang === "en" ? "Publication milestones and laboratory updates" : "论文节点与实验室更新",
            ctx.lang === "en"
              ? "These entries emphasize publication milestones, scientific direction, and durable records of group activity."
              : "这些内容强调代表论文、研究方向与可长期保留的团队记录。"
          )}
          <div class="news-grid">${updates}</div>
        </div>
      </section>
      <section class="section-shell alt">
        <div class="container">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Photo gallery" : "图片画廊",
            ctx.lang === "en" ? "Seminars, discussions, and group moments" : "围绕学术讨论与团队活动的影像记录",
            ctx.lang === "en"
              ? "Selected photos provide a lightweight visual record of seminars, shared milestones, and everyday work in the lab."
              : "这些图片以简洁方式记录实验室的学术讨论、共同节点与日常工作状态。"
          )}
          <div class="gallery-grid">${gallery}</div>
        </div>
      </section>
    `;
  }

  function renderJoinPage(ctx) {
    const positions = data.join.positions
      .map(
        (item) => `
          <article class="opportunity-card reveal">
            <span class="member-label">${ctx.tr(item.title)}</span>
            <h3>${ctx.tr(item.title)}</h3>
            <p>${ctx.tr(item.description)}</p>
            <ul class="opportunity-list">
              ${ctx.tr(item.requirements).map((line) => `<li>${line}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("");

    const benefits = data.join.benefits
      .map((item) => `<li>${ctx.tr(item)}</li>`)
      .join("");

    const process = data.join.process
      .map(
        (item, index) => `
          <article class="process-card reveal">
            <span class="process-number">${index + 1}</span>
            <h3>${ctx.tr(item.title)}</h3>
            <p>${ctx.tr(item.body)}</p>
          </article>
        `
      )
      .join("");
    const joinSummaryCard = renderHeroFactsCard(
      ctx,
      ctx.lang === "en" ? "Before you contact us" : "联系前建议准备",
      [
        {
          label: ctx.lang === "en" ? "Materials" : "材料",
          value: ctx.lang === "en" ? "Short email + CV" : "简要邮件 + 简历"
        },
        {
          label: ctx.lang === "en" ? "Fit" : "方向匹配",
          value: ctx.lang === "en" ? "Signaling, immunity, inflammation, computation" : "信号、免疫、炎症、计算"
        },
        {
          label: ctx.lang === "en" ? "Channel" : "联系渠道",
          value: ctx.lang === "en" ? "PI email and institute notice" : "PI 邮箱与研究院通知"
        }
      ]
    );

    return `
      ${renderHero(ctx, "join", {
        side: joinSummaryCard,
        actions: `
          <div class="hero-actions">
            <a class="btn btn-primary" href="mailto:${data.site.email}">${ctx.lang === "en" ? "Email the PI" : "发送邮件给 PI"}</a>
            <a class="btn btn-secondary" href="${data.site.recruitmentUrl}" target="_blank" rel="noopener noreferrer">${ctx.lang === "en" ? "Institute recruitment notice" : "研究院招聘通知"}</a>
          </div>
        `
      })}

      <section class="section-shell">
        <div class="container">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Why join" : "为什么加入",
            ctx.lang === "en"
              ? "Training environment and scientific fit"
              : "培养环境与研究契合度",
            data.join.intro.map((item) => ctx.tr(item)).join(" ")
          )}
          <div class="split-layout">
            <article class="info-card reveal">
              <h3>${ctx.lang === "en" ? "What we value" : "我们看重什么"}</h3>
              <ul class="bullet-list">
                <li>${ctx.lang === "en" ? "Mechanistic curiosity anchored in real biological questions" : "围绕真实生物学问题的机制研究兴趣"}</li>
                <li>${ctx.lang === "en" ? "Willingness to learn across experimental and computational boundaries" : "愿意跨越实验与计算边界持续学习"}</li>
                <li>${ctx.lang === "en" ? "Careful communication, data quality, and long-term project ownership" : "重视沟通、数据质量与长期项目责任感"}</li>
              </ul>
            </article>
            <article class="info-card reveal">
              <h3>${ctx.lang === "en" ? "What the lab offers" : "课题组提供"}</h3>
              <ul class="bullet-list">${benefits}</ul>
            </article>
          </div>
        </div>
      </section>

      <section class="section-shell alt">
        <div class="container">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Typical roles" : "典型岗位",
            ctx.lang === "en" ? "Paths into the group" : "加入课题组的常见路径",
            ctx.lang === "en"
              ? "Availability varies, but these roles reflect the main ways researchers and trainees join Lin Lab."
              : "具体名额会变化，但以下岗位代表了加入课题组的主要路径。"
          )}
          <div class="opportunity-grid">${positions}</div>
        </div>
      </section>

      <section class="section-shell">
        <div class="container">
          ${renderSectionHead(
            ctx,
            ctx.lang === "en" ? "Application process" : "申请流程",
            ctx.lang === "en" ? "A clear path from first contact to formal onboarding" : "从首次联系到正式录用的清晰路径",
            ctx.lang === "en"
              ? "Start with a concise, thoughtful email and attach the materials most relevant to your research fit."
              : "建议先发送简洁而明确的申请邮件，并附上最能体现研究契合度的材料。"
          )}
          <div class="process-grid">${process}</div>
          <div class="split-layout" style="margin-top: 28px;">
            <article class="info-card reveal">
              <h3>${ctx.lang === "en" ? "Contact" : "联系"}</h3>
              <p><a href="mailto:${data.site.email}">${data.site.email}</a></p>
              <p>${ctx.tr(data.site.affiliation)}</p>
              <p>${ctx.tr(data.site.address)}</p>
            </article>
            <article class="info-card reveal">
              <h3>${ctx.lang === "en" ? "Official university channel" : "院系官方入口"}</h3>
              <p>${ctx.lang === "en" ? "Use the institute recruitment notice for formal administrative details and role-specific announcements." : "正式行政信息和岗位公告请以研究院招聘通知为准。"}</p>
              <p><a class="publication-link" href="${data.site.recruitmentUrl}" target="_blank" rel="noopener noreferrer">${ctx.lang === "en" ? "Open recruitment notice" : "打开招聘通知"}</a></p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function renderSectionHead(ctx, kicker, title, description) {
    return `
      <div class="section-head reveal">
        <p class="section-kicker">${ctx.tr(kicker)}</p>
        <h2 class="section-title">${ctx.tr(title)}</h2>
        <p class="section-description">${ctx.tr(description)}</p>
      </div>
    `;
  }

  function renderThemeFeatureCard(theme, ctx) {
    const rep = getPublication(theme.representativePublication);
    return `
      <article class="feature-card reveal">
        <span class="theme-label">${ctx.lang === "en" ? "Research theme" : "研究主线"}</span>
        <h3>${ctx.tr(theme.title)}</h3>
        <p>${ctx.tr(theme.summary)}</p>
        <ul class="keyword-list">
          ${theme.keywords.map((item) => `<li>${ctx.tr(item)}</li>`).join("")}
        </ul>
        ${
          rep
            ? `<p><strong>${ctx.lang === "en" ? "Representative paper:" : "代表论文："}</strong> ${rep.journal} ${rep.year}</p>`
            : ""
        }
      </article>
    `;
  }

  function renderFeaturedPublication(item, ctx) {
    return `
      <article class="publication-card reveal">
        ${
          item.image
            ? `<img src="${ctx.path(item.image)}" alt="${escapeHtml(item.title)}" style="width:100%; aspect-ratio: 1.3 / 1; object-fit: cover;">`
            : ""
        }
        <div class="publication-topline">
          <span class="publication-label">${labelForCategory(item.category, ctx)}</span>
          <span class="publication-year">${item.year}</span>
        </div>
        <h3 class="publication-title">${item.title}</h3>
        <p>${ctx.tr(item.blurb || "")}</p>
        <p>${item.journal}</p>
        <div class="publication-links">
          <a class="publication-link" href="${ctx.path(item.pdf)}" target="_blank" rel="noopener noreferrer">${ctx.lang === "en" ? "Open PDF" : "打开 PDF"}</a>
          ${
            item.doi
              ? `<a class="publication-link" href="${item.doi}" target="_blank" rel="noopener noreferrer">DOI</a>`
              : ""
          }
        </div>
      </article>
    `;
  }

  function renderUpdateCard(item, ctx) {
    return `
      <article class="timeline-card reveal">
        <span class="news-date">${item.date}</span>
        <h3>${ctx.tr(item.title)}</h3>
        <p>${ctx.tr(item.summary)}</p>
      </article>
    `;
  }

  function renderPiCard(member, ctx) {
    return `
      <article class="portrait-card reveal">
        <img class="portrait" src="${ctx.path(member.photo)}" alt="${member.name}">
        <div class="intro">
          <span class="member-label">${ctx.tr(member.role)}</span>
          <h3 class="name">${member.name}</h3>
          <p class="role">${ctx.tr(member.title)}</p>
          <p>${ctx.tr(member.summary)}</p>
          <ul class="member-meta">
            ${ctx.tr(member.education).map((line) => `<li>${line}</li>`).join("")}
            ${member.tags.map((tag) => `<li>${ctx.tr(tag)}</li>`).join("")}
            <li><a href="mailto:${member.email}">${member.email}</a></li>
          </ul>
        </div>
      </article>
    `;
  }

  function renderMemberSection(ctx, kicker, title, description, members) {
    return `
      ${renderSectionHead(
        ctx,
        kicker,
        title,
        description
      )}
      <div class="member-grid">
        ${members.map((member) => renderMemberCard(member, ctx)).join("")}
      </div>
    `;
  }

  function renderMemberCard(member, ctx) {
    return `
      <article class="member-card reveal">
        <img class="member-photo" src="${ctx.path(member.photo)}" alt="${member.name}">
        <div class="member-copy">
          <span class="member-label">${ctx.tr(member.role)}</span>
          <h3>${member.name}</h3>
          <p class="member-role">${ctx.tr(member.role)}</p>
          <ul class="member-education">
            ${ctx.tr(member.education).map((line) => `<li>${line}</li>`).join("")}
          </ul>
          ${member.joined ? `<p class="member-extra">${ctx.lang === "en" ? "Lab member since" : "加入课题组时间"} ${member.joined}</p>` : ""}
          <p>${ctx.tr(member.summary)}</p>
          ${
            member.tags && member.tags.length
              ? `<ul class="keyword-list">${member.tags.map((tag) => `<li>${ctx.tr(tag)}</li>`).join("")}</ul>`
              : ""
          }
        </div>
      </article>
    `;
  }

  function renderPublicationRow(item, ctx) {
    return `
      <article class="publication-card publication-row reveal" data-publication-item data-category="${item.category}" data-featured="${item.featured ? "true" : "false"}">
        <div class="publication-side">
          <div class="publication-topline">
            <span class="publication-label">${labelForCategory(item.category, ctx)}</span>
            ${item.featured ? `<span class="publication-label">${ctx.lang === "en" ? "Featured" : "精选"}</span>` : ""}
          </div>
          <div class="publication-year">${item.year}</div>
          <p class="publication-journal">${item.journal}</p>
        </div>
        <div class="publication-main">
          <h3 class="publication-title">${item.title}</h3>
          ${item.authors ? `<p class="publication-authors">${item.authors}</p>` : ""}
          ${item.blurb ? `<p class="publication-summary">${ctx.tr(item.blurb)}</p>` : ""}
          <ul class="publication-meta">
            <li>${ctx.lang === "en" ? "Local PDF" : "本地 PDF"}</li>
            ${item.doi ? `<li>DOI</li>` : ""}
            ${item.featured ? `<li>${ctx.lang === "en" ? "Homepage highlight" : "首页推荐"}</li>` : ""}
          </ul>
          <div class="publication-links">
            <a class="publication-link" href="${ctx.path(item.pdf)}" target="_blank" rel="noopener noreferrer">${ctx.lang === "en" ? "Open PDF" : "打开 PDF"}</a>
            ${item.doi ? `<a class="publication-link" href="${item.doi}" target="_blank" rel="noopener noreferrer">DOI</a>` : ""}
          </div>
        </div>
      </article>
    `;
  }

  function renderPortalCard(item, ctx) {
    return `
      <article class="portal-card reveal">
        <span class="member-label">${ctx.lang === "en" ? "Section" : "栏目"}</span>
        <h3>${ctx.tr(item.title)}</h3>
        <p>${ctx.tr(item.body)}</p>
        <a class="portal-link" href="${pageUrl(item.page, ctx.lang, ctx)}">${ctx.tr(item.cta)}</a>
      </article>
    `;
  }

  function renderHeroFactsCard(ctx, title, items) {
    return `
      <aside class="hero-card reveal">
        <h3>${ctx.tr(title)}</h3>
        <ul>
          ${items
            .map(
              (item) => `
                <li>
                  <span>${item.label}</span>
                  <strong>${item.value}</strong>
                </li>
              `
            )
            .join("")}
        </ul>
      </aside>
    `;
  }

  function renderGalleryModal(ctx) {
    return `
      <div class="modal" data-gallery-modal>
        <div class="modal-backdrop" data-gallery-close></div>
        <div class="modal-panel">
          <button class="modal-close" type="button" aria-label="${ctx.lang === "en" ? "Close gallery image" : "关闭图片"}" data-gallery-close>×</button>
          <figure class="modal-figure">
            <img src="" alt="" data-gallery-modal-image>
            <figcaption data-gallery-modal-caption></figcaption>
          </figure>
        </div>
      </div>
    `;
  }

  function bindHeader() {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");

    if (!header) {
      return;
    }

    const syncScrolled = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    syncScrolled();
    window.addEventListener("scroll", syncScrolled, { passive: true });

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  function bindReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  function bindPublicationFilters() {
    const controls = document.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll("[data-publication-item]");

    if (!controls.length || !items.length) {
      return;
    }

    controls.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        controls.forEach((el) => el.setAttribute("aria-pressed", el === button ? "true" : "false"));

        items.forEach((item) => {
          const category = item.dataset.category;
          const featured = item.dataset.featured === "true";
          let visible = true;

          if (filter === "research") {
            visible = category === "research";
          } else if (filter === "review") {
            visible = category === "review";
          } else if (filter === "featured") {
            visible = featured;
          }

          item.classList.toggle("is-hidden", !visible);
        });
      });
    });
  }

  function bindGalleryModal() {
    const modal = document.querySelector("[data-gallery-modal]");
    const modalImage = document.querySelector("[data-gallery-modal-image]");
    const modalCaption = document.querySelector("[data-gallery-modal-caption]");
    const triggers = document.querySelectorAll("[data-gallery-item]");
    const closeEls = document.querySelectorAll("[data-gallery-close]");

    if (!modal || !modalImage || !modalCaption || !triggers.length) {
      return;
    }

    const close = () => {
      modal.classList.remove("is-open");
      modalImage.src = "";
      modalImage.alt = "";
      modalCaption.textContent = "";
      document.body.style.overflow = "";
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        modalImage.src = trigger.dataset.gallerySrc || "";
        modalImage.alt = trigger.dataset.galleryTitle || "";
        modalCaption.textContent = [trigger.dataset.galleryTitle, trigger.dataset.galleryCaption].filter(Boolean).join(" — ");
        modal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    closeEls.forEach((el) => el.addEventListener("click", close));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        close();
      }
    });
  }

  function pageUrl(pageKey, lang, ctx) {
    const route = data.routes[pageKey];
    const target = lang === "zh" ? `zh/${route}` : route;
    return ctx.path(target);
  }

  function getPublication(id) {
    return data.publications.find((item) => item.id === id);
  }

  function labelForCategory(category, ctx) {
    if (category === "review") {
      return ctx.lang === "en" ? "Review" : "综述";
    }
    return ctx.lang === "en" ? "Research article" : "研究论文";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
