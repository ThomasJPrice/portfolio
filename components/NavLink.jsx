'use client'

import { useModal } from "@/hooks/useModal"

const NavLink = ({ item, index}) => {
  const { openModal } = useModal()

  return (
    <li key={item + index} className="font-semibold overflow-hidden">
      <a href={item.link} className="relative group h-[30px] overflow-hidden" 
        onClick={item.link === '#' ? openModal : () => {}}>

        <span aria-hidden="true" className="block h-[30px] invisible">{item.name}</span>

        <span className="absolute left-0 top-0 group-hover:-top-[30px] transition-all duration-300">{item.name}</span>
        <span className="absolute left-0 -bottom-[30px] group-hover:bottom-0 transition-all duration-300 text-primary">{item.name}</span>
      </a>
    </li>
  )
}

export default NavLink