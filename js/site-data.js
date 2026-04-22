(() => {
  const t = (en, zh) => ({ en, zh });
  const keyword = (en, zh) => ({ en, zh });

  window.LIN_LAB_DATA = {
    site: {
      shortName: "Lin Lab",
      name: t("Lin Lab", "林安宁课题组"),
      fullName: t(
        "Laboratory of Cancer Immunotherapy and Computational & AI Biology",
        "肿瘤免疫治疗与计算智能生物学实验室"
      ),
      brandLine: t(
        "Nanjing University · Institute of Modern Biology",
        "南京大学 · 现代生物研究院"
      ),
      affiliation: t(
        "Institute of Modern Biology, Nanjing University",
        "南京大学现代生物研究院"
      ),
      address: t(
        "Institute of Modern Biology, Nanjing University, Nanjing, China",
        "南京大学现代生物研究院，中国南京"
      ),
      location: t("Nanjing, China", "中国南京"),
      email: "anning.lin@nju.edu.cn",
      recruitmentUrl: "https://imb.nju.edu.cn/rczp/syszp/20220802/i226333.html",
      journals: ["Cell", "Science", "Nature", "Immunity", "iScience", "eLife"]
    },
    routes: {
      home: "index.html",
      team: "team.html",
      research: "research.html",
      publications: "publications.html",
      activities: "team-activities.html",
      join: "joinus.html"
    },
    nav: [
      { key: "home", label: t("Home", "首页") },
      { key: "research", label: t("Research", "研究方向") },
      { key: "team", label: t("Team", "团队成员") },
      { key: "publications", label: t("Publications", "论文成果") },
      { key: "activities", label: t("News & Gallery", "动态与影像") },
      { key: "join", label: t("Join Us", "加入我们") }
    ],
    pages: {
      home: {
        metaTitle: t(
          "Lin Lab | Cancer Immunotherapy and Computational & AI Biology",
          "林安宁课题组 | 肿瘤免疫治疗与计算智能生物学"
        ),
        metaDescription: t(
          "Lin Lab at the Institute of Modern Biology, Nanjing University studies tumor immunity, inflammatory signaling, autoimmune disease, and computational biology.",
          "林安宁课题组依托南京大学现代生物研究院，聚焦肿瘤免疫、炎症信号、免疫相关疾病与计算智能生物学。"
        ),
        heroKicker: t(
          "Institute of Modern Biology, Nanjing University",
          "南京大学现代生物研究院"
        ),
        heroTitle: t(
          "Mechanistic biology for cancer, immunity, and signaling networks.",
          "面向癌症、免疫与信号网络机制的系统研究。"
        ),
        heroText: t(
          "We study how cell death, inflammatory signaling, tumor immunity, and computational modeling converge to reveal actionable biology and therapeutic opportunities.",
          "课题组围绕细胞死亡、炎症信号、肿瘤免疫与计算建模开展研究，解析可干预的生物学机制并探索潜在治疗策略。"
        ),
        heroCardTitle: t("Laboratory snapshot", "实验室概况"),
        sectionTitles: {
          overviewKicker: t("Research overview", "研究概览"),
          overviewTitle: t(
            "Research directions, people, and opportunities in one place.",
            "在一个入口中呈现研究方向、团队与机会。"
          ),
          overviewText: t(
            "Lin Lab brings together mechanistic cell biology, disease models, and computational analysis to study inflammation-driven disease, tumor immunity, and signaling control.",
            "课题组结合机制生物学、疾病模型与计算分析，系统研究炎症驱动疾病、肿瘤免疫和信号调控。"
          ),
          piKicker: t("Principal investigator", "课题负责人"),
          piTitle: t("Leadership and long-term scientific vision", "研究领导力与长期科学目标"),
          pubsKicker: t("Selected papers", "代表论文"),
          pubsTitle: t("Recent papers that anchor the current research program", "支撑当前研究方向的代表性论文"),
          pubsText: t(
            "These papers define major directions in liver tumorigenesis, neuroinflammation, rheumatoid arthritis, and TNF signaling.",
            "这些论文集中展示了课题组在肝癌发生、神经炎症、类风湿关节炎与 TNF 信号方面的重要成果。"
          ),
          updatesKicker: t("Highlights & updates", "研究亮点与更新"),
          updatesTitle: t("Selected research and laboratory milestones", "研究与实验室的重要节点"),
          updatesText: t(
            "These highlights emphasize publications, evolving directions, and milestones that remain useful as a durable laboratory record.",
            "这些更新强调代表论文、研究方向演进与长期有效的实验室节点，而不是短时效新闻。"
          ),
          contactKicker: t("Contact & opportunities", "联系与机会"),
          contactTitle: t("Interested in joining the lab or starting a collaboration?", "希望加入课题组或开展合作？"),
          contactText: t(
            "Use the recruitment page for role-specific guidance, or contact the PI directly with your CV, research interests, and relevant publications.",
            "可前往招生页面查看岗位信息，或直接向 PI 发送简历、研究兴趣说明及代表性成果。"
          )
        }
      },
      research: {
        metaTitle: t("Lin Lab | Research", "林安宁课题组 | 研究方向"),
        metaDescription: t(
          "Research themes at Lin Lab span inflammatory signaling, tumor immunity, autoimmune disease, and computational & AI biology.",
          "林安宁课题组的研究涵盖炎症信号、肿瘤免疫、自身免疫疾病与计算智能生物学。"
        ),
        heroKicker: t("Research themes", "研究主线"),
        heroTitle: t(
          "Four connected programs centered on signaling, disease, and therapeutic logic.",
          "围绕信号、疾病与治疗逻辑展开的四条相互关联研究主线。"
        ),
        heroText: t(
          "Our work integrates biochemistry, molecular cell biology, animal models, and computational analysis to understand how signaling decisions shape pathology and intervention.",
          "课题组结合生物化学、分子细胞生物学、动物模型与计算分析，研究信号决策如何塑造病理过程及其干预策略。"
        )
      },
      team: {
        metaTitle: t("Lin Lab | Team", "林安宁课题组 | 团队成员"),
        metaDescription: t(
          "Meet the principal investigator, research staff, graduate students, and alumni of Lin Lab.",
          "查看林安宁课题组的负责人、科研人员、研究生与校友。"
        ),
        heroKicker: t("People", "成员"),
        heroTitle: t(
          "An interdisciplinary team spanning signaling biology, immunology, and computational research.",
          "覆盖信号生物学、免疫学与计算研究的交叉团队。"
        ),
        heroText: t(
          "The group combines experimental and computational backgrounds, with trainees working across tumor immunity, inflammatory disease, neurobiology, and AI-assisted biological modeling.",
          "团队成员具有实验与计算双重背景，研究方向覆盖肿瘤免疫、炎症疾病、神经生物学以及 AI 辅助生物建模。"
        )
      },
      publications: {
        metaTitle: t("Lin Lab | Publications", "林安宁课题组 | 论文成果"),
        metaDescription: t(
          "A curated publication archive for Lin Lab, including research articles, reviews, DOI links, and local PDF files.",
          "林安宁课题组论文归档页面，包含研究论文、综述、DOI 链接与本地 PDF。"
        ),
        heroKicker: t("Publication archive", "论文归档"),
        heroTitle: t(
          "A curated record of research papers, reviews, and downloadable PDFs.",
          "集中整理的研究论文、综述与可下载 PDF 归档。"
        ),
        heroText: t(
          "The archive combines recent representative papers with a longer record of foundational work across signaling, immunity, and disease biology.",
          "该页面结合近期代表性论文与更长时间尺度上的基础工作，集中呈现课题组在信号、免疫和疾病生物学方面的研究积累。"
        )
      },
      activities: {
        metaTitle: t("Lin Lab | News & Gallery", "林安宁课题组 | 动态与影像"),
        metaDescription: t(
          "Research highlights, laboratory updates, and photo gallery for Lin Lab.",
          "林安宁课题组的研究亮点、实验室更新与图片画廊。"
        ),
        heroKicker: t("News & gallery", "动态与影像"),
        heroTitle: t(
          "A single place for research highlights and laboratory moments.",
          "集中呈现实验室研究亮点与团队影像。"
        ),
        heroText: t(
          "The page brings together research highlights and a curated visual record of laboratory activities, discussions, and shared milestones.",
          "该页面集中呈现实验室的研究亮点，以及围绕活动、讨论和团队节点整理的视觉记录。"
        )
      },
      join: {
        metaTitle: t("Lin Lab | Join Us", "林安宁课题组 | 加入我们"),
        metaDescription: t(
          "Learn about training pathways, typical positions, application materials, and contact details for Lin Lab.",
          "了解林安宁课题组的培养路径、典型岗位、申请材料与联系方式。"
        ),
        heroKicker: t("Recruitment & training", "招生与培养"),
        heroTitle: t(
          "Training pathways, openings, and how to get in touch.",
          "培养路径、岗位类型与联系入口。"
        ),
        heroText: t(
          "Current availability may vary by funding cycle, but we welcome thoughtful inquiries from trainees and researchers whose interests align with the lab's scientific directions.",
          "具体名额会随课题和经费周期调整，但我们欢迎与实验室研究方向契合的学生和研究人员主动联系。"
        )
      }
    },
    homeQuickLinks: [
      {
        page: "research",
        title: t("Research programs", "研究主线"),
        body: t(
          "Four connected directions spanning TNF signaling, tumor immunity, autoimmune disease, and computational biology.",
          "四条相互衔接的研究方向，覆盖 TNF 信号、肿瘤免疫、自身免疫疾病与计算生物学。"
        ),
        cta: t("View research", "查看研究方向")
      },
      {
        page: "team",
        title: t("People and expertise", "团队与专长"),
        body: t(
          "An interdisciplinary group combining molecular biology, immunology, disease models, and computational analysis.",
          "团队成员覆盖分子生物学、免疫学、疾病模型与计算分析等方向。"
        ),
        cta: t("Meet the team", "查看成员")
      },
      {
        page: "publications",
        title: t("Publication archive", "论文归档"),
        body: t(
          "Representative papers and foundational work are organized in one searchable archive with explicit PDF and DOI links.",
          "代表性论文与基础工作集中整理在同一归档页中，并给出明确的 PDF 与 DOI 链接。"
        ),
        cta: t("Browse papers", "查看论文")
      },
      {
        page: "join",
        title: t("Training and recruitment", "培养与招生"),
        body: t(
          "Prospective students, postdocs, and research staff can find role types, application materials, and contact guidance.",
          "意向学生、博士后与科研人员可在此查看岗位类型、申请材料与联系说明。"
        ),
        cta: t("Open opportunities", "查看机会")
      }
    ],
    researchThemes: [
      {
        id: "signaling",
        title: t(
          "Inflammatory signaling, TNF logic, and cell fate control",
          "炎症信号、TNF 调控逻辑与细胞命运决定"
        ),
        summary: t(
          "A long-running program on JNK, NF-κB, BAD, and related signaling modules that decide whether cells survive, die, or enter pathological inflammatory states.",
          "围绕 JNK、NF-κB、BAD 等关键模块，长期研究细胞在炎症刺激下如何在存活、死亡和病理状态之间做出决策。"
        ),
        questions: {
          en: [
            "How does TNF signaling integrate pro-survival and pro-death modules?",
            "Which checkpoints distinguish physiological inflammation from tissue-damaging responses?",
            "How can pathway logic reveal therapeutic leverage points?"
          ],
          zh: [
            "TNF 信号如何整合促存活与促死亡模块？",
            "哪些关键节点决定了生理性炎症与组织损伤性炎症的分界？",
            "如何利用通路逻辑发现可干预的治疗靶点？"
          ]
        },
        approach: {
          en: [
            "Mechanistic biochemistry and molecular cell biology",
            "Mouse disease models and pathway perturbation",
            "Readouts spanning apoptosis, inflammatory signaling, and immune phenotypes"
          ],
          zh: [
            "机制生物化学与分子细胞生物学",
            "小鼠疾病模型与通路扰动实验",
            "从凋亡、炎症信号到免疫表型的多层级读出"
          ]
        },
        keywords: [
          keyword("TNF signaling", "TNF 信号"),
          keyword("JNK / NF-κB", "JNK / NF-κB"),
          keyword("Programmed cell death", "程序性细胞死亡")
        ],
        representativePublication: "2012-cell"
      },
      {
        id: "tumor-immunity",
        title: t(
          "Tumor immunity, liver cancer, and macrophage-driven pathology",
          "肿瘤免疫、肝癌与巨噬细胞驱动的病理机制"
        ),
        summary: t(
          "We investigate how immune regulation, inflammatory circuits, and hepatocyte-intrinsic signaling cooperate to shape tumorigenesis and antitumor immunity.",
          "研究聚焦免疫调控、炎症回路与肝细胞内在信号如何共同决定肿瘤发生及抗肿瘤免疫。"
        ),
        questions: {
          en: [
            "How do hepatocytes and macrophages communicate during liver tumorigenesis?",
            "Which signaling nodes constrain tumor-promoting inflammation?",
            "How can immune modulation improve therapeutic response while minimizing toxicity?"
          ],
          zh: [
            "在肝癌发生过程中，肝细胞与巨噬细胞如何相互作用？",
            "哪些信号节点能够限制促肿瘤性炎症？",
            "如何在降低毒性的同时提升免疫治疗反应？"
          ]
        },
        approach: {
          en: [
            "Tumor-bearing mouse models and liver pathology",
            "Immune profiling, cytokine analysis, and molecular perturbation",
            "Mechanistic links between Miz1, inflammation, and tumor microenvironment"
          ],
          zh: [
            "肿瘤模型与肝脏病理分析",
            "免疫表型分析、细胞因子检测与分子扰动",
            "解析 Miz1、炎症与肿瘤微环境之间的机制联系"
          ]
        },
        keywords: [
          keyword("Tumor immunity", "肿瘤免疫"),
          keyword("Hepatocellular carcinoma", "肝细胞癌"),
          keyword("Macrophage activation", "巨噬细胞活化")
        ],
        representativePublication: "2021-immunity"
      },
      {
        id: "autoimmune-neuro",
        title: t(
          "Autoimmunity, neuroinflammation, and tissue-specific immune pathology",
          "自身免疫、神经炎症与组织特异性免疫病理"
        ),
        summary: t(
          "The lab studies rheumatoid arthritis, immune-related adverse events, neuronal injury, and related inflammatory disorders to identify therapeutic entry points.",
          "课题组从类风湿关节炎、免疫相关不良反应、神经损伤等疾病切入，寻找组织特异性炎症的干预入口。"
        ),
        questions: {
          en: [
            "What determines macrophage survival and pathogenic persistence in autoimmune tissue?",
            "How do cell-death regulators intersect with neuroinflammation and neuronal apoptosis?",
            "Can pathway-guided interventions reduce immune pathology without losing efficacy?"
          ],
          zh: [
            "哪些机制决定了自身免疫组织中巨噬细胞的持续存活与致病性？",
            "细胞死亡调控因子如何影响神经炎症与神经元凋亡？",
            "能否通过通路导向的干预降低免疫病理而保留治疗效应？"
          ]
        },
        approach: {
          en: [
            "Autoimmune and neuroinflammation models",
            "Exosome engineering, optogenetic control, and immune functional assays",
            "Cross-talk analysis between tissue-resident cells and infiltrating immune cells"
          ],
          zh: [
            "自身免疫与神经炎症模型",
            "外泌体工程、光控系统与免疫功能实验",
            "解析组织驻留细胞与浸润免疫细胞之间的互作"
          ]
        },
        keywords: [
          keyword("Rheumatoid arthritis", "类风湿关节炎"),
          keyword("Neuroinflammation", "神经炎症"),
          keyword("Immune-related adverse events", "免疫相关不良反应")
        ],
        representativePublication: "2021-iscience"
      },
      {
        id: "computational",
        title: t(
          "Computational & AI biology for signaling networks",
          "面向信号网络的计算与人工智能生物学"
        ),
        summary: t(
          "A newer program that connects systems biology, knowledge graphs, multi-omics analysis, and machine-assisted modeling to mechanistic laboratory questions.",
          "这一方向将系统生物学、知识图谱、多组学分析与机器辅助建模引入机制研究，服务于实验室的核心生物学问题。"
        ),
        questions: {
          en: [
            "How can computational models make signaling logic easier to test experimentally?",
            "Which data representations best connect molecular mechanism to disease phenotype?",
            "How can AI tools accelerate hypothesis generation without sacrificing rigor?"
          ],
          zh: [
            "如何利用计算模型让信号逻辑更容易被实验验证？",
            "哪种数据表示方式最适合连接分子机制与疾病表型？",
            "如何在不牺牲严谨性的前提下用 AI 工具加速假设生成？"
          ]
        },
        approach: {
          en: [
            "Knowledge graph construction and literature-grounded inference",
            "Single-cell and multi-omics analysis",
            "Mechanistic modeling aligned with experimental validation"
          ],
          zh: [
            "知识图谱构建与文献约束推理",
            "单细胞与多组学数据分析",
            "与实验验证联动的机制建模"
          ]
        },
        keywords: [
          keyword("AI for biology", "AI 生物学"),
          keyword("Systems biology", "系统生物学"),
          keyword("Multi-omics", "多组学")
        ],
        representativePublication: "2009-pnas"
      }
    ],
    team: {
      pi: {
        name: "Anning Lin",
        role: t("Principal Investigator", "课题负责人"),
        title: t(
          "Professor, Institute of Modern Biology, Nanjing University",
          "南京大学现代生物研究院教授"
        ),
        photo: "images/LAN.png",
        email: "anning.lin@nju.edu.cn",
        education: {
          en: [
            "Institute of Modern Biology, Nanjing University",
            "Long-term research in signal transduction, inflammation, programmed cell death, and disease mechanisms"
          ],
          zh: [
            "南京大学现代生物研究院",
            "长期从事信号转导、炎症、程序性细胞死亡与疾病机制研究"
          ]
        },
        summary: t(
          "Prof. Lin is one of the main discoverers of the JNK-c-Jun signaling pathway. The laboratory's long-term goal is to understand how signaling networks integrate extracellular cues to control proliferation, apoptosis, inflammation, tumorigenesis, and degenerative disease, and then translate that logic into therapeutic opportunities.",
          "林安宁教授是 JNK-c-Jun 信号通路的重要发现者之一。课题组长期关注信号网络如何整合外界刺激以调控增殖、凋亡、炎症、肿瘤发生与退行性疾病，并在此基础上寻找可转化的治疗策略。"
        ),
        tags: [
          keyword("Signal transduction", "信号转导"),
          keyword("Inflammation", "炎症"),
          keyword("Cancer & immunity", "癌症与免疫")
        ]
      },
      staff: [
        {
          name: "Jingwen Chen",
          role: t("Postdoctoral Fellow", "博士后"),
          photo: "images/CJW.png",
          joined: "2022",
          education: {
            en: ["Ph.D. in Basic Medicine, Nanjing University, China"],
            zh: ["南京大学基础医学博士"]
          },
          summary: t(
            "Studies intestinal epithelium homeostasis and post-injury regeneration, with emphasis on how signaling responses shape tissue repair.",
            "研究肠道上皮稳态与损伤后再生，重点关注信号应答如何影响组织修复。"
          ),
          tags: [
            keyword("Tissue repair", "组织修复"),
            keyword("Intestinal biology", "肠道生物学")
          ]
        },
        {
          name: "Mengqi Xue",
          role: t("Research Assistant", "科研助理"),
          photo: "images/XMQ.png",
          joined: "2023",
          education: {
            en: ["M.S. in Veterinary Medicine, Guangxi University, China"],
            zh: ["广西大学兽医学硕士"]
          },
          summary: t(
            "Supports experimental coordination, animal work, and daily laboratory operations for ongoing projects in inflammation and tumor biology.",
            "负责炎症与肿瘤生物学相关课题的实验协调、动物实验支持与实验室日常运行。"
          ),
          tags: [
            keyword("Laboratory operations", "实验室运行"),
            keyword("Animal models", "动物模型")
          ]
        }
      ],
      phd: [
        {
          name: "Junchuan Zhang",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/ZJC.png",
          joined: "2021",
          education: {
            en: [
              "B.S. in Biotechnology, Jilin University, China",
              "M.S. in Crop Science, Jilin University, China"
            ],
            zh: ["吉林大学生物技术学士", "吉林大学作物学硕士"]
          },
          summary: t(
            "Investigates liquid-liquid phase separation in apoptotic proteins and how condensate behavior shapes death-signal responses.",
            "研究凋亡蛋白的液-液相分离及其凝聚体行为如何影响死亡信号应答。"
          ),
          tags: [
            keyword("Apoptosis", "细胞凋亡"),
            keyword("Phase separation", "相分离")
          ]
        },
        {
          name: "Qiuling Huang",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/HQL.png",
          joined: "2021",
          education: {
            en: [
              "Undergraduate training at Guangxi University, China",
              "Master's training at Wuhan University, China"
            ],
            zh: ["本科毕业于广西大学", "硕士阶段在武汉大学接受训练"]
          },
          summary: t(
            "Works on signaling mechanisms connected to inflammatory disease and tumor immunity, with emphasis on experimentally tractable pathway regulation.",
            "围绕炎症疾病与肿瘤免疫相关的信号机制开展研究，重点关注可实验验证的通路调控问题。"
          ),
          tags: [
            keyword("Inflammatory signaling", "炎症信号"),
            keyword("Tumor immunity", "肿瘤免疫")
          ]
        },
        {
          name: "Xixi Wang",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/WXX.png",
          joined: "2021",
          education: {
            en: [
              "B.S. in Biotechnology, Xuzhou Medical University, China",
              "M.S. in Biology, Illinois Institute of Technology, United States"
            ],
            zh: ["徐州医科大学生物技术学士", "伊利诺伊理工学院生物学硕士"]
          },
          summary: t(
            "Develops therapeutic strategies for hepatocellular carcinoma, including small-molecule design, in vivo delivery, and mechanism-focused evaluation.",
            "围绕肝细胞癌治疗开展研究，包括小分子设计、体内递送与机制验证。"
          ),
          tags: [
            keyword("Liver cancer", "肝癌"),
            keyword("Therapeutic design", "治疗设计")
          ]
        },
        {
          name: "Yukun Han",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/HYK.png",
          joined: "2022",
          education: {
            en: [
              "B.S. in Animal Science, Nanjing Agricultural University, China",
              "M.S. in Systems Biology, Southern University of Science and Technology, China"
            ],
            zh: ["南京农业大学动物科学学士", "南方科技大学系统生物学硕士"]
          },
          summary: t(
            "Builds computational models and knowledge graphs for signaling networks, integrating large language models with single-cell and multi-omics analysis.",
            "构建信号网络的计算模型与知识图谱，将大语言模型与单细胞、多组学分析结合起来解析生物系统。"
          ),
          tags: [
            keyword("Knowledge graphs", "知识图谱"),
            keyword("Computational biology", "计算生物学")
          ]
        },
        {
          name: "Fei Huang",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/HF.png",
          joined: "2022",
          education: {
            en: [
              "B.S. in Basic Medicine, Xuzhou Medical University, China",
              "M.S. in Basic Medicine, Xuzhou Medical University, China"
            ],
            zh: ["徐州医科大学基础医学学士", "徐州医科大学基础医学硕士"]
          },
          summary: t(
            "Explores novel therapeutic strategies for autoimmune disease using adoptive transfer, flow cytometry, and in vivo disease models.",
            "利用过继转移、流式细胞术和体内疾病模型探索自身免疫疾病的新型治疗策略。"
          ),
          tags: [
            keyword("Autoimmunity", "自身免疫"),
            keyword("Mouse models", "小鼠模型")
          ]
        },
        {
          name: "Quanwei Wang",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/WQW.png",
          joined: "2023",
          education: {
            en: [
              "B.S. in Marine Biology, Ocean University of China, China",
              "M.S. in Neurobiology, Shanghai University, China"
            ],
            zh: ["中国海洋大学海洋生物学学士", "上海大学神经生物学硕士"]
          },
          summary: t(
            "Develops macrophage-targeted BAD delivery strategies for rheumatoid arthritis using exosome engineering and light-controlled release systems.",
            "利用外泌体工程与光控释放系统，开发面向类风湿关节炎的巨噬细胞靶向 BAD 递送策略。"
          ),
          tags: [
            keyword("Exosome engineering", "外泌体工程"),
            keyword("Rheumatoid arthritis", "类风湿关节炎")
          ]
        },
        {
          name: "Ruijia Zhi",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/ZRJ.png",
          joined: "2022",
          education: {
            en: ["B.S. in Enology, Northwest A&F University, China"],
            zh: ["西北农林科技大学葡萄与葡萄酒工程学士"]
          },
          summary: t(
            "Studies immune-related adverse events associated with checkpoint blockade and seeks strategies that preserve antitumor efficacy while limiting toxicity.",
            "研究免疫检查点治疗相关不良反应的分子机制，并探索兼顾疗效与安全性的干预策略。"
          ),
          tags: [
            keyword("Checkpoint blockade", "免疫检查点治疗"),
            keyword("irAEs", "免疫相关不良反应")
          ]
        },
        {
          name: "Bolin Wang",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/WBL.png",
          joined: "2022",
          education: {
            en: ["B.S. in Bioengineering, Northeast Agricultural University, China"],
            zh: ["东北农业大学生物工程学士"]
          },
          summary: t(
            "Investigates CD8+ T cell function and immunoregulatory roles in antitumor immunity using immune assays, single-cell sequencing, and tumor models.",
            "通过免疫功能实验、单细胞测序和肿瘤模型研究 CD8+ T 细胞在抗肿瘤免疫中的功能与调控机制。"
          ),
          tags: [
            keyword("CD8 T cells", "CD8 T 细胞"),
            keyword("Single-cell analysis", "单细胞分析")
          ]
        },
        {
          name: "Dang Ding",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/DD.png",
          joined: "2022",
          education: {
            en: ["B.S. in Food Science & Engineering, Huazhong Agricultural University, China"],
            zh: ["华中农业大学食品科学与工程学士"]
          },
          summary: t(
            "Focuses on regulation of the non-canonical NF-κB pathway under pathophysiological conditions relevant to autoimmune and inflammatory disease.",
            "聚焦非经典 NF-κB 通路在自身免疫和炎症疾病相关病理生理条件下的调控机制。"
          ),
          tags: [
            keyword("Non-canonical NF-κB", "非经典 NF-κB"),
            keyword("Inflammatory disease", "炎症疾病")
          ]
        },
        {
          name: "Tingting Li",
          role: t("Ph.D. Student", "博士生"),
          photo: "images/LTT.png",
          joined: "2024",
          education: {
            en: [
              "B.S. from Liaoning University, China",
              "M.S. from Xiamen University, China"
            ],
            zh: ["辽宁大学学士", "厦门大学硕士"]
          },
          summary: t(
            "Examines cytoplasmic functions of Miz1 in B cell development and how their dysregulation contributes to autoimmune pathogenesis.",
            "研究 Miz1 在 B 细胞发育中的胞质功能，以及这些功能失衡如何参与自身免疫病发生。"
          ),
          tags: [
            keyword("Miz1", "Miz1"),
            keyword("B cell biology", "B 细胞生物学")
          ]
        }
      ],
      masters: [
        {
          name: "Zhengyang Gao",
          role: t("Master's Student", "硕士生"),
          photo: "images/GZY.png",
          joined: "2023",
          education: {
            en: ["B.S. from Sichuan University, China"],
            zh: ["四川大学学士"]
          },
          summary: t(
            "Participates in projects on tumor immunity and inflammatory signaling, with emphasis on core experimental workflows and pathway-oriented assays.",
            "参与肿瘤免疫与炎症信号相关课题，重点训练基础实验流程与通路导向分析。"
          ),
          tags: [
            keyword("Tumor immunity", "肿瘤免疫"),
            keyword("Experimental training", "实验训练")
          ]
        },
        {
          name: "Haoran Du",
          role: t("Master's Student", "硕士生"),
          photo: "images/DHR.png",
          joined: "2024",
          education: {
            en: ["B.S. in Biological Science, Zhejiang Chinese Medical University, China"],
            zh: ["浙江中医药大学生物科学学士"]
          },
          summary: t(
            "Studies cellular and molecular pathways that regulate immune tolerance in autoimmune conditions.",
            "研究自身免疫状态下调控免疫耐受的细胞与分子通路。"
          ),
          tags: [
            keyword("Immune tolerance", "免疫耐受"),
            keyword("Autoimmune disease", "自身免疫疾病")
          ]
        },
        {
          name: "Tong Wang",
          role: t("Master's Student", "硕士生"),
          photo: "images/WT.png",
          joined: "2024",
          education: {
            en: ["B.S. in Biological Science, Xuzhou Medical University, China"],
            zh: ["徐州医科大学生物科学学士"]
          },
          summary: t(
            "Works on peptide-based intervention strategies and supporting experimental workflows in neurological disease models.",
            "围绕肽类干预策略与神经疾病模型开展研究，并承担相关实验流程支持。"
          ),
          tags: [
            keyword("Peptide design", "肽设计"),
            keyword("Neurological models", "神经疾病模型")
          ]
        },
        {
          name: "Yiyi Yang",
          role: t("Master's Student", "硕士生"),
          photo: "images/YYY.png",
          joined: "2024",
          education: {
            en: ["B.S. in Bioengineering, Central South University of Forestry and Technology, China"],
            zh: ["中南林业科技大学生物工程学士"]
          },
          summary: t(
            "Investigates the functional role of Miz1 KR in liver carcinogenesis and explores in vivo therapeutic strategies including AAV delivery.",
            "研究 Miz1 KR 在肝癌发生中的功能，并探索包括 AAV 递送在内的体内治疗策略。"
          ),
          tags: [
            keyword("Miz1 KR", "Miz1 KR"),
            keyword("AAV delivery", "AAV 递送")
          ]
        },
        {
          name: "Yanning Guo",
          role: t("Master's Student", "硕士生"),
          photo: "images/GYN.png",
          joined: "2024",
          education: {
            en: ["B.S. in Architecture, Shanxi University, China"],
            zh: ["山西大学建筑学学士"]
          },
          summary: t(
            "Interested in interdisciplinary research communication, visualization, and how design-oriented thinking can support data presentation in biology.",
            "关注跨学科科研传播与可视化，探索设计思维如何服务于生物学数据展示与表达。"
          ),
          tags: [
            keyword("Visualization", "可视化"),
            keyword("Interdisciplinary communication", "跨学科表达")
          ]
        }
      ],
      alumni: [
        {
          name: "Shixia Wei",
          role: t("Alumna", "校友"),
          photo: "images/WSX.png",
          education: {
            en: ["B.S. from Zhengzhou University, China", "Graduated from the lab in 2024"],
            zh: ["郑州大学学士", "2024 年从课题组毕业"]
          },
          summary: t(
            "Current position: Ph.D. student at Shenzhen Medical Academy of Research and Translation (SMART).",
            "目前去向：深圳医学科学院（SMART）博士生。"
          ),
          tags: [
            keyword("Alumna", "校友")
          ]
        },
        {
          name: "Shutong Liu",
          role: t("Alumna", "校友"),
          photo: "images/LST.png",
          education: {
            en: ["B.S. from Jilin University, China", "Graduated from the lab in 2025"],
            zh: ["吉林大学学士", "2025 年从课题组毕业"]
          },
          summary: t(
            "Contributed to research training in signaling and disease biology during her time in the lab.",
            "在课题组期间参与了信号与疾病生物学方向的科研训练。"
          ),
          tags: [
            keyword("Alumna", "校友")
          ]
        }
      ]
    },
    publications: [
      {
        id: "2021-immunity",
        year: 2021,
        category: "research",
        featured: true,
        journal: "Immunity",
        title: "The zinc finger protein Miz1 suppresses liver tumorigenesis by restricting hepatocyte-driven macrophage activation and inflammation",
        authors: "Zhang, W., Zhangyuan, G., Wang, F., Jin, K., Shen, H., Zhang, L., Yuan, X., Wang, J., Zhang, H., Yu, W., Huang, R., Xu, X., Yin, Y., Zhong, G., Lin, A., & Sun, B.",
        pdf: "files/2021-immunity.pdf",
        doi: "https://doi.org/10.1016/j.immuni.2021.04.027",
        image: "images/immunity.jpg",
        blurb: t(
          "Connects Miz1, hepatocyte signaling, macrophage activation, and inflammatory control in liver tumorigenesis.",
          "揭示 Miz1、肝细胞信号、巨噬细胞活化与肝癌炎症调控之间的机制联系。"
        )
      },
      {
        id: "2021-iscience",
        year: 2021,
        category: "research",
        featured: true,
        journal: "iScience",
        title: "BAD-mediated neuronal apoptosis and neuroinflammation contribute to Alzheimer's disease pathology",
        authors: "Zhang, L., Qian, Y., Li, J., Zhou, X., Xu, H., Yan, J., Xiang, J., Yuan, X., Sun, B., Sisodia, S. S., Jiang, Y. H., Cao, X., Jing, N., & Lin, A.",
        pdf: "files/2021-iscience.pdf",
        doi: "https://doi.org/10.1016/j.isci.2021.102942",
        image: "images/iScience.jpg",
        blurb: t(
          "Links BAD-dependent apoptosis and neuroinflammation to Alzheimer's disease pathology.",
          "将 BAD 介导的凋亡与神经炎症机制连接到阿尔茨海默病病理。"
        )
      },
      {
        id: "2020-elife",
        year: 2020,
        category: "research",
        featured: true,
        journal: "eLife",
        title: "BAD inactivation exacerbates rheumatoid arthritis pathology by promoting survival of sublining macrophages",
        authors: "Li, J., Zhang, L., Zheng, Y., Shao, R., Liang, Q., Yu, W., Wang, H., Zou, W., Wang, D., Xiang, J., & Lin, A.",
        pdf: "files/2020-elife.pdf",
        doi: "https://doi.org/10.7554/eLife.56309",
        image: "images/gallery/3.jpg",
        blurb: t(
          "Shows how macrophage survival control influences rheumatoid arthritis pathology.",
          "阐明巨噬细胞存活调控如何影响类风湿关节炎病理。"
        )
      },
      {
        id: "2018-cellresearch",
        year: 2018,
        category: "research",
        featured: true,
        journal: "Cell Research",
        title: "The BH3-only protein BAD mediates TNFα cytotoxicity despite concurrent activation of IKK and NF-κB in septic shock",
        authors: "Yan, J., Zhang, H., Xiang, J., Zhao, Y., Yuan, X., Sun, B., & Lin, A.",
        pdf: "files/2018-Cell research.pdf",
        doi: "https://doi.org/10.1038/s41422-018-0041-7",
        image: "images/cellresearch.jpg",
        blurb: t(
          "Extends BAD biology into septic shock and inflammatory cytotoxicity.",
          "将 BAD 的功能研究拓展到脓毒性休克与炎症细胞毒性场景。"
        )
      },
      {
        id: "2012-cell",
        year: 2013,
        category: "research",
        featured: true,
        journal: "Cell",
        title: "Inactivation of BAD by IKK Inhibits TNFα-Induced Apoptosis Independently of NF-κB Activation",
        authors: "Yan, J., Xiang, J., Lin, Y., Ma, J., Zhang, J., Zhang, H., Sun, J., Danial, N. N., Liu, J., & Lin, A.",
        pdf: "files/2012-cell.pdf",
        doi: "https://doi.org/10.1016/j.cell.2012.12.041",
        image: "images/cell.jpg",
        blurb: t(
          "A core paper defining BAD as a mechanistic bridge between IKK activity and TNF-triggered apoptosis.",
          "代表性工作，阐明 BAD 如何连接 IKK 活性与 TNF 诱导凋亡。"
        )
      },
      {
        id: "2012-pnas",
        year: 2012,
        category: "research",
        featured: false,
        journal: "PNAS",
        title: "Site-specific ubiquitination is required for relieving the transcription factor Miz1-mediated suppression on TNF-α-induced JNK activation and inflammation",
        authors: "Liu, J., Yan, J., Jiang, S., Wen, J., Chen, L., Zhao, Y., & Lin, A.",
        pdf: "files/2012-PNAS.pdf"
      },
      {
        id: "2011-molcell-review",
        year: 2011,
        category: "review",
        featured: false,
        journal: "Molecular Cell",
        title: "ATIA: A Link between Inflammation and Hypoxia",
        authors: "Lin, A.",
        pdf: "files/2011-review-MolCell.pdf",
        doi: "https://doi.org/10.1016/j.molcel.2011.05.023"
      },
      {
        id: "2009-pnas",
        year: 2009,
        category: "research",
        featured: false,
        journal: "PNAS",
        title: "Miz1 is a signal- and pathway-specific modulator or regulator (SMOR) that suppresses TNF-α-induced JNK1 activation",
        authors: "Liu, J., Zhao, Y., Eilers, M., & Lin, A.",
        pdf: "files/2009-PNAS.pdf"
      },
      {
        id: "2007-oncogene-review",
        year: 2007,
        category: "review",
        featured: false,
        journal: "Oncogene",
        title: "Wiring the cell signaling circuitry by the NF-κB and JNK1 crosstalk and its applications in human diseases",
        authors: "Liu, J., & Lin, A.",
        pdf: "files/2007-review-oncogene.pdf",
        doi: "https://doi.org/10.1038/sj.onc.1210417"
      },
      {
        id: "2006-molcell",
        year: 2006,
        category: "research",
        featured: false,
        journal: "Molecular Cell",
        title: "NF-kB Is Required for UV-Induced JNK Activation via Induction of PKCδ",
        authors: "Liu, J., Yang, D., Minemoto, Y., Leitges, M., Rosner, M. R., & Lin, A.",
        pdf: "files/2006-MolCell.pdf",
        doi: "https://doi.org/10.1016/j.molcel.2005.12.020"
      },
      {
        id: "2006-devcell-review",
        year: 2006,
        category: "review",
        featured: false,
        journal: "Developmental Cell",
        title: "A Five-Year Itch in TNF-α Cytotoxicity: The Time Factor Determines JNK Action",
        authors: "Lin, A.",
        pdf: "files/2006-review-devcell.pdf",
        doi: "https://doi.org/10.1016/j.devcel.2006.02.006"
      },
      {
        id: "2005-cellres-review",
        year: 2005,
        category: "review",
        featured: false,
        journal: "Cell Research",
        title: "Role of JNK activation in apoptosis: A double-edged sword",
        authors: "Liu, J., & Lin, A.",
        pdf: "files/2005-review-cellres.pdf"
      },
      {
        id: "2004-molcell",
        year: 2004,
        category: "research",
        featured: false,
        journal: "Molecular Cell",
        title: "JNK Suppresses Apoptosis via Phosphorylation of the Proapoptotic Bcl-2 Family Protein BAD",
        authors: "Yu, C., Minemoto, Y., Zhang, J., Liu, J., Tang, F., Bui, T. N., Xiang, J., & Lin, A.",
        pdf: "files/2004-MolCell.pdf"
      },
      {
        id: "2003-bioessays-review",
        year: 2003,
        category: "review",
        featured: false,
        journal: "BioEssays",
        title: "Activation of the JNK signaling pathway: breaking the brake on apoptosis",
        authors: "Lin, A.",
        pdf: "files/2003-review-Bioessays.pdf"
      },
      {
        id: "2003-semincancer-review",
        year: 2003,
        category: "review",
        featured: false,
        journal: "Seminars in Cancer Biology",
        title: "NF-κB in cancer: a marked target",
        authors: "Lin, A., & Karin, M.",
        pdf: "files/2003-review-Semin Cancer Biol.pdf"
      },
      {
        id: "2002-natimmunol-review",
        year: 2002,
        category: "review",
        featured: false,
        journal: "Nature Immunology",
        title: "NF-κB at the crossroads of life and death",
        authors: "Karin, M., & Lin, A.",
        pdf: "files/2002-review-Nat Immunol.pdf"
      },
      {
        id: "2001-nature",
        year: 2001,
        category: "research",
        featured: false,
        journal: "Nature",
        title: "Inhibition of JNK activation through NF-κB target genes",
        authors: "Tang, G., Minemoto, Y., Dibling, B., Purcell, N. H., Li, Z., Karin, M., & Lin, A.",
        pdf: "files/2001-nature.pdf",
        doi: "https://doi.org/10.1038/35104568"
      },
      {
        id: "2001-pnas",
        year: 2001,
        category: "research",
        featured: false,
        journal: "PNAS",
        title: "Activation of NF-κB is required for hypertrophic growth of primary rat neonatal ventricular cardiomyocytes",
        authors: "Purcell, N. H., Tang, G., Yu, C., Mercurio, F., DiDonato, J. A., & Lin, A.",
        pdf: "files/2001-PNAS.pdf"
      },
      {
        id: "2001-molcell",
        year: 2001,
        category: "research",
        featured: false,
        journal: "Molecular Cell",
        title: "Blocking Caspase-3-Mediated Proteolysis of IKKβ Suppresses TNF-α-Induced Apoptosis",
        authors: "Tang, G., Yang, J., Minemoto, Y., & Lin, A.",
        pdf: "files/2001-MolCell.pdf"
      },
      {
        id: "1995-science",
        year: 1995,
        category: "research",
        featured: false,
        journal: "Science",
        title: "Identification of a dual specificity kinase that activates the Jun kinases and p38-Mpk2",
        authors: "Lin, A., Minden, A., Martinetto, H., Claret, F.-X., Lange-Carter, C., Mercurio, F., Johnson, G. L., & Karin, M.",
        pdf: "files/1995-Science.pdf"
      },
      {
        id: "1995-cell",
        year: 1995,
        category: "research",
        featured: false,
        journal: "Cell",
        title: "Selective Activation of the JNK Signaling Cascade and c-Jun Transcriptional Activity by the Small GTPases Rac and Cdc42Hs",
        authors: "Minden, A., Lin, A., Claret, F.-X., Abo, A., & Karin, M.",
        pdf: "files/1995-Cell.pdf"
      },
      {
        id: "1994-science",
        year: 1994,
        category: "research",
        featured: false,
        journal: "Science",
        title: "Differential activation of ERK and JNK mitogen-activated protein kinases by Raf-1 and MEKK",
        authors: "Minden, A., Lin, A., McMahon, M., Lange-Carter, C., Dérijard, B., Davis, R. J., Johnson, G. L., & Karin, M.",
        pdf: "files/1994-Science.pdf",
        doi: "https://doi.org/10.1126/science.7935812"
      },
      {
        id: "1993-genesdev",
        year: 1993,
        category: "research",
        featured: false,
        journal: "Genes & Development",
        title: "Identification of an oncoprotein and UV-responsive protein kinase that binds and potentiates the c-Jun activation domain",
        authors: "Hibi, M., Lin, A., Smeal, T., Minden, A., & Karin, M.",
        pdf: "files/1993-GenesDev.pdf"
      },
      {
        id: "1992-cell",
        year: 1992,
        category: "research",
        featured: false,
        journal: "Cell",
        title: "Casein Kinase II Is a Negative Regulator of c-Jun DNA Binding and AP-1 Activity",
        authors: "Lin, A., Frost, J., Deng, T., Smeal, T., Al-Alawi, N., Kikkawa, U., Hunter, T., Brenner, D., & Karin, M.",
        pdf: "files/1992-Cell.pdf"
      }
    ],
    activities: {
      updates: [
        {
          date: "2018",
          title: t("Cell Research paper on BAD and septic shock", "Cell Research 论文：BAD 与脓毒性休克"),
          summary: t(
            "This work showed that BAD can mediate TNFα cytotoxicity in septic shock despite concurrent IKK and NF-κB activation.",
            "该研究表明，即使 IKK 和 NF-κB 同时被激活，BAD 仍可介导 TNFα 相关的脓毒性休克细胞毒性。"
          )
        },
        {
          date: "2021",
          title: t("Immunity paper on Miz1 and liver tumorigenesis", "Immunity 论文：Miz1 与肝癌发生"),
          summary: t(
            "A featured paper connected hepatocyte-driven macrophage activation with inflammatory control of liver tumorigenesis.",
            "代表性论文揭示肝细胞驱动的巨噬细胞活化与肝癌炎症调控之间的关键机制。"
          )
        },
        {
          date: "2021",
          title: t("iScience paper on BAD and Alzheimer's disease", "iScience 论文：BAD 与阿尔茨海默病"),
          summary: t(
            "The lab linked BAD-mediated neuronal apoptosis and neuroinflammation to Alzheimer's disease pathology.",
            "课题组揭示 BAD 介导的神经元凋亡和神经炎症在阿尔茨海默病病理中的作用。"
          )
        },
        {
          date: "2020",
          title: t("eLife paper on rheumatoid arthritis pathology", "eLife 论文：类风湿关节炎病理机制"),
          summary: t(
            "This work showed that BAD inactivation supports pathogenic macrophage survival in rheumatoid arthritis.",
            "该研究表明 BAD 失活会促进致病性巨噬细胞存活，从而加重类风湿关节炎病理。"
          )
        }
      ],
      gallery: Array.from({ length: 14 }, (_, index) => ({
        image: `images/gallery/${index + 1}.jpg`,
        title: t(`Lin Lab photo ${String(index + 1).padStart(2, "0")}`, `实验室影像 ${String(index + 1).padStart(2, "0")}`),
        caption: t(
          "Laboratory moments documenting group activities, discussions, and shared milestones.",
          "记录实验室活动、讨论与团队时刻的影像。"
        )
      }))
    },
    join: {
      intro: [
        t(
          "Lin Lab is structured for trainees and researchers who want mechanistic depth, interdisciplinary exposure, and sustained mentorship.",
          "林安宁课题组适合希望获得机制研究深度、跨学科训练与持续指导的学生和研究人员。"
        ),
        t(
          "Specific openings change with projects and funding, but the lab regularly welcomes inquiries that align with its research themes in signaling, immunity, inflammation, and computational biology.",
          "具体名额会随项目和经费周期调整，但课题组长期欢迎与信号、免疫、炎症和计算生物学方向契合的申请。"
        )
      ],
      positions: [
        {
          title: t("Postdoctoral fellows", "博士后"),
          description: t(
            "For researchers who can drive an independent question while integrating tightly with the lab's mechanistic and disease-oriented programs.",
            "适合能够独立推进研究问题，并与课题组机制研究和疾病导向研究主线紧密协同的研究人员。"
          ),
          requirements: {
            en: [
              "Ph.D. in biology, medicine, immunology, bioengineering, or a related discipline",
              "Evidence of research productivity and scientific writing",
              "Strong fit with at least one of the lab's research themes"
            ],
            zh: [
              "具有生物学、医学、免疫学、生物工程或相关领域博士学位",
              "具备科研产出与学术写作能力",
              "与课题组至少一条研究主线高度契合"
            ]
          }
        },
        {
          title: t("Research assistants and technicians", "科研助理与技术人员"),
          description: t(
            "For applicants who want rigorous training in core experimental workflows while supporting multi-project laboratory operations.",
            "适合希望接受核心实验技术训练，并参与多课题支持与实验室运行的申请者。"
          ),
          requirements: {
            en: [
              "Bachelor's or master's degree in life sciences or a related field",
              "Careful experimental habits and willingness to work collaboratively",
              "Comfort with structured, reproducible laboratory workflows"
            ],
            zh: [
              "具有生命科学或相关领域本科或硕士学位",
              "具备严谨的实验习惯与合作意识",
              "适应规范、可重复的实验流程管理"
            ]
          }
        },
        {
          title: t("Ph.D. and master's students", "博士生与硕士生"),
          description: t(
            "For students interested in mechanistic disease biology, immune regulation, signaling networks, or computational approaches for biology.",
            "适合对疾病机制生物学、免疫调控、信号网络或生物学计算方法感兴趣的学生。"
          ),
          requirements: {
            en: [
              "Solid academic record and a clear motivation for research",
              "Interest in both biological questions and rigorous experimental or computational methods",
              "Readiness for long-term training and scientific communication"
            ],
            zh: [
              "学业基础扎实，并具备明确的科研动机",
              "对生物学问题及严谨的实验或计算方法都有兴趣",
              "愿意投入长期训练并提升学术表达能力"
            ]
          }
        }
      ],
      benefits: [
        t(
          "Close mentorship on project design, interpretation, and writing",
          "在课题设计、结果解释与写作上获得密切指导"
        ),
        t(
          "Access to disease models, immune assays, molecular biology, and computational analysis workflows",
          "接触疾病模型、免疫实验、分子生物学与计算分析的系统训练"
        ),
        t(
          "Opportunities to work across experimental and computational interfaces",
          "有机会在实验与计算交叉界面开展研究"
        ),
        t(
          "A publication-oriented environment with emphasis on scientific rigor",
          "以论文产出和科学严谨性为导向的研究环境"
        )
      ],
      process: [
        {
          title: t("Prepare application materials", "准备申请材料"),
          body: t(
            "Email the PI with your CV, a brief research statement, and any representative publication or project summary.",
            "请将个人简历、简要研究陈述以及代表性论文或项目简介发送给 PI。"
          )
        },
        {
          title: t("Describe research fit", "说明研究契合度"),
          body: t(
            "Explain which of the lab's research themes is the strongest fit and which methods or questions you hope to pursue.",
            "请说明你与课题组哪一条研究主线最契合，以及希望进一步开展的方法或问题。"
          )
        },
        {
          title: t("Discussion and interview", "沟通与面试"),
          body: t(
            "Suitable applicants can then arrange a follow-up discussion about scientific interests, training goals, and project matching.",
            "对于契合度较高的申请者，将进一步安排关于科研兴趣、培养目标与项目匹配度的交流。"
          )
        },
        {
          title: t("Institute-level procedures", "进入院系流程"),
          body: t(
            "Formal onboarding follows the relevant Nanjing University and Institute of Modern Biology procedures for the selected role.",
            "正式录用将按照南京大学及现代生物研究院对应岗位的流程执行。"
          )
        }
      ]
    }
  };
})();
