import { MotionDiv } from "."

const Footer = () => {
  return (
    <footer className="mx-auto container px-2 bg-background">
      <MotionDiv className="py-2 md:py-4 flex font-medium justify-between border-t-[1px] items-center"
        initial={{ y: "20%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut', duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <a href="#">© 2024 Thomas Price</a>

        <div className="hidden md:flex gap-8">
          <a href="/CV.pdf" download='Thomas Price CV' className="relative h-[30px] overflow-hidden group">
            <span aria-hidden="true" className="block h-[30px] invisible">CV</span>

            <span className="absolute left-0 top-0 group-hover:-top-[30px] transition-all duration-300">CV</span>
            <span className="absolute left-0 -bottom-[30px] group-hover:bottom-0 transition-all duration-300 text-primary">CV</span>
          </a>

          <a href="https://github.com/ThomasJPrice" target="_blank" className="relative h-[30px] overflow-hidden group">
            <span aria-hidden="true" className="block h-[30px] invisible">GitHub</span>

            <span className="absolute left-0 top-0 group-hover:-top-[30px] transition-all duration-300">GitHub</span>
            <span className="absolute left-0 -bottom-[30px] group-hover:bottom-0 transition-all duration-300 text-primary">GitHub</span>
          </a>
        </div>

        <div className="flex md:hidden gap-4">
          <a href="/CV.pdf" download='Thomas Price CV'>
            CV
          </a>

          <a href="https://github.com/ThomasJPrice" target="_blank">
            GitHub
          </a>
        </div>
      </MotionDiv>
    </footer>
  )
}

export default Footer