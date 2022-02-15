import { useState } from 'react'

type Props = {
  name: string
  values: string[]
  items: Option[]
  onChange: (values: string[]) => void
}

const Checkbox: React.FC<Props> = (props: Props) => {
  const { name, values, items, onChange } = props
  const handleChange = (checked: boolean, value: string) => {
    if (checked) onChange(values.concat(value))
    else onChange(values.filter((v) => v !== value))
  }
  return (
    <div className='flex gap-2'>
      {items.map((item, index) => {
        const id = `${name}_${index}`

        return (
          <div key={index} className='mt-2'>
            <Check
              id={id}
              name={name}
              defaultValue={values.some((v) => v === item.value)}
              value={item.value}
              label={item.name}
              onChange={(checked: boolean) => handleChange(checked, item.value)}
            />
          </div>
        )
      })}
    </div>
  )
}

type CheckProp = {
  id: string
  name: string
  defaultValue: boolean
  value: string
  onChange: (checked: boolean) => void
  label: string
}
const Check = (prop: CheckProp) => {
  const { id, name, value, onChange, label } = prop
  const [checked, setChecked] = useState(prop.defaultValue)
  const handleChange = () => setChecked((prev) => !prev)

  return (
    <div className='mt-2'>
      <input
        id={id}
        className='hidden'
        type='checkbox'
        name={name}
        value={value}
        checked={checked}
        onChange={() => {
          handleChange()
          onChange(!checked)
        }}
      />
      <label
        htmlFor={id}
        className={`py-2 px-4 text-base hover:text-white hover:bg-blue-500 rounded border hover:border-blue-500 disabled:opacity-50 cursor-pointer ${
          checked ? 'text-blue-500 border-blue-500' : ''
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
