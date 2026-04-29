import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.4 }
  const trailX = useSpring(cursorX, { damping: 38, stiffness: 200, mass: 0.6 })
  const trailY = useSpring(cursorY, { damping: 38, stiffness: 200, mass: 0.6 })

  useEffect(() => {
    // Only show on desktop
    const mq = window.matchMedia('(min-width: 769px)')
    setIsDesktop(mq.matches)
    const handler = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (!isDesktop) return
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move, { passive: true })

    const interactable = 'a, button, input, textarea, [data-cursor="hover"]'
    const addHover = () => setIsHovering(true)
    const removeHover = () => setIsHovering(false)

    document.querySelectorAll(interactable).forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactable).forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [isDesktop, cursorX, cursorY])

  if (!isDesktop) return null

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        style={{ left: cursorX, top: cursorY }}
        animate={{
          width: isHovering ? 20 : 10,
          height: isHovering ? 20 : 10,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue pointer-events-none z-[9999] mix-blend-screen"
      />
      {/* Trail ring */}
      <motion.div
        style={{ left: trailX, top: trailY }}
        animate={{
          width: isHovering ? 48 : 34,
          height: isHovering ? 48 : 34,
        }}
        transition={{ duration: 0.2 }}
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-blue/40 pointer-events-none z-[9998]"
      />
    </>
  )
}
