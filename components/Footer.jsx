const Footer = () => {
  return (
    <footer className="mx-auto container px-2">
      <div className="py-2 md:py-4 flex font-medium justify-between border-t-[1px] items-center">
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
      </div>
    </footer>
  )
}

export default Footer