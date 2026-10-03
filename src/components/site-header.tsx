import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { navItems } from '@/data/content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#hero" className="font-display text-2xl tracking-wide text-ivory mix-blend-difference">
          TR
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] tracking-[0.18em] text-ivory/90 mix-blend-difference"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="mix-blend-difference md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          <span className="sr-only">메뉴</span>
        </Button>
      </div>
      <nav
        id="mobile-nav"
        className={cn(
          'border-t border-white/10 bg-forest/95 px-5 py-4 md:hidden',
          isMenuOpen ? 'block' : 'hidden',
        )}
      >
        <ul className="grid gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className="block py-3 text-xs tracking-[0.18em] text-ivory"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
