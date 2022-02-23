import Image from 'next/image'

type Props = {
  game: Game
  isVisible: boolean
}

const GameInfo: React.FC<Props> = ({ game, isVisible }) => {
  return (
    <div className={isVisible ? '' : 'hidden'}>
      <p className='mb-5 text-xl font-bold'>{game.name}</p>

      {game.themeImageUrl && (
        <div className='relative w-full h-96'>
          <Image
            src={game.themeImageUrl}
            alt='image'
            layout='fill'
            objectFit='contain'
          />
        </div>
      )}
      {game.description &&
        game.description.split(/(\n)/).map((item: string, index: number) => (
          <p className='leading-relaxed break-words' key={index}>
            {item}
          </p>
        ))}
    </div>
  )
}

export default GameInfo
