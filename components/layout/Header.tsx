'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCart } from '@/components/providers/CartProvider'
import s from './Header.module.css'

const NAV = [
  { href: '/catalog', label: 'Каталог' },
  { href: '/about', label: 'О бренде' },
]

function IconCart({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  )
}

function IconMenu({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

export default function Header() {
  const pathname = usePathname()
  const { totalItems, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [prevCount, setPrevCount] = useState(totalItems)
  const [bouncing, setBouncing] = useState(false)

  useEffect(() => {
    if (totalItems > prevCount) {
      setBouncing(true)
      setTimeout(() => setBouncing(false), 350)
    }
    setPrevCount(totalItems)
  }, [totalItems])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className={s.header}>
      <div className={`container ${s.inner}`}>
        <Link href="/" className={s.logo}>
          <span className={s.logoMark}>Oaklet</span>
          <span className={s.logoTag}>Тула</span>
        </Link>

        <nav className={s.nav} aria-label="Основная навигация">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${s.navLink} ${pathname.startsWith(href) ? s.navLinkActive : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className={s.actions}>
          <button
            className={`${s.iconBtn} ${s.cartBtn}`}
            onClick={openCart}
            aria-label={`Корзина, ${totalItems} товаров`}
          >
            <IconCart />
            {totalItems > 0 && (
              <span className={`${s.cartCount} ${bouncing ? s.cartCountBounce : ''}`}>
                {totalItems}
              </span>
            )}
          </button>

          <button
            className={`${s.iconBtn} ${s.burger}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Открыть меню"
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={s.mobileNav}>
          <div className={s.mobileNavOverlay} onClick={() => setMobileOpen(false)} />
          <div className={s.mobileNavDrawer}>
            <button
              className={`${s.iconBtn} ${s.mobileNavClose}`}
              onClick={() => setMobileOpen(false)}
              aria-label="Закрыть меню"
            >
              <IconClose />
            </button>
            <nav className={s.mobileNavLinks}>
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={s.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
