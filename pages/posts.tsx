import Navbar from "../components/Navbar"
// import PostBox from "../components/postBox"
import type { NextPage } from 'next'
import { ReactElement } from "react"
import Image from "next/image"
import blogPostOne from '../public/christian-dubovan-unsplash.jpeg'

function PostBox(): ReactElement {
    return (
        <div className="flex">
            <div className="flex w-2/3 h-96 m-20 mr-0 ml-10 border-gray border-2 justify-start">
                <p className="text-aqua-purple text-lg w-screen absolute m-2 mb-0 mr-0">29th December 2021</p>
                <p className="text-aqua-purple text-lg w-screen absolute mt-8 mb-0 ml-2">Melissa Fumero</p>
                <p className="text-aqua-blue text-2xl m-20 ml-2">How To Tie A Knot</p>

                <div className="absolute m-10 mt-32 mr-0 ml-2 w-3/5 mb-2">
                    <p className="text-aqua-lightblue text-xl absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales tincidunt porta. Nullam et ligula rutrum, mattis velit eu, pellentesque metus. Ut lacinia tellus a finibus tempor. Etiam tortor ligula, convallis nec maximus eget, gravida vel purus. Proin viverra non mauris malesuada varius. Ut pulvinar, sem ut sagittis efficitur, leo dui varius orci, ac sodales arcu neque id purus. Aenean imperdiet libero commodo ex pulvinar, ac elementum sapien luctus. Cras suscipit vitae est id imperdiet. Aenean pulvinar orci sed orci tincidunt posuere. Maecenas pulvinar diam quam, sit amet ultrices lacus sagittis quis. Phasellus vel rhoncus magna. Curabitur aliquam vel quam eu tempus. Duis in nibh vel nibh yuio man</p>
                </div>
            </div>
            <div className="w-1/4 h-96 bg-gray rounded-lg rounded-tl-none rounded-bl-none mt-20">
                {/* <Image src={blogPostOne} className="w-32 h-96 rounded-lg rounded-tl-none rounded-bl-none absolute"  /> */}
            </div>
        </div>
    )
}

const PostPage: NextPage = () => {
    return (
        <div className="bg-black h-screen w-screen">
            <Navbar />

            <PostBox />
        </div>
    )
}

export default PostPage
