'use client'

import { motion } from 'framer-motion'
import { ElementType, HTMLAttributes } from 'react'

interface AnimateProps extends HTMLAttributes<HTMLElement> {
  variant?: 'fadeUp' | 'fadeDown' | 'fadeLeft'
  long?: boolean
  duration?: number
  delay?: number
  asChild?: boolean
  as?: ElementType
}

export function Animate({
  variant = 'fadeUp',
  long,
  duration,
  delay,
  as: Tag = 'div',
  children,
  ...props
}: AnimateProps) {
  const animateVariants = {
    fadeUp: {
      opacity: 0,
      y: long ? 40 : 20,
    },
    fadeDown: {
      opacity: 0,
      y: long ? -40 : -20,
    },
    fadeLeft: {
      opacity: 0,
      x: long ? 60 : 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration ?? 0.5,
        delay,
      },
    },
  }

  const MotionTag = motion(Tag)

  return (
    <MotionTag
      variants={animateVariants}
      initial={variant}
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
