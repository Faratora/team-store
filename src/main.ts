import './styles/main.css';

import rssLogo from './assets/rss-logo.svg';
import { navLinks, Page } from './data/navigation';
import { renderHeader } from './ui/header';
import { renderHero } from './ui/hero';
import { renderMarquee } from './ui/marquee';
import { renderTeam } from './ui/team';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Не найден корневой элемент #app');
}

const root: HTMLDivElement = appRoot;

let currentPage: Page = 'about';

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
