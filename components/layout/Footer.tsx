import Link from 'next/link'
import s from './Footer.module.css'

function IconVK({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.3h-1.54c-.58 0-.76-.46-1.81-1.52-.91-.88-1.31-.99-1.54-.99-.31 0-.4.09-.4.52v1.39c0 .37-.12.59-1.11.59-1.64 0-3.45-.99-4.72-2.83C5.5 10.19 5.09 8.55 5.09 8.2c0-.23.09-.44.52-.44h1.54c.38 0 .53.17.68.59.75 2.16 2 4.07 2.52 4.07.19 0 .28-.09.28-.58V9.82c-.06-1.06-.62-1.15-.62-1.53 0-.18.15-.37.38-.37h2.42c.32 0 .43.17.43.55v2.97c0 .32.14.43.23.43.19 0 .35-.11.7-.46 1.08-1.21 1.85-3.07 1.85-3.07.1-.23.31-.44.69-.44h1.54c.46 0 .56.23.46.55-.19.88-2.04 3.5-2.04 3.5-.16.26-.22.38 0 .67.16.22.68.67 1.02 1.07.64.73 1.13 1.34 1.26 1.76.11.41-.1.62-.52.62z"/>
    </svg>
  )
}

function IconTG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.69 7.97c-.12.56-.46.7-.93.43l-2.59-1.91-1.25 1.2c-.14.14-.25.25-.51.25l.18-2.59 4.67-4.22c.2-.18-.05-.28-.31-.1L7.23 14.49 4.68 13.7c-.55-.17-.56-.55.12-.81l8.98-3.46c.46-.17.86.1.71.81l.15-.54z"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <div className={s.brand}>
            <div className={s.brandName}>Oaklet</div>
            <p className={s.brandDesc}>
              Тульский бренд одежды. Вдохновлённый историей города. За свободу и творчество.
            </p>
          </div>

          <div className={s.col}>
            <div className={s.colTitle}>Каталог</div>
            <div className={s.colLinks}>
              <Link href="/catalog?category=hoodies" className={s.colLink}>Толстовки</Link>
              <Link href="/catalog?category=tshirts" className={s.colLink}>Футболки</Link>
              <Link href="/catalog?category=longsleeves" className={s.colLink}>Лонгсливы</Link>
              <Link href="/catalog?category=headwear" className={s.colLink}>Головные уборы</Link>
              <Link href="/catalog?category=accessories" className={s.colLink}>Аксессуары</Link>
            </div>
          </div>

          <div className={s.col}>
            <div className={s.colTitle}>О нас</div>
            <div className={s.colLinks}>
              <Link href="/about" className={s.colLink}>О бренде</Link>
              <Link href="/about#story" className={s.colLink}>История</Link>
              <Link href="/about#contacts" className={s.colLink}>Контакты</Link>
              <Link href="/about#delivery" className={s.colLink}>Доставка и оплата</Link>
            </div>
          </div>

          <div className={s.col}>
            <div className={s.colTitle}>Соцсети</div>
            <div className={s.social}>
              <a
                href="https://vk.ru/oaklet_store"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
                aria-label="ВКонтакте"
              >
                <IconVK />
                ВКонтакте
              </a>
              <a
                href="https://t.me/oaklet_store"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
                aria-label="Telegram"
              >
                <IconTG />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className={s.bottom}>
          <span className={s.copy}>© {year} OAKLET. ИП Булаев М.В.</span>
          <span className={s.city}>Тула, Россия</span>
        </div>
      </div>
    </footer>
  )
}
