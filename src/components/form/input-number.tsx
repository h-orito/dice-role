import { ChangeEvent } from 'react'

export type Props = {
  id?: string
  className?: string
  name?: string
  value?: number
  min?: number
  max?: number
  step?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputNumber: React.FC<Props> = (props: Props) => {
  return (
    <input
      id={props.id}
      type='number'
      min={props.min}
      max={props.max}
      step={props.step}
      name={props.name}
      className={`text-right block py-2 px-4 rounded border border-gray-200 disabled:opacity-50 ${props.className}`}
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default InputNumber
