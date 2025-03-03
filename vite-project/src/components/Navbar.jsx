import React from 'react'
import Logo from  '../assets/movieLogo.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex'>
      <img className='h-16'src={Logo} alt="Logo"/> 
      <div className='flex space-x-6 items-center'>
      <Link to={'/'} className='text-3xl font-bold text-blue-400'>Movies</Link>
      <Link to={'/watchlist'} className='text-3xl font-bold text-blue-400'>Watchlist</Link>
      <Link to={'/recommend'} className='text-3xl font-bold text-blue-400'>Recommendations</Link>
    </div>
    </div> 
  )
}

export default Navbar