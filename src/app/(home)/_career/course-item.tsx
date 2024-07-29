import { twMerge } from 'tailwind-merge'

import type { ICourseItem } from '@/@types/course-item'
import { Animate } from '@/components/animate'

interface CareerItemProps {
  data: ICourseItem
  baseDelay?: number
  index: number
  isLast: boolean
}

export function CourseItem({
  data,
  baseDelay = 0,
  index,
  isLast,
}: CareerItemProps) {
  const delay = baseDelay + index * 0.025

  return (
    <Animate
      delay={delay}
      as="article"
      className="sm:grid sm:grid-cols-career sm:gap-4"
    >
      <div className="flex flex-col gap-1 pl-4 max-sm:border-l max-sm:border-border-50 max-sm:pb-4 sm:items-end ">
        <h3 className="font-medium text-strong">{data.institution}</h3>
        <span className="text-sm">{data.period}</span>
      </div>
      <div
        className={twMerge(
          'relative border-l border-border-50 pl-4',
          isLast ? null : 'pb-8',
        )}
      >
        <span className="absolute -left-[4px] top-2 block size-[7px] rounded-full bg-primary" />
        <h4 className="pb-2 text-lg font-medium leading-snug text-strong">
          {data.position}
        </h4>
        <p>{data.description}</p>
      </div>
    </Animate>
  )
}
