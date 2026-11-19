/* ==========================================================================
   PÀO · BOBA & MORE (波巴) — Official Brand & Menu Dataset
   Sources: https://paoeg.com/ (WooCommerce Store API, official menu boards
   link-2.jpeg & food-menu.jpeg, contact/catering pages) & @pao.egy.
   All drink/pastry/food menu-board prices match official EGP menu (excl. VAT).
   ========================================================================== */

window.PAO_DATA = {
  brand: {
    name: 'PÀO',
    tagline: 'Boba & More',
    seal: '波巴',
    foodSeal: '擔仔麵',
    hq: 'Portal B, Beverly Hills — Al Sheikh Zayed, Egypt',
    email: 'info@paoeg.com',
    hotline: '010 2888 8882',
    hotlineTel: '+201028888882',
    cateringPhone: '010 5555 5433',
    cateringTel: '+201055555433',
    socials: {
      instagram: 'https://www.instagram.com/pao.egy/',
      tiktok: 'https://www.tiktok.com/@pao.egypt',
      facebook: 'https://www.facebook.com/paoegypt/'
    }
  },

  /* Hero Featured Cup Dial — 5 iconic signature pours */
  heroDrinks: [
    {
      id: 'brown-sugar-milk-boba',
      name: 'Brown Sugar Milk Boba',
      series: 'PÀO Specials',
      price: 159,
      img: 'assets/img/drinks/brown-sugar-milk-boba.webp',
      sealCode: 'SIGNATURE · 01',
      tasting: 'Warm slow-simmered muscovado tapioca pearls striped along chilled velvety fresh milk.',
      profile: { body: 'Velvety & Malty', pearls: 'Warm Brown Sugar', finish: 'Caramelized Cream' },
      accent: '#C97B36'
    },
    {
      id: 'creme-brulee-matcha',
      name: 'Crème Brûlée Matcha',
      series: 'Ceremonial Matcha',
      price: 195,
      img: 'assets/img/drinks/creme-brulee-matcha.webp',
      sealCode: 'SIGNATURE · 02',
      tasting: 'First-harvest ceremonial Uji matcha whisked over milk, pearls, and a torched custard crown.',
      profile: { body: 'Umami & Custard', pearls: 'Black Tapioca', finish: 'Torched Sugar Crust' },
      accent: '#5A8752'
    },
    {
      id: 'taro-cream-cheese',
      name: 'Taro Cream Cheese',
      series: 'Taro Series',
      price: 159,
      img: 'assets/img/drinks/taro-cream-cheese.webp',
      sealCode: 'SIGNATURE · 03',
      tasting: 'Roasted nutty purple taro milk layered with chewy pearls and our signature salted cream cheese foam.',
      profile: { body: 'Nutty & Silky', pearls: 'Classic Boba', finish: 'Salted Cheese Cloud' },
      accent: '#7D60A8'
    },
    {
      id: 'mango-sago',
      name: 'Mango Sago',
      series: 'PÀO Specials',
      price: 179,
      img: 'assets/img/drinks/mango-sago.webp',
      sealCode: 'SIGNATURE · 04',
      tasting: 'Sun-ripened Egyptian mango purée folded with chilled coconut cream and translucent sago pearls.',
      profile: { body: 'Lush & Tropical', pearls: 'Crystal Sago', finish: 'Silky Coconut' },
      accent: '#E29828'
    },
    {
      id: 'passion-royal',
      name: 'Passion Royal',
      series: 'Mojito Series',
      price: 176,
      img: 'assets/img/drinks/passion-royal.webp',
      sealCode: 'SIGNATURE · 05',
      tasting: 'Sparkling passionfruit and fragrant rose-lychee infusion sealed under our orange bear film.',
      profile: { body: 'Crisp & Floral', pearls: 'Popping Boba', finish: 'Sparkling Citrus' },
      accent: '#C64D5A'
    }
  ],

  /* Complete 12 Official Drink Series (67 verified drinks) */
  drinkSeries: [
    { id: 'featured', label: 'Signatures', subtitle: 'Most loved across Cairo & Alex' },
    { id: 'pao-specials', label: 'PÀO Specials', subtitle: 'House originals & icons' },
    { id: 'ceremonial-matcha', label: 'Ceremonial Matcha', subtitle: 'Stone-ground Japanese grade' },
    { id: 'milk-tea', label: 'Milk Tea', subtitle: 'Slow-brewed Taiwanese tea leaves' },
    { id: 'taro', label: 'Taro', subtitle: 'Velvety roasted purple taro' },
    { id: 'coffee-boba', label: 'Coffee Boba', subtitle: 'Specialty espresso meets tapioca' },
    { id: 'mojito', label: 'Mojito', subtitle: 'Sparkling fruit refreshers' },
    { id: 'fruit-tea', label: 'Fruit Tea', subtitle: 'Cold-steeped jasmine blooms' },
    { id: 'soft-serve', label: 'Soft Serve', subtitle: 'Tea & espresso swirled cold' },
    { id: 'frappe', label: 'Frappe', subtitle: 'Ice-blended dessert sips' },
    { id: 'warm-milk-tea', label: 'Warm Boba', subtitle: 'Steaming comfort in a cup' },
    { id: 'hot-coffee', label: 'Hot Coffee', subtitle: 'Classic espresso bar' },
    { id: 'iced-coffee', label: 'Iced Coffee', subtitle: 'Clean pours, zero boba' }
  ],

  drinks: [
    /* --- PÀO SPECIALS --- */
    { id: 'brown-sugar-milk-boba', name: 'Brown Sugar Milk Boba', series: 'pao-specials', price: 159, featured: true, skinny: true, tag: 'Bestseller', note: 'Tiger-striped muscovado glaze, warm chewy pearls, cold fresh milk.', img: 'assets/img/drinks/brown-sugar-milk-boba.webp' },
    { id: 'mango-sago', name: 'Mango Sago', series: 'pao-specials', price: 179, featured: true, skinny: false, tag: 'House Icon', note: 'Lush ripe mango compote, silky coconut milk, chilled sago pearls.', img: 'assets/img/drinks/mango-sago.webp' },
    { id: 'brown-butter-cookie-latte', name: 'Brown Butter Cookie Latte', series: 'pao-specials', price: 158, featured: true, skinny: false, tag: 'Viral', note: 'Toasted brown-butter biscuit milk with espresso & boba pearls.', img: 'assets/img/drinks/brown-butter-cookie-latte.webp' },
    { id: 'blue-sea', name: 'Blue Sea', series: 'pao-specials', price: 139, featured: false, skinny: true, tag: 'Coastal', note: 'Blue butterfly-pea coconut milk swirl with sweet translucent pearls.', img: 'assets/img/drinks/blue-sea.webp' },
    { id: 'boba-colada', name: 'Boba Colada', series: 'pao-specials', price: 139, featured: false, skinny: true, tag: 'Tropical', note: 'Creamy pineapple-coconut infusion chilled over chewy boba.', img: 'assets/img/drinks/boba-colada.webp' },

    /* --- CEREMONIAL MATCHA --- */
    { id: 'creme-brulee-matcha', name: 'Crème Brûlée Matcha', series: 'ceremonial-matcha', price: 195, featured: true, skinny: false, tag: 'Bestseller', note: 'Ceremonial matcha layered with caramelized torch-crusted custard.', img: 'assets/img/drinks/creme-brulee-matcha.webp' },
    { id: 'pistachio-matcha', name: 'Pistachio Matcha', series: 'ceremonial-matcha', price: 195, featured: false, skinny: false, tag: 'Rich', note: 'Roasted Sicilian pistachio cream swirled into pure whisked matcha.', img: 'assets/img/drinks/pistachio-matcha.webp' },
    { id: 'strawberry-matcha', name: 'Strawberry Matcha', series: 'ceremonial-matcha', price: 169, featured: true, skinny: true, tag: 'Fan Favorite', note: 'House macerated strawberry purée under fresh milk & stone-ground matcha.', img: 'assets/img/drinks/strawberry-matcha.webp' },
    { id: 'brown-sugar-matcha', name: 'Brown Sugar Matcha', series: 'ceremonial-matcha', price: 175, featured: false, skinny: true, tag: 'Layered', note: 'Warm caramelized brown-sugar pearls beneath earthy green tea.', img: 'assets/img/drinks/brown-sugar-matcha.webp' },
    { id: 'spanish-matcha', name: 'Spanish Matcha', series: 'ceremonial-matcha', price: 175, featured: false, skinny: false, tag: 'Silky', note: 'Sweetened condensed milk kissed with ceremonial Japanese matcha.', img: 'assets/img/drinks/spanish-matcha.webp' },
    { id: 'matcha-boba', name: 'Matcha Boba', series: 'ceremonial-matcha', price: 169, featured: false, skinny: true, tag: 'Classic', note: 'Hand-whisked matcha milk served over warm tapioca pearls.', img: 'assets/img/drinks/matcha-boba.webp' },
    { id: 'classic-matcha', name: 'Classic Matcha', series: 'ceremonial-matcha', price: 159, featured: false, skinny: true, tag: 'Skinny Ready', note: 'Pure ceremonial matcha whisked clean over chilled milk of choice.', img: 'assets/img/drinks/classic-matcha.webp' },

    /* --- MILK TEA --- */
    { id: 'creme-brulee-milk-tea', name: 'Crème Brûlée Milk Tea', series: 'milk-tea', price: 169, featured: true, skinny: false, tag: 'Indulgent', note: 'Roasted black milk tea crowned with caramelized vanilla custard.', img: 'assets/img/drinks/creme-brulee-milk-tea.webp' },
    { id: 'brown-sugar-milk-tea', name: 'Brown Sugar Milk Tea', series: 'milk-tea', price: 159, featured: false, skinny: true, tag: 'Original', note: 'Brewed Assam milk tea infused with dark brown-sugar syrup & boba.', img: 'assets/img/drinks/brown-sugar-milk-tea.webp' },
    { id: 'classic-milk-tea', name: 'Classic Milk Tea', series: 'milk-tea', price: 99, featured: false, skinny: true, tag: 'Everyday', note: 'Where it all began: fragrant Taiwanese black tea, milk & fresh pearls.', img: 'assets/img/drinks/classic-milk-tea.webp' },

    /* --- TARO --- */
    { id: 'taro-cream-cheese', name: 'Taro Cream Cheese', series: 'taro', price: 159, featured: true, skinny: false, tag: 'Signature', note: 'Velvety violet taro, chewy tapioca, salted cream-cheese cloud.', img: 'assets/img/drinks/taro-cream-cheese.webp' },
    { id: 'taro-coffee', name: 'Taro Coffee', series: 'taro', price: 179, featured: false, skinny: true, tag: 'Bold', note: 'Nutty purple taro milk topped with a fresh double ristretto float.', img: 'assets/img/drinks/taro-coffee.webp' },
    { id: 'brown-sugar-taro', name: 'Brown Sugar Taro', series: 'taro', price: 149, featured: false, skinny: true, tag: 'Warm Pearls', note: 'Creamy taro swirled through slow-cooked muscovado boba.', img: 'assets/img/drinks/brown-sugar-taro.webp' },
    { id: 'classic-taro', name: 'Classic Taro', series: 'taro', price: 139, featured: false, skinny: true, tag: 'Smooth', note: 'Pure comforting roasted taro root milk tea with pearls.', img: 'assets/img/drinks/classic-taro.webp' },

    /* --- COFFEE SERIES (WITH BOBA) --- */
    { id: 'spanish-latte-boba', name: 'Spanish Latte Boba', series: 'coffee-boba', price: 149, featured: true, skinny: false, tag: 'Cairo Favorite', note: 'Double espresso, silky condensed milk & brown-sugar tapioca.', img: 'assets/img/drinks/spanish-latte-boba.webp' },
    { id: 'dalgona-boba', name: 'Dalgona Boba', series: 'coffee-boba', price: 139, featured: false, skinny: true, tag: 'Whipped', note: 'Velvet whipped coffee cloud layered over cold milk & pearls.', img: 'assets/img/drinks/dalgona-boba.webp' },
    { id: 'iced-pistachio-latte-boba', name: 'Iced Pistachio Latte Boba', series: 'coffee-boba', price: 175, featured: false, skinny: false, tag: 'Nutty', note: 'Specialty espresso, green pistachio butter & chewy boba.', img: 'assets/img/drinks/iced-pistachio-latte-boba.webp' },
    { id: 'iced-dulce-de-leche-latte', name: 'Iced Dulce de Leche Latte', series: 'coffee-boba', price: 159, featured: false, skinny: false, tag: 'Caramel', note: 'Slow-cooked milk caramel shaken with espresso & tapioca pearls.', img: 'assets/img/drinks/iced-dulce-de-leche-latte.webp' },
    { id: 'white-mocha-boba', name: 'White Mocha Boba', series: 'coffee-boba', price: 175, featured: false, skinny: false, tag: 'Creamy', note: 'White Belgian chocolate espresso poured over warm boba.', img: 'assets/img/drinks/white-mocha-boba.webp' },
    { id: 'mocha-boba', name: 'Mocha Boba', series: 'coffee-boba', price: 175, featured: false, skinny: false, tag: 'Cocoa', note: 'Dark cocoa espresso latte balanced with chewy black pearls.', img: 'assets/img/drinks/mocha-boba.webp' },
    { id: 'iced-latte-boba', name: 'Iced Latte Boba', series: 'coffee-boba', price: 125, featured: false, skinny: true, tag: 'Clean', note: 'Chilled specialty house espresso, cold milk & classic pearls.', img: 'assets/img/drinks/iced-latte-boba.webp' },

    /* --- MOJITO --- */
    { id: 'passion-royal', name: 'Passion Royal', series: 'mojito', price: 176, featured: true, skinny: true, tag: 'Sparkling', note: 'Passionfruit & floral rose-lychee spritz over crystal popping pearls.', img: 'assets/img/drinks/passion-royal.webp' },
    { id: 'passion-mango-mojito', name: 'Passion Mango Mojito', series: 'mojito', price: 149, featured: false, skinny: true, tag: 'Zesty', note: 'Bright passionfruit, sweet mango, crushed mint & sparkling fizz.', img: 'assets/img/drinks/passion-mango-mojito.webp' },
    { id: 'pink-lemonade-mojito', name: 'Pink Lemonade Mojito', series: 'mojito', price: 149, featured: false, skinny: true, tag: 'Bright', note: 'Tart pink citrus fizz with fresh mint and berry popping pearls.', img: 'assets/img/drinks/pink-lemonade-mojito.webp' },
    { id: 'peach-mojito', name: 'Peach Mojito', series: 'mojito', price: 149, featured: false, skinny: true, tag: 'Juicy', note: 'White peach nectar, lime zest & chilled soda over popping boba.', img: 'assets/img/drinks/peach-mojito.webp' },
    { id: 'pina-colada-mojito', name: 'Pina Colada Mojito', series: 'mojito', price: 149, featured: false, skinny: true, tag: 'Sahel Vibe', note: 'Crisp pineapple & sparkling coconut refresher built for sunshine.', img: 'assets/img/drinks/pina-colada-mojito.webp' },

    /* --- FRUIT TEA --- */
    { id: 'strawberry-jasmine', name: 'Strawberry Jasmine', series: 'fruit-tea', price: 145, featured: false, skinny: true, tag: 'Refreshing', note: 'Cold-steeped jasmine green tea infused with ruby strawberry.', img: 'assets/img/drinks/strawberry-jasmine.webp' },
    { id: 'jasmine-passion-fruit', name: 'Jasmine Passion Fruit', series: 'fruit-tea', price: 145, featured: false, skinny: true, tag: 'Bright', note: 'Fragrant jasmine tea shaken with tart golden passionfruit.', img: 'assets/img/drinks/jasmine-passion-fruit.webp' },
    { id: 'jasmine-peach', name: 'Jasmine Peach', series: 'fruit-tea', price: 135, featured: false, skinny: true, tag: 'Light', note: 'Delicate floral jasmine infusion with sweet orchard peach.', img: 'assets/img/drinks/jasmine-peach.webp' },

    /* --- SOFT SERVE --- */
    { id: 'pao-boba-swirl', name: 'PÀO Boba Swirl', series: 'soft-serve', price: 139, featured: true, skinny: false, tag: 'Signature', note: 'Milk-tea soft serve crowned with warm brown-sugar tapioca pearls.', img: 'assets/img/drinks/pao-boba-swirl.webp' },
    { id: 'pao-cookie-swirl', name: 'PÀO Cookie Swirl', series: 'soft-serve', price: 139, featured: false, skinny: false, tag: 'Crunchy', note: 'Creamy PÀO swirl paired with crumbled brown-butter cookie.', img: 'assets/img/drinks/pao-cookie-swirl.webp' },
    { id: 'coffee-boba-swirl', name: 'Coffee Boba Swirl', series: 'soft-serve', price: 139, featured: false, skinny: false, tag: 'Affogato', note: 'Espresso-kissed soft serve swirled over warm chewy pearls.', img: 'assets/img/drinks/coffee-boba-swirl.webp' },
    { id: 'pao-swirl', name: 'PÀO Swirl', series: 'soft-serve', price: 125, featured: false, skinny: false, tag: 'Pure Tea', note: 'Our signature Taiwanese milk-tea soft serve, whipped airy & rich.', img: 'assets/img/drinks/pao-swirl.webp' },
    { id: 'coffee-swirl', name: 'Coffee Swirl', series: 'soft-serve', price: 125, featured: false, skinny: false, tag: 'Roast', note: 'Velvety cold-brew soft serve for warm Cairo evenings.', img: 'assets/img/drinks/coffee-swirl.webp' },

    /* --- FRAPPE --- */
    { id: 'matcha-frappe', name: 'Matcha Frappe', series: 'frappe', price: 169, featured: false, skinny: false, tag: 'Blended', note: 'Ceremonial green tea ice-blended to a dense velvety freeze.', img: 'assets/img/drinks/matcha-frappe.webp' },
    { id: 'pistachio-frappe', name: 'Pistachio Frappe', series: 'frappe', price: 160, featured: false, skinny: false, tag: 'Creamy', note: 'Roasted pistachio cream spun smooth over crushed ice.', img: 'assets/img/drinks/pistachio-frappe.webp' },
    { id: 'cookie-frappe', name: 'Cookie Frappe', series: 'frappe', price: 158, featured: false, skinny: false, tag: 'Dessert', note: 'House brown-butter cookie blended with cold milk & cream.', img: 'assets/img/drinks/cookie-frappe.webp' },
    { id: 'peanut-butter-frappe', name: 'Peanut Butter Frappe', series: 'frappe', price: 139, featured: false, skinny: false, tag: 'Nutty', note: 'Salted roasted peanut butter frappe with rich cocoa depth.', img: 'assets/img/drinks/peanut-butter-frappe.webp' },
    { id: 'coffee-frappe', name: 'Coffee Frappe', series: 'frappe', price: 129, featured: false, skinny: true, tag: 'Classic', note: 'House espresso spun icy-smooth for afternoon pick-me-ups.', img: 'assets/img/drinks/coffee-frappe.webp' },

    /* --- WARM MILK TEA BOBA --- */
    { id: 'warm-creme-brulee-milk-tea', name: 'Warm Crème Brûlée Milk Tea', series: 'warm-milk-tea', price: 169, featured: false, skinny: false, hot: true, tag: 'Steaming', note: 'Hot roasted black milk tea crowned with caramelized custard foam.', img: 'assets/img/drinks/warm-creme-brulee-milk-tea.webp' },
    { id: 'warm-brown-sugar-milk-boba', name: 'Warm Brown Sugar Milk Boba', series: 'warm-milk-tea', price: 159, featured: false, skinny: true, hot: true, tag: 'Cozy', note: 'Steamed milk poured over freshly cooked dark muscovado pearls.', img: 'assets/img/drinks/warm-brown-sugar-milk-boba.webp' },
    { id: 'warm-brown-sugar-milk-tea', name: 'Warm Brown Sugar Milk Tea', series: 'warm-milk-tea', price: 159, featured: false, skinny: true, hot: true, tag: 'Comfort', note: 'Velvety hot Assam milk tea sweetened with slow-cooked brown sugar.', img: 'assets/img/drinks/warm-brown-sugar-milk-tea.webp' },
    { id: 'warm-classic-milk-tea', name: 'Warm Classic Milk Tea', series: 'warm-milk-tea', price: 99, featured: false, skinny: true, hot: true, tag: 'Original', note: 'Pure hot Taiwanese black milk tea with soft tapioca pearls.', img: 'assets/img/drinks/warm-classic-milk-tea.webp' },

    /* --- HOT COFFEE --- */
    { id: 'hot-ceremonial-matcha', name: 'Ceremonial Hot Matcha', series: 'hot-coffee', price: 155, featured: false, skinny: true, hot: true, tag: 'Ceremonial', note: 'Steamed micro-foam folded gently into whisked Uji matcha.', img: 'assets/img/drinks/hot-ceremonial-matcha.webp' },
    { id: 'hot-creme-brulee-latte', name: 'Crème Brûlée Latte', series: 'hot-coffee', price: 135, featured: false, skinny: false, hot: true, tag: 'Torched', note: 'Hot specialty latte capped with caramelized vanilla sugar.', img: 'assets/img/drinks/hot-creme-brulee-latte.webp' },
    { id: 'hot-mocha-latte', name: 'Mocha Latte', series: 'hot-coffee', price: 140, featured: false, skinny: false, hot: true, tag: 'Velvety', note: 'Double espresso and dark cocoa with steamed silky milk.', img: 'assets/img/drinks/hot-creme-brulee-latte.webp' },
    { id: 'hot-white-mocha-latte', name: 'White Mocha Latte', series: 'hot-coffee', price: 140, featured: false, skinny: false, hot: true, tag: 'Sweet', note: 'Creamy white chocolate melted into rich espresso.', img: 'assets/img/drinks/hot-creme-brulee-latte.webp' },
    { id: 'hot-spanish-latte', name: 'Spanish Latte', series: 'hot-coffee', price: 115, featured: false, skinny: false, hot: true, tag: 'Balanced', note: 'Hot espresso sweetened with velvety condensed milk.', img: 'assets/img/drinks/hot-creme-brulee-latte.webp' },
    { id: 'hot-latte', name: 'Latte', series: 'hot-coffee', price: 100, featured: false, skinny: true, hot: true, tag: 'Smooth', note: 'Silky steamed milk over house-roasted double espresso.', img: 'assets/img/drinks/hot-creme-brulee-latte.webp' },
    { id: 'hot-cappuccino', name: 'Cappuccino', series: 'hot-coffee', price: 100, featured: false, skinny: true, hot: true, tag: 'Foam', note: 'Balanced espresso with thick, velvety micro-foam.', img: 'assets/img/drinks/hot-creme-brulee-latte.webp' },
    { id: 'hot-flat-white', name: 'Flat White', series: 'hot-coffee', price: 90, featured: false, skinny: true, hot: true, tag: 'Bold', note: 'Double ristretto under glossy micro-textured milk.', img: 'assets/img/drinks/hot-americano.webp' },
    { id: 'hot-americano', name: 'Americano', series: 'hot-coffee', price: 80, featured: false, skinny: true, hot: true, tag: 'Pure', note: 'Freshly pulled espresso lengthened with hot filtered water.', img: 'assets/img/drinks/hot-americano.webp' },
    { id: 'hot-doppio', name: 'Doppio', series: 'hot-coffee', price: 65, featured: false, skinny: true, hot: true, tag: 'Double', note: 'Pure double shot of our house specialty espresso roast.', img: 'assets/img/drinks/hot-americano.webp' },
    { id: 'hot-espresso', name: 'Espresso', series: 'hot-coffee', price: 55, featured: false, skinny: true, hot: true, tag: 'Single', note: 'Rich, syrupy single extraction with golden crema.', img: 'assets/img/drinks/hot-americano.webp' },

    /* --- ICED COFFEE (NO BOBA) --- */
    { id: 'iced-pistachio-latte', name: 'Iced Pistachio Latte', series: 'iced-coffee', price: 160, featured: false, skinny: false, tag: 'No Boba', note: 'Chilled espresso & velvety pistachio cream — clean without pearls.', img: 'assets/img/drinks/iced-pistachio-latte.webp' },
    { id: 'iced-white-mocha-latte', name: 'Iced White Mocha Latte', series: 'iced-coffee', price: 160, featured: false, skinny: false, tag: 'No Boba', note: 'Iced espresso blended with smooth white chocolate.', img: 'assets/img/drinks/iced-spanish-latte.webp' },
    { id: 'iced-mocha-latte', name: 'Iced Mocha Latte', series: 'iced-coffee', price: 160, featured: false, skinny: false, tag: 'No Boba', note: 'Rich dark chocolate iced latte — pure espresso focus.', img: 'assets/img/drinks/iced-latte.webp' },
    { id: 'iced-dulce-no-boba', name: 'Iced Dulce de Leche', series: 'iced-coffee', price: 144, featured: false, skinny: false, tag: 'No Boba', note: 'Creamy caramelized milk latte poured crisp over ice.', img: 'assets/img/drinks/iced-spanish-latte.webp' },
    { id: 'iced-spanish-latte', name: 'Iced Spanish Latte', series: 'iced-coffee', price: 125, featured: false, skinny: false, tag: 'No Boba', note: 'Chilled espresso & condensed milk — zero pearls, full silk.', img: 'assets/img/drinks/iced-spanish-latte.webp' },
    { id: 'dalgona-clean', name: 'Dalgona', series: 'iced-coffee', price: 124, featured: false, skinny: true, tag: 'No Boba', note: 'Whipped coffee foam floated on chilled milk.', img: 'assets/img/drinks/iced-spanish-latte.webp' },
    { id: 'iced-latte', name: 'Iced Latte', series: 'iced-coffee', price: 110, featured: false, skinny: true, tag: 'No Boba', note: 'Clean cold espresso & chilled whole or alternative milk.', img: 'assets/img/drinks/iced-latte.webp' },
    { id: 'iced-americano', name: 'Iced Americano', series: 'iced-coffee', price: 80, featured: false, skinny: true, tag: 'Zero Sugar', note: 'Bright double espresso poured sharp over crystal ice.', img: 'assets/img/drinks/iced-americano.webp' }
  ],

  /* Authentic Cup Customizer Options (official PÀO add-on pricing!) */
  customizer: {
    sizes: [
      { id: 'reg', label: 'Regular', delta: 0 },
      { id: 'lrg', label: 'Large', delta: 25 }
    ],
    sweetness: [
      { id: '100', label: '100% Classic' },
      { id: '75', label: '75% Balanced' },
      { id: '50', label: '50% Light' },
      { id: '25', label: '25% Subtle' },
      { id: '0-skinny', label: '0% Skinny (Monkfruit)' }
    ],
    ice: [
      { id: 'regular', label: 'Regular Ice' },
      { id: 'less', label: 'Less Ice' },
      { id: 'none', label: 'No Ice' }
    ],
    milks: [
      { id: 'whole', label: 'Fresh Whole Milk', delta: 0 },
      { id: 'oat', label: 'Oat Milk', delta: 44 },
      { id: 'almond', label: 'Almond Milk', delta: 44 },
      { id: 'coconut', label: 'Coconut Milk', delta: 44 }
    ],
    addons: [
      { id: 'espresso', label: '+ Extra Espresso Shot', delta: 22 },
      { id: 'pearls', label: '+ Extra Brown Sugar Pearls', delta: 25 },
      { id: 'cheese-foam', label: '+ Salted Cream Cheese Foam', delta: 30 },
      { id: 'brulee', label: '+ Crème Brûlée Torch Cap', delta: 30 }
    ]
  },

  /* Savory Food Series (exact official food-menu.jpeg + Oct 2026 Toasties drop) */
  food: {
    noodleBox: {
      id: 'noodle-box',
      name: 'The Noodle Box',
      basePrice: 220,
      desc: 'Thick, springy udon noodles wok-tossed in our glossy house-made savoury signature sauce.',
      proteins: [
        { id: 'original', label: 'Original Udon', delta: 0 },
        { id: 'chicken', label: '+ Tender Chicken', delta: 99 },
        { id: 'beef', label: '+ Glazed Beef', delta: 129 }
      ],
      spiceLevels: [
        { id: 0, label: 'Mild', chillies: 0, delta: 0 },
        { id: 1, label: 'Warm', chillies: 1, delta: 20 },
        { id: 2, label: 'Fiery', chillies: 2, delta: 20 },
        { id: 3, label: 'Extra Hot', chillies: 3, delta: 20 }
      ]
    },
    pops: [
      {
        id: 'pops-shrimp',
        name: 'PÀO Pops — Dynamite Shrimps',
        price: 249,
        tag: 'Crispy Tempura',
        desc: 'Golden tempura-battered shrimp tossed in our creamy, fiery house-made dynamite glaze.'
      },
      {
        id: 'pops-chicken',
        name: 'PÀO Pops — Korean Chicken',
        price: 219,
        tag: 'House Glaze',
        desc: 'Crunchy deep-fried chicken pops lacquered in sweet-spicy house Korean sauce.'
      }
    ],
    toasties: [
      { id: 'toastie-roast-beef', name: 'Roast Beef Toastie', price: 295, tag: 'NEW · Sourdough', desc: 'Slow-roasted sliced beef, melted cheddar & house mustard glaze on golden grilled sourdough.' },
      { id: 'toastie-turkey', name: 'Turkey Melt Toastie', price: 275, tag: 'NEW · Sourdough', desc: 'Smoked turkey, molten cheese pull & herb butter toasted crisp to order.' },
      { id: 'toastie-truffle', name: 'Truffle Mushroom Toastie', price: 270, tag: 'NEW · Vegetarian', desc: 'Sautéed wild mushrooms, aromatic truffle cream & aged melted cheese on sourdough.' },
      { id: 'toastie-brie', name: 'Tomato Jam & Brie Toastie', price: 260, tag: 'NEW · Chef Pick', desc: 'Warm creamy French brie paired with slow-simmered sweet-tangy tomato jam.' },
      { id: 'toastie-pb-nutella', name: 'PB & Nutella Toastie', price: 240, tag: 'NEW · Sweet', desc: 'Roasted peanut butter and molten hazelnut chocolate pressed golden.' }
    ],
    pastries: [
      { id: 'pao-croffle', name: 'PÀO Croffle', price: 130, tag: 'Signature', desc: 'Flaky croissant waffle crowned with whipped cream and warm glossy boba pearls.', img: 'assets/img/pastries/pao-croffle.webp' },
      { id: 'creme-brulee-croffle', name: 'Crème Brûlée Croffle', price: 130, tag: 'Torched', desc: 'Caramelized golden croffle topped with torched vanilla custard cream.', img: 'assets/img/pastries/creme-brulee-croffle.webp' },
      { id: 'taro-croffle', name: 'Taro Croffle', price: 125, tag: 'Violet', desc: 'Crisp butter croffle draped in nutty roasted purple taro cream.', img: 'assets/img/pastries/taro-croffle.webp' },
      { id: 'classic-croffle', name: 'Classic Croffle', price: 79, tag: 'Golden', desc: 'Warm caramelized butter croissant pressed crisp in our waffle iron.', img: 'assets/img/pastries/classic-croffle.webp' },
      { id: 'brown-butter-cookie', name: 'Brown Butter Cookie', price: 70, tag: 'Baked Daily', desc: 'Nutty browned-butter soft-center cookie served in our Seigaiha kraft sleeve.', img: 'assets/img/pastries/brown-butter-cookie.webp' },
      { id: 'plain-croissant', name: 'Plain Croissant', price: 69, tag: 'Morning Bake', desc: 'Flaky laminated French-butter croissant baked fresh every morning.', img: 'assets/img/pastries/plain-croissant.webp' }
    ]
  },

  /* PÀO Shop & Collab Merch (all real paoeg.com WooCommerce photography & pricing) */
  merch: [
    { id: 'candle-brown-sugar', name: 'Brown Sugar Boba Candle', category: 'candles', collab: 'PÀO × Fairoza', price: 499, desc: 'Hand-poured soy wax scented with warm muscovado caramel & toasted milk tea.', img: 'assets/img/merch/candle-brown-sugar.webp' },
    { id: 'candle-matcha', name: 'Iced Matcha Candle', category: 'candles', collab: 'PÀO × Fairoza', price: 499, desc: 'Earthy ceremonial green tea layered with creamy vanilla bean in a boba-glass jar.', img: 'assets/img/merch/candle-matcha.webp' },
    { id: 'candle-taro', name: 'Taro Boba Candle', category: 'candles', collab: 'PÀO × Fairoza', price: 499, desc: 'Sweet roasted purple taro & velvety cream — smells just like our District 5 counter.', img: 'assets/img/merch/candle-taro.webp' },
    { id: 'candle-coffee', name: 'Iced Coffee Candle', category: 'candles', collab: 'PÀO × Fairoza', price: 499, desc: 'Fresh espresso bean, cold cream & soft brown sugar in reusable iced-cup glass.', img: 'assets/img/merch/candle-coffee.webp' },
    { id: 'crewneck-bubbles', name: 'Bubbles Over Troubles Crewneck', category: 'apparel', collab: 'PÀO Apparel', price: 949, sizes: ['S', 'M', 'L', 'XL'], desc: 'Heavyweight stone-grey fleece with full illustrated PÀO bear & boba back artwork.', img: 'assets/img/merch/crewneck-bubbles.webp' },
    { id: 'crewneck-not-ordinary', name: 'Not So Ordinary Crewneck', category: 'apparel', collab: 'PÀO Apparel', price: 949, sizes: ['S', 'M', 'L', 'XL'], desc: 'Crisp off-white relaxed crewneck with deep pine Boba Club crest on the back.', img: 'assets/img/merch/crewneck-not-ordinary.webp' },
    { id: 'crewneck-good-mood', name: 'The Good Mood Crewneck', category: 'apparel', collab: 'PÀO Apparel', price: 949, sizes: ['S', 'M', 'L', 'XL'], desc: 'Blush-pink brushed cotton fleece celebrating good moods & everyday escapes.', img: 'assets/img/merch/crewneck-good-mood.webp' },
    { id: 'cap-matcha-mood', name: 'Matcha Mood Cap', category: 'accessories', collab: 'PÀO × The Cap Supply', price: 749, desc: 'Washed pine-green dad cap embroidered with the PÀO bear holding a matcha cup.', img: 'assets/img/merch/cap-matcha-mood.webp' },
    { id: 'cap-baddies', name: 'Bubble Tea Baddies Cap', category: 'accessories', collab: 'PÀO × The Cap Supply', price: 749, desc: 'Garment-dyed dusty rose cap with crisp forest-green stitched lettering.', img: 'assets/img/merch/cap-baddies.webp' },
    { id: 'cap-boba-club', name: 'The Boba Club Cap', category: 'accessories', collab: 'PÀO × The Cap Supply', price: 749, desc: 'Everyday club cap embroidered with our signature Boba Club emblem.', img: 'assets/img/merch/cap-boba-club.webp' },
    { id: 'cap-brown-sugar', name: 'Brown Sugar Cap', category: 'accessories', collab: 'PÀO × The Cap Supply', price: 749, desc: 'Warm toasted-caramel washed cotton twill inspired by our bestseller.', img: 'assets/img/merch/cap-brown-sugar.webp' },
    { id: 'keychain-boba-club', name: 'Boba Club Keychain', category: 'accessories', collab: 'PÀO Objects', price: 350, desc: 'Enamel bear & boba charm built for keys, totes & everyday carry.', img: 'assets/img/merch/keychain-boba-club.webp' },
    { id: 'glass-cup-boba-era', name: 'My Boba Era Glass Cup', category: 'accessories', collab: 'Limited Drop', price: 390, desc: 'Borosilicate iced-cup tumbler with wide boba straw for home matcha rituals.', img: 'assets/img/merch/glass-cup-boba-era.webp' }
  ],

  /* Culture / @pao.egy Editorial Gallery */
  culture: [
    { img: 'assets/img/editorial/district5-flagship.webp', tag: 'FLAGSHIP', caption: 'Golden hour outside District 5 by Marakez — full Drinks & Food bar.' },
    { img: 'assets/img/editorial/golden-boba-croffle.webp', tag: 'RITUAL', caption: 'Warm brown-sugar pearls poured fresh beside a glazed PÀO Croffle.' },
    { img: 'assets/img/editorial/friends-matcha-toast.webp', tag: 'COMMUNITY', caption: 'Ceremonial matcha dates & boba toasts across Cairo.' },
    { img: 'assets/img/editorial/lookbook-bubbles-back.webp', tag: 'APPAREL', caption: 'Bubbles Over Troubles — heavyweight club fleece in the wild.' },
    { img: 'assets/img/editorial/outdoor-kiosk.webp', tag: 'POP-UPS', caption: 'Sun-drenched outdoor boba kiosks for weekend gatherings.' },
    { img: 'assets/img/editorial/lookbook-pink-cap.webp', tag: 'STREET', caption: 'Bubble Tea Baddies cap & hot ceremonial matcha on chilly mornings.' },
    { img: 'assets/img/editorial/pao-team.webp', tag: 'THE CREW', caption: 'The people behind every shaken tea, sealed lid & warm smile.' }
  ],

  /* Compact crisp IG drops (native grid resolution, rendered in compact portrait slots) */
  igDrops: [
    { img: 'assets/img/ig/toasties-stack.webp', label: 'NEW · Sourdough Toasties', sub: '5 pressed gourmet stacks' },
    { img: 'assets/img/ig/mojitos-seal-lid.webp', label: 'Pierce the Bear Seal', sub: 'Sparkling Mojito series' },
    { img: 'assets/img/ig/sahel-beach-cup.webp', label: 'Sahel Summer Escapes', sub: '9 North Coast beach spots' },
    { img: 'assets/img/ig/cookie-kraft-sleeve.webp', label: 'Seigaiha Kraft Bakes', sub: 'Warm brown butter cookies' },
    { img: 'assets/img/ig/toasties-tray.webp', label: 'Fresh Off the Press', sub: 'Roast beef, brie & truffle' },
    { img: 'assets/img/ig/toasties-overhead.webp', label: 'Shared Table Energy', sub: 'District 5 & Zamalek drops' }
  ],

  /* All 23 Verified PÀO Branches across Egypt */
  branches: [
    /* New Cairo & East Cairo */
    { id: 'district-5', name: 'District 5 Flagship', area: 'By Marakez, New Cairo', region: 'east', hours: 'Daily · 8:00 AM – 12:00 AM', openH: 8, closeH: 24, driveThru24: false, food: true, flagship: true, maps: 'https://maps.app.goo.gl/9ShdZRdG2UcrhbCV7?g_st=ipc' },
    { id: 'the-driive', name: 'The Driive', area: 'By the Waterway, New Cairo', region: 'east', hours: 'Drive-Thru · Open 24 HRS', openH: 0, closeH: 24, driveThru24: true, food: true, flagship: false, maps: 'https://maps.app.goo.gl/VmL7pXHKSRT8JjSc8?g_st=ipc' },
    { id: 'the-drive', name: 'The Drive', area: 'By the Waterway, New Cairo', region: 'east', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: false, flagship: false, maps: 'https://maps.app.goo.gl/ihHj53P7CDQQGZhx7?g_st=ipc' },
    { id: 'leven-square', name: 'Leven Square (St.Roll)', area: 'New Cairo', region: 'east', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: false, flagship: false, maps: 'https://maps.app.goo.gl/CFRZjG17jnENSCvk8?g_st=ipc' },
    { id: 'street-side', name: 'Street Side', area: 'El Shorouk', region: 'east', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: true, flagship: false, maps: 'https://www.google.com/maps/search/?api=1&query=PAO+Street+Side+El+Shorouk+Egypt' },
    { id: 'the-yard', name: 'The Yard', area: 'Al Rehab, New Cairo', region: 'east', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: false, flagship: false, maps: 'https://www.google.com/maps/search/?api=1&query=PAO+The+Yard+Al+Rehab+Egypt' },

    /* Sheikh Zayed & 6th of October */
    { id: 'arkan-plaza', name: 'Arkan Plaza', area: 'Gate D, Al Sheikh Zayed', region: 'west', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: false, flagship: false, maps: 'https://maps.app.goo.gl/KudazxSWXSutHSTB6?g_st=ipc' },
    { id: 'majarrah', name: 'Majarrah Mall', area: 'Al Sheikh Zayed', region: 'west', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: false, flagship: false, maps: 'https://maps.app.goo.gl/sLXcJcxgGC88VcQL8?g_st=ipc' },
    { id: 'trivium-zayed', name: 'Trivium Mall', area: 'Al Sheikh Zayed', region: 'west', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: true, flagship: false, maps: 'https://maps.app.goo.gl/LsY5dZsdHVwAy6mPA' },
    { id: 'golf-central', name: 'Golf Central Mall', area: 'Palm Hills, 6th of October', region: 'west', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: true, flagship: false, maps: 'https://maps.app.goo.gl/psiGWDh5d3Ero14A6' },
    { id: 'sodic-west', name: 'SODIC West', area: 'Hub Park, Al Sheikh Zayed', region: 'west', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: false, flagship: false, maps: 'https://maps.app.goo.gl/NuWajspW57HU6DKp9' },
    { id: 'swell-lake', name: 'Swell Lake', area: '6th of October', region: 'west', hours: 'Sun–Wed 7:30 AM – 12 AM · Thu–Sat – 1 AM', openH: 7.5, closeH: 24, weekendCloseH: 25, driveThru24: false, food: false, flagship: false, maps: 'https://maps.app.goo.gl/pcpsvXFZYPrx72798?g_st=ipc' },

    /* Alexandria & Zamalek */
    { id: 'alex-point6', name: 'Alexandria · Point 6', area: 'Sidi Gaber, Alexandria', region: 'alex', hours: 'Drive-Thru 24 HRS · Dine-in 7:30 AM – 1 AM', openH: 0, closeH: 24, driveThru24: true, food: true, flagship: true, maps: 'https://maps.app.goo.gl/YxY8em6D9XG74UPL6' },
    { id: 'gezira-club', name: 'Gezira Sporting Club', area: 'Zamalek, Cairo', region: 'alex', hours: 'Daily · 8:00 AM – 11:30 PM', openH: 8, closeH: 23.5, driveThru24: false, food: true, flagship: false, newest: true, maps: 'https://www.google.com/maps/search/?api=1&query=Gezira+Sporting+Club+Zamalek+Cairo' },

    /* Sahel · North Coast Summer Spots (June–September) */
    { id: 'sahel-zahra', name: 'Northed · Zahra', area: 'North Coast · Drinks & Food', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: true, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=Zahra+Morshedy+North+Coast+Egypt' },
    { id: 'sahel-marassi', name: 'Marassi (The Hub)', area: 'Sidi Abdel Rahman, North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=Marassi+The+Hub+North+Coast' },
    { id: 'sahel-playa', name: 'Playa · Ghazala Bay', area: 'Ghazala Bay, North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://maps.app.goo.gl/SkmNKcTR6i98vxbu8' },
    { id: 'sahel-seashell', name: 'Seashell', area: 'North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=Seashell+North+Coast+Egypt' },
    { id: 'sahel-telal', name: 'Telal (Beach)', area: 'North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=Telal+North+Coast+Egypt' },
    { id: 'sahel-lavista', name: 'La Vista Bay', area: 'Ras El Hekma, North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=La+Vista+Bay+North+Coast' },
    { id: 'sahel-caesar', name: 'Caesar Matcha', area: 'Ras El Hekma, North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=Caesar+Sodic+North+Coast' },
    { id: 'sahel-almaza', name: 'Almaza Bay', area: 'Marsa Matrouh, North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=Almaza+Bay+North+Coast' },
    { id: 'sahel-ritsa', name: 'RITSA · Masyaf', area: 'Ras El Hekma, North Coast', region: 'sahel', hours: 'Seasonal · June – September', seasonal: true, food: false, driveThru24: false, maps: 'https://www.google.com/maps/search/?api=1&query=Masyaf+Ras+El+Hekma' }
  ],

  /* Catering Event Packages with REAL PÀO Catering Photography */
  cateringTypes: [
    {
      id: 'weddings',
      label: 'Weddings & Galas',
      title: 'Illuminated mobile boba bars for unforgettable toasts.',
      desc: 'From garden katb-ketabs to late-night ballroom after-parties — our custom timber-and-pine PÀO bar rolls in with dedicated baristas, fresh warm pearls, and bespoke monogrammed cup seals.',
      highlights: ['Custom-lit PÀO timber & pine bar', 'Dedicated boba & matcha baristas', 'Optional couple-monogrammed cup stickers', 'Up to 1,200 freshly sealed cups per night'],
      img: 'assets/img/events/catering-gala-night.webp',
      secondaryImg: 'assets/img/events/catering-wedding-toast.webp',
      caption: 'Real PÀO wedding & gala bar setup in Cairo'
    },
    {
      id: 'corporate',
      label: 'Corporate Events',
      title: 'Turn office summits, launches & town halls into a ritual.',
      desc: 'Keep teams energized with ceremonial matcha, specialty iced lattes, brown-sugar boba, and freshly baked croffles — served fast from a sleek pop-up counter.',
      highlights: ['Fast-pour 250+ cups/hour workflow', 'Full Skinny (monkfruit) & oat-milk bar', 'Co-branded cup sleeves available', 'Seamless setup at Smart Village, New Cairo & Zayed'],
      img: 'assets/img/events/catering-garden-bar.webp',
      secondaryImg: 'assets/img/events/catering-lawn-pavilion.webp',
      caption: 'PÀO outdoor executive pavilion & bar'
    },
    {
      id: 'activations',
      label: 'Brand Activations',
      title: 'Crowd-magnet pop-ups for padel clubs, festivals & retail launches.',
      desc: 'Our signature blush-and-pine mobile counter draws lines on sight — paired with custom flavor creations designed exclusively around your campaign palette.',
      highlights: ['Bespoke campaign-colored drink recipes', 'Full vinyl & signage customization', 'High-throughput festival sealing machines', 'Proven across Cairo sports clubs & Sahel hubs'],
      img: 'assets/img/events/catering-brand-activation.webp',
      secondaryImg: 'assets/img/editorial/outdoor-kiosk.webp',
      caption: 'PÀO club & sports activation counter'
    },
    {
      id: 'birthdays',
      label: 'Birthdays & Private',
      title: 'Garden celebrations, graduations & private villa lounges.',
      desc: 'Bring the full District 5 flavor lineup straight to your lawn or terrace — complete with soft serve swirls, popping mojitos, and warm croffles.',
      highlights: ['Compact garden-ready bar footprint', 'Curated 5-flavor menu tailored to guests', 'Kid-friendly caffeine-free fruit teas & soft serve', 'Zero cleanup — we handle power, ice & teardown'],
      img: 'assets/img/events/catering-garden-party.webp',
      secondaryImg: 'assets/img/events/catering-garden-bar.webp',
      caption: 'Private daytime garden gathering with PÀO'
    }
  ]
};
