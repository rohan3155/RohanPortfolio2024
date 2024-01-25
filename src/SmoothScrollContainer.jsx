// SmoothScrollContainer.jsx
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const SmoothScrollContainer = ({ children, updateAnimations }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!updateAnimations) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true, // Enable direction
      scrollFromAnywhere: true, // Scroll from anywhere on the page
      smartphone: {
        smooth: true, // Enable smooth scrolling on smartphones
      },
      tablet: {
        smooth: true, // Enable smooth scrolling on tablets
      },
      inertia: 4, // Adjust the inertia for smoother deceleration
      damping: 0.08, // Adjust the damping for bounce/stretch at the end of scrolling
      overscroll: 40, // Increase overscroll for smoother feel
    });

    scroll.on('scroll', (args) => {
      const scrollY = args.scroll.y;
      updateAnimations(scrollY);
    });

    return () => {
      scroll.destroy();
    };
  }, [updateAnimations]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScrollContainer;
