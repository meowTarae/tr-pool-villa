import { ChevronDown } from 'lucide-react'

import { ImageSlot } from '@/components/image-slot'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] bg-forest text-ivory">
      <ImageSlot
        label="숲속 독채 전경"
        src="/images/hero.avif"
        ratio="hero"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 size-full text-ivory/70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20">
        <p className="text-[11px] tracking-[0.32em] uppercase">TR Pool Villa</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
          자연 속에서 누리는
          <br />
          온전한 쉼
        </h1>
        <p className="mt-6 max-w-md text-sm leading-7 text-ivory/80 md:text-base">
          오직 당신만을 위한 프라이빗한 휴식. 울창한 숲 안의 모던 독채, TR 풀빌라.
        </p>
        <a
          href="#prologue"
          className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-ivory/80 uppercase"
        >
          내려서 둘러보기
          <ChevronDown className="size-4" />
        </a>
      </div>
    </section>
  )
}
