import { SiLinkedin } from 'react-icons/si'

import { Animate } from '@/components/animate'
import { Button } from '@/components/ui/button'

export function Additional() {
  return (
    <Animate
      delay={0.1}
      className="mt-8 flex gap-4 rounded-lg bg-card px-5 py-4 max-md:flex-col md:mt-12 md:items-center"
    >
      <p className="flex-1 text-sm">
        Confira meu perfil completo, cursos e certificados no LinkedIn.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button href="https://www.linkedin.com/in/julianosill">
          <SiLinkedin className="size-4" />
          Ver LinkedIn
        </Button>
      </div>
    </Animate>
  )
}
