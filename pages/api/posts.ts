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

const data = [
  { 
    title: "How To Tie A Knot", author: "Ari Gibson", date: "29th july 2019", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales tincidunt porta. Nullam et ligula rutrum, mattis velit eu, pellentesque metus. Ut lacinia tellus a finibus tempor. Etiam tortor ligula, convallis nec maximus eget, gravida vel purus. Proin viverra non mauris malesuada varius. Ut pulvinar, sem ut sagittis efficitur, leo dui varius orci, ac sodales arcu neque id purus. Aenean imperdiet libero commodo ex pulvinar, ac elementum sapien luctus. Cras suscipit vitae est id imperdiet. Aenean pulvinar orci sed orci tincidunt posuere. Maecenas pulvinar diam quam, sit amet ultrices lacus sagittis quis. Phasellus vel rhoncus magna. Curabitur aliquam vel quam eu tempus. Duis in nibh vel nibh volutpat fringilla eget eget augue.", preview: "Lorem Ipsum Mai Tai Yu Waiton", views: 100, id: 0 
  },
  {
    title: "The Art Of Origami", author: "Ari Gibson", date: "29th july 2019", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales tincidunt porta. Nullam et ligula rutrum, mattis velit eu, pellentesque metus. Ut lacinia tellus a finibus tempor. Etiam tortor ligula, convallis nec maximus eget, gravida vel purus. Proin viverra non mauris malesuada varius. Ut pulvinar, sem ut sagittis efficitur, leo dui varius orci, ac sodales arcu neque id purus. Aenean imperdiet libero commodo ex pulvinar, ac elementum sapien luctus. Cras suscipit vitae est id imperdiet. Aenean pulvinar orci sed orci tincidunt posuere. Maecenas pulvinar diam quam, sit amet ultrices lacus sagittis quis. Phasellus vel rhoncus magna. Curabitur aliquam vel quam eu tempus. Duis in nibh vel nibh volutpat fringilla eget eget augue.", preview: "Lorem Ipsum Mai Tai Yu Waiton", views: 500,  id: 1 
  },
  {
    title: "Orange Flavoured Popsicles", author: "Ari Gibson", date: "29th july 2019", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales tincidunt porta. Nullam et ligula rutrum, mattis velit eu, pellentesque metus. Ut lacinia tellus a finibus tempor. Etiam tortor ligula, convallis nec maximus eget, gravida vel purus. Proin viverra non mauris malesuada varius. Ut pulvinar, sem ut sagittis efficitur, leo dui varius orci, ac sodales arcu neque id purus. Aenean imperdiet libero commodo ex pulvinar, ac elementum sapien luctus. Cras suscipit vitae est id imperdiet. Aenean pulvinar orci sed orci tincidunt posuere. Maecenas pulvinar diam quam, sit amet ultrices lacus sagittis quis. Phasellus vel rhoncus magna. Curabitur aliquam vel quam eu tempus. Duis in nibh vel nibh volutpat fringilla eget eget augue.", preview: "Lorem Ipsum Mai Tai Yu Waiton", views: 1, id: 2 
  },
]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json( data )
}
