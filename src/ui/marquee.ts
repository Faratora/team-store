import { marqueeWords } from '../data/marquee';

export function renderMarquee(): string {
  const group = marqueeWords
    .map(
      (word) =>
        `<span class="marquee__item">${word}</span><span class="marquee__sep">✦</span>`,
    )
    .join('');

  return `
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <div class="marquee__group">${group}</div>
        <div class="marquee__group">${group}</div>
      </div>
    </div>
  `;
}
