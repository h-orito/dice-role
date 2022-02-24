import { Controller } from 'react-hook-form'
import Label from 'components/form/label'
import InputNumber from 'components/form/input-number'

type Props = {
  control: any
  errors: any
  getValues: any
}
const Interval = (props: Props) => {
  const { control, errors, getValues } = props

  return (
    <div className='mb-8'>
      <Label>更新間隔</Label>
      <div className='flex gap-2'>
        <Controller
          name='intervalHours'
          control={control}
          defaultValue='24'
          rules={{
            required: {
              value: true,
              message: '更新間隔は必須です'
            },
            minLength: 0,
            maxLength: 72,
            validate: {
              inMaxInterval: (hours) => {
                const { intervalMinutes: minutes } = getValues()
                const intervalMin = hours * 60 + parseInt(minutes)
                return 5 <= intervalMin && intervalMin <= 72 * 60
              }
            }
          }}
          render={({ field: { name, value, onChange } }) => (
            <>
              <InputNumber
                className='flex-1'
                name={name}
                value={value}
                min={0}
                max={72}
                step={1}
                onChange={onChange}
              />
              <p className='py-2'>時間</p>
            </>
          )}
        />
        <Controller
          name='intervalMinutes'
          control={control}
          defaultValue='0'
          rules={{
            required: {
              value: true,
              message: '更新間隔は必須です'
            },
            minLength: 0,
            maxLength: 59
          }}
          render={({ field: { name, value, onChange } }) => (
            <>
              <InputNumber
                className='flex-1'
                name={name}
                value={value}
                min={0}
                max={59}
                step={1}
                onChange={onChange}
              />
              <p className='py-2'>分</p>
            </>
          )}
        />
      </div>
      {errors.intervalHours && (
        <div className='flex justify-center'>
          <p className='text-red-500'>
            {errors.intervalHours.message ||
              '更新間隔は72時間以内にしてください'}
          </p>
        </div>
      )}
      {errors.intervalMinutes && (
        <div className='flex justify-center'>
          <p className='text-red-500'>{errors.intervalMinutes.message}</p>
        </div>
      )}
    </div>
  )
}

export default Interval
