import { ChangeEvent } from 'react'

export type Props = {
  id?: string
  className?: string
  name?: string
  value?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputImage: React.FC<Props> = (props: Props) => {
  return (
    <input
      id={props.id}
      type='file'
      accept='image/*'
      name={props.name}
      className={`block py-2 px-4 rounded border border-gray-200 disabled:opacity-50 ${props.className}`}
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default InputImage
