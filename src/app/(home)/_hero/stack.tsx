import {
  SiDocker,
  SiFigma,
  SiFirebase,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { Animate } from '@/components'

import { StackItem } from './_components/stack-item'

export function Stack() {
  return (
    <Animate
      variant="fadeLeft"
      duration={0.65}
      delay={0.1}
      as="section"
      className="grid w-fit grid-cols-2 gap-x-6 gap-y-3 pt-8 sm:grid-cols-3 sm:gap-y-4 sm:pt-12 md:grid-cols-4"
    >
      <StackItem>
        <SiTypescript className="size-4 text-muted-100 transition-colors group-hover:text-[#3178C6] xs:size-5" />
        Typescript
      </StackItem>
      <StackItem>
        <SiReact className="size-4 text-muted-100 transition-colors group-hover:text-[#61DAFB] xs:size-5" />
        React
      </StackItem>
      <StackItem>
        <SiNextdotjs className="size-4 text-muted-100 transition-colors group-hover:text-[#000000] xs:size-5" />
        Next.js
      </StackItem>
      <StackItem>
        <SiNodedotjs className="size-4 text-muted-100 transition-colors group-hover:text-[#339933] xs:size-5" />
        Node.js
      </StackItem>
      <StackItem>
        <SiNestjs className="size-4 text-muted-100 transition-colors group-hover:text-[#EA2849] xs:size-5" />
        NestJS
      </StackItem>

      <StackItem>
        <SiRedux className="size-4 text-muted-100 transition-colors group-hover:text-[#764ABC] xs:size-5" />
        Redux
      </StackItem>
      <StackItem>
        <SiTailwindcss className="size-4 text-muted-100 transition-colors group-hover:text-[#06B6D4] xs:size-5" />
        Tailwind CSS
      </StackItem>

      <StackItem>
        <SiPostgresql className="size-4 text-muted-100 transition-colors group-hover:text-[#4169E1] xs:size-5" />
        PostgreSQL
      </StackItem>
      <StackItem>
        <SiSqlite className="size-4 text-muted-100 transition-colors group-hover:text-[#003B57] xs:size-5" />
        SQLite
      </StackItem>
      <StackItem>
        <SiFirebase className="size-4 text-muted-100 transition-colors group-hover:text-[#FFCA28] xs:size-5" />
        Firebase
      </StackItem>
      <StackItem>
        <SiDocker className="size-4 text-muted-100 transition-colors group-hover:text-[#2496ED] xs:size-5" />
        Docker
      </StackItem>

      <StackItem>
        <SiFigma className="size-4 text-muted-100 transition-colors group-hover:text-[#F24E1E] xs:size-5" />
        Figma
      </StackItem>
    </Animate>
  )
}
