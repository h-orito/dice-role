import styles from './button.module.css'

type BaseProps = Props & {
  typeClassName: string
}
const BaseButton: React.FC<BaseProps> = ({
  className,
  typeClassName,
  onClick,
  disabled,
  children
}) => {
  return (
    <button
      className={`${styles.button} ${typeClassName} ${className ?? ''}`}
      disabled={disabled ?? false}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

type Props = {
  className?: string
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({
  className,
  onClick,
  disabled,
  children
}) => (
  <BaseButton
    className={className}
    onClick={onClick}
    disabled={disabled}
    typeClassName={styles.normal}
  >
    {children}
  </BaseButton>
)

export const PrimaryButton: React.FC<Props> = ({
  className,
  onClick,
  disabled,
  children
}) => (
  <BaseButton
    className={className}
    onClick={onClick}
    disabled={disabled}
    typeClassName={styles.primary}
  >
    {children}
  </BaseButton>
)

export const WarnButton: React.FC<Props> = ({
  className,
  onClick,
  disabled,
  children
}) => (
  <BaseButton
    className={className}
    onClick={onClick}
    disabled={disabled}
    typeClassName={styles.warn}
  >
    {children}
  </BaseButton>
)

export const DangerButton: React.FC<Props> = ({
  className,
  onClick,
  disabled,
  children
}) => (
  <BaseButton
    className={className}
    onClick={onClick}
    disabled={disabled}
    typeClassName={styles.danger}
  >
    {children}
  </BaseButton>
)
