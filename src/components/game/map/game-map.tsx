type Props = {
  game: Game
  isVisible: boolean
}

const GameMap: React.FC<Props> = (props: Props) => {
  const cells: Cell[] = props.game.map!!.cells
  const rows: number = props.game.map!!.rows
  const cols: number = props.game.map!!.cols
  const cellString = (cell: Cell): string => {
    return cell.type === 'start' ? 'S' : cell.type === 'goal' ? 'G' : ''
  }
  const cellClass = (cell: Cell): string => {
    return cell.type === 'start' || cell.type === 'goal'
      ? 'bg-green-100'
      : 'bg-white'
  }
  return (
    <div className={props.isVisible ? '' : 'hidden'}>
      <div className='overflow-x-scroll'>
        {chunk(cells, cols).map((cellChunk: Array<Cell>, chunkidx: number) => (
          <div
            key={chunkidx}
            className='flex my-2'
            style={{ width: `${cols * 2.5}rem` }}
          >
            {cellChunk.map((cell: Cell, cellidx) => (
              <div
                key={`${chunkidx}_${cellidx}`}
                className={`mx-1 w-8 h-8 leading-8 text-center rounded border border-gray-400 ${cellClass(
                  cell
                )}`}
              >
                {cellString(cell)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function chunk<T extends any[]>(arr: T, size: number) {
  return arr.reduce(
    (newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
    [] as T[][]
  )
}

export default GameMap
