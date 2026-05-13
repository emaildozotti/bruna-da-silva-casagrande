import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 7 Depoimentos)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'o que dizem',
  heading: 'Mulheres que encontraram',
  headingEm: 'o caminho de volta.',
  testimonials: [
    {
      text: 'Entrei na sessão sem acreditar muito. Saí sem conseguir explicar o que aconteceu. Em um encontro, a Bruna foi fundo em algo que eu carregava há mais de dez anos. A leveza que senti depois era algo que eu não lembrava mais como era.',
      name: 'M. F., 41 anos',
      highlight: 'a Bruna foi fundo em algo que eu carregava há mais de dez anos',
    },
    {
      text: 'Fiz terapia por seis anos. Sabia meu problema de cor. Mas continuava repetindo os mesmos padrões nos relacionamentos. Com a Bruna, pela primeira vez, algo mudou de verdade. Não só na minha cabeça, no meu comportamento.',
      name: 'R. S., 36 anos',
      highlight: 'com a Bruna, pela primeira vez, algo mudou de verdade',
    },
    {
      text: 'Eu era a mulher forte que não pedia ajuda. Até não aguentar mais o peso. Na sessão com a Bruna, entendi onde esse peso veio e pude, finalmente, soltar. Não saí pronta. Saí no caminho certo.',
      name: 'C. L., 44 anos',
      highlight: 'entendi onde esse peso veio e pude, finalmente, soltar',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoRotate = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % COPY.testimonials.length)
    }, 15000)
  }

  const stopAutoRotate = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    startAutoRotate()
    return () => stopAutoRotate()
  }, [])

  const goTo = (i: number) => {
    stopAutoRotate()
    setCurrent(i)
  }
  const next = () => goTo((current + 1) % COPY.testimonials.length)
  const prev = () => goTo((current - 1 + COPY.testimonials.length) % COPY.testimonials.length)

  const t = COPY.testimonials[current]

  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
              {COPY.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl mb-12 md:mb-16"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-main)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}{' '}
            <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative min-h-[320px] md:min-h-[260px]">
            {/* Giant quote mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '120px',
                lineHeight: 1,
                color: 'var(--color-secondary)',
                opacity: 0.2,
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 pt-10 md:pt-12 pl-4 md:pl-8"
              >
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 300,
                    maxWidth: '680px',
                    lineHeight: 1.85,
                  }}
                >
                  {t.text.split(t.highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong style={{ fontWeight: 500, color: 'var(--color-primary)' }}>
                          {t.highlight}
                        </strong>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
                <span
                  className="eyebrow-ultra"
                  style={{ color: 'var(--color-secondary)', opacity: 0.7 }}
                >
                  {t.name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Controls — arrows + bullets */}
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-between gap-6 mt-10">
            {/* Bullets */}
            <div className="flex items-center gap-3">
              {COPY.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all duration-500 cursor-pointer"
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '2px',
                    backgroundColor: 'var(--color-secondary)',
                    opacity: i === current ? 1 : 0.3,
                    border: 'none',
                    padding: 0,
                    borderRadius: '1px',
                  }}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: `1px solid color-mix(in srgb, var(--color-secondary) 35%, transparent)`,
                  color: 'var(--color-secondary)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = `color-mix(in srgb, var(--color-secondary) 12%, transparent)`
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 65%, transparent)`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 35%, transparent)`
                }}
                aria-label="Depoimento anterior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  border: `1px solid color-mix(in srgb, var(--color-secondary) 35%, transparent)`,
                  color: 'var(--color-secondary)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = `color-mix(in srgb, var(--color-secondary) 12%, transparent)`
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 65%, transparent)`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 35%, transparent)`
                }}
                aria-label="Próximo depoimento"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
