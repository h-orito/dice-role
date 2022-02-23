import { Button, PrimaryButton } from '../button/button'

export type ButtonProps = {
  buttonName: string
  handleOnClick: (e: any) => void
}

export type Props = {
  isShow: boolean
  closeButtonName: string
  handleClose: () => void
  submitButtonName?: string
  handleSubmit?: () => void
  disabled?: boolean
  children: React.ReactNode
}

const Modal: React.FC<Props> = (props: Props) => {
  return (
    <div
      id='modal'
      className={`overflow-y-auto fixed inset-0 p-4 w-full h-full bg-gray-900/60 z-40 ${
        props.isShow ? '' : 'hidden'
      }`}
      onClick={props.handleClose}
    >
      <div
        className='z-50 p-8 bg-white rounded shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
        <div className='flex justify-end items-center mt-4'>
          {props.submitButtonName && (
            <PrimaryButton
              className='mr-4'
              onClick={props.handleSubmit!}
              disabled={props.disabled}
            >
              {props.submitButtonName}
            </PrimaryButton>
          )}
          <Button onClick={props.handleClose}>{props.closeButtonName}</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
