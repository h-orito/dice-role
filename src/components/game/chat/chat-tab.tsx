import { ChangeEvent } from 'react'
import Select from '../../form/select'
import { PrimaryButton } from '../../button/button'

type Props = {
  currentTab: string
  setCurrentTab: (name: string) => void
}

const ChatTabs: React.FC<Props> = ({ currentTab, setCurrentTab }) => {
  const changeTab = (value: string) => {
    setCurrentTab(value)
  }

  return (
    <div className='flex my-2 text-left'>
      <div className='flex-1'>
        <div className='flex gap-2'>
          <Select
            className='flex-1'
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              changeTab(e.target.value)
            }
            options={options}
            value={currentTab}
          />
          <PrimaryButton onClick={() => {}}>タブ追加</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

const options: Option[] = [
  {
    name: '全体',
    value: 'all'
  },
  {
    name: '自分宛',
    value: 'tome'
  }
]

export default ChatTabs
