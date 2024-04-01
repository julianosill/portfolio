import { Milestone } from 'lucide-react'

import { Animate } from '@/components/animate'
import { Title } from '@/components/ui/title'

import { Additional } from './additional'
import { Companies } from './companies'
import { Education } from './education'

export function Career() {
  return (
    <section id="career" className="mx-auto w-10/12 max-w-2xl pt-20 md:pt-24">
      <Title asChild className="mb-10 md:mb-12">
        <Animate as="h2">
          <Milestone className="text-border-50 size-6 min-w-6" />
          Minha trajetória
        </Animate>
      </Title>
      <Animate delay={0.05} as="p">
        Ao longo da carreira, atuei em agências de comunicação, produtora de
        eventos e editora, em posições relacionadas ao design e marketing. Somei
        experiências em mercados B2B e B2C, aprimorando e desenvolvendo minhas
        habilidades técnicas, de comunicação e trabalho em equipe. Abaixo estão
        as minhas atuações mais recentes.
      </Animate>

      <Companies />
      <Education />
      <Additional />
    </section>
  )
}