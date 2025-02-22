import React, { FC, memo } from 'react'
import styles from './index.module.scss'

interface ButtonProps {
  children?: React.ReactNode
  type?: 'primary' | 'default'
  size?: 'large' | 'middle' | 'small'
  plain?: boolean
  className?: any,
  disabled?: boolean
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ type, size, children, plain = true, ...args }) => {
  const typeClass = type ? styles['sy-btn-' + type] : styles['sy-btn-default']
  const sizeClass = size ? styles['sy-btn-' + size] : styles['sy-btn-middle']
  const plainClass = plain ? styles['sy-btn-plain'] : ''

  const className = `${styles['sy-btn']} ${typeClass} ${sizeClass} ${plainClass}`

  return (
    <button
      className={className}
      {...args}
    >
      {children}
    </button>
  )
}

export default memo(Button)
