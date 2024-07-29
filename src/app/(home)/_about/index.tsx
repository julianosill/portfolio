import { UserRound } from 'lucide-react'

import { Animate } from '@/components/animate'
import { Title } from '@/components/ui/title'

import { Knowledge } from './knowledge'

export function About() {
  return (
    <section id="about-me" className="mx-auto w-10/12 max-w-2xl pt-20 md:pt-24">
      <Title asChild className="mb-10 md:mb-12">
        <Animate as="h2">
          <UserRound className="size-6 min-w-6 text-border-50" />
          Quem eu sou
        </Animate>
      </Title>
      <div className="space-y-4">
        <Animate delay={0.05} as="p">
          Possuo habilidades sólidas em Typescript, React, Next, Node e mais de
          10 anos de experiência em design. Atuei em mercados B2B e B2C, onde
          aprimorei minhas habilidades técnicas, de comunicação, organização e
          trabalho em equipe.
        </Animate>
        <Animate delay={0.1} as="p">
          Também atuo como Desenvolvedor Front-End voluntário em um projeto
          colaborativo, contribuindo na criação, implementação e manutenção de
          componentes e funcionalidades, integrando APIs e assegurando a
          qualidade através de revisões de código da equipe e metodologias
          ágeis.
        </Animate>
      </div>

      <Knowledge />
    </section>
  )
}
