'use client'

import { useModal } from "@/hooks/useModal";
import { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineLoading } from "react-icons/ai";
import { CustomInput } from ".";


import emailjs from '@emailjs/browser'

const formInputs = [
  {
    label: 'Your Name',
    name: 'user_name',
    type: 'text',
    textArea: false,
  },
  {
    label: 'Email Address',
    name: 'user_email',
    type: 'email',
    textArea: false,
  },
  {
    label: 'Message',
    name: 'message',
    type: 'text',
    textArea: true,
  },
]

const Modal = () => {
  const { isOpen, openModal, closeModal, toggleModal } = useModal();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();

  console.log(isOpen)

  const contactSubmit = (e) => {
    e.preventDefault()

    setIsFormLoading(true);

    emailjs
      .sendForm(
        "service_wbxpg8a",
        "template_qbyoq0a",
        form.current,
        "BCK6ynfq2y7qWWEXm"
      )
      .then(
        (result) => {
          setIsFormLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          setIsFormLoading(false);
          alert(
            "The email service is temporarily unavailible. Please contact me directly on thomasjprice2@gmail.com"
          );
        }
      );
  }

  return (
    <>
      <div className={`fixed top-0 left-0 w-screen h-screen transitionAll ${isOpen ? 'bg-background bg-opacity-60 visible' : 'invisible pointer-events-none z-30'}`} onClick={closeModal}>
      </div>

      <div className={`${isOpen ? 'modalShadow visible' : 'invisible z-[-1] pointer-events-none'} absolute md:fixed flex top-0 md:top-[50%] z-[50] left-0 md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[90%] max-w-[1100px] h-auto md:h-[700px] md:rounded-md overflow-hidden flex-col-reverse md:flex-row`}>

        {/* left side */}
        <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[-110%]'} w-full md:w-[50%] p-[20px] md:px-[48px] md:py-[40px] flex flex-col justify-start relative transition-all ease-in duration-300 bg-text text-background`}>
          hi
        </div>

        {/* right side */}
        <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[110%]'} w-full md:w-[50%] p-[20px] md:px-[48px] md:py-[40px] flex flex-col justify-start text-white relative transition-all ease-in duration-300 bg-background`}>
          <div className="h-full flex flex-col gap-8">
            <div>
              <h3 className="text-section font-semibold font-condensed">Let's have a chat!</h3>
              <h4>I'm currently open to new opportunities</h4>
            </div>

            <form ref={form} onSubmit={contactSubmit} className="h-full flex-grow flex flex-col justify-between">

              {/* inputs */}
              <div className="flex flex-col gap-4">
                {formInputs.map((item, index) => (
                  <CustomInput name={item.name} type={item.type} label={item.label} textArea={item.textArea} key={item+index} />
                ))}
              </div>

              {/* button */}
              <button disabled={isFormLoading || isFormSubmitted} type="submit" className={`bg-primary bg-opacity-70 border-[2px] border-solid border-primary border-opacity-70 text-text font-bold w-full max-w-[240px] py-[12px] px-[24px] text-[20px] transition-all duration-300 ease-in-out hover:border-text hover:bg-transparent ${(isFormSubmitted || isFormLoading) && 'cursor-not-allowed'}`}>
                {isFormSubmitted ? 'Thank you!' : 
                isFormLoading ? 
                <span className="text-[30px] w-full flex justify-center items-center animate-spin "><AiOutlineLoading /></span>
                 : 'Send it my way!'}
              </button>
            </form>
          </div>
        </div>


        {/* close icon */}
        <button className="absolute right-8 top-8 text-4xl" onClick={closeModal}>
          <AiOutlineClose />
        </button>

      </div>
    </>
  )
}

export default Modal