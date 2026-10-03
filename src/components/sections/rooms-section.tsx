import { useState } from 'react'

import { ImageSlot } from '@/components/image-slot'
import { rooms } from '@/data/content'
import { cn } from '@/lib/utils'

export function RoomsSection() {
  const [activeRoomId, setActiveRoomId] = useState(rooms[0].id)
  const activeRoom = rooms.find((room) => room.id === activeRoomId) ?? rooms[0]

  return (
    <section id="rooms" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-[11px] tracking-[0.22em] text-stone uppercase">Rooms</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-5xl">
          세 채의 독채, 각자의 숲
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-stone">
          T동, R동, V동은 모두 침실 두 개와 넓은 거실을 가진 프라이빗 독채입니다. 차이는 풍경의 결에 있습니다.
        </p>

        <div className="mt-10 flex gap-2 overflow-x-auto" role="tablist" aria-label="객실">
          {rooms.map((room) => {
            const isActive = room.id === activeRoom.id
            return (
              <button
                key={room.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveRoomId(room.id)}
                className={cn(
                  'shrink-0 rounded-full border px-5 py-2 text-sm transition-colors',
                  isActive
                    ? 'border-forest bg-forest text-ivory'
                    : 'border-line bg-transparent text-ink hover:border-forest',
                )}
              >
                {room.name}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div className="grid gap-3 sm:grid-cols-2">
            {activeRoom.imageLabels.map((label) => (
              <ImageSlot key={label} label={label} />
            ))}
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-stone uppercase">{activeRoom.englishName}</p>
            <h3 className="mt-3 font-display text-4xl">{activeRoom.name}</h3>
            <p className="mt-3 text-base text-ink">{activeRoom.summary}</p>
            <p className="mt-5 text-sm leading-8 text-stone">{activeRoom.description}</p>
            {activeRoom.note ? (
              <p className="mt-4 text-sm text-moss">{activeRoom.note}</p>
            ) : null}
            <ul className="mt-8 grid gap-3 text-sm text-ink">
              {activeRoom.features.map((feature) => (
                <li key={feature} className="border-b border-line pb-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
