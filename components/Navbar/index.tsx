import React, { FC, memo, useState } from 'react'
import { navs } from './config'
import Link from 'next/link'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import Login from 'components/Login'
import ReactDOM from 'react-dom'
import dynamic from 'next/dynamic'
import { LoginFormType, login } from 'service/modules/user'
import IResponse from 'service/responseType'
const Button = dynamic(() => import('antd').then((mod) => mod.Button), {
  ssr: false,
})

const Navbar: FC = () => {
  const [isOpenModal, setOpenModal] = useState(false)
  const { asPath } = useRouter()
  const [isLogin, setIsLogin] = useState(false)

  function toEditePage() {
    console.log('跳转到编辑页面')
  }

  function openLoginModal() {
    setOpenModal(true)
  }

  function closeLoginHandle() {
    setOpenModal(false)
  }

  async function successLoginHandle(form: LoginFormType) {
    const res: IResponse = await login(form)

    if (res.code === 200) {
      // 登录成功
      setOpenModal(false)
      setIsLogin(true)
    } else {
      alert(res.message)
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.main}>
        {navs.map((i) => {
          return (
            <Link
              href={i.path}
              key={i.key}
              className={asPath === i.path ? styles.active : ''}
            >
              {i.name}
            </Link>
          )
        })}
      </div>
      <div className={styles.operation}>
        {/* 登录和写文章 */}
        <Button onClick={toEditePage}>写文章</Button>
        {isLogin ? (
          // 用户已经登录的组件
          '已登录'
        ) : (
          <Button type="primary" onClick={openLoginModal}>
            登录
          </Button>
        )}
      </div>
      {isOpenModal &&
        ReactDOM.createPortal(
          <Login
            onClose={closeLoginHandle}
            onSuccess={successLoginHandle}
            isOpenModal={isOpenModal}
          />,
          document.body,
        )}
    </div>
  )
}

export default memo(Navbar)
