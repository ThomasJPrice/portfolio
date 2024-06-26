'use client'

import { useModal } from "@/hooks/useModal"

const AboutMeLink = () => {
  const { openModal } = useModal()

  return (
    <button onClick={openModal} className="font-semibold text-primary">about me.</button>
  )
}

export default AboutMeLink