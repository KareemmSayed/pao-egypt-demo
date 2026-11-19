/* ==========================================================================
   PÀO · BOBA & MORE (波巴) — Flagship Interactive Application
   ========================================================================== */

(function () {
  'use strict';

  const DATA = window.PAO_DATA;
  if (!DATA) return;

  /* ------------------------------------------------------------------------
     APPLICATION STATE
     ------------------------------------------------------------------------ */
  const state = {
    heroIndex: 0,
    heroPierced: false,
    activeSeries: 'featured',
    searchQuery: '',
    skinnyOnly: false,
    noodleProtein: 'original',
    noodleSpice: 0,
    activeCounter: 'toasties',
    merchFilter: 'all',
    merchSizes: {},
    branchRegion: 'east',
    branchFoodOnly: false,
    branch24hOnly: false,
    selectedBranchId: 'district-5',
    cateringIndex: 0,
    tray: [],
    customizer: {
      drink: null,
      size: 'reg',
      sweetness: '100',
      ice: 'regular',
      milk: 'whole',
      addons: new Set()
    }
  };

  /* ------------------------------------------------------------------------
     UTILITIES & TOAST
     ------------------------------------------------------------------------ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  let toastTimer = null;
  function showToast(msg) {
    const el = $('#paoToast');
    const txt = $('#paoToastText');
    if (!el || !txt) return;
    txt.textContent = msg;
    el.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-show'), 2600);
  }

  function formatEGP(num) {
    return `${Math.round(num)} EGP`;
  }

  function getSelectedBranch() {
    return DATA.branches.find((b) => b.id === state.selectedBranchId) || DATA.branches[0];
  }

  /* ------------------------------------------------------------------------
     HEADER SCROLL & MOBILE NAV
     ------------------------------------------------------------------------ */
  function initHeader() {
    const header = $('#siteHeader');
    const onScroll = () => {
      const scrolled = window.scrollY > 48;
      header.classList.toggle('is-scrolled', scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const mobileNav = $('#mobileNav');
    const openBtn = $('#openMobileNav');
    const closeBtn = $('#closeMobileNav');
    const closeMobile = () => {
      mobileNav.classList.remove('is-open');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    openBtn?.addEventListener('click', () => {
      mobileNav.classList.add('is-open');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
    closeBtn?.addEventListener('click', closeMobile);
    $$('.mnav-link').forEach((a) => a.addEventListener('click', closeMobile));
  }

  /* ------------------------------------------------------------------------
     SECTION 1: HERO SIGNATURE POUR DIAL & "PIERCE THE SEAL" RITUAL
     ------------------------------------------------------------------------ */
  function renderHeroDial() {
    const tabsWrap = $('#heroDialTabs');
    if (!tabsWrap) return;
    tabsWrap.innerHTML = DATA.heroDrinks
      .map(
        (d, i) => `
      <button type="button" class="dial-btn ${i === state.heroIndex ? 'is-active' : ''}" data-hero-idx="${i}" role="tab" aria-selected="${i === state.heroIndex}">
        <span class="dial-dot" style="--dot-color:${d.accent};"></span>
        <span>${d.name}</span>
      </button>
    `
      )
      .join('');

    $$('.dial-btn', tabsWrap).forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.heroIdx);
        if (idx === state.heroIndex) return;
        state.heroIndex = idx;
        state.heroPierced = false;
        updateHeroStage(true);
      });
    });
  }

  function updateHeroStage(animate = false) {
    const drink = DATA.heroDrinks[state.heroIndex];
    const visual = $('#heroCupVisual');
    const img = $('#heroCupImg');
    const ambient = $('#heroAmbient');
    const pierceBtn = $('#pierceSealBtn');
    const pierceText = $('#pierceSealText');
    const sealState = $('#heroSealState');

    $$('#heroDialTabs .dial-btn').forEach((b, i) => {
      b.classList.toggle('is-active', i === state.heroIndex);
      b.setAttribute('aria-selected', String(i === state.heroIndex));
    });

    if (ambient) {
      ambient.style.setProperty('--hero-accent', drink.accent);
    }

    const applyContent = () => {
      img.src = drink.img;
      img.alt = drink.name;
      $('#heroSealCode').textContent = drink.sealCode;
      $('#heroCupSeries').textContent = drink.series.toUpperCase();
      $('#heroCupName').textContent = drink.name;
      $('#heroCupPrice').textContent = formatEGP(drink.price);
      $('#heroCupTasting').textContent = drink.tasting;
      $('#heroSpecBody').textContent = drink.profile.body;
      $('#heroSpecPearls').textContent = drink.profile.pearls;
      $('#heroSpecFinish').textContent = drink.profile.finish;

      visual.classList.toggle('is-pierced', state.heroPierced);
      pierceBtn.classList.toggle('is-pierced', state.heroPierced);
      pierceText.textContent = state.heroPierced ? 'Seal Pierced!' : 'Pierce the Seal';
      sealState.innerHTML = state.heroPierced
        ? `<span class="seal-pill__dot" style="background:#196B4B;"></span><span>READY TO SIP</span>`
        : `<span class="seal-pill__dot"></span><span>HEAT-SEALED</span>`;
    };

    if (animate) {
      visual.classList.add('is-swapping');
      setTimeout(() => {
        applyContent();
        visual.classList.remove('is-swapping');
      }, 180);
    } else {
      applyContent();
    }
  }

  function initHero() {
    renderHeroDial();
    updateHeroStage(false);

    $('#pierceSealBtn')?.addEventListener('click', () => {
      state.heroPierced = !state.heroPierced;
      updateHeroStage(false);
      if (state.heroPierced) {
        const d = DATA.heroDrinks[state.heroIndex];
        showToast(`Pop! ${d.name} seal pierced — ready to customize.`);
      }
    });

    const openActiveHeroInCustomizer = () => {
      const heroDrink = DATA.heroDrinks[state.heroIndex];
      const full = DATA.drinks.find((d) => d.id === heroDrink.id) || DATA.drinks[0];
      openCustomizer(full);
    };

    $('#heroCustomizeBtn')?.addEventListener('click', openActiveHeroInCustomizer);
    $('#heroCraftActiveBtn')?.addEventListener('click', openActiveHeroInCustomizer);
  }

  /* ------------------------------------------------------------------------
     SECTION 3: FULL 12-SERIES DRINKS MENU
     ------------------------------------------------------------------------ */
  function getSeriesCount(seriesId) {
    if (seriesId === 'featured') return DATA.drinks.filter((d) => d.featured).length;
    return DATA.drinks.filter((d) => d.series === seriesId).length;
  }

  function renderSeriesRail() {
    const rail = $('#seriesRail');
    if (!rail) return;
    rail.innerHTML = DATA.drinkSeries
      .map(
        (s) => `
      <button type="button" class="series-tab ${s.id === state.activeSeries ? 'is-active' : ''}" data-series="${s.id}" role="tab" aria-selected="${s.id === state.activeSeries}">
        <span>${s.label}</span>
        <span class="series-tab__count">${getSeriesCount(s.id)}</span>
      </button>
    `
      )
      .join('');

    $$('.series-tab', rail).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeSeries = btn.dataset.series;
        state.searchQuery = '';
        const searchEl = $('#menuSearchInput');
        if (searchEl) searchEl.value = '';
        renderSeriesRail();
        renderDrinksGrid();
      });
    });
  }

  function renderDrinksGrid() {
    const grid = $('#drinksGrid');
    if (!grid) return;

    const q = state.searchQuery.trim().toLowerCase();
    let list = DATA.drinks;

    if (q) {
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.note.toLowerCase().includes(q) ||
          d.series.toLowerCase().includes(q) ||
          (d.tag && d.tag.toLowerCase().includes(q))
      );
      $('#activeSeriesTitle').textContent = `Search: “${state.searchQuery.trim()}”`;
      $('#activeSeriesSubtitle').textContent = `${list.length} matching pours`;
    } else {
      const seriesMeta = DATA.drinkSeries.find((s) => s.id === state.activeSeries) || DATA.drinkSeries[0];
      list = state.activeSeries === 'featured' ? list.filter((d) => d.featured) : list.filter((d) => d.series === state.activeSeries);
      $('#activeSeriesTitle').textContent = seriesMeta.label;
      $('#activeSeriesSubtitle').textContent = seriesMeta.subtitle;
    }

    if (state.skinnyOnly) {
      list = list.filter((d) => d.skinny);
    }

    if (!list.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:var(--ink-muted);">
          No pours match that filter right now. Try clearing search or turning off Skinny Ready.
        </div>
      `;
      return;
    }

    grid.innerHTML = list
      .map(
        (d) => `
      <article class="drink-card">
        <div class="drink-card__stage">
          <span class="drink-card__tag">${d.tag || 'Crafted'}</span>
          ${d.skinny ? '<span class="drink-card__skinny">0% Skinny</span>' : ''}
          <img src="${d.img}" alt="${d.name}" loading="lazy" />
        </div>
        <div class="drink-card__body">
          <div class="drink-card__head">
            <h4 class="drink-card__title">${d.name}</h4>
            <span class="drink-card__price">${formatEGP(d.price)}</span>
          </div>
          <p class="drink-card__note">${d.note}</p>
          <div class="drink-card__actions">
            <button type="button" class="card-btn card-btn--craft" data-craft-drink="${d.id}">Customize</button>
            <button type="button" class="card-btn card-btn--add" data-quick-drink="${d.id}">+ Add</button>
          </div>
        </div>
      </article>
    `
      )
      .join('');

    $$('[data-craft-drink]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const drink = DATA.drinks.find((d) => d.id === btn.dataset.craftDrink);
        if (drink) openCustomizer(drink);
      });
    });

    $$('[data-quick-drink]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const drink = DATA.drinks.find((d) => d.id === btn.dataset.quickDrink);
        if (!drink) return;
        addToTray({
          key: `drink:${drink.id}:default`,
          name: drink.name,
          meta: drink.hot ? 'Regular · Hot · Classic' : 'Regular · 100% Sweet · Reg Ice',
          price: drink.price,
          img: drink.img
        });
      });
    });
  }

  function initMenuControls() {
    renderSeriesRail();
    renderDrinksGrid();

    $('#menuSearchInput')?.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderDrinksGrid();
    });

    const skinnyBtn = $('#skinnyFilterBtn');
    skinnyBtn?.addEventListener('click', () => {
      state.skinnyOnly = !state.skinnyOnly;
      skinnyBtn.classList.toggle('is-active', state.skinnyOnly);
      skinnyBtn.setAttribute('aria-pressed', String(state.skinnyOnly));
      renderDrinksGrid();
    });
  }

  /* ------------------------------------------------------------------------
     INTERACTIVE CUP CUSTOMIZER MODAL
     ------------------------------------------------------------------------ */
  function openCustomizer(drink) {
    state.customizer.drink = drink;
    state.customizer.size = 'reg';
    state.customizer.sweetness = '100';
    state.customizer.ice = drink.hot ? 'hot' : 'regular';
    state.customizer.milk = 'whole';
    state.customizer.addons = new Set();

    const modal = $('#customizerModal');
    $('#custImg').src = drink.img;
    $('#custImg').alt = drink.name;
    const sMeta = DATA.drinkSeries.find((s) => s.id === drink.series);
    $('#custSeries').textContent = sMeta ? sMeta.label.toUpperCase() : 'PÀO BAR';
    $('#custTitle').textContent = drink.name;
    $('#custIceGroup').classList.toggle('is-hidden', Boolean(drink.hot));

    renderCustomizerOptions();
    updateCupSticker();

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCustomizer() {
    const modal = $('#customizerModal');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderCustomizerOptions() {
    const c = DATA.customizer;

    $('#custSizeOpts').innerHTML = c.sizes
      .map(
        (s) =>
          `<button type="button" class="cust-chip ${state.customizer.size === s.id ? 'is-active' : ''}" data-csize="${s.id}">${s.label}${s.delta ? ` (+${s.delta})` : ''}</button>`
      )
      .join('');

    $('#custSweetOpts').innerHTML = c.sweetness
      .map(
        (s) =>
          `<button type="button" class="cust-chip ${state.customizer.sweetness === s.id ? 'is-active' : ''}" data-csweet="${s.id}">${s.label}</button>`
      )
      .join('');

    $('#custIceOpts').innerHTML = c.ice
      .map(
        (i) =>
          `<button type="button" class="cust-chip ${state.customizer.ice === i.id ? 'is-active' : ''}" data-cice="${i.id}">${i.label}</button>`
      )
      .join('');

    $('#custMilkOpts').innerHTML = c.milks
      .map(
        (m) =>
          `<button type="button" class="cust-chip ${state.customizer.milk === m.id ? 'is-active' : ''}" data-cmilk="${m.id}">${m.label}${m.delta ? ` (+${m.delta})` : ''}</button>`
      )
      .join('');

    $('#custAddonOpts').innerHTML = c.addons
      .map(
        (a) =>
          `<button type="button" class="cust-chip ${state.customizer.addons.has(a.id) ? 'is-active' : ''}" data-caddon="${a.id}">${a.label} (+${a.delta})</button>`
      )
      .join('');

    $$('[data-csize]').forEach((b) =>
      b.addEventListener('click', () => {
        state.customizer.size = b.dataset.csize;
        renderCustomizerOptions();
        updateCupSticker();
      })
    );
    $$('[data-csweet]').forEach((b) =>
      b.addEventListener('click', () => {
        state.customizer.sweetness = b.dataset.csweet;
        renderCustomizerOptions();
        updateCupSticker();
      })
    );
    $$('[data-cice]').forEach((b) =>
      b.addEventListener('click', () => {
        state.customizer.ice = b.dataset.cice;
        renderCustomizerOptions();
        updateCupSticker();
      })
    );
    $$('[data-cmilk]').forEach((b) =>
      b.addEventListener('click', () => {
        state.customizer.milk = b.dataset.cmilk;
        renderCustomizerOptions();
        updateCupSticker();
      })
    );
    $$('[data-caddon]').forEach((b) =>
      b.addEventListener('click', () => {
        const id = b.dataset.caddon;
        if (state.customizer.addons.has(id)) state.customizer.addons.delete(id);
        else state.customizer.addons.add(id);
        renderCustomizerOptions();
        updateCupSticker();
      })
    );
  }

  function computeCustomCup() {
    const drink = state.customizer.drink;
    if (!drink) return { total: 0, specLine: '', addonLine: '' };
    const sizeObj = DATA.customizer.sizes.find((s) => s.id === state.customizer.size);
    const sweetObj = DATA.customizer.sweetness.find((s) => s.id === state.customizer.sweetness);
    const iceObj = drink.hot ? { label: 'Served Hot' } : DATA.customizer.ice.find((i) => i.id === state.customizer.ice);
    const milkObj = DATA.customizer.milks.find((m) => m.id === state.customizer.milk);
    const addonObjs = DATA.customizer.addons.filter((a) => state.customizer.addons.has(a.id));

    const total =
      drink.price +
      (sizeObj?.delta || 0) +
      (milkObj?.delta || 0) +
      addonObjs.reduce((sum, a) => sum + a.delta, 0);

    const specLine = `${sizeObj.label} · ${sweetObj.label} · ${iceObj.label} · ${milkObj.label}`;
    const addonLine = addonObjs.map((a) => a.label).join(' · ');
    return { total, specLine, addonLine };
  }

  function updateCupSticker() {
    const drink = state.customizer.drink;
    if (!drink) return;
    const { total, specLine, addonLine } = computeCustomCup();
    const branch = getSelectedBranch();
    $('#stickerBranch').textContent = branch.name.toUpperCase();
    $('#stickerPrice').textContent = formatEGP(total);
    $('#stickerDrink').textContent = drink.name.toUpperCase();
    $('#stickerSpecs').textContent = specLine.toUpperCase();
    $('#stickerAddons').textContent = addonLine ? addonLine.toUpperCase() : 'NO EXTRA TOPPINGS';
    $('#custTotal').textContent = formatEGP(total);
  }

  function initCustomizer() {
    $('#closeCustomizer')?.addEventListener('click', closeCustomizer);
    $('#customizerModal')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeCustomizer();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCustomizer();
        closeTray();
      }
    });

    $('#custConfirmAdd')?.addEventListener('click', () => {
      const drink = state.customizer.drink;
      if (!drink) return;
      const { total, specLine, addonLine } = computeCustomCup();
      const meta = addonLine ? `${specLine} · ${addonLine}` : specLine;
      addToTray({
        key: `drink:${drink.id}:${meta}`,
        name: drink.name,
        meta,
        price: total,
        img: drink.img
      });
      closeCustomizer();
    });
  }

  /* ------------------------------------------------------------------------
     SECTION 4: SAVORY NOODLE BOX BUILDER, PÀO POPS, TOASTIES & CROFFLES
     ------------------------------------------------------------------------ */
  function renderNoodleBuilder() {
    const nb = DATA.food.noodleBox;
    const protWrap = $('#noodleProteinOpts');
    const spiceWrap = $('#noodleSpiceOpts');

    protWrap.innerHTML = nb.proteins
      .map(
        (p) =>
          `<button type="button" class="opt-btn ${state.noodleProtein === p.id ? 'is-active' : ''}" data-nprot="${p.id}">${p.label}${p.delta ? ` (+${p.delta} EGP)` : ''}</button>`
      )
      .join('');

    spiceWrap.innerHTML = nb.spiceLevels
      .map((s) => {
        const flames = s.chillies ? '🌶'.repeat(s.chillies) + ' ' : '';
        return `<button type="button" class="opt-btn opt-btn--spice ${state.noodleSpice === s.id ? 'is-active' : ''}" data-nspice="${s.id}">${flames}${s.label}${s.delta ? ` (+${s.delta})` : ''}</button>`;
      })
      .join('');

    const protObj = nb.proteins.find((p) => p.id === state.noodleProtein);
    const spiceObj = nb.spiceLevels.find((s) => s.id === state.noodleSpice);
    const total = nb.basePrice + protObj.delta + spiceObj.delta;

    $('#noodleProteinHint').textContent = protObj.delta ? `Base 220 + ${protObj.delta} EGP` : 'Base 220 EGP';
    $('#noodleSpiceHint').textContent = spiceObj.delta ? `Level ${spiceObj.chillies} · +20 EGP` : 'Mild · No charge';
    $('#noodleTotal').textContent = formatEGP(total);

    $$('[data-nprot]', protWrap).forEach((b) =>
      b.addEventListener('click', () => {
        state.noodleProtein = b.dataset.nprot;
        renderNoodleBuilder();
      })
    );

    $$('[data-nspice]', spiceWrap).forEach((b) =>
      b.addEventListener('click', () => {
        state.noodleSpice = Number(b.dataset.nspice);
        renderNoodleBuilder();
      })
    );
  }

  function initFoodSection() {
    renderNoodleBuilder();

    $('#addNoodleBtn')?.addEventListener('click', () => {
      const nb = DATA.food.noodleBox;
      const protObj = nb.proteins.find((p) => p.id === state.noodleProtein);
      const spiceObj = nb.spiceLevels.find((s) => s.id === state.noodleSpice);
      const total = nb.basePrice + protObj.delta + spiceObj.delta;
      const meta = `${protObj.label.replace(/^\+\s*/, '')} · ${spiceObj.chillies ? `Spicy Lv.${spiceObj.chillies}` : 'Mild'}`;
      addToTray({
        key: `food:noodle:${state.noodleProtein}:${state.noodleSpice}`,
        name: 'The Noodle Box',
        meta,
        price: total,
        img: 'assets/img/editorial/noodle-box-dining.webp'
      });
    });

    // PÀO Pops
    const popsGrid = $('#popsGrid');
    popsGrid.innerHTML = DATA.food.pops
      .map(
        (p) => `
      <article class="pops-card">
        <div>
          <div class="pops-card__tag">${p.tag}</div>
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
        </div>
        <div class="pops-card__cta">
          <span class="pops-card__price">${formatEGP(p.price)}</span>
          <button type="button" class="btn btn--cream btn--sm" data-add-pop="${p.id}">+ Add Pops</button>
        </div>
      </article>
    `
      )
      .join('');

    $$('[data-add-pop]', popsGrid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const pop = DATA.food.pops.find((p) => p.id === btn.dataset.addPop);
        if (!pop) return;
        addToTray({
          key: `food:${pop.id}`,
          name: pop.name,
          meta: 'Food Series · Served Hot',
          price: pop.price,
          img: 'assets/img/editorial/noodle-box-dining.webp'
        });
      });
    });

    // Sourdough Toasties List
    const toastieList = $('#toastieList');
    toastieList.innerHTML = DATA.food.toasties
      .map(
        (t) => `
      <article class="toastie-row">
        <div>
          <div class="toastie-row__tag">${t.tag}</div>
          <h4>${t.name}</h4>
          <p>${t.desc}</p>
        </div>
        <div class="toastie-row__right">
          <span class="toastie-row__price">${formatEGP(t.price)}</span>
          <button type="button" class="btn btn--ghost-light btn--sm" data-add-toastie="${t.id}">+ Add</button>
        </div>
      </article>
    `
      )
      .join('');

    $$('[data-add-toastie]', toastieList).forEach((btn) => {
      btn.addEventListener('click', () => {
        const t = DATA.food.toasties.find((x) => x.id === btn.dataset.addToastie);
        if (!t) return;
        addToTray({
          key: `food:${t.id}`,
          name: t.name,
          meta: 'Pressed Sourdough Toastie',
          price: t.price,
          img: 'assets/img/ig/toasties-stack.webp'
        });
      });
    });

    // Pastries & Croffles Grid
    const pastriesGrid = $('#counterPastries');
    pastriesGrid.innerHTML = DATA.food.pastries
      .map(
        (p) => `
      <article class="pastry-card">
        <div class="pastry-card__img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="pastry-card__body">
          <div class="drink-card__head">
            <h4 class="drink-card__title">${p.name}</h4>
            <span class="drink-card__price">${formatEGP(p.price)}</span>
          </div>
          <p class="drink-card__note">${p.desc}</p>
          <button type="button" class="card-btn card-btn--add" data-add-pastry="${p.id}">+ Add to Tray</button>
        </div>
      </article>
    `
      )
      .join('');

    $$('[data-add-pastry]', pastriesGrid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const p = DATA.food.pastries.find((x) => x.id === btn.dataset.addPastry);
        if (!p) return;
        addToTray({
          key: `pastry:${p.id}`,
          name: p.name,
          meta: 'Fresh Daily Bake',
          price: p.price,
          img: p.img
        });
      });
    });

    // Counter Tabs (Toasties vs Croffles)
    $$('.counter-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.counter;
        state.activeCounter = target;
        $$('.counter-tab').forEach((t) => t.classList.toggle('is-active', t.dataset.counter === target));
        $('#counterToasties').classList.toggle('is-hidden', target !== 'toasties');
        $('#counterPastries').classList.toggle('is-hidden', target !== 'pastries');
      });
    });
  }

  /* ------------------------------------------------------------------------
     SECTION 5: BEYOND THE CUP — MERCH & CANDLES SHOP
     ------------------------------------------------------------------------ */
  function renderMerchGrid() {
    const grid = $('#merchGrid');
    if (!grid) return;

    const list =
      state.merchFilter === 'all'
        ? DATA.merch
        : DATA.merch.filter((m) => m.category === state.merchFilter);

    grid.innerHTML = list
      .map((m) => {
        const activeSize = state.merchSizes[m.id] || (m.sizes ? 'M' : null);
        return `
        <article class="merch-card">
          <div class="merch-card__img">
            <img src="${m.img}" alt="${m.name}" loading="lazy" />
          </div>
          <div class="merch-card__body">
            <div class="merch-card__collab">${m.collab}</div>
            <div class="drink-card__head">
              <h4 class="drink-card__title">${m.name}</h4>
              <span class="drink-card__price">${formatEGP(m.price)}</span>
            </div>
            <p class="drink-card__note">${m.desc}</p>
            ${
              m.sizes
                ? `<div class="merch-sizes">
                    ${m.sizes
                      .map(
                        (sz) =>
                          `<button type="button" class="size-chip ${sz === activeSize ? 'is-active' : ''}" data-msize-item="${m.id}" data-msize="${sz}">${sz}</button>`
                      )
                      .join('')}
                  </div>`
                : ''
            }
            <button type="button" class="card-btn card-btn--add" data-add-merch="${m.id}">+ Add to Tray</button>
          </div>
        </article>
      `;
      })
      .join('');

    $$('[data-msize-item]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.merchSizes[btn.dataset.msizeItem] = btn.dataset.msize;
        renderMerchGrid();
      });
    });

    $$('[data-add-merch]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const m = DATA.merch.find((x) => x.id === btn.dataset.addMerch);
        if (!m) return;
        const size = m.sizes ? state.merchSizes[m.id] || 'M' : null;
        addToTray({
          key: `merch:${m.id}:${size || 'one'}`,
          name: m.name,
          meta: size ? `${m.collab} · Size ${size}` : m.collab,
          price: m.price,
          img: m.img
        });
      });
    });
  }

  function initMerch() {
    renderMerchGrid();
    $$('#merchFilters .series-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.merchFilter = btn.dataset.merch;
        $$('#merchFilters .series-tab').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderMerchGrid();
      });
    });
  }

  /* ------------------------------------------------------------------------
     SECTION 6: @PAO.EGY CULTURE FILMSTRIP
     ------------------------------------------------------------------------ */
  function initCulture() {
    const strip = $('#cultureFilmstrip');
    if (strip) {
      strip.innerHTML = DATA.culture
        .map(
          (item) => `
        <article class="film-card">
          <div class="film-card__img">
            <img src="${item.img}" alt="${item.caption}" loading="lazy" />
          </div>
          <div class="film-card__meta">
            <div class="film-card__tag">${item.tag}</div>
            <p class="film-card__cap">${item.caption}</p>
          </div>
        </article>
      `
        )
        .join('');
    }

    const igGrid = $('#igDropsGrid');
    if (igGrid) {
      igGrid.innerHTML = DATA.igDrops
        .map(
          (drop) => `
        <a href="https://www.instagram.com/pao.egy/" target="_blank" rel="noopener noreferrer" class="ig-tile">
          <div class="ig-tile__img">
            <img src="${drop.img}" alt="${drop.label}" loading="lazy" />
          </div>
          <div class="ig-tile__cap">
            <strong>${drop.label}</strong>
            <span>${drop.sub}</span>
          </div>
        </a>
      `
        )
        .join('');
    }
  }

  /* ------------------------------------------------------------------------
     SECTION 7: BRANCH FINDER WITH LIVE CAIRO TIME STATUS
     ------------------------------------------------------------------------ */
  function getCairoTimeParts() {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Cairo',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    const parts = Object.fromEntries(fmt.formatToParts(now).map((p) => [p.type, p.value]));
    const hour = Number(parts.hour) + Number(parts.minute) / 60;
    const isWeekend = ['Thu', 'Fri', 'Sat'].includes(parts.weekday);
    const label = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Cairo',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(now);
    return { hour, isWeekend, label };
  }

  function getBranchStatus(branch, cairo) {
    if (branch.seasonal) return { cls: 'status-tag--seasonal', label: 'Summer · Jun–Sep' };
    if (branch.driveThru24) return { cls: 'status-tag--24h', label: 'Open 24/7 Drive-Thru' };
    const closeH = cairo.isWeekend && branch.weekendCloseH ? branch.weekendCloseH : branch.closeH;
    const isOpen =
      cairo.hour >= branch.openH && cairo.hour < closeH
        ? true
        : closeH > 24 && cairo.hour < closeH - 24;
    if (isOpen) return { cls: 'status-tag--open', label: 'Open Now' };
    return { cls: 'status-tag--closed', label: `Opens ${branch.openH === 8 ? '8:00 AM' : '7:30 AM'}` };
  }

  function renderBranches() {
    const grid = $('#branchesGrid');
    if (!grid) return;
    const cairo = getCairoTimeParts();
    $('#cairoClock').innerHTML = `<span class="live-dot"></span><span>Cairo Live · ${cairo.label} EET</span>`;

    let list = DATA.branches.filter((b) => b.region === state.branchRegion);
    if (state.branchFoodOnly) list = list.filter((b) => b.food);
    if (state.branch24hOnly) list = list.filter((b) => b.driveThru24);

    if (!list.length) {
      grid.innerHTML = `<div style="grid-column:1/-1;padding:36px;text-align:center;color:var(--ink-muted);">No spots match that filter in this region — try switching tabs or clearing filters.</div>`;
      return;
    }

    grid.innerHTML = list
      .map((b) => {
        const st = getBranchStatus(b, cairo);
        const isSel = b.id === state.selectedBranchId;
        return `
        <article class="branch-card ${isSel ? 'is-selected' : ''}">
          <div>
            <div class="branch-card__top">
              <span class="status-tag ${st.cls}"><span class="status-dot"></span>${st.label}</span>
              <div class="branch-badges">
                ${b.newest ? '<span class="micro-badge micro-badge--orange">Newest</span>' : ''}
                ${b.food ? '<span class="micro-badge">Food Menu</span>' : ''}
                ${b.driveThru24 ? '<span class="micro-badge micro-badge--orange">24H Lane</span>' : ''}
              </div>
            </div>
            <h3 class="branch-card__name">${b.name}</h3>
            <p class="branch-card__area">${b.area}</p>
            <p class="branch-card__hours">${b.hours}</p>
          </div>
          <div class="branch-card__actions">
            <button type="button" class="branch-pick-btn" data-pick-branch="${b.id}">
              ${isSel ? '✓ Selected Pickup' : 'Set Pickup Spot'}
            </button>
            <a href="${b.maps}" target="_blank" rel="noopener noreferrer" class="branch-maps-link">Directions &nearr;</a>
          </div>
        </article>
      `;
      })
      .join('');

    $$('[data-pick-branch]', grid).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.selectedBranchId = btn.dataset.pickBranch;
        const b = getSelectedBranch();
        const select = $('#trayBranchSelect');
        if (select) select.value = b.id;
        renderBranches();
        showToast(`Pickup branch set to ${b.name}`);
      });
    });
  }

  function initBranches() {
    // Populate Tray Branch Selector
    const select = $('#trayBranchSelect');
    if (select) {
      select.innerHTML = DATA.branches
        .filter((b) => !b.seasonal)
        .map((b) => `<option value="${b.id}" ${b.id === state.selectedBranchId ? 'selected' : ''}>${b.name} — ${b.area}</option>`)
        .join('');
      select.addEventListener('change', (e) => {
        state.selectedBranchId = e.target.value;
        renderBranches();
      });
    }

    renderBranches();
    setInterval(renderBranches, 60000);

    $$('#regionTabs .series-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.branchRegion = btn.dataset.region;
        $$('#regionTabs .series-tab').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderBranches();
      });
    });

    const foodBtn = $('#filterFoodBtn');
    foodBtn?.addEventListener('click', () => {
      state.branchFoodOnly = !state.branchFoodOnly;
      foodBtn.classList.toggle('is-active', state.branchFoodOnly);
      foodBtn.setAttribute('aria-pressed', String(state.branchFoodOnly));
      renderBranches();
    });

    const h24Btn = $('#filter24hBtn');
    h24Btn?.addEventListener('click', () => {
      state.branch24hOnly = !state.branch24hOnly;
      h24Btn.classList.toggle('is-active', state.branch24hOnly);
      h24Btn.setAttribute('aria-pressed', String(state.branch24hOnly));
      renderBranches();
    });
  }

  /* ------------------------------------------------------------------------
     SECTION 8: CATERING SHOWCASE & QUOTE ESTIMATOR
     ------------------------------------------------------------------------ */
  function renderCateringStage() {
    const item = DATA.cateringTypes[state.cateringIndex];
    const tabsWrap = $('#cateringTabs');
    tabsWrap.innerHTML = DATA.cateringTypes
      .map(
        (c, i) => `
      <button type="button" class="dial-btn ${i === state.cateringIndex ? 'is-active' : ''}" data-cat-idx="${i}" role="tab" aria-selected="${i === state.cateringIndex}">
        ${c.label}
      </button>
    `
      )
      .join('');

    $('#cateringPhoto').src = item.img;
    $('#cateringPhoto').alt = item.caption;
    $('#cateringCaption').textContent = item.caption;
    $('#cateringTitle').textContent = item.title;
    $('#cateringDesc').textContent = item.desc;
    $('#cateringBullets').innerHTML = item.highlights.map((h) => `<li>${h}</li>`).join('');

    $$('[data-cat-idx]', tabsWrap).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.cateringIndex = Number(btn.dataset.catIdx);
        renderCateringStage();
      });
    });
  }

  function updateGuestEstimate() {
    const g = Number($('#catGuests')?.value || 150);
    let rec = '1 Compact Bar · 2 Baristas · 4 Flavors';
    if (g >= 400) rec = '2 Illuminated Bars · 5 Baristas · Full Custom Menu';
    else if (g >= 200) rec = '1 Flagship Bar + Seal Station · 3 Baristas · 6 Flavors';
    else if (g >= 100) rec = '1 Illuminated Bar · 2 Baristas · 5 Flavors';
    $('#setupEstimate').textContent = rec;
  }

  function initCatering() {
    renderCateringStage();
    updateGuestEstimate();
    $('#catGuests')?.addEventListener('input', updateGuestEstimate);

    $('#cateringForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const name = `${fd.get('firstName')} ${fd.get('lastName')}`.trim();
      const type = fd.get('eventType');
      const guests = fd.get('guests');
      const date = fd.get('eventDate');
      const box = $('#cateringConfirm');
      box.innerHTML = `
        <strong>Inquiry Logged (Demo Preview)</strong><br />
        Thank you, ${name}! We’ve drafted a <strong>${type}</strong> proposal for <strong>${guests} guests</strong> on <strong>${date}</strong>.<br />
        For live bookings, call PÀO Catering directly at <a href="tel:+201055555433" style="text-decoration:underline;font-weight:600;">010 5555 5433</a>.
      `;
      box.classList.remove('is-hidden');
      showToast('Catering inquiry drafted!');
    });
  }

  /* ------------------------------------------------------------------------
     ORDER TRAY DRAWER & THERMAL ORDER TICKET
     ------------------------------------------------------------------------ */
  function addToTray(item) {
    const existing = state.tray.find((t) => t.key === item.key);
    if (existing) existing.qty += 1;
    else state.tray.push({ ...item, qty: 1 });

    renderTray();
    const badge = $('#trayCount');
    badge.classList.remove('is-bump');
    void badge.offsetWidth;
    badge.classList.add('is-bump');
    showToast(`Added ${item.name} to your PÀO Tray`);
  }

  function renderTray() {
    const totalQty = state.tray.reduce((s, i) => s + i.qty, 0);
    $('#trayCount').textContent = String(totalQty);

    const container = $('#trayItems');
    const ticketBox = $('#trayTicketBox');
    ticketBox.classList.add('is-hidden');

    if (!state.tray.length) {
      container.innerHTML = `
        <div class="tray-empty">
          <img src="assets/brand/pao-logomark.svg" alt="PÀO Bear" />
          <p style="font-weight:600;color:var(--pine-deep);margin:0 0 6px;">Your PÀO tray is empty.</p>
          <p style="font-size:13.5px;margin:0;">Craft a ceremonial matcha, build a spicy udon noodle box, or add a Fairoza candle to begin.</p>
        </div>
      `;
      $('#traySubtotal').textContent = '0 EGP';
      $('#trayVat').textContent = '0 EGP';
      $('#trayTotal').textContent = '0 EGP';
      return;
    }

    container.innerHTML = state.tray
      .map(
        (item, idx) => `
      <div class="tray-item">
        <div class="tray-item__thumb">
          <img src="${item.img}" alt="${item.name}" />
        </div>
        <div>
          <div class="tray-item__name">${item.name}</div>
          <div class="tray-item__meta">${item.meta}</div>
          <div class="tray-item__meta" style="color:var(--pine);font-weight:600;margin-top:4px;">${formatEGP(item.price * item.qty)}</div>
        </div>
        <div class="tray-item__qty">
          <button type="button" class="qty-btn" data-qty-dec="${idx}" aria-label="Decrease quantity">&minus;</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-btn" data-qty-inc="${idx}" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `
      )
      .join('');

    const sub = state.tray.reduce((s, i) => s + i.price * i.qty, 0);
    const vat = Math.round(sub * 0.14);
    $('#traySubtotal').textContent = formatEGP(sub);
    $('#trayVat').textContent = formatEGP(vat);
    $('#trayTotal').textContent = formatEGP(sub + vat);

    $$('[data-qty-dec]', container).forEach((b) =>
      b.addEventListener('click', () => {
        const idx = Number(b.dataset.qtyDec);
        state.tray[idx].qty -= 1;
        if (state.tray[idx].qty <= 0) state.tray.splice(idx, 1);
        renderTray();
      })
    );
    $$('[data-qty-inc]', container).forEach((b) =>
      b.addEventListener('click', () => {
        const idx = Number(b.dataset.qtyInc);
        state.tray[idx].qty += 1;
        renderTray();
      })
    );
  }

  function openTray() {
    $('#trayBackdrop').classList.add('is-open');
    $('#trayDrawer').classList.add('is-open');
    $('#trayDrawer').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTray() {
    $('#trayBackdrop').classList.remove('is-open');
    $('#trayDrawer').classList.remove('is-open');
    $('#trayDrawer').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initTray() {
    renderTray();
    $('#openTrayBtn')?.addEventListener('click', openTray);
    $('#closeTrayBtn')?.addEventListener('click', closeTray);
    $('#trayBackdrop')?.addEventListener('click', closeTray);

    $('#generateTicketBtn')?.addEventListener('click', () => {
      if (!state.tray.length) {
        showToast('Add a drink or snack first!');
        return;
      }
      const branch = getSelectedBranch();
      const code = `PAO-${Math.floor(1000 + Math.random() * 9000)}`;
      const sub = state.tray.reduce((s, i) => s + i.price * i.qty, 0);
      const total = sub + Math.round(sub * 0.14);
      const lines = state.tray.map((i) => `${i.qty}× ${i.name} (${i.meta})`).join('<br />');
      const box = $('#trayTicketBox');
      box.innerHTML = `
        <div style="display:flex;justify-content:space-between;border-bottom:1px dashed var(--pine);padding-bottom:6px;margin-bottom:8px;">
          <strong>TICKET #${code}</strong>
          <span>波巴 SEAL READY</span>
        </div>
        <div><strong>PICKUP:</strong> ${branch.name} (${branch.area})</div>
        <div style="margin:8px 0;">${lines}</div>
        <div style="border-top:1px dashed var(--pine);padding-top:6px;display:flex;justify-content:space-between;">
          <strong>EST. TOTAL (INCL. VAT)</strong>
          <strong>${formatEGP(total)}</strong>
        </div>
        <div style="margin-top:8px;font-size:10.5px;color:var(--ink-muted);">
          Concept Demo — live orders accepted in-branch, via Talabat, InstaShop, or hotline 010 2888 8882.
        </div>
      `;
      box.classList.remove('is-hidden');
      showToast(`Order Ticket #${code} ready!`);
    });
  }

  /* ------------------------------------------------------------------------
     LENIS SMOOTH SCROLL & PROGRESSIVE REVEAL CHOREOGRAPHY
     ------------------------------------------------------------------------ */
  function initMotion() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      $$('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (!href || href === '#') return;
          const target = $(href);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -64 });
          }
        });
      });
    }

    if (window.gsap) {
      window.gsap.from('.hero__left > *', {
        y: 18,
        opacity: 0,
        duration: 0.68,
        stagger: 0.07,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      });

      window.gsap.from('.hero-cup-card', {
        y: 22,
        opacity: 0,
        duration: 0.78,
        delay: 0.12,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      });
    }

    // Fail-safe IntersectionObserver reveal: works reliably on normal scroll, Lenis, AND instant scrollIntoView jumps
    const revealEls = $$('[data-reveal]');
    const revealNow = (el) => {
      el.classList.remove('is-pending');
      el.classList.add('is-visible');
    };

    const sweepVisible = () => {
      const vh = window.innerHeight || 900;
      revealEls.forEach((el) => {
        if (!el.classList.contains('is-pending')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 1.08 && rect.bottom > -80) {
          revealNow(el);
        }
      });
    };

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealNow(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '120px 0px 120px 0px', threshold: 0.01 }
      );

      const vh = window.innerHeight || 900;
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > vh * 0.95) {
          el.classList.add('is-pending');
          io.observe(el);
        } else {
          revealNow(el);
        }
      });

      window.addEventListener('scroll', sweepVisible, { passive: true });
      window.addEventListener('resize', sweepVisible, { passive: true });
    }
  }

  /* ------------------------------------------------------------------------
     BOOT
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHero();
    initMenuControls();
    initCustomizer();
    initFoodSection();
    initMerch();
    initCulture();
    initBranches();
    initCatering();
    initTray();
    initMotion();
  });
})();
