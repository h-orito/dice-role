import { Controller } from 'react-hook-form'
import Label from 'components/form/label'
import Textarea from 'components/form/textarea'

type Props = {
  control: any
  errors: any
}
const CharacterDescription = (props: Props) => {
  const { control, errors } = props

  return (
    <Controller
      name='description'
      control={control}
      defaultValue=''
      rules={{ maxLength: 4000 }}
      render={({ field: { name, value, onChange } }) => (
        <div className='mb-4'>
          <Label>プロフィール</Label>
          <div className='flex'>
            <div className='flex-1'>
              <Textarea
                className={`w-full h-40 ${
                  errors.description ? 'border-red-500' : ''
                }`}
                name={name}
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
          {errors.description && (
            <div className='flex justify-center'>
              <p className='text-red-500'>
                プロフィールは4000文字以内で入力してください。
              </p>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default CharacterDescription
