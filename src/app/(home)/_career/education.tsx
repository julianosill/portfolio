import { GraduationCap } from 'lucide-react'

import { Animate } from '@/components'
import { Title } from '@/components/ui'
import { For } from '@/components/utils'
import { Markdown } from '@/components/wrappers'
import { cn, getAnimateDelayValue, isLastItem } from '@/helpers'
import { fetchCourses } from '@/http'

export async function Education() {
  const courses = await fetchCourses()

  return (
    <section className="pt-12">
      <Title asChild className="mb-8 text-lg">
        <Animate delay={0.05} as="h2">
          <GraduationCap className="size-6 min-w-6 text-border-50" />
          Formação e Educação
        </Animate>
      </Title>

      <For list={courses}>
        {(course, index) => (
          <Animate
            as="article"
            delay={getAnimateDelayValue({ index })}
            className="sm:grid sm:grid-cols-career sm:gap-4"
          >
            <header className="flex flex-col gap-1 pl-4 max-sm:border-l max-sm:border-border-50 max-sm:pb-4 sm:items-end ">
              <h3 className="font-medium text-strong sm:text-right">
                {course.institution}
              </h3>
              <span className="text-sm">{course.period}</span>
            </header>
            <div
              className={cn(
                'relative border-l border-border-50 pb-8 pl-4',
                isLastItem({ list: courses, index }) && 'pb-0',
              )}
            >
              <span className="absolute -left-[4px] top-2 block size-[7px] rounded-full bg-primary" />
              <h4 className="pb-2 text-lg font-medium leading-snug text-strong">
                {course.title}
              </h4>
              <Markdown source={course.description.markdown} variant="career" />
            </div>
          </Animate>
        )}
      </For>
    </section>
  )
}
