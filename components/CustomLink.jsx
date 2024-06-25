import Link from "next/link"

const CustomLink = ({ link, text, Icon, iconStyles }) => {
  return (
    <Link href={'https://' + link} className='relative group h-[30px] overflow-hidden' target='_blank'>
      <div className='flex gap-2 items-center absolute top-0 group-hover:-top-[45px] transition-all duration-150'>
        <span className='font-medium'>{text}</span>

        {Icon && <Icon className={`w-6 h-6 ${iconStyles}`} />}
      </div>

      <div className='flex gap-2 items-center absolute -bottom-[30px] group-hover:bottom-0 transition-all duration-150'>
        <span className='text-primary font-medium'>{link}</span>

        {Icon && <Icon className={`w-6 h-6 ${iconStyles} text-primary`} />}
      </div>
    </Link>
  )
}

export default CustomLink