import IResponse from '../../responseType'
import { AxiosResponse } from 'axios'

export interface LoginFormType {
  phone: string
  vertifyCode: string
}

import request from '../../index'
export const getVertifyCode = async (phone: string) => {
  request.post('/api/user/getVertifyCode', { phone })
}

// 导出一个名为login的异步函数，接收一个LoginFormType类型的参数form
export const login: (form: LoginFormType) => Promise<IResponse> = async (
  form: LoginFormType,
) => {
  // 发送一个POST请求，请求地址为'/api/user/login'，请求体为form
  const res = await request.post('/api/user/login', { form })
  return res.data as IResponse
}
