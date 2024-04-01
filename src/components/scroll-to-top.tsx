'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpFromLine } from 'lucide-react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    tap: { scale: 0.9 },
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 420 ? setIsVisible(true) : setIsVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileTap="tap"
          onClick={handleScrollToTop}
          className={twMerge(
            'fixed bottom-4 right-4 rounded-md border p-2',
            'border-border-50 bg-card text-foreground',
            'hover:border-primary hover:bg-primary hover:text-white',
            'focus-visible:border-primary focus-visible:outline-primary',
          )}
        >
          <ArrowUpFromLine className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
