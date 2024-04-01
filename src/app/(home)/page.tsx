import { Menu } from '@/components/menu/menu'
import { ScrollToTop } from '@/components/scroll-to-top'

import { About } from './_about'
import { Career } from './_career'
import { Contact } from './_contact'
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
      <Contact />
      <ScrollToTop />
    </main>
  )
}
