import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take?',
    a: 'About 15 minutes.',
  },
  {
    q: 'Do I need to prepare?',
    a: 'No. Just have your CV ready to upload. The AI generates questions based on your experience and role, so there is nothing to study in advance.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. Completely free. No credit card, no hidden fees, no trial period.',
  },
  {
    q: 'Why do you need my LinkedIn or GitHub?',
    a: 'To verify that you are a real person with a real professional background.',
  },
  {
    q: 'What happens to my data?',
    a: 'Your video and audio recordings are deleted within 72 hours. Your transcript, CV, scorecard, name, email, and profile URLs are retained for up to 24 months. We do not share your data with hiring companies unless you separately choose to opt in. You can request full deletion at any time by emailing support@firstinterview.ai. See our Privacy Policy for full details.',
  },
  {
    q: 'Will I get my results?',
    a: 'Yes. Your scorecard with feedback across all four dimensions will be emailed to you after the interview.',
  },
  {
    q: 'What roles are supported?',
    a: 'Software Engineers (Frontend, Backend, Full-Stack, Mobile, QA), DevOps Engineers, Data and AI roles (Data Engineers, Data Scientists, ML/AI Engineers, Analytics), Product Managers, and Project Managers (including Scrum Masters, Agile Coaches, and Delivery Managers).',
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
