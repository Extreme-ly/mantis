import type { NextPage } from 'next'
import Image from 'next/image'
import headBackground from '../public/simon-berger-unsplash.jpeg'
import { AiFillHeart } from 'react-icons/ai'
import { IoMdBowtie, IoMdNotifications } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

const Home: NextPage = () => {
  return (
    <div>
      <div className="title-box">
        <Image src={headBackground} alt="beach-image" height="2500px" className="w-screen absolute" />

        <div className="flex justify-start absolute w-screen ml-10">
          <a href="/"><IoMdBowtie size="55" color="white" /></a>
        </div>

        <div className="flex justify-end absolute w-screen">
            <button className="text-3xl m-4 mr-2 "><BsSearch color="white" size="33" /></button>
            <input type="text" className="w-30 h-7 mt-5 ml-2 mr-3 bg-transparent border-b-2 border-white text-white text-xl" />

            <a className="text-3xl m-3 mr-2 "><AiFillHeart color="white" size="40" /></a>
            <a className="text-3xl m-3 mr-2 "><IoMdNotifications color="white" size="40" /></a>
        </div>

        <div className="section">
          <h1 className="text-mantis text-6xl title animate-fade">Mantis</h1>
          <p className="text-mantis-darker text-xl relative top-11">Welcome to the blog. <a  href="#" >Look at How To Tie A Knot</a></p>
        </div>
      </div>

    </div>

  )
}




// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('http://localhost:3000/api/hello')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default Home
