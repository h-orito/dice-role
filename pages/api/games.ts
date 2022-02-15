import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  games: Game[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    games: [
      {
        id: 1,
        name: 'ここに定期ゲームの名前',
        description:
          'ここに定期ゲームの説明。長くなると思う。長かったら省略した方がいいかも？',
        imageUrl: '/public/dice.jpg',
        map: []
      },
      {
        id: 2,
        name: 'ここに定期ゲームの名前',
        description:
          'ここに定期ゲームの説明。長くなると思う。長かったら省略した方がいいかも？',
        imageUrl: '/public/dice.jpg',
        map: []
      },
      {
        id: 3,
        name: 'ここに定期ゲームの名前',
        description:
          'ここに定期ゲームの説明。長くなると思う。長かったら省略した方がいいかも？',
        imageUrl: '/public/dice.jpg',
        map: []
      }
    ]
  })
}
