import React from 'react'
import graph from './graphs.svg'
import notes from './notes.svg'
const Main3 = () => {
  return (
    <>
    <div className="w-[80vw] mx-auto flex flex-col my-24 md:flex-row gap-14" data-aos="fade-right">
      <div className="img md:w-1/2 flex justify-center items-center">
      <img className='' src={graph} alt="" />
      </div>
      <div className="content my-3 md:w-1/2">
      <h1 className='text-[#18206b] text-5xl font-semibold leading-tight md:text-6xl md:leading-tight' >Light, fast & responsive</h1>
      <p className='text-2xl mt-8 text-[#343d8a]'>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
      <div className="inner-right flex space-x-7 my-8">
           <div className="inner2-right w-80">
             <img src={notes} alt="" />
             <p className='text-lg mt-2 text-[#000000] uppercase font-[340]'>Why Antd?</p>
             <p className='my-4 text-[#343d8a] leading-tight'>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
           </div>
           <div className="inner2-right w-80">
             <img src={notes} alt="" />
             <p className='text-lg mt-2 text-[#000000] uppercase font-[340]'>Why styled-components?</p>
           <p className='my-4 text-[#343d8a] leading-tight'>Styled Components gives you total control over your components.</p>
           </div>
      </div>
      </div>
    </div>
    </>
    // <div className='container grid grid-cols-2 w-[80%] mx-auto gap-24 my-[15%]'>
    // <div className="left flex justify-center items-center">
    //     <img className='' src={graph} alt="" />
    // </div>
    // <div className="right">
    //     <h1 className=' text-[#18206b] text-6xl font-semibold leading-[4.5rem]' >Light, fast & responsive</h1>
    //     <p className=' text-2xl my-8 text-[#343d8a] font-[340]'>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
    //     <div className="inner-right flex space-x-7">
    //       <div className="inner2-right w-80">
    //         <img src={notes} alt="" />
    //         <p className='text-lg mt-2 text-[#000000] uppercase font-[340]'>Why Antd?</p>
    //         <p className='my-4 text-[#343d8a] leading-tight'>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
    //       </div>
    //       <div className="inner2-right w-80">
    //         <img src={notes} alt="" />
    //         <p className='text-lg mt-2 text-[#000000] uppercase font-[340]'>Why styled-components?</p>
    //         <p className='my-4 text-[#343d8a] leading-tight'>Styled Components gives you total control over your components.</p>
    //       </div>
    //     </div>
    // </div>
    // </div>
  )
}

export default Main3