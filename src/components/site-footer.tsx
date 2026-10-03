export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-3xl">TR Pool Villa</p>
          <p className="mt-3 text-sm leading-7 text-stone">
            강원도 홍천군 서면 숲속길 123 TR 풀빌라
            <br />
            체크인 15:00 · 체크아웃 11:00
          </p>
        </div>
        <a href="#hero" className="text-[11px] tracking-[0.2em] text-stone uppercase">
          맨 위로
        </a>
      </div>
    </footer>
  )
}
