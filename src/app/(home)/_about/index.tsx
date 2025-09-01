import { UserRound } from 'lucide-react'

import { Animate } from '@/components'
import { Title } from '@/components/ui'

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
          Desenvolvedor Front-End com 2 anos de experiência em aplicações web e
          10 anos em design, unindo visão técnica e estética para entregar
          produtos de alto impacto. Trabalho com Typescript, React, Next.js,
          Node.js e tecnologias modernas de front e back-end, desenvolvendo
          soluções para mercados B2B e B2C.
        </Animate>
        <Animate delay={0.1} as="p">
          Além da experiência profissional, atuo como Desenvolvedor Full Stack e
          Líder Técnico voluntário em uma Social Tech, contribuindo na
          arquitetura de sistemas, integração de APIs, mentoria de equipes e
          implantação de pipelines de CI/CD. Participo de projetos que adotam
          metodologias ágeis, contribuindo para um fluxo de desenvolvimento mais
          organizado e colaborativo e busco constantemente aplicar boas práticas
          no desenvolvimento de software.
        </Animate>
      </div>

      <Knowledge />
    </section>
  )
}
