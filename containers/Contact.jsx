import { Alien } from "@/assets"

const Contact = () => {
  return (
    <section id='contact' className="container mx-auto px-2 mb-16">
      <div className="w-full h-[500px] rounded-md relative">
        
        <div className="max-w-[50%] w-full flex flex-col items-center">
          <h3 className="text-[70px] font-medium text-center">Let's make something <span>great</span> together</h3>
          <button>Contact Me</button>
        </div>
        
        
        <img src={Alien.src} className="w-full h-full -z-20 object-cover rounded-md absolute top-0 left-0" alt="" />
        <div className="w-full h-full absolute top-0 left-0 -z-10 bg-black bg-opacity-30"></div>
      </div>
    </section>
  )
}

export default Contact