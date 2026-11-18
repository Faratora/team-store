import { renderHero } from './hero';
import { renderMarquee } from './marquee';
import { renderProducts } from './products';

export function renderCart(): string {
  return `${renderHero('cart')}${renderMarquee()}${renderProducts()}`;
}
