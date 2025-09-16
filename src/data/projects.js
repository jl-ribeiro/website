// src/data/projects.js
export const allProjects = {
  'otimizacao-dataform': {
    // Informações que não mudam com o idioma
    architectureDiagram: '/diagrama-dataform.png',
    tags: ["Google Dataform", "BigQuery", "Cost Reduction", "Medallion Arch."],
    linkGit: "https-://github.com/seu-usuario/seu-repo-1",

    // Textos em Português
    pt: {
      title: 'Otimização com Dataform: Redução de 98.5% em Custos',
      description: 'Migração de pipelines legados para Google Dataform, reestruturando o fluxo com Arquitetura Medallion...',
      subtitle: 'Redução de 98.5% em custos de processamento no BigQuery e melhora de performance em módulos SaaS.',
      summary: 'Este estudo de caso detalha a migração de pipelines de dados legados e de alto custo para uma arquitetura moderna...',
      challenge: ['Pipelines legados gerando custos elevados...', 'A manutenção era complexa...', 'Era necessário criar uma solução robusta...'],
      myContribution: ['Arquitetei a solução de ponta a ponta...', 'Desenvolvi os modelos de dados no Dataform...', 'Liderei o processo de migração...', 'Colaborei com stakeholders...'],
      techDeepDive: [
        { title: 'Modelagem com Google Dataform', description: 'Abaixo, um exemplo anonimizado de um modelo da camada "Silver"...', codeLanguage: 'sql', code: `...` },
        { title: 'Dashboard de Análise de Custo', description: 'Para validar o sucesso do projeto, criei um dashboard no Looker Studio...', embedUrl: '...' }
      ],
      results: ['Redução de 98.5% nos custos mensais...', 'Melhora de 4x na performance...', 'Redução do tempo de entrega de dados...', 'Criação de uma base de dados escalável...']
    },
    // Textos em Inglês
    en: {
      title: 'Dataform Optimization: 98.5% Cost Reduction',
      description: 'Migration of legacy pipelines to Google Dataform, restructuring the flow with Medallion Architecture...',
      subtitle: '98.5% reduction in BigQuery processing costs and performance improvement in critical SaaS modules.',
      summary: 'This case study details the migration of legacy and high-cost data pipelines to a modern, efficient architecture...',
      challenge: ['Legacy pipelines generating high costs...', 'Maintenance was complex...', 'It was necessary to create a robust solution...'],
      myContribution: ['I architected the end-to-end solution...', 'I developed the data models in Dataform...', 'I led the migration process...', 'I collaborated with stakeholders...'],
      techDeepDive: [
        { title: 'Modeling with Google Dataform', description: 'Below is an anonymized example of a "Silver" layer model...', codeLanguage: 'sql', code: `...` },
        { title: 'Cost Analysis Dashboard', description: 'To validate the project\'s success, I created a Looker Studio dashboard...', embedUrl: '...' }
      ],
      results: ['98.5% reduction in monthly processing costs...', '4x improvement in pipeline execution performance...', 'Reduction of data delivery time...', 'Creation of a scalable and low-maintenance database...']
    }
  },
  // ADICIONE SEUS OUTROS PROJETOS AQUI SEGUINDO A MESMA ESTRUTURA
  'projeto-streamlit': {
    architectureDiagram: '/placeholder.png',
    tags: ["Streamlit", "Google Dataform", "BigQuery", "SaaS"],
    linkGit: "https://github.com/seu-usuario/seu-repo-novo",
    pt: {
      title: 'Dashboards Nativos com Streamlit',
      description: 'Implementação de uma solução de analytics embarcada usando Streamlit...',
      // PROPRIEDADES QUE FALTAVAM (adicione mesmo que vazias)
      subtitle: 'Subtítulo do projeto em PT',
      summary: 'Resumo em PT...',
      challenge: ['Desafio 1...', 'Desafio 2...'],
      myContribution: ['Contribuição 1...', 'Contribuição 2...'],
      techDeepDive: [], // Pode ser uma lista vazia por enquanto
      results: []       // Pode ser uma lista vazia por enquanto
    },
    en: {
      title: 'Native Dashboards with Streamlit',
      description: 'Implementation of an embedded analytics solution using Streamlit...',
      // PROPERTIES THAT WERE MISSING (add even if empty)
      subtitle: 'Project subtitle in EN',
      summary: 'Summary in EN...',
      challenge: ['Challenge 1...', 'Challenge 2...'],
      myContribution: ['Contribution 1...', 'Contribution 2...'],
      techDeepDive: [], // Can be an empty list for now
      results: []       // Can be an empty list for now
    }
  },
  'ingestao-cdc': {
    architectureDiagram: '/placeholder.png',
    tags: ["Cloud Datastream", "BigQuery", "CDC", "Avro"],
    linkGit: "https-://github.com/seu-usuario/seu-repo-2",
    pt: {
      title: 'Ingestão de Baixa Latência com Datastream',
      description: 'Arquitetura de ingestão usando Cloud Datastream para replicar dados de MySQL...',
      // ... preencha o resto em português
    },
    en: {
      title: 'Low-Latency Ingestion with Datastream',
      description: 'Ingestion architecture using Cloud Datastream to replicate MySQL data...',
      // ... preencha o resto em inglês
    }
  }
};