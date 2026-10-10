# Revisão editorial antes de publicar

As fontes são os dois documentos fornecidos pelo proprietário e o estado de trabalho de `C:/git/website`. A implementação está em `C:/git/site`; o original não foi modificado.

## Decisões aplicadas

- Reaproveitados Astro 5, lockfile, integrações Tailwind/Icon/Sitemap, configuração de lint e typecheck, Google Analytics e estratégia de deploy. Interface e conteúdo foram reformulados.
- Preservadas as rotas dos cases existentes e adicionados os cases de SLA e agentes, além das páginas de Sobre, Experiência, Cases, Serviços e Contato em ambos os idiomas.
- Português é o padrão. A tradução mantém a mesma rota e o mesmo case.
- E-mail, LinkedIn e GitHub vêm do repositório original. Não foi inventado formulário, agenda, endpoint ou confirmação de envio.
- PDF de currículo ausente. O botão solicita o currículo por e-mail e passa a oferecer download quando `public/CV_Jair_Ribeiro.pdf` existir no próximo build.
- Migração Dataform e documentação/IA aparecem como iniciativas em andamento.
- Diagramas decorativos representam conceitos; não são capturas da infraestrutura interna.
- Sistemas de Informação aparece como curso interrompido na UFF, conforme confirmado na entrevista.
- A experiência profissional publica as datas confirmadas de Uello, BNDES, GOL e Santander, além da progressão de cargos na Uello.
- O projeto de agentes é descrito sem o nome da empresa ou do repositório.

## TODOs de conteúdo

- [ ] Confirmar nome de exibição e vigência do domínio e dos contatos já presentes no original.
- [x] Confirmar datas e cargos formais de Uello, BNDES e GOL; situação atual na Uello.
- [x] Confirmar instituições, anos e situação de Sistemas de Informação.
- [ ] Adicionar o currículo público atualizado em PDF, se desejado.
- [x] Resolver métrica de ingestão: aproximadamente 98% de redução de custo, comparando os dois modelos lado a lado.
- [x] Validar o caso Dataform: mart financeiro de aproximadamente 20 minutos em dbt para 2,5 minutos em Dataform, com migração ainda em andamento.
- [ ] Validar métricas operacionais e atribuição individual/coletiva antes de acrescentá-las. Valores financeiros internos não devem ser publicados.
- [ ] Validar domínio público e, se desejado, adicionar o currículo atualizado em PDF.

Nenhuma dessas pendências bloqueia a revisão local do layout. O deploy não foi executado.
