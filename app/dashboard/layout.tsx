"use client"
import React, { useState } from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import { Toaster } from '@/components/ui/sonner'
// import { TotalUsageContext } from '../(context)/TotalUsageContext'


const DashBoardLayout = ({children}: { children: React.ReactNode }) => {
  // Initialize totalUsage with a default value (e.g., 0)
  const [totalUsage, setTotalUsage] = useState<Number>(0);

  return (
    // <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
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
    // </TotalUsageContext.Provider>
  )
}

export default DashBoardLayout
