import React from 'react'
import spain from './spain.svg'
import us from './united-states.svg'
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { BsCupFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="py-6 bg-[#F1F2F3] w-[100%]">
<div className="grid gap-x-8 gap-y-10 grid-cols-3 w-[80%] mx-auto my-10 ">
        <div className="contact">
            <h1 className=' text-[#18206b] text-xl font-semibold leading-[4.5rem]'>Contact</h1>
            <p><a href="#" className='my-2 text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Tell Us Everything</a></p>
            <p className='my-4 text-[#343d8a] leading-tight'>Do you have any question? Feel free to reach out.</p>
            <p className='text-2xl my-6 text-[#343d8a] font-[340] underline'>let's Chat</p>
        </div>
        <div className="policy">
            <h1 className=' text-[#18206b] text-xl font-semibold leading-[4.5rem]'>Policy</h1>
            <p className='my-2'><a href="#" className=' text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Application Security</a></p>
            <p><a href="#" className='text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Software Principles</a> </p>
        </div>
        <div className="support">
            <h1 className=' text-[#18206b] text-xl font-semibold leading-[4.5rem]'>Support</h1>
            <p className='my-2'><a href="#" className='text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Support Center</a></p>
            <p><a href="#" className='text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Customer Support</a></p>
        </div>
        <div className="address">
            <h1 className=' text-[#18206b] text-xl font-semibold leading-[4.5rem]'>Address</h1>
            <p className='text-[#000000] text-lg my-2'>Rancho Santa Margarita</p>
            <p className='text-[#000000] text-lg'>2131 Elk Street</p>
            <p className='text-[#000000] text-lg my-2'>California</p>
        </div>
        <div className="company">
            <h1 className=' text-[#18206b] text-xl font-semibold leading-[4.5rem]'>Comapny</h1>
            <ul>
                <li className='my-3'><a href="#" className='text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>About</a></li>
                <li><a href="#" className='text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Blog</a></li>
                <li className='my-3'><a href="#" className='text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Press</a>Press</li>
                <li><a href="#" className='text-[#000000] text-lg hover:text-yellow-600 hover:underline-curly'>Careers & Culture</a></li>
            </ul>
        </div>
        <div className="lang">
            <h1 className=' text-[#18206b] text-xl font-semibold leading-[4.5rem]'>Languages</h1>
            <div className="img flex gap-7">
            
                <img className='w-10 hover:scale-110 cursor-pointer' src={us} alt="" />
                <img className='w-10 hover:scale-110 cursor-pointer' src={spain} alt="" />
            </div>
        </div>
    </div>
    <hr className='py-0.5 bg-[#CDD1D4] w-[90%] mx-auto'/>
    <div />
    <div className="w-[80%] mx-auto flex items-center justify-between">
        <h1 className='text-4xl font-bold text-[#18216d] my-9'>Landy</h1>
        <ul className='hidden md:flex justify-center items-center gap-10'>
        <li className='text-3xl'><a href=""><FaGithub /></a></li>
        <li className='text-3xl'><a href=""><CiTwitter /></a> </li>
        <li className='text-3xl'><a href=""><CiLinkedin /></a></li>
        <li className='text-3xl'><a href=""><CiFacebook /></a></li>
        </ul>
        <div className="flex justify-end">
            <button className='bg-black text-white flex justify-center items-center gap-2 py-2 px-3 rounded-md whitespace-nowrap w-fit'><BsCupFill />Buy me a coffee        </button>   
            </div> 
    </div>
    {/* <div className=" w-[80%] mx-auto flex flex-col  md:flex justify-between ">
    <div className="">
    <h1 className='text-4xl font-bold text-[#18216d] my-9'>Landy</h1>
    </div>
    <ul className='hidden md:flex justify-center items-center gap-10 w-[100%]'>
        <li className='text-3xl'><a href=""><FaGithub /></a></li>
        <li className='text-3xl'><a href=""><CiTwitter /></a> </li>
        <li className='text-3xl'><a href=""><CiLinkedin /></a></li>
        <li className='text-3xl'><a href=""><CiFacebook /></a></li>
            </ul> 
            {/* <div className="flex justify-end">
            <button className='bg-black text-white flex justify-center items-center gap-2 py-2 px-3 rounded-md whitespace-nowrap w-fit'><BsCupFill />Buy me a coffee        </button>   
            </div> */}
    {/* </div> */} 
    
    </div>
    
  )
}

export default Footer