import styles from './notification.module.css'

type Props = {
  children: React.ReactNode
  className?: string
}

const BaseNotification: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`px-3 py-2 my-2 text-xs sm:text-sm text-left rounded border ${className}`}
    >
      <p className={`leading-relaxed`}>{children}</p>
    </div>
  )
}

export const Notification: React.FC<Props> = ({ children }) => (
  <BaseNotification className={styles.normal}>{children}</BaseNotification>
)

export const PrimaryNotification: React.FC<Props> = ({ children }) => (
  <BaseNotification className={styles.primary}>{children}</BaseNotification>
)

export const WarnNotification: React.FC<Props> = ({ children }) => (
  <BaseNotification className={styles.warn}>{children}</BaseNotification>
)

export const DangerNotification: React.FC<Props> = ({ children }) => (
  <BaseNotification className={styles.danger}>{children}</BaseNotification>
)
