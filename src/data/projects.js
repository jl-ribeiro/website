export const allProjects = {
  'wiki-agentes-ia': {
    architectureDiagram: '/diagrama-wiki-agentes.png',
    inProgress: true,
    tags: [
      'AI Agents',
      'IDE Skills',
      'Knowledge Base',
      'Data Catalog',
      'Documentation',
    ],
    linkGit: '#',
    pt: {
      title: 'Wiki viva e agentes na IDE',
      highlight: 'Wiki viva · agentes na IDE',
      subtitle:
        'IA na engenharia — agentes, skills e uma base de conhecimento retroalimentada pelo time, rumo a uma wiki ponta a ponta da empresa.',
      summary:
        'Na Uello estamos começando a usar agentes de IA na IDE (skills, colaboração entre agentes e entre projetos) para acelerar entregas com mais contexto. Em paralelo, construímos uma base de conhecimento escrita e revisada pelos colaboradores — o embrião de uma wiki para a empresa entender processos de ponta a ponta, e para analistas de dados compreenderem as tabelas e os dados usados nos pipelines e nos fluxos internos. Este case ainda está em andamento: descreve o desenho e o que já está sendo implantado, não um resultado fechado.',
      challenge: [
        'Conhecimento de processos, pipelines e tabelas vive em pessoas, tickets e repositórios — difícil de achar e fácil de ficar desatualizado.',
        'Analistas precisam entender origem, significado e uso das tabelas nos fluxos internos, sem depender só de conversa com engenharia.',
        'Agentes na IDE só geram valor se tiverem contexto real (skills, convenções, lineage). Sem uma base viva, eles alucinam o processo.',
      ],
      myContribution: [
        'Estou ajudando a introduzir agentes na IDE no dia a dia de engenharia, com skills e colaboração entre agentes e projetos.',
        'Estamos estruturando uma base de conhecimento retroalimentada pelo colaborador — documentação de processos, pipelines e tabelas que volta para o time e, no futuro, para a wiki da empresa.',
        'O objetivo é ligar o contexto operacional (como o dado flui) ao catálogo analítico (o que cada tabela significa), para analistas e engenharia falarem a mesma língua.',
      ],
      techDeepDive: [
        {
          title: 'Agentes, skills e colaboração',
          description:
            'O uso de IA na IDE não é um chatbot genérico: são agentes com skills do domínio (pipelines, SQL, padrões internos) e colaboração entre agentes e entre repositórios/projetos. A hipótese é gerar mais impacto nas entregas porque o agente opera com o mesmo contexto que o time — não só com o arquivo aberto.',
        },
        {
          title: 'Base de conhecimento retroalimentada',
          description:
            'A wiki futura não começa como um portal institucional. Começa com o colaborador documentando o que já existe nos fluxos: processos ponta a ponta, tabelas dos pipelines e dados usados internamente. Essa base alimenta tanto pessoas (analistas, novos no time) quanto os próprios agentes (skills e contexto). O ciclo é deliberado: quem opera o processo atualiza a fonte da verdade.',
        },
      ],
      results: [
        'Iniciativa em andamento — ainda sem KPI de produção fechado.',
        'Direção: wiki empresarial com visão ponta a ponta dos processos internos.',
        'Direção: analistas capazes de compreender tabelas e dados dos pipelines sem depender só de engenharia.',
        'Direção: agentes e skills na IDE operando sobre essa base, para entregar com mais contexto e menos retrabalho.',
      ],
    },
    en: {
      title: 'Living wiki and IDE agents',
      highlight: 'Living wiki · IDE agents',
      subtitle:
        'AI in engineering — agents, skills, and a contributor-fed knowledge base, toward an end-to-end company wiki.',
      summary:
        'At Uello we are starting to use AI agents in the IDE (skills, collaboration across agents and projects) to ship with more context and impact. In parallel we are building a knowledge base written and maintained by contributors — the seed of a company wiki so people can understand end-to-end processes, and so data analysts can understand the tables and data used in pipelines and internal flows. This case is still in progress: it describes the design and what is being put in place, not a closed production result.',
      challenge: [
        'Process, pipeline, and table knowledge lives in people, tickets, and repos — hard to find and easy to go stale.',
        'Analysts need to understand where tables come from, what they mean, and how they are used — without relying only on hallway conversations with engineering.',
        'IDE agents only add value with real context (skills, conventions, lineage). Without a living base, they guess the process.',
      ],
      myContribution: [
        'I am helping introduce IDE agents into day-to-day engineering, with skills and collaboration across agents and projects.',
        'We are structuring a contributor-fed knowledge base — documentation of processes, pipelines, and tables that feeds back to the team and, later, a company wiki.',
        'The goal is to connect operational context (how data flows) to the analytical catalog (what each table means), so analysts and engineering share the same language.',
      ],
      techDeepDive: [
        {
          title: 'Agents, skills, and collaboration',
          description:
            'IDE AI here is not a generic chatbot: it is agents with domain skills (pipelines, SQL, internal patterns) and collaboration across agents and repositories/projects. The bet is more impact on delivery because the agent works with the same context the team has — not only the file currently open.',
        },
        {
          title: 'A contributor-fed knowledge base',
          description:
            'The future wiki does not start as a corporate portal. It starts with people documenting what already exists in the flows: end-to-end processes, pipeline tables, and data used internally. That base feeds both humans (analysts, newcomers) and the agents themselves (skills and context). The loop is intentional: whoever runs the process updates the source of truth.',
        },
      ],
      results: [
        'Work in progress — no closed production KPI yet.',
        'Direction: a company wiki with end-to-end visibility of internal processes.',
        'Direction: analysts able to understand pipeline tables and data without depending only on engineering.',
        'Direction: IDE agents and skills operating on that base, so delivery happens with more context and less rework.',
      ],
    },
  },
  'otimizacao-dataform': {
    architectureDiagram: '/diagrama-dataform.png',
    featured: true,
    tags: [
      'Google Dataform',
      'BigQuery',
      'FinOps',
      'Medallion Arch.',
      'CI/CD',
    ],
    linkGit: '#',
    pt: {
      title: 'Otimização de Data Warehouse com Dataform',
      highlight: '30% de redução de custo · 50% mais rápido',
      subtitle:
        'Migração completa para Dataform com views near real-time e atualização em lote — 30% menos custo e 50% menos tempo de atualização.',
      summary:
        'Este projeto aborda a reestruturação completa de um Data Warehouse no BigQuery, migrando um pipeline legado e custoso de dbt + Airflow para uma solução nativa e eficiente com Google Dataform, combinando processamento em lote e views near real-time.',
      challenge: [
        'A arquitetura anterior, baseada em dbt e Airflow, era insustentável, com custos de processamento elevados e desnecessários.',
        'Muitas tabelas não eram mais utilizadas, mas ainda consumiam recursos.',
        'O tempo de atualização do Data Warehouse completo impactava a agilidade do negócio.',
      ],
      myContribution: [
        'Liderei o projeto de redesenho do Data Warehouse do zero.',
        'Implementei a Arquitetura Medallion (Bronze, Silver, Gold) para garantir a governança e qualidade dos dados.',
        'Combinei atualização em lote com views near real-time para equilibrar custo e frescor dos dados.',
        'Utilizei JavaScript dentro do Dataform para modularizar e reutilizar regras de negócio complexas.',
        'Garanti uma migração segura e validada, sem perda de dados.',
      ],
      techDeepDive: [
        {
          title: 'Modelagem Nativa no BigQuery',
          description:
            'Ao adotar o Dataform, eliminamos a dependência do Airflow para orquestrar o dbt, aproveitando a integração nativa e gratuita do BigQuery. Isso simplificou a stack e reduziu o tempo de atualização do Data Warehouse em 50%.',
        },
        {
          title: 'Batch + Views Near Real-Time',
          description:
            'Desenhamos um modelo híbrido: tabelas atualizadas em lote para cargas analíticas e views near real-time para métricas de negócio que precisam de frescor imediato — o que viabilizou a redução de ~30% nos custos de processamento.',
        },
        {
          title: 'Modularização com JavaScript',
          description:
            'Regras de negócio que se repetiam em vários modelos foram encapsuladas em funções JavaScript, importadas diretamente nos arquivos SQLX. Isso aumentou a manutenibilidade e reduziu a duplicação de código.',
        },
      ],
      results: [
        'Redução de ~30% nos custos de processamento do BigQuery.',
        'Redução de 50% no tempo de atualização do Data Warehouse.',
        'Melhora significativa na governança e manutenibilidade da base de dados.',
      ],
    },
    en: {
      title: 'DWH Optimization with Dataform',
      highlight: '30% Cost Reduction · 50% Faster Updates',
      subtitle:
        'Full migration to Dataform with near real-time views and batch updates — 30% lower costs and 50% faster DWH refreshes.',
      summary:
        'This project covers the complete restructuring of a BigQuery Data Warehouse, migrating a legacy and costly dbt + Airflow pipeline to a native and efficient solution with Google Dataform, combining batch processing and near real-time views.',
      challenge: [
        'The previous architecture, based on dbt and Airflow, was unsustainable, with high and unnecessary processing costs.',
        'Many tables were no longer in use but still consumed resources.',
        'The full Data Warehouse update time impacted business agility.',
      ],
      myContribution: [
        'I led the project to redesign the Data Warehouse from scratch.',
        'I implemented the Medallion Architecture (Bronze, Silver, Gold) to ensure data governance and quality.',
        'I combined batch updates with near real-time views to balance cost and data freshness.',
        'I used JavaScript within Dataform to modularize and reuse complex business rules.',
        'I ensured a secure and validated migration with no data loss.',
      ],
      techDeepDive: [
        {
          title: 'Native Modeling in BigQuery',
          description:
            "By adopting Dataform, we eliminated the dependency on Airflow to orchestrate dbt, leveraging BigQuery's native and free integration. This simplified the stack and cut Data Warehouse update time by 50%.",
        },
        {
          title: 'Batch + Near Real-Time Views',
          description:
            'We designed a hybrid model: batch-updated tables for analytical workloads and near real-time views for business metrics that need immediate freshness — enabling ~30% reduction in processing costs.',
        },
        {
          title: 'Modularization with JavaScript',
          description:
            'Business rules that were repeated across multiple models were encapsulated in JavaScript functions, imported directly into SQLX files. This increased maintainability and reduced code duplication.',
        },
      ],
      results: [
        '~30% reduction in BigQuery processing costs.',
        '50% reduction in Data Warehouse update time.',
        'Significant improvement in data governance and maintainability.',
      ],
    },
  },
  'ingestao-cdc': {
    architectureDiagram: '/diagrama-datastream-2.png',
    tags: [
      'Google Cloud',
      'Near Real-Time',
      'Cost Reduction',
      'CDC',
      'Airflow',
      'BigQuery',
    ],
    linkGit: '#',
    pt: {
      title: 'Ingestão de Baixa Latência com Datastream',
      highlight: '95% de redução nos custos de replicação',
      subtitle:
        'Pipeline CDC near real-time com Datastream — dados em minutos e 95% menos custo de replicação.',
      summary:
        'Desenvolvi uma arquitetura de ingestão de dados utilizando Change Data Capture (CDC) para replicar dados de um banco transacional (MySQL) para um ambiente analítico (BigQuery) de maneira rápida, confiável e econômica. A solução foi projetada para minimizar o tempo de latência e custos operacionais, oferecendo uma solução robusta e escalável.',
      challenge: [
        'A metodologia anterior gerava alto consumo de recursos do banco de dados transacional, elevando os custos de processamento.',
        'Durante o processo de replicação, ocorriam perdas de dados, comprometendo a integridade e a confiabilidade da informação.',
        'O tempo de replicação era excessivo para tabelas de grande volume, o que inviabilizava análises com dados atualizados em tempo real.',
      ],
      myContribution: [
        'Projetei e implementei uma solução nativa na Google Cloud, utilizando Datastream, Cloud Storage, Composer (Airflow) e BigQuery.',
        'Configurei a captura de logs binários (binlog) via CDC, exportando os dados no formato Avro para o Cloud Storage.',
        'Estruturei uma arquitetura em camadas — External Tables, Streaming Views e Raw Tables — garantindo acesso a dados em tempo real e ao mesmo tempo otimizado para análise em lotes. A orquestração de todo o pipeline é feita por meio de uma DAG no Cloud Composer (Airflow).',
      ],
      techDeepDive: [
        {
          title: 'Arquitetura de Tabelas Externas e Views',
          description:
            'O Datastream grava arquivos Avro diretamente no Cloud Storage. O BigQuery referencia esses arquivos por meio de Tabelas Externas, cobrindo dados de D-2 até o dia corrente, e constrói uma View que captura os registros mais recentes. Essa abordagem permite consultar dados atualizados em até 2 minutos, sem custos de processamento até o momento da execução da consulta. Em seguida, um processo de `merge select` transfere os dados para Raw Tables particionadas e clusterizadas, o que otimiza tanto os custos quanto o desempenho das consultas. A orquestração de todo o pipeline é feita por meio de uma DAG no Cloud Composer (Airflow).',
        },
      ],
      results: [
        'Redução de 95% nos custos de replicação de dados.',
        'Disponibilização dos dados para análise em minutos (near real-time), em vez de horas.',
        'Criação de uma arquitetura de ingestão modular, escalável e facilmente replicável para múltiplos clientes SaaS.',
      ],
    },
    en: {
      title: 'Low-Latency Ingestion with Datastream',
      highlight: '95% Reduction in Replication Costs',
      subtitle:
        'Near real-time CDC pipeline with Datastream — data in minutes and 95% lower replication costs.',
      summary:
        'Developed a Change Data Capture (CDC) data ingestion architecture to replicate data from a transactional database (MySQL) to an analytical environment (BigQuery) in a fast, reliable, and cost-effective manner. The solution was designed to minimize latency and operational costs while offering a robust and scalable approach.',
      challenge: [
        'The previous methodology consumed significant resources from the transactional database, driving up processing costs.',
        'Data loss during replication compromised information integrity and reliability.',
        'Replication time was too slow for large tables, making real-time data analysis unfeasible.',
      ],
      myContribution: [
        'Architected and implemented a native Google Cloud solution using Datastream, Cloud Storage, Composer (Airflow), and BigQuery.',
        'Set up CDC binlog capture to export data in Avro format to Cloud Storage.',
        'Designed a layered architecture — External Tables, Streaming Views, and Raw Tables — ensuring real-time access and optimized batch analysis.',
      ],
      techDeepDive: [
        {
          title: 'External Tables and Views Architecture',
          description:
            'Datastream writes Avro files directly to Cloud Storage. BigQuery references these files through External Tables, covering data from D-2 to the current day, and builds a View that extracts the latest records. This approach enables querying data updated within 2 minutes with zero processing cost until the query is executed. A `merge select` process then transfers the data to partitioned and clustered Raw Tables, optimizing both cost and query performance. The entire pipeline is orchestrated through a DAG in Cloud Composer (Airflow).',
        },
      ],
      results: [
        '95% reduction in data replication costs.',
        'Data available for analysis within minutes (near real-time) instead of hours.',
        'Creation of a modular, scalable, and easily replicable ingestion architecture for multiple SaaS clients.',
      ],
    },
  },
  'airflow-gke': {
    architectureDiagram: '/diagrama-airflow-gke.png',
    tags: [
      'Apache Airflow',
      'GKE',
      'Cloud Composer',
      'Kubernetes',
      'GCP',
      'Platform',
    ],
    linkGit: '#',
    pt: {
      title: 'Migração do Airflow: Cloud Composer → GKE',
      highlight: 'Orquestração self-managed no GKE',
      subtitle:
        'Migração do Airflow gerenciado no Cloud Composer para instância própria no GKE, em parceria com a equipe de plataforma.',
      summary:
        'Projeto conjunto com a equipe de plataforma para sair do Cloud Composer e operar o Apache Airflow de forma self-managed no Google Kubernetes Engine (GKE). O objetivo foi ganhar controle operacional, flexibilidade de configuração e alinhar a orquestração de dados à infraestrutura Kubernetes da empresa — incluindo a migração de DAGs, conexões e integrações com os demais ambientes.',
      challenge: [
        'O Cloud Composer, apesar de gerenciado, limitava flexibilidade de configuração, versionamento e custo operacional da orquestração.',
        'Era necessário manter a continuidade das pipelines de dados durante a troca de plataforma, sem interromper processos críticos.',
        'DAGs, conexões (Connections) e dependências com outros ambientes precisavam ser migrados de forma consistente e auditável.',
      ],
      myContribution: [
        'Trabalhei em conjunto com a equipe de plataforma para colocar a instância de Airflow no ar no GKE.',
        'Participei do planejamento e execução da migração das DAGs do Cloud Composer para o novo ambiente.',
        'Ajudei a migrar e validar conexões e integrações com os demais ambientes (dados, serviços e credenciais).',
        'Validei o funcionamento das pipelines após o cutover, garantindo que a orquestração seguisse estável no GKE.',
      ],
      techDeepDive: [
        {
          title: 'Do Composer gerenciado ao Airflow no GKE',
          description:
            'A migração envolveu provisionar e operar o Airflow sobre Kubernetes (GKE), em vez de depender do ambiente gerenciado do Cloud Composer. Isso aproximou a stack de dados da plataforma interna e abriu espaço para customizações de workers, imagens e políticas de deploy alinhadas ao restante da infraestrutura.',
        },
        {
          title: 'Migração de DAGs e Connections',
          description:
            'Além de subir o cluster/serviço, o trabalho crítico foi transferir o catálogo operacional: DAGs, Connections e integrações com outros ambientes. Cada conexão e dependência foi revisada para que as pipelines continuassem autenticando e falando com as mesmas fontes e destinos após a troca.',
        },
      ],
      results: [
        'Airflow operando de forma self-managed no GKE, com apoio da equipe de plataforma.',
        'DAGs e conexões migradas do Cloud Composer para o novo ambiente.',
        'Orquestração de dados alinhada à infraestrutura Kubernetes da empresa, com maior controle operacional.',
      ],
    },
    en: {
      title: 'Airflow Migration: Cloud Composer → GKE',
      highlight: 'Self-managed Orchestration on GKE',
      subtitle:
        'Migrated managed Cloud Composer Airflow to a self-hosted instance on GKE, in partnership with the platform team.',
      summary:
        'Joint project with the platform team to move off Cloud Composer and run Apache Airflow as a self-managed service on Google Kubernetes Engine (GKE). The goal was greater operational control, configuration flexibility, and alignment of data orchestration with the company’s Kubernetes infrastructure — including migration of DAGs, connections, and integrations with other environments.',
      challenge: [
        'Cloud Composer, while managed, limited configuration flexibility, versioning options, and operational cost control for orchestration.',
        'Data pipelines had to keep running during the platform switch, without interrupting critical workloads.',
        'DAGs, Connections, and dependencies with other environments needed a consistent, auditable migration.',
      ],
      myContribution: [
        'Worked with the platform team to bring the Airflow instance online on GKE.',
        'Helped plan and execute the migration of DAGs from Cloud Composer to the new environment.',
        'Helped migrate and validate connections and integrations with other environments (data sources, services, and credentials).',
        'Validated pipeline behavior after cutover to ensure stable orchestration on GKE.',
      ],
      techDeepDive: [
        {
          title: 'From Managed Composer to Airflow on GKE',
          description:
            'The migration meant provisioning and operating Airflow on Kubernetes (GKE) instead of relying on Cloud Composer’s managed environment. That brought the data stack closer to the internal platform and enabled customizations around workers, images, and deploy policies aligned with the rest of the infrastructure.',
        },
        {
          title: 'Migrating DAGs and Connections',
          description:
            'Beyond standing up the service, the critical work was transferring the operational catalog: DAGs, Connections, and integrations with other environments. Each connection and dependency was reviewed so pipelines kept authenticating and talking to the same sources and destinations after the switch.',
        },
      ],
      results: [
        'Airflow running as a self-managed service on GKE, with platform team partnership.',
        'DAGs and connections migrated from Cloud Composer to the new environment.',
        'Data orchestration aligned with the company’s Kubernetes infrastructure and stronger operational control.',
      ],
    },
  },
  'projeto-streamlit': {
    architectureDiagram: '/diagrama-streamlit.png',
    tags: [
      'Streamlit',
      'Embedded Analytics',
      'Python',
      'SaaS',
      'Cost Avoidance',
    ],
    linkGit: '#',
    pt: {
      title: 'Analytics Embarcado com Streamlit',
      highlight: 'Analytics embarcado no produto SaaS',
      subtitle:
        'Camada analítica embarcada em SaaS com Streamlit — eliminando o orçamento da Looker Platform.',
      summary:
        'Implementação de uma solução de analytics totalmente personalizada e embarcada para clientes de uma plataforma SaaS, utilizando Streamlit para contornar as limitações de permissões do Looker Studio e evitar o investimento na Looker Platform.',
      challenge: [
        'A plataforma SaaS precisava oferecer dashboards para seus clientes, mas o Looker Studio só permitia acesso a usuários com e-mails do mesmo domínio.',
        'Era inviável criar e gerenciar credenciais para cada cliente no ecossistema Google.',
        'A solução precisava ser personalizável por cliente e integrada à experiência do produto, sem consumir o orçamento previsto para Looker Platform.',
      ],
      myContribution: [
        'Pesquisei e validei o Streamlit como a solução ideal para o problema.',
        'Desenvolvi a arquitetura para servir os dashboards Streamlit de forma segura e integrada.',
        'Criei os dashboards, utilizando Python para tratamento e visualização de dados, com filtros e gráficos interativos.',
      ],
      techDeepDive: [
        {
          title: 'Flexibilidade com Python',
          description:
            'Ao sair do Looker Studio, ganhamos o poder do Python para o pré-processamento dos dados. Isso abriu um leque de oportunidades para aplicar transformações mais complexas e, no futuro, integrar modelos de machine learning diretamente nos dashboards, criando um verdadeiro produto de dados.',
        },
      ],
      results: [
        'Eliminação do orçamento/licenciamento previsto para Looker Platform.',
        'Dashboards 100% personalizáveis e integrados para clientes SaaS.',
        'Criação de uma base para futuros produtos de dados e ciência de dados dentro da plataforma.',
      ],
    },
    en: {
      title: 'Embedded Analytics with Streamlit',
      highlight: 'Embedded analytics in the SaaS product',
      subtitle:
        'Embedded SaaS analytics with Streamlit — eliminating the Looker Platform budget entirely.',
      summary:
        'Implementation of a fully customized and embedded analytics solution for clients of a SaaS platform, using Streamlit to bypass Looker Studio permission limitations and avoid Looker Platform licensing investment.',
      challenge: [
        'The SaaS platform needed to offer dashboards to its clients, but Looker Studio only allowed access to users with emails from the same domain.',
        'It was unfeasible to create and manage credentials for each client in the Google ecosystem.',
        'The solution had to be customizable per client and integrated into the product experience, without consuming the planned Looker Platform budget.',
      ],
      myContribution: [
        'I researched and validated Streamlit as the ideal solution to the problem.',
        'I developed the architecture to serve the Streamlit dashboards securely and in an integrated manner.',
        'I created the dashboards, using Python for data processing and visualization, with interactive filters and charts.',
      ],
      techDeepDive: [
        {
          title: 'Flexibility with Python',
          description:
            'By moving away from Looker Studio, we gained the power of Python for data preprocessing. This opened up a range of opportunities to apply more complex transformations and, in the future, integrate machine learning models directly into the dashboards, creating a true data product.',
        },
      ],
      results: [
        'Eliminated the planned Looker Platform licensing budget.',
        '100% customizable and integrated dashboards for SaaS clients.',
        'Creation of a foundation for future data and data science products within the platform.',
      ],
    },
  },
};
