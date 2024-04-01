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
        'xs:gap-2 group flex w-fit items-center gap-1.5',
        'text-strong font-medium underline-offset-4',
        'border-border-100 border-b',
        'hover:border-primary transition-colors duration-300',
        'focus-visible:outline-primary outline-offset-2',
      )}
      {...props}
    />
  )
}
