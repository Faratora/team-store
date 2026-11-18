import './styles/main.css';

type Page = 'about' | 'catalog' | 'cart';

const navLinks: Array<{ page: Page; label: string }> = [
  { page: 'about', label: 'О нас' },
  { page: 'catalog', label: 'Каталог' },
  { page: 'cart', label: 'Корзина' },
];

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

  return `
    <header class="site-header">
      <a class="logo" href="#/about" data-page="about">
        ${flowerSvg('logo__flower')}
        <span>team store</span>
      </a>
      <nav class="site-nav" aria-label="Основная навигация">${links}</nav>
    </header>
  `;
}

function render(): void {
  root.innerHTML = `
    <div class="topbar" aria-hidden="true"><div class="topbar__dots"></div></div>
    <div class="shell">
      ${renderHeader()}
      <main class="page"></main>
    </div>
  `;
}

render();