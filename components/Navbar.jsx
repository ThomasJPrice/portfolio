import { Logo } from "@/assets"
import { MobileMenu, MotionNav, NavLink } from "."

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
    <>
      <MotionNav className="h-[100px] bg-background container mx-auto px-2 flex justify-between items-center max-md:relative overflow-hidden"
        initial={{ y: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, ease: 'easeInOut', duration: 0.5 }}
        viewport={{ amount: 0 }}
      >
        <a href="/" className="h-[60%]">
          <img src={Logo.src} alt="logo" className="w-full h-full object-contain" />
        </a>

        {/* desktop navlinks */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((item, index) => (
            <NavLink key={item + index} item={item} index={index} />
          ))}
        </ul>

        {/* mobile menu */}
      </MotionNav>

      <MobileMenu navLinks={navLinks} />
    </>
  )
}

export default Navbar