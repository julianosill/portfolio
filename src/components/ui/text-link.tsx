import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function TextLink(props: ComponentProps<'a'>) {
  return (
    <a
      className={twMerge(
        'text-strong font-medium underline underline-offset-2 transition-colors',
        'hover:text-primary focus-visible:outline-primary outline-offset-4',
      )}
      {...props}
    />
  )
}
