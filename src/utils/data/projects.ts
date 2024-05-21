import { IProject } from '@/@types/project'
import { env } from '@/env'

export const projects: IProject[] = [
  {
    id: 'falaqueeuteescrevo',
    video: `${env.APP_URL}/falaqueeuteescrevo.mp4`,
    image: `${env.APP_URL}/falaqueeuteescrevo.jpg`,
    name: 'Fala que eu te escrevo',
    description:
      'Aplicação Web para transcrição de áudios e vídeos integrada à Azure Speech AI. Desenvolvida em Next.js 14, utilizando Material UI e conversão de áudio e vídeo feita com FFmpeg.',
    urlPreview: 'https://falaqueeuteescrevo.julianosill.com.br',
    urlGithub: 'https://github.com/julianosill/falaqueeuteescrevo',
    techs: [
      'Next.js 14',
      'React',
      'Azure Speech AI',
      'Material UI',
      'Redux',
      'FFmpeg',
    ],
  },
  {
    id: 'memonotes',
    video: `${env.APP_URL}/memonotes.mp4`,
    image: `${env.APP_URL}/memonotes.jpg`,
    name: 'Memonotes',
    description:
      'Aplicação Web para gerenciar notas de texto, com transcrição em tempo real (Speech to Text) e interface acessível e navegável pelo teclado. Desenvolvida em Next.js 14, integrando banco de dados Firebase (NoSQL) e autenticação via Google.',
    urlPreview: 'https://memonotes.julianosill.com.br',
    urlGithub: 'https://github.com/julianosill/memonotes',
    techs: [
      'Next.js 14',
      'React',
      'Firebase',
      'Next Auth',
      'Tailwind CSS',
      'Radix UI',
    ],
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
