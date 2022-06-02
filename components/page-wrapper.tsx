import { motion } from 'framer-motion'
import React from 'react'

export const defaultVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

interface PageWrapperProps {
  children: React.ReactNode
  itemKey: string
}

export default function PageWrapper({ itemKey, children }: PageWrapperProps) {
  return (
    <motion.div
      key={itemKey}
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
