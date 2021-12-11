import type { NextPage } from 'next'
import Image from 'next/image'
import headBackground from '../public/simon-berger-unsplash.jpeg'
import Navbar from '../components/Navbar'


const Home: NextPage = ( {posts}:any ) => {
  
  let mostViewedPost; 

  let view:number = 0
  for (let i = 0; i < posts.length; i++)
  {
    if ( view < posts[i].views ){ 
      view = posts[i].views
      mostViewedPost = posts[i]
    }
  };

  
    
  return (
    <div>
      <div className="title-box">
        <Image src={headBackground} alt="beach-image" height="2700px" className="w-screen absolute" />
        <Navbar postsObject={posts} darkMode={false} />

        <div className="section">
          <h1 className="text-mantis text-6xl title animate-fade">Mantis</h1>
          <p className="text-mantis-darker  text-xl relative top-11">Welcome to the blog. Look at <a  href={`/posts/${mostViewedPost.title.split(' ').join('-')}`} className='text-blue-400'>{mostViewedPost.title}</a></p>
        </div>
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

export default Home
