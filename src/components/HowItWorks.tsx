import { UploadIcon } from './UploadIcon'
import { InterviewIcon } from './InterviewIcon'
import { ScorecardIcon } from './ScorecardIcon'

const steps = [
  {
    title: 'Step 1\nSign up and upload your CV',
    body: 'Enter your email, link your LinkedIn and/or GitHub, select your role, and upload your CV.',
    icon: <UploadIcon />,
  },
  {
    title: 'Step 2\nDo the interview',
    body: 'Answer out loud for 15 minutes. Questions tailored to your experience and core role knowledge.',
    icon: <InterviewIcon  />,
  },
  {
    title: 'Step 3\nGet your scorecard',
    body: 'Get feedback across 4 dimensions with specific tips to improve. Emailed to you.',
    icon: <ScorecardIcon />,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-[1380px] px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-24 lg:pt-12">
      <h2 className="font-display text-center text-[2.25rem] font-bold leading-none text-fi-ink sm:text-[clamp(2rem,4vw,3rem)]">
        How It Works
      </h2>
      <div className="mt-7 grid gap-10 sm:mt-8 sm:gap-12 md:grid-cols-3 md:gap-6 lg:gap-12">
        {steps.map((s) => (
          <div key={s.title} className="text-center">
            <div className="mx-auto flex size-[62px] items-center justify-center rounded-full bg-fi-icon-bg sm:size-20">
              {s.icon}
            </div>
            <h3 className="mt-4 whitespace-pre-line text-[34px] font-normal leading-[1.15] text-fi-ink sm:mt-6 sm:text-[24px] sm:leading-[1.4]">
              {s.title}
            </h3>
            <p className="mx-auto mt-2.5 max-w-[310px] text-[12px] leading-relaxed text-fi-muted sm:mt-3 sm:max-w-none sm:text-sm">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
