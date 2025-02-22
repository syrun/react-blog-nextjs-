import { ISession } from 'type'
import { getIronSession } from 'iron-session'
import ironOptins from 'config/ironOptins'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session: ISession = await getIronSession(req, res, ironOptins)
  return session
}
