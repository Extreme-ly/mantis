import type { NextPage } from 'next'
import Image from 'next/image'
import headBackground from '../public/simon-berger-unsplash.jpeg'
import blogPostOne from '../public/mathew-macquarrie-unsplash.jpeg'
import { AiFillHeart } from 'react-icons/ai'
import { IoMdBowtie, IoMdNotifications } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
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
            <a className="text-3xl m-3 mr-2 "><FaShoppingCart color="white" size="40" /></a>
            <a className="text-3xl m-3 mr-2 "><IoMdNotifications color="white" size="40" /></a>
        </div>

        <div className="section">
          <h1 className="text-mantis text-6xl title animate-fade">Mantis</h1>
          <p className="text-mantis-darker text-xl relative top-11">Welcome to the blog. Look at <a  href="#" className='text-blue-400'>How To Tie A Knot</a></p>
        </div>
      </div>

      <div className="border-white border-2">
        <div className="flex justify-end w-screen absolute m-5 mt-0">
          <Image src={blogPostOne} width="300px" height="240px"/>
        </div>
        <div className="flex flex-wrap justify-start w-screen absolute">
            <span className="relative w-screen">29th November 2021</span>
            <span className="relative w-screen">Arihant Jain</span>

            <div className="mt-10 w-160 h-50">
              <a className="relative" href="/posts/1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales tincidunt porta. Nullam et ligula rutrum, mattis velit eu, pellentesque metus. Ut lacinia tellus a finibus tempor. Etiam tortor ligula, convallis nec maximus eget, gravida vel purus. Proin viverra non mauris malesuada varius. Ut pulvinar, sem ut sagittis efficitur, leo dui varius orci, ac sodales arcu neque id purus. Aenean imperdiet libero commodo ex pulvinar, ac elementum sapien luctus. Cras suscipit vitae est id imperdiet. Aenean pulvinar orci sed orci tincidunt posuere. Maecenas pulvinar diam quam, sit amet ultrices lacus sagittis quis. Phasellus vel rhoncus magna. Curabitur aliquam vel quam eu tempus. Duis in nibh vel nibh volutpat fringilla eget eget augue.</a>
            </div>
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
