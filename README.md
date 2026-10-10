# Jair Ribeiro — portfólio profissional

Reformulação visual e editorial em Astro, com português e inglês, seis estudos de caso e jornadas para recrutamento e consultoria.

## Auditoria da base

A pasta de destino estava vazia. O projeto original foi encontrado em `C:/git/website`, com alterações locais que foram respeitadas e não modificadas. Base: Astro 5, Tailwind 3, astro-icon, sitemap, ESLint, Prettier e checagem Astro/TypeScript. O original tinha homes PT/EN com âncoras, cinco rotas de projetos, layout escuro com grafos, Google Fonts, GA4 e publicação em GitHub Pages.

Problemas identificados: ausência do PDF de currículo; referências a diagramas inexistentes; links GitHub de projetos com `#`; conteúdo numérico e formação conflitantes; home extensa; prioridade para inglês; visual técnico que não atendia à nova direção. O novo layout substitui grafos animados por hierarquia editorial e diagramas conceituais leves. Conteúdo continua disponível sem JavaScript, inclusive menu móvel e detalhes dos serviços.

## Executar

```sh
npm ci
npm run dev
```

Acesse `http://localhost:4321/pt/`. Também há tarefas do VS Code para build e servidor.

```sh
npm run lint
npm run typecheck
npm run build
npm run test:site
npm run preview
```

`test:site` verifica os arquivos de `dist`, após o build. Use a versão Node 22 do workflow ou uma versão compatível com as dependências do lockfile.

## Organização

- [Layout](src/layouts/Layout.astro): navegação, idiomas, SEO, dados estruturados, rodapé.
- [Componentes](src/components): home, cards, diagrama conceitual, contato final e analytics preservado.
- [Conteúdo dos cases](src/data/projects.ts): seis cases PT/EN e status de andamento.
- [Perfil](src/data/profile.ts): contatos originados do projeto existente.
- [Traduções](src/i18n): conteúdo compartilhado das duas versões.
- [Páginas](src/pages): `/pt/` e `/en/`, cada qual com `sobre/`, `experiencia/`, `cases/`, `servicos/` e `contato/`.
- [Cases individuais](src/pages/[lang]/projetos/[slug].astro): conserva os slugs originais e inclui `sla-logistico`.
- [Estilos](src/styles/global.css): sistema visual responsivo, foco visível, movimento reduzido e impressão.
- [Pendências editoriais](docs/EDITORIAL.md): fatos que precisam de confirmação.

## Publicação

Saída estática em `dist/`. O domínio original continua em `astro.config.mjs`; canonicals, alternates, sitemap e robots usam `https://jairribeiro.dev`. O workflow mantém a publicação na branch `deploy` com GitHub Pages, agora com `npm ci`, validações e teste dos links gerados. A publicação exige o repositório GitHub e Pages configurados; este trabalho não publicou o site.

Analytics mantém o ID original `G-MEMXJ444RW` e só carrega em builds de produção. Veja [documentação de analytics](docs/ANALYTICS.md).

Não há backend de formulário: os CTAs abrem e-mail com assunto correspondente à jornada, e também há acesso direto ao LinkedIn. Para habilitar download de currículo, adicionar `public/CV_Jair_Ribeiro.pdf` e gerar novo build.
