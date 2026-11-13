const translations = {
    pt: {
        page_title: "DevPortfolio | João Paulo - Engenheiro de Software Full-Stack",
        nav_about: "Sobre",
        nav_timeline: "Trajetória",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_certificates: "Certificados",
        nav_contact: "Entrar em contato",
        hero_greeting: "Olá, eu sou João Paulo,",
        hero_role: "Engenheiro de Software | Full-Stack Developer",
        hero_description: "Construo sistemas distribuídos e APIs resilientes, com foco em processamento assíncrono, integridade de dados, controle de concorrência e idempotência — aplicando engenharia de software sólida e agnóstica à stack.",
        hero_projects_btn: "Ver meus projetos",
        hero_contact_btn: "Entrar em contato",
        about_title: "Sobre Mim",
        about_description1: "Sou estudante de Sistemas de Informação no IFS, monitor acadêmico de Programação Orientada a Objetos e de Estruturas de Dados, e atuo no desenvolvimento de software em produção. Minha engenharia é guiada por fundamentos: algoritmos eficientes, análise de complexidade (Big-O), arquitetura limpa e testes automatizados rigorosos.",
        about_description2: "Atuo desde a concepção de arquiteturas backend resilientes — com mensageria, filas assíncronas, caching com Redis e bancos relacionais/NoSQL — até interfaces web modernas e reativas. Meu objetivo não é apenas usar ferramentas, mas resolver problemas reais de concorrência, consistência transacional e performance com rigor técnico.",
        timeline_title: "Minha Trajetória",
        timeline_2020_title: "Primeiros Passos com Programação & Lógica",
        timeline_2020_description: "Meu contato inicial com computação aconteceu em 2020, quando escrevi minhas primeiras linhas de código e construí as bases da lógica de programação e algoritmos fundamentais.",
        timeline_2025_title: "Bacharelado em Sistemas de Informação — IFS",
        timeline_2025_description: "Ingresso no Instituto Federal de Sergipe (IFS). O estudo sistemático de computação teórica, sistemas operacionais, banco de dados e arquitetura de software transformou a paixão por tecnologia em formação de engenharia sólida.",
        timeline_poo_title: "Monitoria de Programação Orientada a Objetos — IFS",
        timeline_poo_description: "Atuação oficial prestando suporte técnico a alunos de graduação em Java, aprofundando o ensino de princípios SOLID, Clean Code, abstração, herança/polimorfismo e design patterns para sistemas corporativos.",
        timeline_dsa_title: "Monitoria de Estruturas de Dados I — IFS",
        timeline_dsa_description: "Orientação a estudantes na implementação e manipulação de diferentes estruturas de dados lineares e não lineares: listas encadeadas, pilhas, filas, árvores binárias e tabelas hash, com foco em alocação de memória e organização de dados.",
        timeline_production_title: "Engenharia em Produção: Concorrência e Mensageria (2026)",
        timeline_production_description: "Atuação no mercado desenvolvendo aplicações em produção com arquitetura de microsserviços, processamento assíncrono com filas (BullMQ e Amazon SQS), controle transacional de concorrência e idempotência com Redis.",
        timeline_evolution: "Sempre em evolução...",
        skills_title: "Habilidades & Fundamentos",
        skills_backend: "Backend & Concorrência",
        skills_db: "Bancos de Dados & Redis",
        skills_devops: "Docker & Mensageria",
        skills_frontend: "Front-End & UI Reativa",
        skills_services: "Integrações & Webhooks",
        skills_cloud: "Cloud & Deployment",
        skills_apis: "APIs REST & Idempotência",
        skills_quality: "Testes & Qualidade de Código",
        skills_click_hint: "Clique para ver uso prático →",
        skills_modal_subtitle: "Aplicação prática desses fundamentos e tecnologias em projetos reais",
        skills_applied_projects: "Projetos relacionados:",
        skills_tab_backend: "Backend & Concorrência",
        skills_tab_frontend: "Frontend & UI",
        skills_tab_database: "Banco de Dados & Cache",
        skills_tab_devops: "DevOps & Mensageria",
        skills_tab_integrations: "Integrações",
        skills_tab_cloud: "Cloud",
        skills_tab_apis: "APIs & Segurança",
        skills_tab_testing: "Testes & Qualidade",
        projects_title: "Projetos em Destaque",
        projects_subtitle: "Projetos reais com foco em desafios de engenharia, concorrência e consistência de dados.",
        project_scheduler_title: "Agendador de Tarefas Full-Stack",
        project_scheduler_desc: "Aplicação Full-Stack com separação estrita de camadas e foco em testabilidade. Possui autenticação stateless JWT, integração com PostgreSQL via Docker e cobertura abrangente de testes unitários com JUnit e Mockito, auditada via SonarQube para assegurar zero code smells e alta manutenibilidade.",
        project_clinic_title: "Sistema de Gestão Clínica e Financeira",
        project_clinic_desc: "Aplicação corporativa Full-Stack para gestão administrativa, financeira e operacional. Implementa controle rigoroso de concorrência em agendamentos via transações no PostgreSQL, mecanismos de idempotência com Redis para evitar requisições duplicadas e processamento assíncrono resiliente a falhas com BullMQ.",
        project_wedding_title: "Plataforma de Pagamentos em Produção",
        project_wedding_desc: "Plataforma web em produção utilizada com recebimento real de transações financeiras via Mercado Pago. Focada em integridade transacional, consumo assíncrono de Webhooks com retentativas, validação de segurança via e-mail e persistência ACID com PostgreSQL.",
        project_wedding_host: "Hospedado na Vercel (Frontend) e no Railway (Backend).",
        project_synfonia_title: "Synfonia — Plataforma Musical Imersiva",
        project_synfonia_desc: "Plataforma de mídia premium focada em segurança defensiva e performance. Apresenta Rate Limiting via Bucket4j, blindagem contra vulnerabilidades IDOR/BOLA, persistência híbrida (PostgreSQL para integridade relacional e MongoDB para documentos) e autenticação segura via OAuth2 com Spotify.",
        project_view_github: "Ver Código GitHub",
        project_view_site: "Ver Site",
        cert_title: "Meus Certificados",
        cert_subtitle: "Certificações acadêmicas e de especialização profissional.",
        cert_agile: "Metodologias Ágeis",
        cert_java_spring: "Java & Spring Boot",
        cert_database: "Banco de Dados",
        cert_frontend_ai: "Front-End com IA",
        cert_web_arch_ai: "Arquitetura Web com IA",
        contact_title: "Contato",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_location_label: "Bahia, Brasil",
        footer_rights: "© 2026 João Paulo Santana. Todos os direitos reservados.",
        modal_certificate: "Certificado",
        modal_close: "Fechar (Esc)",
        certificates_view: "Abrir na Web",
        skills_categories: {
            backend: {
                title: "Backend, Concorrência & Arquitetura",
                subtitle: "Design de APIs RESTful, concorrência, idempotência e microsserviços",
                icon: "server",
                items: [
                    {
                        name: "Controle de Concorrência & Idempotência",
                        level: "Engenharia Core",
                        description: "Implementação de bloqueios no banco de dados para prevenção de race conditions/double booking e mecanismos de idempotência com chaves temporizadas em Redis para eliminar requisições duplicadas.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" },
                            { name: "Plataforma de Casamento", url: "#projects" }
                        ]
                    },
                    {
                        name: "Java 17/21 & Spring Boot 3",
                        level: "Especialização",
                        description: "Arquitetura em camadas (Controller, Service, Repository), Inversão de Controle (IoC), Spring Data JPA, segurança stateless e construção de Web APIs resilientes e escaláveis.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Plataforma de Casamento", url: "#projects" },
                            { name: "Agendador Full-Stack", url: "#projects" }
                        ]
                    },
                    {
                        name: "TypeScript, Node.js & NestJS",
                        level: "Produção",
                        description: "Desenvolvimento de APIs robustas utilizando padrões corporativos, injeção de dependência nativa, validações de payload com Pipes/DTOs e integração ORM com Prisma.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    },
                    {
                        name: "Python & FastAPI",
                        level: "Backend Assíncrono",
                        description: "Criação de Web APIs assíncronas de alto desempenho com tipagem estática via Pydantic, SQLAlchemy, execução de background jobs e suítes completas de testes automatizados.",
                        projects: []
                    },
                    {
                        name: "Princípios SOLID & Clean Code",
                        level: "Fundamentos",
                        description: "Aplicação rigorosa de responsabilidade única, aberto/fechado, substituição de Liskov, segregação de interfaces e inversão de dependência em bases de código complexas.",
                        projects: [
                            { name: "Monitoria POO - IFS", url: "#timeline" },
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    }
                ]
            },
            frontend: {
                title: "Front-End & Interfaces Reativas",
                subtitle: "Arquitetura de componentes reutilizáveis, gerenciamento de estado e UX moderna",
                icon: "code2",
                items: [
                    {
                        name: "React & TypeScript",
                        level: "Em Produção",
                        description: "Construção de SPAs modernas e tipadas, arquitetura orientada a componentes, controle de formulários complexos e consumo eficiente de APIs REST.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" },
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Gerenciamento de Estado (Context API & Hooks)",
                        level: "Arquitetura",
                        description: "Centralização de estados globais através de múltiplos contextos e hooks customizados para sincronização de dados e reprodução multimídia em tempo real.",
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
                            { name: "Plataforma de Casamento", url: "#projects" }
                        ]
                    },
                    {
                        name: "Comunicação em Tempo Real (Socket.IO)",
                        level: "Interatividade",
                        description: "Atualização bidirecional de eventos e sincronização instantânea de estado da aplicação sem necessidade de pooling HTTP.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    }
                ]
            },
            database: {
                title: "Bancos de Dados, Cache & Persistência",
                subtitle: "Modelagem relacional transacional, cache em memória e NoSQL",
                icon: "database",
                items: [
                    {
                        name: "PostgreSQL & Modelagem Relacional (SQL)",
                        level: "ACID Transacional",
                        description: "Modelagem entidade-relacionamento (DER), integridade referencial, consultas otimizadas, transações ACID e bloqueios para prevenção de concorrência.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" },
                            { name: "Plataforma de Casamento", url: "#projects" },
                            { name: "Synfonia", url: "#projects" }
                        ]
                    },
                    {
                        name: "Redis (Cache, Filas & Idempotência)",
                        level: "Em Memória",
                        description: "Utilização do Redis como chave-valor de alta velocidade para deduplicação idempotente de requisições, armazenamento de sessões e backend de mensageria.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    },
                    {
                        name: "MongoDB",
                        level: "NoSQL Documental",
                        description: "Modelagem orientada a documentos para armazenamento não estruturado de metadados, catálogo de mídias e logs de auditoria.",
                        projects: [
                            { name: "Synfonia", url: "#projects" }
                        ]
                    }
                ]
            },
            devops: {
                title: "DevOps, Mensageria & Infraestrutura",
                subtitle: "Filas assíncronas, containerização padronizada e automação CI/CD",
                icon: "wrench",
                items: [
                    {
                        name: "Processamento Assíncrono (BullMQ & Amazon SQS)",
                        level: "Mensageria",
                        description: "Arquitetura orientada a filas de tarefas em segundo plano com suporte a retentativas exponenciais, dead-letter queues e processamento paralelo distribuído.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    },
                    {
                        name: "Docker & Docker Compose",
                        level: "Ambiente",
                        description: "Criação de imagens otimizadas para microserviços e orquestração multi-container padronizada entre desenvolvimento, homologação e produção.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" },
                            { name: "Synfonia", url: "#projects" }
                        ]
                    },
                    {
                        name: "Git & GitHub Actions (CI/CD)",
                        level: "Automação",
                        description: "Pipelines automatizados de integração contínua (CI) e entrega contínua (CD) para execução de suíte de testes, verificação de build e deploy em nuvem.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Agendador Full-Stack", url: "#projects" }
                        ]
                    }
                ]
            },
            integrations: {
                title: "Integrações, Pagamentos & Webhooks",
                subtitle: "Consumo de Web APIs de terceiros, gateways de pagamento e eventos assíncronos",
                icon: "plug",
                items: [
                    {
                        name: "Mercado Pago SDK & Webhooks",
                        level: "Pagamentos em Produção",
                        description: "Checkout transparente com recebimento via Pix e cartão, e tratamento assíncrono tolerante a falhas de notificações de Webhook para liquidação transacional.",
                        projects: [
                            { name: "Plataforma de Casamento", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring RestClient & OAuth2 (Spotify API)",
                        level: "APIs Externas",
                        description: "Consumo eficiente de Web APIs RESTful com Spring RestClient, fluxo seguro de autenticação OAuth2 e agregação de dados multimídia.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            cloud: {
                title: "Cloud & Hospedagem",
                subtitle: "Deploy distribuído, monitoramento de serviços e provisionamento em nuvem",
                icon: "cloud",
                items: [
                    {
                        name: "Railway & Microsoft Azure",
                        level: "Cloud Backend",
                        description: "Implantação e gerenciamento de aplicações backend conteinerizadas via Docker, gerenciamento seguro de secrets/variáveis e bancos gerenciados.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Plataforma de Casamento", url: "#projects" }
                        ]
                    },
                    {
                        name: "Vercel & Netlify",
                        level: "Cloud Frontend",
                        description: "Distribuição global e escalabilidade estática de aplicações React/SPAs integradas a pipelines automatizados orientados a Git.",
                        projects: [
                            { name: "Plataforma de Casamento", url: "#projects" }
                        ]
                    }
                ]
            },
            apis: {
                title: "APIs REST, Idempotência & Segurança",
                subtitle: "Design de contratos, segurança defensiva e mitigação de vulnerabilidades",
                icon: "key",
                items: [
                    {
                        name: "Mecanismos de Idempotência",
                        level: "Confiabilidade",
                        description: "Implementação de cabeçalhos de idempotência com controle de ciclo de vida no Redis para garantir que requisições repetidas não causem mutações duplicadas.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    },
                    {
                        name: "Segurança Stateless (JWT, Argon2 & RBAC)",
                        level: "Segurança Defensiva",
                        description: "Arquitetura de autenticação stateless com tokens JWT, hashing seguro de senhas com Argon2, controle de acesso baseado em papéis (RBAC) e proteção contra IDOR/BOLA.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    },
                    {
                        name: "Rate Limiting & Mitigação de Abusos",
                        level: "Proteção de Borda",
                        description: "Implementação de limitação de taxa de requisições por IP e usuário (Token Bucket com Bucket4j) para defesa contra ataques de negação de serviço e scraping.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            testing: {
                title: "Testes Automatizados & Qualidade de Software",
                subtitle: "Pirâmide de testes, cobertura contínua e análise estática de código",
                icon: "flaskConical",
                items: [
                    {
                        name: "JUnit 5 & Mockito",
                        level: "Testes Unitários & Integração",
                        description: "Desenvolvimento de suítes de testes unitários e de integração em Java, isolamento de dependências com Mocks e aplicação estrita do padrão AAA (Arrange, Act, Assert).",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Agendador Full-Stack", url: "#projects" }
                        ]
                    },
                    {
                        name: "Jest, Vitest & Pytest",
                        level: "Testes Automatizados",
                        description: "Criação de testes unitários e de integração em Node/TypeScript e Python com foco em cobertura de regras de negócio, mocks de serviços externos e testes E2E.",
                        projects: [
                            { name: "Sistema de Gestão Clínica", url: "#projects" }
                        ]
                    },
                    {
                        name: "SonarQube & Análise Estática",
                        level: "Qualidade Contínua",
                        description: "Inspeção estática contínua de código para controle de métricas de cobertura, eliminação de code smells, débito técnico e prevenção de vulnerabilidades de segurança.",
                        projects: [
                            { name: "Agendador Full-Stack", url: "#projects" }
                        ]
                    }
                ]
            }
        }
    },
    en: {
        page_title: "DevPortfolio | João Paulo - Full-Stack Software Engineer",
        nav_about: "About",
        nav_timeline: "Timeline",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_certificates: "Certificates",
        nav_contact: "Get in touch",
        hero_greeting: "Hello, I am João Paulo,",
        hero_role: "Software Engineer | Full-Stack Developer",
        hero_description: "Building resilient distributed systems and APIs, focused on asynchronous processing, data integrity, concurrency control, and idempotency — applying solid, stack-agnostic software engineering.",
        hero_projects_btn: "View my projects",
        hero_contact_btn: "Get in touch",
        about_title: "About Me",
        about_description1: "I am an Information Systems undergraduate at IFS, an academic teaching assistant in Object-Oriented Programming and Data Structures, and an active software developer building production systems. My engineering is driven by core computer science fundamentals: efficient algorithms, Big-O complexity analysis, clean architecture patterns, and thoroughly tested code.",
        about_description2: "I work across the full lifecycle: from architecting resilient backends — using message queues, asynchronous processing, Redis caching, and relational/NoSQL databases — to modern, reactive web interfaces. My focus goes beyond specific tools: solving real-world challenges in concurrency, transactional consistency, and system performance with technical rigor.",
        timeline_title: "My Journey",
        timeline_2020_title: "First Steps with Programming & Logic",
        timeline_2020_description: "My initial immersion into computing happened in 2020, writing my first lines of code and establishing foundational skills in programming logic and core algorithms.",
        timeline_2025_title: "Bachelor's Degree in Information Systems — IFS",
        timeline_2025_description: "Enrolled at the Federal Institute of Sergipe (IFS). Systematic study of theoretical computer science, operating systems, databases, and software architecture shaped my engineering mindset.",
        timeline_poo_title: "Teaching Assistant: Object-Oriented Programming — IFS",
        timeline_poo_description: "Official undergraduate teaching assistant for Java and OOP at IFS, tutoring students in SOLID principles, Clean Code, abstraction, polymorphism, and architectural design patterns.",
        timeline_dsa_title: "Teaching Assistant: Data Structures I — IFS",
        timeline_dsa_description: "Tutoring university students on implementing and manipulating linear and non-linear data structures: linked lists, stacks, queues, binary trees, and hash tables, focusing on memory allocation and data organization.",
        timeline_production_title: "Production Engineering: Concurrency & Messaging (2026)",
        timeline_production_description: "Building production-grade applications with microservice architecture, asynchronous queue processing (BullMQ & Amazon SQS), database concurrency control, and Redis idempotency.",
        timeline_evolution: "Always evolving...",
        skills_title: "Skills & Fundamentals",
        skills_backend: "Backend & Concurrency",
        skills_db: "Databases & Redis",
        skills_devops: "Docker & Messaging",
        skills_frontend: "Front-End & Reactive UI",
        skills_services: "Integrations & Webhooks",
        skills_cloud: "Cloud & Deployment",
        skills_apis: "REST APIs & Idempotency",
        skills_quality: "Testing & Code Quality",
        skills_click_hint: "Click to view practical usage →",
        skills_modal_subtitle: "Practical application of these fundamentals and technologies in real-world systems",
        skills_applied_projects: "Related projects:",
        skills_tab_backend: "Backend & Concurrency",
        skills_tab_frontend: "Frontend & UI",
        skills_tab_database: "Databases & Cache",
        skills_tab_devops: "DevOps & Messaging",
        skills_tab_integrations: "Integrations",
        skills_tab_cloud: "Cloud",
        skills_tab_apis: "APIs & Security",
        skills_tab_testing: "Testing & Quality",
        projects_title: "Featured Projects",
        projects_subtitle: "Real-world projects focused on engineering challenges, concurrency, and data consistency.",
        project_scheduler_title: "Full-Stack Task Scheduler",
        project_scheduler_desc: "Full-Stack architecture featuring strict separation of concerns and testability. Features stateless JWT authentication, Dockerized PostgreSQL integration, and comprehensive test coverage with JUnit and Mockito, continuously audited via SonarQube for zero code smells and high maintainability.",
        project_clinic_title: "Clinical & Financial Management Platform",
        project_clinic_desc: "Full-Stack enterprise platform for administrative, financial, and operational clinic management. Features robust scheduling concurrency control via PostgreSQL transactions, Redis idempotency mechanisms to eliminate duplicate requests, and fault-tolerant background processing with BullMQ.",
        project_wedding_title: "Production Payment Platform",
        project_wedding_desc: "Production web platform processing live financial transactions via Mercado Pago. Focused on transactional integrity, fault-tolerant asynchronous webhook consumption with retries, email security verification, and ACID persistence with PostgreSQL.",
        project_wedding_host: "Hosted on Vercel (Frontend) and Railway (Backend).",
        project_synfonia_title: "Synfonia — Immersive Audio Platform",
        project_synfonia_desc: "Premium media platform built for defensive security and performance. Features Token Bucket Rate Limiting (Bucket4j), IDOR/BOLA vulnerability mitigation, hybrid persistence (PostgreSQL for relational integrity and MongoDB for documents), and OAuth2 authentication with Spotify.",
        project_view_github: "View GitHub Code",
        project_view_site: "View Live Site",
        cert_title: "My Certificates",
        cert_subtitle: "Academic and professional specialization certifications.",
        cert_agile: "Agile Methodologies",
        cert_java_spring: "Java & Spring Boot",
        cert_database: "Databases",
        cert_frontend_ai: "Front-End with AI",
        cert_web_arch_ai: "Web Architecture with AI",
        contact_title: "Contact",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
        contact_location_label: "Bahia, Brazil",
        footer_rights: "© 2026 João Paulo Santana. All rights reserved.",
        modal_certificate: "Certificate",
        modal_close: "Close (Esc)",
        certificates_view: "Open on Web",
        skills_categories: {
            backend: {
                title: "Backend, Concurrency & Architecture",
                subtitle: "RESTful API design, concurrency, idempotency, and microservices",
                icon: "server",
                items: [
                    {
                        name: "Concurrency Control & Idempotency",
                        level: "Core Engineering",
                        description: "Implementing database locks to eliminate race conditions/double booking and Redis-backed idempotency mechanisms to guarantee safe request retries without duplicate mutations.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" },
                            { name: "Wedding Payment Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Java 17/21 & Spring Boot 3",
                        level: "Specialization",
                        description: "Layered architecture (Controller, Service, Repository), Inversion of Control (IoC), Spring Data JPA, stateless security, and high-performance Web APIs.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Wedding Payment Platform", url: "#projects" },
                            { name: "Full-Stack Scheduler", url: "#projects" }
                        ]
                    },
                    {
                        name: "TypeScript, Node.js & NestJS",
                        level: "In Production",
                        description: "Enterprise backend development featuring native dependency injection, modular design, payload validation via Pipes/DTOs, and Prisma ORM integration.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Python & FastAPI",
                        level: "Async Backend",
                        description: "High-performance asynchronous Web APIs with static typing via Pydantic, SQLAlchemy, background worker jobs, and automated test coverage.",
                        projects: []
                    },
                    {
                        name: "SOLID Principles & Clean Code",
                        level: "Fundamentals",
                        description: "Rigorous execution of Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion across complex codebases.",
                        projects: [
                            { name: "OOP Teaching Assistant - IFS", url: "#timeline" },
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    }
                ]
            },
            frontend: {
                title: "Frontend & Reactive User Interfaces",
                subtitle: "Component-driven design, state management, and modern UX",
                icon: "code2",
                items: [
                    {
                        name: "React & TypeScript",
                        level: "In Production",
                        description: "Building modern typed SPAs, reusable component hierarchy, complex form state handling, and optimized REST API data fetching.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" },
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "State Management (Context API & Hooks)",
                        level: "Architecture",
                        description: "Centralizing global state across decoupled contexts and custom hooks for real-time media synchronization and application workflows.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" }
                        ]
                    },
                    {
                        name: "Tailwind CSS & Responsive Design",
                        level: "UI/UX",
                        description: "Advanced utility styling, dynamic theme toggling (Dark Mode), accessible components, smooth animations, and fluid multi-device layouts.",
                        projects: [
                            { name: "Synfonia Frontend", url: "#projects" },
                            { name: "Wedding Payment Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Real-Time Communication (Socket.IO)",
                        level: "Interactivity",
                        description: "Bidirectional WebSocket communication for instant state sync and real-time user notification workflows.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    }
                ]
            },
            database: {
                title: "Databases, Caching & Persistence",
                subtitle: "ACID relational modeling, in-memory caching, and document storage",
                icon: "database",
                items: [
                    {
                        name: "PostgreSQL & Relational Data Modeling (SQL)",
                        level: "ACID Transactions",
                        description: "Entity-Relationship modeling (ERD), referential integrity, query optimization, ACID transactions, and database-level row locking for concurrency safety.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" },
                            { name: "Wedding Payment Platform", url: "#projects" },
                            { name: "Synfonia", url: "#projects" }
                        ]
                    },
                    {
                        name: "Redis (Cache, Queues & Idempotency)",
                        level: "In-Memory",
                        description: "Using Redis for ultra-low latency key-value caching, request deduplication tokens (idempotency), session management, and message queue storage.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "MongoDB",
                        level: "Document NoSQL",
                        description: "Document-oriented modeling for flexible unstructured metadata, media catalog indexing, and audit logging.",
                        projects: [
                            { name: "Synfonia", url: "#projects" }
                        ]
                    }
                ]
            },
            devops: {
                title: "DevOps, Messaging & Infrastructure",
                subtitle: "Asynchronous background queues, containerization, and CI/CD automation",
                icon: "wrench",
                items: [
                    {
                        name: "Asynchronous Processing (BullMQ & Amazon SQS)",
                        level: "Message Queues",
                        description: "Producer-consumer queue architectures with exponential backoff retries, dead-letter fallbacks, and distributed job execution.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Docker & Docker Compose",
                        level: "Environment",
                        description: "Creating optimized container images and multi-container development and production orchestration for seamless environment parity.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" },
                            { name: "Synfonia", url: "#projects" }
                        ]
                    },
                    {
                        name: "Git & GitHub Actions (CI/CD)",
                        level: "Automation",
                        description: "Continuous integration (CI) and continuous delivery (CD) pipelines automating test suites, build validations, and push-to-cloud deployments.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Full-Stack Scheduler", url: "#projects" }
                        ]
                    }
                ]
            },
            integrations: {
                title: "Integrations, Payments & Webhooks",
                subtitle: "Third-party Web APIs, payment gateways, and asynchronous event consumption",
                icon: "plug",
                items: [
                    {
                        name: "Mercado Pago SDK & Webhooks",
                        level: "Production Payments",
                        description: "Transparent checkout with Pix and Credit Card payment integration, plus fault-tolerant asynchronous webhook notification processing.",
                        projects: [
                            { name: "Wedding Payment Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Spring RestClient & OAuth2 (Spotify API)",
                        level: "External APIs",
                        description: "High-performance REST API consumption with Spring RestClient, OAuth2 authentication handshakes, and media aggregation.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            cloud: {
                title: "Cloud & Hosting Platforms",
                subtitle: "Distributed deployments, cloud secrets management, and automated provisioning",
                icon: "cloud",
                items: [
                    {
                        name: "Railway & Microsoft Azure",
                        level: "Backend Cloud",
                        description: "Deploying and scaling containerized backend services via Docker, managing environment security, and provisioning managed PostgreSQL instances.",
                        projects: [
                            { name: "Synfonia", url: "#projects" },
                            { name: "Wedding Payment Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Vercel & Netlify",
                        level: "Frontend Cloud",
                        description: "Global static asset and SPA distribution with instant Git-triggered deployments and CDN caching.",
                        projects: [
                            { name: "Wedding Payment Platform", url: "#projects" }
                        ]
                    }
                ]
            },
            apis: {
                title: "REST APIs, Idempotency & Security",
                subtitle: "API contract engineering, defensive security, and vulnerability mitigation",
                icon: "key",
                items: [
                    {
                        name: "Idempotency Architecture",
                        level: "Reliability",
                        description: "Designing idempotency keys and Redis TTL caching to ensure retry-safe network operations without double execution of critical business logic.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Stateless Security (JWT, Argon2 & RBAC)",
                        level: "Defensive Security",
                        description: "Stateless authentication via JWT, robust password hashing with Argon2, Role-Based Access Control (RBAC), and IDOR/BOLA mitigations.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "Rate Limiting & Abuse Defense",
                        level: "Edge Defense",
                        description: "Configuring Token Bucket rate limiters (Bucket4j) per client IP and user account to protect endpoints against brute force and DoS.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" }
                        ]
                    }
                ]
            },
            testing: {
                title: "Automated Testing & Software Quality",
                subtitle: "Test pyramid, automated coverage, and static code inspection",
                icon: "flaskConical",
                items: [
                    {
                        name: "JUnit 5 & Mockito",
                        level: "Unit & Integration Tests",
                        description: "Developing comprehensive unit and integration test suites in Java, dependency mocking, and strict adherence to the AAA (Arrange, Act, Assert) pattern.",
                        projects: [
                            { name: "Synfonia Backend", url: "#projects" },
                            { name: "Full-Stack Scheduler", url: "#projects" }
                        ]
                    },
                    {
                        name: "Jest, Vitest & Pytest",
                        level: "Automated Testing",
                        description: "Writing unit and integration tests across Node/TypeScript and Python ecosystems covering critical business logic and API contracts.",
                        projects: [
                            { name: "Clinical Management Platform", url: "#projects" }
                        ]
                    },
                    {
                        name: "SonarQube & Static Analysis",
                        level: "Quality Assurance",
                        description: "Continuous automated static code inspection tracking coverage metrics, code smell resolution, and software debt management.",
                        projects: [
                            { name: "Full-Stack Scheduler", url: "#projects" }
                        ]
                    }
                ]
            }
        }
    }
};
