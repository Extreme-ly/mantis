import React, { ReactElement } from 'react'
import Link from 'next/link'

function Notification( { notificationObj }:any ): ReactElement {    
    function readMore(msg:string) {
        return (msg.length < 25 ? msg : msg.slice(0, 25) + " ...")
    }
    return (
        <div className='bg-black w-60 h-max m-2 p-2 pl-1 delay-100 absolute mt-14 z-10'>
            <div>
                { notificationObj.map((notification:any, key:number) => 
                        <div key={key}>
                            { 
                                (notification.link === "") ?
                                <span className='text-white text-sm relative'> { readMore(notification.msg) }</span> :
                                <Link href={notification.link}><a className='text-white text-sm relative'> { readMore(notification.msg) }</a></Link>
                            }
                            { (notification.alert) ?
                                <span className='animate-ping inline-flex h-2 w-2 rounded-full bg-aqua-purple opacity-75 absolute right-0 m-2 mr-3 delay-150'></span>  
                                : null 
                            }
                        </div>
                )}
            </div>
        </div>
    )
}

export default Notification
