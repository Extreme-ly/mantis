import { AiFillHeart } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BsSearch, BsSignpostSplitFill } from 'react-icons/bs'

import React, { ReactElement, useState, useEffect } from 'react'

var searchResults:string[] = []

export default function Navbar({ postsObject }): ReactElement {
    const [searchBox, setsearchBox] = useState(false)    
    const [search, setSearch] = useState()
  
    const handleSearch = (search:string) => {
      let resultsArray:string[] = []
      
      if ( search === "") {
        setsearchBox(false)
        return [""];       
      }

      for (let post = 0; post < postsObject.length; post++) {
        for (let ch = 0; ch < search.length; ch++)
        {
          if (search[ch].toLowerCase() === postsObject[post].title[ch]?.toLowerCase())
          {            
            (resultsArray.indexOf(postsObject[post].title) === -1 ? resultsArray.push(postsObject[post].title) : null    )     
          } else {
            let index = resultsArray.indexOf(postsObject[post].title)            
            if ( index !== -1) {
              resultsArray.filter(title => title !== resultsArray[index])
            }
          }       
        }
      }

      setsearchBox(true)    
      
      setSearch(resultsArray)            
      return resultsArray
    }    

    return (
      <>       
        <div className="absolute w-screen">
              <div className="flex justify-end absolute w-screen">
                    <div className="flex justify-end absolute w-screen">
                      <button className="m-4 mr-2 "><BsSearch color="white" size="33" /></button>
                      <input type="text" className="w-30 h-7 mt-5 ml-2 mr-3 bg-transparent border-b-2 border-white text-white text-xl delay-1000" onChange={(e) => ( searchResults = handleSearch(e.target.value) )} />
                    
                      {
                        (searchBox) ?
                          <div className="bg-menu-black h-auto w-80 absolute top-14 right-36 delay-1000">
                              { searchResults.map((result) =>
                              <div className="ml-5">
                                <a href="/posts" className="text-xl relative text-white">{(result.length >= 20) ? result.slice(0, 25) + "..." : result}</a>
                              </div>
                              )}             
                          </div>

                        : null
                      }
                      
     

                      <a className="m-3 mr-2 " href="#"><AiFillHeart color="white" size="40" /></a>
                      <a className="m-3 mr-2 " href="/posts"><BsSignpostSplitFill color="white" size="40" /></a>
                      <a className="m-3 mr-2" href="#"><IoMdNotifications color="white" size="40" /></a>
                    </div>
              </div>
        </div>
      </>
    )
}



