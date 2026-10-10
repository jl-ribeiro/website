import type { Locale } from './profile';
export interface CaseCopy {
  title: string;
  category: string;
  summary: string;
  outcome: string;
  sections: string[];
}
export interface Project {
  slug: string;
  number: string;
  type: string;
  tags: string[];
  inProgress?: boolean;
  copy: Record<Locale, CaseCopy>;
}
// Metrics use the confirmed scope supplied in the interview. Internal financial amounts remain private.
export const projects: Project[] = [
  {
    slug: 'ingestao-cdc',
    number: '01',
    type: 'ingestion',
    tags: ['Datastream', 'Cloud Storage', 'Airflow', 'BigQuery'],
    copy: {
      pt: {
        category: 'ARQUITETURA & EFICIÊNCIA',
        title: 'Uma arquitetura mais simples. Uma operação mais eficiente.',
        summary:
          'A reconstrução do fluxo de ingestão transformou uma operação instável e cara em uma base parametrizada e mais previsível.',
        outcome: '≈98% menos custo de ingestão',
        sections: [
          'Na Uello, a ingestão conecta fontes transacionais ao ambiente analítico. Essa fundação precisa equilibrar disponibilidade, confiabilidade e custo.',
          'A referência veio de um benchmark apresentado pelo CTO, que havia usado o Datastream na empresa anterior. Depois de uma reunião com aquele time, fiquei responsável por entender, adaptar, melhorar e construir o fluxo para a nossa estrutura.',
          'A solução atual lista as pastas do bucket, converte seus prefixos em tabelas e percorre uma janela de datas parametrizada por uma Variable do Airflow. Quando não há arquivos ou logs incrementais, a tabela é retirada do processamento e toda a cadeia de tasks é ignorada.',
          'Implementei o fluxo com Datastream, Cloud Storage, Airflow e BigQuery. O schema Avro, as chaves primárias e os metadados da origem alimentam a criação das tabelas externas, views deduplicadas, schemas Bronze e MERGE incremental.',
          'Também implementei a sincronização automática de schema e o particionamento e clustering quando a estrutura da tabela permite. A lógica reduziu a dependência de intervenção manual na DAG.',
          'A frequência observada de falhas caiu de uma a duas por dia no processo anterior para nenhum erro recorrente, salvo situações excepcionais. A comparação direta dos dois modelos indicou aproximadamente 98% de redução no custo de ingestão.',
          'A principal lição foi tratar metadados e ausência de dados como parte do desenho operacional. O pipeline precisa saber quando há trabalho a fazer e quando deve pular uma tabela com segurança.',
        ],
      },
      en: {
        category: 'ARCHITECTURE & EFFICIENCY',
        title: 'Simpler architecture. More efficient operations.',
        summary:
          'Rebuilding ingestion turned an unstable, expensive operation into a parameterized and more predictable foundation.',
        outcome: '≈98% lower ingestion cost',
        sections: [
          'At Uello, ingestion connects transactional sources to the analytics environment. This foundation needs to balance availability, reliability and cost.',
          'The reference came from a benchmark shared by the CTO, who had used Datastream at a previous company. After meeting that team, I was responsible for understanding, adapting, improving and building the flow for our context.',
          'The current solution lists bucket folders, derives table names from their prefixes and scans a date window parameterized by an Airflow Variable. When there are no incremental files or logs, the table is removed from processing and its task chain is skipped.',
          'I built the flow with Datastream, Cloud Storage, Airflow and BigQuery. Avro schemas, primary keys and source metadata drive external tables, deduplicated views, Bronze schemas and incremental MERGE operations.',
          'I also implemented automatic schema synchronization and partitioning and clustering when the table structure supports it. This reduced dependence on manual DAG changes.',
          'Observed recurring failures fell from one or two per day to none, except for exceptional situations. A direct comparison of both ingestion models indicated approximately 98% lower ingestion cost.',
          'The main lesson was to treat metadata and missing data as part of the operational design. The pipeline needs to know when there is work to do and when it can safely skip a table.',
        ],
      },
    },
  },
  {
    slug: 'otimizacao-dataform',
    number: '02',
    type: 'layers',
    inProgress: true,
    tags: ['Dataform', 'BigQuery', 'SQL', 'Medallion'],
    copy: {
      pt: {
        category: 'MODERNIZAÇÃO & GOVERNANÇA',
        title: 'Do legado a uma plataforma que o time consegue evoluir.',
        summary:
          'Modernização de um pipeline legado, com responsabilidades claras entre Engenharia e Analytics e ganho de velocidade observado no mart financeiro.',
        outcome: 'Mais clareza e autonomia',
        sections: [
          'Um pipeline legado utilizava dbt com Airflow/Celery e havia acumulado regras de negócio, decisões históricas e dependências pouco documentadas. A complexidade dificultava manutenção e entendimento.',
          'Inicialmente fiquei responsável por toda a frente, inclusive pela implementação. O time apoiou a busca de contexto com as áreas, a validação das regras e a definição do que deveria permanecer ou ser removido.',
          'Remapeei o pipeline e reconstruí sua lógica, eliminando regras sem uso, dashboards obsoletos e fontes que já não sustentavam necessidades atuais. Isso reduziu dependências antigas nas camadas Gold.',
          'A modernização usa Dataform no GCP e uma organização inspirada em Medallion. Bronze e Silver ficam sob responsabilidade de Engenharia, com dados confiáveis. Gold recebe os data marts construídos por analistas e analytics engineers sobre essa base.',
          'Conduzi o redesenho e a implementação, estabeleci padrões, documentei decisões e apoiei as revisões técnicas. O objetivo foi deixar uma plataforma que o restante do time pudesse entender e evoluir.',
          'No principal caso validado, o mart financeiro dependia de várias fontes e levava cerca de 20 minutos no dbt. A versão equivalente no Dataform levou aproximadamente 2,5 minutos, uma redução observada de 87,5% nessa execução.',
          'A migração ainda não terminou: falta principalmente construir a Gold, migrar as fontes do dbt para as novas tabelas e desativar o dbt. Os tempos são resultados parciais, não uma promessa para todo o pipeline.',
        ],
      },
      en: {
        category: 'MODERNIZATION & GOVERNANCE',
        title: 'From legacy pipelines to a platform the team can evolve.',
        summary:
          'Modernizing a legacy pipeline with clear ownership between Engineering and Analytics and an observed speedup in the finance mart.',
        outcome: 'Clarity and team autonomy',
        sections: [
          'A legacy pipeline used dbt with Airflow/Celery and had accumulated business rules, historical decisions and poorly documented dependencies. Complexity made maintenance and understanding difficult.',
          'I initially owned the full workstream, including implementation. Teammates helped recover context with business areas, validate rules and decide what should remain or be removed.',
          'I remapped and rebuilt the pipeline logic, removing unused rules, retired dashboards and sources that no longer supported current needs. This reduced old dependencies in the Gold layer.',
          'The modernization uses Dataform on GCP with a Medallion-inspired design. Engineering owns trusted Bronze and Silver data. Gold holds data marts built by analysts and analytics engineers on that foundation.',
          'I led the redesign and implementation, established patterns, documented decisions and supported technical reviews. The goal was a platform the rest of the team could understand and evolve.',
          'In the main validated case, the finance mart depended on many sources and took about 20 minutes in dbt. Its Dataform equivalent took approximately 2.5 minutes, an observed 87.5% reduction for that execution.',
          'The migration is not complete: the main remaining work is building Gold, moving dbt sources to the new tables and retiring dbt. These timings are partial results, not a claim about every pipeline.',
        ],
      },
    },
  },
  {
    slug: 'projeto-streamlit',
    number: '03',
    type: 'product',
    tags: ['Python', 'Streamlit', 'Pipelines'],
    copy: {
      pt: {
        category: 'DADOS COMO PRODUTO',
        title: 'De uma limitação de ferramenta a uma capacidade de produto.',
        summary:
          'Analytics embarcado no SaaS, com uma fundação técnica para novas visualizações e análises.',
        outcome: 'Analytics integrado ao produto',
        sections: [
          'O Looker Studio era útil internamente, mas não oferecia uma forma confiável de disponibilizar dados para clientes que não usavam GCP. O SaaS precisava respeitar o acesso por contas Google e Microsoft e manter os dados somente para pessoas autorizadas pelo ACL.',
          'A primeira alternativa seria construir tudo diretamente na plataforma de BI, mas a manutenção ficaria cara e restrita à Engenharia. Estudei outras opções e apresentei o Streamlit como uma camada mais flexível para analytics embarcado.',
          'Fiquei responsável pela primeira versão: entendi as novas fontes, traduzi as regras de negócio do cliente, escrevi a query e integrei o dashboard ao produto. A infraestrutura foi implementada por outras pessoas; mantive e evoluí a solução depois da entrada em produção.',
          'Python, Pandas e Streamlit permitiram tratar dados no backend e construir gráficos sob medida sem depender de licenças adicionais. O controle de acesso permaneceu no produto, com visualização restrita ao público autorizado.',
          'A solução entrou em produção e começou a ser replicada em outras instâncias do SaaS. O trabalho transformou uma limitação de ferramenta em um produto de dados reconhecido também pela equipe de Produto.',
          'O principal aprendizado foi validar uma experiência completa — regra, query, interface, acesso e manutenção — antes de transformar um dashboard em capacidade recorrente da plataforma.',
        ],
      },
      en: {
        category: 'DATA AS A PRODUCT',
        title: 'Turning a tool limitation into a product capability.',
        summary:
          'Embedded SaaS analytics with a technical foundation for richer visualizations and analysis.',
        outcome: 'Analytics inside the product',
        sections: [
          'Looker Studio worked for internal analysis, but it was not a reliable way to expose data to clients outside GCP. The SaaS needed to support Google and Microsoft sign-in while keeping data restricted to people authorized by ACL.',
          'The first alternative was to build everything directly in the BI platform, but maintenance would be expensive and limited to Engineering. I studied other options and proposed Streamlit as a more flexible embedded analytics layer.',
          'I owned the first version: understanding new sources, translating client business rules, writing the query and integrating the dashboard into the product. Others implemented the infrastructure; I maintained and evolved the solution after production.',
          'Python, Pandas and Streamlit enabled backend data treatment and custom charts without additional license dependency. Access control remained in the product, with views restricted to authorized users.',
          'The solution went to production and started being replicated across other SaaS instances. The work turned a tool constraint into a data product also recognized by the Product team.',
          'The key lesson was validating the complete experience — rules, query, interface, access and maintenance — before turning a dashboard into a recurring platform capability.',
        ],
      },
    },
  },
  {
    slug: 'sla-logistico',
    number: '04',
    type: 'process',
    tags: ['SLA', 'Process mapping', 'Analytics'],
    copy: {
      pt: {
        category: 'PROCESSOS & OPERAÇÃO',
        title: 'Saber onde o tempo se perde muda a decisão.',
        summary:
          'De um SLA global a indicadores por etapa: visibilidade para investigar gargalos na operação logística.',
        outcome: 'Gargalos visíveis por etapa',
        sections: [
          'O SLA global dizia se o pedido chegou no prazo, mas escondia onde o tempo havia sido perdido. Um pedido podia chegar no prazo mesmo depois de atrasar em uma etapa, ou já entrar fora da janela por responsabilidade do parceiro.',
          'Mapeei a jornada e recriei o conceito como OTD, com regras por etapa: first mile, recebimento e carregamento no hub central, middle mile, handling, last mile e um SLA de expansão para áreas atendidas por frota do hub.',
          'As janelas foram definidas com o COO e as áreas operacionais. Implementei as métricas usando eventos do sistema e controles em planilhas, distinguindo atraso interno, parceiro fora da janela e aging do pedido em cada local.',
          'Participei diretamente da modelagem em dbt e da construção do dashboard operacional no Looker Studio. A liderança de Operações passou a visualizar cada etapa do pedido, possíveis atrasos e o ponto da cadeia que exigia investigação.',
          'A estrutura permitiu comparar etapas e hubs e orientar a discussão sobre gargalos operacionais. O dashboard também ajudou a diretoria a revisar áreas do processo, sem atribuir uma causa que os dados não comprovassem.',
          'O principal aprendizado foi que uma métrica operacional precisa preservar a sequência do processo. O resultado final só é acionável quando mostra em que janela e sob qual responsabilidade o desvio ocorreu.',
        ],
      },
      en: {
        category: 'PROCESSES & OPERATIONS',
        title: 'Knowing where time is lost changes the decision.',
        summary:
          'From one end-to-end SLA to stage-level indicators that expose logistics bottlenecks.',
        outcome: 'Visibility into each stage',
        sections: [
          'The end-to-end SLA showed whether an order arrived on time, but hid where time was lost. An order could arrive on time after an earlier stage was late, or enter the network outside the window because a partner handed it over late.',
          'I mapped the journey and reframed it as OTD with stage rules: first mile, central-hub receiving and loading, middle mile, handling, last mile and an expansion SLA for areas served by the hub fleet.',
          'Windows were defined with the COO and operational teams. I implemented metrics from system events and spreadsheet controls, distinguishing internal delays, late partner handoffs and order aging at each location.',
          'I directly contributed to dbt modeling and built the operational Looker Studio dashboard. Operations leadership could see every order stage, possible delays and the point in the chain requiring investigation.',
          'The structure enabled stage and hub comparisons and better discussions about operational bottlenecks. The dashboard also supported leadership reviews without assigning causes the data could not prove.',
          'The key lesson was that an operational metric must preserve process sequence. The final outcome becomes actionable when it shows in which window and under whose responsibility a deviation occurred.',
        ],
      },
    },
  },
  {
    slug: 'airflow-gke',
    number: '05',
    type: 'layers',
    tags: ['Airflow', 'GKE', 'Cloud Composer'],
    copy: {
      pt: {
        category: 'PLATAFORMA & COLABORAÇÃO',
        title: 'Orquestração alinhada à plataforma da empresa.',
        summary:
          'Migração do Cloud Composer para Airflow no GKE em parceria com a equipe de plataforma.',
        outcome: 'Mais controle operacional',
        sections: [
          'A orquestração de dados utilizava Cloud Composer. A empresa possuía uma plataforma baseada em Kubernetes.',
          'A nova instância de Airflow no GKE foi implementada pela equipe de plataforma. Minha participação foi de assessoria técnica e validação dos conectores e da qualidade da instância.',
          'Revisei DAGs, conexões, dependências e comportamento dos pipelines para identificar incompatibilidades antes da adoção do novo ambiente.',
          'Também apoiei a validação dos fluxos após a troca, verificando se os conectores preservavam as condições necessárias para a operação de dados.',
          'O trabalho trouxe uma visão prática sobre o que precisa ser validado quando uma plataforma de orquestração muda de ambiente, sem atribuir a mim a implementação da infraestrutura.',
        ],
      },
      en: {
        category: 'PLATFORM & COLLABORATION',
        title: 'Orchestration aligned with the company platform.',
        summary:
          'Moving from Cloud Composer to Airflow on GKE in partnership with the platform team.',
        outcome: 'Greater operational control',
        sections: [
          'Data orchestration ran on Cloud Composer while the company operated a Kubernetes-based platform.',
          'The new Airflow instance on GKE was implemented by the platform team. My role was technical advisory support and validation of connectors and instance quality.',
          'I reviewed DAGs, connections, dependencies and pipeline behavior to identify incompatibilities before adopting the new environment.',
          'I also helped validate flows after the switch, checking that connectors preserved the conditions required by data operations.',
          'The work provided a practical view of what must be validated when an orchestration platform changes environments, without claiming ownership of the infrastructure implementation.',
        ],
      },
    },
  },
  {
    slug: 'wiki-agentes-ia',
    number: '06',
    type: 'process',
    inProgress: true,
    tags: ['Documentation', 'Knowledge base', 'AI'],
    copy: {
      pt: {
        category: 'DOCUMENTAÇÃO & CONHECIMENTO',
        title: 'Conhecimento que continua útil além de uma conversa.',
        summary:
          'Uma iniciativa interna de documentação e IA aplicada à Engenharia de Dados, criada para tornar métricas e processos mais consultáveis.',
        outcome: 'Contexto reutilizável para o time',
        sections: [
          'A ideia, a implementação e os testes foram meus. O projeto organiza uma wiki versionada de processos, tabelas e métricas e disponibiliza agentes por nível de capacidade para responder perguntas com contexto controlado.',
          'Construí o orquestrador, a interface de consulta, as regras de governança e os conectores somente leitura para as fontes de dados. O foco é permitir perguntas sobre números já apresentados em dashboards e tabelas.',
          'A adoção começa pelos demais usuários do time de dados. Depois, a proposta é expandir para outras áreas e centralizar o conhecimento coletado em uma base que possa ser consultada com segurança.',
          'A iniciativa também chamou a atenção da liderança técnica, que passou a considerar o material como uma possível wiki de dados para a empresa. Essa expansão ainda está em planejamento.',
          'O trabalho combina documentação versionada, agentes com escopo definido e validação humana. A IA acelera a consulta, mas não substitui a revisão técnica das métricas.',
        ],
      },
      en: {
        category: 'DOCUMENTATION & KNOWLEDGE',
        title: 'Knowledge that remains useful beyond a conversation.',
        summary:
          'An internal documentation and AI initiative for Data Engineering, making metrics and processes easier to query.',
        outcome: 'Reusable context for the team',
        sections: [
          'The idea, implementation and tests were mine. The project organizes a versioned wiki of processes, tables and metrics and exposes agents by capability level to answer questions with controlled context.',
          'I built the orchestrator, query interface, governance rules and read-only connectors to data sources. The goal is answering questions about numbers already shown in dashboards and tables.',
          'Adoption starts with other users on the data team. The next step is expanding to other areas and centralizing the collected knowledge in a safe, queryable base.',
          'The initiative also drew technical leadership interest, with the material being considered as a possible company data wiki. That expansion is still in planning.',
          'The work combines versioned documentation, scoped agents and human validation. AI accelerates discovery but does not replace technical review of metrics.',
        ],
      },
    },
  },
];
