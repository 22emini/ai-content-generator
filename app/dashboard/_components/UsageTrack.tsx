// "use client"
// import { Button } from '@/components/ui/button'
// import { db } from '@/utils/db'
// import { AIOuput } from '@/utils/Schema'
// import { useUser } from '@clerk/nextjs'
// import { eq } from 'drizzle-orm'
// import Link from 'next/link'
// import React, { useEffect } from 'react'

// function UsageTrack() {
//    const {user}= useUser();
//    const [totalUsage, setTotalUsage] = React.useState(0);

//    useEffect(()=>{
//      if(user?.primaryEmailAddress?.emailAddress) {
//        GetData(user.primaryEmailAddress.emailAddress);
//      }
//    },[user])

//    const GetData=async(email:string)=>{
//     const result = await db.select().from(AIOuput).where(eq(AIOuput.createdBy, email));
//     GetTotalUsage(result);
//    }
//    const GetTotalUsage=(result: { aiResponse?: string | null }[] )=>{
//     let total:number=0;
//     result.forEach(element=>{
//      total += Number(element.aiResponse?.length || 0);
//     })
//     setTotalUsage(total);
//     console.log(total)
//     return total;
//    }
 
//   return (
//     <div className='m-3'>
//     <div className='bg-purple-700 text-white p-4  font-medium rounded-lg'>
//       Credits
//       <div className='h-2 bg-[#9981f9] w-full rounded-full'>
//         <div className='h-2 bg-white rounded-full'  style={{ width:(totalUsage/1000000)*100+ "%" }}>

//         </div>
//       </div>
//       <h2 className=' mt-2 text-sm'>{totalUsage}/10,000 Credit Used</h2>
//     </div>
//     <Button   variant="outline" size="sm" className=" my-2 w-full text-purple-700">
//      <Link href="/dashboard/billing">Upgrade Your Plan</Link>
//     </Button>
//     </div>
//   )
// }

// export default UsageTrack