# Rastreamento (Analytics) do portfólio

Quando o site estiver em produção, você pode medir visitas, páginas mais vistas e interações usando analytics. Abaixo estão opções práticas e onde integrar no projeto.

## Opção 1: Google Analytics 4 (GA4) — já integrado

**Vantagens:** gratuito, relatórios ricos, integração com Google Search Console, útil para mostrar métricas em processos seletivos.

O site já está configurado com o Measurement ID **G-MEMXJ444RW**. O componente `src/components/GoogleAnalytics.astro` carrega o script do GA4 **apenas em produção** (ao rodar `npm run build` e publicar); em `npm run dev` o GA não é carregado.

### Referência (implementação atual)

1. **Propriedade GA4**
   - ID em uso: `G-MEMXJ444RW` (definido em `src/components/GoogleAnalytics.astro`).

2. **Componente no site**
   - `src/components/GoogleAnalytics.astro` injeta o gtag.js e inicializa o GA4 em produção.

3. **Layout**
   - O componente já está incluído no `<head>` de `src/layouts/Layout.astro`.

4. **Eventos opcionais (para enriquecer o portfólio)**
   - Clique em “Download Currículo”, clique em “Entre em Contato”, clique em projeto específico, etc.
   - No Astro, isso pode ser feito com um pequeno script no Layout ou em componentes que disparam `gtag('event', 'nome_do_evento', { ... })` nos links/buttons relevantes.

**Privacidade:** em regiões como UE, considere aviso de cookies/consent (ex.: banner com “Aceitar” antes de carregar o GA). Para portfólio pessoal muitos mantêm só o aviso no rodapé ou em uma página “Privacidade”.

---

## Opção 2: Plausible (ou similar)

**Vantagens:** foco em privacidade, sem cookies, implementação simples, bom para demonstrar preocupação com LGPD/GDPR.

1. Cadastre-se em [Plausible](https://plausible.io/) e adicione o domínio (ex.: `jairribeiro.dev`).
2. Copie o script que eles fornecem (um único `<script>`).
3. No Astro, inclua esse script apenas em produção, por exemplo em um componente `Plausible.astro` e use-o no `<head>` do `Layout.astro`. Use `import.meta.env.PROD` para não carregar em desenvolvimento.

Eventos personalizados (ex.: “download_cv”) podem ser enviados com a API deles, se quiser métricas por ação.

---

## O que medir para o seu cargo

Para um portfólio de **engenharia de dados** (ou similar), métricas que costumam impressionar em processos seletivos:

| Métrica / evento | Por que importa |
|------------------|------------------|
| Visualizações de página por projeto | Mostra quais estudos de caso geram mais interesse. |
| Cliques em “Currículo” / “Contato” | Demonstra conversão e interesse em você. |
| Páginas de projeto mais acessadas | Ajuda a priorizar quais casos aprofundar em entrevistas. |
| Idioma (PT vs EN) | Útil se você almeja vagas internacionais. |
| Origem do tráfego (referrer) | Ver se vem do LinkedIn, GitHub, Google, etc. |

Sugestão: configurar pelo menos **pageviews** e **eventos** para “Download Currículo” e “Clique em Contato” (mailto/LinkedIn/GitHub). Com GA4 ou Plausible você consegue isso; com GA4 ainda pode conectar o Search Console para ver buscas que levam ao site.

---

## Resumo rápido

1. Escolher uma ferramenta (GA4 ou Plausible).
2. Criar componente que injeta o script só em **produção** e só quando a variável de ambiente estiver definida.
3. Usar `PUBLIC_GA_MEASUREMENT_ID` (ou equivalente) em secrets do GitHub / `.env` local.
4. Incluir o componente de analytics no `Layout.astro`.
5. (Opcional) Adicionar eventos para “Download Currículo”, “Contato” e links de projetos para enriquecer relatórios.

Assim que o site estiver estável em produção, seguir esses passos já deixa o tracking pronto para você usar os dados no portfólio e em conversas de carreira.
