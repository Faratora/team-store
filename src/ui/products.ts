import { products } from '../data/products';
import { createProductCard } from './product-card';

export function renderProducts(): HTMLElement {
  const productsSection = document.createElement('section');
  productsSection.className = 'products';

  const sectionHead = document.createElement('div');
  sectionHead.className = 'section-head';

  const headingContainer = document.createElement('div');

  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = 'Товар';

  const title = document.createElement('h2');
  title.className = 'section-head__title';
  title.textContent = 'Выбрать товар';

  const note = document.createElement('p');
  note.className = 'section-head__note';
  note.textContent =
    'Выбери то, что поднимает настроение — и добавь в корзину.';

  headingContainer.append(eyebrow, title);
  sectionHead.append(headingContainer, note);

  const grid = document.createElement('div');
  grid.className = 'products-grid';

  products.forEach((product) => {
    grid.append(createProductCard(product));
  });

  productsSection.append(sectionHead, grid);

  return productsSection;
}
