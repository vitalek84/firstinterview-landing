import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take?',
    a: 'About 15 minutes.',
  },
  {
    q: 'Do I need to prepare?',
    a: 'No. Just upload your CV and answer the questions.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. No credit card required.',
  },
  {
    q: 'Why do you need my LinkedIn or GitHub?',
    a: 'We want real professionals, not bots. Your profile is never shared without your permission.',
  },
  {
    q: 'What happens to my data?',
    a: 'Your CV and answers are used only to generate your scorecard. We do not sell your data. You can request deletion at any time.',
  },
  {
    q: 'Will I get my results?',
    a: 'Yes. Your scorecard is emailed to you.',
  },
  {
    q: 'What roles are supported?',
    a: 'Software Engineers, DevOps Engineers, Data & AI Experts, Product Managers, and Project Managers.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-[768px] px-4 sm:px-6">
        <h2 className="font-display text-center text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-fi-ink">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 rounded-xl bg-fi-faq-bg p-2 sm:p-4">
          <ul className="divide-y divide-black/10">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-fi-ink">{item.q}</span>
                    <span
                      className={`text-fi-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-4 text-base leading-relaxed text-fi-muted">{item.a}</p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
