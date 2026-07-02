import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation } from 'react-router'

gsap.registerPlugin(ScrollTrigger)

const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'
const EXIT_MS = 750
const ENTER_MS = 750

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    const onChange = () => setReduced(!!mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  return reduced
}

export default function RouteTransition({
  children,
}: {
  children: ReactNode
}) {
  const location = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()

  const currentKeyRef = useRef<string>(location.key)

  // Two-layer render: old content stays until exit completes.
  const [rendered, setRendered] = useState({ key: location.key, node: children })
  const [pending, setPending] = useState<{ key: string; node: ReactNode } | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const overlayRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    currentKeyRef.current = location.key
  }, [location.key])

  useEffect(() => {
    if (prefersReducedMotion) {
      setRendered({ key: location.key, node: children })
      setPending(null)
      setIsAnimating(false)
      if (overlayRef.current) {
        gsap.set(overlayRef.current, { autoAlpha: 0 })
      }
      return
    }

    // If route key changed, we animate exit -> curtain -> switch -> enter
    if (location.key !== rendered.key) {
      setPending({ key: location.key, node: children })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key])

  useEffect(() => {
    if (!pending) return
    if (isAnimating) return

    const oldNodeEl = wrapperRef.current
    const overlayEl = overlayRef.current
    if (!oldNodeEl || !overlayEl) {
      setRendered({ key: pending.key, node: pending.node })
      setPending(null)
      return
    }

    setIsAnimating(true)

    // Cleanup any existing ScrollTriggers before animating.
    // (prevents odd "hidden" states when GSAP timelines run during route swap)
    try {
      ScrollTrigger.getAll().forEach((t) => t.kill(false))
    } catch {
      // ignore
    }

    gsap.set(overlayEl, {
      autoAlpha: 1,
      xPercent: -20,
      yPercent: 0,
      scaleX: 0.9,
    })

    // Exit old content
    const exitTl = gsap.timeline({ defaults: { ease: EASE } })

    // Slightly pull content away
    exitTl
      .to(oldNodeEl, {
        opacity: 0,
        scale: 0.98,
        y: -10,
        filter: 'blur(3px)',
        duration: EXIT_MS / 1000,
      })
      // Curtain sweep
      .to(
        overlayEl,
        {
          xPercent: 20,
          scaleX: 1.02,
          duration: 0.35,
        },
        0
      )
      // Hold overlay until we swap
      .add(() => {
        // Defer the switch by one tick to avoid showing footer/logo artifacts for a single frame.
        // This helps with the "one frame back" issue during the curtain close.
        requestAnimationFrame(() => {
          setRendered({ key: pending.key, node: pending.node })
        })
      })
      .to(
        overlayEl,
        {
          autoAlpha: 0,
          xPercent: 0,
          duration: ENTER_MS / 1000,
        },
        '>'
      )
      // Enter new content (animate in)
      .fromTo(
        oldNodeEl,
        {
          opacity: 0,
          scale: 0.98,
          y: 10,
          filter: 'blur(6px)',
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: ENTER_MS / 1000,
        },
        '<'
      )

    exitTl.eventCallback('onComplete', () => {
      setPending(null)
      setIsAnimating(false)

      // Let GSAP/ScrollTrigger re-init on next paint.
      requestAnimationFrame(() => {
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
    <div ref={wrapperRef} style={{ willChange: 'transform, opacity' }}>
      {rendered.node}
      {/* Keep this above everything else during the route swap to avoid footer/overlay frame artifacts */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background:
            'linear-gradient(90deg, rgba(10,22,40,0.98) 0%, rgba(26,38,60,0.92) 40%, rgba(212,165,116,0.25) 100%)',
          transformOrigin: 'center',
          pointerEvents: 'none',
          opacity: 0,
          display: 'block',
          mixBlendMode: 'normal',
          willChange: 'transform, opacity',
        }}
      />
    </div>
  )
}

