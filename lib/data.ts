import { Product, Category, CategorySlug } from './types'

export const CATEGORIES: Category[] = [
  { slug: 'hoodies',   name: 'Худи и свитшоты', plural: 'Худи и свитшоты' },
  { slug: 'shirts',    name: 'Рубашки',         plural: 'Рубашки' },
  { slug: 'tshirts',   name: 'Футболки',        plural: 'Футболки' },
  { slug: 'longsleeves', name: 'Лонгсливы',     plural: 'Лонгсливы' },
  { slug: 'pants',     name: 'Брюки',           plural: 'Брюки' },
  { slug: 'headwear',  name: 'Головные уборы',  plural: 'Головные уборы' },
  { slug: 'accessories', name: 'Аксессуары',    plural: 'Аксессуары' },
  { slug: 'lingerie',  name: 'Нижнее бельё',    plural: 'Нижнее бельё' },
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
  // --- новые товары 9-18 ---
  {
    id: '9',
    slug: 'tee-oak-white',
    name: 'Тишерт белый «Дуб»',
    subtitle: 'Oversize, 100% хлопок',
    description:
      'Чистый белый оверсайз с фирменным патчем OAKLET — дуб в рамке на груди. Тяжёлый хлопок, прямой крой. Базовая вещь, которая читается как заявление.',
    price: 2200,
    images: [
      '/img/products/tee-oak-white-1.jpg',
      '/img/products/tee-oak-white-2.jpg',
    ],
    category: 'tshirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Белый'],
    inStock: true,
    tags: [],
  },
  {
    id: '10',
    slug: 'sweat-black-oak',
    name: 'Свитшот чёрный «Дуб»',
    subtitle: 'Oversize, вышитый патч',
    description:
      'Чёрный свитшот с вышитым патчем OAKLET на груди. Плотный хлопок, оверсайз крой, рибана на манжетах и поясе. Классика бренда — без лишнего.',
    price: 3800,
    images: [
      '/img/products/sweat-black-1.jpg',
      '/img/products/sweat-black-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный'],
    inStock: true,
    isBestseller: true,
    tags: ['хит'],
  },
  {
    id: '11',
    slug: 'hoodie-manga-black',
    name: 'Худи «Манга» (чёрное)',
    subtitle: 'HOOD×OAKLET, аниме-панели',
    description:
      'Совместный дроп с HOOD. Чёрный пуловер с большим принтом на спине — комикс-панели в стиле манги. Спереди — скриптовое лого коллаборации. Оверсайз, тяжёлый флис.',
    price: 5500,
    images: [
      '/img/products/hoodie-manga-1.jpg',
      '/img/products/hoodie-manga-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный'],
    inStock: true,
    isNew: true,
    stockCount: 10,
    tags: ['коллаб', 'лимитед'],
  },
  {
    id: '12',
    slug: 'hoodie-anime-brown',
    name: 'Худи «Аниме» (шоколадное)',
    subtitle: 'HOOD×OAKLET, цветной принт',
    description:
      'Совместный дроп с HOOD. Тёмно-коричневый пуловер с цветными аниме-панелями на спине. Персонажи, кадры, экспрессия — всё это на тяжёлом флисовом худи. Ограниченный тираж.',
    price: 5500,
    images: [
      '/img/products/hoodie-anime-1.jpg',
      '/img/products/hoodie-anime-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Коричневый'],
    inStock: true,
    isNew: true,
    stockCount: 10,
    tags: ['коллаб', 'лимитед'],
  },
  {
    id: '13',
    slug: 'shirt-beige',
    name: 'Рубашка бежевая',
    subtitle: 'Oversize, хлопок',
    description:
      'Мягкий бежевый хлопок, оверсайз крой, укороченный рукав. Лёгкая — носится с чем угодно. Ничего лишнего, только форма.',
    price: 3200,
    images: [
      '/img/products/shirt-beige-1.jpg',
      '/img/products/shirt-beige-2.jpg',
    ],
    category: 'shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Бежевый'],
    inStock: true,
    isNew: true,
    tags: ['новинка'],
  },
  {
    id: '14',
    slug: 'tee-oaklet-basic',
    name: 'Тишерт «OAKLET» базовый',
    subtitle: 'Белый, лого на груди',
    description:
      'Белый оверсайз с лаконичным лого OAKLET на груди. Плотный хлопок, прямой силуэт — вещь, которая не требует объяснений. Шоурум-версия.',
    price: 2200,
    images: [
      '/img/products/tee-basic-1.jpg',
      '/img/products/tee-basic-2.jpg',
    ],
    category: 'tshirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Белый'],
    inStock: true,
    tags: [],
  },
  {
    id: '15',
    slug: 'hoodie-gray-hood',
    name: 'Худи серое',
    subtitle: 'Oversize, мягкий хлопок',
    description:
      'Светло-серое худи с капюшоном из мягкого хлопка. Оверсайз, минималистичный крой без принтов. Для тех, кто носит просто и точно.',
    price: 4200,
    images: [
      '/img/products/hoodie-gray-1.jpg',
      '/img/products/hoodie-gray-2.jpg',
    ],
    category: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Серый'],
    inStock: true,
    tags: [],
  },
  {
    id: '16',
    slug: 'pants-velvet',
    name: 'Брюки вельветовые',
    subtitle: 'OAKLET стрип, широкий крой',
    description:
      'Серые вельветовые брюки широкого кроя с фирменной белой полосой OAKLET по боковому шву. Мягкий корд, эластичный пояс. Можно носить с любой вещью из коллекции.',
    price: 4800,
    images: [
      '/img/products/pants-velvet-1.jpg',
      '/img/products/pants-velvet-2.jpg',
    ],
    category: 'pants',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Серый'],
    inStock: true,
    isNew: true,
    tags: ['новинка'],
  },
  {
    id: '17',
    slug: 'lingerie-bra-white',
    name: 'Топ кружевной белый',
    subtitle: 'Белое кружево, тонкие лямки',
    description:
      'Деликатный топ из белого кружева на тонких лямках. Мягкая подкладка, регулируемые застёжки. Минималистичная посадка — носится под пиджак или как самостоятельная вещь.',
    price: 2800,
    images: [
      '/img/products/lingerie-bra-white-1.jpg',
      '/img/products/lingerie-bra-white-2.jpg',
    ],
    category: 'lingerie',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Белый'],
    inStock: true,
    tags: [],
  },
  {
    id: '18',
    slug: 'lingerie-bra-black',
    name: 'Топ кружевной чёрный',
    subtitle: 'Чёрное кружево, тонкие лямки',
    description:
      'Чёрный кружевной топ с мягкими лямками и деликатной отделкой. Прозрачная сетка, лаконичная застёжка. Носится как самостоятельно, так и в комплекте.',
    price: 2800,
    images: [
      '/img/products/lingerie-bra-black-1.jpg',
      '/img/products/lingerie-bra-black-2.jpg',
    ],
    category: 'lingerie',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Чёрный'],
    inStock: true,
    tags: [],
  },
  {
    id: '19',
    slug: 'lingerie-set-white',
    name: 'Комплект белый',
    subtitle: 'Белое кружево, бра + трусы',
    description:
      'Комплект из белого кружевного бра и трусиков. Тонкая сетка, прозрачное кружево, мягкая фурнитура. Взгляд на бельё как на часть образа — не то, что прячут.',
    price: 3500,
    images: [
      '/img/products/lingerie-set-white-1.jpg',
      '/img/products/lingerie-set-white-2.jpg',
    ],
    category: 'lingerie',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Белый'],
    inStock: true,
    tags: [],
  },
  {
    id: '20',
    slug: 'lingerie-set-black',
    name: 'Комплект чёрный',
    subtitle: 'Чёрное кружево, бра + трусы',
    description:
      'Комплект из чёрного кружевного бра и трусиков. Сетка, кружево, аккуратная фурнитура. Классика, которая остаётся.',
    price: 3500,
    images: [
      '/img/products/lingerie-set-black-1.jpg',
      '/img/products/lingerie-set-black-2.jpg',
    ],
    category: 'lingerie',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Чёрный'],
    inStock: true,
    tags: [],
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
