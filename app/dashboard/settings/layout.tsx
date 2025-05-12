import React from 'react'

const layout: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <div className='p-4 sm:p-6 md:p-10 '>{children}</div>
  )
}

export default layout