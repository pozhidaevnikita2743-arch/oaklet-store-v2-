'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState, use } from 'react'
import { getProductBySlug, PRODUCTS } from '@/lib/data'
import { formatPrice, calcDiscount } from '@/lib/utils'
import { useCart } from '@/components/providers/CartProvider'
import Badge from '@/components/ui/Badge'
import s from './page.module.css'

interface Props {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: Props) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const { addItem } = useCart()
  const [activeImg, setActiveImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.length === 1 ? product.sizes[0] : ''
  )
  const [added, setAdded] = useState(false)

  const discount = product.oldPrice ? calcDiscount(product.price, product.oldPrice) : 0

  const handleAdd = () => {
    if (!selectedSize) return
    addItem(product, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const orderMsg = encodeURIComponent(
    `Привет! Хочу заказать: ${product.name}${selectedSize ? `, размер ${selectedSize}` : ''}. Цена: ${formatPrice(product.price)}`
  )

  return (
    <div className={s.wrap}>
      <div className="container">
        <nav className={s.breadcrumbs} aria-label="Навигация">
          <Link href="/" className={s.bcLink}>Главная</Link>
          <span className={s.bcSep}>/</span>
          <Link href="/catalog" className={s.bcLink}>Каталог</Link>
          <span className={s.bcSep}>/</span>
          <span>{product.name}</span>
        </nav>

        <div className={s.layout}>
          {/* Gallery */}
          <div className={s.gallery}>
            <div className={s.mainImage}>
              <Image
                src={product.images[activeImg]}
                alt={product.name}
                fill
                className={s.image}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            {product.images.length > 1 && (
              <div className={s.thumbs}>
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    className={`${s.thumb} ${i === activeImg ? s.thumbActive : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Фото ${i + 1}`}
                  >
                    <Image src={src} alt="" fill style={{ objectFit: 'cover' }} sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className={s.info}>
            <div className={s.badges}>
              {product.isNew && <Badge variant="new" />}
              {product.oldPrice && <Badge variant="sale" label={`-${discount}%`} />}
              {product.isBestseller && <Badge variant="hit" />}
              {!product.inStock && <Badge variant="out" />}
            </div>

            <h1 className={s.name}>{product.name}</h1>
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

            {/* Size */}
            <div className={s.sizeLabel}>Размер</div>
            <div className={s.sizes}>
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  className={`${s.sizeBtn} ${selectedSize === sz ? s.sizeBtnActive : ''}`}
                  onClick={() => setSelectedSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* Stock */}
            {product.inStock ? (
              <div className={`${s.stock} ${product.stockCount && product.stockCount <= 5 ? s.stockLow : s.stockIn}`}>
                {product.stockCount && product.stockCount <= 5
                  ? `Осталось ${product.stockCount} шт. — успейте заказать`
                  : 'Есть в наличии'}
              </div>
            ) : (
              <div className={`${s.stock} ${s.stockOut}`}>Нет в наличии</div>
            )}

            {/* Add to cart */}
            {product.inStock && (
              <button
                className={`${s.addBtn} ${added ? s.addBtnDone : ''}`}
                onClick={handleAdd}
                disabled={!selectedSize}
              >
                {!selectedSize
                  ? 'Выберите размер'
                  : added
                  ? '✓ Добавлено в корзину'
                  : 'Добавить в корзину'}
              </button>
            )}

            <div className={s.orText}>или купить напрямую</div>

            <div className={s.socialBtns}>
              <a
                href={`https://vk.ru/oaklet_store?message=${orderMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnVK}
              >
                ВКонтакте
              </a>
              <a
                href={`https://t.me/oaklet_store?text=${orderMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnTG}
              >
                Telegram
              </a>
            </div>

            <div className={s.divider} />

            <div className={s.descTitle}>Описание</div>
            <p className={s.desc}>{product.description}</p>

            {product.tags.length > 0 && (
              <div className={s.tags}>
                {product.tags.map((tag) => (
                  <span key={tag} className={s.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
