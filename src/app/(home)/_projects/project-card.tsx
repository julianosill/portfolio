import { Eye } from 'lucide-react'
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
  const techs = project.techs.map((tech) => tech).join(', ')
  const delay = baseDelay + index * 0.1

  return (
    <Animate
      long
      delay={delay}
      className={twMerge(
        'border-border-50 bg-card overflow-hidden rounded-xl border md:col-span-2',
        isCentered && 'md:col-start-2',
      )}
    >
      <video
        className="aspect-video object-cover"
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
      <div className="p-6 xl:p-8">
        <h3 className="text-strong text-xl font-medium">{project.name}</h3>
        <p className="pt-2 text-sm xl:text-base">{project.description}</p>
        <div className="flex flex-wrap items-center gap-2 pt-6">
          {project.urlPreview && (
            <Button href={project.urlPreview}>
              <Eye className="size-4" />
              Preview
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
