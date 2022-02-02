import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next'
import Head from 'next/head'
import { SystemConst } from '../../components/const'

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

const Game: NextPage = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>{`${SystemConst.APPLICATION_NAME} | ${data.game.name}`}</title>
      </Head>

      <div>
        <p>title: {data.game.name}</p>
        <p>description: {data.game.description}</p>
      </div>
    </div>
  )
}

export default Game
