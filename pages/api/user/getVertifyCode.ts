import { NextApiRequest, NextApiResponse } from 'next'
import { mock } from 'mockjs'
import getSession from 'utils/getSession'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res)
  const vertifyCode = mock('@string("number", 5)')
  console.log(vertifyCode);
  // 将验证码存储在 session 中 (真实的业务场景是存储在 redis 中)
  session.vertifyCode = vertifyCode;
  await session.save();
  // 返回响应，真实的业务场景是：在这里请求第三方，第三方响应数据，通过 code 字段，来表示短信是否发送成功

  res.json({
    code: 200,
    data: null,
    msg: null,
  })
}
