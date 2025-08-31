import { ReactNode } from 'react'

interface StackItemProps {
  children: ReactNode
}

export function StackItem({ children }: StackItemProps) {
  return (
    <div className="group flex items-center gap-2 text-xs hover:cursor-default">
      {children}
    </div>
  )
}
