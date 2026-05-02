import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/providers/CartProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export const metadata: Metadata = {
  title: {
    default: 'OAKLET — Тульский бренд одежды',
    template: '%s | OAKLET',
  },
  description:
    'OAKLET — тульский бренд одежды. Вдохновлённый историей города. За свободу и творчество.',
  keywords: ['OAKLET', 'тульский бренд', 'одежда Тула', 'streetwear', 'купить одежду Тула'],
  openGraph: {
    title: 'OAKLET — Тульский бренд одежды',
    description: 'Вдохновлённый историей города. За свободу и творчество.',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
