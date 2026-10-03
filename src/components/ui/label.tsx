import { Label as LabelPrimitive } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn('text-xs tracking-[0.16em] text-stone uppercase', className)}
      {...props}
    />
  )
}

export { Label }
