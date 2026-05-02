'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useCart } from '@/components/providers/CartProvider'
import { formatPrice, pluralize } from '@/lib/utils'
import CartItem from './CartItem'
import s from './CartDrawer.module.css'

function buildOrderMessage(items: ReturnType<typeof useCart>['items'], total: number): string {
  const lines = items.map(
    (i) => `• ${i.product.name} — ${i.size} — ${i.quantity} шт. — ${formatPrice(i.product.price * i.quantity)}`
  )
  lines.push(`\nИтого: ${formatPrice(total)}`)
  return encodeURIComponent('Привет! Хочу оформить заказ:\n\n' + lines.join('\n'))
}

function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function IconBag({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  )
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalItems, totalPrice } = useCart()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const msg = buildOrderMessage(items, totalPrice)
  const vkUrl = `https://vk.com/im?sel=-226804234&message=${msg}`
  const tgUrl = `https://t.me/oaklet_store?text=${msg}`

  return (
    <>
      <div className={s.overlay} onClick={closeCart} aria-hidden="true" />
      <div
        className={s.drawer}
        role="dialog"
        aria-modal="true"
        aria-label="Корзина"
      >
        <div className={s.head}>
          <div>
            <span className={s.headTitle}>Корзина</span>
            {totalItems > 0 && (
              <span className={s.headCount}>
                {pluralize(totalItems, 'товар', 'товара', 'товаров')}
              </span>
            )}
          </div>
          <button className={s.closeBtn} onClick={closeCart} aria-label="Закрыть корзину">
            <IconClose />
          </button>
        </div>

        {items.length === 0 ? (
          <div className={s.empty}>
            <div className={s.emptyIcon}><IconBag /></div>
            <p className={s.emptyText}>Корзина пока пуста — самое время это исправить</p>
            <Link href="/catalog" className={s.emptyLink} onClick={closeCart}>
              Смотреть каталог →
            </Link>
          </div>
        ) : (
          <>
            <div className={s.items}>
              {items.map((item) => (
                <CartItem key={`${item.product.id}:${item.size}`} item={item} />
              ))}
            </div>

            <div className={s.foot}>
              <div className={s.totalRow}>
                <span className={s.totalLabel}>Итого</span>
                <span className={s.totalPrice}>{formatPrice(totalPrice)}</span>
              </div>

              <div className={s.orderNote}>
                Мы продаём через ВКонтакте и Telegram. Нажмите кнопку — мы пришлём все детали по оплате и доставке.
              </div>

              <div className={s.orderBtns}>
                <a
                  href={vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.btnVK}
                  aria-label="Оформить через ВКонтакте"
                >
                  ВКонтакте
                </a>
                <a
                  href={tgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.btnTG}
                  aria-label="Оформить через Telegram"
                >
                  Telegram
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
