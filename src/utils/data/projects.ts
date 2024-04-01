import { IProject } from '@/@types/project'
import { env } from '@/env'

export const projects: IProject[] = [
  {
    id: 'memonotes',
    video: `${env.APP_URL}/memonotes.mp4`,
    image: `${env.APP_URL}/memonotes.jpg`,
    name: 'Memonotes',
    description:
      'Aplicação web para gerenciar notas de texto, incluindo transcrição em tempo real (Speech to Text). Desenvolvida com a Speech Recognition Web API e com uma interface animada, acessível e navegável pelo teclado.',
    urlPreview: 'https://memonotes-js.vercel.app',
    urlGithub: 'https://github.com/julianosill/memonotes',
    techs: ['Next.js', 'React', 'Tailwind CSS', 'Zustand', 'Radix UI'],
  },
  {
    id: 'pizzashop',
    video: `${env.APP_URL}/pizzashop.mp4`,
    image: `${env.APP_URL}/pizzashop.jpg`,
    name: 'Pizza Shop',
    description:
      'Dashboard para gerenciamento de pedidos de delivery, com gráficos e métricas. Faz uso de cache nas requisições com React Query, reduzindo o uso de recursos da API e melhorando a experiência de uso.',
    urlGithub: 'https://github.com/julianosill/ignite-pizzashop-web',
    urlGithubApi: 'https://github.com/julianosill/bun-pizzashop-api',
    techs: [
      'React',
      'React Query',
      'React Hook Form',
      'Vitest',
      'Playwright',
      'MSW',
      'Tailwind CSS',
      'ReCharts',
      'Bun',
      'Drizzle ORM',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    id: 'foodexplorer',
    video: `${env.APP_URL}/foodexplorer.mp4`,
    image: `${env.APP_URL}/foodexplorer.jpg`,
    name: 'Food Explorer',
    description:
      'Aplicação Full Stack (React e Node.js) de um cardápio on-line para um restaurante fictício, possibilitando a consulta de produtos, realização de pedidos e administração pelos gerentes.',
    urlPreview: 'https://js-food-explorer-web.netlify.app',
    urlGithub: 'https://github.com/julianosill/rocketseat-food-explorer-web',
    urlGithubApi: 'https://github.com/julianosill/rocketseat-food-explorer-api',
    techs: [
      'React',
      'styled-components',
      'React Router',
      'Node.js',
      'Express',
      'Knex.js',
      'SQLite3',
      'JWT',
      'Multer',
    ],
  },
]
