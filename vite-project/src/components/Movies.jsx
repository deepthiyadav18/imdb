import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards'
import axios from 'axios'
import Pagination from './Pagination';
import { MovieContext } from './MovieContext';

function Movies() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);


  const handleNext = () => {
    setPage(page + 1);
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }


  console.log(movies);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ba38ced4443b2191bc13872c0b336aed&language=en-US&page=${page}`)
      .then((response) => {
        //console.log(response.data.results)
        setMovies(response.data.results);

      }).catch((err) => {
        console.log('cannot fetch api');
      });
  }, [page])

  return (
    <div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {
          movies.map((movieObj) => (
            <MovieCards movieObject={movieObj} />
          ))
        }
      </div>
      <Pagination pageNumber={page} prevfn={handlePrev} nextfn={handleNext} />
    </div>

  )

}

export default Movies