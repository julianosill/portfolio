import { twMerge } from 'tailwind-merge'

import { ICareerItem } from '@/@types/career-item'
import { Animate } from '@/components/animate'

interface CareerItemProps {
  data: ICareerItem
  baseDelay?: number
  index: number
  isLast: boolean
}

export function CareerItem({
  data,
  baseDelay = 0,
  index,
  isLast,
}: CareerItemProps) {
  const tools = data.tools.map((tool) => tool).join(', ')
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
        {data.type && (
          <span className="text-sm text-muted-50">{data.type}</span>
        )}
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
        {tools && (
          <p className="pt-2 text-sm">
            <span className="text-muted-50">Ferramentas:</span> {tools}
          </p>
        )}
      </div>
    </Animate>
  )
}
