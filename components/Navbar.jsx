import { Logo } from "@/assets"
import { MobileMenu } from "."

const navLinks = [
  {
    name: 'About Me',
    link: '/'
  },
  {
    name: 'Client Work',
    link: '#projects'
  },
  {
    name: 'Services',
    link: '#services'
  },
  {
    name: 'Testimonials',
    link: '#testimonials'
  },
  {
    name: 'Contact Me',
    link: '#contact'
  },
]

const Navbar = () => {
  return (
    <nav className="h-[100px] container mx-auto px-2 flex justify-between items-center max-md:relative">
      <a href="/" className="h-[60%]">
        <img src={Logo.src} alt="logo" className="w-full h-full object-contain" />
      </a>

      {/* desktop navlinks */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((item, index) => (
          <li key={item + index} className="font-semibold overflow-hidden">
            <a href={item.link} className="relative group h-[30px] overflow-hidden">

              <span aria-hidden="true" className="block h-[30px] invisible">{item.name}</span>

              <span className="absolute left-0 top-0 group-hover:-top-[30px] transition-all duration-300">{item.name}</span>
              <span className="absolute left-0 -bottom-[30px] group-hover:bottom-0 transition-all duration-300 text-primary">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      
      {/* mobile menu */}
      {/* <AiFillAccountBook className="absolute right-0" /> */}
      <MobileMenu navLinks={navLinks} />
    </nav>
  )
}

export default Navbar