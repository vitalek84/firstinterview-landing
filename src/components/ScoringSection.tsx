import { CommunicationIcon } from './ScoringElements/CommunicationIcon'
import { ComprehensionIcon } from './ScoringElements/ComprehensionIcon'
import { BehavioralIcon } from './ScoringElements/BehavioralIcon'
import { RoleSpecificIcon } from './ScoringElements/RoleSpecificIcon'

const cards = [
  {
    title: 'Communication',
    description: 'Clarity, conciseness, structure, confidence',
    icon: <CommunicationIcon className="size-10" />,
  },
  {
    title: 'Role-specific',
    description:
      'Technical depth, product thinking, or delivery skills depending on your role',
    icon: <RoleSpecificIcon className="size-10" />,
  },
  {
    title: 'Comprehension',
    description: 'Do you actually answer the question being asked',
    icon: <ComprehensionIcon className="size-10" />,
  },
  {
    title: 'Behavioral',
    description: 'Ownership, honesty, self-awareness, conflict handling',
    icon: <BehavioralIcon className="size-10" />,
  },
]

export function ScoringSection() {
  return (
    <section className="relative mx-auto max-w-[1380px] px-4 pb-2 pt-14 sm:px-6 lg:px-8 lg:pb-2 lg:pt-20">
      <h2 className="font-display text-center text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-fi-ink">
        What You Get Scored On
      </h2>
      <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-auto sm:grid sm:max-w-[1380px] sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-6">
        {cards.map((c) => (
          <article
            key={c.title}
            className="flex min-h-[260px] min-w-[85%] snap-start flex-col rounded-[12px] border border-black/5 bg-white px-6 py-5 shadow-[0_8px_18px_rgb(15_23_42/0.08)] sm:min-w-0"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[var(--color-fi-card-icon)]">
              {c.icon}
            </div>
            <h3 className="mt-4 font-sans text-[20px] font-medium leading-[1.35] text-fi-ink">{c.title}</h3>
            <p className="mt-4 max-w-[210px] text-[14px] leading-[1.6] text-fi-about">{c.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
