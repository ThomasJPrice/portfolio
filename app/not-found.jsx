import { SectionTitle } from "@/components"

const NotFound = () => {
  return (
    <section id='404' className="flex-grow flex flex-col items-center h-max">
      <SectionTitle title='404' />

      <p className="text-center">Oh no! The page you are looking for can't be found.</p>

      <a href="/" className="text-center mt-8 bg-[#498C58] font-medium py-1 px-4 rounded-md">Go Home</a>
    </section>
  )
}

export default NotFound