import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

interface RevealSectionProps {
  children: React.ReactNode
  delay?: number
  y?: number
  stagger?: boolean
  className?: string
}

export default function RevealSection({
  children,
  delay = 0,
  y = 30,
  stagger = false,
  className = '',
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  if (stagger) {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: delay,
        },
      },
    }

    const itemVariants: Variants = {
      hidden: { opacity: 0, y },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={className}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child
          return <motion.div variants={itemVariants} className="h-full">{child}</motion.div>
        })}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
