'use client'

import { useState } from "react"
import { MobileNavLink } from "."

const MobileMenu = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button className={`${menuOpen ? 'fixed' : 'absolute'} z-20 right-2 flex md:hidden flex-col items-center w-[25px] h-[25px] justify-center bg-background scale-[2]`} onClick={() => setMenuOpen(!menuOpen)}>

        <span className={`block absolute h-0.5 w-5 right-2 bg-current transform transition duration-500 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>

        <span className={`block absolute  h-0.5 w-5 right-2 bg-current   transform transition duration-500 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}></span>

        <span className={`block absolute  h-0.5 w-5 right-2 bg-current transform  transition duration-500 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
        <span></span>

      </button>

      <div className={`fixed md:hidden top-0 left-0 w-full h-screen bg-background z-10 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transitionAll`}>
        <ul className="w-full h-full flex flex-col items-center justify-center pb-32 gap-8">
          {navLinks.map((item, index) => (
            <MobileNavLink item={item} setMenuOpen={setMenuOpen} key={item+index} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default MobileMenu