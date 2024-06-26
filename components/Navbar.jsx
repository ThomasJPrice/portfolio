import { Logo } from "@/assets"
import { MobileMenu, NavLink } from "."

const navLinks = [
  {
    name: 'About Me',
    link: '#'
  },
  {
    name: 'Client Work',
    link: '#projects'
  },
  {
    name: 'Benefits',
    link: '#benefits'
  },
  {
    name: 'Testimonials',
    link: '#testimonials'
  },
  {
    name: 'Contact Me',
    link: '#'
  },
]
const Navbar = () => {
  return (
    <nav className="h-[100px] container mx-auto px-2 flex justify-between items-center max-md:relative overflow-hidden">
      <a href="/" className="h-[60%]">
        <img src={Logo.src} alt="logo" className="w-full h-full object-contain" />
      </a>

      {/* desktop navlinks */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((item, index) => (
          <NavLink key={item+index} item={item} index={index} />
        ))}
      </ul>

      {/* mobile menu */}
      <MobileMenu navLinks={navLinks} />
    </nav>
  )
}

export default Navbar