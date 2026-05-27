export const SUPPORT_LABELS = { yes: 'Yes', partial: 'Partial', no: 'No', na: 'N/A' };

export const RATING_LABELS = {
  easeOfUse: 'Ease',
  design: 'Design',
  features: 'Features',
  outputs: 'Exports',
  privacy: 'Privacy',
  accountFriction: 'Account friction',
  resultQuality: 'Quality',
};

export const CARD_RATING_KEYS = [
  'resultQuality',
  'features',
  'outputs',
  'privacy',
  'easeOfUse',
  'design',
  'accountFriction',
];

export const PRICING_FILTERS = {
  any: 'Any pricing',
  'free-no-account': 'Free, no account',
  'free-caveats': 'Free with ads/upsells',
  paid: 'Paid or subscription',
  unclear: 'Unclear pricing',
};

export const IMPORTANT_FEATURES = [
  'Multiple rounds/sessions',
  'Repeat encounter limits',
  'Unique-contact optimization',
  'Hard keep-apart constraints',
  'Hard keep-together constraints',
  'Attribute balance constraints',
  'Custom group capacities',
  'Partial attendance by session',
  'Runs in browser',
  'No account required',
  'Spreadsheet CSV export',
  'Zoom breakout CSV import/export',
  'Presentation/full-screen mode',
  'Self-join participant link',
  'Saved participant/team lists',
  'Result quality diagnostics',
];

export function renderToolCard(tool, options = {}) {
  const highlightedFeatures = selectedOrImportantFeatures(tool, options).slice(0, 8);
  const allFeatureRows = Object.entries(tool.features || {}).sort(([left], [right]) => left.localeCompare(right));
  const ratings = CARD_RATING_KEYS.map((key) => (
    renderRatingRow(RATING_LABELS[key], tool.ratings?.[key] ?? 0, tool.ratingComments?.[key])
  )).join('');

  const summary = tool.overallComment || tool.summary || tool.reviewNote || '';
  return `<article class="tool-card" id="${escapeHtml(tool.id)}">
      <div class="rank-score">
        <span class="rank">#${escapeHtml(String(tool.rank))}</span>
        <span class="score" aria-label="Overall rating ${formatScore(tool.overallRating)} out of 5 stars">${formatScore(tool.overallRating)}★</span>
      </div>
      <div class="tool-main">
        <h3><a class="tool-title-link" href="${escapeAttribute(tool.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(tool.name)}<span class="external-link-icon" aria-hidden="true">↗</span><span class="sr-only"> opens tool website</span></a></h3>
        <p class="best-for">${escapeHtml(tool.bestFor || 'No best-fit summary available.')}</p>
        <div class="tag-row" aria-label="Tags">${renderTags([...new Set([pricingLabel(tool), ...(tool.tags || [])])])}</div>
        <div class="feature-row" aria-label="Feature support">${highlightedFeatures.map((feature) => renderSupport(feature, tool.features?.[feature])).join('')}</div>
        <details class="features-details">
          <summary>Show all features</summary>
          <div class="all-feature-grid" aria-label="All feature support for ${escapeAttribute(tool.name)}">
            ${allFeatureRows.map(([feature, support]) => renderSupport(feature, support)).join('')}
          </div>
        </details>
      </div>
      <div class="rating-stack" aria-label="Selected ratings">${ratings}</div>
      <details class="tool-details">
        <summary>Review notes</summary>
        <div class="detail-body">
          <div>
            <h4>Summary</h4>
            <p>${escapeHtml(summary || 'No summary available.')}</p>
            ${tool.pricing ? `<p><strong>Pricing:</strong> ${escapeHtml(tool.pricing)}</p>` : ''}
          </div>
          <div>
            ${renderList('Pros', tool.pros)}
            ${renderList('Cons', tool.cons)}
          </div>
        </div>
      </details>
    </article>`;
}

export function selectedOrImportantFeatures(tool, options = {}) {
  const selectedFeatures = options.selectedFeatures ? [...options.selectedFeatures] : [];
  if (selectedFeatures.length) return selectedFeatures;
  const supportedImportant = IMPORTANT_FEATURES.filter((feature) => hasFeature(tool, feature, options));
  const supportedOther = Object.keys(tool.features || {}).filter(
    (feature) => hasFeature(tool, feature, options) && !supportedImportant.includes(feature)
  );
  return [...supportedImportant, ...supportedOther];
}

export function hasFeature(tool, feature, options = {}) {
  const includePartial = options.includePartial ?? true;
  const value = tool.features?.[feature];
  return value === 'yes' || (includePartial && value === 'partial');
}

function renderRatingRow(label, value, comment) {
  const width = Math.max(0, Math.min(100, (Number(value) / 5) * 100));
  const toggleBtn = comment ? `<button class="rating-note-toggle" type="button" aria-expanded="false" title="Toggle note" onclick="var c=this.parentNode.nextElementSibling;var open=!c.hidden;c.hidden=open;this.setAttribute('aria-expanded',String(!open));this.textContent=open?'\u25be':'\u25b4'">\u25be</button>` : '';
  const commentEl = comment ? `<div class="rating-comment" hidden>${escapeHtml(comment)}</div>` : '';
  return `<div class="rating-row"><span>${escapeHtml(label)}</span><span class="rating-track"><span class="rating-fill" style="width:${width}%"></span></span><span>${formatScore(value)}\u2605</span>${toggleBtn}</div>${commentEl}`;
}

function renderTags(tags) {
  if (!tags.length) return '<span class="tag">untagged</span>';
  return tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
}

function renderSupport(feature, support) {
  const value = support || 'no';
  return `<span class="support-pill support-${escapeHtml(value)}" title="${escapeAttribute(feature)}: ${escapeAttribute(SUPPORT_LABELS[value] || value)}">${escapeHtml(shortFeature(feature))}: ${escapeHtml(SUPPORT_LABELS[value] || value)}</span>`;
}

function renderList(title, items) {
  if (!items || !items.length) return '';
  return `<h4>${escapeHtml(title)}</h4><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

export function pricingTier(tool) {
  const text = String(tool.pricing || '').toLowerCase();
  const normalized = text
    .replace(/no account, subscription, or paywall/g, 'no account')
    .replace(/no (separate )?[^.]{0,50}subscription/g, '')
    .replace(/no (account or )?payment/g, '')
    .replace(/no paid [^.]{0,80}/g, '')
    .replace(/not clearly priced/g, '');
  const hasFree = /\bfree\b|no account required|no account/.test(normalized);
  const hasCaveat = /\bad-supported\b|\bads?\b|\bpremium\b|paid tier|paid plan|\bupgrade\b|\bfreemium\b|\bpaywall\b|\blimited\b|\blogin\b|sign-in|sign in|google account|microsoft account/.test(normalized);
  const hasPaid = /\bpaid\b|\bsubscription\b|\bpurchase\b|app-store|app store|pro plan|per month|per year|monthly|yearly|\blicense\b|starts at|\bcosts\b|chatgpt pro|microsoft 365/.test(normalized);
  if (hasFree && !hasCaveat && !hasPaid) return 'free-no-account';
  if (hasFree) return 'free-caveats';
  if (hasPaid) return 'paid';
  return 'unclear';
}

export function pricingLabel(tool) {
  return PRICING_FILTERS[pricingTier(tool)] || 'Unclear pricing';
}

export function searchText(tool) {
  return [
    tool.name, tool.url, tool.bestFor, tool.summary, tool.pricing, pricingLabel(tool), tool.overallComment,
    tool.reviewNote, ...(tool.tags || []), ...(tool.pros || []), ...(tool.cons || []),
  ].join(' ').toLowerCase();
}

export function formatScore(value) {
  return Number(value || 0).toFixed(1).replace(/\.0$/, '');
}

function shortFeature(feature) {
  return feature
    .replace('Spreadsheet CSV ', 'CSV ')
    .replace(' import/export', '')
    .replace(' constraints', '')
    .replace(' optimization', '')
    .replace('Multiple rounds/sessions', 'Multi-round')
    .replace('No account required', 'No account')
    .replace('Runs in browser', 'Browser')
    .replace('Presentation/full-screen mode', 'Presentation')
    .replace('Zoom breakout CSV', 'Zoom CSV');
}

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}
