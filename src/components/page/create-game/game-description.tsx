import { Controller } from 'react-hook-form'
import Label from 'components/form/label'
import Textarea from 'components/form/textarea'

type Props = {
  control: any
  errors: any
}
const GameDescription = (props: Props) => {
  const { control, errors } = props

  return (
    <Controller
      name='description'
      control={control}
      defaultValue=''
      rules={{ maxLength: 4000 }}
      render={({ field: { name, value, onChange } }) => (
        <div className='mb-8'>
          <Label>ゲームの説明</Label>
          <div className='flex'>
            <Textarea
              className={`flex-1 h-40 ${
                errors.description ? 'border-red-500' : ''
              }`}
              name={name}
              value={value}
              onChange={onChange}
            />
          </div>
          {errors.description && (
            <div className='flex justify-center'>
              <p className='text-red-500'>
                ゲームの説明は4000文字以内で入力してください。
              </p>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default GameDescription
