import React from 'react'
import FormSection from './_components/FormSection'
import OutPutSection from './_components/OutPutSection'
import { TEMPLATE } from '../../_components/TemplateList'
import Template from '@/app/(data)/Template'

interface  PROPS{
  slug: string
  params: {
    'template-slug': string
  }
}
const  CreateContent = (props: PROPS) => {

  const selectedTemplate:TEMPLATE|undefined= Template?.find((item)=>item.slug===props.params['template-slug']);
  return (
    <div className='grid grid-col-1 md:grid-cols-3 gap-5 p-5'>
 {/* FormSection */}
<FormSection selectedTemplate={selectedTemplate}  userFormInput={(v:any)=>console.log(v)}/>

 {/* OutputSection */}
<div className='col-span-2'>
<OutPutSection />
</div>
    </div>
  )
}

export default  CreateContent