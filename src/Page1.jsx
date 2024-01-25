// Page1Component.jsx
import React from 'react';

const Page1 = () => {
  return (
    <div id="page1" className='h-screen w-full bg-black overflow-hidden'>
      <h1 className='text-[70vh] max-sm:sm:text-[60vw]  2xl:text-[30vw]  text-white uppercase whitespace-nowrap font-strech font-black ms-10'>
        <span className='text-[10vw] max-sm:sm:text-[30vw]  2xl:text-[10vw]'>Hii, I'm</span>
        <span className='text-[#cdb4db]'>Rohan Bhatia</span>, a Software engineer from{' '}
        <span className='text-transparent bg-gradient-to-tr from-orange-300 via-white to-emerald-200 bg-clip-text'>India</span>
      </h1>
    </div>
  );
};

export default Page1;
