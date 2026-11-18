import './styles/main.css';

type Page = 'about' | 'catalog' | 'cart';

const navLinks: Array<{ page: Page; label: string }> = [
  { page: 'about', label: 'О нас' },
  { page: 'catalog', label: 'Каталог' },
  { page: 'cart', label: 'Корзина' },
];

const cartIcon = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <path d="M5.5 8h13l-1.1 12.5h-10.8L5.5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
`;

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Не найден корневой элемент #app');
}

const root: HTMLDivElement = appRoot;

let currentPage: Page = 'about';

function flowerSvg(className: string): string {
  const petals = Array.from(
    { length: 10 },
    (_, index) =>
      `<ellipse cx="60" cy="27" rx="11" ry="27" transform="rotate(${index * 36} 60 60)" />`,
  ).join('');

  return `
    <svg class="${className}" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <g fill="currentColor">${petals}<circle cx="60" cy="60" r="13" /></g>
    </svg>
  `;
}

function renderHeader(): string {
  const links = navLinks
    .map((link) => {
      const active = link.page === currentPage;
      return `<a href="#/${link.page}" data-page="${link.page}" class="${active ? 'active' : ''}"
        ${active ? 'aria-current="page"' : ''}>${link.label}</a>`;
    })
    .join('');

  const cartActive = currentPage === 'cart';

  return `
    <header class="site-header">
      <a class="logo" href="#/about" data-page="about">
        ${flowerSvg('logo__flower')}
        <span>team store</span>
      </a>
      <nav class="site-nav" aria-label="Основная навигация">${links}</nav>
      <a class="cart-link ${cartActive ? 'is-active' : ''}" href="#/cart" data-page="cart"
        aria-label="Корзина" ${cartActive ? 'aria-current="page"' : ''}>${cartIcon}</a>
    </header>
  `;
}

function renderHero(): string {
  return `
    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">О нас</p>
        <h1 class="hero__title">Делаем<br />магазин<br />вместе</h1>
        <p class="hero__lead">Team Store — учебный проект команды из двух разработчиков.
        Каталог с фильтрами, корзина, промокод и аккуратный интерфейс: собираем
        магазин так, будто он настоящий.</p>
        <div class="hero__actions">
          <a class="btn btn--dark" href="#/catalog" data-page="catalog">Смотреть каталог</a>
          </div>
      </div>
      <div class="hero__visual">
        ${flowerSvg('hero__flower')}
        <div class="pack pack--a">
          <span class="pack__brand">team store</span>
          <span class="pack__word">design</span>
          <span class="pack__meta">est. 2026</span>
        </div>
        <div class="pack pack--b">
          <span class="pack__brand">team store</span>
          <span class="pack__word">code</span>
          <span class="pack__meta">est. 2026</span>
        </div>
        <div class="pack pack--c">
          <span class="pack__brand">team store</span>
          <span class="pack__word">ship</span>
          <span class="pack__meta">est. 2026</span>
        </div>
        <p class="visual-note">2 разработчика<br />1 магазин</p>
      </div>
    </section>
  `;
}

function render(): void {
  root.innerHTML = `
    <div class="topbar" aria-hidden="true"><div class="topbar__dots"></div></div>
    <div class="shell">
      ${renderHeader()}
      <main class="page">${renderHero()}</main>
    </div>
  `;
}

render();
