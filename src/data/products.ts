export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Светильник настольный',
    category: 'Освещение',
    price: 2199,
    image: '/team-store/src/assets/img/products/lamp.png',
  },
  {
    id: '2',
    name: 'Комплект постельного белья',
    category: 'Спальня',
    price: 3499,
    image: '/team-store/src/assets/img/products/pillow.png',
  },
  {
    id: '3',
    name: 'Стул обеденный',
    category: 'Мебель',
    price: 5199,
    image: '/team-store/src/assets/img/products/chair.png',
  },
  {
    id: '4',
    name: 'Тарелка десертная',
    category: 'Посуда',
    price: 650,
    image: '/team-store/src/assets/img/products/plate.png',
  },
  {
    id: '5',
    name: 'Светильник подвесной',
    category: 'Освещение',
    price: 650,
    image: '/team-store/src/assets/img/products/light.png',
  },
  {
    id: '6',
    name: 'Картина',
    category: 'Декор',
    price: 1650,
    image: '/team-store/src/assets/img/products/optimize.webp',
  },
  {
    id: '7',
    name: 'Полка для ванной',
    category: 'Ванная',
    price: 845,
    image: '/team-store/src/assets/img/products/shelf.webp',
  },
  {
    id: '8',
    name: 'Держатель для полотенец',
    category: 'Ванная',
    price: 845,
    image: '/team-store/src/assets/img/products/holder.webp',
  },
  {
    id: '9',
    name: 'Крючок для хранения',
    category: 'Хранение',
    price: 135,
    image: '/team-store/src/assets/img/products/hook.webp',
  },
  {
    id: '10',
    name: 'Домовой',
    category: 'Декор',
    price: 2300,
    image: '/team-store/src/assets/img/products/toy.jpg',
  },
  {
    id: '11',
    name: 'Денежная жаба',
    category: 'Декор',
    price: 11000,
    image: '/team-store/src/assets/img/products/frog.jpg',
  },
  {
    id: '12',
    name: 'Панно керамика',
    category: 'Декор',
    price: 33000,
    image: '/team-store/src/assets/img/products/panno.jpg',
  },
  {
    id: '13',
    name: 'Настольная лампа',
    category: 'Освещение',
    price: 1800,
    image: '/team-store/src/assets/img/products/lampa-zefirka.jpg',
  },
  {
    id: '14',
    name: 'Декоративная подушка',
    category: 'Декор',
    price: 2500,
    image: '/team-store/src/assets/img/products/podushka-kovrovaya-vyshivk.jpg',
  },
  {
    id: '15',
    name: 'Свеча',
    category: 'Декор',
    price: 1800,
    image: '/team-store/src/assets/img/products/candle.jpg',
  },
];
