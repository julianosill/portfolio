import { ReactNode } from 'react'

interface TechItemProps {
  children: ReactNode
}

export function TechItem({ children }: TechItemProps) {
  return (
    <div className="group flex items-center gap-2 text-xs hover:cursor-default">
      {children}
    </div>
  )
}
