import React from 'react'
import { motion } from 'framer-motion'

interface ProgressProps {
  percent: number
}

export const Progress: React.FC<ProgressProps> = ({ percent }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div
        className="bg-gradient-to-r from-[#c850c0] to-[#ffcc70] h-2.5 rounded-full"
        animate={{ width: `${percent}%` }}
      />
    </div>
  )
}
