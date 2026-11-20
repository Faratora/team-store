import './styles/main.css';

import { navLinks, pageTitles, Page } from './data/navigation';
import { renderHeader } from './ui/header';
import { renderHero } from './ui/hero';
import { renderMarquee } from './ui/marquee';
import { renderTeam } from './ui/team';
import { renderCatalog } from './ui/catalog';
import { renderCart } from './ui/cart';
import { renderFooter } from './ui/footer';
import { renderProducts } from './ui/products';
import { getCartFromStorage } from './data/cart';

const appRoot = document.querySelector<HTMLDivElement>('#app');

if (!appRoot) {
  throw new Error('Не найден корневой элемент #app');
}

const root: HTMLDivElement = appRoot;

let currentPage: Page = pageFromHash();

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

function renderPageContent(page: Page): string {
  if (page === 'catalog') {
    return renderCatalog();
  }

  if (page === 'cart') {
    return renderCart();
  }

  return `${renderHero('about')}${renderMarquee()}${renderTeam()}`;
}

function updateCartLinkCount(): void {
  const cartLink = root.querySelector<HTMLAnchorElement>('.cart-link');

  if (!cartLink) {
    return;
  }

  const totalQuantity = getCartFromStorage().items.reduce((total, item) => total + item.quantity, 0);
  
  let count = cartLink.querySelector<HTMLSpanElement>(
    '.cart-link__count',
  );

  if (!count) {
    count = document.createElement('span');
    count.className = 'cart-link__count';
    cartLink.append(count);
  }

  count.textContent = String(totalQuantity);
  count.hidden = totalQuantity === 0;
}

window.addEventListener('cart-updated', updateCartLinkCount);

function render(): void {
  document.title = pageTitles[currentPage];

  root.innerHTML = `
    <div class="topbar" aria-hidden="true"><div class="topbar__dots"></div></div>
    <div class="shell">
      ${renderHeader(currentPage)}
      <main class="page">${renderPageContent(currentPage)}</main>
      ${renderFooter()}
    </div>
  `;

  if (currentPage === 'catalog') {
    const productsPlaceholder = root.querySelector<HTMLDivElement>(
      '[data-products-placeholder]',
    );
    
    if (productsPlaceholder) {
      productsPlaceholder.replaceWith(renderProducts());
    }
  }

  attachListeners();
  updateCartLinkCount();
}

render();
