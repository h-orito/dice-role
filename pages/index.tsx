import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import diceImage from '/public/dice.jpg'
import { SystemConst } from '../components/const'

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
  return (
    <div>
      <Head>
        <title>{SystemConst.APPLICATION_NAME}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1 className='text-lg'>ゲーム一覧</h1>
        <section className='mt-5'>
          <div className='flex flex-wrap gap-6'>
            {data.games.map((game: Game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

type CardProps = {
  game: Game
}
const GameCard: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className=''>
      <Link href={`/game/${props.game.id}`} passHref>
        <a href=''>
          <div className='overflow-hidden mb-10 bg-white rounded-lg border border-slate-300 hover:border-blue-500'>
            <Image src={diceImage} alt='image' width={640} height={426} />
            <div className='p-6 text-black'>
              <h3 className='mb-4 text-xl font-semibold'>{props.game.name}</h3>
              <p className='mb-7 text-sm leading-relaxed'>
                {props.game.description}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Home
