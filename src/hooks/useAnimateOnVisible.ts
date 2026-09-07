import { useEffect, useState } from 'react'
import { clsx } from '../lib/cn'

type EntranceAnimation = 'fadeInLeft' | 'fadeInUp' | 'zoomIn'

export function useAnimateOnVisible<T extends HTMLElement>(animation: EntranceAnimation) {
  const [element, setElement] = useState<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [element])

  const className = clsx(isVisible && 'animate__animated', isVisible && `animate__${animation}`)

  return [setElement, className] as const
}
