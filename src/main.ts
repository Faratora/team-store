import './styles/main.css';

import rssLogo from './assets/rss-logo.svg';
import { flowerSvg } from './utils/svg';
import { navLinks, Page } from './data/navigation';
import { marqueeWords } from './data/marquee';
import { team } from './data/team';
import { stats } from './data/stats';
import { renderHeader } from './ui/header';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Не найден корневой элемент #app');
}

const root: HTMLDivElement = appRoot;

let currentPage: Page = 'about';

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

function attachListeners(): void {
  document
    .querySelectorAll<HTMLAnchorElement>('a[data-page]')
    .forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo(link.dataset.page);
      });
    });
}

function navigateTo(page: string | undefined): void {
  const next = navLinks.find((link) => link.page === page);

  if (!next || next.page === currentPage) {
    return;
  }

  window.location.hash = `/${next.page}`;
}

window.addEventListener('hashchange', () => {
  currentPage = pageFromHash();
  render();
  window.scrollTo({ top: 0 });
});

function pageFromHash(): Page {
  const page = window.location.hash.replace(/^#\/?/, '');
  const match = navLinks.find((link) => link.page === page);
  return match ? match.page : 'about';
}

function render(): void {
  root.innerHTML = `
    <div class="topbar" aria-hidden="true"><div class="topbar__dots"></div></div>
    <div class="shell">
      ${renderHeader(currentPage)}
      <main class="page">${renderHero()}${renderMarquee()}${renderTeam()}</main>
      ${renderFooter()}
    </div>
  `;

  attachListeners();
}

render();
