import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PrimaryButton } from './buttons'

interface ModalProps {
  handleClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ handleClose }) => (
  <motion.div
    key="modal"
    className="text-black absolute w-full h-full top-0 bg-white"
    initial={{ opacity: 0, y: 1000 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 1000 }}
    transition={{
      duration: 0.6,
    }}
  >
    <div className="flex w-full h-full justify-center items-center text-gray-500 ">
      <div className="rounded sm:p-20 p-4 max-w-[700px]">
        <div className="flex flex-col text-lg ">
          <p className="font-extrabold mb-4 text-2xl text-center">ВНИМАНИЕ!</p>

          <p className="mb-2">
            Команда школы не предоставляет бесплатный ночлег, если вам нужна
            помощь в поиске жилья в аренду, свяжитесь с нами +375 (29) 206-11-32
            Анна
          </p>
          <p className="mb-2">
            Приятный бонус для каждого участника - бесплатный обед!
          </p>
          <p className="mb-2">На месте будет работать платное кафе</p>
          <p className="mb-4">
            В этом году мы делаем открытый вечер хвалы в пятницу в 19:30,
            остальные вечера только для участников школы!
          </p>
          <div className="text-center">
            <PrimaryButton onClick={handleClose}>Понятно</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)
