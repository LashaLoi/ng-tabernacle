import { AnimatePresence, motion } from 'framer-motion'

interface ContactNotificationProps {
  show: boolean
}

export function ContactNotification({ show }: ContactNotificationProps) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          className="sm:flex hidden bg-gray-100 justify-center items-center px-6 py-4 fixed right-4 bottom-4 shadow-lg rounded"
          initial={{ opacity: 0, x: 100, scale: 0.3 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            delay: 0.7,
          }}
        >
          <p className="text-lg">Ваш вопрос отправлен!</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
