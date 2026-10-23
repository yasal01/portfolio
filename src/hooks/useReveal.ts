import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      node.classList.add('is-visible')
      return
    }

    const show = () => {
      node.classList.add('is-visible')
    }

    // Tall cards can miss a high threshold when only partly on screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -4% 0px' },
    )

    observer.observe(node)

    // Catch elements already in view (e.g. deep links / fast scroll).
    const rect = node.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh * 0.92 && rect.bottom > vh * 0.08) {
      show()
      observer.unobserve(node)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
