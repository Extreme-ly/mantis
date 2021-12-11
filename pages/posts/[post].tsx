import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import Navbar from '../../components/Navbar'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

function findPost(dict:any, targetVal:any) {    
    for (let i = 0; i < dict.length; i++) {
        if ( dict[i].title === targetVal?.split('-').join(' ')) {
            return dict[i]
        }      
    }
}

const Post:NextPage= ({ posts }:any ) => {
    const router = useRouter()
    const { post } = router.query
    
    const postObject = findPost(posts, post)        
    return (
        <div>
            <div className="flex w-screen h-20 bg-black">
                <Navbar postsObject={posts} />
            </div>

            <div className="text-5xl flex justify-center m-10  w-screen absolute mb-28">
                <span className="absolute">{postObject.title.split('-').join(' ')}</span>
                <div className="w-96 h-1 bg-black relative top-10 mt-4"></div>
            </div>

            <div className="flex justify-start w-screen absolute top-32">
                <div className="rounded-full bg-black w-20 h-20 m-2">
                </div>
                <div className="w-56 h-56 p-5">
                    <div>
                        <span className="text-xl gray w-max">{postObject.date}</span>
                    </div>
                    <div>
                        <span className="text-xl gray">{postObject.author}</span>
                    </div>
                </div>
            </div>

            <div className="flex relative w-4/5 m-36">
                <p>{postObject.postText}</p>
            </div>

            <footer className="absolute h-32 bg-black">
                <div className="custom-shape-divider-top-1638858916 absolute">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>

                <div className="absolute flex flex-row w-screen top-0 mt-10 space-x-4 justify-start">
                    
                    <Link href="twitter.com">
                        <a className="text-skin text-xl mt-5 ml-5">{postObject.author}</a>
                    </Link>
                    <BsTwitter size="50" color="#FED2AA" className="relative m-2 top-0" />
                    
                    <Link href="github.com">
                        <a className="text-skin text-xl mt-5 ml-5">{postObject.author}</a>
                    </Link>
                        <BsGithub size="50" color="#FED2AA" className="relative m-2 top-0" />
                    
                    <Link href="instagram.com">
                        <a className="text-skin text-xl mt-5 ml-5">{postObject.author}</a>
                    </Link>
                        <BsInstagram size="50" color="#FED2AA" className="relative m-2 top-0" />    

                        <div className="absolute flex w-screen justify-end">
                            <span className='text-4xl text-white mr-10 mt-4'>Mantis</span>
                        </div>                
                </div>
            
            </footer>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
      revalidate: 10,
    }
}

export const getStaticPaths:GetStaticPaths = async() => {
    type Data = {
        title: string,
        author: string,
        date: string,
        content: string,
        preview: string,
        views: number,
        id: number,
        postsText: string,
    }

    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
  
    const paths = posts.map((post:Data) => ({
      params: { post: post.title.split(' ').join('-') }
    }))
  
    return { paths, fallback: false }
}



export default Post