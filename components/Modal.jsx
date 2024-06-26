'use client'

import useModal from "@/hooks/useModal";

const Modal = () => {
  const { isOpen, openModal, closeModal, toggleModal } = useModal();

  console.log(isOpen);

  return (
    <div className={`${isOpen ? 'z-[50] visible' : 'invisible z-[-1] pointer-events-none'} fixed flex top-0 md:top-[50%] left-0 md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[90%] max-w-[1100px] h-auto md:h-[700px] md:rounded-md overflow-hidden flex-col-reverse md:flex-row`}>
      modal
    </div>
  )
}

export default Modal