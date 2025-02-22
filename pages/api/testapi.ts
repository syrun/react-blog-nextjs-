import { mock } from 'mockjs'
import { NextApiResponse } from 'next'
import { NextRequest } from 'next/server'

export default (req: NextRequest, res: NextApiResponse) => {
  const data = mock({
    'list|10': [
      {
        'id|+1': 1,
        name: '@name',
      },
    ],
  })
  res.status(200).json(data)
}
