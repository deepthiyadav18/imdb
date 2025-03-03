import React from 'react'

function Pagination({pageNumber,prevfn,nextfn}) {
  return (
    <div className='bg-gray-500 h-[40px] w-full mt-8 opacity-70 flex justify-center px-2 py-2'>
        <div onClick={prevfn}className='px-6'><i class=" fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={nextfn} className='px-6'><i class=" fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination