import Navbar from "../components/Navbar"
import type { NextPage } from 'next'
import { ReactElement, useState, useEffect, useRef } from "react"
import Image from "next/image"
import likeHeart from '../public/like-heart.png'
import Link from 'next/link'


const PostPage: NextPage = ( { posts, notification }:any ) => { 
    const [local, setLocal] = useState<Storage>()

    function PostBox( { author, title, content, date }:any ): ReactElement {
        const [like, setLike] = useState<boolean>()
        const [titlePost, setTitlePost] = useState('')

        function handleLike(title:string) {
            setLike(true)   
            setTitlePost(title)     
        }

        const isInitialMount = useRef(true);
        useEffect(() => {
            if (isInitialMount.current) {
                setLocal(localStorage)
                setLike(localStorage.hasOwnProperty(title))
                isInitialMount.current = false;
            } else {
                const Storage = window.localStorage;                
                Storage.setItem(title, title)
                setLocal(localStorage)     
            }
            
        }, [titlePost])

        return (
                <div className="flex">
                        <div className="flex w-2/3 h-96 m-20 mb-5 mr-0 ml-10  border-white-darker border-2 justify-start" onDoubleClick={() => ( handleLike(title) )}>
                            <p className="absolute text-skin text-lg absolute m-2 mb-0 mr-0">{ date }</p>
                            <p className="absolute text-skin text-lg absolute mt-8 mb-0 ml-2">{ author }</p>
                            <Link href={ `posts/${title?.split(' ').join('-')}` }><a className="absolute text-orange-matte text-2xl m-20 ml-2">{ title }</a></Link>

                            <div className="absolute m-10 mt-32 mr-0 ml-2 w-3/5 mb-2">
                                <p className="text-orange-light text-xl absolute">{ content }</p>
                            </div>

                            <div className={ like ? "flex justify-center select-none relative left-0 top-0 right-0 bottom-0 m-auto transform scale-0 opacity-0 drop-shadow-2xl animate-like" : "relative left-0 top-0 right-0 bottom-0 m-auto transform scale-0 opacity-0" } >
                                <Image src={likeHeart} height="140px" width="140px" className={like ? "visible" : "hidden"} />
                            </div>
                        </div>

                        <div className="w-1/4 h-96 bg-orange rounded-lg rounded-tl-none rounded-bl-none mt-20">
                        </div>
                </div>
        )
    }   


    return (
        <div className="bg-black">
            <Navbar postsObject={posts} notification={notification} liked={local} posts={posts} />
            <div>
                { posts.map((post:any, key:number) => 
                    <PostBox key={key} title={post.title} author={post.author} content={post.content} date={post.date} />
                )}
            </div>
            
        </div>
    )
}

export async function getStaticProps() {
    const postsRaw = await fetch('http://localhost:3000/api/posts')
    const posts = await postsRaw.json()

    const notifications = await fetch('http://localhost:3000/api/notification')
    const notification = await notifications.json()
  

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
        notification,
      },
    }
}

export default PostPage
