import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="w-[80vw] mx-auto flex flex-col gap-12 my-32 md:flex-row">
      <div className="contact md:w-1/2 flex justify-center items-center" data-aos="fade-right">
      <div className="">
      <h1 className='text-[#18206b] text-5xl font-semibold leading-tight md:text-6xl md:leading-tight'>Contact form</h1>
      <p className='text-2xl mt-8 text-[#343d8a]'>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
      </div>
      </div>
      <div className="form md:w-1/2" data-aos="fade-left">
        <form action="#">
        <label htmlFor="name">Name</label>
            <br />
        <input className='py-4 px-3 my-3 bg-[#F1F2F3] w-[100%] text-black  rounded-md focus:bg-white' type="text" id='name' name='name' placeholder='Your Name'/><br />
        <label htmlFor="email">Email</label><br />
            <input className='py-4 px-3 my-3 bg-[#F1F2F3] w-[100%] text-black rounded-md focus:bg-white' type="email" name="email" id="email" placeholder='Enter Email' /><br />
             <label htmlFor="textarea">Message</label><br />
              <textarea className='py-4 px-3 my-3 bg-[#F1F2F3] w-[100%] text-black rounded-md focus:bg-white' name="textarea" id="textarea" cols={50} rows={7} placeholder='Your Message'></textarea>
              <div className="button flex justify-end">
              <button className='btn '>Submit</button>
              </div>
               
        </form>
      </div>
    </div>
    </>
//     <div className=' w-[80%] mx-auto container grid grid-cols-2  items-center my-[15%]'>
//     <div className="left">
//         <h1 className=' text-[#18206b] text-6xl font-semibold leading-[4.5rem]'>Contact form
//         </h1>
//         <p className='text-2xl my-8 text-[#343d8a] font-[340] w-[80%]'>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.
// </p>
//     </div>
//     <div className="right flex justify-center items-center ">
//         <form action="#" className='relative'>
//             <label htmlFor="name">Name</label>
//             <br />
//             <input className='py-4 px-3 my-3 bg-[#F1F2F3] w-[100%] text-black  rounded-md focus:bg-white' type="text" id='name' name='name' placeholder='Your Name'/><br />
//              <label htmlFor="email">Email</label><br />
//               <input className='py-4 px-3 my-3 bg-[#F1F2F3] w-[100%] text-black rounded-md focus:bg-white' type="email" name="email" id="email" placeholder='Enter Email' /><br />
//               <label htmlFor="textarea">Message</label><br />
//               <textarea className='py-4 px-3 my-3 bg-[#F1F2F3] w-[100%] text-black rounded-md focus:bg-white' name="textarea" id="textarea" cols={50} rows={7} placeholder='Your Message'></textarea>
//               <button className='btn absolute right-0 '>Submit</button>
//         </form>
//     </div>
//     </div>
  )
}

export default Contact