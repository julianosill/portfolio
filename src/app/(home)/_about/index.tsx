import { UserRound } from 'lucide-react'

import { Animate } from '@/components/animate'
import { Title } from '@/components/ui/title'

import { Knowledge } from './knowledge'

export function About() {
  return (
    <section id="about-me" className="mx-auto w-10/12 max-w-2xl pt-20 md:pt-24">
      <Title asChild className="mb-10 md:mb-12">
        <Animate as="h2">
          <UserRound className="text-border-50 size-6 min-w-6" />
          Quem eu sou
        </Animate>
      </Title>
      <div className="space-y-4">
        <Animate delay={0.05} as="p">
          Iniciei a carreira como Designer Gráfico, me graduei em Publicidade e
          Propaganda e trabalhei com design por mais de 10 anos. Somei
          experiências em mercados B2B e B2C, aprimorando e desenvolvendo minhas
          habilidades técnicas, de comunicação, organização e trabalho em
          equipe.
        </Animate>
        <Animate delay={0.1} as="p">
          Minha atuação segue alinhada às boas práticas no desenvolvimento,
          mantendo a legibilidade e manutenibilidade do código. Com minha
          experiência em design, faço bom uso dos conceitos de UI e UX para
          desenvolver aplicações práticas, acessíveis e intuitivas,
          proporcionando uma boa experiência aos usuários.
        </Animate>
      </div>

      <Knowledge />
    </section>
  )
}
