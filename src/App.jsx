// App.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Page1 from './Page1';
import SmoothScrollContainer from './SmoothScrollContainer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const width = document.body.clientWidth;

    gsap.to("#page1 h1", {
      x: width > 1024 ? -5800 : -5000,
      ease: "power1.inOut",
      // fontSize :width < 1024 && "20vw",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 10",
        end: "top -800",
        scrub: 8,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <SmoothScrollContainer>
      <div id="main" className='overflow-y-hidden bg-black relative'>
        <Navbar />
        <Page1 />
        <div id="page2" className='h-screen w-full bg-green-200 overflow-hidden flex flex-row-reverse'></div>
        <div id="page3" className='h-screen w-full bg-orange-200'></div>
      </div>
    </SmoothScrollContainer>
  );
};

export default App;
