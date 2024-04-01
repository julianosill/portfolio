'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function MenuItem(props: ComponentProps<'a'>) {
  return (
    <a
      className={twMerge(
        'whitespace-nowrap max-sm:py-4 max-sm:text-lg',
        'hover:text-strong text-center transition-all',
        'sm:hover:border-primary sm:border-b sm:border-transparent',
        'focus-visible:outline-primary outline-offset-2',
      )}
      {...props}
    />
  )
}
