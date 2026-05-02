import Image from 'next/image'
import { CartItem as CartItemType } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/components/providers/CartProvider'
import s from './CartItem.module.css'

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className={s.item}>
      <div className={s.imageWrap}>
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className={s.image}
          sizes="72px"
        />
      </div>
      <div className={s.info}>
        <div className={s.name}>{item.product.name}</div>
        <div className={s.meta}>Размер: {item.size}</div>
        <div className={s.price}>{formatPrice(item.product.price * item.quantity)}</div>
        <div className={s.controls}>
          <button
            className={s.qtyBtn}
            onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
            aria-label="Уменьшить количество"
          >
            −
          </button>
          <span className={s.qty}>{item.quantity}</span>
          <button
            className={s.qtyBtn}
            onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
            aria-label="Увеличить количество"
          >
            +
          </button>
          <button
            className={s.removeBtn}
            onClick={() => removeItem(item.product.id, item.size)}
          >
            Убрать
          </button>
        </div>
      </div>
    </div>
  )
}
