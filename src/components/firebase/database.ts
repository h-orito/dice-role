import {
  ref,
  get,
  set,
  query,
  push,
  child,
  orderByChild,
  limitToLast
} from 'firebase/database'
import { db } from 'plugins/firebase'

const database = {
  fetchGame: async (key: string): Promise<Game | null> => {
    const snapshotGame = (await get(ref(db, `games/${key}`))).val()
    if (snapshotGame == null) return null
    return {
      ...snapshotGame,
      key
    }
  },
  fetchGames: async (): Promise<Game[]> => {
    const snapshotGames = (
      await get(
        query(ref(db, 'games'), orderByChild('created'), limitToLast(10))
      )
    ).val()
    if (snapshotGames == null) return []
    return Object.entries(snapshotGames).map(([key, value]) => {
      const g = value as Game
      return {
        ...g,
        key: key
      } as Game
    })
  },
  registerGame: async (game: Game): Promise<Game> => {
    const newGameRef = await push(child(ref(db), 'games'))
    set(newGameRef, game)
    return {
      ...game,
      key: newGameRef.key
    }
  }
}

export default database
