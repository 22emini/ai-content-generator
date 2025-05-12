import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({ onSearchInput }:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-600  via-purple-700 to-blue-950  flex flex-col justify-center items-center text-white '>
        
    <h1 className='text-3xl font-bold'>Browse All Templates</h1>
    
    <p>What Would you like create Today?</p>
    <div className='w-full  flex justify-center items-center'>
        <div  className='flex gap-2 p-2 border  w-[50%] bg-white my-5  rounded-3xl'>
          <Search  className='text-primary' />
          <input onChange={(event)=>onSearchInput(event.target.value)} type="text" placeholder="Search templates..." className="  outline-none  w-full  text-gray-500 bg-transparent" />
        </div>
    </div>
    </div>
  )
}

export default SearchSection