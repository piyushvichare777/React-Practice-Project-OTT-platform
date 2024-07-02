import React from 'react'

function Navbar() {
  return (
    <>
      <div className="bg-slate-800 flex justify-center p-3 px-9 font-semibold text-white sticky top-0">
      

            <ul className=" flex gap-10 px-9  ">
              <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
              <li className='cursor-pointer hover:font-bold transition-all'>Movies</li>
              <li className='cursor-pointer hover:font-bold transition-all'>TV shows</li>
              <li className='cursor-pointer hover:font-bold transition-all'>My List</li>
            </ul>
          
        </div>
      
    </>
  );
}

export default Navbar
