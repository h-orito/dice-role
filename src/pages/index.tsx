import { useState } from 'react'
import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import Image from 'next/image'
import diceImage from 'public/dice.jpg'
import { SystemConst } from 'components/const'
import { PrimaryButton } from 'components/button/button'
import SignInModal from 'components/firebase/sign-in-modal'
import { useAuthState, signOut } from 'components/firebase/auth'

type Data = {
  games: Game[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.API_ORIGIN}/games`)
  const data: Data = await res.json()
  return {
    props: { data }
  }
}

const Home: NextPage = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isSigninModalShow, setSigninModalShow] = useState(false)
  const { isLoading, isSignedIn } = useAuthState()

  return (
    <div>
      <Head>
        <title>{SystemConst.APPLICATION_NAME}</title>
        <meta name='description' content='あとで書きます' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1 className='text-lg'>ゲーム一覧</h1>
        <section className='mt-5'>
          <div className='grid grid-cols-2 gap-6 mb-5'>
            {data.games.map((game: Game) => (
              <GameCard key={game.key} game={game} />
            ))}
          </div>
          {!isLoading && !isSignedIn && (
            <>
              <p className='mb-2 text-sm leading-relaxed'>
                サインインすると部屋を作成することができます。
              </p>
              <PrimaryButton onClick={() => setSigninModalShow(true)}>
                サインインする
              </PrimaryButton>
              <SignInModal
                isShow={isSigninModalShow}
                setIsShow={setSigninModalShow}
              />
            </>
          )}
          {!isLoading && isSignedIn && (
            <>
              <div className='flex justify-center mb-5'>
                <PrimaryButton onClick={() => Router.push('/create-game')}>
                  新しいゲームを作成する
                </PrimaryButton>
              </div>
              <div className='flex justify-center'>
                <PrimaryButton onClick={() => signOut()}>
                  サインアウトする
                </PrimaryButton>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}

type CardProps = {
  game: Game
}
const GameCard: React.FC<CardProps> = ({ game }) => {
  return (
    <div>
      <Link href={`/game?key=${game.key}`} passHref>
        <a href=''>
          <div className='mb-10 h-full bg-white rounded-lg border border-slate-300 hover:border-blue-500'>
            <div className='relative h-60'>
              {game.themeImageUrl && (
                <Image
                  src={game.themeImageUrl}
                  alt='image'
                  layout='fill'
                  objectFit='contain'
                />
              )}
              {game.themeImageUrl == null && (
                <Image
                  src={diceImage}
                  alt='image'
                  layout='fill'
                  objectFit='contain'
                />
              )}
            </div>
            <div className='p-6 text-black'>
              <h3 className='mb-4 text-xl font-semibold'>{game.name}</h3>
              <p className='mb-7 text-sm leading-relaxed break-words'>
                {game.description}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Home
