'use client'

import { useState } from "react"
import { AiFillAccountBook } from "react-icons/ai"

const MobileMenu = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button className="absolute z-20 right-2 flex md:hidden flex-col items-center w-[25px] h-[25px] justify-center bg-background scale-[2]" onClick={() => setMenuOpen(!menuOpen)}>

        <span className={`block absolute h-0.5 w-5 right-2 bg-current transform transition duration-500 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>

        <span className={`block absolute  h-0.5 w-5 right-2 bg-current   transform transition duration-500 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}></span>

        <span className={`block absolute  h-0.5 w-5 right-2 bg-current transform  transition duration-500 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
        <span></span>

      </button>

      <div className={`fixed md:hidden top-0 left-0 w-full h-screen bg-background z-10 ${menuOpen ? 'opacity-100' : 'opacity-0'} transitionAll`}>
        <ul className="w-full h-full flex flex-col items-center justify-center pb-32 gap-8">
          {navLinks.map((item, index) => (
            <li className="text-5xl sm:text-6xl text-center hover:text-primary transitionAll" key={item+index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MobileMenu