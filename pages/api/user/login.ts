import { NextApiRequest, NextApiResponse } from 'next'
import getSession from 'utils/getSession'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { phone, vertifyCode } = req.body?.form
  // 查看验证码是否和 redis 中的一致 (session)
  const session = await getSession(req, res)
  if (session.vertifyCode === vertifyCode) {
    // 登录成功
    res.json({
      code: 200,
      data: null,
      msg: '登录成功',
    })
  } else {
    res.json({
      code: 400,
      data: null,
      msg: '验证码错误',
    })
  }
}
