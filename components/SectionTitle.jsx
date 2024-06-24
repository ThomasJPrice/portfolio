const SectionTitle = ({ title, desc }) => {
  return (
    <div className="py-8 flex flex-col items-center">
      <h2 className="text-section font-semibold relative">{title}
        <div className="w-[120%] h-8 absolute top-6 left-[50%] translate-x-[-50%] bg-primary bg-opacity-70 -z-10"></div>
      </h2>

      {desc && <p className="mt-6">{desc}</p>}
    </div>
  )
}

export default SectionTitle