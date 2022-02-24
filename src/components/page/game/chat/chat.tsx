import ChatForm from './chat-form'
import ChatMessages from './chat-messages'

type Props = {
  game: Game
  isVisible: boolean
}

const Chat: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.isVisible ? '' : 'hidden'}>
      <ChatForm />
      <ChatMessages />
    </div>
  )
}

export default Chat
