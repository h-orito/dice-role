import type { NextApiRequest, NextApiResponse } from 'next'
import database from 'components/firebase/database'
import { signIn } from 'plugins/firebase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const game = await handlePost(req)
    return res.status(200).json({ game: game })
  }

  // get request
  const games = await database.fetchGames()
  res.status(200).json({
    games
  })
}

const handlePost = async (req: any) => {
  const game: Game = JSON.parse(req.body)
  // login
  await signIn()
  // register new game to realtime database
  return await database.registerGame(game)
}
