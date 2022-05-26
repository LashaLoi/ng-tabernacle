import { motion } from 'framer-motion'
import { FadeIn } from './fade-in'
import { PrimaryButton, DefaultButton } from './buttons'

interface StepsProps {
  handleIncrement: () => void
  handleDecrement: () => void
  value: string
  step: number
  questionsLength: number
}

export default function Steps({
  handleDecrement,
  handleIncrement,
  value,
  step,
  questionsLength,
}: StepsProps) {
  return (
    <div className="mt-4 flex">
      <div className="flex space-x-2 justify-center">
        <PrimaryButton
          className="mr-2"
          disabled={!value}
          onClick={handleIncrement}
        >
          {step === questionsLength ? 'Завершить' : 'Далее'}
        </PrimaryButton>
      </div>

      {step > 0 && (
        <FadeIn>
          <DefaultButton onClick={handleDecrement}>Назад</DefaultButton>
        </FadeIn>
      )}
    </div>
  )
}
