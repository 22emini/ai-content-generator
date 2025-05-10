"use client"
import Template from '@/app/(data)/Template'
import React, { use, useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
import { UserSearch } from 'lucide-react'

export interface TEMPLATE{
 name: string,
  desc: string,
  category: string,
  icon: string,
  aiPrompt: string,
  slug: string,
  form?: FORM[]
}
export interface FORM {
  field: string,
  name: string,
  label: string,
  required?: boolean,
}

const TemplateList = ({userSearchInput}:any) => {
  const[ templateList, setTemplateList] = useState(Template)
  useEffect(() => {
  
    if(userSearchInput){
      const filterData = Template.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
      setTemplateList(filterData);
    } else {
      setTemplateList(Template);
    }
  }, [userSearchInput])

  return (
    <div className='grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  )
}

export default TemplateList;
