import { AiFillHeart } from 'react-icons/ai'
import { RiMoonClearFill } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import { BsSearch, BsSignpostSplitFill, BsFillSunFill } from 'react-icons/bs'

import React, { ReactElement, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { GiPrayingMantis } from 'react-icons/gi'

var searchResults:string[] = []

export default function Navbar({ postsObject, darkMode }): ReactElement {
    const [searchBox, setsearchBox] = useState(false)    
    const [search, setSearch] = useState()
    const {theme, setTheme} = useTheme()


    // const DarkModeToggle = () => {
    //   return (
    //     <button className="m-3 mr-2"> { (theme === "light") ? <RiMoonClearFill color="#212121" size="40" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /> : <BsFillSunFill color="white" size="40" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /> }  </button>
    //   )
    // }
    
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
                      <button className="m-4 mr-2 "><BsSearch  color={ (theme === 'light' ? 'black' : 'white') } size="33" /></button>
                      <input type="text" className="w-30 h-7 mt-5 ml-2 mr-3 bg-transparent border-b-2 dark:border-white border-black text-black dark:text-white text-xl delay-1000" onChange={(e) => ( searchResults = handleSearch(e.target.value) )} />

                      {
                        (searchBox) ?
                          <div className="bg-menu-black h-auto w-80 fixed top-14 right-36 delay-1000">
                              { searchResults.map((result) =>
                              <div className="ml-5">
                                <a href={`/posts/${result.split(' ').join('-')}`} className="text-xl relative text-white">{(result.length >= 20) ? result.slice(0, 25) + "..." : result}</a>
                              </div>
                              )}             
                          </div>

                        : null
                      }
                      
                      { (darkMode) ?         <button className="m-3 mr-2"> { (theme === "light") ? <RiMoonClearFill color="#212121" size="40" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /> : <BsFillSunFill color="white" size="40" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /> }  </button> : null}
                      <a className="m-3 mr-2 " href="#"><AiFillHeart color={ (theme === 'light' ? '#212121' : 'white') } size="40" /></a>
                      <a className="m-3 mr-2 " href="/browse"><BsSignpostSplitFill color={ (theme === 'light' ? '#212121' : 'white') } size="40" /></a>
                      <a className="m-3 mr-2" href="/notif"><IoMdNotifications color={ (theme === 'light' ? '#212121' : 'white') } size="40" /></a>
                    </div>
              </div>
        </div>
        <div>
          <a href="/" className="ml-5 absolute left-0 mt-2"><GiPrayingMantis size="45" color={ (theme === 'light' ? '#212121' : 'white') } /></a>
        </div>

      </>
    )
}



