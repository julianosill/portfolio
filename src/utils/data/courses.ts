import { ICareerItem } from '@/@types/career-item'

export const courses: ICareerItem[] = [
  {
    id: 'rocketseat',
    institution: 'Rocketseat',
    period: 'Set 2023 - Presente',
    position: 'Desenvolvimento Full Stack',
    description:
      'Curso abrangendo desde os fundamentos da programação até frameworks, desenvolvendo aplicações, APIs e testes automatizados. Aplicação dos princípios do SOLID, Clean Code e Clean Architecture, Domain-driven design, Test-driven development e CI/CD.',
    tools: [
      'Typescript',
      'React',
      'Next.js',
      'Node.js',
      'styled-components',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
      'SQLite',
      'Docker',
      'Vitest',
      'Jest',
      'Cypress',
      'Playwright',
    ],
  },
  {
    id: 'furb',
    institution: 'FURB',
    period: '2010 - 2015',
    position: 'Comunicação Social - Publicidade e Propaganda',
    description: 'Bacharel pela Universidade Regional de Blumenau (FURB)',
    tools: [],
  },
]
