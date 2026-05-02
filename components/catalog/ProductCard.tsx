'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { Product } from '@/lib/types'
import { formatPrice, calcDiscount } from '@/lib/utils'
import { useCart } from '@/components/providers/CartProvider'
import Badge from '@/components/ui/Badge'
import s from './ProductCard.module.css'

interface Props {
  product: Product
  priority?: boolean
}

function useTilt(intensity = 7) {
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const rx = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -intensity
    const ry = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * intensity
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(4px)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.4s ease'
    el.style.transform = ''
    setTimeout(() => { if (ref.current) ref.current.style.transition = '' }, 400)
  }

  return { ref, onMouseMove, onMouseLeave }
}

export default function ProductCard({ product, priority }: Props) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.length === 1 ? product.sizes[0] : ''
  )
  const [added, setAdded] = useState(false)
  const tilt = useTilt()

  const discount = product.oldPrice ? calcDiscount(product.price, product.oldPrice) : 0

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!selectedSize) return
    addItem(product, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const needsSizeSelect = product.sizes.length > 1

  return (
    <div
      ref={tilt.ref}
      className={s.tiltWrap}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <Link href={`/catalog/${product.slug}`} className={s.card}>
        <div className={s.imageWrap}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={`${s.image} ${s.imagePrimary}`}
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} — вид 2`}
              fill
              className={`${s.image} ${s.imageSecondary}`}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}

          <div className={s.badges}>
            {product.isNew && <Badge variant="new" />}
            {product.oldPrice && <Badge variant="sale" label={`-${discount}%`} />}
            {product.isBestseller && <Badge variant="hit" />}
            {!product.inStock && <Badge variant="out" />}
            {product.tags.includes('лимитед') && <Badge variant="limited" label="Лимитед" />}
          </div>
        </div>

        <div className={s.body}>
          <div className={s.name}>{product.name}</div>
          {product.subtitle && <div className={s.subtitle}>{product.subtitle}</div>}

          <div className={s.priceRow}>
            <span className={s.price}>{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <>
                <span className={s.oldPrice}>{formatPrice(product.oldPrice)}</span>
                <span className={s.discount}>−{discount}%</span>
              </>
            )}
          </div>

          {product.stockCount && product.stockCount <= 5 && product.inStock && (
            <div className={s.stockWarning}>Осталось {product.stockCount} шт.</div>
          )}

          <div className={s.cta} onClick={(e) => e.preventDefault()}>
            {product.inStock ? (
              <>
                {needsSizeSelect && !added && (
                  <select
                    className={s.sizeSelect}
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    aria-label="Выбрать размер"
                    onClick={(e) => e.preventDefault()}
                  >
                    <option value="">Выбрать размер</option>
                    {product.sizes.map((sz) => (
                      <option key={sz} value={sz}>{sz}</option>
                    ))}
                  </select>
                )}
                <button
                  className={`${s.addBtn} ${added ? s.addBtnDone : ''}`}
                  onClick={handleAdd}
                  disabled={needsSizeSelect && !selectedSize}
                  aria-label={added ? 'Добавлено в корзину' : `Добавить ${product.name} в корзину`}
                >
                  {added ? '✓ Добавлено' : 'В корзину'}
                </button>
              </>
            ) : (
              <div className={s.outOfStock}>Нет в наличии</div>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
