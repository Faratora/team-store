import type { Product } from './products';

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  promoCode: string | null;
  discount: number;
};

export const PROMO_CODES: Record<string, number> = {
  SALE10: 10,
  WELCOME: 15,
  VIP20: 20,
};

export const STORAGE_KEY = 'team-store-cart';

export function getCartFromStorage(): CartState {
  if (typeof window === 'undefined') {
    return { items: [], promoCode: null, discount: 0 };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore parse errors
  }
  return { items: [], promoCode: null, discount: 0 };
}

export function saveCartToStorage(cart: CartState): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }
}

export function calculateCartTotals(
  cart: CartState,
  products: Product[],
): { subtotal: number; discount: number; total: number } {
  let subtotal = 0;
  for (const item of cart.items) {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      subtotal += product.price * item.quantity;
    }
  }
  const discount = Math.round(subtotal * (cart.discount / 100));
  const total = subtotal - discount;
  return { subtotal, discount, total };
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(price);
}
