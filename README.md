# PÀO · Boba & More (波巴) — Flagship Redesign Concept

Unofficial static redesign concept built for **PÀO** (`paoeg.com` / `@pao.egy`), Egypt's boba tea pioneers.

## Design Direction — "The Seal-Break Bar"

PÀO was founded by retail veterans with **25+ years of Apple Premium Reseller hospitality**, yet their current WordPress/Elementor site hides studio-grade photography behind static menu JPEGs, broken `/food-menu/` links, missing product prices, and clip-art catering graphics.

This redesign translates PÀO's actual visual DNA into an editorial flagship experience:

- **Color Palette (100% from brand packaging & studio photography):**
  - Nocturnal Deep Pine (`#0E2623`) & Official PÀO Pine (`#21514B`)
  - Blush Paper (`#FAF3F0`) & exact pixel-harmonized Blush Studio (`#F3E4E1`) so every cup, croffle, candle, crewneck, and cap floats seamlessly without boxy borders
  - Terracotta Clay (`#C07465`), Dusty Sage (`#74A39B`), and iconic Heat-Seal Film Orange (`#F5962B`)
- **Brand Motifs:** Official `PÀO` SVG wordmark, bear mascot logomark, subtle **Seigaiha concentric wave** architectural bands (echoing `link-2.jpeg` & their brown-butter cookie sleeves), and **`波巴` / `擔仔麵`** chop stamps.
- **Typography:** `Fraunces` (display serif), `Instrument Serif` (editorial italics), `Plus Jakarta Sans` (UI & menu copy), and `DM Mono` (prices, hours, cup stickers, stamps).

## Key Interactive Flows

1. **Hero Signature Pour Dial & "Pierce the Seal" Ritual:** Live flavor switcher across 5 flagship cups (`Brown Sugar Milk Boba`, `Crème Brûlée Matcha`, `Taro Cream Cheese`, `Mango Sago`, `Passion Royal`) with real studio photography, tasting specs, and an interactive straw-pierce micro-interaction.
2. **Complete 12-Series Drink Menu (67 Drinks) + Live Cup Customizer:** Search, `Skinny Ready` (monkfruit) filter, and an interactive **Craft Your Cup** modal featuring live thermal cup-sticker preview and real PÀO add-on pricing (`+44 EGP` alternative milk, `+22 EGP` extra espresso shot).
3. **Savory Counter (`擔仔麵`) & Bakery:** Interactive **The Noodle Box** builder (`220 EGP` base + Chicken `+99` / Beef `+129` + 1–3 Chilli Spicy Meter `+20`), **PÀO Pops**, **NEW Sourdough Toasties (5)**, and **Croffles & Cookies (6)**.
4. **Beyond the Cup · Merch Drop:** High-res fashion lookbook + shoppable **PÀO × Fairoza Candles** (`499 EGP`), **Crewnecks** (`949 EGP`, S–XL size picker), **Caps** (`749 EGP`), Keychain & Glass Cup.
5. **23+ Branch Finder with Live Cairo Time (`Africa/Cairo`):** Region tabs (`New Cairo & East`, `Sheikh Zayed & 6 Oct`, `Alexandria & Zamalek` incl. Gezira Sporting Club, `Sahel · Summer`), `Food Menu` & `24/7 Drive-Thru` filters, real-time Open/Closed indicators, and verified Google Maps links.
6. **Catering Showcase & Quote Estimator:** Real PÀO wedding, gala, garden, and activation photography paired with a live guest-count bar setup estimator and inquiry preview.
7. **Slide-Over Order Tray & Thermal Order Ticket:** Full multi-item bag synced with pickup branch selection, VAT breakdown, and thermal ticket generator (concept preview).

## Asset & Data Provenance

- **Official SVGs & Packshots:** `https://paoeg.com/` WordPress media library & WooCommerce Store API (74 studio product packshots harmonized to `#F3E4E1` WebP + 18 high-res editorial/store/catering WebPs).
- **Menu Pricing:** Reconciled directly from `references/official-drinks-menu.jpeg`, `references/official-food-menu.jpeg`, and WooCommerce Store API (WooCommerce spelling typos and `0 EGP` omissions corrected to match the printed menu boards). Sourdough Toasties (Oct 2026 drop) priced from live Talabat listing.
- **Instagram Highlights:** 6 icon-free crops from user-supplied `@pao.egy` grid captures, framed in compact portrait slots to preserve crispness.

## Running Locally

```bash
node demos/serve.mjs demos/pao-egypt 4270
```
