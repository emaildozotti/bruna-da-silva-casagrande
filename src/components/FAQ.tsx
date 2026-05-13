import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 8 FAQ)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'dúvidas frequentes',
  heading: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Isso é o mesmo que terapia convencional?',
      a: 'Não. A terapia convencional trabalha com o que você conta, com o consciente. Meu trabalho acessa o campo vibracional e o subconsciente, o que você carrega sem perceber e que a fala não alcança. Os dois podem coexistir, mas atuam em camadas diferentes.',
    },
    {
      q: 'Já fiz muita terapia e não mudei. Isso vai ser diferente?',
      a: 'Essa é a pergunta que mais ouço. A resposta está em onde cada abordagem atua. Se você já entende seu problema mas continua repetindo o mesmo padrão, é sinal de que precisa de um acesso diferente. É exatamente isso que faço.',
    },
    {
      q: 'Quanto tempo leva para ver resultado?',
      a: 'Uma sessão profunda pode gerar uma virada de chave real. Não prometo décadas de processo. Prometo presença e diagnóstico precisos. O tempo de integração varia para cada pessoa, mas o movimento começa na sessão.',
    },
    {
      q: 'Preciso acreditar em espiritualidade para funcionar?',
      a: 'Não. Trabalho a partir da Física Quântica e da Radiestesia, que têm embasamento técnico e científico. A dimensão espiritual complementa, mas não é requisito. O que importa é a sua abertura para o processo.',
    },
    {
      q: 'Como funciona o agendamento?',
      a: 'Você clica no botão abaixo, é direcionada para o meu WhatsApp e agendamos juntas. O atendimento é 100% online. A primeira sessão é o nosso encontro inicial, gratuito, para entender se faz sentido para você.',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
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
            className="text-3xl md:text-4xl mb-10 md:mb-14"
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

        {/* Accordion */}
        <div className="flex flex-col gap-0">
          {COPY.faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)`,
                  ...(i === COPY.faqs.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)` }
                    : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.25rem 0',
                  }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-primary)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ stroke: 'var(--color-secondary)' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-primary)',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          opacity: 0.8,
                          maxWidth: '680px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
