'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCart } from '@/components/providers/CartProvider'
import { formatPrice, pluralize } from '@/lib/utils'
import CartItem from './CartItem'
import s from './CartDrawer.module.css'

type CartItems = ReturnType<typeof useCart>['items']

function buildOrderText(items: CartItems, total: number): string {
  const lines = items.map(
    (i) => `• ${i.product.name} — ${i.size} — ${i.quantity} шт. — ${formatPrice(i.product.price * i.quantity)}`
  )
  lines.push(`\nИтого: ${formatPrice(total)}`)
  return 'Привет! Хочу оформить заказ:\n\n' + lines.join('\n')
}

function buildOrderMessage(items: CartItems, total: number): string {
  return encodeURIComponent(buildOrderText(items, total))
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

function IconVK() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.54h-1.59c-.6 0-.79-.48-1.87-1.58-1-.93-1.44-1.05-1.69-1.05-.34 0-.44.1-.44.58v1.44c0 .41-.13.66-1.22.66-1.8 0-3.8-1.09-5.2-3.12C4.3 9.84 3.88 7.8 3.88 7.37c0-.25.1-.49.58-.49H6.05c.44 0 .6.2.77.66.84 2.43 2.25 4.56 2.84 4.56.22 0 .32-.1.32-.65V9.41c-.07-1.17-.69-1.27-.69-1.68 0-.2.17-.41.44-.41h2.5c.37 0 .5.2.5.63v3.39c0 .37.17.5.27.5.22 0 .41-.13.82-.54 1.27-1.42 2.17-3.61 2.17-3.61.12-.25.32-.49.76-.49h1.59c.48 0 .59.25.48.6-.2.93-2.17 3.71-2.17 3.71-.17.27-.22.39 0 .69.17.22.71.69 1.07 1.1.66.76 1.17 1.39 1.31 1.83.12.44-.1.66-.58.66z"/>
    </svg>
  )
}

function IconTG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

function IconCopy() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
    </svg>
  )
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalItems, totalPrice } = useCart()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const msg = buildOrderMessage(items, totalPrice)
  const vkUrl = `https://vk.com/write-oaklet_store?message=${msg}`
  const tgUrl = `https://t.me/mchbl_db?text=${msg}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildOrderText(items, totalPrice))
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {}
  }

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

              <div className={s.orderSteps}>
                <div className={s.orderStep}>
                  <span className={s.stepNum}>1</span>
                  <span className={s.stepText}>Нажмите кнопку ниже — откроется чат с готовым заказом</span>
                </div>
                <div className={s.orderStep}>
                  <span className={s.stepNum}>2</span>
                  <span className={s.stepText}>Подтвердите заказ и уточните детали доставки</span>
                </div>
                <div className={s.orderStep}>
                  <span className={s.stepNum}>3</span>
                  <span className={s.stepText}>Оплата переводом или СБП — по договорённости</span>
                </div>
              </div>

              <div className={s.orderBtns}>
                <a
                  href={vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.btnVK}
                  aria-label="Оформить через ВКонтакте"
                >
                  <IconVK />
                  ВКонтакте
                </a>
                <a
                  href={tgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.btnTG}
                  aria-label="Оформить через Telegram"
                >
                  <IconTG />
                  Telegram
                </a>
              </div>

              <button className={`${s.copyBtn} ${copied ? s.copyBtnDone : ''}`} onClick={handleCopy}>
                {copied ? '✓ Скопировано' : <><IconCopy /> Скопировать текст заказа</>}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
