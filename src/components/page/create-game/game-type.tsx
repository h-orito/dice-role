import { Controller } from 'react-hook-form'
import Label from 'components/form/label'
import Radio from 'components/form/radio'

type Props = {
  control: any
  errors: any
}
const GameType = (props: Props) => {
  const { control } = props

  return (
    <Controller
      name='gameType'
      control={control}
      defaultValue='ap'
      rules={{ required: true }}
      render={({ field: { name, value, onChange } }) => (
        <div className='mb-8'>
          <Label>ゲーム種別</Label>
          <div className='flex justify-center'>
            <Radio
              value={value}
              name={name}
              items={gameTypes}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    />
  )
}

const gameTypes: Option[] = [
  {
    name: 'AP制',
    value: 'ap'
  },
  {
    name: '定期更新',
    value: 'time'
  }
]

export default GameType
