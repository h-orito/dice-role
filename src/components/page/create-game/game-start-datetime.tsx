import { Controller } from 'react-hook-form'
import Label from 'components/form/label'
import InputDatetime from 'components/form/input-datetime'
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

type Props = {
  control: any
  errors: any
}
const GameStartDatetime = (props: Props) => {
  const { control, errors } = props
  const initial = dayjs().add(7, 'd').startOf('day')
  dayjs.extend(isSameOrAfter)
  dayjs.extend(isSameOrBefore)
  const isValid = (datetime: Date) => {
    const selected = dayjs(datetime)
    const current = dayjs()
    return (
      selected.isSameOrAfter(current) &&
      selected.isSameOrBefore(current.add(1, 'month'))
    )
  }

  return (
    <Controller
      name='startDatetime'
      control={control}
      defaultValue={initial}
      rules={{ required: true, validate: (datetime) => isValid(datetime) }}
      render={({ field: { value, onChange } }) => (
        <div className='mb-8'>
          <Label>開始日時</Label>
          <div className='flex'>
            <InputDatetime
              className={`flex-1 ${
                errors.startDatetime ? 'border-red-500' : ''
              }`}
              value={value}
              onChange={onChange}
            />
          </div>
          {errors.startDatetime && (
            <div className='flex justify-center'>
              <p className='text-red-500'>
                開始日時は今日から1か月以内で入力してください。
              </p>
            </div>
          )}
        </div>
      )}
    />
  )
}

export default GameStartDatetime
