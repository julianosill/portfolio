import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Animate } from '@/components/animate'

interface SmoothLinkProps extends ComponentProps<'a'> {
  delay?: number
  duration?: number
}

export function SmoothLink({ delay, duration, ...props }: SmoothLinkProps) {
  return (
    <Animate
      duration={duration}
      delay={delay}
      as="a"
      className={twMerge(
        'group flex w-fit items-center gap-1.5 xs:gap-2',
        'font-medium text-strong underline-offset-4',
        'border-b border-border-100',
        'transition-colors duration-300 hover:border-primary',
        'outline-offset-2 focus-visible:outline-primary',
      )}
      {...props}
    />
  )
}
