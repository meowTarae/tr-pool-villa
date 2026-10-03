import { ImageSlot } from '@/components/image-slot'
import { directions } from '@/data/content'

export function LocationSection() {
  return (
    <section id="location" className="bg-paper py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-stone uppercase">Location</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">오시는 길</h2>
          <p className="mt-6 text-sm leading-7 text-ink">
            강원도 홍천군 서면 숲속길 123
            <br />
            TR 풀빌라
          </p>
          <ol className="mt-8 space-y-4 text-sm leading-7 text-stone">
            {directions.map((step, index) => (
              <li key={step}>
                <span className="mr-3 text-[11px] tracking-[0.16em] text-sand">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="grid gap-3">
          <ImageSlot label="지도" ratio="map" />
          <ImageSlot label="입구로 이어지는 숲길" />
        </div>
      </div>
    </section>
  )
}
