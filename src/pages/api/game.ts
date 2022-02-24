import type { NextApiRequest, NextApiResponse } from 'next'
import database from 'components/firebase/database'

type Data = {
  game: Game | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const key = req.query.key as string
  const game = await database.fetchGame(key)
  res.status(200).json({ game })
}
