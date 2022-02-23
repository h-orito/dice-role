import { useState, ChangeEvent } from 'react'
import Radio from '../../form/radio'
import Image from 'next/image'
import Select from '../../form/select'
import Textarea from '../../form/textarea'
import { PrimaryButton } from '../../button/button'

const ChatForm: React.FC = () => {
  const [chatType, setChatType] = useState('normal')
  const [faceType, setFaceType] = useState('normal')
  const [chatText, setChatText] = useState('')

  return (
    <div className='flex text-left'>
      <div className='flex-1'>
        <div className='p-4 mb-4 bg-white rounded'>
          <div className='flex mb-2 sm:mb-4'>
            <p className='py-2 mr-2 font-bold'>発言種別</p>
            <Radio
              name='chattype'
              value={chatType}
              items={chatTypes}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setChatType(e.target.value)
              }
            />
          </div>
          <div className='flex mb-2 sm:mb-4'>
            <p className='py-2 mr-2 font-bold'>アイコン</p>
            <Select
              value={faceType}
              options={faceTypes}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setFaceType(e.target.value)
              }
            />
          </div>
          <p className='mb-1'>にのまえ はじめ</p>
          <div className='flex mb-2'>
            <div className='mr-2'>
              <Image
                className='rounded-lg'
                src='http://placehold.jp/180x240.png'
                width={90}
                height={120}
                alt='image'
              />
            </div>
            <div className='flex-1'>
              <Textarea
                className='w-full h-full'
                value={chatText}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setChatText(e.target.value)
                }
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <PrimaryButton onClick={() => {}}>発言する</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const chatTypes: Option[] = [
  {
    name: '通常',
    value: 'normal'
  },
  {
    name: '秘話',
    value: 'secret'
  }
]

const faceTypes: Option[] = [
  {
    name: '通常',
    value: 'normal'
  },
  {
    name: 'アイコン1',
    value: 'icon1'
  }
]

export default ChatForm
