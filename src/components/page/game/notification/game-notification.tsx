import { useState } from 'react'
import {
  DangerNotification,
  PrimaryNotification,
  WarnNotification
} from 'components/notification/notification'
import { useAuthState } from 'components/firebase/auth'
import SignInModal from 'components/firebase/sign-in-modal'

const GameNotifications: React.FC = () => {
  const { isLoading, isSignedIn } = useAuthState()
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false)
  const openSigninModal = (e: any) => {
    e.preventDefault()
    setIsSigninModalOpen(true)
  }
  return (
    <>
      {!isLoading && !isSignedIn && (
        <>
          <PrimaryNotification>
            ゲームに参加する/している方は
            <a
              href='#'
              className='underline'
              onClick={(e) => openSigninModal(e)}
            >
              サインイン
            </a>
            してください。
          </PrimaryNotification>
          <SignInModal
            isShow={isSigninModalOpen}
            setIsShow={setIsSigninModalOpen}
          />
        </>
      )}
      {isSignedIn && (
        <PrimaryNotification>
          Actionタブからゲームに参加登録することができます。
        </PrimaryNotification>
      )}
    </>
  )
}

export default GameNotifications
