import React from 'react'
import Image from "next/image"
const Process = () => {
  return (
    <div>
    <div className='md:block hidden'>
        <Image src="/process.gif" alt="process" width="100" height="100" className='w-auto h-full mt-40 md:w-[1105px] mx-auto'/>
        </div>  
        <div className='md:hidden block'>
        <Image src="/process-mobile.gif" alt="process" width="100" height="100" className='w-auto mx-auto h-full mt-40  m'/>
        </div>  
    </div>
  )
}

export default Process
