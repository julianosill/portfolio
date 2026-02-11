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
    title: 'Front-End',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'SWR',
      'Tanstack Query',
      'Redux',
      'Zod',
      'Tailwind CSS',
      'Material UI',
      'SASS',
      'Bootstrap',
    ],
  },
  {
    title: 'Back-End & DevOps',
    items: [
      'Node.js',
      'NestJS',
      'Express',
      'Hono',
      'Prisma',
      'TypeORM',
      'APIs REST',
      'Docker',
      'AWS (ECS, Lambda, S3, SES, SNS, SQS)',
      'Terraform',
      'CI/CD',
    ],
  },
  {
    title: 'Qualidade e testes',
    items: [
      'Jest',
      'React Testing Library',
      'Cypress',
      'Playwright',
      'SonarQube',
    ],
  },
  {
    title: 'Banco de dados SQL e NoSQL',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    title: 'Ferramentas e metodologias',
    items: ['Git', 'Figma', 'Jira', 'Scrum', 'Kanban'],
  },
  {
    title: 'Arquitetura e princípios',
    items: [
      'Clean Code',
      'Design Patterns',
      'Git Flow',
      'Clean Architecture',
      'SOLID',
      'DRY',
      'YAGNI',
      'KISS',
    ],
  },
  {
    title: 'Idiomas',
    items: ['Inglês (Avançado)', 'Espanhol (Básico)', 'Português (Nativo)'],
  },
]
