import { Product, Category, CategorySlug } from './types'

export const CATEGORIES: Category[] = [
  { slug: 'hoodies', name: 'Толстовки', plural: 'Толстовки' },
  { slug: 'tshirts', name: 'Футболки', plural: 'Футболки' },
  { slug: 'longsleeves', name: 'Лонгсливы', plural: 'Лонгсливы' },
  { slug: 'headwear', name: 'Головные уборы', plural: 'Головные уборы' },
  { slug: 'accessories', name: 'Аксессуары', plural: 'Аксессуары' },
]

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'hudi-samovar',
    name: 'Худи «Самовар»',
    subtitle: 'Оверсайз-силуэт',
    description:
      'Самовар — символ Тулы. Тяжёлый флис 380 г/м², оверсайз крой, вышитый логотип на груди. Сшито так, чтобы носить долго.',
    price: 4500,
    images: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Чёрный'],
    inStock: true,
    stockCount: 12,
    isNew: true,
    tags: ['хит', 'новинка'],
  },
  {
    id: '2',
    slug: 'hudi-zaseka',
    name: 'Худи «Засека»',
    subtitle: 'Военно-лесная тема',
    description:
      'Засечная черта — средневековые укрепления к югу от Тулы. Земляной зелёный цвет, плотный хлопок, принт на спине.',
    price: 4500,
    oldPrice: 5200,
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop',
    ],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Зелёный'],
    inStock: true,
    stockCount: 5,
    isBestseller: true,
    tags: ['хит'],
  },
  {
    id: '3',
    slug: 'svitshot-yasnaya-polyana',
    name: 'Свитшот «Ясная Поляна»',
    subtitle: 'Классика навсегда',
    description:
      'Ясная Поляна в 14 км от Тулы. Мягкий экрю-свитшот с минималистичным принтом. Носи как есть — правильно и красиво.',
    price: 3800,
    images: [
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop',
    ],
    category: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Экрю'],
    inStock: true,
    isNew: true,
    tags: ['новинка'],
  },
  {
    id: '4',
    slug: 'tishert-kreml',
    name: 'Тишерт «Кремль»',
    subtitle: 'Белый, 100% хлопок',
    description:
      'Тульский кремль 1520 года постройки. Плотный хлопок 220 г/м², прямой крой. Принт выполнен шелкографией.',
    price: 2200,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop',
    ],
    category: 'tshirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Белый'],
    inStock: true,
    stockCount: 20,
    tags: [],
  },
  {
    id: '5',
    slug: 'tishert-oruzheynik',
    name: 'Тишерт «Оружейник»',
    subtitle: 'Чёрный, плотный хлопок',
    description:
      'Тула — оружейная столица России с XVII века. Лаконичный принт, плотный оверсайз-крой.',
    price: 2200,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop',
    ],
    category: 'tshirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Чёрный'],
    inStock: true,
    isBestseller: true,
    tags: ['хит'],
  },
  {
    id: '6',
    slug: 'tishert-iskra',
    name: 'Тишерт «Искра»',
    subtitle: 'Ржавый, коллаборация',
    description:
      'Созданный совместно с тульским городским пространством «Искра». Ограниченный тираж, ржавый цвет, авторская графика.',
    price: 2400,
    images: [
      'https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop',
    ],
    category: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ржавый'],
    inStock: true,
    stockCount: 7,
    isNew: true,
    tags: ['новинка', 'лимитед'],
  },
  {
    id: '7',
    slug: 'tishert-levsha',
    name: 'Тишерт «Левша»',
    subtitle: 'По мотивам Лескова',
    description:
      'Левша — тульский мастер, подковавший блоху. Герой повести Лескова и символ тульского мастерства. Принт с подковой.',
    price: 2200,
    oldPrice: 2500,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop',
    ],
    category: 'tshirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Чёрный'],
    inStock: true,
    tags: [],
  },
  {
    id: '8',
    slug: 'longsleeve-zarechye',
    name: 'Лонгслив «Заречье»',
    subtitle: 'Антрацит, oversize',
    description:
      'Заречье — исторический район Тулы, где стоит оружейный завод. Хлопковый лонгслив антрацитового цвета.',
    price: 2900,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&auto=format&fit=crop',
    ],
    category: 'longsleeves',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Антрацит'],
    inStock: true,
    isBestseller: true,
    tags: ['хит'],
  },
  {
    id: '9',
    slug: 'longsleeve-kulikovo',
    name: 'Лонгслив «Куликово поле»',
    subtitle: 'Экрю, натуральный хлопок',
    description:
      'Куликовская битва 1380 года — рядом с Тулой. Экрю-лонгслив с минималистичной вышивкой. Прямой крой, на все сезоны.',
    price: 2900,
    images: [
      'https://images.unsplash.com/photo-1564584217132-2271fehi3e10?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&auto=format&fit=crop',
    ],
    category: 'longsleeves',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Экрю'],
    inStock: true,
    isNew: true,
    tags: ['новинка'],
  },
  {
    id: '10',
    slug: 'kepka-tula-1146',
    name: 'Кепка «Тула 1146»',
    subtitle: '5-panel, чёрная',
    description:
      '1146 год — год основания Тулы. Пятипанельная кепка с вышитым логотипом. Регулируемый ремешок.',
    price: 1600,
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&auto=format&fit=crop',
    ],
    category: 'headwear',
    sizes: ['ONE SIZE'],
    colors: ['Чёрный'],
    inStock: true,
    isBestseller: true,
    tags: ['хит'],
  },
  {
    id: '11',
    slug: 'shapka-tulskiy',
    name: 'Шапка «Тульский»',
    subtitle: 'Рибовяз, антрацит',
    description:
      'Плотная шапка из рибовязаного акрила. Отворот с вышитым лого. Держит форму, не катышится.',
    price: 1400,
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&auto=format&fit=crop',
    ],
    category: 'headwear',
    sizes: ['ONE SIZE'],
    colors: ['Антрацит'],
    inStock: true,
    stockCount: 4,
    tags: [],
  },
  {
    id: '12',
    slug: 'noski-pryanik',
    name: 'Носки «Пряник» (3 пары)',
    subtitle: 'Комплект с тульским принтом',
    description:
      'Тульский пряник — самый вкусный сувенир города. Три пары носков с принтом-пряником. Хлопок + нейлон.',
    price: 900,
    images: [
      'https://images.unsplash.com/photo-1553636573-b3cfe1a5dfce?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop',
    ],
    category: 'accessories',
    sizes: ['ONE SIZE'],
    colors: ['Смешанный'],
    inStock: true,
    stockCount: 30,
    isNew: true,
    tags: ['новинка'],
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
