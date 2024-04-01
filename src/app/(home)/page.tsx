import { Menu } from '@/components/menu/menu'

import { About } from './_about'
import { Hero } from './_hero'

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <About />
    </main>
  )
}
