import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import "./index.css"
const Navbar = () => {
  const deviceWidth = document.body.clientWidth;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    gsap.to('.small-nav', {
      height: isExpanded ? '4rem' : '100vh',
    });
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    gsap.fromTo('.nav-item',
      { y: "-100" },
      { y: "0", stagger: 0.2 },
    )
  }, [])
  // console.log(deviceWidth)
  return (
    <>
      {deviceWidth > 640 ? (
        <div className="h-16 m-8 flex justify-evenly items-center sticky top-0 z-50" id='navbar'>
          <div id="pic" className="">
            <img src="https://rohan3155.netlify.app/assets/WhatsApp_Image_2023-06-11_at_13.00.55-removebg-preview-1d035786.png" alt="" srcset="" className='h-16 w-16' />
          </div>
          <div id="menu" className="text-2xl text-white flex gap-8">
            <h1 className='nav-item text-lg 2xl:text-2xl cursor-pointer relative overflow-hidden hover:transition-all hover:duration-700 hover:text-[#cdb4db]'>
              Home
              <span className="underlinesa"></span>
            </h1>
            <h1 className='nav-item text-lg 2xl:text-2xl cursor-pointer relative overflow-hidden hover:transition-all hover:duration-700 hover:text-[#cdb4db]'>
              Skills
              <span className="underlinesa"></span>
            </h1>
            <h1 className='nav-item text-lg 2xl:text-2xl cursor-pointer relative overflow-hidden hover:transition-all hover:duration-700 hover:text-[#cdb4db]'>
              Project
              <span className="underlinesa"></span>
            </h1>
            <h1 className='nav-item text-lg 2xl:text-2xl cursor-pointer relative overflow-hidden hover:transition-all hover:duration-700 hover:text-[#cdb4db]'>
              About
              <span className="underlinesa"></span>
            </h1>
          </div>
          <div>
            <button className='neo-brutalism'>Contact me</button>
          </div>
        </div>
      ) : (
        <>
          <div className={`small-nav h-16 w-screen  bg-black flex justify-center px-4 items-center fixed top-0 z-50`}>
            <div className="text-white text-lg flex flex-col justify-center items-center py-8 gap-8">
              {
                isExpanded && (
                  <>
                    <button className='text-[#cdb4db] font-extrabold'>Home</button>
                    <button className='text-[#cdb4db] font-extrabold'>Skills</button>
                    <button className='text-[#cdb4db] font-extrabold'>Projects</button>
                    <button className='text-[#cdb4db] font-extrabold'>About</button>
                    <button className='border border-[#cdb4db] px-10 py-2  rounded-xl'>Contact me</button>
                  </>
                )
              }

            </div>
            <div>
              {
                isExpanded ? (
                  <>
                    <button className='h-8 mt-4 absolute top-0 right-4' onClick={handleClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <button className='h-8 mt-4 absolute top-0 right-4' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>

                  </button>
                )
              }

            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
