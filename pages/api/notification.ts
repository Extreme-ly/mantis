import type { NextApiRequest, NextApiResponse } from 'next'

const notfication = [
    {
        id: 1,
        msg: "Christmas Discount Has Started!",
        alert: true,
        link: '',
    },
    {
        id: 2,
        msg: "December has a huge plan for all of you",
        alert: true,
        link: '',
    },
    {
        id: 3,
        msg: 'Check out How To Tie A Knot! Out Now!',
        alert: false,
        link: "/posts/How-To-Tie-A-Knot",
    },  
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json( notfication )
}
