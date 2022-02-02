import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  game: Game | null
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { gameId } = req.query
  res.status(200).json({
    game: {
      id: parseInt(`${gameId}`),
      name: 'ここに定期ゲームの名前',
      description:
        'ここに定期ゲームの説明。長くなると思う。長かったら省略した方がいいかも？',
      imageUrl: '/public/dice.jpg'
    }
  })
}