import type { ICourseItem } from '@/@types/course-item'

export const courses: ICourseItem[] = [
  {
    id: 'rocketseat',
    institution: 'Rocketseat',
    period: 'Set 2023 - Set 2024',
    position: 'Desenvolvimento Full Stack',
    description:
      'Fundamentos da programação, desenvolvendo aplicações com React, Next e Node. Criação e integração a APIs Rest, testes automatizados (unitários e de integração), princípios SOLID, Código Limpo, Arquitetura Limpa, Domain-Driven Design, Test-Driven Development, CI/CD e DevOps.',
  },
  {
    id: 'furb',
    institution: 'FURB',
    period: 'Fev 2010 - Dez 2014',
    position: 'Comunicação Social - Publicidade e Propaganda',
    description: 'Bacharel pela Universidade Regional de Blumenau (FURB).',
  },
]
