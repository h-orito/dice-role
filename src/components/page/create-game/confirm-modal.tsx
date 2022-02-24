import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Modal from 'components/modal/modal'
import dayjs from 'dayjs'
import type { Inputs } from './inputs'

type Props = {
  inputs: Inputs
  isConfirmModalShow: boolean
  setIsConfirmModalShow: (arg: boolean) => void
}

const ConfirmModal: React.FC<Props> = (props: Props) => {
  const {
    gameName,
    description,
    gameType,
    intervalHours,
    intervalMinutes,
    startDatetime,
    themeImage
  } = props.inputs

  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const create = async () => {
    setSubmitting(true)
    // upload image
    let themeImageUrl = null
    if (themeImage) {
      const formData = new FormData()
      formData.append('file', themeImage)
      const res: Response = await fetch(
        `${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API_ORIGIN}/upload`,
        {
          method: 'POST',
          body: formData
        }
      )
      // @ts-ignore
      const path = (await res.json()).path
      themeImageUrl = `${process.env.NEXT_PUBLIC_IMAGE_HOST}${path}`
    }

    // create game
    const game: Game = {
      name: gameName,
      description,
      type: gameType,
      intervalSeconds: intervalHours * 3600 + intervalMinutes * 60,
      startDatetime,
      themeImageUrl,
      created: new Date().getTime()
    }
    const res = await fetch(`/api/games`, {
      method: 'POST',
      body: JSON.stringify(game)
    })
    setSubmitting(false)

    // @ts-ignore
    const newGame = (await res.json()).game
    const key = newGame.key
    router.push({
      pathname: '/game',
      query: { key }
    })
  }

  return (
    <Modal
      closeButtonName='閉じる'
      handleClose={() => props.setIsConfirmModalShow(false)}
      submitButtonName='作成する'
      handleSubmit={create}
      disabled={submitting}
      isShow={props.isConfirmModalShow}
    >
      <div className='text-sm text-left'>
        <p className='mb-4'>以下の内容でゲームを作成します。</p>
        <div>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='py-2 px-4 border'>項目</th>
                <th className='py-2 px-4 border'>内容</th>
              </tr>
            </thead>
            <tbody>
              {contents(props.inputs).map((content: Option, idx: number) => (
                <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-100' : ''}>
                  <td className='py-2 px-4 border'>{content.name}</td>
                  <td className='py-2 px-4 border'>
                    <ContentValue value={content.value} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  )
}

const contents = (inputs: Inputs): Option[] => [
  {
    name: 'ゲーム名',
    value: inputs.gameName
  },
  {
    name: 'ゲームの説明',
    value: inputs.description
  },
  {
    name: 'ゲーム種別',
    value: inputs.gameType === 'ap' ? 'AP制' : '定期更新'
  },
  {
    name: '更新間隔',
    value: `${inputs.intervalHours === 0 ? '' : inputs.intervalHours + '時間'}${
      inputs.intervalMinutes === 0 ? '' : inputs.intervalMinutes + '分'
    }`
  },
  {
    name: '開始日時',
    value: dayjs(inputs.startDatetime).format('YYYY/MM/DD HH:mm')
  },
  {
    name: 'テーマ画像',
    value: inputs.themeImage
  }
]

type ContentValueProps = {
  value: any
}
const ContentValue: React.FC<ContentValueProps> = ({
  value
}: ContentValueProps) => {
  if (value == null) return <></>
  if (typeof value === 'string') {
    return value.split(/(\n)/).map((item: string, index: number) => (
      <p className='leading-relaxed' key={index}>
        {item}
      </p>
    ))
  } else if (value instanceof File) {
    return (
      <div className='relative py-2 px-4 h-64'>
        <Image
          src={URL.createObjectURL(value)}
          layout='fill'
          objectFit='contain'
          alt='テーマ画像'
        />
      </div>
    )
  } else {
    return value
  }
}

export default ConfirmModal
