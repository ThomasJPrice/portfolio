import { Alien } from "@/assets"
import { ContactButton, MotionDiv } from "@/components"

const Contact = () => {
  return (
    <section id='contact' className="container mx-auto px-2 mb-8 md:mb-16">
      <MotionDiv className="w-full min-h-[300px] md:min-h-[400px] 2xl:min-h-[450px] rounded-md relative"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut', duration: 1 }}
        viewport={{ once: true, amount: 0.25 }}
      >

        <div className="2xl:max-w-[50%] px-2 w-full flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:-translate-y-[60%] gap-8">
          <h3 className="text-[40px] sm:text-[52px] md:text-[70px] font-medium text-center">Let's make something great together</h3>

          <ContactButton />
        </div>


        <img src={Alien.src} className="w-full h-full -z-20 object-cover rounded-md absolute top-0 left-0" alt="" />
        <div className="w-full h-full absolute top-0 left-0 -z-10 bg-black bg-opacity-40"></div>
      </MotionDiv>
    </section>
  )
}

export default Contact