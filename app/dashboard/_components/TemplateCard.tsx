import React from 'react'
import { TEMPLATE } from './TemplateList'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item:TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/' + item?.slug} >
    <div className='p-5 shadow-md border    hover:scale-x-110 transition-all rounded-md bg-white flex flex-col gap-3 cursor-pointer'>
      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className='font-medium text-lg'>{item.name}</h2>
      <p className='text-sm line-clamp-3 text-gray-500'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard