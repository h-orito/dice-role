import { useState, ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Label from '@/form/label'
import InputText from '@/form/input-text'
import Textarea from '@/form/textarea'
import InputImage from '@/form/input-image'
import { PrimaryButton } from '@/button/button'
import type { Inputs } from './inputs'
import CharacterName from './character-name'
import Nickname from './nickname'
import CharacterDescriotion from './character-description'

// TODO: プロフィール項目もゲーム作成時に変更できるようにする
const ParticipateForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues
  } = useForm<Inputs>()
  const [inputs, setInputs] = useState({} as Inputs)

  const [image, setImage] = useState<File | null>(null)

  const save = () => {}
  return (
    <div className='mb-16'>
      <Label className='text-lg'>ゲームに参加する</Label>
      <CharacterName control={control} errors={errors} />
      <Nickname control={control} errors={errors} />
      <CharacterDescriotion control={control} errors={errors} />
      <div className='mb-4'>
        <Label>プロフィール画像</Label>
        <p className='leading-relaxed'>90x120px or 180x240px or 360x480px</p>
        <div className='flex'>
          <div className='flex-1'>
            <label className='flex-1' htmlFor='theme-image'>
              <p className='block py-2 px-4 rounded border border-blue-500 disabled:opacity-50 cursor-pointer'>
                画像を選択
              </p>
              <InputImage
                id='theme-image'
                className='hidden'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const image =
                    e.target.files == null ? null : e.target.files[0]
                  setImage(image)
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <div className='mb-4'>
        <Label>アイコン画像</Label>
        <p className='leading-relaxed'>90x120px or 180x240px</p>
        <div className='flex'>
          <div className='flex-1'>
            <label className='flex-1' htmlFor='theme-image'>
              <p className='block py-2 px-4 mb-2 rounded border border-blue-500 disabled:opacity-50 cursor-pointer'>
                画像を選択
              </p>
              <InputImage
                id='theme-image'
                className='hidden'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const image =
                    e.target.files == null ? null : e.target.files[0]
                  setImage(image)
                }}
              />
            </label>
            <label className='flex-1' htmlFor='theme-image'>
              <p className='block py-2 px-4 rounded border border-blue-500 disabled:opacity-50 cursor-pointer'>
                画像を選択
              </p>
              <InputImage
                id='theme-image'
                className='hidden'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const image =
                    e.target.files == null ? null : e.target.files[0]
                  setImage(image)
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <PrimaryButton onClick={save}>参加登録する</PrimaryButton>
    </div>
  )
}

export default ParticipateForm
