import Banner from "./components/Banner"
import MovieCards from "./components/MovieCards"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WatchList from "./components/WatchList"
import Movierecommendation from "./components/Movierecommendation"
import Movies from "./components/Movies"
import { useEffect, useState } from "react"
import { MovieContext } from "./components/MovieContext"


function App() {

  const [watchList , setWatchlist] = useState([]);

  const handleWatchlist = (movieObj)=>{
    let updatedWatchlist = [...watchList,movieObj]
    setWatchlist(updatedWatchlist)
    console.log(updatedWatchlist)

    localStorage.setItem('movies',JSON.stringify(updatedWatchlist))
  }

  useEffect(()=>{
    let moviesfromLS= localStorage.getItem('movies')
    if(!moviesfromLS){
      return 
    }
    setWatchlist(JSON.parse(moviesfromLS))
  } , [])
  
  return (
    <>
    <MovieContext.Provider value={{handleWatchlist ,watchList}}>
      <BrowserRouter>
        <Navbar />
        <div className="flex  flex-wrap space-y-10">
          <Routes>
            <Route path='/' element={
              <>
                <Banner />
                <Movies />
              </>
            }
            />
            <Route path='/watchlist' element={<WatchList watchList={watchList}/>} />
            <Route path='/recommend' element={<Movierecommendation />} />
          </Routes>
        </div>
      </BrowserRouter>
      </MovieContext.Provider>
    </>
  )
}


export default App
