import { Controller } from 'react-hook-form'
import Label from '@/form/label'
import InputText from '@/form/input-text'

type Props = {
  control: any
  errors: any
}
const CharacterName = (props: Props) => {
  const { control, errors } = props

  return (
    <Controller
      name='characterName'
      control={control}
      defaultValue=''
      rules={{ required: true, minLength: 1, maxLength: 20 }}
      render={({ field: { name, value, onChange } }) => (
        <div className='mb-4'>
          <Label>キャラクター名</Label>
          <div className='flex'>
            <InputText
              className={`flex-1 ${
                errors.characterName ? 'border-red-500' : ''
              }`}
              name={name}
              value={value}
              onChange={onChange}
            />
          </div>
          {errors.characterName && (
            <div className='flex justify-center'>
              <p className='text-red-500'>
                キャラクター名は1文字以上20文字以内で入力してください。
              </p>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default CharacterName
