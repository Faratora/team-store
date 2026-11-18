import { flowerSvg } from '../utils/svg';

export function renderHero(): string {
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
