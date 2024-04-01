import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function TextLink(props: ComponentProps<'a'>) {
  return (
    <a
      className={twMerge(
        'font-medium text-strong underline underline-offset-2 transition-colors',
        'outline-offset-4 hover:text-primary focus-visible:outline-primary',
      )}
      {...props}
    />
  )
}
