import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'min-h-32 w-full resize-none border-b border-line bg-transparent px-0 py-3 text-sm leading-7 text-ink outline-none transition-colors placeholder:text-stone/70 focus:border-forest',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
