import { Metadata } from 'next'
import s from './page.module.css'

export const metadata: Metadata = {
  title: 'О бренде',
  description:
    'OAKLET — тульский бренд одежды с 2021 года. Вдохновлённый историей города. За свободу и творчество.',
}

export default function AboutPage() {
  return (
    <div className="container">
      {/* Hero */}
      <div className={s.hero}>
        <div className={s.eyebrow}>О бренде</div>
        <h1 className={s.title}>Oaklet</h1>
        <p className={s.subtitle}>
          Тульский бренд одежды. Вдохновлённый историей города. За свободу и творчество — с 2021 года.
        </p>
      </div>

      {/* Story */}
      <section className={s.story} id="story">
        <div>
          <h2 className={s.storyTitle}>Откуда<br />мы взялись</h2>
          <p className={s.storyText}>
            Всё началось с простой мысли: Тула — не просто музей самоваров и пряников. Это живой город с историей, характером и молодёжью, которой есть что сказать. OAKLET появился как попытка создать язык этого разговора — через одежду.
          </p>
          <p className={s.storyText}>
            Первый шоурум открылся в центре Тулы, потом закрылся — не то место, не та атмосфера. Зато выросли коллаборации: с молодёжными барами, с городским пространством «Искра», с людьми, которые делают Тулу интересной.
          </p>
          <p className={s.storyText}>
            Сейчас мы работаем онлайн — продаём через ВКонтакте и Telegram. Без лишних посредников. Напрямую к вам.
          </p>
        </div>
        <div>
          <div className={s.bigNum}>1146</div>
          <p className={s.storyText} style={{ textAlign: 'right', marginTop: '-1rem' }}>
            Год основания Тулы. Нам есть на что опираться.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className={s.values} id="values">
        <h2 className={s.valuesTitle}>Ценности</h2>
        <div className={s.valuesGrid}>
          {[
            {
              icon: '🏙',
              name: 'Тульское',
              desc: 'Каждая вещь — про конкретное место. Самовар, Кремль, Куликово поле, «Левша». Без глобализма — с местной душой.',
            },
            {
              icon: '✦',
              name: 'Свободное',
              desc: 'Мы не диктуем, как носить. Оверсайз, свободный крой — чтобы было удобно быть собой.',
            },
            {
              icon: '🤝',
              name: 'Честное',
              desc: 'Небольшие тиражи, реальные материалы, прямые продажи без накруток. Вы знаете, за что платите.',
            },
          ].map(({ icon, name, desc }) => (
            <div key={name} className={s.valueItem}>
              <div className={s.valueIcon}>{icon}</div>
              <div className={s.valueName}>{name}</div>
              <p className={s.valueDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery */}
      <section className={s.delivery} id="delivery">
        <h2 className={s.deliveryTitle}>Доставка и оплата</h2>
        <div className={s.deliveryGrid}>
          <div className={s.deliveryItem}>
            <div className={s.deliveryItemTitle}>По Туле</div>
            <p className={s.deliveryItemText}>
              Самовывоз — договариваемся о месте встречи лично. Бесплатно.
            </p>
          </div>
          <div className={s.deliveryItem}>
            <div className={s.deliveryItemTitle}>По России</div>
            <p className={s.deliveryItemText}>
              Отправляем Почтой России или СДЭК. Стоимость зависит от региона и веса посылки.
            </p>
          </div>
          <div className={s.deliveryItem}>
            <div className={s.deliveryItemTitle}>Оплата</div>
            <p className={s.deliveryItemText}>
              Перевод на карту, СБП. Предоплата или частичная предоплата — по договорённости.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className={s.contacts} id="contacts">
        <h2 className={s.contactsTitle}>Контакты</h2>
        <div className={s.contactsGrid}>
          <a
            href="https://vk.ru/oaklet_store"
            target="_blank"
            rel="noopener noreferrer"
            className={s.contactCard}
          >
            <div className={s.contactCardLabel}>ВКонтакте</div>
            <div className={s.contactCardValue}>@oaklet_store</div>
            <div className={s.contactCardNote}>
              Основной канал продаж. Пишите — ответим в течение дня.
            </div>
          </a>
          <a
            href="https://t.me/oaklet_store"
            target="_blank"
            rel="noopener noreferrer"
            className={s.contactCard}
          >
            <div className={s.contactCardLabel}>Telegram</div>
            <div className={s.contactCardValue}>@oaklet_store</div>
            <div className={s.contactCardNote}>
              Для быстрых вопросов. Отвечаем оперативно.
            </div>
          </a>
          <div className={s.contactCard} style={{ cursor: 'default' }}>
            <div className={s.contactCardLabel}>Город</div>
            <div className={s.contactCardValue}>Тула, Россия</div>
            <div className={s.contactCardNote}>
              ИП Булаев Михаил Владимирович. Основан в 2021 году.
            </div>
          </div>
          <a
            href="https://t.me/oaklet_store"
            target="_blank"
            rel="noopener noreferrer"
            className={s.contactCard}
          >
            <div className={s.contactCardLabel}>По всем вопросам</div>
            <div className={s.contactCardValue}>Написать нам</div>
            <div className={s.contactCardNote}>
              Сотрудничество, пресса, коллаборации — тоже сюда.
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
