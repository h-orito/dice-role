import { ChangeEvent } from 'react'

export type Props = {
  id?: string
  className?: string
  name?: string
  value?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputText: React.FC<Props> = (props: Props) => {
  return (
    <input
      id={props.id}
      type='text'
      name={props.name}
      className={`block py-2 px-4 rounded border border-gray-200 disabled:opacity-50 ${props.className}`}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default InputText
