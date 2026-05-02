import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      padding: '4rem 1rem',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(6rem, 20vw, 16rem)',
        fontWeight: 700,
        lineHeight: 1,
        color: 'transparent',
        WebkitTextStroke: '1px var(--border)',
        userSelect: 'none',
      }}>
        404
      </div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        color: 'var(--text-secondary)',
      }}>
        Эта страница куда-то делась
      </h1>
      <p style={{
        fontSize: 'var(--text-base)',
        color: 'var(--text-muted)',
        maxWidth: '400px',
        lineHeight: 1.6,
      }}>
        Зато наш каталог никуда не денется — загляните туда
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/catalog"
          style={{
            padding: '0.75rem 2rem',
            background: 'var(--brand)',
            color: 'var(--text-on-brand)',
            borderRadius: 'var(--r-md)',
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          В каталог
        </Link>
        <Link
          href="/"
          style={{
            padding: '0.75rem 2rem',
            border: '1px solid var(--border)',
            color: 'var(--text-secondary)',
            borderRadius: 'var(--r-md)',
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          На главную
        </Link>
      </div>
    </div>
  )
}
