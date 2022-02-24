import { GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import { auth as uiAuth } from 'firebaseui'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { auth } from 'plugins/firebase'
import Modal from 'components/modal/modal'

const uiConfig: uiAuth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    TwitterAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/'
}

type Props = {
  isShow: boolean
  setIsShow: (_: boolean) => void
  redirectPath?: string
}

const SignInModal: React.FC<Props> = ({ isShow, setIsShow, redirectPath }) => {
  return (
    <Modal
      isShow={isShow}
      closeButtonName='閉じる'
      handleClose={() => setIsShow(false)}
    >
      <div className='text-sm leading-relaxed text-center'>
        <p className='text-lg font-bold'>サインイン</p>
        <p className='my-5'>
          いずれかのSNSアカウントと連携してサインインしてください。
          <br />
          サインインのためだけに使用するため、画面上にSNS情報が表示されることはありません。
        </p>
        <StyledFirebaseAuth
          firebaseAuth={auth}
          uiConfig={{
            ...uiConfig,
            signInSuccessUrl: redirectPath ?? '/'
          }}
        />
      </div>
    </Modal>
  )
}

export default SignInModal
