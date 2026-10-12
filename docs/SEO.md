# Auditoria de SEO e indexação

## Resultado

24 páginas de conteúdo (12 por idioma) com titles e descriptions únicos, canonical absoluto autorreferente e alternates recíprocos pt-BR/en/x-default. Textos, design, rotas e i18n foram preservados. Não foi necessário reescrever títulos ou descrições existentes.

robots.txt já permitia rastreamento e apontava corretamente para sitemap-index.xml: preservado. Sitemap agora exclui a raiz de redirecionamento e inclui apenas páginas canônicas, com os mesmos alternates do HTML. Não se inventam datas lastmod.

404 usa noindex, follow e não declara canonical, alternates de páginas existentes ou schema de perfil. GitHub Pages deve entregar 404.html com status HTTP 404 para caminhos inexistentes. A raiz mantém o redirecionamento estático gerado pelo Astro, com noindex e canonical para /pt/; Pages não oferece redirecionamento HTTP 301 configurável por rota.

Open Graph preservado, com locale alternativo e texto da imagem; Twitter Cards agora possuem título, descrição e imagem explícitos. Person recebe um identificador estável; ProfessionalService aparece somente nas páginas de serviços, vinculado à pessoa. Sem endereço, avaliações ou dados não publicados inventados. Esse schema descreve o serviço e não promete rich results de negócio local.

CNAME preserva o domínio personalizado a cada publicação (o workflow substitui os arquivos da branch deploy). PUBLIC_GOOGLE_SITE_VERIFICATION e PUBLIC_BING_SITE_VERIFICATION habilitam verificação por meta tag quando fornecidas no build, inclusive via Repository Variables no GitHub Actions.

## Passos manuais após publicar

1. No Google Search Console, criar propriedade de domínio jairribeiro.dev e adicionar ao DNS o TXT fornecido. Alternativa: propriedade de prefixo https://jairribeiro.dev/ e meta tag PUBLIC_GOOGLE_SITE_VERIFICATION. Não copiar um token fictício. Publicar novamente ao mudar variáveis.
2. No Bing Webmaster Tools, importar a propriedade verificada do Google ou concluir a verificação DNS/meta tag PUBLIC_BING_SITE_VERIFICATION.
3. Enviar https://jairribeiro.dev/sitemap-index.xml em ambas as ferramentas. Inspecionar /pt/, /en/, /pt/servicos/ e um case e solicitar indexação das páginas principais.
4. Confirmar domínio personalizado e HTTPS em GitHub Pages; conferir que URLs existentes retornam 200, caminho inexistente retorna 404, robots/sitemaps/imagem social estão acessíveis e variantes HTTP/www convergem ao domínio HTTPS escolhido.
5. Acompanhar relatórios de indexação e canonical escolhido. Indexação não é garantida por sitemap, schema ou IndexNow.

## IndexNow opcional

Compatível com o deploy estático: arquivo público de chave em public/ e envio por Node após publicação. npm run indexnow gera uma prévia sem rede. npm run indexnow -- --submit verifica primeiro a chave no domínio e envia as 24 URLs canônicas. A chave não é credencial de conta. Não há envio automático durante build ou deploy: a disponibilidade dos arquivos novos em Pages precisa ser confirmada primeiro. HTTP 200/202 indica recebimento, não indexação. O script usa o sitemap atual; remoções futuras devem ser notificadas separadamente.

## Validação

npm run lint; npm run typecheck; npm run build; npm run test:site; npm run indexnow.
Testes verificam links internos, fragmentos, assets, titles/descriptions únicos, canonical exato, alternates, schema, cards, sitemap e exclusão de 404/redirecionamento. Verificação de conta, DNS e comportamento HTTP final exige publicação e acesso às ferramentas do proprietário.

## Referências

- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://support.google.com/webmasters/answer/9008080
- https://docs.astro.build/en/guides/integrations-guide/sitemap/
- https://www.indexnow.org/documentation
