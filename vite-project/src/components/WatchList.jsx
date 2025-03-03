import React, { useState, useEffect, useContext } from 'react'
import { MovieContext } from './MovieContext';
import genreids from '../utilities/genre';

function WatchList() {
  const { watchList, removeFromWatchlist } = useContext(MovieContext);
  const [search, searchData] = useState('');
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState('All Genres');

  function handleSearch(e) {
    searchData(e.target.value)
  }

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(["All Genres",...temp])
  }, [watchList])

  function handleFilter(genre){
      setCurrGenre(genre)
  }
  
  return (
    <>
      {/*filters*/}
      <div className=' flex justify-center m-4 w-full'>
        {genreList.map((genre) => {
          
          return (<div 
          key={genre}
          onClick={()=>handleFilter(genre)}
          className={
            currGenre==genre
            ?"mx-4 flex justify-center h-[3rem] w-[9rem] bg-blue-400 font-bold rounded-full text-white text-center items-center"
            :"mx-4 flex justify-center h-[3rem] w-[9rem] bg-gray-400 font-bold rounded-full text-white text-center items-center "
          }
          >
            {genre}
          </div>);
        })}
      </div>

      {/*search*/}
      <div className='flex justify-center w-full my-10'>
        <input type='text' placeholder='Search for movies' className='bg-gray-200 w-[20rem] h-[3rem] my-8 border-collapse 
        'onChange={handleSearch}></input>
      </div>

      {/*table data*/}
      <div className="m-8 w-full overflow-x-auto">
        <table className='w-full table-auto border-collapse'>
          <thead className='border border-black-200 bg-gray-50'>
            <tr>
              <td className='px-6 py-4 text-center font-bold'>Movie name</td>
              <td className='px-6 py-4 text-center font-bold'>Ratings</td>
              <td className='px-6 py-4 text-center font-bold'>Popularity</td>
              <td className='px-6 py-4 text-center font-bold'>Genre</td>
              <td className='px-6 py-4 text-center font-bold'>Delete movies</td>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
              if(currGenre=="All Genres"){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currGenre
              }
            })
            
            .filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLowerCase());
            })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className='border-b-2 '>
                    <td className='px-6 py-4 text-center flex space-x-4'>
                      <img
                        className='h-[6rem] w-[10rem]'
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt="movie" />
                      <div className='p-10'>{movieObj.title}</div>
                    </td>
                    <td className='className="px-6 py-4 text-center'>{movieObj.vote_average}</td>
                    <td className='className="px-6 py-4 text-center'>{movieObj.popularity}</td>
                    <td className='className="px-6 py-4 text-center'>{genreids[movieObj.genre_ids[0]]}</td>
                    <td 
                      onClick={() => removeFromWatchlist(movieObj.id)}
                      className='text-red-500 px-6 py-4 text-center cursor-pointer'>
                      Delete
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList