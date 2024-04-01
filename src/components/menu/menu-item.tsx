'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function MenuItem(props: ComponentProps<'a'>) {
  return (
    <a
      className={twMerge(
        'whitespace-nowrap max-sm:py-4 max-sm:text-lg',
        'text-center transition-all hover:text-strong',
        'sm:border-b sm:border-transparent sm:hover:border-primary',
        'outline-offset-2 focus-visible:outline-primary',
      )}
      {...props}
    />
  )
}
