"use client"
import { Button } from '@/components/ui/button'

import { LayoutDashboard, Shield, Menu, X, Home, History, Settings, Wallet, HomeIcon, FileClock } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import path from 'path'
import React, { useEffect, useState } from 'react'


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const MenuList=[
    { name:'Home',
        icon: HomeIcon,
        path: '/dashboard'
     },
     { name:'History',
        icon: FileClock,
        path: '/dashboard/history'
     },
     { name:'Billing',
        icon: Wallet,
        path: '/dashboard/billing'
     },
     { name:'Settings',
        icon: Settings,
        path: '/dashboard/settings'
     },
   
  ]
const  path=usePathname();
useEffect(()=>{

  console.log(path)
},[])

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-6 left-3 z-30">
        {!isOpen && (
          <Button 
            onClick={toggleSidebar} 
            variant="outline" 
            size="icon" 
            className="bg-white shadow-md  hover:rounded-full rounded-md"
          >
            <Menu size={20} />
          </Button>
        )}
      </div>

      {/* Sidebar - responsive */}
      <div className={`
        fixed lg:static z-20
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out
        shadow-md bg-white 
        h-screen
        w-72 md:w-64 lg:w-72
      `}>
        <div className="p-5 lg:p-7 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Image src="/logo.svg" width="130" height="40" alt="logo" className="w-32 md:w-36 lg:w-40" />
           
          </div>
          <hr className='my-6 border'></hr>

          {/* Menu items */}
          <div  className='mt-3'>
            {MenuList.map((item) => (
              <div key={item.name} className={`flex  gap-2 p-3 hover:bg-blue-800 hover:text-white rounded-lg cursor-pointer mt-5 ${path==item.path ? 'bg-blue-800 text-white' : ''}`}>
                <item.icon className="mr-2 " />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Progress footer */}
          <div className="mt-auto w-full pb-6">
           
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default SideBar