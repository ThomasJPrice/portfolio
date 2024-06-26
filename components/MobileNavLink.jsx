'use client'

import { useModal } from "@/hooks/useModal"

const MobileNavLink = ({ item, setMenuOpen }) => {
  const { openModal } = useModal()

  function handleClick() {
    setMenuOpen(false)

    if (item.link === '#') {
      openModal()
    }
  }

  return (
    <li className="text-5xl sm:text-6xl text-center hover:text-primary transitionAll">
      <a onClick={() => handleClick()} href={item.link}>{item.name}</a>
    </li>
  )
}

export default MobileNavLink