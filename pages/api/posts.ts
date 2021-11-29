// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type posts = {
//   title: string,
//   author: string,
//   date: string,
//   content: string,
//   preview: string,
//   id: number,
// }

type posts = {
  test: string
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<posts>
) {
  res.status(200).json({ test: "hi" })
}
