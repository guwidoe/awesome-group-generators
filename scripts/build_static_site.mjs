import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { formatScore, renderToolCard } from '../assets/tool-card-renderer.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const INDEX_PATH = resolve(ROOT, 'index.html');
const DATA_PATH = resolve(ROOT, 'data/tools.json');

function formatDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${label} in index.html`);
  }
  return html.replace(pattern, replacement);
}

const data = JSON.parse(await readFile(DATA_PATH, 'utf8'));
const tools = data.tools || [];
const metadata = data.metadata || {};
const topScore = Math.max(...tools.map((tool) => tool.overallRating || 0));
const cards = tools.map((tool) => renderToolCard(tool)).join('\n');

let html = await readFile(INDEX_PATH, 'utf8');

html = replaceOnce(
  html,
  /<script(?: type="module")? src="assets\/site\.js"(?: defer)?><\/script>/,
  '<script type="module" src="assets/site.js"></script>',
  'module script tag'
);

html = replaceOnce(
  html,
  /<strong id="stat-tool-count">[^<]*<\/strong>/,
  `<strong id="stat-tool-count">${metadata.toolCount ?? tools.length}</strong>`,
  'tool count stat'
);
html = replaceOnce(
  html,
  /<strong id="stat-top-score">[^<]*<\/strong>/,
  `<strong id="stat-top-score">${formatScore(topScore)}★</strong>`,
  'top score stat'
);
html = replaceOnce(
  html,
  /<strong id="stat-revision">[^<]*<\/strong>/,
  `<strong id="stat-revision">${metadata.sourceRevisionId ?? '—'}</strong>`,
  'revision stat'
);
html = replaceOnce(
  html,
  /<strong id="stat-exported">[^<]*<\/strong>/,
  `<strong id="stat-exported">${formatDate(metadata.exportedAt)}</strong>`,
  'exported stat'
);
html = replaceOnce(
  html,
  /<h2 id="results-title"><span id="result-count">[^<]*<\/span> matching tools<\/h2>/,
  `<h2 id="results-title"><span id="result-count">${tools.length}</span> matching tools</h2>`,
  'result count'
);

const staticBlock = `<div id="tool-list" class="tool-list" aria-live="polite">\n<!-- static-tool-cards:start -->\n${cards}\n<!-- static-tool-cards:end -->\n        </div>`;
html = replaceOnce(
  html,
  /<div id="tool-list" class="tool-list" aria-live="polite">[\s\S]*?<\/div>\s*<\/section>/,
  `${staticBlock}\n      </section>`,
  'tool list'
);

await writeFile(INDEX_PATH, html);
console.log(`Wrote ${tools.length} static tool cards to index.html`);
