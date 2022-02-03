import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { SystemConst } from '../../components/const'
import styles from './game.module.css'
import GameMenu from '../../components/game/menu/game-menu'
import GameInfo from '../../components/game/info/game-info'
import Characters from '../../components/game/characters/characters'
import Chat from '../../components/game/chat/chat'

type Data = {
  game: Game | null
}

export const getServerSideProps: GetServerSideProps = async (id) => {
  const res = await fetch(`${process.env.API_ORIGIN}/games/${id}`)
  const data: Data = await res.json()
  return {
    props: { data }
  }
}

const GamePage = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [currentMenu, setCurrentMenu] = useState('info')
  const isVisible = (name: string) => name === currentMenu
  const hiddenClass = (menuName: string): string =>
    currentMenu === menuName ? '' : 'hidden'

  return (
    <div>
      <Head>
        <title>{`${SystemConst.APPLICATION_NAME} | ${data.game.name}`}</title>
      </Head>

      <div className='text-sm'>
        <GameMenu currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
        <div className='p-5 mt-5 text-gray-500 bg-gray-100 rounded-2xl'>
          <GameInfo isVisible={isVisible('info')} game={data.game} />
          <Characters isVisible={isVisible('characters')} game={data.game} />
          <Chat isVisible={isVisible('chat')} game={data.game} />
          <div className={hiddenClass('map')}>マップを表示</div>
          <div className={hiddenClass('action')}>アクションを表示</div>
          <div className={hiddenClass('setting')}>個人設定を表示</div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
