import './styles/main.css';

import rssLogo from './assets/rss-logo.svg';


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

// Бегущая строка
const marqueeWords = [
  'код',
  'дизайн',
  'каталог',
  'корзина',
  'промокод',
  'localstorage',
];

type TeamMember = {
  num: string;
  title: string;
  github: string;
  githubUrl?: string;
  role: string;
  contribution: string;
  art: string;
};

const team: TeamMember[] = [
  {
    num: '01',
    title: 'Участник 1',
    github: 'KateKurakina',
    githubUrl: 'https://github.com/KateKurakina',
    role: 'Екатерина Куракина',
    contribution: 'Настройка проекта, каталог, фильтры и сортировка товаров, корзина, промокод и сохранение покупок в localStorage.',
    art: 'pink',
  },
  {
    num: '02',
    title: 'Участник 2',
    github: 'Faratora',
    githubUrl: 'https://github.com/Faratora',
    role: 'Светлана Савина',
    contribution: 'Настройка проекта, страница "О нас", ',
    art: 'olive',
  },
];

const stats = [
  { value: '02', label: 'разработчика' },
  { value: '01', label: 'репозиторий' },
  { value: '100%', label: 'практика' },
];

function renderMarquee(): string {
  const group = marqueeWords
    .map(
      (word) =>
        `<span class="marquee__item">${word}</span><span class="marquee__sep">✦</span>`,
    )
    .join('');

  return `
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <div class="marquee__group">${group}</div>
        <div class="marquee__group">${group}</div>
      </div>
    </div>
  `;
}

function renderTeam(): string {
  const cards = team
    .map(
      (member) => `
        <article class="team-card">
          <h3 class="team-card__title">${member.title}</h3>
          <div class="team-card__art team-card__art--${member.art}">
            <span class="team-card__num">${member.num}</span>
            ${flowerSvg('team-card__flower')}
            <span class="team-card__tag">${member.role}</span>
          </div>
          <p class="team-card__about">${member.contribution}</p>
          ${
            member.githubUrl
              ? `<a class="team-card__github team-card__github--link"
                   href="${member.githubUrl}" target="_blank" rel="noopener noreferrer"
                   aria-label="GitHub: ${member.github} (откроется в новой вкладке)">
                   <span>GitHub</span>
                   <span class="team-card__github-name">
                     <code>${member.github}</code>
                     <span class="team-card__arrow" aria-hidden="true">↗</span>
                   </span>
                 </a>`
              : `<p class="team-card__github">
                   <span>GitHub</span>
                   <code>${member.github}</code>
                 </p>`
          }
        </article>
      `,
    )
    .join('');

  return `
    <section class="team">
      <div class="section-head">
        <div>
          <p class="eyebrow">Команда</p>
          <h2 class="section-head__title">
            Наша команда
            <span class="section-head__count">02</span>
          </h2>
        </div>
        <p class="section-head__note">Два человека, один репозиторий и общая цель —
        довести учебный магазин до рабочего деплоя.</p>
      </div>
      <div class="team-grid">${cards}</div>

      <div class="manifesto">
        ${flowerSvg('manifesto__flower')}
        <div class="manifesto__text">
          <p class="eyebrow eyebrow--light">Наш подход</p>
          <h3 class="manifesto__title">Учебный проект — тоже продукт</h3>
          <p>Мы не делим работу на «моё» и «твоё»: каждый понимает, как устроен
          весь магазин — от фильтров до промокода и сохранения корзины.</p>
        </div>
        <div class="stats">
          ${stats
            .map(
              (stat) => `
                <div class="stat">
                  <span class="stat__value">${stat.value}</span>
                  <span class="stat__label">${stat.label}</span>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderFooter(): string {
  return `
    <footer class="site-footer">
      <span>© 2026 Team Store</span>
      <span class="site-footer__dots">✦ ✦ ✦</span>
      <a class="site-footer__rss" href="https://rs.school/" target="_blank"
        rel="noopener noreferrer">
        <img src="${rssLogo}" alt="" width="26" height="26" />
        <span>RS School</span>
      </a>
    </footer>
  `;
}

function render(): void {
  root.innerHTML = `
    <div class="topbar" aria-hidden="true"><div class="topbar__dots"></div></div>
    <div class="shell">
      ${renderHeader()}
      <main class="page">${renderHero()}${renderMarquee()}${renderTeam()}</main>
      ${renderFooter()}
    </div>
  `;
}

render();
