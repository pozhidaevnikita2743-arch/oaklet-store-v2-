import { Product, Category, CategorySlug } from './types'

export const CATEGORIES: Category[] = [
  { slug: 'hoodies',   name: 'Худи и свитшоты', plural: 'Худи и свитшоты' },
  { slug: 'shirts',    name: 'Рубашки',         plural: 'Рубашки' },
  { slug: 'tshirts',   name: 'Футболки',        plural: 'Футболки' },
  { slug: 'longsleeves', name: 'Лонгсливы',     plural: 'Лонгсливы' },
  { slug: 'headwear',  name: 'Головные уборы',  plural: 'Головные уборы' },
  { slug: 'accessories', name: 'Аксессуары',    plural: 'Аксессуары' },
]

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'hudi-history',
    name: 'Худи «History»',
    subtitle: 'Oversize, белый',
    description:
      'На спине — скриптовое "Oaklet — history will judge us". Тяжёлый хлопок 380 г/м², оверсайз крой, объёмный капюшон. Носится как есть — без лишних объяснений.',
    price: 4500,
    images: [
      '/img/products/hoodie-history-1.jpg',
      '/img/products/hoodie-history-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Белый'],
    inStock: true,
    isBestseller: true,
    tags: ['хит'],
  },
  {
    id: '2',
    slug: 'zipka-belaya',
    name: 'Зипка белая',
    subtitle: 'Oversize, на молнии',
    description:
      'Тяжёлая белая толстовка на молнии. Оверсайз, плотный флис, маленькое лого OAKLET на груди. Бросается поверх всего — и сразу образ.',
    price: 4500,
    images: [
      '/img/products/zip-white-1.jpg',
      '/img/products/zip-white-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Белый'],
    inStock: true,
    isBestseller: true,
    tags: ['хит'],
  },
  {
    id: '3',
    slug: 'tishert-krasnyy',
    name: 'Тишерт красный',
    subtitle: 'Oversize, 100% хлопок',
    description:
      'Насыщенный красный, плотный хлопок 220 г/м². Маленький принт OAKLET на груди. Прямой оверсайз-крой — подходит любому.',
    price: 2200,
    images: [
      '/img/products/tee-red-1.jpg',
      '/img/products/tee-red-2.jpg',
    ],
    category: 'tshirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Красный'],
    inStock: true,
    tags: [],
  },
  {
    id: '4',
    slug: 'rubashka-overs',
    name: 'Рубашка оверсайз',
    subtitle: 'Коричневая, короткий рукав',
    description:
      'Хлопковая рубашка с укороченным рукавом и нагрудным карманом. Тёмно-коричневый, оверсайз крой — свободно, но не мешком. Носится поверх тишерта или на голое тело.',
    price: 3500,
    images: [
      '/img/products/shirt-brown-1.jpg',
      '/img/products/shirt-brown-2.jpg',
    ],
    category: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Коричневый'],
    inStock: true,
    isNew: true,
    tags: ['новинка'],
  },
  {
    id: '5',
    slug: 'rubashka-polosa',
    name: 'Рубашка в полоску',
    subtitle: 'Oversize, хлопок-лён',
    description:
      'Тонкая полоска на мягкой смесовой ткани. Длинный рукав, оверсайз силуэт — носится расстёгнутой как лёгкая куртка или закрытой. Для тех, кто не любит очевидных решений.',
    price: 3200,
    images: [
      '/img/products/shirt-stripe-1.jpg',
      '/img/products/shirt-stripe-2.jpg',
    ],
    category: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Серый'],
    inStock: true,
    tags: [],
  },
  {
    id: '6',
    slug: 'svitshot-seryy',
    name: 'Свитшот серый',
    subtitle: 'Oversize, мягкий хлопок',
    description:
      'Светло-серый свитшот из мягкого хлопка. Минималистично — без крупных принтов, только силуэт. Оверсайз крой, прямые рукава. На каждый день.',
    price: 3800,
    images: [
      '/img/products/sweat-gray-1.jpg',
      '/img/products/sweat-gray-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Серый'],
    inStock: true,
    tags: [],
  },
  {
    id: '7',
    slug: 'tishert-hood',
    name: 'Тишерт «HOOD×OAKLET»',
    subtitle: 'Белый, коллаборация',
    description:
      'Совместный дроп с HOOD. Спереди — граффити-принт, сзади — большая иллюстрация: руки с баскетбольным мячом, ракеткой, виниловой пластинкой и стаканом. Ограниченный тираж.',
    price: 2500,
    images: [
      '/img/products/tee-hood-1.jpg',
      '/img/products/tee-hood-2.jpg',
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Белый'],
    inStock: true,
    isNew: true,
    stockCount: 8,
    tags: ['лимитед', 'коллаб'],
  },
  {
    id: '8',
    slug: 'zipka-hood',
    name: 'Зипка «HOOD×OAKLET»',
    subtitle: 'Чёрная, вышивка',
    description:
      'Коллаборация с HOOD. Чёрная зипка с вышитым цветочным принтом на груди. Тяжёлый флис, оверсайз. Один из главных дропов сезона — осталось немного.',
    price: 5500,
    images: [
      '/img/products/zip-hood-1.jpg',
      '/img/products/zip-hood-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный'],
    inStock: true,
    isBestseller: true,
    stockCount: 6,
    tags: ['хит', 'коллаб'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getProductsByCategory(category?: CategorySlug): Product[] {
  if (!category) return PRODUCTS
  return PRODUCTS.filter((p) => p.category === category)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isBestseller || p.isNew).slice(0, 4)
}
