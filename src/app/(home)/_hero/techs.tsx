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
        <SiTypescript className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#3178C6]" />
        Typescript
      </TechItem>
      <TechItem>
        <SiReact className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#61DAFB]" />
        React
      </TechItem>
      <TechItem>
        <SiNextdotjs className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#000000]" />
        Next.js
      </TechItem>
      <TechItem>
        <SiNodedotjs className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#339933]" />
        Node.js
      </TechItem>

      <TechItem>
        <SiRedux className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#764ABC]" />
        Redux
      </TechItem>
      <TechItem>
        <SiTailwindcss className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#06B6D4]" />
        Tailwind CSS
      </TechItem>
      <TechItem>
        <SiStyledcomponents className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#DB7093]" />
        styled-components
      </TechItem>

      <TechItem>
        <SiPostgresql className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#4169E1]" />
        PostgreSQL
      </TechItem>
      <TechItem>
        <SiSqlite className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#003B57]" />
        SQLite
      </TechItem>
      <TechItem>
        <SiFirebase className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#FFCA28]" />
        Firebase
      </TechItem>
      <TechItem>
        <SiDocker className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#2496ED]" />
        Docker
      </TechItem>

      <TechItem>
        <SiFigma className="text-muted-100 xs:size-5 size-4 transition-colors group-hover:text-[#F24E1E]" />
        Figma
      </TechItem>
    </Animate>
  )
}
