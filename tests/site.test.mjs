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
    for (const slug of [
      'ingestao-cdc',
      'otimizacao-dataform',
      'projeto-streamlit',
      'sla-logistico',
      'airflow-gke',
      'wiki-agentes-ia',
    ]) {
      const html = read(`${lang}/projetos/${slug}/index.html`);
      assert.equal((html.match(/id="section-\d"/g) || []).length, 7);
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

test('unverified numerical claims and confidential financial amounts are not published', () => {
  for (const file of htmlFiles) {
    const html = read(file);
    assert.doesNotMatch(
      html,
      /R\$|98[,.]5\s*%|97\s*%|98\s*%|600\s*mil|perda zero|zero loss/i,
    );
  }
  for (const lang of ['pt', 'en']) {
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
