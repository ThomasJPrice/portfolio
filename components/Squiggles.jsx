'use client'

import { Circle, SemiCircle, Squiggly, Triangle } from "@/assets"
import { useEffect } from "react";
import { MotionDiv } from ".";

const Squiggles = () => {
  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const notFoundSection = document.getElementById('404');

    const moveShapes = (e) => {
      const scaleFactor = 1 / 20;
      const shapes = document.querySelectorAll(".shape");
      const x = e.clientX * scaleFactor;
      const y = e.clientY * scaleFactor;

      for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
      }
    };

    if (heroSection) {
      heroSection.addEventListener('mousemove', moveShapes);
    }
    if (notFoundSection) {
      notFoundSection.addEventListener('mousemove', moveShapes);
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener('mousemove', moveShapes);
      }
      if (notFoundSection) {
        notFoundSection.removeEventListener('mousemove', moveShapes);
      }
    };
  }, []);

  return (
    <>
      <MotionDiv className="pointer-events-none -z-50 max-md:hidden fixed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut', duration: 0.5 }}
        viewport={{ amount: 0 }}
      >
        <img src={SemiCircle.src} className="shape shape--0" />
        <img src={Circle.src} className="shape shape--1" />
        <img src={Squiggly.src} className="shape shape--2" />
        <img src={Circle.src} className="shape shape--3" />
        <img src={Triangle.src} className="shape shape--4" />
        <img src={Circle.src} className="shape shape--5" />
        <img src={Squiggly.src} className="shape shape--6" />
        <img src={Circle.src} className="shape shape--7" />
        <img src={SemiCircle.src} className="shape shape--8" />
      </MotionDiv>

      {/* mobile squiggles */}
      <MotionDiv className="pointer-events-none -z-50 md:hidden fixed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut', duration: 0.5 }}
        viewport={{ amount: 0 }}
      >
        <img src={Triangle.src} className="fixed scale-110 top-[20vh] left-[35vw] rotate-[12deg]" />
        <img src={Squiggly.src} className="fixed right-[20vw] top-[15vh] rotate-[36deg] scale-110" />
        <img src={Circle.src} className="fixed right-[25vw] bottom-[30vh] scale-110" />
        <img src={SemiCircle.src} className="fixed left-[20vw] bottom-[15vh] rotate-[-24deg] scale-110" />
      </MotionDiv>
    </>
  )
}

export default Squiggles