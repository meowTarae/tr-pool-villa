import { ImageSlot } from '@/components/image-slot'
import { Button } from '@/components/ui/button'
import { stayFacts } from '@/data/content'

export function ReservationSection() {
  return (
    <section id="reservation" className="relative bg-forest text-ivory">
      <ImageSlot
        label="저녁의 독채"
        className="absolute inset-0 size-full text-ivory/60"
      />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <p className="text-[11px] tracking-[0.22em] text-ivory/70 uppercase">Reservation</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-5xl">
          머무는 시간을 정하는 일
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-ivory/75">
          예약과 결제는 야놀자에서 진행됩니다. 이곳에서는 머물기 전에 알아두면 좋은 시간만 남겨 둡니다.
        </p>
        <dl className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
          {stayFacts.map((fact) => (
            <div key={fact.label} className="bg-forest/90 px-5 py-6">
              <dt className="text-[11px] tracking-[0.18em] text-ivory/60 uppercase">{fact.label}</dt>
              <dd className="mt-3 font-display text-3xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <Button type="button" variant="light" className="mt-10">
          야놀자에서 예약
        </Button>
      </div>
    </section>
  )
}
