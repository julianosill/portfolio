import { Construction, Eye } from 'lucide-react'
import Image from 'next/image'
import { SiGithub } from 'react-icons/si'
import { twMerge } from 'tailwind-merge'

import type { Project } from '@/@types'
import { Animate } from '@/components'
import { Button } from '@/components/ui'

interface ProjectCardProps {
  project: Project
  baseDelay?: number
  index: number
  isCentered?: boolean
}

export function ProjectCard({
  index,
  project,
  isCentered,
  baseDelay = 0,
}: ProjectCardProps) {
  const delay = baseDelay + index * 0.1

  const videoUrl = project.video ? project.video.url : ''
  const stack = project.stack.map((tech) => tech).join(', ') + '.'

  return (
    <Animate
      long
      as="article"
      delay={delay}
      className={twMerge(
        'flex flex-col overflow-hidden rounded-xl border border-border-50 bg-card md:col-span-2',
        isCentered && 'md:col-start-2',
      )}
    >
      <video
        loop
        muted
        autoPlay
        playsInline
        width="720"
        height="405"
        poster={project.image.url}
        className="aspect-video border-b border-border-50 object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        <Image
          width={720}
          height={405}
          src={project.image.url}
          className="aspect-video object-cover"
          alt="Imagem com a tela inicial da aplicação"
        />
      </video>

      <div className="flex flex-1 flex-col p-6 xl:p-8">
        <h3 className="text-xl font-medium text-strong">{project.name}</h3>
        <p className="pt-2 text-sm xl:text-base">{project.description}</p>

        <div className="flex flex-1 flex-wrap items-start gap-2 pt-6">
          {project.inProgress && (
            <Button className="pointer-events-none">
              <Construction className="size-4" />
              Em desenvolvimento
            </Button>
          )}
          {project.urlPreview && (
            <Button href={project.urlPreview}>
              <Eye className="size-4" />
              Acessar
            </Button>
          )}
          {project.urlGithub && (
            <Button href={project.urlGithub}>
              <SiGithub className="size-4" />
              Repositório
            </Button>
          )}
          {project.urlGithubApi && (
            <Button href={project.urlGithubApi}>
              <SiGithub className="size-4" />
              Repositório (API)
            </Button>
          )}
        </div>
        <p className="pt-6 text-sm">
          <span className="text-muted-50">Stack:</span> {stack}
        </p>
      </div>
    </Animate>
  )
}
