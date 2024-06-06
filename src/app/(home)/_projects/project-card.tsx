import { Construction, Eye } from 'lucide-react'
import Image from 'next/image'
import { SiGithub } from 'react-icons/si'
import { twMerge } from 'tailwind-merge'

import { IProject } from '@/@types/project'
import { Animate } from '@/components/animate'

import { Button } from '../../../components/ui/button'

interface ProjectCardProps {
  project: IProject
  baseDelay?: number
  index: number
  isCentered?: boolean
}

export function ProjectCard({
  project,
  baseDelay = 0,
  index,
  isCentered,
}: ProjectCardProps) {
  const techs = project.techs.map((tech) => tech).join(', ') + '.'
  const delay = baseDelay + index * 0.1

  return (
    <Animate
      long
      delay={delay}
      className={twMerge(
        'flex flex-col overflow-hidden rounded-xl border border-border-50 bg-card md:col-span-2',
        isCentered && 'md:col-start-2',
      )}
    >
      <video
        className="aspect-video border-b border-border-50 object-cover"
        width="720"
        height="405"
        autoPlay
        playsInline
        loop
        muted
        poster={project.image}
      >
        <source src={project.video} type="video/mp4" />
        <Image
          src={project.image}
          width={720}
          height={405}
          alt="Imagem com a tela inicial da aplicação"
          className="aspect-video object-cover"
        />
      </video>
      <div className="flex flex-1 flex-col p-6 xl:p-8">
        <h3 className="text-xl font-medium text-strong">{project.name}</h3>
        <p className="pt-2 text-sm xl:text-base">{project.description}</p>
        <div className="flex flex-1 flex-wrap items-start gap-2 pt-6">
          {project.pending && (
            <div className="flex cursor-default items-center gap-2 rounded-md border border-border-100 px-3 py-1.5 text-sm font-medium text-highlighted">
              <Construction className="size-4" />
              Em desenvolvimento
            </div>
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
          <span className="text-muted-50">Techs:</span> {techs}
        </p>
      </div>
    </Animate>
  )
}
