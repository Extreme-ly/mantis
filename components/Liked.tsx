import React, { ReactElement, useState } from 'react'
import Link from 'next/link'

export default function Liked({ liked }:any) : ReactElement {
    function Like({ counter, title }:any) {
        const [Delete, setDelete] = useState(false)
        const [Hide, setHide] = useState(false)

        function DeleteHandler(title:string) {
            localStorage.removeItem(title)
            setDelete(true)
        }

    
        return (
            (Hide) ? null : 
            <div key={counter} className={(Delete) ? 'm-1 animate-fade-out' : 'm-1'} onAnimationEnd={() => ( setHide(true)) }>
                <Link href={`/posts/${title.split(' ').join('-')}`}><a className='text-white text-xl m-2'> { title.slice(0, 25) + " .." } </a></Link>
                <span className='rounded-full w-4 h-4 bg-transparent border-2 border-white absolute right-0 mt-2 mr-1 hover:border-red hover:bg-red-high' onClick={() => ( DeleteHandler(title)) }></span>
            </div>
        )
    }
    

    return (
        <div className='w-72 h-max bg-black absolute mt-14 m-2 mr-10 z-10'>
            { Object.keys(liked).map((title:string, key:number) =>
               <Like key={key} title={title} />
            )}
        </div>
    )
}
