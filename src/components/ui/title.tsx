import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TitleProps extends ComponentProps<'h2'> {
  asChild?: boolean
}

export function Title({ className, asChild, ...props }: TitleProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={twMerge(
        'border-border-50 text-strong flex items-center gap-2 border-b pb-1 text-xl font-medium leading-tight',
        className,
      )}
      {...props}
    />
  )
}
