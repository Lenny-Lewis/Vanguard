import { motion, useReducedMotion, type Variants } from 'framer-motion'

interface SplitTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
}

export default function SplitText({
  text,
  as: Component = 'h1',
  className = '',
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="inline"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block overflow-hidden align-top ${
              index < words.length - 1 ? 'mr-[0.28em]' : ''
            }`}
          >
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  )
}
