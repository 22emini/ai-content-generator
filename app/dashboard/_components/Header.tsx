import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex  p-5 shadow-md  bg-white justify-between '>
        
        <div className='flex gap-2 items-center p-2 shadow-md border  ml-8  rounded-md bg-white '> 
            <Search /> 
            <input
              type='text'
              placeholder='Search...'
              className='outline-none w-24 sm:w-40 md:w-64 transition-all duration-200'
            />
            </div>
            <div className='flex gap-2 items-center '>
            <h2 className='hidden sm:block bg-purple-700 p-1 cursor-pointer rounded-full text-xs text-white'>Join Membership for $2/Month</h2><UserButton />
          
            </div>
      
    </div>
  )
}

export default Header
