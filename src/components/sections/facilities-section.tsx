import { ImageSlot } from '@/components/image-slot'
import { facilities } from '@/data/content'
import { cn } from '@/lib/utils'

export function FacilitiesSection() {
  return (
    <section id="facilities" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <p className="text-[11px] tracking-[0.22em] text-stone uppercase">Facilities</p>
      <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-5xl">
        객실 안에 머무는 것들
      </h2>
      <div className="mt-16 grid gap-20">
        {facilities.map((facility, index) => {
          const isReversed = index % 2 === 1
          return (
            <article
              key={facility.id}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              <ImageSlot
                label={facility.imageLabel}
                src={facility.imageSrc}
                className={cn(isReversed && 'md:order-2')}
              />
              <div className={cn(isReversed && 'md:order-1')}>
                <p className="text-[11px] tracking-[0.2em] text-stone">0{index + 1}</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{facility.title}</h3>
                <p className="mt-5 max-w-md text-sm leading-8 text-stone">{facility.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
