import Navbar from "../components/Navbar"
import type { NextPage } from 'next'
import { ReactElement, useState } from "react"
import Image from "next/image"
import likeHeart from '../public/like-heart.png'
import { GiPrayingMantis } from 'react-icons/gi'
import { useTheme } from 'next-themes'


function PostBox({ author, title, content, date }): ReactElement {
    const [like, setLike] = useState(false)

    return (
            <div className="flex">
                    <div className="flex w-2/3 h-96 m-20 mb-5 mr-0 ml-10 border-gray border-2 justify-start" onDoubleClick={() => ( setLike(true) )}>
                        <p className="text-black-smooth dark:text-skin text-lg w-screen absolute m-2 mb-0 mr-0 select-none">{ date }</p>
                        <p className="text-black-smooth dark:text-skin text-lg w-screen absolute mt-8 mb-0 ml-2 select-none">{ author }</p>
                        <a href={ `posts/${title?.split(' ').join('-')}` } className="text-black-smooth dark:text-orange-matte  text-2xl m-20 ml-2">{ title }</a>

                        <div className="absolute m-10 mt-32 mr-0 ml-2 w-3/5 mb-2 select-none">
                            <p className="text-gray-line dark:text-orange-light text-xl absolute">{ content }</p>
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
        <div className="bg-white dark:bg-black">
            <Navbar postsObject={posts} darkMode={true} />
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
