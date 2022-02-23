import { ChangeEvent } from 'react'

type Props = {
  className?: string
  name: string
  value: string
  items: Option[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Radio: React.FC<Props> = (props: Props) => {
  return (
    <div className={`flex gap-2 ${props.className ? props.className : ''}`}>
      {props.items.map((item, index) => {
        const checked = props.value === item.value
        return (
          <div key={index} className='mt-2'>
            <input
              id={`${props.name}_${index}`}
              className='peer hidden'
              type='radio'
              name={props.name}
              value={item.value}
              checked={checked}
              onChange={(e) => props.onChange(e)}
            />
            <label
              htmlFor={`${props.name}_${index}`}
              className='py-1 px-4 text-base peer-checked:text-blue-500 hover:text-white hover:bg-blue-500 rounded border peer-checked:border-blue-500 hover:border-blue-500 disabled:opacity-50 cursor-pointer sm:py-2'
            >
              {item.name}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default Radio
