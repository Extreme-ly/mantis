import { AiFillHeart } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BsSearch, BsSignpostSplitFill } from 'react-icons/bs'

import React, { ReactElement, useState, useEffect } from 'react'

var searchResults:string[] = []

export default function Navbar({ postsObject }): ReactElement {
    const [searchBox, setsearchBox] = useState(false)    
    const [search, setSearch] = useState()
  
    const handleSearch = (search:string) => {
      let resultsArray:any = {}      
      if ( search === "") {
        setsearchBox(false)
        return [""];       
      }

      for (let post = 0; post < postsObject.length; post++) { //loops through posts object and performs linear search   
        for (let ch = 0; ch < postsObject[post].title.length; ch++)
        {
          if (search[ch]?.toLowerCase() === postsObject[post].title[ch]?.toLowerCase())
          {            
              if ( resultsArray.hasOwnProperty(postsObject[post].title) ) {
                let key = postsObject[post].title
                let val = resultsArray[key]
                resultsArray[key] = val += 1
              } else {
                resultsArray[postsObject[post].title] = 1
              }
          }  
        }
      }      

      setsearchBox(true)    
      
      let result:any[] = Object.keys(resultsArray).map(function(key) { //converts object into an array
        return [key, resultsArray[key]];
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



