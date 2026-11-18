export type Page = 'about' | 'catalog' | 'cart';

export const navLinks: Array<{ page: Page; label: string }> = [
  { page: 'about', label: 'О нас' },
  { page: 'catalog', label: 'Каталог' },
  { page: 'cart', label: 'Корзина' },
];

export const pageTitles: Record<Page, string> = {
  about: 'О нас — Team Store',
  catalog: 'Каталог — Team Store',
  cart: 'Корзина — Team Store',
};
