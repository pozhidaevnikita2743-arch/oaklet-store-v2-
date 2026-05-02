import s from './Badge.module.css'

type BadgeVariant = 'new' | 'sale' | 'hit' | 'out' | 'limited'

interface Props {
  variant: BadgeVariant
  label?: string
  className?: string
}

const LABELS: Record<BadgeVariant, string> = {
  new: 'Новинка',
  sale: 'Скидка',
  hit: 'Хит',
  out: 'Нет',
  limited: 'Лимитед',
}

export default function Badge({ variant, label, className }: Props) {
  return (
    <span className={`${s.badge} ${s[variant]} ${className ?? ''}`}>
      {label ?? LABELS[variant]}
    </span>
  )
}
