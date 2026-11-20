import type { Product } from '../data/products';
import { formatPrice } from '../data/cart';

export function createProductCard(product: Product): HTMLElement {
  const card = document.createElement('article');
  card.className = 'product-card';

  const cardImage = document.createElement('img');
  cardImage.className = 'product-card__image';
  cardImage.src = product.image;
  cardImage.alt = product.name;
  cardImage.loading = 'lazy';

  const cardInfo = document.createElement('div');
  cardInfo.className = 'product-card__info';

  const cardCategory = document.createElement('p');
  cardCategory.className = 'product-card__category';
  cardCategory.textContent = product.category;

  const cardName = document.createElement('h3');
  cardName.className = 'product-card__name';
  cardName.textContent = product.name;

  const cardPrice = document.createElement('p');
  cardPrice.className = 'product-card__price';
  cardPrice.textContent = formatPrice(product.price);

  const cardButton = document.createElement('button');
  cardButton.className = 'product-card__button';
  cardButton.type = 'button';
  cardButton.textContent = 'В корзину';


  cardInfo.append(cardCategory, cardName, cardPrice, cardButton);
  card.append(cardImage, cardInfo);
  return card;
}