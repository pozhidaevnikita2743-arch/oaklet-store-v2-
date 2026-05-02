import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProducts } from '@/lib/data'
import ProductCard from '@/components/catalog/ProductCard'
import s from './page.module.css'

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function IconVK({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.3h-1.54c-.58 0-.76-.46-1.81-1.52-.91-.88-1.31-.99-1.54-.99-.31 0-.4.09-.4.52v1.39c0 .37-.12.59-1.11.59-1.64 0-3.45-.99-4.72-2.83C5.5 10.19 5.09 8.55 5.09 8.2c0-.23.09-.44.52-.44h1.54c.38 0 .53.17.68.59.75 2.16 2 4.07 2.52 4.07.19 0 .28-.09.28-.58V9.82c-.06-1.06-.62-1.15-.62-1.53 0-.18.15-.37.38-.37h2.42c.32 0 .43.17.43.55v2.97c0 .32.14.43.23.43.19 0 .35-.11.7-.46 1.08-1.21 1.85-3.07 1.85-3.07.1-.23.31-.44.69-.44h1.54c.46 0 .56.23.46.55-.19.88-2.04 3.5-2.04 3.5-.16.26-.22.38 0 .67.16.22.68.67 1.02 1.07.64.73 1.13 1.34 1.26 1.76.11.41-.1.62-.52.62z"/>
    </svg>
  )
}

function IconTG({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.69 7.97c-.12.56-.46.7-.93.43l-2.59-1.91-1.25 1.2c-.14.14-.25.25-.51.25l.18-2.59 4.67-4.22c.2-.18-.05-.28-.31-.1L7.23 14.49 4.68 13.7c-.55-.17-.56-.55.12-.81l8.98-3.46c.46-.17.86.1.71.81l.15-.54z"/>
    </svg>
  )
}

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={s.hero}>
        {/* Big outline brand name — decorative background */}
        <div className={s.heroBgBrand} aria-hidden="true">OAKLET</div>

        {/* Faded logo watermark */}
        <div className={s.heroLogoWrap} aria-hidden="true">
          <Image
            src="/img/logo.png"
            alt=""
            width={560}
            height={560}
            className={s.heroLogo}
            priority
          />
        </div>

        <div className={`container ${s.heroContent}`}>
          <div className={s.heroEyebrow}>Тула · 2021</div>
          <h1 className={s.heroTitle}>
            Для<br />
            <em className={s.heroTitleAccent}>тульских.</em>
          </h1>
          <p className={s.heroSub}>
            Бренд одежды, вдохновлённый историей города. Создан теми, кто вырос здесь. Для тех, кто ценит свободу и творчество.
          </p>
          <div className={s.heroCtas}>
            <Link href="/catalog" className={s.ctaPrimary}>
              Смотреть каталог <IconArrow />
            </Link>
            <Link href="/about" className={s.ctaSecondary}>
              О бренде
            </Link>
          </div>
        </div>

        <div className={s.heroMeta} aria-hidden="true">
          <span>OAKLET</span>
          <span className={s.heroMetaDot}>·</span>
          <span>Тула</span>
          <span className={s.heroMetaDot}>·</span>
          <span>Streetwear</span>
          <span className={s.heroMetaDot}>·</span>
          <span>Since 2021</span>
          <span className={s.heroMetaDot}>·</span>
          <span>Ограниченные тиражи</span>
          <span className={s.heroMetaDot}>·</span>
          <span>Россия</span>
        </div>

        <div className={s.scrollHint}>
          <div className={s.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── Features bar ─────────────────────────────────────────────── */}
      <div className={s.featBar}>
        <div className={`container ${s.featBarInner}`}>
          {[
            { icon: '🏙', text: 'Сделано в Туле' },
            { icon: '✦', text: 'Ограниченные тиражи' },
            { icon: '🤝', text: 'Продажа через ВК и Telegram' },
            { icon: '📦', text: 'Доставка по России' },
          ].map(({ icon, text }) => (
            <div key={text} className={s.featBarItem}>
              <span className={s.featBarIcon}>{icon}</span>
              <span className={s.featBarText}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Manifesto ────────────────────────────────────────────────── */}
      <div className={s.manifesto}>
        <div className="container">
          <p className={s.manifestoText}>
            Не просто одежда — это <span className={s.manifestoAccent}>позиция.</span><br />
            Тульская история. Молодёжный взгляд.
          </p>
        </div>
      </div>

      {/* ── Featured products ─────────────────────────────────────────── */}
      <section className={`${s.section}`}>
        <div className="container">
          <div className={s.sectionHead}>
            <div>
              <div className={s.sectionEyebrow}>Избранное</div>
              <h2 className={s.sectionTitle}>Хиты и новинки</h2>
            </div>
            <Link href="/catalog" className={s.sectionLink}>
              Весь каталог <IconArrow />
            </Link>
          </div>

          <div className={s.productGrid}>
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand story ───────────────────────────────────────────────── */}
      <section className={s.story} id="story">
        <div className="container">
          <div className={s.storyGrid}>
            <div className={s.storyYear}>1146</div>
            <div>
              <div className={s.storyEyebrow}>О бренде</div>
              <h2 className={s.storyTitle}>Тула<br />в каждом<br />стежке</h2>
              <p className={s.storyText}>
                OAKLET начался как идея — делать вещи, которые говорят о городе без пафоса. Тула не нуждается в представлении: самовары, пряники, «Левша», Куликово поле. Мы берём эти образы и переводим в язык современной уличной моды.
              </p>
              <p className={s.storyText}>
                Один шоурум в центре города, потом — коллаборации с тульскими барами и пространством «Искра», пара показов, живые встречи. Сейчас продаём онлайн, но дух города никуда не делся.
              </p>

              <div className={s.storyValues}>
                {[
                  { num: '2021', label: 'Год основания' },
                  { num: '12+', label: 'Позиций' },
                  { num: '100%', label: 'Тула' },
                ].map(({ num, label }) => (
                  <div key={label} className={s.storyValue}>
                    <span className={s.storyValueNum}>{num}</span>
                    <span className={s.storyValueLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to buy ────────────────────────────────────────────────── */}
      <section className={s.howTo}>
        <div className="container">
          <div className={s.sectionHead}>
            <div>
              <div className={s.sectionEyebrow}>Покупка</div>
              <h2 className={s.sectionTitle}>Как купить</h2>
            </div>
          </div>

          <div className={s.howToCards}>
            <a
              href="https://vk.ru/oaklet_store"
              target="_blank"
              rel="noopener noreferrer"
              className={s.howToCard}
            >
              <div className={`${s.howToCardIcon} ${s.howToCardIconVK}`}>
                <IconVK />
              </div>
              <div className={s.howToCardTitle}>ВКонтакте</div>
              <p className={s.howToCardDesc}>
                Напишите нам в ВК — выберите вещь из каталога, укажите размер. Мы ответим в течение дня и скоординируем оплату и доставку.
              </p>
              <div className={s.howToCardArrow}>
                Перейти в ВК <IconArrow />
              </div>
            </a>

            <a
              href="https://t.me/oaklet_store"
              target="_blank"
              rel="noopener noreferrer"
              className={s.howToCard}
            >
              <div className={`${s.howToCardIcon} ${s.howToCardIconTG}`}>
                <IconTG />
              </div>
              <div className={s.howToCardTitle}>Telegram</div>
              <p className={s.howToCardDesc}>
                Пишите в Telegram — это удобнее всего. Покажем наличие, поможем с размером, договоримся о самовывозе по Туле или доставке.
              </p>
              <div className={s.howToCardArrow}>
                Написать в TG <IconArrow />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
