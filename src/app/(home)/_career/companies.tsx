import { Animate } from '@/components'
import { For } from '@/components/utils'
import { Markdown } from '@/components/wrappers'
import { cn, getAnimateDelayValue, isLastItem } from '@/helpers'
import { fetchJobs } from '@/http'

export async function Companies() {
  const jobs = await fetchJobs()

  return (
    <section className="pt-12">
      <For list={jobs}>
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
              <span className="text-sm text-muted-50">{job.type}</span>
            </header>
            <div
              className={cn(
                'relative border-l border-border-50 pb-8 pl-4',
                isLastItem({ list: jobs, index }) && 'pb-0',
              )}
            >
              <span className="absolute -left-[4px] top-2 block size-[7px] rounded-full bg-primary" />
              <h4 className="pb-2 text-lg font-medium leading-snug text-strong">
                {job.position}
              </h4>
              <Markdown source={job.description.markdown} variant="career" />
            </div>
          </Animate>
        )}
      </For>
    </section>
  )
}
