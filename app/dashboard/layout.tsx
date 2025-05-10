import React from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import { Toaster } from '@/components/ui/sonner'


const DashBoardLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <div className=' h-screen'>
        <div className='md:w-64  bg-white h-screen fixed'>
            <SideBar />
        </div>
        <div className='md:ml-72'>
      <Header />
      <div className=''> 
        {children}
        <Toaster />
        </div>
   
    </div>
   
      
    </div>
  )
}

export default DashBoardLayout
