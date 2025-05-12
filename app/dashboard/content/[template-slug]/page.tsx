"use client"
import React, { useState, useContext } from 'react'
import FormSection from './_components/FormSection'
import OutPutSection from './_components/OutPutSection'
import { TEMPLATE } from '../../_components/TemplateList'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { toast } from 'sonner'
import { db } from '@/utils/db'
import { AIOuput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
// import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'

interface  PROPS{
  slug: string
  params: {
    'template-slug': string
  }
}

const  CreateContent = (props: PROPS) => {
  const { user}= useUser();
  // const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const router = useRouter();
  const[ loading, setLoading]= useState(false)
  const[ aiOutput,setAiOutput]= useState<string>("");
  const GenerateAIContent= async(formData:any)=>{
    // Check usage before generating
    // if (totalUsage >= 10000000) {
    //   toast.error("You have passed your current limit of 10,000,000 credits. Please upgrade your plan.");
     
    //   return;
    // }
    setLoading(true)
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt=JSON.stringify(formData)+"," + SelectedPrompt;
    const result= await chatSession.sendMessage(FinalAIPrompt);
    setAiOutput(result?.response.text())
    toast.success("Successfully Generated Message")
    await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, result?.response.text())
    // Update usage after generation
    // setTotalUsage((prev: number) => prev + (result?.response.text()?.length || 0));
    setLoading(false)
     
  }

  const params = props.params as { 'template-slug': string };
  const selectedTemplate:TEMPLATE|undefined= Template?.find((item)=>item.slug===params['template-slug']);
  const SaveInDb = async (formData: any, slug: string | undefined, aiResp: string) => {
    if (!slug || !user?.id) {
      toast.error("Missing required fields for saving to database.");
      return;
    }
    const result = await db.insert(AIOuput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user.id, // Save Clerk userId instead of email
      createdAt: moment().format("DD/MM/YYYY"),
    });
   
  }
  return (
    <div className='p-4 sm:p-6 md:p-10'>
      <Link href='/dashboard' className=''>
        <Button className='bg-purple-700'><ArrowLeft /> Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 p-0 md:p-5 mt-6'>
        {/* FormSection */}
        <div className='mb-6 md:mb-0'>
          <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading} /> 
        </div>
        {/* OutputSection */}
        <div className='md:col-span-2'>
          <OutPutSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default  CreateContent

