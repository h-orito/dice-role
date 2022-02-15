import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  game: Game | null
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { gameId } = req.query

  const cells: Cell[] = []
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 20; col++) {
      cells.push({
        col: col,
        row: row,
        type: null
      })
    }
  }
  cells.forEach((cell) => {
    if (cell.col === 0 && cell.row === 0) cell.type = 'start'
    if (cell.col === 19 && cell.row === 19) cell.type = 'goal'
  })
  res.status(200).json({
    game: {
      id: parseInt(`${gameId}`),
      name: 'ゲームの名前',
      description:
        'ここにゲームの説明。長くなると思う。長かったら省略した方がいいかも？',
      imageUrl: '/public/dice.jpg',
      map: {
        cols: 20,
        rows: 20,
        cells: cells
      }
    }
  })
}
