import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='items-center flex  justify-center h-auto'><UserProfile /></div>
  )
}

export default page