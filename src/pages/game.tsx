import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { SystemConst } from '../components/const'
import GameMenu from '../components/page/game/menu/game-menu'
import GameInfo from '../components/page/game/info/game-info'
import Characters from '../components/page/game/characters/characters'
import Chat from '../components/page/game/chat/chat'
import GameMap from '../components/page/game/map/game-map'
import GameAction from '../components/page/game/action/action'
import GameNotifications from '../components/page/game/notification/game-notification'

type Data = {
  game: Game | null
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.API_ORIGIN}/game?key=${context.query.key}`
  )
  const data: Data = await res.json()
  return {
    props: { game: data.game }
  }
}

const GamePage = ({
  game
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [currentMenu, setCurrentMenu] = useState('info')
  const isVisible = (name: string) => name === currentMenu
  const hiddenClass = (menuName: string): string =>
    currentMenu === menuName ? '' : 'hidden'

  return (
    <div>
      <Head>
        <title>{`${SystemConst.APPLICATION_NAME} | ${game.name}`}</title>
      </Head>
      <GameNotifications />
      <div className='text-sm'>
        <GameMenu currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
        <div className='py-5 px-2 mt-5 text-gray-500 bg-gray-100 rounded-2xl sm:px-5'>
          <GameInfo isVisible={isVisible('info')} game={game} />
          <Chat isVisible={isVisible('chat')} game={game} />
          <Characters isVisible={isVisible('characters')} game={game} />
          <GameMap isVisible={isVisible('map')} game={game} />
          <GameAction isVisible={isVisible('action')} game={game} />
          <div className={hiddenClass('setting')}>個人設定を表示</div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
