import { ChangeEvent } from 'react'

export type Props = {
  id?: string
  className?: string
  name?: string
  value?: string
  options: Option[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<Props> = (props: Props) => {
  return (
    <select
      id={props.id}
      className={`block py-2 px-4 rounded border border-gray-200 disabled:opacity-50 ${props.className}`}
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e)}
    >
      {props.options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

export default Select
