'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState, use, useEffect } from 'react'
import { getProductBySlug, PRODUCTS } from '@/lib/data'
import { formatPrice, calcDiscount } from '@/lib/utils'
import { useCart } from '@/components/providers/CartProvider'
import Badge from '@/components/ui/Badge'
import ProductCard from '@/components/catalog/ProductCard'
import s from './page.module.css'

interface Props {
  params: Promise<{ slug: string }>
}

function IconChevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {dir === 'left' ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
    </svg>
  )
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

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setActiveImg((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setActiveImg((i) => Math.min(product.images.length - 1, i + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [product.images.length])

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
              {product.images.map((src, i) => (
                <div
                  key={src}
                  className={`${s.imageSlide} ${i === activeImg ? s.imageSlideActive : ''}`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} — фото ${i + 1}`}
                    fill
                    className={s.image}
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}

              {product.images.length > 1 && (
                <>
                  <button
                    className={`${s.galleryArrow} ${s.galleryArrowPrev}`}
                    onClick={() => setActiveImg((i) => Math.max(0, i - 1))}
                    disabled={activeImg === 0}
                    aria-label="Предыдущее фото"
                  >
                    <IconChevron dir="left" />
                  </button>
                  <button
                    className={`${s.galleryArrow} ${s.galleryArrowNext}`}
                    onClick={() => setActiveImg((i) => Math.min(product.images.length - 1, i + 1))}
                    disabled={activeImg === product.images.length - 1}
                    aria-label="Следующее фото"
                  >
                    <IconChevron dir="right" />
                  </button>

                  <div className={s.galleryDots}>
                    {product.images.map((_, i) => (
                      <button
                        key={i}
                        className={`${s.galleryDot} ${i === activeImg ? s.galleryDotActive : ''}`}
                        onClick={() => setActiveImg(i)}
                        aria-label={`Фото ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
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

            {product.inStock ? (
              <div className={`${s.stock} ${product.stockCount && product.stockCount <= 5 ? s.stockLow : s.stockIn}`}>
                {product.stockCount && product.stockCount <= 5
                  ? `Осталось ${product.stockCount} шт. — успейте заказать`
                  : 'Есть в наличии'}
              </div>
            ) : (
              <div className={`${s.stock} ${s.stockOut}`}>Нет в наличии</div>
            )}

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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.54h-1.59c-.6 0-.79-.48-1.87-1.58-1-.93-1.44-1.05-1.69-1.05-.34 0-.44.1-.44.58v1.44c0 .41-.13.66-1.22.66-1.8 0-3.8-1.09-5.2-3.12C4.3 9.84 3.88 7.8 3.88 7.37c0-.25.1-.49.58-.49H6.05c.44 0 .6.2.77.66.84 2.43 2.25 4.56 2.84 4.56.22 0 .32-.1.32-.65V9.41c-.07-1.17-.69-1.27-.69-1.68 0-.2.17-.41.44-.41h2.5c.37 0 .5.2.5.63v3.39c0 .37.17.5.27.5.22 0 .41-.13.82-.54 1.27-1.42 2.17-3.61 2.17-3.61.12-.25.32-.49.76-.49h1.59c.48 0 .59.25.48.6-.2.93-2.17 3.71-2.17 3.71-.17.27-.22.39 0 .69.17.22.71.69 1.07 1.1.66.76 1.17 1.39 1.31 1.83.12.44-.1.66-.58.66z"/></svg>
                ВКонтакте
              </a>
              <a
                href={`https://t.me/oaklet_store?text=${orderMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnTG}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
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

        {related.length > 0 && (
          <section className={s.related}>
            <h2 className={s.relatedTitle}>Похожие товары</h2>
            <div className={s.relatedGrid}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
