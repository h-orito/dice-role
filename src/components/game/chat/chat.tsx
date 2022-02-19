import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './chat.module.css'
import Image from 'next/image'

type Props = {
  game: Game
  isVisible: boolean
}

const Chat: React.FC<Props> = (props: Props) => {
  const [currentTab, setCurrentTab] = useState('all')
  const isVisible = (name: string) => name === currentTab

  return (
    <div className={props.isVisible ? '' : 'hidden'}>
      <ChatTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className='py-6 px-2 -mt-2 text-gray-700 bg-white rounded-lg border border-gray-100 shadow sm:px-4'>
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  )
}

type ChatTabsProps = {
  currentTab: string
  setCurrentTab: (name: string) => void
}

const ChatTabs: React.FC<ChatTabsProps> = (props: ChatTabsProps) => {
  const selectedClass = (name: string): string =>
    name === props.currentTab ? styles.selected : ''
  return (
    <ul className='grid grid-flow-col py-1 text-center text-gray-500'>
      <li>
        <div
          className={`${styles.tab_button} ${selectedClass('all')}`}
          onClick={() => props.setCurrentTab('all')}
        >
          <FontAwesomeIcon icon={faComments} className='mt-0.5' />
          &nbsp;&nbsp;全体
        </div>
      </li>
      <li>
        <div
          className={`${styles.tab_button} ${selectedClass('tome')}`}
          onClick={() => props.setCurrentTab('tome')}
        >
          <FontAwesomeIcon icon={faComments} className='mt-0.5' />
          &nbsp;&nbsp;自分宛
        </div>
      </li>
      <li>
        <div
          className={`${styles.tab_button} ${selectedClass('secret')}`}
          onClick={() => props.setCurrentTab('secret')}
        >
          <FontAwesomeIcon icon={faComments} className='mt-0.5' />
          &nbsp;&nbsp;秘話
        </div>
      </li>
      <li>
        <div
          className={`${styles.tab_button} ${selectedClass('xx')}`}
          onClick={() => props.setCurrentTab('xx')}
        >
          <FontAwesomeIcon icon={faComments} className='mt-0.5' />
          &nbsp;&nbsp;XXさん
        </div>
      </li>
      <li>
        <div
          className={`${styles.tab_button} ${selectedClass('add')}`}
          onClick={() => props.setCurrentTab('add')}
        >
          <FontAwesomeIcon icon={faPlus} className='mt-0.5' />
          &nbsp;&nbsp;タブ追加
        </div>
      </li>
    </ul>
  )
}

const Message: React.FC = () => {
  return (
    <div className='flex flex-col p-2 mb-5 rounded-md border border-slate-400 shadow-md'>
      <div className='mb-2 ml-2 text-left'>
        &gt;&gt;1.&nbsp;&nbsp;<strong>にのまえ はじめ</strong>
        &nbsp;&nbsp;
        <span className='text-sm text-gray-400'>2022/12/31 23:59:59</span>
      </div>
      <div className='flex flex-1'>
        <div className='mr-4 ml-2'>
          <Image
            className='rounded-lg'
            src='http://placehold.jp/180x240.png'
            width={90}
            height={120}
            alt='image'
          />
        </div>
        <div className='flex-1'>
          <p className='leading-relaxed text-left text-gray-700'>
            ある日の超暮方(ほぼ夜)の事である。一人の下人が、クソデカい羅生門の完全な真下で雨やみを気持ち悪いほどずっと待ちまくっていた。
            <br />
            馬鹿みたいに広い門の真下には、この大男のほかに全然誰もいない。ただ、所々丹塗のびっくりするくらい剥げた、信じられないほど大きな円柱に、象くらいある蟋蟀が一匹とまっている。クソデカ羅生門が、大河のように広い朱雀大路にある以上は、この狂った男のほかにも、激・雨やみをする巨大市女笠や爆裂揉烏帽子が、もう二三百人はありそうなものである。それが、この珍妙男のほかには全然誰もマジで全くいない。
            <br />
            何故かと云うと、この二三千年、京都には、超巨大地震とか破壊的辻風とか最強大火事とか極限饑饉とか云うエグすぎる災が毎日つづいて起こった。そこでクソ広い洛中のさびれ方はマジでもう一通りとかそういうレベルではない。旧記によると、クソデカい仏像や文化財クラスの仏具をものすごいパワーで打砕いて、その丹がベッチャベチャについたり、金銀の箔がもうイヤになっちゃうくらいついたりした木を、路ばたに親の仇のようにメチャメチャつみ重ねて、薪の料に売りまくっていたと云う事である。クソ治安がいいことで知られる洛中がその始末であるから、正気を疑うレベルでデカい羅生門の完全修理などは、元より誰も捨てて顧る者がマジで全然なかった。するとそのドン引きするくらい荒れ果てたのをよい事にして、クソヤバい狐狸がドンドン棲む。世界最強の盗人が6万人棲む。とうとうしまいには、マジで悲しくなっちゃうくらい全然引取り手のないきったない死人を、この門へ猛ダッシュで持って来て、超スピードで棄てて行くと云う習慣さえ出来た。そこで、日の目が怖いくらい全然まったく見えなくなると、誰でもメチャメチャ気味を悪るがって、この門の近所へはマジでビックリするくらい足ぶみをしない事になってしまったのである。
            <br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Chat
