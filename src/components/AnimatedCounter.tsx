import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 1.2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const shouldReduceMotion = useReducedMotion()

  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString())

  useEffect(() => {
    if (shouldReduceMotion) {
      motionValue.set(value)
      return
    }

    if (inView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      })
      return controls.stop
    }
  }, [inView, value, duration, motionValue, shouldReduceMotion])

  if (shouldReduceMotion) {
    return (
      <span ref={ref} className={className}>
        <span>{value.toLocaleString()}</span>
        {suffix && <span>{suffix}</span>}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}
