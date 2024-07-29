import { GraduationCap } from 'lucide-react'

import { Animate } from '@/components/animate'
import { Title } from '@/components/ui/title'
import { courses } from '@/utils/data/courses'

import { CourseItem } from './course-item'

export function Education() {
  return (
    <section className="pt-12">
      <Title asChild className="mb-8 text-lg">
        <Animate delay={0.05} as="h2">
          <GraduationCap className="size-6 min-w-6 text-border-50" />
          Formação e Educação
        </Animate>
      </Title>
      {courses.map((course, index) => {
        const isLast = index === courses.length - 1
        return (
          <CourseItem
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
