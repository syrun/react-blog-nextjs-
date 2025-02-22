import React, { FC, memo, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './index.module.scss'
import CountDown from 'components/CountDown'
import { LoginFormType } from 'service/modules/user'
import { getVertifyCode } from 'service/modules/user'
import IResponse from 'service/responseType'
interface LoginType {
  onClose: () => void
  isOpenModal: boolean
  onSuccess: (form: LoginFormType) => void
}

const Modal = dynamic(() => import('antd').then((mod) => mod.Modal), {
  ssr: false,
})

const Button = dynamic(() => import('antd').then((mod) => mod.Button), {
  ssr: false,
})

const Input = dynamic(() => import('antd').then((mod) => mod.Input), {
  ssr: false,
})

const Login: FC<LoginType> = ({
  onClose,
  isOpenModal,
  onSuccess,
}: LoginType) => {
  // 用户是否获取了验证码
  const [isGeted, setIsGeted] = useState<boolean>(false)
  // 是否显示其他方式登录
  const [isShow, setIsShow] = useState<boolean>(false)

  const [form, setForm] = useState<LoginFormType>({
    phone: '',
    vertifyCode: '',
  })

  // 倒计时结束触发的回调
  function onCountDownEndHandle() {
    setIsGeted(false)
  }

  async function onGetCodeHandle() {
    // 判断用户是否输入手机号
    const reg = /^1[3-9]\d{9}$/
    if (reg.test(form.phone)) {
      setIsGeted(true)
      // 获取验证码, 服务器生成一个随机的字符串，交给第三方，发送短信
      getVertifyCode(form.phone)
    } else {
      // 告知用户
      alert('请输入正确的手机号')
      return
    }
  }

  // 获取验证码
  const getVertifyCodeElement = (
    <span
      className={`${styles['get-vertify-code']} ${isGeted ? styles['get-vertify-code-disabled'] : ''}`}
      onClick={onGetCodeHandle}
    >
      {isGeted ? (
        <CountDown countDown={4} onEnd={onCountDownEndHandle} />
      ) : (
        '获取验证码'
      )}{' '}
    </span>
  )

  function showOtherLoginMethods() {
    console.log('展示其他登录方式')
    setIsShow(true)
  }

  return (
    <Modal
      width={350}
      title="手机登录"
      open={isOpenModal}
      onCancel={onClose}
      footer={null}
      maskClosable={false}
    >
      {/* 手机号码 */}
      <div className="phone">
        <Input
          placeholder="请输入号码"
          value={form.phone.trim()}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{
            marginBottom: '10px',
          }}
        />
      </div>
      {/* 验证码 */}
      <div className={styles.vertify}>
        <Input
          placeholder="输入验证码"
          suffix={getVertifyCodeElement}
          value={form.vertifyCode.trim()}
          onChange={(e) => setForm({ ...form, vertifyCode: e.target.value })}
        />
      </div>
      {/* 登录按钮 */}
      <div className="login">
        <Button
          className={styles['login-btn']}
          type="primary"
          onClick={() => onSuccess(form)}
        >
          登录
        </Button>
      </div>

      {/* 其他方式登录 */}
      <div className={styles.others} onClick={showOtherLoginMethods}>
        <div>{isShow ? 'GitHub 登录' : '其他方式登录'}</div>
      </div>
    </Modal>
  )
}

export default memo(Login)
