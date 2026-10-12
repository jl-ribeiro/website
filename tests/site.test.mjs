import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, join, extname } from 'node:path';
import { URL } from 'node:url';

const root = resolve('dist');
const files = readdirSync(root, { recursive: true }).filter((file) =>
  String(file).endsWith('.html'),
);
const htmlFiles = files.filter((file) => /^(pt|en)[\\/]/.test(String(file)));
const read = (file) => readFileSync(join(root, file), 'utf8');
const localFile = (pathname) =>
  join(root, extname(pathname) ? pathname : `${pathname}/index.html`);

test('both locales include the six main pages and six complete case studies', () => {
  assert.equal(htmlFiles.length, 24);
  for (const lang of ['pt', 'en']) {
    for (const page of [
      '',
      'sobre',
      'experiencia',
      'cases',
      'servicos',
      'contato',
    ]) {
      assert.ok(existsSync(localFile(`/${lang}/${page}`)), `${lang}/${page}`);
    }
    for (const [slug, sectionCount] of [
      ['ingestao-cdc', 7],
      ['otimizacao-dataform', 7],
      ['projeto-streamlit', 6],
      ['sla-logistico', 6],
      ['airflow-gke', 5],
      ['wiki-agentes-ia', 5],
    ]) {
      const html = read(`${lang}/projetos/${slug}/index.html`);
      assert.equal(
        (html.match(/id="section-\d+"/g) || []).length,
        sectionCount,
      );
      assert.equal(
        (html.match(/href="#section-\d+"/g) || []).length,
        sectionCount,
      );
      for (let i = 0; i < sectionCount; i++) {
        assert.match(
          html,
          new RegExp(`<section id="section-${i}">[\\s\\S]*?<h2>[^<]+</h2>`),
        );
      }
    }
  }
});

test('all content pages have one h1, localized metadata and a main landmark', () => {
  for (const file of htmlFiles) {
    const html = read(file);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, file);
    assert.match(html, /<main id="main-content"/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /rel="canonical"/);
    assert.match(html, /hreflang="pt-BR"/);
    assert.match(html, /hreflang="en"/);
    assert.match(
      html,
      String(file).startsWith('pt') ? /<html lang="pt-BR"/ : /<html lang="en"/,
    );
  }
});

test('internal links, fragments, alternate language URLs and assets resolve', () => {
  for (const file of files) {
    const html = read(file);
    const relative = String(file).replaceAll('\\', '/');
    const pageUrl = new URL(
      `/${relative.replace(/index\.html$/, '')}`,
      'https://jairribeiro.dev',
    );
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const href = match[1];
      if (/^(mailto:|data:|javascript:)/.test(href)) continue;
      const url = new URL(href, pageUrl);
      if (url.origin !== pageUrl.origin) continue;
      const target = localFile(decodeURIComponent(url.pathname));
      assert.ok(existsSync(target), `${file}: missing ${href}`);
      if (url.hash) {
        const targetHtml = readFileSync(target, 'utf8');
        assert.ok(
          targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `${file}: missing anchor ${href}`,
        );
      }
    }
  }
});

test('superseded numerical claims and confidential financial amounts are not published', () => {
  for (const file of htmlFiles) {
    const html = read(file);
    assert.doesNotMatch(
      html,
      /R\$|98[,.]5\s*%|97\s*%|600\s*mil|perda zero|zero loss/i,
    );
  }
  for (const lang of ['pt', 'en']) {
    // EDITORIAL.md confirms this metric for the direct ingestion-model comparison.
    const ingestion = read(`${lang}/projetos/ingestao-cdc/index.html`);
    assert.match(
      ingestion,
      lang === 'pt'
        ? /aproximadamente 98% de redução no custo de ingestão/
        : /approximately 98% lower ingestion cost/,
    );
    const html = read(`${lang}/projetos/otimizacao-dataform/index.html`);
    assert.match(
      html,
      lang === 'pt'
        ? /Iniciativa em andamento/
        : /initiative is still in progress/,
    );
  }
});

test('contact journeys have real addresses and no fabricated CV download', () => {
  for (const lang of ['pt', 'en']) {
    const html = read(`${lang}/contato/index.html`);
    assert.match(html, /mailto:jair\.lima\.ribeiro@gmail\.com\?subject=/);
    assert.match(html, /https:\/\/linkedin\.com\/in\/jlribeiro/);
    if (!existsSync('public/CV_Jair_Ribeiro.pdf'))
      assert.doesNotMatch(html, /href="\/CV_Jair_Ribeiro\.pdf"/);
  }
});

test('canonical URLs, reciprocal alternates, unique metadata and social cards agree', () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const file of htmlFiles) {
    const html = read(file);
    const path =
      '/' +
      String(file)
        .replaceAll('\\', '/')
        .replace(/index\.html$/, '');
    const canonical = 'https://jairribeiro.dev' + path;
    assert.ok(html.includes('rel="canonical" href="' + canonical + '"'), file);
    const rest = path.replace(/^\/(pt|en)/, '');
    for (const [lang, prefix] of [
      ['pt-BR', 'pt'],
      ['en', 'en'],
      ['x-default', 'pt'],
    ]) {
      assert.ok(
        html.includes(
          'hreflang="' +
            lang +
            '" href="https://jairribeiro.dev/' +
            prefix +
            rest +
            '"',
        ),
        file,
      );
    }
    const title = html.match(/<title>([^<]+)<\/title>/)[1];
    const description = html.match(/name="description" content="([^"]+)"/)[1];
    assert.ok(!titles.has(title), 'Duplicate title: ' + file);
    assert.ok(!descriptions.has(description), 'Duplicate description: ' + file);
    titles.add(title);
    descriptions.add(description);
    for (const name of [
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'twitter:card',
    ]) {
      assert.ok(html.includes('name="' + name + '"'), file);
    }
    assert.ok(
      html.includes('property="og:url" content="' + canonical + '"'),
      file,
    );
    assert.doesNotMatch(html, /noindex/);
    const data = JSON.parse(
      html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)[1],
    );
    assert.equal(data['@graph'][0]['@type'], 'Person');
    assert.equal(
      data['@graph'].some((item) => item['@type'] === 'ProfessionalService'),
      path.endsWith('/servicos/'),
    );
  }
});

test('sitemap only lists canonical content and 404 remains excluded', () => {
  const sitemap = read('sitemap-0.xml');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.equal(urls.length, 24);
  assert.equal(new Set(urls).size, 24);
  for (const url of urls) {
    const path = new URL(url).pathname;
    assert.match(path, /^\/(pt|en)\/(?:.*\/)?$/);
    assert.ok(existsSync(localFile(path)));
  }
  assert.equal((sitemap.match(/hreflang="x-default"/g) || []).length, 24);
  assert.match(
    read('robots.txt'),
    /Sitemap: https:\/\/jairribeiro\.dev\/sitemap-index\.xml/,
  );
  assert.match(read('sitemap-index.xml'), /sitemap-0\.xml/);
  assert.equal(read('CNAME').trim(), 'jairribeiro.dev');
  const error = read('404.html');
  assert.match(error, /name="robots" content="noindex, follow"/);
  assert.doesNotMatch(
    error,
    /rel="canonical"|rel="alternate"|application\/ld\+json/,
  );
  assert.match(read('index.html'), /name="robots" content="noindex"/);
});
