import { FadeIn } from './FadeIn'
import { SITE } from '../site.config'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 6 Como Funciona)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'processo',
  heading: 'Como funciona a Sessão Clareza e Reconexão',
  steps: [
    {
      title: 'Diagnóstico do seu campo',
      body: 'Começo lendo o que você carrega energeticamente. O que o campo vibra mesmo antes de você falar. Isso nos dá precisão sobre onde está a raiz do seu padrão.',
    },
    {
      title: 'Integração e reprogramação',
      body: 'Trabalhamos juntas no nível onde a mudança acontece de verdade: o campo vibracional e o subconsciente. Sem anos de processo. Uma sessão profunda tem o poder de gerar uma virada de chave real.',
    },
    {
      title: 'Âncora e continuidade',
      body: 'Você recebe o áudio da sessão e material complementar para reforçar a integração. O caminho de volta para si mesma não termina quando a sessão acaba.',
    },
  ],
  note: 'O atendimento é 100% online, por videochamada. Você precisa apenas de um lugar silencioso e duas horas de presença.',
  ctaText: 'Quero agendar minha sessão',
}
// ════════════════════════════════════════════════════════════════════

export default function HowItWorks() {
  return (
    <section
      className="section-padding-lg"
      style={{
        backgroundColor: 'var(--color-dark)',
        backgroundImage: `radial-gradient(color-mix(in srgb, var(--color-secondary) 7%, transparent) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
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
            className="text-3xl md:text-4xl lg:text-5xl mb-14 md:mb-20"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {COPY.steps.map((step, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div
                className="py-8 md:py-10 flex flex-col md:flex-row gap-5 md:gap-10"
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 15%, transparent)`,
                  ...(i === COPY.steps.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-secondary) 15%, transparent)` }
                    : {}),
                }}
              >
                <div className="flex items-start gap-5 md:w-48 shrink-0">
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      color: 'var(--color-secondary)',
                      opacity: 0.5,
                      paddingTop: '2px',
                      minWidth: '28px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-lg md:text-xl"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-primary)',
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-primary)',
                    fontWeight: 300,
                    lineHeight: 1.85,
                    opacity: 0.8,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Note */}
        <FadeIn delay={0.35}>
          <p
            className="mt-10 text-sm md:text-base"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-primary)',
              fontWeight: 300,
              opacity: 0.55,
              fontStyle: 'italic',
            }}
          >
            {COPY.note}
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.45}>
          <div className="mt-12 md:mt-16">
            <a
              href={SITE.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer rounded-sm text-sm font-medium tracking-wide"
              style={{
                backgroundColor: 'var(--color-secondary)',
                color: 'var(--color-primary-dark)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              {COPY.ctaText}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
