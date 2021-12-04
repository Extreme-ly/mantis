import Navbar from "../components/Navbar"
// import PostBox from "../components/postBox"
// import "../styles/posts.css"
import type { NextPage } from 'next'
import { ReactElement, useState } from "react"
import Image from "next/image"
import likeHeart from '../public/like-heart.png'
import { IoMdBowtie } from "react-icons/io"

function PostBox({ author, title, content, date }): ReactElement {
    const [like, setLike] = useState(false)

    function handleLike() {
        setLike(true)
    }
    
    return (
            <div className="flex">
                    <div className="flex w-2/3 h-96 m-20 mb-5 mr-0 ml-10 border-gray border-2 justify-start" onDoubleClick={() => ( setLike(true) )}>
                        <p className="text-skin text-lg w-screen absolute m-2 mb-0 mr-0">{ date }</p>
                        <p className="text-skin text-lg w-screen absolute mt-8 mb-0 ml-2">{ author }</p>
                        <p className="text-orange-matte text-2xl m-20 ml-2">{ title }</p>

                        <div className="absolute m-10 mt-32 mr-0 ml-2 w-3/5 mb-2">
                            <p className="text-orange-light text-xl absolute">{ content }</p>
                        </div>

                        <div className={ like ? "grid select-none place-items-center relative left-0 top-0 right-0 bottom-0 m-auto transform scale-0 opacity-0 animate-like" : "relative left-0 top-0 right-0 bottom-0 m-auto transform scale-0 opacity-0" } >
                            <Image src={likeHeart} height="200px" width="200px" className={like ? "visible" : "hidden"} />
                        </div>
                    </div>

                    <div className="w-1/4 h-96 bg-gray rounded-lg rounded-tl-none rounded-bl-none mt-20">
                    </div>
             </div>
    )
}

const PostPage: NextPage = ({ posts }) => {
    return (
        <div className="bg-black">
            <Navbar />
            <a href="/" className="ml-5 absolute left-0"><IoMdBowtie size="55" color="white" /></a>

            <div>
                { posts.map((post) => 
                    <PostBox title={post.title} author={post.author} title={post.title} content={post.content} date={post.date} />
                )}
            </div>
      
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
}

export default PostPage
