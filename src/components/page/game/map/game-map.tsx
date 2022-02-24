type Props = {
  game: Game
  isVisible: boolean
}

const GameMap: React.FC<Props> = (props: Props) => {
  return <div className={props.isVisible ? '' : 'hidden'}></div>
}

export default GameMap
