import Datetime from 'react-datetime'
import styles from './input-datetime.module.css'

export type Props = {
  className?: string
  value?: Date
  onChange: () => void
}

const InputDatetime: React.FC<Props> = (props: Props) => {
  return (
    <Datetime
      className={`${styles.rdt} ${props.className}`}
      value={props.value}
      dateFormat='yyyy/MM/DD'
      timeFormat='HH:mm'
      timeConstraints={{
        minutes: {
          min: 0,
          max: 59,
          step: 30
        }
      }}
      onChange={props.onChange}
    />
  )
}

export default InputDatetime
