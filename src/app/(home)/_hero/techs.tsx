import {
  SiDocker,
  SiFigma,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSqlite,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { Animate } from '@/components/animate'

import { TechItem } from './_components/tech-item'

export function Techs() {
  return (
    <Animate
      variant="fadeLeft"
      duration={0.65}
      delay={0.1}
      as="section"
      className="grid w-fit grid-cols-2 gap-x-6 gap-y-3 pt-8 sm:grid-cols-3 sm:gap-y-4 sm:pt-12 md:grid-cols-4"
    >
      <TechItem>
        <SiTypescript className="size-4 text-muted-100 transition-colors group-hover:text-[#3178C6] xs:size-5" />
        Typescript
      </TechItem>
      <TechItem>
        <SiReact className="size-4 text-muted-100 transition-colors group-hover:text-[#61DAFB] xs:size-5" />
        React
      </TechItem>
      <TechItem>
        <SiNextdotjs className="size-4 text-muted-100 transition-colors group-hover:text-[#000000] xs:size-5" />
        Next.js
      </TechItem>
      <TechItem>
        <SiNodedotjs className="size-4 text-muted-100 transition-colors group-hover:text-[#339933] xs:size-5" />
        Node.js
      </TechItem>

      <TechItem>
        <SiRedux className="size-4 text-muted-100 transition-colors group-hover:text-[#764ABC] xs:size-5" />
        Redux
      </TechItem>
      <TechItem>
        <SiTailwindcss className="size-4 text-muted-100 transition-colors group-hover:text-[#06B6D4] xs:size-5" />
        Tailwind CSS
      </TechItem>
      <TechItem>
        <SiStyledcomponents className="size-4 text-muted-100 transition-colors group-hover:text-[#DB7093] xs:size-5" />
        styled-components
      </TechItem>

      <TechItem>
        <SiPostgresql className="size-4 text-muted-100 transition-colors group-hover:text-[#4169E1] xs:size-5" />
        PostgreSQL
      </TechItem>
      <TechItem>
        <SiSqlite className="size-4 text-muted-100 transition-colors group-hover:text-[#003B57] xs:size-5" />
        SQLite
      </TechItem>
      <TechItem>
        <SiFirebase className="size-4 text-muted-100 transition-colors group-hover:text-[#FFCA28] xs:size-5" />
        Firebase
      </TechItem>
      <TechItem>
        <SiDocker className="size-4 text-muted-100 transition-colors group-hover:text-[#2496ED] xs:size-5" />
        Docker
      </TechItem>

      <TechItem>
        <SiFigma className="size-4 text-muted-100 transition-colors group-hover:text-[#F24E1E] xs:size-5" />
        Figma
      </TechItem>
    </Animate>
  )
}
