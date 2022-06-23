import { AnimatePresence } from 'framer-motion'

import { PrimaryButton } from '../../components/buttons'
import { Modal } from '../../components/modal'

interface RegistrationModalProps {
  show: boolean
  onClose: () => void
}

export function RegistrationModal({ show, onClose }: RegistrationModalProps) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <Modal onClose={onClose}>
          <div className="flex flex-col text-gray-700 sm:p-10 p-2">
            <p className="font-extrabold mb-4 text-2xl text-center main-title">
              ВНИМАНИЕ
            </p>

            <p className="mb-2 sm:text-lg text-sm">
              Команда школы не предоставляет бесплатный ночлег, если вам нужна
              помощь в поиске жилья в аренду, свяжитесь с нами +375 (29)
              206-11-32 Анна
            </p>
            <p className="mb-2 sm:text-lg text-sm">
              Приятный бонус для каждого участника - бесплатный обед!
            </p>
            <p className="mb-2 sm:text-lg text-sm">
              На месте будет работать платное кафе
            </p>
            <p className="mb-4 sm:text-lg text-sm">
              В этом году мы делаем открытый вечер хвалы в пятницу в 19:30,
              остальные вечера только для участников школы!
            </p>
            <div className="text-center">
              <PrimaryButton onClick={onClose}>Понятно</PrimaryButton>
            </div>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  )
}
