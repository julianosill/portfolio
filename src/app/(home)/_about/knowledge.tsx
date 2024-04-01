import { Animate } from '@/components/animate'

export function Knowledge() {
  return (
    <div className="pt-8">
      <Animate delay={0.15} as="h3" className="text-strong font-medium">
        Conhecimentos em:
      </Animate>
      <Animate delay={0.2} as="ul" className="space-y-2 pt-4 text-sm">
        <li>
          <span className="text-highlighted font-medium">Stack:</span>{' '}
          Javascript, Typescript, Node.js, PHP
        </li>
        <li>
          <span className="text-highlighted font-medium">
            Libs e Frameworks:
          </span>{' '}
          React, Next.js, React Query, React Hook Form, Redux, TailwindCSS,
          Charts.js, styled-components, SASS, Radix UI, Zustand, NestJS, Prisma
          ORM
        </li>
        <li>
          <span className="text-highlighted font-medium">Testes:</span>{' '}
          Unitários, E2E, Cypress, Playwright, Jest, Vitest, MSW, Happy DOM
        </li>
        <li>
          <span className="text-highlighted font-medium">Banco de dados:</span>{' '}
          PostgreSQL, SQLite, Firebase, Docker
        </li>
        <li>
          <span className="text-highlighted font-medium">Conceitos:</span>{' '}
          Design Patterns, SOLID, Clean Code e Clean Architecture, CI/CD,
          Domain-driven design, Test-driven development, Programação orientada a
          objetos
        </li>
        <li>
          <span className="text-highlighted font-medium">Idiomas:</span> Inglês
          (Avançado), Espanhol (Básico), Português (Nativo)
        </li>
        <li>
          <span className="text-highlighted font-medium">Metodologias:</span>{' '}
          Scrum e Kanban
        </li>
      </Animate>
    </div>
  )
}
