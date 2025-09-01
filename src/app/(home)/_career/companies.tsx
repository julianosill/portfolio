import { Animate } from '@/components'
import { For } from '@/components/utils/for'
import { COMPANIES } from '@/constants/career'
import { cn, getAnimateDelayValue, isLastItem } from '@/helpers'

export async function Companies() {
  return (
    <section className="pt-12">
      <For list={COMPANIES}>
        {(job, index) => (
          <Animate
            as="article"
            delay={getAnimateDelayValue({ index })}
            className="sm:grid sm:grid-cols-career sm:gap-4"
          >
            <header className="flex flex-col gap-1 pl-4 max-sm:border-l max-sm:border-border-50 max-sm:pb-4 sm:items-end ">
              <h3 className="font-medium text-strong sm:text-right">
                {job.company}
              </h3>
              <span className="text-sm">{job.period}</span>
              <span className="text-sm text-muted-50">{job.location}</span>
            </header>
            <div
              className={cn(
                'relative border-l border-border-50 pb-8 pl-4',
                isLastItem({ list: COMPANIES, index }) && 'pb-0',
              )}
            >
              <span className="absolute -left-[4px] top-2 block size-[7px] rounded-full bg-primary" />
              <h4 className="pb-2 text-lg font-medium leading-snug text-strong">
                {job.position}
              </h4>
              <p className="text-sm">{job.description}</p>

              <ul className="mt-3 list-disc space-y-2 pl-4 leading-snug">
                <For list={job.activities}>
                  {(activity) => <li key={activity}>{activity}</li>}
                </For>
              </ul>
            </div>
          </Animate>
        )}
      </For>
    </section>
  )
}
