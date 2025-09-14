export const allProjects = {
  'otimizacao-dataform': {
    title: 'Otimização de Pipelines com Dataform',
    subtitle: 'Redução de 98.5% em custos de processamento no BigQuery e melhora de performance em módulos SaaS.',
    summary: 'Este estudo de caso detalha a migração de pipelines de dados legados e de alto custo para uma arquitetura moderna e eficiente utilizando Google Dataform, resultando em uma economia drástica e maior confiabilidade dos dados.',
    challenge: [
      'Pipelines legados em uma plataforma SaaS estavam gerando custos elevados de processamento no BigQuery, tornando a operação insustentável a longo prazo.',
      'A manutenção era complexa e a performance impactava a entrega de dados para módulos críticos do produto.',
      'Era necessário criar uma solução robusta, escalável e, acima de tudo, custo-efetiva para suportar o crescimento da empresa.'
    ],
    myContribution: [
      'Arquitetei a solução de ponta a ponta na Google Cloud Platform.',
      'Desenvolvi os modelos de dados no Dataform seguindo a arquitetura Medallion (Bronze, Silver, Gold).',
      'Liderei o processo de migração, garantindo a qualidade e a consistência dos dados.',
      'Colaborei com stakeholders para validar os novos modelos e dashboards.'
    ],
    architectureDiagram: '/diagrama-dataform.png',
    techDeepDive: [
      {
        title: 'Modelagem com Google Dataform',
        description: 'Abaixo, um exemplo anonimizado de um modelo da camada "Silver", onde dados brutos são limpos, tipados e preparados para agregação. Usamos arquivos SQLX para combinar a declaração da tabela com a lógica de transformação.',
        codeLanguage: 'sql',
        code: `config { type: "table" }\n\nSELECT\n    CAST(user_id AS STRING) AS id_usuario,\n    CAST(event_timestamp AS TIMESTAMP) AS data_evento,\n    JSON_VALUE(event_data, '$.plan_type') AS tipo_plano,\n    SAFE_CAST(JSON_VALUE(event_data, '$.mrr_value') AS NUMERIC) AS valor_mrr\nFROM\n    source.bronze_events\nWHERE\n    event_name = 'user_subscribed'`
      },
      {
        title: 'Dashboard de Análise de Custo',
        description: 'Para validar o sucesso do projeto, criei um dashboard no Looker Studio que compara os custos de processamento antes e depois da migração. Abaixo está uma versão pública e anonimizada do dashboard, usando dados de exemplo.',
        embedUrl: 'https://lookerstudio.google.com/embed/reporting/0B5FF6n02-312Y1llWmN2U2Q4S3M/page/6zXD'
      }
    ],
    results: [
      'Redução de 98.5% nos custos mensais de processamento no BigQuery, de R$ X mil para R$ Y.',
      'Melhora de 4x na performance de execução dos pipelines.',
      'Redução do tempo de entrega de dados para stakeholders de 8 horas para menos de 1 hora.',
      'Criação de uma base de dados escalável e de fácil manutenção para o futuro.'
    ]
  },
  'projeto-streamlit': {
    title: 'Projeto Streamlit (Exemplo)',
    subtitle: 'Subtítulo do projeto Streamlit.',
    summary: 'Resumo do projeto Streamlit...',
    challenge: ['Desafio 1 do Streamlit.'],
    myContribution: ['Contribuição 1 do Streamlit.'],
    architectureDiagram: '/placeholder.png',
    techDeepDive: [],
    results: ['Resultado 1 do Streamlit.']
  },
  'ingestao-cdc': {
    title: 'Ingestão CDC (Exemplo)',
    subtitle: 'Subtítulo do projeto de ingestão CDC.',
    summary: 'Resumo do projeto de ingestão CDC...',
    challenge: ['Desafio 1 de ingestão CDC.'],
    myContribution: ['Contribuição 1 de ingestão CDC.'],
    architectureDiagram: '/placeholder.png',
    techDeepDive: [],
    results: ['Resultado 1 de ingestão CDC.']
  }
};
