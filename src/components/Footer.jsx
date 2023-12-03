import React from 'react'

export const Footer = () => {
  return (
    // <div className='w-full bg-slate-900 h-[200px] flex justify-center items-center '>

    //   <div className=' text-fuchsia-500 text-5xl '>
    //     footer
    //   </div>
      
    // </div>

    <div className="flex flex-col min-h-screen">
  {/* Content */}
  <div className="flex-grow">
    {/* Your page content goes here */}
  </div>

  {/* Footer */}
  <div className='w-full bg-slate-900 h-[200px] flex justify-center items-center'>
    <div className='text-fuchsia-500 text-5xl'>
      footer
    </div>
  </div>
</div>

  )
}
