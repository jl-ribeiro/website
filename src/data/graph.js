export const heroGraph = {
  nodes: [
    { id: 'sources', label: 'Sources', x: 8, y: 28, href: '#stack' },
    { id: 'gcp', label: 'GCP', x: 28, y: 18, href: '#stack' },
    { id: 'bq', label: 'BigQuery', x: 48, y: 12, href: '#stack' },
    { id: 'dataform', label: 'Dataform', x: 68, y: 22, href: '#projetos' },
    { id: 'airflow', label: 'Airflow', x: 28, y: 48, href: '#stack' },
    { id: 'streamlit', label: 'Streamlit', x: 72, y: 48, href: '#projetos' },
    { id: 'finops', label: 'FinOps', x: 50, y: 62, href: '#impacto' },
    { id: 'cases', label: 'Cases', x: 88, y: 36, href: '#projetos' },
  ],
  edges: [
    ['sources', 'gcp'],
    ['gcp', 'bq'],
    ['bq', 'dataform'],
    ['gcp', 'airflow'],
    ['dataform', 'cases'],
    ['airflow', 'finops'],
    ['dataform', 'finops'],
    ['streamlit', 'cases'],
    ['finops', 'cases'],
    ['bq', 'streamlit'],
  ],
};

export const impactMetrics = {
  pt: [
    { value: '~30%', label: 'menos custo BigQuery', ref: 'Dataform' },
    { value: '50%', label: 'DWH mais rápido', ref: 'Dataform' },
    { value: '95%', label: 'menos custo CDC', ref: 'Datastream' },
    { value: 'SaaS', label: 'analytics embarcado no produto', ref: 'Streamlit' },
  ],
  en: [
    { value: '~30%', label: 'lower BigQuery cost', ref: 'Dataform' },
    { value: '50%', label: 'faster DWH refresh', ref: 'Dataform' },
    { value: '95%', label: 'lower CDC cost', ref: 'Datastream' },
    { value: 'SaaS', label: 'analytics built into the product', ref: 'Streamlit' },
  ],
};
