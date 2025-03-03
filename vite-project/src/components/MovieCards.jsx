import React from 'react'
import { useContext } from 'react'
import { MovieContext } from './MovieContext'

function MovieCards({ movieObject }) {

let {handleWatchlist ,watchList} = useContext(MovieContext)
    function doesContain() {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === movieObject.id) {
                return true
            }
        }
        return false
    }
    function removeObject() {
    }

    return (
        <div className='space-x-8 space-y-8'>
            <div className='w-[200px] h-[40vh] ml-8 bg-cover rounded-lg'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`
                }}
            >
                {doesContain(movieObject) ? (
                    <div className='flex justify-center items-center text-xl'>  &#10060;</div>) :
                    (<div onClick={() => handleWatchlist(movieObject)} className='flex justify-center items-center text-xl'> &#129505;</div>)
                }
                <h5 className="text-white text-center text-xl rounded-lg p-2 bg-gray-900/25 ">{movieObject.title}</h5>
            </div>

        </div>
    )
}

export default MovieCards