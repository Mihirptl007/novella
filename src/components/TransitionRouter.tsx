import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useLocation, type Location } from 'react-router'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const EASE = 'power3.inOut'
const COVER_DURATION = 0.75
const REVEAL_DURATION = 1

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return

    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  return reduced
}

export default function TransitionRouter({
  children,
}: {
  children: (displayLocation: Location) => ReactNode
}) {
  const location = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()
  const routeId = `${location.pathname}${location.search}${location.hash}`

  const [renderedLocation, setRenderedLocation] = useState(location)
  const [pending, setPending] = useState<{ key: string; location: Location } | null>(null)
  const pendingRef = useRef<{ key: string; location: Location } | null>(null)
  const animatingRef = useRef(false)

  const overlayRef = useRef<HTMLDivElement | null>(null)
  const firstBlockRef = useRef<HTMLDivElement | null>(null)
  const secondBlockRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!overlayRef.current || !firstBlockRef.current || !secondBlockRef.current) return

    gsap.set(overlayRef.current, { autoAlpha: 0, visibility: 'hidden' })
    gsap.set(firstBlockRef.current, {
      clipPath: 'inset(0% 0% 100% 0%)',
      rotate: -4,
      scale: 1.4,
      yPercent: -30,
    })
    gsap.set(secondBlockRef.current, {
      clipPath: 'inset(100% 0% 0% 0%)',
      rotate: 4,
      scale: 1.4,
      yPercent: 30,
    })
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setRenderedLocation(location)
      setPending(null)
      pendingRef.current = null
      animatingRef.current = false
      return
    }

    const renderedRouteId = `${renderedLocation.pathname}${renderedLocation.search}${renderedLocation.hash}`
    if (routeId === renderedRouteId) return

    const next = { key: routeId, location }
    pendingRef.current = next

    if (!animatingRef.current) {
      setPending(next)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeId, prefersReducedMotion])

  useEffect(() => {
    if (!pending || animatingRef.current) return

    const overlayEl = overlayRef.current
    const firstBlockEl = firstBlockRef.current
    const secondBlockEl = secondBlockRef.current

    if (!overlayEl || !firstBlockEl || !secondBlockEl) {
      setRenderedLocation(pending.location)
      setPending(null)
      pendingRef.current = null
      return
    }

    animatingRef.current = true

    try {
      ScrollTrigger.getAll().forEach((t) => t.kill(false))
    } catch {
      // ignore
    }

    gsap.set(overlayEl, { autoAlpha: 1, visibility: 'visible' })
    gsap.set(firstBlockEl, {
      clipPath: 'inset(0% 0% 100% 0%)',
      rotate: -4,
      scale: 1.4,
      yPercent: -30,
    })
    gsap.set(secondBlockEl, {
      clipPath: 'inset(100% 0% 0% 0%)',
      rotate: 4,
      scale: 1.4,
      yPercent: 30,
    })

    const tl = gsap.timeline({ defaults: { ease: EASE } })

    tl.to(firstBlockEl, {
      clipPath: 'inset(0% 0% 0% 0%)',
      rotate: 0,
      scale: 1,
      yPercent: 0,
      duration: COVER_DURATION,
    })
      .to(
        secondBlockEl,
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          rotate: 0,
          scale: 1,
          yPercent: 0,
          duration: COVER_DURATION,
        },
        '<',
      )
      .add(() => {
        const latest = pendingRef.current ?? pending
        setRenderedLocation(latest.location)
        window.scrollTo(0, 0)
      })
      .to(
        firstBlockEl,
        {
          clipPath: 'inset(0% 0% 100% 0%)',
          rotate: -4,
          scale: 1.4,
          yPercent: -30,
          duration: REVEAL_DURATION,
        },
        '+=0.2',
      )
      .to(
        secondBlockEl,
        {
          clipPath: 'inset(100% 0% 0% 0%)',
          rotate: 4,
          scale: 1.4,
          yPercent: 30,
          duration: REVEAL_DURATION,
        },
        '<',
      )
      .set(overlayEl, { autoAlpha: 0, visibility: 'hidden' })

    tl.eventCallback('onComplete', () => {
      animatingRef.current = false

      const latest = pendingRef.current
      if (latest && latest.key !== pending.key) {
        setPending(latest)
      } else {
        pendingRef.current = null
        setPending(null)
      }

      window.requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh()
        } catch {
          // ignore
        }
      })
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending])

  return (
    <div>
      {children(renderedLocation)}

      <div
        ref={(el) => {
          overlayRef.current = el
        }}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          display: 'grid',
          // Keep overlay above page content during animation,
          // but avoid conflicting with other fixed UI (WhatsApp)
          zIndex: 1500,
          gridTemplateRows: '1fr 1fr',
          pointerEvents: 'none',

          opacity: 0,
          visibility: 'hidden',
          overflow: 'hidden',
          willChange: 'opacity',
        }}
      >
        <div
          ref={(el) => {
            firstBlockRef.current = el
          }}
          style={{
            backgroundColor: '#0A1628',
            transformOrigin: '100% 0%',
            willChange: 'clip-path, transform',
          }}
        />
        <div
          ref={(el) => {
            secondBlockRef.current = el
          }}
          style={{
            backgroundColor: '#0A1628',
            transformOrigin: '100% 100%',
            willChange: 'clip-path, transform',
          }}
        />
      </div>
    </div>
  )
}
