import { flowerSvg } from '../utils/svg';
import { heroContent } from '../data/hero';
import type { Page } from '../data/navigation';

export function renderHero(page: Page = 'about'): string {
  const content = heroContent[page];

  return `
    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">${content.eyebrow}</p>
        <h1 class="hero__title">${content.title}</h1>
        <p class="hero__lead">${content.lead}</p>
        <div class="hero__actions">
          <a class="btn btn--dark" href="#/${content.action.page}"
            data-page="${content.action.page}">${content.action.label}</a>
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
        <p class="visual-note">${content.note}</p>
      </div>
    </section>
  `;
}
