import Image from 'next/image'

type Props = {
  game: Game
  isVisible: boolean
}

const Characters: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`grid grid-cols-2 gap-4 ${props.isVisible ? '' : 'hidden'}`}
    >
      <Chara chara={null} />
      <Chara chara={null} />
      <Chara chara={null} />
      <Chara chara={null} />
      <Chara chara={null} />
      <Chara chara={null} />
    </div>
  )
}

export default Characters

type CharaProps = {
  chara: Character | null
}
const Chara: React.FC<CharaProps> = (props: CharaProps) => {
  return (
    <div className='flex bg-white rounded-lg border border-slate-300 hover:border-blue-500'>
      <div style={{ height: '120px' }}>
        <Image
          className='rounded-lg'
          src='http://placehold.jp/180x240.png'
          width={90}
          height={120}
          alt='image'
        />
      </div>
      <div className='flex-1 py-3 px-4 leading-relaxed'>
        <p className='font-bold'>にのまえ はじめ</p>
        <p>愛称: いち</p>
        <p>所属: 3年A組</p>
        <p>性別: 男</p>
      </div>
    </div>
  )
}
