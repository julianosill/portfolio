import { cva, type VariantProps } from 'class-variance-authority'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { cn } from '@/helpers'

const markdownVariants = cva(
  'prose text-foreground marker:text-muted-50 prose-headings:font-medium prose-headings:text-strong prose-strong:font-medium prose-strong:text-highlighted',
  {
    variants: {
      variant: {
        default: '',
        career:
          'prose-p:my-2 prose-ul:my-0 prose-ul:pl-4 prose-ul:leading-snug prose-li:mb-0 prose-li:mt-2 prose-li:p-0',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

interface MarkdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof markdownVariants> {
  source: string
  as?: React.ElementType
}
export async function Markdown({
  source,
  variant,
  className,
  as: Component = 'div',
  ...props
}: MarkdownProps) {
  return (
    <Component
      className={cn(markdownVariants({ variant, className }))}
      {...props}
    >
      <MDXRemote source={source} />
    </Component>
  )
}
