import React from 'react'
import developer from './developer.svg'
const Main1 = () => {
  return (
      <div className=" w-[80%] mx-auto flex flex-col md:flex-row-reverse gap-14 my-24" data-aos="fade-left">
        <div className=" flex justify-center items-center md:w-1/2">
        <img className='w-full' src={developer} alt="" />
        </div>
        <div className="mainContent md:w-1/2">
        <div className="mt-12">
          <h1 className='text-[#18206b] text-5xl font-semibold leading-tight md:text-6xl md:leading-tight'>Landing page template for developers & startups</h1>
        <p className='text-2xl mt-8 text-[#343d8a]'>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
        </div>
        <div className="max-w-screen-sm mt-8 text-xl flex justify-between md:justify-start gap-5 md:text-2xl">
          <button className='btn shadow-xl'>Explore</button>
          <button className='bg-white py-3 px-5 shadow-lg whitespace-nowrap'>Learn more</button>
        </div>
        </div>
      </div>
    // <div className=' w-[80%] mx-auto container grid grid-cols-2 space-x-16 items-center my-[15%]'>
    // <div className="left relative">
    //     <h1 className=' text-[#18206b] text-6xl font-semibold leading-[4.5rem]'>Landing page template for developers & startups</h1>
    //     <p className='text-2xl my-8 text-[#343d8a] font-[340]'>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
    //   <div className="btns flex  items-center space-x-8">
    //     <button className="btn">Explore</button>
    //     <button className="text-[#2e186a] py-2 px-10 bg-white flex justify-center items-center rounded-sm">Learn More</button>
    //   </div>
    // </div>
    // <div className="right flex justify-center items-center">
    //     <img className='' src={developer} alt="" />
    // </div>
    // </div>
  )
}

export default Main1