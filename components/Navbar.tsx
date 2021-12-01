import { AiFillHeart } from 'react-icons/ai'
import { IoMdBowtie, IoMdNotifications } from 'react-icons/io'
import { BsSearch, BsSignpostSplitFill } from 'react-icons/bs'

import React, { ReactElement } from 'react'

export default function Navbar(): ReactElement {
    return (
        <div className="absolute w-screen">

            <div className="flex justify-start absolute w-screen">
              <a href="/posts" className="ml-5"><IoMdBowtie size="55" color="white" /></a>
            </div>

            <div className="flex justify-end absolute w-screen">
              <button className="m-4 mr-2 "><BsSearch color="white" size="33" /></button>
              <input type="text" className="w-30 h-7 mt-5 ml-2 mr-3 bg-transparent border-b-2 border-white text-white text-xl" />

              <a className="m-3 mr-2 " href="#"><AiFillHeart color="white" size="40" /></a>
              <a className="m-3 mr-2 " href="/posts"><BsSignpostSplitFill color="white" size="40" /></a>
              <a className="m-3 mr-2" href="#"><IoMdNotifications color="white" size="40" /></a>
            </div>
        </div>
    )
}