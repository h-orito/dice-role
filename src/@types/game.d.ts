type Game = {
  id: number
  name: string
  description: string
  imageUrl: string
  map: Map | null
}

type Map = {
  cols: number
  rows: number
  cells: Cell[]
}

type Cell = {
  col: number
  row: number
  type: string | null
}
