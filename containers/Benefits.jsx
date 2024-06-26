import { SectionTitle } from "@/components"
import * as Icons from 'react-icons/ai'

const benefitsData = {
  title: 'Why Me?',
  benefits: [
    {
      name: 'Mobile-First Design',
      icon: Icons.AiOutlineMobile,
      desc: 'I prioritize designing for mobile devices to ensure a seamless user experience across all screen sizes.'
    },
    {
      name: 'Fast Performance',
      icon: Icons.AiOutlineThunderbolt,
      desc: 'By using modern technologies, such as NextJS, I ensure that your website loads quickly and efficiently, providing a smooth and enjoyable user experience.'
    },
    {
      name: 'SEO Optimization',
      icon: Icons.AiOutlineZoomIn,
      desc: 'I implement best practices in SEO to help your website rank higher in search engine results.'
    },
  ]
}

const Benefits = () => {
  return (
    <section id="benefits" className="container px-2 mx-auto mb-16">
      <SectionTitle title={benefitsData.title} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {benefitsData.benefits.map((item, index) => (
          <div key={item + index} className="flex flex-col hover:scale-[1.02] transitionAll items-center border rounded-md p-4 gap-2 shadow-lg">
            <item.icon className="border rounded-sm p-1 text-5xl border-primary text-primary mb-2" />
            <p className="text-[20px] md:text-[24px] font-condensed font-semibold">{item.name}</p>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits