import { motion } from 'framer-motion'
import React from 'react'

export const defaultVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

interface PageWrapperProps {
  children: React.ReactNode
  key: string
}

export default function PageWrapper({ key, children }: PageWrapperProps) {
  return (
    <motion.div
      key={key}
      variants={defaultVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
