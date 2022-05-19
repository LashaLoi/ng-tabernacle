import { Button } from 'antd'
import { FadeIn } from '../../components/fade-in'

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
      <Button className="mr-2" onClick={handleIncrement} disabled={!value}>
        {step === questionsLength ? 'Завершить' : 'Далее'}
      </Button>

      {step > 0 && (
        <FadeIn>
          <Button onClick={handleDecrement}>Назад</Button>
        </FadeIn>
      )}
    </div>
  )
}
