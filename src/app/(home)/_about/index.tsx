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
          Desenvolvedor Front-End com 2+ anos de experiência em aplicações web e
          uma base sólida de 10 anos em design, combinando visão estética com
          expertise técnica para criar produtos digitais eficientes, escaláveis
          e centrados no usuário.
        </Animate>
        <Animate delay={0.1} as="p">
          Atuo no desenvolvimento de soluções utilizando TypeScript, React,
          Next.js e Node.js, com foco em performance, acessibilidade e boas
          práticas de código. Minhas contribuições incluem a refatoração de
          aplicações (redução de 35% na base de código), otimização de
          performance (aumento de 25% nas visitas) e implementação de fluxos que
          melhoraram métricas de negócio (aumento de 50% em conversões).
        </Animate>
        <Animate delay={0.15} as="p">
          Paralelamente, atuo como Desenvolvedor Full Stack e Líder Técnico
          voluntário em uma Social Tech, onde contribuo ativamente na
          arquitetura de sistemas, implementação de pipelines de CI/CD,
          gerenciamento de infraestrutura na AWS com Terraform e mentoria de
          equipes para adoção de boas práticas e garantia de qualidade.
        </Animate>
      </div>

      <Knowledge />
    </section>
  )
}
