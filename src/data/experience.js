export const experience = [
  {
    id: 'uello',
    company: 'Uello',
    pt: {
      role: 'Engenheiro de Dados',
      period: 'Set 2021 — Presente',
      location: 'São Paulo, Brasil',
      bullets: [
        'Otimizei transformações no BigQuery com batch + views near real-time, reduzindo custos de processamento em ~95% sem perder frescor das métricas de negócio.',
        'Liderei a migração do ecossistema legado dbt + Airflow para Dataform nativo no BigQuery, com Arquitetura Medallion (Bronze → Gold).',
        'Construí pipelines CDC (MySQL, REST APIs, Google Sheets) para BigQuery e mantive ELT/ETL modular em SQL, Python e JavaScript.',
        'Migramos a orquestração do Cloud Composer para Airflow self-managed no GKE, junto com a equipe de plataforma.',
        'Levei analytics para dentro do produto SaaS com Streamlit — dashboards por cliente, integrados à plataforma.',
        'Garanti qualidade e governança com testes, documentação de tabelas, CI/CD e IAM nos datasets GCP.',
        'Estou introduzindo IA na engenharia (agentes na IDE, skills e colaboração entre agentes/projetos) e uma base de conhecimento retroalimentada pelo time — wiki viva ainda em andamento.',
      ],
    },
    en: {
      role: 'Data Engineer',
      period: 'Sep 2021 — Present',
      location: 'São Paulo, Brazil',
      bullets: [
        'Optimized BigQuery transformations with batch scheduling plus near real-time views, cutting processing costs by ~95% while keeping business metrics fresh.',
        'Led the migration from a legacy dbt + Airflow stack to native Dataform on BigQuery, implementing Medallion Architecture (Bronze → Gold).',
        'Built CDC replication workflows (MySQL, REST APIs, Google Sheets) into BigQuery and maintained modular ELT/ETL in SQL, Python, and JavaScript.',
        'Moved orchestration from Cloud Composer to self-managed Airflow on GKE, in partnership with the platform team.',
        'Brought analytics into the SaaS product with Streamlit — per-client dashboards embedded in the platform.',
        'Kept quality and governance in place with tests, table-level docs, CI/CD, and IAM on GCP datasets.',
        'Introducing AI into engineering (IDE agents, skills, and collaboration across agents/projects) and a contributor-fed knowledge base — a living wiki still in progress.',
      ],
    },
  },
  {
    id: 'bndes',
    company: 'BNDES',
    pt: {
      role: 'Estagiário de TI',
      period: 'Jan 2020 — Jul 2021',
      location: 'Rio de Janeiro, Brasil',
      bullets: [
        'Atuei na manutenção e evolução de funcionalidades backend das plataformas do banco, com Java e SQL Server, em ambiente de instituição financeira.',
        'Implementei o Cypress do zero e passei a cobrir fluxos críticos com testes end-to-end.',
        'Adotei TDD e BDD com Cucumber em Java, integrando os testes ao ciclo de entrega do time (Git e Jenkins).',
      ],
    },
    en: {
      role: 'IT Intern',
      period: 'Jan 2020 — Jul 2021',
      location: 'Rio de Janeiro, Brazil',
      bullets: [
        'Worked on maintaining and evolving backend features for the bank’s platforms, using Java and SQL Server in a financial-institution environment.',
        'Implemented Cypress from scratch and started covering critical flows with end-to-end tests.',
        'Introduced TDD and BDD with Cucumber in Java, wiring tests into the team’s delivery cycle (Git and Jenkins).',
      ],
    },
  },
];
