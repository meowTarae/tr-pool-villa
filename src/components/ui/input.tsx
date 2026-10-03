import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-12 w-full border-b border-line bg-transparent px-0 text-sm text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-forest',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
