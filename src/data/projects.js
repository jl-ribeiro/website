export const allProjects = {
  'otimizacao-dataform': {
    architectureDiagram: '/diagrama-dataform.png', // Lembre de adicionar esta imagem na pasta /public
    tags: ["Google Dataform", "BigQuery", "Cost Reduction", "Medallion Arch.", "SaaS"],
    linkGit: "#", // Coloque o link do repositório, se houver
    pt: {
      title: 'Otimização de DWH com Dataform',
      subtitle: 'Redução de 98.5% em custos e otimização de 8x na velocidade de atualização de um Data Warehouse legado.',
      summary: 'Este projeto aborda a reestruturação completa de um Data Warehouse em BigQuery, migrando um pipeline legado e custoso de dbt para uma solução nativa e eficiente com Google Dataform.',
      challenge: ['A arquitetura anterior, baseada em dbt e Airflow, era insustentável, com custos de processamento elevados e desnecessários.', 'Muitas tabelas não eram mais utilizadas, mas ainda consumiam recursos.', 'O tempo de atualização de 40 minutos para o DWH completo impactava a agilidade do negócio.'],
      myContribution: ['Liderei o projeto de redesenho do Data Warehouse do zero.', 'Implementei a Arquitetura Medallion (Bronze, Silver, Gold) para garantir a governança e qualidade dos dados.', 'Utilizei JavaScript dentro do Dataform para modularizar e reutilizar regras de negócio complexas.', 'Garanti uma migração segura e validada, sem perda de dados.'],
      techDeepDive: [
        { title: 'Modelagem Nativa no BigQuery', description: 'Ao adotar o Dataform, eliminamos a dependência do Airflow para orquestrar o dbt, aproveitando a integração nativa e gratuita do BigQuery. Isso simplificou a stack e acelerou drasticamente o tempo de atualização de 40 para menos de 5 minutos.' },
        { title: 'Modularização com JavaScript', description: 'Regras de negócio que se repetiam em vários modelos foram encapsuladas em funções JavaScript, importadas diretamente nos arquivos SQLX. Isso aumentou a manutenibilidade e reduziu a duplicação de código.' }
      ],
      results: ['Redução de 8x no tempo de atualização do DWH (de 40 para 5 minutos).', 'Custos de processamento drasticamente reduzidos devido à eliminação de tabelas obsoletas e processos otimizados.', 'Melhora significativa na governança e manutenibilidade da base de dados.'],
    },
    en: {
      title: 'DWH Optimization with Dataform',
      subtitle: '98.5% cost reduction and 8x faster update speed on a legacy Data Warehouse.',
      summary: 'This project covers the complete restructuring of a BigQuery Data Warehouse, migrating a legacy and costly dbt pipeline to a native and efficient solution with Google Dataform.',
      challenge: ['The previous architecture, based on dbt and Airflow, was unsustainable, with high and unnecessary processing costs.', 'Many tables were no longer in use but still consumed resources.', 'The 40-minute update time for the entire DWH impacted business agility.'],
      myContribution: ['I led the project to redesign the Data Warehouse from scratch.', 'I implemented the Medallion Architecture (Bronze, Silver, Gold) to ensure data governance and quality.', 'I used JavaScript within Dataform to modularize and reuse complex business rules.', 'I ensured a secure and validated migration with no data loss.'],
      techDeepDive: [
        { title: 'Native Modeling in BigQuery', description: 'By adopting Dataform, we eliminated the dependency on Airflow to orchestrate dbt, leveraging BigQuery\'s native and free integration. This simplified the stack and drastically accelerated the update time from 40 to less than 5 minutes.' },
        { title: 'Modularization with JavaScript', description: 'Business rules that were repeated across multiple models were encapsulated in JavaScript functions, imported directly into the SQLX files. This increased maintainability and reduced code duplication.' }
      ],
      results: ['8x reduction in DWH update time (from 40 to 5 minutes).', 'Drastically reduced processing costs due to the elimination of obsolete tables and optimized processes.', 'Significant improvement in data governance and maintainability.'],
    }
  },
  'ingestao-cdc': {
    architectureDiagram: '/diagrama-datastream.png', // Lembre de criar e adicionar esta imagem
    tags: ["Cloud Datastream", "BigQuery", "CDC", "Near Real-Time", "Cost Reduction"],
    linkGit: "#",
    pt: {
      title: 'Ingestão de Baixa Latência com Datastream',
      subtitle: 'Criação de um pipeline de replicação de dados near real-time com 98% de redução de custos.',
      summary: 'Desenvolvimento de uma arquitetura de ingestão de dados via Change Data Capture (CDC) para replicar um banco de dados transacional em um ambiente analítico de forma confiável, rápida e barata.',
      challenge: ['A solução de replicação anterior não era confiável, cara e lenta, tornando a análise de dados operacionais inviável.', 'A empresa precisava de acesso aos dados mais recentes (baixa latência) para tomada de decisão, sem comprometer o orçamento.'],
      myContribution: ['Arquitetei uma solução de baixo custo usando Datastream, Cloud Storage e BigQuery.', 'Implementei a captura dos binlogs do banco de dados (CDC), com exportação no formato Avro para o GCS.', 'Criei uma arquitetura em camadas (Streaming Views e Raw Tables) no BigQuery para fornecer acesso aos dados tanto em tempo real quanto em lotes materializados e otimizados.'],
      techDeepDive: [
        { title: 'Arquitetura de Tabelas Externas e Views', description: 'A grande sacada de baixo custo foi usar o BigQuery para ler os arquivos Avro diretamente do Cloud Storage via Tabelas Externas. Uma View de streaming foi criada sobre esses arquivos para consultar apenas os registros mais recentes (delta), e uma tabela materializada, particionada e clusterizada, era atualizada periodicamente em lotes para consultas analíticas pesadas.' }
      ],
      results: ['Redução de 98% nos custos de replicação de dados.', 'Disponibilização de dados para análise em minutos (near real-time), em vez de horas.', 'Criação de uma arquitetura de ingestão modular e facilmente replicável para outros clientes SaaS.'],
    },
    en: {
      title: 'Low-Latency Ingestion with Datastream',
      subtitle: 'Creation of a near real-time data replication pipeline with a 98% cost reduction.',
      summary: 'Development of a Change Data Capture (CDC) data ingestion architecture to replicate a transactional database into an analytical environment reliably, quickly, and affordably.',
      challenge: ['The previous replication solution was unreliable, expensive, and slow, making operational data analysis unfeasible.', 'The company needed access to the latest data (low latency) for decision-making without compromising the budget.'],
      myContribution: ['I architected a low-cost solution using Datastream, Cloud Storage, and BigQuery.', 'I implemented binlog capture from the database (CDC), exporting in Avro format to GCS.', 'I created a layered architecture (Streaming Views and Raw Tables) in BigQuery to provide access to data in both real-time and in optimized, materialized batches.'],
      techDeepDive: [
        { title: 'External Tables and Views Architecture', description: 'The key low-cost insight was using BigQuery to read Avro files directly from Cloud Storage via External Tables. A streaming View was created over these files to query only the latest records (delta), and a materialized, partitioned, and clustered table was updated periodically in batches for heavy analytical queries.' }
      ],
      results: ['98% reduction in data replication costs.', 'Data made available for analysis in minutes (near real-time) instead of hours.', 'Creation of a modular and easily replicable ingestion architecture for other SaaS clients.'],
    }
  },
  'projeto-streamlit': {
    architectureDiagram: '/diagrama-streamlit.png', // Lembre de criar e adicionar esta imagem
    tags: ["Streamlit", "Embedded Analytics", "Python", "SaaS", "Looker Studio Alternative"],
    linkGit: "#",
    pt: {
      title: 'Analytics Embarcado com Streamlit',
      subtitle: 'Criação de dashboards nativos em uma plataforma SaaS, superando as limitações de ACL do Looker Studio.',
      summary: 'Implementação de uma solução de analytics totalmente personalizada e embarcada para clientes de uma plataforma SaaS, utilizando Streamlit para contornar as limitações de permissões do Looker Studio.',
      challenge: ['A plataforma SaaS precisava oferecer dashboards para seus clientes, mas o Looker Studio só permitia acesso a usuários com e-mails do mesmo domínio.', 'Era inviável criar e gerenciar credenciais para cada cliente no ecossistema Google.', 'A solução precisava ser personalizável por cliente e integrada à experiência do produto.'],
      myContribution: ['Pesquisei e validei o Streamlit como a solução ideal para o problema.', 'Desenvolvi a arquitetura para servir os dashboards Streamlit de forma segura e integrada.', 'Criei os dashboards, utilizando Python para tratamento e visualização de dados, com filtros e gráficos interativos.'],
      techDeepDive: [
        { title: 'Flexibilidade com Python', description: 'Ao sair do Looker Studio, ganhamos o poder do Python para o pré-processamento dos dados. Isso abriu um leque de oportunidades para aplicar transformações mais complexas e, no futuro, integrar modelos de machine learning diretamente nos dashboards, criando um verdadeiro produto de dados.' }
      ],
      results: ['Dashboards 100% personalizáveis e integrados para clientes SaaS.', 'Eliminação das barreiras de acesso e gerenciamento de credenciais do Looker Studio.', 'Criação de uma base para futuros produtos de dados e ciência de dados dentro da plataforma.'],
    },
    en: {
      title: 'Embedded Analytics with Streamlit',
      subtitle: 'Creation of native dashboards in a SaaS platform, overcoming Looker Studio\'s ACL limitations.',
      summary: 'Implementation of a fully customized and embedded analytics solution for clients of a SaaS platform, using Streamlit to bypass the permission limitations of Looker Studio.',
      challenge: ['The SaaS platform needed to offer dashboards to its clients, but Looker Studio only allowed access to users with emails from the same domain.', 'It was unfeasible to create and manage credentials for each client in the Google ecosystem.', 'The solution had to be customizable per client and integrated into the product experience.'],
      myContribution: ['I researched and validated Streamlit as the ideal solution to the problem.', 'I developed the architecture to serve the Streamlit dashboards securely and in an integrated manner.', 'I created the dashboards, using Python for data processing and visualization, with interactive filters and charts.'],
      techDeepDive: [
        { title: 'Flexibility with Python', description: 'By moving away from Looker Studio, we gained the power of Python for data preprocessing. This opened up a range of opportunities to apply more complex transformations and, in the future, integrate machine learning models directly into the dashboards, creating a true data product.' }
      ],
      results: ['100% customizable and integrated dashboards for SaaS clients.', 'Elimination of Looker Studio\'s access and credential management barriers.', 'Creation of a foundation for future data and data science products within the platform.'],
    }
  }
};