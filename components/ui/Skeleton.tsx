import s from './Skeleton.module.css'

export function ProductCardSkeleton() {
  return (
    <div className={s.card} aria-busy="true" aria-label="Загрузка товара">
      <div className={`${s.skeleton} ${s.image}`} />
      <div className={`${s.skeleton} ${s.line}`} />
      <div className={`${s.skeleton} ${s.line} ${s.lineShort}`} />
      <div className={`${s.skeleton} ${s.priceLine}`} />
      <div className={`${s.skeleton} ${s.btn}`} />
    </div>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </>
  )
}
