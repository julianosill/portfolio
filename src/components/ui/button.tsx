import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'a'> {
  asChild?: boolean
}

export function Button({ className, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      className={twMerge(
        'border-border-100 text-highlighted flex items-center justify-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors',
        'hover:border-primary hover:bg-primary hover:text-white',
        'focus-visible:border-primary focus-visible:outline-primary',
        className,
      )}
      {...props}
    />
  )
}
