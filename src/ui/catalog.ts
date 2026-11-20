import { renderHero } from './hero';
import { renderMarquee } from './marquee';

export function renderCatalog(): string {
  return `${renderHero('catalog')}${renderMarquee()}<div data-products-placeholder></div>`;
}
