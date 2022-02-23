import {
  DangerNotification,
  PrimaryNotification,
  WarnNotification
} from '../../notification/notification'

const GameNotifications: React.FC = () => {
  return (
    <>
      <PrimaryNotification>お知らせです</PrimaryNotification>
      <WarnNotification>警告です</WarnNotification>
      <DangerNotification>禁止です</DangerNotification>
      <PrimaryNotification>
        <ul>
          <li>あれが</li>
          <li>こうで</li>
          <li>こうなった</li>
        </ul>
      </PrimaryNotification>
    </>
  )
}

export default GameNotifications
