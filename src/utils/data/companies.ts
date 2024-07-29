import { ICareerItem } from '@/@types/career-item'

export const companies: ICareerItem[] = [
  {
    id: 'soujunior-labs',
    company: 'SouJunior Labs',
    period: 'Jul 2024 - Presente',
    type: 'Voluntário / Remoto',
    position: 'Desenvolvedor Front-End Jr',
    activities: [
      {
        id: 'sj-1',
        text: 'Atuação de forma colaborativa com POs, PMs, designers, desenvolvedores e QAs no desenvolvimento e melhoria contínua da plataforma;',
      },
      {
        id: 'sj-2',
        text: 'Desenvolvimento com Typescript, Next, Tailwind CSS e shadcn/ui, a partir de protótipos do Figma;',
      },
      {
        id: 'sj-3',
        text: 'Aplicação de conceitos como Git Flow, Design Responsivo, Composition Pattern, Clean Code;',
      },
      {
        id: 'sj-4',
        text: 'Uso de metodologias ágeis (Scrum, Kanban e Jira) no controle e gestão de tarefas;',
      },
      {
        id: 'sj-5',
        text: 'Revisão e análise do código, assegurando sua qualidade e boas práticas no desenvolvimento.',
      },
    ],
  },
  {
    id: 'inspiracom-web',
    company: 'Inspiracom',
    period: 'Dez 2023 - Presente',
    type: 'Freelancer / Remoto',
    position: 'Web Designer e Desenvolvedor Front-End Jr',
    activities: [
      {
        id: 'iw-1',
        text: 'Desenvolvimento de aplicações web com React, Next, Typescript e Node;',
      },
      {
        id: 'iw-2',
        text: 'Desenvolvimento de sites com Javascript, Tailwind CSS, jQuery, PHP (Wordpress), HTML e CSS;',
      },
      {
        id: 'iw-3',
        text: 'Criação de layouts e protótipos (UI/UX design) para sites institucionais utilizando Figma.',
      },
    ],
  },
  {
    id: 'dnaeditora',
    company: 'DNA Editora',
    period: 'Jun 2019 - Mar 2023',
    type: 'Integral / Remoto',
    position: 'Visual e Web Designer',
    activities: [
      {
        id: 'dna-1',
        text: 'Liderança da equipe com 3 designers, aprimorando a organização, trabalho em equipe e comunicação assíncrona;',
      },
      {
        id: 'dna-2',
        text: 'Desenvolvimento de projetos gráficos, padrões e identidades visuais para projetos editoriais.',
      },
    ],
  },
]
