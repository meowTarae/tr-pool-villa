import { cn } from '@/lib/utils'

interface ImageSlotProps {
  label: string
  src?: string
  ratio?: 'wide' | 'portrait' | 'hero' | 'map'
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  className?: string
}

const ratioClass: Record<NonNullable<ImageSlotProps['ratio']>, string> = {
  wide: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  hero: 'aspect-[4/5] min-h-[100svh] md:aspect-auto',
  map: 'aspect-[4/3] md:aspect-[16/11]',
}

export function ImageSlot({
  label,
  src,
  ratio = 'wide',
  loading = 'lazy',
  fetchPriority = 'auto',
  className,
}: ImageSlotProps) {
  return (
    <figure
      data-image-slot={label}
      className={cn(
        'relative overflow-hidden bg-[#ddd6cc] text-[#6d675f]',
        ratioClass[ratio],
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={label}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(160deg,#e7e1d8_0%,#cfc6ba_48%,#b7c0b6_100%)]" />
          <figcaption className="absolute bottom-4 left-4 text-[11px] tracking-[0.18em] uppercase">
            {label}
          </figcaption>
        </>
      )}
    </figure>
  )
}
