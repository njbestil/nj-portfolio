import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export type CarouselImage = {
  src: string
  alt: string
  caption?: string
}

type CarouselProps = {
  images: CarouselImage[]
  title?: string
  className?: string
}

export function Carousel({ images, title = 'Screenshots', className }: CarouselProps) {
  const headingId = useId()
  const trackId = useId()
  const trackRef = useRef<HTMLUListElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const currentIndex = Math.min(activeIndex, Math.max(0, images.length - 1))

  if (images.length === 0) return null

  const goToSlide = (index: number) => {
    const track = trackRef.current
    if (!track || index < 0 || index >= images.length) return
    track.scrollTo({ left: track.clientWidth * index, behavior: 'auto' })
  }

  return (
    <section aria-labelledby={headingId} className={clsx('min-w-0 space-y-3', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 id={headingId} className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2dd4f7]">
          {title}
        </h3>
        {images.length > 1 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous screenshot"
              aria-controls={trackId}
              aria-disabled={currentIndex === 0}
              onClick={() => goToSlide(currentIndex - 1)}
              className="focus-ring grid size-11 place-items-center rounded-lg border border-[#6a85a0] text-white hover:bg-white/10 aria-disabled:cursor-not-allowed aria-disabled:opacity-40"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>
            <span className="text-sm tabular-nums text-[#dce8f5]" role="status" aria-atomic="true">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              aria-label="Next screenshot"
              aria-controls={trackId}
              aria-disabled={currentIndex === images.length - 1}
              onClick={() => goToSlide(currentIndex + 1)}
              className="focus-ring grid size-11 place-items-center rounded-lg border border-[#6a85a0] text-white hover:bg-white/10 aria-disabled:cursor-not-allowed aria-disabled:opacity-40"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <ul
        id={trackId}
        ref={trackRef}
        tabIndex={images.length > 1 ? 0 : undefined}
        aria-labelledby={headingId}
        onScroll={(event) => {
          const track = event.currentTarget
          if (track.clientWidth > 0) setActiveIndex(Math.round(track.scrollLeft / track.clientWidth))
        }}
        className="focus-ring flex snap-x snap-mandatory overflow-x-auto rounded-xl border border-[#162840] bg-[#07111f] motion-safe:scroll-smooth"
      >
        {images.map((image) => (
          <li key={image.src} className="w-full shrink-0 snap-start snap-always">
            <figure>
              <img src={image.src} alt={image.alt} loading="lazy" className="aspect-video w-full object-contain" />
              {image.caption && (
                <figcaption className="px-4 py-3 text-sm leading-relaxed text-[#dce8f5]">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
