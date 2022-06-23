import React from 'react'
import { motion } from 'framer-motion'

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
)

export const Modal: React.FC<any> = ({ children, onClose }) => (
  <motion.div
    key="modal"
    style={{
      zIndex: 100000000,
    }}
    className="fixed w-full h-full top-0 bg-gray-300/20 backdrop-blur-lg"
    initial={{ opacity: 0, y: 1000 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 1000 }}
    transition={{
      duration: 0.6,
    }}
  >
    <div className="relative w-full h-full">
      <div className="absolute right-4 top-4 cursor-pointer" onClick={onClose}>
        {closeIcon}
      </div>
      <div className="flex w-full h-full justify-center items-center text-gray-500 ">
        <div className="rounded sm:p-20 p-4 max-w-[700px]">{children}</div>
      </div>
    </div>
  </motion.div>
)
