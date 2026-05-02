# Каталог-магазин — Claude Code Project

## Проект
Сайт-каталог товаров / интернет-магазин.

> ⚠️ **Заполни перед стартом:**
> - `SHOP_NAME` — название магазина
> - `NICHE` — что продаём (например: электроника, одежда, хенд-мейд)
> - `TARGET_AUDIENCE` — кто покупатель
> - `PRICE_RANGE` — ценовой сегмент (эконом / средний / премиум)

**Стек**: Next.js 14+ (App Router) · TypeScript · CSS Modules · CSS Custom Properties  
**Язык контента**: Русский  
**E-commerce функционал**: каталог, фильтры, карточка товара, корзина, форма заказа

---

## Агенты и зоны ответственности

### 🎨 Brand Guardian
**Когда вызывать**: Цвета, шрифты, голос бренда, CSS-переменные, логотип-гайдлайны.  
**Первый вызов** — до любого кода. Передай ему: название, нишу, ценовой сегмент, аудиторию.

### 📐 UX Architect
**Когда вызывать**: Структура Next.js, роутинг каталога, design system, layout сетки для товаров, фильтры, пагинация, мобильная навигация.  
**Вызывать сразу после** Brand Guardian.

### 🎨 UI Designer
**Когда вызывать**: Карточка товара, галерея фото, бейджи (новинка/скидка/хит), кнопка "В корзину", фильтр-панель, сортировка, breadcrumbs, корзина, форма заказа.

### ✨ Whimsy Injector
**Когда вызывать**: Анимация добавления в корзину, empty state каталога, loading skeleton карточек, hover на товар, 404 страница, micro-copy ("осталось 3 штуки!", "уже смотрят 5 человек").

### 🔬 UX Researcher
**Когда вызывать**: Как расположить фильтры (слева/сверху), сколько товаров на странице, какие поля в карточке товара важнее, нужна ли wishlist, как устроить checkout.

### 📷 Image Prompt Engineer
**Когда вызывать**: Hero-баннер, lifestyle-фото товаров, фоны для категорий, пустые состояния каталога.

### 🌈 Inclusive Visuals Specialist
**Когда вызывать**: QA любых изображений с людьми — модели, lifestyle-съёмки, баннеры.

---

## Порядок работы

### Первый запуск
```
1. Заполни переменные проекта выше (SHOP_NAME, NICHE и т.д.)
2. Brand Guardian → палитра и шрифты под нишу
3. UX Architect → структура проекта и design system
4. UI Designer → базовые компоненты каталога
5. Разработка страниц
```

### Новая фича (например, фильтры)
```
1. UX Researcher → как пользователи ожидают фильтровать в этой нише
2. UX Architect → техническая структура URL-параметров и layout
3. UI Designer → компонент фильтра
4. Whimsy Injector → анимация применения фильтра, empty state
```

---

## Структура проекта

```
catalog-shop/
├── .claude/agents/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Главная / витрина
│   ├── globals.css
│   ├── catalog/
│   │   ├── page.tsx                # Каталог (список товаров)
│   │   └── [slug]/page.tsx         # Карточка товара
│   ├── category/
│   │   └── [category]/page.tsx     # Категория товаров
│   ├── cart/page.tsx               # Корзина
│   ├── checkout/page.tsx           # Оформление заказа
│   ├── search/page.tsx             # Поиск
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Лого + поиск + корзина (счётчик)
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx               # Новинка / Скидка / Хит
│   │   ├── ThemeToggle.tsx
│   │   └── Skeleton.tsx            # Loading placeholder
│   ├── catalog/
│   │   ├── ProductCard.tsx         # Карточка товара в сетке
│   │   ├── ProductGrid.tsx         # Сетка товаров
│   │   ├── ProductFilters.tsx      # Панель фильтров
│   │   ├── ProductSort.tsx         # Сортировка
│   │   ├── ProductGallery.tsx      # Галерея на странице товара
│   │   └── Pagination.tsx
│   ├── cart/
│   │   ├── CartDrawer.tsx          # Выдвижная корзина
│   │   ├── CartItem.tsx
│   │   └── CartSummary.tsx
│   └── providers/
│       ├── ThemeProvider.tsx
│       └── CartProvider.tsx        # Context для корзины
├── lib/
│   ├── types.ts                    # Product, Category, CartItem и т.д.
│   └── utils.ts
└── CLAUDE.md
```

---

## Типы данных (заполни под свою нишу)

```typescript
// lib/types.ts — адаптируй поля под товары
interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  oldPrice?: number          // для отображения скидки
  images: string[]
  category: string
  tags: string[]
  inStock: boolean
  stockCount?: number
  isNew?: boolean
  isBestseller?: boolean
  // Добавь специфичные для ниши поля:
  // size?: string[]         — для одежды
  // color?: string[]        — для одежды/электроники
  // brand?: string          — для электроники
  // material?: string       — для мебели/хенд-мейд
}

interface Category {
  id: string
  slug: string
  name: string
  image: string
  productCount: number
}

interface CartItem {
  product: Product
  quantity: number
  variant?: Record<string, string>  // size, color и т.д.
}
```

---

## E-commerce специфичные правила

### Производительность
- Список товаров: Server Component + `Suspense` с `Skeleton`
- Изображения: `next/image` с `priority` для первых 4 карточек
- Фильтры в URL-параметрах (`?category=shoes&sort=price`) — для SEO и шаринга

### UX обязательно
- Корзина: видна всегда (sticky header со счётчиком)
- На мобиле: фильтры в bottom sheet, не в сайдбаре
- Карточка товара: кнопка "В корзину" без перехода на страницу товара
- Пагинация ИЛИ infinite scroll — выбрать одно, не мешать

### Код
- App Router only, TypeScript везде
- CartProvider через React Context + localStorage
- Фильтры через `useSearchParams` / `searchParams` (server)
- Никогда не хардкодь цвета — только CSS-переменные

---

## Быстрый старт

```bash
npx create-next-app@latest . --typescript --app --src-dir=false --import-alias="@/*"
```

Затем:
```
"Brand Guardian, я делаю интернет-магазин [НИША] под названием [НАЗВАНИЕ].
Аудитория: [КТО]. Ценовой сегмент: [КАКОЙ]. Определи бренд."
```
