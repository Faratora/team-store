import { flowerSvg, cartIcon } from '../utils/svg';
import { navLinks } from '../data/navigation';
import type { Page } from '../data/navigation';

export function renderHeader(currentPage: Page): string {
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
