import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 2 Pain Points)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  heading: 'Voce reconhece',
  headingEm: 'alguma dessas situacoes?',
  pains: [
    'Voce tem sucesso, reconhecimento e uma vida que parece perfeita por fora. Mas carrega uma solidao que nao consegue explicar para ninguem.',
    'Voce sabe exatamente de onde vem a sua dor. Leu sobre isso, fez terapia. Mas na hora que importa, reage igual de sempre.',
    'Cada relacionamento comeca diferente. Mas a sensacao de nao ser vista, de amar alguem que nao consegue estar presente, e sempre a mesma.',
    'Voce foi criada para ser forte, resolver, nao pedir ajuda. E agora carrega o peso de todo mundo sem que ninguem perceba que voce tambem precisa de cuidado.',
  ],
  transition: 'Essa confusao tem nome. E tem saida.',
}
// ════════════════════════════════════════════════════════════════════

export default function PainPoints() {
  return (
    <section
      id="dores"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-main)',
              fontWeight: 400,
            }}
          >
            {COPY.heading}{' '}
            <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {COPY.pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex gap-5 p-6 md:p-8 group transition-all duration-500"
                style={{
                  backgroundColor: 'var(--color-bg-warm)',
                  borderRadius: '12px 4px 12px 4px',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 40%, transparent)`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'
                }}
              >
                <span
                  className="shrink-0 eyebrow-ultra"
                  style={{
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    paddingTop: '2px',
                    opacity: 0.6,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 400,
                  }}
                >
                  {pain}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 flex items-center gap-6">
            <div
              style={{
                width: '2px',
                height: '60px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p
              className="text-xl md:text-2xl leading-snug"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-primary)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {COPY.transition}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
