import { ImageSlot } from '@/components/image-slot'

export function PrologueSection() {
  return (
    <section id="prologue" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-8 md:py-36">
      <div>
        <p className="text-[11px] tracking-[0.22em] text-stone uppercase">Prologue</p>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          자연과 하나 되는 시간
        </h2>
        <div className="mt-8 space-y-5 text-sm leading-8 text-stone md:text-[15px]">
          <p>
            TR 풀빌라는 강원도 홍천의 숲 안에 놓인 세 채의 독채입니다. 길은 객실 앞에서 끝나고, 그 다음의 시간은 오롯이 그 집의 것이 됩니다.
          </p>
          <p>
            창은 숲을 들이기 위해 열려 있고, 수영장과 불멍과 식사의 자리는 다른 객실과 나누지 않습니다. 머무는 동안 필요한 것은 속도가 아니라 여백입니다.
          </p>
          <p>
            오직 당신만을 위한 프라이빗한 휴식. 자연과 하나 되는 시간은 여기서 조용히 시작됩니다.
          </p>
        </div>
      </div>
      <ImageSlot label="숲으로 열린 창" src="/images/prologue.avif" ratio="portrait" />
    </section>
  )
}
