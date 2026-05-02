import { Suspense } from 'react'
import { Metadata } from 'next'
import { PRODUCTS, CATEGORIES } from '@/lib/data'
import { CategorySlug } from '@/lib/types'
import ProductCard from '@/components/catalog/ProductCard'
import { CategoryBar, SortRow, SidebarFilters } from '@/components/catalog/ProductFilters'
import { ProductGridSkeleton } from '@/components/ui/Skeleton'
import s from './page.module.css'

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Вся одежда OAKLET — толстовки, футболки, лонгсливы, головные уборы.',
}

interface PageProps {
  searchParams: Promise<{
    category?: string
    size?: string | string[]
    sort?: string
  }>
}

function getFilteredProducts(params: Awaited<PageProps['searchParams']>) {
  let products = [...PRODUCTS]

  if (params.category) {
    const validCat = CATEGORIES.find((c) => c.slug === params.category)
    if (validCat) {
      products = products.filter((p) => p.category === params.category as CategorySlug)
    }
  }

  const sizes = Array.isArray(params.size)
    ? params.size
    : params.size
    ? [params.size]
    : []

  if (sizes.length > 0) {
    products = products.filter((p) => sizes.some((sz) => p.sizes.includes(sz)))
  }

  const sort = params.sort ?? 'popular'
  if (sort === 'new') {
    products = products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
  } else if (sort === 'price_asc') {
    products = products.sort((a, b) => a.price - b.price)
  } else if (sort === 'price_desc') {
    products = products.sort((a, b) => b.price - a.price)
  } else {
    products = products.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0))
  }

  return products
}

export default async function CatalogPage({ searchParams }: PageProps) {
  const params = await searchParams
  const products = getFilteredProducts(params)

  return (
    <div>
      <div className="container">
        <div className={s.pageHead}>
          <div className={s.eyebrow}>Каталог</div>
          <h1 className={s.title}>Одежда</h1>
        </div>

        <Suspense>
          <CategoryBar />
          <SortRow totalCount={products.length} />
        </Suspense>

        <div className={s.layout}>
          <Suspense>
            <SidebarFilters />
          </Suspense>

          <div className={s.main}>
            <Suspense fallback={<div className={s.grid}><ProductGridSkeleton count={8} /></div>}>
              {products.length === 0 ? (
                <div className={s.empty}>
                  <div className={s.emptyTitle}>Ничего не нашлось</div>
                  <p className={s.emptyText}>
                    Попробуйте изменить фильтры или напишите нам — поможем найти.
                  </p>
                </div>
              ) : (
                <div className={s.grid}>
                  {products.map((product, i) => (
                    <div
                      key={product.id}
                      className={s.cardWrapper}
                      style={{ '--stagger': `${Math.min(i, 7) * 55}ms` } as React.CSSProperties}
                    >
                      <ProductCard product={product} priority={i < 4} />
                    </div>
                  ))}
                </div>
              )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
