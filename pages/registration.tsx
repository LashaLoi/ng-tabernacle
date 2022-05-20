import RegistrationModule from '../modules/registration'
import { motion } from 'framer-motion'

import { defaultVariants } from './index'

export default function Registration() {
  return (
    <motion.div
      variants={defaultVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <RegistrationModule />
    </motion.div>
  )
}
