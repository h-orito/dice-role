import { PrimaryButton } from '../../button/button'
import Label from '../../form/label'
import InputText from '../../form/input-text'
import Select from '../../form/select'
import Radio from '../../form/radio'
import { useState } from 'react'
import Textarea from '../../form/textarea'
import Checkbox from '../../form/checkbox'

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
      <div className='mb-8'>
        <Label>ダイスを振る</Label>
        <div className='flex'>
          <InputText
            className='flex-1'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <PrimaryButton className='ml-2' onClick={save}>
            〜する
          </PrimaryButton>
        </div>
      </div>
      <div className='mb-8'>
        <Label>匙を投げる</Label>
        <div className='flex'>
          <Select
            className='flex-1'
            value={select}
            options={items}
            onChange={(e) => setSelect(e.target.value)}
          />
          <PrimaryButton className='ml-2' onClick={save}>
            〜する
          </PrimaryButton>
        </div>
      </div>
      <div className='mb-8'>
        <Label>ラジオを投げる</Label>
        <div className='flex'>
          <div className='flex-1'>
            <Radio
              value={radio}
              name='fuga'
              items={items}
              onChange={(e) => setRadio(e.target.value)}
            />
          </div>
          <PrimaryButton className='ml-2' onClick={save}>
            〜する
          </PrimaryButton>
        </div>
      </div>
      <div className='mb-8'>
        <Label>たくさん喋る</Label>
        <div className=''>
          <div className='flex-1'>
            <Textarea
              className='w-full h-96'
              value={textarea}
              name='piyo'
              onChange={(e) => setTextarea(e.target.value)}
            />
          </div>
          <div className='flex justify-end mt-2'>
            <PrimaryButton className='ml-2' onClick={save}>
              〜する
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className='mb-8'>
        <Label>チェックをつける</Label>
        <div className='flex'>
          <div className='flex-1'>
            <Checkbox
              name='ck'
              values={checkboxs}
              items={items}
              onChange={(values) => setCheckboxs(values)}
            />
          </div>
          <PrimaryButton className='ml-2' onClick={save}>
            〜する
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default GameAction
