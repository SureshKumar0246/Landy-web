import React from 'react'
import productlaunch from './product-launch.svg'

const Main4 = () => {
  return (
    <>
    <div className="container max-w-[80vw] mx-auto flex flex-col my-24 md:flex-row-reverse gap-14" data-aos="fade-left">
      <div className="md:w-1/2 flex justify-center items-center">
      <img className='' src={productlaunch} alt="" />
      </div>
      <div className="content my-8 md:w-1/2">
        <h1 className='text-[#18206b] text-5xl font-semibold leading-tight md:text-6xl md:leading-tight'>Ready made sections</h1>
                 <p className='text-2xl mt-8 text-[#343d8a]'>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>

      </div>
    </div>
    </>
//     <div className=' w-[80%] mx-auto container grid grid-cols-2 gap-32 items-center my-[15%]'>
//     <div className="left relative">
//         <h1 className=' text-[#18206b] text-6xl font-semibold leading-[4.5rem]'>Ready made sections</h1>
//         <p className='text-2xl my-8 text-[#343d8a] font-[340]'>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.

// .</p>
//     </div>
//     <div className="right flex justify-center items-center">
//         <img className='' src={productlaunch} alt="" />
//     </div>
//     </div>
  )
}

export default Main4