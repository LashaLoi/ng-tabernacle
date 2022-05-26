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
      <div className="rounded sm:p-20 p-4">
        <div className="flex flex-col text-lg text-center">
          <p className="font-extrabold mb-4 text-2xl">ВНИМАНИЕ!</p>
          <p className="mb-2">
            Команда школы СКИНИЯ 2021 не сможет обеспечить вас ночлегом.
          </p>
          <p className="mb-2">Пожалуйста, учитывайте это в Ваших планах.</p>
          <p className="mb-6">
            На месте будет работать платное кафе, где вы сможете купить чай,
            кофе, печенье
          </p>
          <div>
            <PrimaryButton onClick={handleClose}>Понятно</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)
