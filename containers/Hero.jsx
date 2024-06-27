import { AboutMeLink, MotionA, MotionDiv } from "@/components"
import { AiOutlineCloudDownload, AiOutlineGithub } from "react-icons/ai"

const Hero = () => {
  return (
    <section id='hero' className="container px-2 mx-auto screenMinusNav relative flex items-center">
      <MotionDiv
        className="flex flex-col gap-4 md:gap-8 lg:px-32 pb-32"
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, ease: 'easeInOut', duration: 0.5 }}
        viewport={{ amount: 0 }}
      >
        <h1 className="text-[52px] sm:text-[80px] md:text-heading font-bold leading-[1.1]">Hi,<br /> <span className="text-primary">I'm Thomas.</span></h1>

        <p className="max-w-[490px] text-[20px] md:text-[24px] leading-loose">I'm an aspiring <span className="font-semibold text-primary">Software Engineer</span> with a strong passion for building web applications with great user experiences. <br />Find out a bit more <AboutMeLink /></p>

        <div className="flex gap-3">
          <a href="/CV.pdf" download='Thomas Price CV' className="flex gap-2 p-[10px] bg-primary bg-opacity-70 rounded-md group">
            <AiOutlineCloudDownload className="w-[30px] h-[30px] group-hover:scale-[1.1] transition-all duration-150" />
          </a>
          <a href="https://github.com/ThomasJPrice" className="flex gap-2 p-[10px] bg-primary bg-opacity-70 rounded-md group" target="_blank">
            <AiOutlineGithub className="w-[30px] h-[30px] group-hover:scale-[1.1] transition-all duration-150" />
          </a>
        </div>

      </MotionDiv>

      <MotionA href="#projects" className="transition hover:scale-[1.1] absolute bottom-8 left-[50%] translate-x-[-50%]"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut', duration: 0.5 }}
        viewport={{ amount: 0 }}
      >
        <div className="w-[20px] scroll-icon h-[30px] border-[2px] border-[#242424] dark:border-[#fff] rounded-[24px] flex items-center justify-center dark:after:bg-white"></div>
      </MotionA>
    </section>
  )
}

export default Hero