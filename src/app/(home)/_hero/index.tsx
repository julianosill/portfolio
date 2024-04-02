import { ArrowDown, LayoutGrid, UserRound } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

import { Animate } from '@/components/animate'
import { Button } from '@/components/ui/button'

import { SmoothLink } from './_components/smooth-link'
import { Techs } from './techs'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto flex min-h-screen w-10/12 max-w-2xl flex-col justify-center py-24">
        <Animate
          variant="fadeLeft"
          as="h1"
          className="text-4xl font-bold tracking-tight text-strong sm:pt-12 sm:text-6xl"
        >
          Juliano Sill
        </Animate>
        <div className="space-y-3 pt-6 max-sm:leading-snug sm:pt-8 sm:text-lg">
          <Animate variant="fadeLeft" duration={0.55} delay={0.05} as="p">
            <span className="text-strong">Desenvolvedor Front-End</span>, movido
            a café e curiosidade, com habilidades sólidas em{' '}
            <span className="text-highlighted">Typescript</span>,{' '}
            <span className="text-highlighted">React</span>,{' '}
            <span className="text-highlighted">Next.js</span> e{' '}
            <span className="text-highlighted">Node.js</span>.
          </Animate>
          <Animate variant="fadeLeft" duration={0.6} delay={0.05} as="p">
            Agregando mais de 10 anos de experiência em design no
            desenvolvimento de interfaces cativantes e intuitivas.
          </Animate>
        </div>

        <Techs />

        <section className="flex flex-col justify-between pt-12 max-sm:gap-12 max-xs:gap-8 sm:flex-row sm:items-center sm:pt-16 md:pt-24">
          <div className="flex flex-wrap items-center gap-6 max-xs:text-sm sm:gap-8">
            <SmoothLink href="#about-me" duration={0.65} delay={0.2}>
              <UserRound className="size-4 text-border-100 transition-colors group-hover:text-primary xs:size-5" />
              Sobre mim
            </SmoothLink>
            <SmoothLink href="#projects" duration={0.7} delay={0.25}>
              <LayoutGrid className="size-4 text-border-100 transition-colors group-hover:text-primary xs:size-5" />
              Projetos que desenvolvi
            </SmoothLink>
          </div>

          <div className="flex items-center gap-4">
            <Button
              href="https://www.linkedin.com/in/julianosill"
              className="size-8 p-0 xs:size-9"
              asChild
            >
              <Animate duration={0.75} delay={0.3} as="a">
                <SiLinkedin className="size-4 xs:size-5" />
                <span className="sr-only">LinkedIn</span>
              </Animate>
            </Button>
            <Button
              href="https://github.com/julianosill"
              className="size-8 p-0 xs:size-9"
              asChild
            >
              <Animate duration={0.8} delay={0.35} as="a">
                <SiGithub className="size-4 xs:size-5" />
                <span className="sr-only">Github</span>
              </Animate>
            </Button>
          </div>
        </section>
      </div>

      <a
        href="#about-me"
        aria-label="Rolar para próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-50 outline-offset-4 transition-colors hover:text-strong focus-visible:outline-primary"
      >
        <ArrowDown className="size-5 animate-bounce-slow" />
      </a>
    </section>
  )
}
