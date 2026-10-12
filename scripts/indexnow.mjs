import { readFileSync } from 'node:fs';
const origin = 'https://jairribeiro.dev';
const key = 'fb3f12fd8eacf96207822983533cfd94';
const xml = readFileSync(
  new URL('../dist/sitemap-0.xml', import.meta.url),
  'utf8',
);
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length || urlList.some((url) => new URL(url).origin !== origin))
  throw new Error('Invalid sitemap');
const payload = {
  host: new URL(origin).host,
  key,
  keyLocation: origin + '/' + key + '.txt',
  urlList,
};
if (process.argv.includes('--submit')) {
  const response = await fetch(payload.keyLocation);
  if (!response.ok || (await response.text()).trim() !== key)
    throw new Error('Publish the key file before submitting');
  const result = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (![200, 202].includes(result.status))
    throw new Error('IndexNow HTTP ' + result.status);
  console.log('IndexNow received URLs; HTTP ' + result.status);
} else console.log(JSON.stringify(payload, null, 2));
