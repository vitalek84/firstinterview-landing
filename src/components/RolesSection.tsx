import { DataAiExpertIcon } from './RolesElements/DataAiExpertIcon'
import { DevOpsEngineerIcon } from './RolesElements/DevOpsEngineerIcon'
import { ProductManagerIcon } from './RolesElements/ProductManagerIcon'
import { ProjectManagerIcon } from './RolesElements/ProjectManagerIcon'
import { SoftwareEngineerIcon } from './RolesElements/SoftwareEngineerIcon'

const roles = [
  {
    title: 'Software Engineers',
    lines: 'Frontend, Backend, Fullstack, Mobile, QA',
    icon: <SoftwareEngineerIcon className="size-6" />,
  },
  {
    title: 'DevOps Engineers',
    lines: 'Cloud, Infrastructure, SRE, Platform Engineering',
    icon: <DevOpsEngineerIcon className="size-6" />,
  },
  {
    title: 'Data & AI Experts',
    lines: 'Data Engineers, Data Scientists, ML/AI Engineers, Analytics',
    icon: <DataAiExpertIcon className="size-6" />,
  },
  {
    title: 'Product Managers',
    lines: 'Product Managers, Product Owners',
    icon: <ProductManagerIcon className="size-6" />,
  },
  {
    title: 'Project Managers',
    lines: 'Project Managers, Scrum Masters, Agile Coaches, Delivery Managers',
    icon: <ProjectManagerIcon className="size-6" />,
  },
]

export function RolesSection() {
  return (
    <section id="roles" className="relative mx-auto max-w-[1380px] px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <h2 className="font-display text-center text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-fi-ink">
        Roles Supported
      </h2>
      <div className="mx-auto mt-8 flex max-w-[1380px] flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-5">
        {roles.map((r) => (
          <div key={r.title} className="flex items-start gap-3.5 text-left sm:block sm:gap-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center text-fi-cyan">
              {r.icon}
            </div>
            <div>
              <h3 className="font-sans text-[18px] font-medium leading-[1.35] text-fi-ink sm:mt-3 sm:text-[18px]">
                {r.title}
              </h3>
              <p className="mt-1.5 max-w-[260px] whitespace-pre-line text-[16px] leading-[1.55] text-fi-about sm:mt-2 sm:max-w-[138px] sm:text-[16px]">
                {r.lines}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
