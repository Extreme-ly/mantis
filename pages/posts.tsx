import Navbar from "../components/Navbar"
// import PostBox from "../components/postBox"
import type { NextPage } from 'next'
import { ReactElement } from "react"

function PostBox(): ReactElement {
    return (
        <div className="flex">
            <div className="w-5/6 h-96 bg-gray m-20 mr-0 ml-10">
            </div>
            <div className="w-32 h-96 bg-gray rounded-lg rounded-tl-none rounded-bl-none mt-20">

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
