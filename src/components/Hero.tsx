import { CheckmarkIcon } from './CheckmarkIcon'

function ArrowIcon() {
  return (
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1280px] px-4 pb-10 pt-8 text-center sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-[14px] lg:pt-[52px]">
        <h1 className="mx-auto max-w-[320px] font-display text-[2.75rem] font-extrabold leading-[1.04] tracking-[0.01em] text-fi-body sm:max-w-[1280px] sm:text-[clamp(2.5rem,5vw,4.3125rem)] sm:leading-[1.13]">
          Practice your first interview.
        </h1>
        <p className="mx-auto mt-5 max-w-[330px] text-[1.75rem] font-normal leading-[1.3] text-fi-body sm:mt-[1.171875rem] sm:max-w-[901px] sm:text-[clamp(1.125rem,2vw,1.75rem)] sm:leading-[1.3928571429]">
          A 15-minute AI mock interview tailored to your CV and role.
        </p>

        <div
          className="mx-auto mt-8 flex w-full max-w-[830px] flex-col items-start gap-2.5 sm:mt-[3.8rem] sm:items-center sm:gap-3 md:flex-row md:items-center md:justify-center md:gap-10"
          aria-label="What you get"
        >
          {(
            [
              'Answer out loud.',
              'Get scored on 4 dimensions.',
              'Results emailed to you.',
            ] as const
          ).map((line) => (
            <div
              key={line}
              className="flex items-center gap-2 text-left text-base font-normal leading-[1.5] text-[#111111] sm:text-[20px] md:text-[22px]"
            >
              <CheckmarkIcon className="h-5 w-5 shrink-0 sm:h-[28px] sm:w-[28px]" />
              <span className="whitespace-nowrap">{line}</span>
            </div>
          ))}
        </div>

        <div id="hero-cta" className="mx-auto mt-8 w-full max-w-[294px] sm:mt-[3.875rem]">
          <a
            href="https://app.firstinterview.ai"
            className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-fi-blue px-6 text-base font-medium text-white shadow-[var(--shadow-fi-cta)] transition hover:brightness-105 sm:h-[61px] sm:text-lg"
          >
            Start Practicing FREE
            <ArrowIcon />
          </a>
          <p className="mt-1.5 text-[11px] font-medium leading-snug text-[#666666] sm:text-sm">
            Free. No credit card. Just 15 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}