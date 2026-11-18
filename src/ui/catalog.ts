import { renderHero } from './hero';
import { renderMarquee } from './marquee';
import { renderProducts } from './products';

export function renderCatalog(): string {
  return `${renderHero('catalog')}${renderMarquee()}${renderProducts()}`;
}
