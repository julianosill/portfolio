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
          (Avançado), Espanhol (Básico), Português (Nativo).
        </li>
        <li>
          <span className="font-medium text-highlighted">
            Linguagens e tecnologias:
          </span>{' '}
          Javascript, Typescript, React, Next.js, Node.js, HTML, CSS, SASS, Git.
        </li>
        <li>
          <span className="font-medium text-highlighted">
            Bibliotecas e ferramentas:
          </span>{' '}
          React Query, React Hook Form, Redux, Tailwind CSS, styled-components,
          Bootstrap, Framer Motion, Docker, Figma.
        </li>
        <li>
          <span className="font-medium text-highlighted">
            Testes automatizados:
          </span>{' '}
          unitários, integração (E2E), React Testing Library, Cypress,
          Playwright, Jest.
        </li>
        <li>
          <span className="font-medium text-highlighted">
            Banco de dados SQL e NoSQL:
          </span>{' '}
          PostgreSQL, SQLite, Firebase.
        </li>
        <li>
          <span className="font-medium text-highlighted">Conceitos:</span>{' '}
          Design Pattern, Composition Pattern, Atomic Design, Git Flow, SOLID,
          Clean Code, Clean Architecture, Domain-driven design, Test-driven
          development, DevOps, CI/CD.
        </li>

        <li>
          <span className="font-medium text-highlighted">
            Metodologias ágeis:
          </span>{' '}
          Scrum, Kanban, Jira.
        </li>
      </Animate>
    </div>
  )
}
