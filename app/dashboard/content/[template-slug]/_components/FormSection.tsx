"use client"
import { TEMPLATE } from '@/app/dashboard/_components/TemplateList'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface  PROPS{
    selectedTemplate?:TEMPLATE
    userFormInput:any
    loading:boolean
}
const FormSection = ({ selectedTemplate, userFormInput, loading }:PROPS) => {
const [formData, setFormData] = useState<any>();
  const onSubmit=(e:any)=>{
    e.preventDefault()
    userFormInput(formData)
  }
  const handleInputChange=(event:any)=>{
  const { name, value } = event.target;
  setFormData(({...formData,
    [name]: value,
  }));
  };

  return (
    <div className='p-5 shadow-lg  border rounded-lg'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} />
        <h2 className='font-bold text-2xl mb-2 text-purple-700'>{selectedTemplate?.name}</h2>
        <p className='text-sm line-clamp-3 text-gray-500'>{selectedTemplate?.desc}</p>

        <form className='mt-6'  onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item,index)=>(
               <div className='my-2 flex  gap-2 mb-7 flex-col' key={index}>
                <label className='font-bold'>{item.label}</label>
                {item.field=='input'?
            <Input name={item.name}  required={item?.required}
            onChange={handleInputChange}
            />  : item.field=='textarea'?<Textarea name={item.name}    onChange={handleInputChange} required={item?.required} />:null
            }
               </div>
            ))}
            <Button  disabled={loading} type="submit" className=' py-6 hover:bg-green-500 bg-purple-700 w-full' >{loading&&<Loader2Icon className='animate-spin' />} Generate Content</Button>
        </form>
        </div>
  )
}

export default FormSection