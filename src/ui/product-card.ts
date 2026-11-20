import type { Product } from '../data/products';
import { formatPrice, getProductQuantity, addToCart, updateCartQuantity, } from '../data/cart';

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

  const cardControls = document.createElement('div');
  cardControls.className = 'product-card__controls'

  function renderControls(): void {
    cardControls.replaceChildren();

    const quantity = getProductQuantity(product.id);

    if (quantity === 0) {
      const addButton = document.createElement('button');
      addButton.className = 'product-card__button';
      addButton.type = 'button';
      addButton.textContent = 'В корзину';
      
      addButton.addEventListener('click', () => {
        addToCart(product.id);
        renderControls();
      });

      cardControls.append(addButton);
      return;
    }

    const decreaseButton = document.createElement('button');
    decreaseButton.className = 'product-card__quantity-button';
    decreaseButton.type = 'button';
    decreaseButton.textContent = '−';
    decreaseButton.setAttribute('aria-label', 'Уменьшить количество');

    decreaseButton.addEventListener('click', () => {
      updateCartQuantity(product.id, quantity - 1);
      renderControls();
    });

    const quantityValue = document.createElement('span');
    quantityValue.className = 'product-card__quantity';
    quantityValue.textContent = String(quantity);

    const increaseButton = document.createElement('button');
    increaseButton.className = 'product-card__quantity-button';
    increaseButton.type = 'button';
    increaseButton.textContent = '+';
    increaseButton.setAttribute('aria-label', 'Увеличить количество');

    increaseButton.addEventListener('click', () => {
      updateCartQuantity(product.id, quantity + 1);
      renderControls();
    });

    cardControls.append(decreaseButton, quantityValue, increaseButton);
  }

  renderControls();


  cardInfo.append(cardCategory, cardName, cardPrice, cardControls);
  card.append(cardImage, cardInfo);
  return card;
}