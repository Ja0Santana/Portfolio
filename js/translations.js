const translations = {
    pt: {
        nav_about: "Sobre",
        nav_timeline: "Trajetória",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_certificates: "Certificados",
        nav_contact: "Entrar em contato",
        hero_greeting: "Olá, eu sou João Paulo,",
        hero_role: "Desenvolvedor Full-Stack",
        hero_description: "Construo APIs escaláveis com Java e Spring Boot, focado em conteinerização e em manter altos padrões de qualidade de código.",
        hero_projects_btn: "Ver meus projetos",
        hero_contact_btn: "Entrar em contato",
        about_title: "Sobre Mim",
        about_description1: "Sou estudante de Sistemas de Informação no IFS e desenvolvedor Full-Stack. Embora minha base seja a robustez do Back-End com Java e Spring Boot, transformo código em experiências visuais de alto nível, unindo estética e funcionalidade.",
        about_description2: "Foco na construção de soluções Full Stack completas, desde APIs escaláveis e microsserviços até interfaces modernas e responsivas. Minha missão é entregar projetos que não apenas funcionem com perfeição técnica, mas que também encantem pelo design e usabilidade.",
        timeline_title: "Minha Trajetória",
        timeline_2020_title: "Primeiros Passos com HTML e CSS",
        timeline_2020_description: "Meu contato inicial com a programação aconteceu em 2020. Através das famosas aulas do Gustavo Guanabara, escrevi minhas primeiras linhas de código em HTML e CSS. Foi ali que a semente do desenvolvimento de software foi plantada.",
        timeline_2025_title: "Bacharelado no IFS",
        timeline_2025_description: "Após um período focado em outras áreas, voltei a ter contato com código de forma intensa ao ingressar no curso de Sistemas de Informação no Instituto Federal de Sergipe (IFS). A programação deixou de apenas curiosidade e virou minha futura profissão.",
        timeline_java_title: "Explorando o Ecossistema Java",
        timeline_java_description: "Minha primeira imersão acadêmica e profissional foi no Back-End com Java. Criei projetos estruturados, como o Sistema de Adoção de Pets (CLI), onde pude aplicar na prática princípios SOLID e boas práticas de Orientação a Objetos.",
        timeline_campus_title: "Campus Weekend Aracaju",
        timeline_campus_description: "Participação na Campus Weekend. Uma experiência incrível onde tive a oportunidade de conhecer pessoalmente o professor que iniciou minha trajetória na programação!",
        timeline_spring_title: "Spring Boot e Banco de Dados",
        timeline_spring_description: "Busquei especialização conquistando certificações em Banco de Dados e Metodologias Ágeis pela Javanauta. Dominei o framework Spring Boot para construir APIs RESTful robustas, fazendo integrações com bancos como PostgreSQL e MongoDB.",
        timeline_fullstack_title: "O Caminho para o Full Stack",
        timeline_fullstack_description: "Hoje desenvolvo microsserviços avançados com Docker, JWT e análise com SonarQube. Agora meu foco é o Front-End (JavaScript / Tailwind / React / Angular) para me tornar finalmente um Desenvolvedor Full Stack.",
        timeline_evolution: "Sempre em evolução...",
        skills_title: "Habilidades & Tecnologias",
        skills_backend: "Back-End & Core",
        skills_frontend: "Front-End & UI",
        skills_tools: "Ferramentas & DevOps",
        projects_title: "Projetos em Destaque",
        projects_view_code: "Ver Código",
        projects_view_live: "Live Demo",
        certificates_title: "Certificados",
        certificates_view: "Abrir na Web",
        contact_title: "Contato",
        contact_email: "Email",
        contact_linkedin: "LinkedIn",
        contact_location: "Bahia, Brasil",
        footer_rights: "© 2026 João Paulo Santana. Todos os direitos reservados.",
        modal_certificate: "Certificado",
        modal_close: "Fechar (Esc)",
        project_scheduler_title: "Agendador de Tarefas Full-Stack",
        project_scheduler_desc: "Aplicação Full-Stack com Front-End moderno em React e Vite, integrada a uma API REST em Java e Spring Boot. Possui autenticação JWT, integração com PostgreSQL, e ampla cobertura de testes unitários com JUnit e Mockito. Analisada via SonarQube para qualidade de código.",
        project_pets_title: "Sistema de Adoção de Pets (CLI)",
        project_pets_desc: "Sistema robusto de gerenciamento de adoção de pets via Linha de Comando (CLI). Desenvolvido em Java utilizando princípios SOLID, Clean Code e gerenciamento eficiente de estruturas de dados.",
        project_wedding_title: "Site de Casamento Premium",
        project_wedding_desc: "Plataforma completa com lista de presentes interativa, integração real com MercadoPago (PIX/Cartão), sistema de validação de segurança via e-mail e design responsivo de alto nível.",
        project_synfonia_title: "Synfonia - Immersive Music Experience",
        project_synfonia_desc: "Plataforma de música premium focada em imersão e performance. Apresenta UI dinâmica com Framer Motion, Glassmorphism, e integração profunda com a API do Spotify (OAuth). O back-end conta com banco de dados híbrido (PostgreSQL + MongoDB) e blindagem de segurança.",
        project_view_github: "Ver Código GitHub",
        project_view_site: "Ver Site",
        cert_title: "Meus Certificados",
        cert_subtitle: "Certificações obtidas através do Javanauta.",
        cert_agile: "Metodologias Ágeis",
        cert_java_spring: "Java & Spring Boot",
        cert_database: "Banco de Dados",
        cert_frontend_ai: "Front-End com IA",
        cert_web_arch_ai: "Arquitetura Web com IA",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_location_label: "Bahia, Brasil",
        skills_db: "SQL & NoSQL",
        skills_devops: "Docker & CI/CD",
        skills_services: "Integrações & Serviços",
        skills_cloud: "Cloud & Deployment",
        skills_apis: "APIs REST & JWT",
        skills_quality: "Testes & Qualidade",
        skills_click_hint: "Clique para ver uso prático →",
        skills_modal_subtitle: "Como utilizo essas tecnologias no dia a dia",
        skills_applied_projects: "Projetos relacionados:",
        skills_tab_backend: "Backend",
        skills_tab_frontend: "Frontend",
        skills_tab_database: "Banco de Dados",
        skills_tab_devops: "DevOps",
        skills_categories: {
            backend: {
                title: "Desenvolvimento Backend",
                subtitle: "APIs RESTful em Java, segurança JWT, consumo de APIs e persistência",
                icon: "server",
                items: [
                    {
                        name: "Java 17/21 & Spring Boot 3",
                        level: "Especialização",
                        description: "Arquitetura limpa em camadas (Controller, Service, Repository), gerenciamento de dependências via Gradle e construção de Web APIs robustas e performáticas.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Site de Casamento Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring Security & Autenticação JWT",
                        level: "Segurança",
                        description: "Implementação de filtros de autenticação stateless (JwtAuthenticationFilter), geração e validação de tokens JWT, controle de acesso e Rate Limiting para proteção contra abuso.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring Data JPA & Hibernate",
                        level: "Persistência",
                        description: "Mapeamento O/R de entidades complexas, gerenciamento de transações bancárias/pagamentos, consultas customizadas e integridade referencial.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Site de Casamento Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Integrações REST & Webhooks (RestClient)",
                        level: "Integrações",
                        description: "Consumo de APIs externas utilizando Spring RestClient (Spotify Web API, iTunes Search API) e tratamento de Webhooks assíncronos para confirmação de pagamentos em tempo real.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Site de Casamento Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Serviço de E-mails Transacionais",
                        level: "Comunicação",
                        description: "Envio assíncrono de e-mails de confirmação e códigos de verificação com JavaMailSender e templates HTML dinâmicos via Thymeleaf.",
                        projects: [
                            { name: "Site de Casamento Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            frontend: {
                title: "Desenvolvimento Frontend",
                subtitle: "Interfaces reativas com React, gerenciamento de estado e Tailwind CSS",
                icon: "code2",
                items: [
                    {
                        name: "React & Vite",
                        level: "Em Produção",
                        description: "Criação de SPAs modernas, arquitetura baseada em componentes reutilizáveis, roteamento seguro com PrivateRoute e empacotamento ultrarrápido com Vite.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Gerenciamento de Estado (Context API)",
                        level: "Arquitetura",
                        description: "Centralização de estados complexos através de múltiplos contextos (AudioContext, ThemeContext, ImportContext) e hooks customizados (useAudio) para controle de mídia em tempo real.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Tailwind CSS & Design Responsivo",
                        level: "UI/UX",
                        description: "Estilização utilitária avançada, suporte a temas dinâmicos (Dark Mode), componentes acessíveis, animações fluídas e layouts responsivos para mobile e desktop.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" },
                            { name: "Site de Casamento Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "JavaScript Moderno (ES6+) & DOM",
                        level: "Linguagem Base",
                        description: "Manipulação assíncrona com Async/Await, Fetch API, consumo de SDKs de pagamento (Mercado Pago Checkout) e manipulação dinâmica da DOM.",
                        projects: [
                            { name: "Site de Casamento Frontend", url: "#projects" }
                        ]
                    }
                ]
            },
            database: {
                title: "Bancos de Dados",
                subtitle: "Modelagem relacional (SQL) e dados orientados a documentos",
                icon: "database",
                items: [
                    {
                        name: "PostgreSQL & MySQL",
                        level: "Relacional",
                        description: "Modelagem relacional (DER/MER), relacionamentos (@OneToMany, @ManyToMany), escritas de DDL/DML, integridade de dados e gerenciamento de transações.",
                        projects: [
                            { name: "Site de Casamento", url: "#projects" },
                            { name: "Synfonia", url: "#projects" }
                        ]
                    },
                    {
                        name: "MongoDB",
                        level: "NoSQL",
                        description: "Modelagem orientada a documentos para armazenamento não estruturado, eventos e dados de microsserviços.",
                        projects: []
                    }
                ]
            },
            devops: {
                title: "Ferramentas & DevOps",
                subtitle: "Containerização, versionamento e automação de CI/CD",
                icon: "wrench",
                items: [
                    {
                        name: "Docker & Docker Compose",
                        level: "Ambiente",
                        description: "Criação de imagens otimizadas para Java/Spring Boot e React, orquestração multi-container para padronização rigorosa entre desenvolvimento e produção.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Site de Casamento", url: "#projects" }
                        ]
                    },
                    {
                        name: "Git & GitHub Actions (CI/CD)",
                        level: "Automação",
                        description: "Controle de versão com Gitflow e criação de workflows automatizados para validação de build, testes contínuos e deploy automatizado em nuvem.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Site de Casamento", url: "#projects" }
                        ]
                    }
                ]
            },
            integrations: {
                title: "Integrações & Serviços",
                subtitle: "APIs de terceiros, gateways de pagamento e Webhooks assíncronos",
                icon: "plug",
                items: [
                    {
                        name: "Mercado Pago SDK & Webhooks",
                        level: "Pagamentos",
                        description: "Checkout transparente para recebimento via Pix e tratamento assíncrono de notificações de Webhook para confirmação de transações em tempo real no Site de Casamento.",
                        projects: [
                            { name: "Site de Casamento Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring RestClient (APIs Spotify & iTunes)",
                        level: "Web APIs",
                        description: "Consumo eficiente de Web APIs REST utilizando o RestClient do Spring Boot 3 com fluxo OAuth2 para autenticação no Spotify e consolidação de metadados no Synfonia.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            cloud: {
                title: "Cloud & Deployment",
                subtitle: "Hospedagem em nuvem, plataformas PaaS e entrega contínua",
                icon: "cloud",
                items: [
                    {
                        name: "Azure Static Web Apps & Netlify",
                        level: "Cloud Frontend",
                        description: "Hospedagem e distribuição global de aplicações React/SPAs integradas a pipelines de deploy automático acionados a cada commit no repositório.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Railway & Cloud Hosting",
                        level: "Cloud Backend",
                        description: "Implantação de microsserviços e APIs em Java/Spring Boot containerizadas via Docker, com gerenciamento seguro de variáveis de ambiente e banco PostgreSQL gerenciado.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Site de Casamento Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            apis: {
                title: "APIs REST & JWT",
                subtitle: "Segurança de endpoints, documentação e contratos DTO",
                icon: "key",
                items: [
                    {
                        name: "Spring Security & Autenticação JWT",
                        level: "Segurança",
                        description: "Implementação de arquitetura de segurança stateless (JwtAuthenticationFilter), emissão e validação de tokens JWT, controle de acessos por rota e proteção contra abusos via Rate Limiting.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Postman & Testes de Endpoints",
                        level: "Validação",
                        description: "Construção de coleções organizadas de requisições, validação de contratos de payloads DTO de entrada/saída, verificação de cabeçalhos e automação de testes de APIs.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Site de Casamento Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            testing: {
                title: "Testes & Qualidade",
                subtitle: "Testes unitários automatizados e análise estática de código",
                icon: "flaskConical",
                items: [
                    {
                        name: "JUnit 5 & Mockito",
                        level: "Testes Unitários",
                        description: "Desenvolvimento de testes unitários para validação de regras de negócio na camada de serviço, isolamento de dependências de banco com Mocks e aplicação do padrão AAA.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "SonarQube & Qualidade de Código",
                        level: "Qualidade",
                        description: "Análise estática contínua de código para acompanhamento de métricas de cobertura de testes, detecção de vulnerabilidades de segurança, correção de bugs e eliminação de code smells.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            }
        }
    },
    en: {
        nav_about: "About",
        nav_timeline: "Timeline",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_certificates: "Certificates",
        nav_contact: "Contact",
        nav_resume: "Resume",
        hero_role: "Full-Stack Developer",
        hero_tagline: "Building scalable Web APIs with Java & Spring Boot, and modern interfaces with React & Tailwind CSS.",
        hero_available: "Available for new opportunities",
        hero_view_projects: "View Projects",
        hero_contact_btn: "Get in Touch",
        about_title: "About Me",
        about_p1: "Full-Stack Developer focused on building robust Web APIs and modern web applications. Specialized in Java 17/21 and Spring Boot, creating RESTful architectures with high performance, security, and testability.",
        about_p2: "On the front-end, I build reactive, accessible, user-friendly interfaces using React, JavaScript, and Tailwind CSS. I also have experience with relational database modeling (PostgreSQL/MySQL), Docker containerization, and automated CI/CD pipelines.",
        about_stat_exp: "Years Experience",
        about_stat_projects: "Completed Projects",
        about_stat_certs: "Certifications",
        skills_title: "Skills & Technologies",
        skills_subtitle: "Technologies I master and apply in software development",
        skills_backend: "Java & Spring Boot",
        skills_db: "SQL & Databases",
        skills_devops: "Docker & CI/CD",
        skills_frontend: "Front-End & Design",
        skills_services: "Integrations & Services",
        skills_cloud: "Cloud & Deployment",
        skills_apis: "REST APIs & JWT",
        skills_quality: "Testing & Quality",
        skills_click_hint: "Click to view practical usage →",
        skills_modal_subtitle: "Practical application of these technologies in my projects",
        skills_applied_projects: "Related projects:",
        skills_tab_backend: "Backend",
        skills_tab_frontend: "Frontend",
        skills_tab_database: "Database",
        skills_tab_devops: "DevOps",
        skills_categories: {
            backend: {
                title: "Backend Development",
                subtitle: "RESTful APIs in Java, JWT security, API integrations, and persistence",
                icon: "server",
                items: [
                    {
                        name: "Java 17/21 & Spring Boot 3",
                        level: "Specialization",
                        description: "Clean layered architecture (Controller, Service, Repository), dependency management via Gradle, and construction of robust, high-performance Web APIs.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Wedding Website Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring Security & JWT Auth",
                        level: "Security",
                        description: "Stateless authentication filters (JwtAuthenticationFilter), JWT token generation and validation, Role-Based Access Control (RBAC), and Rate Limiting protection.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring Data JPA & Hibernate",
                        level: "Persistence",
                        description: "Object-Relational Mapping (ORM) of complex entities, transactional gift/payment processing, custom query methods, and referential integrity.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Wedding Website Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "REST Integrations & Webhooks (RestClient)",
                        level: "Integrations",
                        description: "Consuming external REST APIs using Spring RestClient (Spotify Web API, iTunes Search API) and handling asynchronous Webhooks for real-time Mercado Pago payment notifications.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Wedding Website Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Transactional Email Service",
                        level: "Communication",
                        description: "Asynchronous email dispatch for confirmation and verification codes using JavaMailSender and dynamic HTML templates rendered with Thymeleaf.",
                        projects: [
                            { name: "Wedding Website Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            frontend: {
                title: "Frontend Development",
                subtitle: "Reactive interfaces with React, state management, and Tailwind CSS",
                icon: "code2",
                items: [
                    {
                        name: "React & Vite",
                        level: "In Production",
                        description: "Building modern SPAs, component-driven architecture, protected routing with PrivateRoute, and ultra-fast bundling powered by Vite.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "State Management (Context API)",
                        level: "Architecture",
                        description: "Centralizing complex application state across multiple contexts (AudioContext, ThemeContext, ImportContext) and custom hooks (useAudio) for real-time audio playback.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Tailwind CSS & Responsive Design",
                        level: "UI/UX",
                        description: "Utility-first styling, dynamic theme toggling (Dark Mode), accessible glassmorphism UI components, and fluid responsive layouts.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" },
                            { name: "Wedding Website Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Modern JavaScript (ES6+) & DOM",
                        level: "Core Stack",
                        description: "Async/Await patterns, Fetch API, third-party SDK integrations (Mercado Pago Checkout), and native DOM interactions.",
                        projects: [
                            { name: "Wedding Website Frontend", url: "#projects" }
                        ]
                    }
                ]
            },
            database: {
                title: "Databases",
                subtitle: "Relational data modeling (SQL) and document-oriented storage",
                icon: "database",
                items: [
                    {
                        name: "PostgreSQL & MySQL",
                        level: "Relational",
                        description: "Data modeling (ER diagrams), entity relationships (@OneToMany, @ManyToMany), DDL/DML queries, data integrity, and ACID transaction support.",
                        projects: [
                            { name: "Wedding Website", url: "#projects" },
                            { name: "Synfonia", url: "#projects" }
                        ]
                    },
                    {
                        name: "MongoDB",
                        level: "NoSQL",
                        description: "Document-oriented modeling for unstructured datasets, logs, and microservice task storage.",
                        projects: []
                    }
                ]
            },
            devops: {
                title: "Tools & DevOps",
                subtitle: "Containerization, version control, and CI/CD automation",
                icon: "wrench",
                items: [
                    {
                        name: "Docker & Docker Compose",
                        level: "Environment",
                        description: "Creating optimized container images for Java/Spring Boot and React, multi-container orchestration for environment parity between dev and prod.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Wedding Website", url: "#projects" }
                        ]
                    },
                    {
                        name: "Git & GitHub Actions (CI/CD)",
                        level: "Automation",
                        description: "Gitflow branching strategies and automated CI/CD workflows for build verification, continuous testing, and cloud deployment.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Wedding Website", url: "#projects" }
                        ]
                    }
                ]
            },
            integrations: {
                title: "Integrations & Services",
                subtitle: "Third-party APIs, payment gateways, and asynchronous Webhooks",
                icon: "plug",
                items: [
                    {
                        name: "Mercado Pago SDK & Webhooks",
                        level: "Payments",
                        description: "Seamless gift checkout integration via Pix and real-time asynchronous Webhook processing for payment confirmation.",
                        projects: [
                            { name: "Wedding Website Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring RestClient (Spotify & iTunes APIs)",
                        level: "Web APIs",
                        description: "High-performance API consumption using Spring RestClient with OAuth2 authentication (Spotify Web API) and unified media search (iTunes API).",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            cloud: {
                title: "Cloud & Deployment",
                subtitle: "Cloud hosting, PaaS platforms, and continuous delivery",
                icon: "cloud",
                items: [
                    {
                        name: "Azure Static Web Apps & Netlify",
                        level: "Frontend Cloud",
                        description: "Global hosting and distribution of React SPAs and static web applications, integrated with push-to-deploy automated workflows.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Railway & Cloud Hosting",
                        level: "Backend Cloud",
                        description: "Deployment of Java/Spring Boot microservices containerized with Docker, featuring environment variable security and managed PostgreSQL.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Wedding Website Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            apis: {
                title: "REST APIs & JWT",
                subtitle: "Endpoint security, documentation, and DTO contracts",
                icon: "key",
                items: [
                    {
                        name: "Spring Security & JWT Auth",
                        level: "Security",
                        description: "Stateless security architecture (JwtAuthenticationFilter), JWT token issuance and validation, route-based authorization, and Rate Limiting.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Postman & Endpoint Testing",
                        level: "Validation",
                        description: "Organized request collections, DTO payload contract validation, header verification, and automated API testing.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Wedding Website Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            testing: {
                title: "Testing & Quality",
                subtitle: "Automated unit testing and static code analysis",
                icon: "flaskConical",
                items: [
                    {
                        name: "JUnit 5 & Mockito",
                        level: "Unit Testing",
                        description: "Unit testing for business rule validation in the service layer, database dependency isolation using Mocks, and AAA pattern execution.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    },
                    {
                        name: "SonarQube & Code Quality",
                        level: "Quality",
                        description: "Continuous static code analysis for test coverage metrics tracking, vulnerability detection, bug fixes, and code smell elimination.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            }
        }
    }
};
