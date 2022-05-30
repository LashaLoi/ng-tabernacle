import SponsorModule from '../modules/sponsor'
import { motion } from 'framer-motion'
import { defaultVariants } from './index'

export default function Sponsor() {
  return (
    <motion.div
      key="sponsor"
      variants={defaultVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <SponsorModule />
    </motion.div>
  )
}
