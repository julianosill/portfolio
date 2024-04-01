import { LayoutGrid } from 'lucide-react'

import { ProjectCard } from '@/app/(home)/_projects/project-card'
import { Animate } from '@/components/animate'
import { Title } from '@/components/ui/title'
import { projects } from '@/utils/data/projects'

export function Projects() {
  return (
    <section id="projects" className="pt-20 md:pt-24">
      <Title asChild className="mx-auto mb-10 w-10/12 max-w-2xl md:mb-12">
        <Animate as="h2">
          <LayoutGrid className="size-6 min-w-6 text-border-50" />
          Projetos que desenvolvi
        </Animate>
      </Title>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-4 md:grid-cols-4">
        {projects.map((project, i) => {
          const isLastItemOdd = i === projects.length - 1 && i % 2 === 0

          return (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              baseDelay={0.1}
              isCentered={isLastItemOdd}
            />
          )
        })}
      </div>
    </section>
  )
}
