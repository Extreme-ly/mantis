import React, { ReactElement } from 'react'
import Link from 'next/link'

export default function Liked( { liked, posts }:any ) : ReactElement {
    return (
        <div className='w-72 h-max bg-black absolute mt-14 m-2 mr-10 z-10'>
            { liked.map((title:string, key:number) =>
                <div key={key} className='m-1'>
                    <Link href={`/posts/${title.split(' ').join('-')}`}><a className='text-white text-xl relative m-2'> { title } </a></Link>
                </div>
            )}
            
        </div>
    )
}
