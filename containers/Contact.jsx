import { Alien } from "@/assets"

const Contact = () => {
  return (
    <section id='contact' className="container mx-auto px-2 mb-16">
      <div className="w-full min-h-[300px] md:min-h-[400px] 2xl:min-h-[450px] rounded-md relative">

        <div className="2xl:max-w-[50%] px-2 w-full flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:-translate-y-[60%] gap-8">
          <h3 className="text-[40px] sm:text-[52px] md:text-[70px] font-medium text-center">Let's make something great together</h3>

          <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-6 py-3 font-bold scale-105">
            <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-primary opacity-[3%]"></span>
            <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-primary opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-text">Contact Me</span>
            <span className="absolute inset-0 rounded-full border-2 border-primary"></span>

            <div></div>
          </button>
        </div>


        <img src={Alien.src} className="w-full h-full -z-20 object-cover rounded-md absolute top-0 left-0" alt="" />
        <div className="w-full h-full absolute top-0 left-0 -z-10 bg-black bg-opacity-40"></div>
      </div>
    </section>
  )
}

export default Contact