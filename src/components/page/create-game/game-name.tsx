import { Controller } from 'react-hook-form'
import Label from 'components/form/label'
import InputText from 'components/form/input-text'

type Props = {
  control: any
  errors: any
}
const GameName = (props: Props) => {
  const { control, errors } = props

  return (
    <Controller
      name='gameName'
      control={control}
      defaultValue=''
      rules={{ required: true, minLength: 3, maxLength: 40 }}
      render={({ field: { name, value, onChange } }) => (
        <div className='mb-8'>
          <Label>ゲーム名</Label>
          <div className='flex'>
            <InputText
              className={`flex-1 ${errors.gameName ? 'border-red-500' : ''}`}
              name={name}
              value={value}
              onChange={onChange}
            />
          </div>
          {errors.gameName && (
            <div className='flex justify-center'>
              <p className='text-red-500'>
                ゲーム名は3文字以上40文字以内で入力してください。
              </p>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default GameName
