'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { CATEGORIES } from '@/lib/data'
import s from './ProductFilters.module.css'

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'ONE SIZE']

interface Props {
  totalCount: number
}

export function CategoryBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const active = searchParams.get('category') ?? ''

  const setCategory = useCallback(
    (cat: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (cat) params.set('category', cat)
      else params.delete('category')
      params.delete('page')
      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams]
  )

  return (
    <div className={s.categoryBar}>
      <button
        className={`${s.categoryPill} ${active === '' ? s.categoryPillActive : ''}`}
        onClick={() => setCategory('')}
      >
        Все
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.slug}
          className={`${s.categoryPill} ${active === cat.slug ? s.categoryPillActive : ''}`}
          onClick={() => setCategory(cat.slug)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}

export function SortRow({ totalCount }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sort = searchParams.get('sort') ?? 'popular'

  const setSort = (val: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', val)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className={s.sortRow}>
      <span className={s.resultsCount}>
        {totalCount === 0
          ? 'Ничего не нашлось'
          : `Показано ${totalCount} товаров`}
      </span>
      <select
        className={s.sortSelect}
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        aria-label="Сортировка"
      >
        <option value="popular">По популярности</option>
        <option value="new">Сначала новинки</option>
        <option value="price_asc">Цена: по возрастанию</option>
        <option value="price_desc">Цена: по убыванию</option>
      </select>
    </div>
  )
}

export function SidebarFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const toggleSize = (sz: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const current = params.getAll('size')
    if (current.includes(sz)) {
      params.delete('size')
      current.filter((s) => s !== sz).forEach((s) => params.append('size', s))
    } else {
      params.append('size', sz)
    }
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`)
  }

  const selectedSizes = searchParams.getAll('size')

  const resetAll = () => {
    const params = new URLSearchParams()
    const category = searchParams.get('category')
    if (category) params.set('category', category)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <aside className={s.sidebar} aria-label="Фильтры">
      <div className={s.title}>Фильтры</div>

      <div className={s.group}>
        <div className={s.groupTitle}>Размер</div>
        <div className={s.options}>
          {SIZES.map((sz) => (
            <label key={sz} className={s.option}>
              <input
                type="checkbox"
                className={s.optionInput}
                checked={selectedSizes.includes(sz)}
                onChange={() => toggleSize(sz)}
              />
              <span className={s.optionLabel}>{sz}</span>
            </label>
          ))}
        </div>
      </div>

      {(selectedSizes.length > 0) && (
        <button className={s.resetBtn} onClick={resetAll}>
          Сбросить фильтры
        </button>
      )}
    </aside>
  )
}
