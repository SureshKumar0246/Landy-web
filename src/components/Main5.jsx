import React from 'react'
import waving from './waving.svg'

const Main5 = () => {
  return (
    <>
    <div className="w-[80vw] m-auto flex flex-col my-24 md:flex-row gap-14" data-aos="fade-right">
      <div className="md:w-1/2 flex justify-center items-center">
            <img className='' src={waving} alt="" />

      </div>
      <div className="content my-8 md:w-1/2">
      <h1 className='text-[#18206b] text-5xl font-semibold leading-tight md:text-6xl md:leading-tight'>That's about it!</h1>
           
         <p className='text-2xl mt-8 text-[#343d8a]'>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>

      </div>
    </div>
    </>
//     <div className=' w-[80%] mx-auto container grid grid-cols-2 gap-28 items-center my-[15%]'>
//     <div className="right flex justify-center items-center">
//         <img className='' src={waving} alt="" />
//     </div>
//     <div className="left relative">
//         <h1 className=' text-[#18206b] text-6xl font-semibold leading-[4.5rem]'>That's about it!
//         </h1>
//         <p className='text-2xl my-8 text-[#343d8a] font-[340]'>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.

// </p>
//         </div>
    
//     </div>
  )
}

export default Main5