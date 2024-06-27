import { MotionDiv } from "."

const SectionTitle = ({ title, desc }) => {
  return (
    <MotionDiv className="py-12 flex flex-col items-center"
      initial={{ y: "-20%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: 'easeInOut', duration: 0.5 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className="text-section font-semibold relative">{title}
        <div className="w-[120%] max-w-[90dvw] h-8 absolute top-6 left-[50%] translate-x-[-50%] bg-[#498C58] -z-10"></div>
      </h2>

      {desc && <p className="mt-6">{desc}</p>}
    </MotionDiv>
  )
}

export default SectionTitle