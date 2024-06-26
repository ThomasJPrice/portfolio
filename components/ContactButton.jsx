'use client'

import { useModal } from "@/hooks/useModal"

const ContactButton = () => {
  const { openModal } = useModal()

  return (
    <a href='#' onClick={openModal} className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-6 py-3 font-bold scale-105">
      <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-primary opacity-[3%]"></span>
      <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-primary opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
      <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-text">Contact Me</span>
      <span className="absolute inset-0 rounded-full border-2 border-primary"></span>

      <div></div>
    </a>
  )
}

export default ContactButton