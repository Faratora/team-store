import { products } from '../data/products';

export function renderProducts(): string {
  const cards = products
    .map(
      (p) => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-card__image">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-card__body">
          <p class="product-card__category">${p.category}</p>
          <h3 class="product-card__title">${p.name}</h3>
          <div class="product-card__footer">
            <span class="product-card__price">${p.price.toLocaleString('ru-RU')} ₽</span>
            <button class="btn btn--dark product-card__btn" data-id="${p.id}" type="button">В корзину</button>
          </div>
        </div>
      </article>
    `,
    )
    .join('');

  return `
    <section class="products">
      <div class="section-head">
        <div>
          <p class="eyebrow">Товар</p>
          <h2 class="section-head__title">Выбери товар</h2>
        </div>
        <p class="section-head__note">Выбери то, что поднимает настроение — и добавь в корзину.</p>
      </div>
      <div class="products-grid">${cards}</div>
    </section>
  `;
}
