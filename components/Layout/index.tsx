import React, { FC, memo, ReactNode } from 'react'
import Navbar from 'components/Navbar'
import styles from './index.module.scss'

interface IProps {
  children?: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className="main_content">{children}</div>
    </div>
  )
}

export default memo(Layout)
