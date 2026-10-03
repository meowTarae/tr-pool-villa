import { Camera, MessageCircle } from 'lucide-react'

const channels = [
  { label: '카카오톡', icon: MessageCircle },
  { label: '인스타그램', icon: Camera },
]

export function FloatingChannels() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2 md:right-6 md:bottom-6">
      {channels.map((channel) => (
        <button
          key={channel.label}
          type="button"
          aria-label={channel.label}
          className="inline-flex size-12 items-center justify-center rounded-full bg-forest text-ivory shadow-lg transition-colors hover:bg-moss"
        >
          <channel.icon className="size-4" />
        </button>
      ))}
    </div>
  )
}
