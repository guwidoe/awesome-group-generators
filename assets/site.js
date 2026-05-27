(() => {
  const DATA_URL = './data/tools.json';
  const SUPPORT_LABELS = { yes: 'Yes', partial: 'Partial', no: 'No', na: 'N/A' };
  const RATING_LABELS = {
    easeOfUse: 'Ease',
    design: 'Design',
    features: 'Features',
    outputs: 'Exports',
    privacy: 'Privacy',
    accountFriction: 'Account friction',
    resultQuality: 'Quality',
  };
  const CARD_RATING_KEYS = ['resultQuality', 'features', 'outputs', 'privacy', 'easeOfUse', 'design', 'accountFriction'];
  const PRICING_FILTERS = {
    any: 'Any pricing',
    'free-no-account': 'Free, no account',
    'free-caveats': 'Free with ads/upsells',
    paid: 'Paid or subscription',
    unclear: 'Unclear pricing',
  };
  const PRESETS = [
    {
      id: 'serious',
      label: 'Serious planning',
      tags: ['constraints'],
      features: ['Multiple rounds/sessions', 'Repeat encounter limits'],
      minRating: 3,
    },
    {
      id: 'repeat',
      label: 'Repeat minimization',
      tags: ['multi-round'],
      features: ['Unique-contact optimization'],
      minRating: 0,
    },
    {
      id: 'privacy',
      label: 'Privacy-friendly',
      tags: ['privacy-friendly'],
      features: ['Runs in browser'],
      minRating: 0,
    },
    {
      id: 'exports',
      label: 'Strong exports',
      tags: ['strong-exports'],
      features: ['Spreadsheet CSV export'],
      minRating: 0,
    },
    {
      id: 'classroom',
      label: 'Classroom controls',
      tags: ['constraints'],
      features: ['Hard keep-apart constraints', 'Editable/random team names'],
      minRating: 0,
    },
    {
      id: 'simple',
      label: 'Basic randomizers',
      tags: ['basic-randomizer'],
      features: [],
      minRating: 0,
    },
  ];
  const IMPORTANT_FEATURES = [
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

  const state = {
    data: null,
    tools: [],
    query: '',
    sort: 'rank',
    direction: 'asc',
    minRating: 0,
    pricing: 'any',
    includePartial: true,
    tags: new Set(),
    features: new Set(),
    featureQuery: '',
    filtered: [],
  };

  const el = {};
  document.addEventListener('DOMContentLoaded', init);

  async function init() {
    bindElements();
    bindEvents();
    bindSectionToggles();
    try {
      const response = await fetch(DATA_URL, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`Dataset request failed with ${response.status}`);
      const data = await response.json();
      state.data = data;
      state.tools = data.tools || [];
      hydrateStats(data);
      renderStaticFilters();
      applyFilters();
    } catch (error) {
      renderLoadError(error);
    }
  }

  function bindElements() {
    const ids = [
      'search-input', 'sort-select', 'direction-button', 'min-rating', 'min-rating-output',
      'pricing-filter', 'include-partial', 'reset-button', 'preset-list', 'tag-list', 'feature-search',
      'feature-list', 'active-filters', 'result-count', 'tool-list', 'empty-state',
      'copy-json-button', 'stat-tool-count', 'stat-top-score', 'stat-revision', 'stat-exported',
    ];
    ids.forEach((id) => { el[camel(id)] = document.getElementById(id); });
  }

  function bindEvents() {
    el.searchInput.addEventListener('input', () => {
      state.query = el.searchInput.value.trim().toLowerCase();
      applyFilters();
    });
    el.sortSelect.addEventListener('change', () => {
      state.sort = el.sortSelect.value;
      state.direction = defaultDirection(state.sort);
      updateDirectionButton();
      applyFilters();
    });
    el.directionButton.addEventListener('click', () => {
      state.direction = state.direction === 'asc' ? 'desc' : 'asc';
      updateDirectionButton();
      applyFilters();
    });
    el.minRating.addEventListener('input', () => {
      state.minRating = Number(el.minRating.value);
      updateMinRatingOutput();
      applyFilters();
    });
    el.pricingFilter.addEventListener('change', () => {
      state.pricing = el.pricingFilter.value;
      applyFilters();
    });
    el.includePartial.addEventListener('change', () => {
      state.includePartial = el.includePartial.checked;
      renderFeatureFilters();
      applyFilters();
    });
    el.resetButton.addEventListener('click', (event) => {
      event.preventDefault();
      resetFilters();
    });
    el.featureSearch.addEventListener('input', () => {
      state.featureQuery = el.featureSearch.value.trim().toLowerCase();
      renderFeatureFilters();
    });
    el.copyJsonButton.addEventListener('click', copyFilteredJson);
  }

  function bindSectionToggles() {
    document.querySelectorAll('.filter-section-toggle').forEach((button) => {
      button.addEventListener('click', () => {
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        if (!panel) return;
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
        button.querySelector('.toggle-hint').textContent = expanded ? 'Show' : 'Hide';
      });
    });
  }

  function hydrateStats(data) {
    const topScore = Math.max(...state.tools.map((tool) => tool.overallRating || 0));
    el.statToolCount.textContent = String(data.metadata?.toolCount ?? state.tools.length);
    el.statTopScore.textContent = `${formatScore(topScore)}★`;
    el.statRevision.textContent = String(data.metadata?.sourceRevisionId ?? '—');
    el.statExported.textContent = formatDate(data.metadata?.exportedAt);
  }

  function renderStaticFilters() {
    renderPresets();
    renderTagFilters();
    renderFeatureFilters();
  }

  function renderPresets() {
    el.presetList.innerHTML = PRESETS.map((preset) => (
      `<button class="pill" type="button" data-preset="${escapeHtml(preset.id)}" aria-pressed="false">${escapeHtml(preset.label)}</button>`
    )).join('');
    el.presetList.querySelectorAll('[data-preset]').forEach((button) => {
      button.addEventListener('click', () => togglePreset(button.dataset.preset));
    });
  }

  function renderTagFilters() {
    const tags = [...new Set(state.tools.flatMap((tool) => tool.tags || []))].sort();
    el.tagList.innerHTML = tags.map((tag) => {
      const count = state.tools.filter((tool) => (tool.tags || []).includes(tag)).length;
      return `<button class="pill" type="button" data-tag="${escapeHtml(tag)}" aria-pressed="${state.tags.has(tag)}">${escapeHtml(tag)} <span aria-hidden="true">${count}</span></button>`;
    }).join('');
    el.tagList.querySelectorAll('[data-tag]').forEach((button) => {
      button.addEventListener('click', () => {
        toggleSetValue(state.tags, button.dataset.tag);
        renderTagFilters();
        syncPresetButtons();
        applyFilters();
      });
    });
  }

  function renderFeatureFilters() {
    const allFeatures = [...new Set(state.tools.flatMap((tool) => Object.keys(tool.features || {})))];
    const ordered = [
      ...IMPORTANT_FEATURES.filter((feature) => allFeatures.includes(feature)),
      ...allFeatures.filter((feature) => !IMPORTANT_FEATURES.includes(feature)).sort((a, b) => a.localeCompare(b)),
    ];
    const features = ordered.filter((feature) => !state.featureQuery || feature.toLowerCase().includes(state.featureQuery));
    el.featureList.innerHTML = features.map((feature) => {
      const count = state.tools.filter((tool) => hasFeature(tool, feature)).length;
      return `<button class="feature-button" type="button" data-feature="${escapeHtml(feature)}" aria-pressed="${state.features.has(feature)}">
        <strong>${escapeHtml(feature)}</strong>
        <span>${count} supporting ${state.includePartial ? 'yes/partial' : 'yes'}</span>
      </button>`;
    }).join('');
    el.featureList.querySelectorAll('[data-feature]').forEach((button) => {
      button.addEventListener('click', () => {
        toggleSetValue(state.features, button.dataset.feature);
        renderFeatureFilters();
        syncPresetButtons();
        applyFilters();
      });
    });
  }

  function togglePreset(id) {
    const preset = PRESETS.find((item) => item.id === id);
    if (!preset) return;
    const active = isPresetActive(preset);
    const method = active ? 'delete' : 'add';
    preset.tags.forEach((tag) => state.tags[method](tag));
    preset.features.forEach((feature) => state.features[method](feature));
    if (!active && preset.minRating > state.minRating) {
      state.minRating = preset.minRating;
      el.minRating.value = String(preset.minRating);
      el.minRatingOutput.value = preset.minRating.toFixed(1);
    }
    renderTagFilters();
    renderFeatureFilters();
    syncPresetButtons();
    applyFilters();
  }

  function isPresetActive(preset) {
    return preset.tags.every((tag) => state.tags.has(tag)) && preset.features.every((feature) => state.features.has(feature));
  }

  function syncPresetButtons() {
    el.presetList.querySelectorAll('[data-preset]').forEach((button) => {
      const preset = PRESETS.find((item) => item.id === button.dataset.preset);
      button.setAttribute('aria-pressed', preset && isPresetActive(preset) ? 'true' : 'false');
    });
  }

  function applyFilters() {
    const filtered = state.tools.filter((tool) => {
      if ((tool.overallRating || 0) < state.minRating) return false;
      if (state.pricing !== 'any' && pricingTier(tool) !== state.pricing) return false;
      if (state.query && !searchText(tool).includes(state.query)) return false;
      if (![...state.tags].every((tag) => (tool.tags || []).includes(tag))) return false;
      if (![...state.features].every((feature) => hasFeature(tool, feature))) return false;
      return true;
    });
    filtered.sort(compareTools);
    state.filtered = filtered;
    renderActiveFilters();
    renderResults(filtered);
  }

  function compareTools(a, b) {
    const direction = state.direction === 'asc' ? 1 : -1;
    const sort = state.sort;
    let av;
    let bv;
    if (sort === 'rank') {
      av = a.rank;
      bv = b.rank;
    } else if (sort === 'name') {
      return direction * a.name.localeCompare(b.name);
    } else if (sort === 'overallRating') {
      av = a.overallRating;
      bv = b.overallRating;
    } else {
      av = a.ratings?.[sort] ?? 0;
      bv = b.ratings?.[sort] ?? 0;
    }
    if (av === bv) return a.rank - b.rank;
    return direction * (av - bv);
  }

  function renderActiveFilters() {
    const chips = [];
    if (state.query) chips.push({ label: `Search: ${state.query}`, onRemove: () => { state.query = ''; el.searchInput.value = ''; } });
    if (state.minRating > 0) chips.push({ label: `Rating ≥ ${state.minRating.toFixed(1)}★`, onRemove: () => { state.minRating = 0; el.minRating.value = '0'; updateMinRatingOutput(); } });
    if (state.pricing !== 'any') chips.push({ label: `Pricing: ${PRICING_FILTERS[state.pricing] || state.pricing}`, onRemove: () => { state.pricing = 'any'; el.pricingFilter.value = 'any'; } });
    [...state.tags].forEach((tag) => chips.push({ label: `Tag: ${tag}`, onRemove: () => state.tags.delete(tag) }));
    [...state.features].forEach((feature) => chips.push({ label: `Feature: ${feature}`, onRemove: () => state.features.delete(feature) }));

    el.activeFilters.innerHTML = chips.map((chip, index) => (
      `<span class="filter-chip">${escapeHtml(chip.label)} <button type="button" data-chip="${index}" aria-label="Remove ${escapeHtml(chip.label)}">×</button></span>`
    )).join('');
    el.activeFilters.querySelectorAll('[data-chip]').forEach((button) => {
      button.addEventListener('click', () => {
        chips[Number(button.dataset.chip)].onRemove();
        renderTagFilters();
        renderFeatureFilters();
        syncPresetButtons();
        applyFilters();
      });
    });
  }

  function renderResults(tools) {
    el.resultCount.textContent = String(tools.length);
    el.emptyState.hidden = tools.length !== 0;
    el.toolList.hidden = tools.length === 0;
    el.toolList.innerHTML = tools.map(renderToolCard).join('');
  }

  function renderToolCard(tool) {
    const highlightedFeatures = selectedOrImportantFeatures(tool).slice(0, 8);
    const allFeatureRows = Object.entries(tool.features || {}).sort(([left], [right]) => left.localeCompare(right));
    const ratings = CARD_RATING_KEYS.map((key) => renderRatingRow(RATING_LABELS[key], tool.ratings?.[key] ?? 0, tool.ratingComments?.[key])).join('');

    const summary = tool.overallComment || tool.summary || tool.reviewNote || '';
    return `<article class="tool-card" id="${escapeHtml(tool.id)}">
      <div class="rank-score">
        <span class="rank">#${escapeHtml(String(tool.rank))}</span>
        <span class="score" aria-label="Overall rating ${formatScore(tool.overallRating)} out of 5 stars">${formatScore(tool.overallRating)}★</span>
      </div>
      <div class="tool-main">
        <h3><a href="${escapeAttribute(tool.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(tool.name)}</a></h3>
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

  function renderRatingRow(label, value, comment) {
    const width = Math.max(0, Math.min(100, (Number(value) / 5) * 100));
    const commentHtml = comment ? `<button class="rating-note-toggle" type="button" aria-expanded="false" title="Toggle note" onclick="var c=this.nextElementSibling;var open=c.hidden;c.hidden=!open;this.setAttribute('aria-expanded',String(open));this.textContent=open?'\u25b4':'\u25be'">\u25be</button><span class="rating-comment" hidden>${escapeHtml(comment)}</span>` : '';
    return `<div class="rating-row"><span>${escapeHtml(label)}</span><span class="rating-track"><span class="rating-fill" style="width:${width}%"></span></span><span>${formatScore(value)}★</span>${commentHtml}</div>`;
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
    return `<h4>${escapeHtml(title)}</h4><ul>${items.slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  }

  function selectedOrImportantFeatures(tool) {
    if (state.features.size) return [...state.features];
    const supportedImportant = IMPORTANT_FEATURES.filter((feature) => hasFeature(tool, feature));
    const supportedOther = Object.keys(tool.features || {}).filter((feature) => hasFeature(tool, feature) && !supportedImportant.includes(feature));
    return [...supportedImportant, ...supportedOther];
  }

  function hasFeature(tool, feature) {
    const value = tool.features?.[feature];
    return value === 'yes' || (state.includePartial && value === 'partial');
  }

  function resetFilters() {
    state.query = '';
    state.sort = 'rank';
    state.direction = 'asc';
    state.minRating = 0;
    state.pricing = 'any';
    state.includePartial = true;
    state.tags.clear();
    state.features.clear();
    state.featureQuery = '';
    el.searchInput.value = '';
    el.sortSelect.value = 'rank';
    el.minRating.value = '0';
    updateMinRatingOutput();
    el.pricingFilter.value = 'any';
    el.includePartial.checked = true;
    el.featureSearch.value = '';
    updateDirectionButton();
    renderStaticFilters();
    applyFilters();
  }

  async function copyFilteredJson() {
    const payload = JSON.stringify({ metadata: state.data?.metadata, tools: state.filtered }, null, 2);
    try {
      await navigator.clipboard.writeText(payload);
      flashButton(el.copyJsonButton, 'Copied');
    } catch (_) {
      flashButton(el.copyJsonButton, 'Copy failed');
    }
  }

  function flashButton(button, label) {
    const original = button.textContent;
    button.textContent = label;
    window.setTimeout(() => { button.textContent = original; }, 1600);
  }

  function renderLoadError(error) {
    el.resultCount.textContent = '0';
    el.emptyState.hidden = false;
    el.emptyState.innerHTML = `<h3>Could not load the review dataset.</h3><p>${escapeHtml(error.message)}. You can still open <a href="data/tools.json">the JSON file</a>.</p>`;
  }

  function toggleSetValue(set, value) {
    if (!value) return;
    if (set.has(value)) set.delete(value);
    else set.add(value);
  }

  function pricingTier(tool) {
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

  function pricingLabel(tool) {
    return PRICING_FILTERS[pricingTier(tool)] || 'Unclear pricing';
  }

  function searchText(tool) {
    return [
      tool.name, tool.url, tool.bestFor, tool.summary, tool.pricing, pricingLabel(tool), tool.overallComment,
      tool.reviewNote, ...(tool.tags || []), ...(tool.pros || []), ...(tool.cons || []),
    ].join(' ').toLowerCase();
  }

  function defaultDirection(sort) {
    return sort === 'rank' || sort === 'name' ? 'asc' : 'desc';
  }

  function updateDirectionButton() {
    const asc = state.direction === 'asc';
    el.directionButton.textContent = asc ? 'Ascending' : 'Descending';
    el.directionButton.setAttribute('aria-pressed', asc ? 'false' : 'true');
  }

  function updateMinRatingOutput() {
    el.minRatingOutput.textContent = `${Number(state.minRating || 0).toFixed(1)}★`;
  }

  function formatScore(value) {
    return Number(value || 0).toFixed(1).replace(/\.0$/, '');
  }

  function formatDate(value) {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
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

  function camel(id) {
    return id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
    }[char]));
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }
})();
