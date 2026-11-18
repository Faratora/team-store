export const marqueeWords = [
  'код',
  'дизайн',
  'каталог',
  'корзина',
  'промокод',
  'localstorage',
] as const;

export type MarqueeWord = (typeof marqueeWords)[number];
