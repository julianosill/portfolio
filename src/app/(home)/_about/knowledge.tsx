import { Animate } from '@/components'

export function Knowledge() {
  return (
    <div className="pt-8">
      <Animate delay={0.15} as="h3" className="font-medium text-strong">
        Principais habilidades e conhecimentos:
      </Animate>

      <Animate delay={0.2} as="ul" className="space-y-2 pt-4 text-sm">
        {SKILLS.map((item) => (
          <li key={item.title}>
            <span className="font-medium text-highlighted">{item.title}:</span>{' '}
            {item.items.join(', ')}.
          </li>
        ))}
      </Animate>
    </div>
  )
}

const SKILLS = [
  {
    title: 'Linguagens e tecnologias',
    items: [
      'Javascript',
      'Typescript',
      'React',
      'Next.js',
      'Node.js',
      'NestJS',
      'Git',
      'AWS',
    ],
  },
  {
    title: 'Bibliotecas e ferramentas',
    items: [
      'Tanstack Query',
      'React Hook Form',
      'Redux',
      'Tailwind CSS',
      'Bootstrap',
      'Framer Motion',
      'Docker',
      'Figma',
    ],
  },
  {
    title: 'Testes automatizados',
    items: [
      'unitários',
      'integração (E2E)',
      'React Testing Library',
      'Cypress',
      'Playwright',
      'Jest',
    ],
  },
  {
    title: 'Banco de dados SQL e NoSQL',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    title: 'Conceitos',
    items: [
      'Design Pattern',
      'Composition Pattern',
      'Atomic Design',
      'Git Flow',
      'SOLID',
      'Clean Code',
      'Clean Architecture',
      'Domain-driven design',
      'Test-driven development',
      'DevOps',
      'CI/CD',
    ],
  },
  {
    title: 'Metodologias ágeis',
    items: ['Scrum', 'Kanban', 'Jira'],
  },
  {
    title: 'Idiomas',
    items: ['Inglês (Avançado)', 'Espanhol (Básico)', 'Português (Nativo)'],
  },
]
