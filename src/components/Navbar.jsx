import React, { useState, useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
import { ImCross, ImOffice } from "react-icons/im";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  
  return (
    <>
    <div className="flex justify-between w-[80%] mx-auto my-10">
      <div className="logo">
      <h1 className='text-4xl font-bold text-[#18216d]'>Landy</h1>
      </div>
      <div className="menu flex items-center">
        <ul className='hidden md:flex gap-8 items-center'>
          <li><Link to="about" 
            spy={true} 
            smooth={true} 
            offset={-80} 
              duration={500} className='text-[#18216d] text-2xl hover:text-yellow-600 hover:underline-curly' > About</Link></li>
          <li ><Link to="mission" 
            spy={true} 
            smooth={true} 
            offset={-80} 
              duration={500} className='text-[#18216d] text-2xl hover:text-yellow-600 hover:underline-curly' >Mission</Link></li>
          <li><Link to="product" 
            spy={true} 
            smooth={true} 
            offset={-50} 
              duration={500} className='text-[#18216d] text-2xl hover:text-yellow-600 hover:underline-curly'>Product</Link></li>
          <li><Link to="contact" 
            spy={true} 
            smooth={true} 
            offset={-80} 
              duration={500}><button className='btn'>Contact</button></Link></li>
        </ul>
        <div className="menuIcon text-2xl font-semibold md:hidden">
        <FiMenu className='' onClick={()=>setMenu(true)}/>
        </div>
        
      </div>
    </div>
    {Menu && <div className= {`fixed h-full w-screen bg-black/50 right-0 top-0 backdrop-blur-sm ${Menu ? "translate-x-0 transition-translate duration-3000":"translate-x-full transition-translate duration-3000"} md:hidden `}>
     <section className='bg-white text-black flex flex-col absolute right-0 top-0 p-8 h-screen w-56 transition-all duration-3000'>
     <ImCross className='absolute right-3' onClick={()=>setMenu(false)}/>
     <ul className='my-16 flex flex-col gap-8 text-2xl items-center '>
          <li><a href="#" className='text-[#18216d] text-2xl hover:text-yellow-600 hover:underline-curly'>About</a></li>
          <li><a href="#" className='text-[#18216d] text-2xl hover:text-yellow-600 hover:underline-curly'>Mission</a></li>
          <li><a href="#" className='text-[#18216d] text-2xl hover:text-yellow-600 hover:underline-curly'>Product</a></li>
          <li><button className='btn text-xl'>Contact</button></li>
        </ul>
     </section>
    </div>
    }
    {/* <div className='my-9 container flex justify-between items-center w-[80%] mx-auto'>
      <div className="left">
        <h1 className='text-4xl font-bold text-[#18216d]'>Landy</h1>
      </div>
      <div className="right">
        <ul className='flex justify-center items-center space-x-16 text-2xl '>
            <li><NavLink to="/main4" className='text-[#18216d] text-xl hover:text-yellow-600 hover:underline-curly'>About</NavLink> </li>
            <li><a href="#" className='text-[#18216d] text-xl  hover:text-yellow-600 hover:underline-curly'>Mission</a></li>
            <li><a href="#" className='text-[#18216d] text-xl  hover:text-yellow-600 hover:underline-curly'>Product</a></li>
          <button className='btn'>Contact</button>
          <FiMenu />
        </ul>
      </div>
    </div> */}
    {/* <div className="fixed bg-white inset-0">
    <div className='my-9   w-1/2 mx-auto'>
      <div className="left">
        <h1 className='text-4xl font-bold text-[#18216d]'>Landy</h1>
      </div>
      <div className="toggle">
      <ImCross />
      </div>
    </div>
    <div className="right">
        <ul className='flex flex-col space-x-16 text-2xl '>
            <li><a href='#' className=' text-[#18216d] text-xl hover:text-yellow-600 hover:underline-curly'></a> </li>
            <li className='my-3'><a href='#' className=' text-[#18216d] text-xl hover:text-yellow-600 hover:underline-curly'>About</a> </li>

            <li className='my-3'><a href="#" className='text-[#18216d] text-xl  hover:text-yellow-600 hover:underline-curly'>Mission</a></li>
            <li className='my-3'><a href="#" className='text-[#18216d] text-xl  hover:text-yellow-600 hover:underline-curly'>Product</a></li>
        </ul>
      </div>
    </div> */}
    </>
  )
}

export default Navbar