import { useState, ChangeEvent } from 'react'
import { Controller } from 'react-hook-form'
import Image from 'next/image'
import Label from 'components/form/label'
import InputImage from 'components/form/input-image'

type Props = {
  control: any
  errors: any
}

const ThemeImage = (props: Props) => {
  const { control, errors } = props
  const [image, setImage] = useState<File | null>(null)
  const isValid = () => {
    if (!image) return true
    // 形式
    if (!availableTypes.some((t) => t === image.type)) return false
    // 容量
    if (image.size > 500000) return false
    return true
  }

  return (
    <Controller
      name='themeImage'
      control={control}
      defaultValue={null}
      rules={{ validate: () => isValid() }}
      render={({ field: { name, value, onChange } }) => (
        <div className='mb-8'>
          <Label>テーマ画像</Label>
          <div className='flex justify-center'>
            <label className='flex-1' htmlFor='theme-image'>
              {image && (
                <div className='relative py-2 px-4 w-full h-64 rounded border border-gray-200 cursor-pointer'>
                  <Image
                    src={URL.createObjectURL(image)}
                    layout='fill'
                    objectFit='contain'
                    alt='テーマ画像'
                  />
                </div>
              )}
              {!image && (
                <p className='block py-2 px-4 rounded border border-gray-200 disabled:opacity-50 cursor-pointer'>
                  画像を選択
                </p>
              )}
              <InputImage
                id='theme-image'
                className='hidden'
                name={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const image =
                    e.target.files == null ? null : e.target.files[0]
                  onChange(image)
                  setImage(image)
                }}
              />
            </label>
          </div>
          <p className='text-sm text-gray-500'>
            ゲームのトップ画像です。横長を推奨します。
            <br />
            jpg, jpeg, png, bmp, gif形式、500kByte以下でお願いします。
          </p>
          {errors.themeImage && (
            <div className='flex justify-center'>
              <p className='text-red-500'>
                テーマ画像はjpg, jpeg, png, bmp,
                gif形式、500kByte以下で指定してください。
              </p>
            </div>
          )}
        </div>
      )}
    />
  )
}

const availableTypes = [
  'image/gif',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/bmp'
]

export default ThemeImage
