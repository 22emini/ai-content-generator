"use client"
import React from 'react'
import SearchSection from './_components/SearchSection'
import Template from '../(data)/Template'

import TemplateList from './_components/TemplateList'

const page = () => {
  const[ userSearchInput, setUserSearchInput] = React.useState<string>("")
  return (
    <div>
        {/* dashboard  */}
<SearchSection onSearchInput={(value:string)=> setUserSearchInput(value)} />
        {/* <TemplateList /> */}

<TemplateList userSearchInput={userSearchInput} />
    </div>
  )
}

export default page 