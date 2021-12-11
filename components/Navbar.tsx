import { AiFillHeart } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BsSearch, BsSignpostSplitFill } from 'react-icons/bs'

import React, { ReactElement, useState } from 'react'
import Logo from '../public/logo mantis.png'
import Image from 'next/image'
import Link from 'next/link'


var searchResults:string[] = []

export default function Navbar({ postsObject }:any ): ReactElement {
    const [searchBox, setsearchBox] = useState(false)    
    const [search, setSearch] = useState<string[] | null>()
    
    const handleSearch = (search:string) => {
      let resultsDict:any = {}      
      if ( search === "") {
        setsearchBox(false)
        return [""];       
      }

      for (let post = 0; post < postsObject.length; post++) { //loops through posts object and performs linear search   
        for (let ch = 0; ch < postsObject[post].title.length; ch++)
        {
          if (search[ch]?.toLowerCase() === postsObject[post].title[ch]?.toLowerCase())
          {            
              if ( resultsDict.hasOwnProperty(postsObject[post].title) ) {
                let key = postsObject[post].title
                let val = resultsDict[key]
                resultsDict[key] = val += 1                
              } else {
                resultsDict[postsObject[post].title] = 1
              }
          }  
        }
      }            

      setsearchBox(true)    
      
      let result:any[] = Object.keys(resultsDict).map(function(key) { //converts object into an array
        return [key, resultsDict[key]];
      });

      result.sort(function(first, second) {  //sorts dictionary in descending order
        return second[1] - first[1];
      });
      
      let titles:string[] = [] 
      for (let i = 0; i < result.length; i++) {
        titles.push(result[i][0]) //makes an array with only the titles for the map function
      }
            
      setSearch(titles)
      return titles
    }    

    return (
      <>       
        <div className="absolute w-screen">
              <div className="flex justify-end absolute w-screen">
                    <div className="flex justify-end absolute w-screen">
                    <button className="m-4 mr-2 "><BsSearch color="white" size="33" /></button>
                    <input type="text" className="w-30 h-7 mt-5 ml-2 mr-3 bg-transparent border-b-2 border-white text-white-darker focus:outline-none text-xl delay-1000" onChange={(e) => ( searchResults = handleSearch(e.target.value) )} />
                    

                      {
                        (searchBox) ?
                          <div className="bg-menu-black z-10 absolute h-auto w-80 fixed top-14 right-36 delay-1000">
                              { searchResults.map((result) =>
                              <div className="ml-5">
                                <Link href={`/posts/${result.split(' ').join('-')}`}><a  className="text-xl relative text-white">{(result.length >= 20) ? result.slice(0, 25) + "..." : result}</a></Link>
                              </div>
                              )}             
                          </div>

                        : null
                      }
                      
                      <Link href="#"><a className="m-3 mr-2 "><AiFillHeart color="white" size="40" /></a></Link>
                      <Link href="/browse"><a className="m-3 mr-2 " href="/browse"><BsSignpostSplitFill color="white" size="40" /></a></Link>
                      <Link href="/notif"><a className="m-3 mr-2"><IoMdNotifications color="white" size="40" /></a></Link>
                    </div>
              </div>
        </div>
        <div>
          <Link href='/'><a className="ml-5 absolute left-0 mt-2"><Image src={Logo} width="50px" height="60px" /></a></Link>
        </div>
      </>
    )
}



