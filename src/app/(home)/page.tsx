import { Menu } from '@/components/menu/menu'

import { About } from './_about'
import { Career } from './_career'
import { Hero } from './_hero'
import { Projects } from './_projects'

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <About />
      <Projects />
      <Career />
    </main>
  )
}
