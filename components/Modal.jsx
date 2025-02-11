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

const technologies = [
  {
    name: 'NextJS',
    imgUrl: 'https://i.imgur.com/7IJD313.png', 
  },
  {
    name: 'TailwindCSS',
    imgUrl: 'https://cdn.sanity.io/images/rbabuf5c/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png', 
  },
  {
    name: 'Sanity CMS',
    imgUrl: 'https://cdn.sanity.io/images/rbabuf5c/production/e5fc9de77d06ace427f0310d25ef62e2ced56d3a-1024x1024.png', 
  },
  {
    name: 'Stripe',
    imgUrl: 'https://cdn.sanity.io/images/rbabuf5c/production/4652c90651ab32e84066fdeb290b3d52fa21b458-512x512.png', 
  },
  {
    name: 'Python',
    imgUrl: 'https://cdn.sanity.io/images/rbabuf5c/production/2c6be893eef69438b8487afad70e8232d4d75107-2048x2244.png', 
  }
]

const Modal = () => {
  const { isOpen, openModal, closeModal, toggleModal } = useModal();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();

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
        <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[-110%]'} w-full md:w-[50%] p-[20px] md:px-[48px] md:py-[40px] flex flex-col justify-start relative transition-all ease-in duration-300 bg-[#222222] text-text`}>
          <div className="h-full flex flex-col gap-8 justify-between">
            <div>
              <h3 className="text-section font-semibold font-condensed">Here's a bit <span className="text-primary">about me</span>:</h3>
              <h4>Software Engineer / Student</h4>

              <div className="flex flex-col gap-4 mt-8">
                <p>I'm a passionate web developer and <span className="text-primary font-medium">entrepreneur</span>. I create impactful websites and digital solutions while being proficient in <span className="text-primary font-medium">Python</span>, <span className="text-primary font-medium">JavaScript</span>, and <span className="text-primary font-medium">NextJS</span>, and have experience in designing logos, editing videos, and handling marketing and advertising tasks.</p>

                <p>In my free time, I enjoy <span className="text-primary font-medium">web and media design</span>, 3D printing, and programming. I'm an avid badminton player and runner, and I've completed the Duke of Edinburgh Award at the Silver level (Gold in progress!). I'm also a member of <a href="https://hackclub.com/" target="_blank" className="text-primary underline font-medium">Hack Club</a> and a Co-Organiser for UK for <a href="https://eurohacks.org/" target="_blank" className="text-primary underline font-medium">EuroHacks</a></p>
              </div>
            </div>

            {/* cards */}
            <div className="flex gap-4">
              {technologies.map((item, index) => (
                <div key={item+index} className="w-full aspect-square overflow-hidden flex items-center rounded-md p-1">
                  <img src={item.imgUrl} alt={item.name} className="w-full h-full object-contain" />
                </div>
              ))}
      
            </div>
          </div>
        </div>

        {/* right side */}
        <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[110%]'} w-full md:w-[50%] p-[20px] md:px-[48px] md:py-[40px] flex flex-col justify-start text-white relative transition-all ease-in duration-300 bg-background`}>
          <div className="h-full flex flex-col gap-8">
            <div>
              <h3 className="text-section font-semibold font-condensed">Let's have a chat!</h3>
              <h4>I'm currently open to new opportunities</h4>
            </div>

            <form ref={form} onSubmit={contactSubmit} className="h-full flex-grow flex flex-col justify-between gap-8">

              {/* inputs */}
              <div className="flex flex-col gap-4">
                {formInputs.map((item, index) => (
                  <CustomInput name={item.name} type={item.type} label={item.label} textArea={item.textArea} key={item + index} />
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