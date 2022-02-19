import Modal from '../modal/modal'
import dayjs from 'dayjs'

export type Inputs = {
  gameName: string
  description: string
  gameType: string
  intervalHours: number
  intervalMinutes: number
  startDatetime: Date
}

type Props = {
  inputs: Inputs
  isConfirmModalShow: boolean
  setIsConfirmModalShow: (arg: boolean) => void
}

const ConfirmModal: React.FC<Props> = (props: Props) => {
  const create = () => {}

  return (
    <Modal
      closeButtonName='閉じる'
      handleClose={() => props.setIsConfirmModalShow(false)}
      submitButtonName='作成する'
      handleSubmit={create}
      isShow={props.isConfirmModalShow}
    >
      <div className='text-sm text-left'>
        <p className='mb-4'>以下の内容でゲームを作成します。</p>
        <div>
          <table className='table-auto'>
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
                    {typeof content.value !== 'string'
                      ? content.value
                      : content.value
                          .split(/(\n)/)
                          .map((item: string, index: number) => (
                            <p className='leading-relaxed' key={index}>
                              {item}
                            </p>
                          ))}
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
  }
]

export default ConfirmModal
