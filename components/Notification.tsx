import React, { ReactElement, useState } from 'react'
import Link from 'next/link'

function Notification( { notificationObj }:any ): ReactElement {   
    const [Expand, setExpand] = useState(false) 
    function readMore(msg:string) {
        return (msg.length < 25 ? msg : msg.slice(0, 25) + " ...") //if the notification is too long make it 25 characters
    }

    return (
        <div className={ (Expand) ? 'bg-black w-3/12 h-max m-2 p-2 pl-1 delay-100 absolute mt-14 z-10' : 'bg-black w-60 h-max m-2 p-2 pl-1 delay-100 absolute mt-14 z-10' }>
            <div>
                { notificationObj.map((notification:any, key:number) => 
                        <div key={key}>
                            { 
                                (notification.link === "") ? //if the message points towards a link check
                                <span className='text-white text-sm relative'> { (Expand) ? notification.msg : readMore(notification.msg) } </span> 
                                :
                                <Link href={notification.link}><a className='text-white text-sm relative'> { (Expand) ? notification.msg : readMore(notification.msg) } </a></Link>
                            }
                            { (notification.alert) ?
                                <span className='animate-ping inline-flex h-2 w-2 rounded-full bg-aqua-purple opacity-75 absolute right-0 m-2 mr-3 delay-150'></span>  
                                : null 
                            }
                        </div>
                )}
                <button className='rounded-full w-40 h-5 relative mt-2 bottom-0 bg-white' onClick={() => ( setExpand(!Expand) )}>{ (Expand) ? "Minimise" : "Expand" }</button>
            </div>
        </div>
    )
}

export default Notification
