import { useState } from 'react'
import { PrimaryButton } from 'components/button/button'
import Label from 'components/form/label'
import InputText from 'components/form/input-text'
import Select from 'components/form/select'
import Radio from 'components/form/radio'
import Textarea from 'components/form/textarea'
import Checkbox from 'components/form/checkbox'
import ParticipateForm from './participate/participate-form'

type Props = {
  game: Game
  isVisible: boolean
}

const GameAction: React.FC<Props> = (props: Props) => {
  const save = () => {}
  const items: Option[] = [
    {
      name: 'name',
      value: '1'
    },
    {
      name: 'name2',
      value: '2'
    }
  ]
  const [radio, setRadio] = useState('1')
  const [text, setText] = useState('hoge')
  const [select, setSelect] = useState('hoge')
  const [textarea, setTextarea] = useState('hogehoge~\nふがふが')
  const [checkboxs, setCheckboxs] = useState(['1'])

  return (
    <div className={props.isVisible ? '' : 'hidden'}>
      <ParticipateForm />
    </div>
  )
}

export default GameAction
