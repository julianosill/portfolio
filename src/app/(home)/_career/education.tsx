import { GraduationCap } from 'lucide-react'

import { Animate } from '@/components/animate'
import { Title } from '@/components/ui/title'
import { courses } from '@/utils/data/courses'

import { CareerItem } from './career-item'

export function Education() {
  return (
    <section className="pt-12">
      <Title asChild className="mb-8 text-lg">
        <Animate delay={0.05} as="h2">
          <GraduationCap className="text-border-50 size-6 min-w-6" />
          Formação e Educação
        </Animate>
      </Title>
      {courses.map((course, index) => {
        const isLast = index === courses.length - 1
        return (
          <CareerItem
            key={course.id}
            data={course}
            baseDelay={0.1}
            index={index}
            isLast={isLast}
          />
        )
      })}
    </section>
  )
}
