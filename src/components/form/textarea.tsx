export type Props = {
  id?: string
  className?: string
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
}

const Textarea: React.FC<Props> = (props: Props) => {
  return (
    <textarea
      id={props.id}
      name={props.name}
      className={`block py-2 px-4 rounded border border-gray-200 disabled:opacity-50 ${props.className}`}
      value={props.value}
      onChange={(e) => props.onChange && props.onChange(e)}
      onKeyPress={(e) => props.onKeyPress && props.onKeyPress(e)}
      disabled={props.disabled}
    >
      {props.value}
    </textarea>
  )
}

export default Textarea
