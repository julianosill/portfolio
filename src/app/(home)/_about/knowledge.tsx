import { Animate } from '@/components/animate'

export function Knowledge() {
  return (
    <div className="pt-8">
      <Animate delay={0.15} as="h3" className="font-medium text-strong">
        Conhecimentos e habilidades em:
      </Animate>
      <Animate delay={0.2} as="ul" className="space-y-2 pt-4 text-sm">
        <li>
          <span className="font-medium text-highlighted">Idiomas:</span> Inglês
          (Avançado), Espanhol (Básico), Português (Nativo)
        </li>
        <li>
          <span className="font-medium text-highlighted">
            Linguagens e tecnologias:
          </span>{' '}
          Javascript, Typescript, Node.js, React, Next.js, NestJS, PHP
        </li>
        <li>
          <span className="font-medium text-highlighted">Bibliotecas:</span>{' '}
          React Query, React Hook Form, Redux, SASS, Tailwind CSS,
          styled-components
        </li>
        <li>
          <span className="font-medium text-highlighted">
            Testes automatizados:
          </span>{' '}
          unitários, E2E, Cypress, Playwright, Jest, Vitest
        </li>
        <li>
          <span className="font-medium text-highlighted">
            Banco de dados SQL e NoSQL:
          </span>{' '}
          PostgreSQL, SQLite, Firebase, Docker
        </li>
        <li>
          <span className="font-medium text-highlighted">Conceitos:</span>{' '}
          Design Patterns, SOLID, Clean Code e Clean Architecture, CI/CD,
          Domain-driven design, Test-driven development
        </li>

        <li>
          <span className="font-medium text-highlighted">Metodologias:</span>{' '}
          Scrum e Kanban
        </li>
      </Animate>
    </div>
  )
}
