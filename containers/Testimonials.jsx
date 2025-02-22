import { MotionDiv, SectionTitle, TestimonialText } from "@/components"

const testimonialData = [
  {
    name: 'Baby Blue',
    logoUrl: '/babyblue.png',
    website: 'https://babyblueitconsulting.com',
    testimonial: "I couldn't be happier with the results. Thomas was professional, creative, and *technically *skilled. He understood my vision and created a *stunning, user-friendly website that exceeded my expectations. Thomas communicated effectively throughout the process, providing regular updates and addressing any concerns promptly. His suggestions *greatly *enhanced the website's overall look and performance."
  },
  {
    name: 'Thomas Properties',
    logoUrl: '/thomasproperties.png',
    website: 'https://thomaspropertymanagement.co.uk',
    testimonial: "Thomas was recommended to us, we had a website but didn't have the time or knowledge to get it looking it's best. Thomas gave a few options on how to move forward. We asked him to *design the whole website for us and it looks *amazing! Just how we wanted it to look and more. Thomas understood our vision and added little extras which makes the website look very *professional! We've had many compliments since it was launched last week. Thomas was very professional in his *communication and advice."
  },
  {
    name: 'Parentology World',
    logoUrl: '/parentologyworld.png',
    website: 'https://parentologyworld.com',
    testimonial: "I am so happy with the work Thomas did on my website! He completely understood my vision, took on board everything I was thinking, and brought it to life in an *amazing way. I ended up asking for more than I originally planned, and he accommodated everything seamlessly. His communication was *excellent throughout the process, making the whole experience *stress-free. I would highly recommend!"
  },
  {
    name: 'Veil and Vogue',
    logoUrl: '/veilandvogue.png',
    website: 'https://veilandvogue.co.uk',
    testimonial: "Thomas's work with us was *absolutely *seamless. He brought my vision to life and listened to the smallest details and produced exactly the type of website and logo I was looking for. I absolutely recommend Thomas for anyone wanting a truly *professional and *user-friendly website. He's a great listener and works *magic!"
  },
  {
    name: 'Paapo',
    logoUrl: '/paapo.png',
    website: 'https://paapo.co.uk',
    testimonial: "I am impressed with Thomas' *professionalism, dedication and craft, he created our website on time with *beautiful designs just as we wanted it to be. He is *absolutely *brilliant and is highly recommended and we won't hesitate to engage him on future projects."
  },
  {
    name: 'House of Handsome',
    logoUrl: '/houseofhandsome.png',
    website: 'https://houseofhandsomebedford.co.uk',
    testimonial: 'Thomas has been amazing at creating the website for me *from *scratch listened to what I had asked for and was happy to add/change things for me and help me know what to do when it came to it! *Very *helpful and great at what he does.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className="container mx-auto px-2 mb-8 md:mb-16">
      <SectionTitle title='What Do Clients Say?' />

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        {testimonialData.map((item, index) => (
          <MotionDiv key={item + index} className="bg-[#1B1B1B] rounded-md p-4 flex flex-col gap-8 items-start justify-between"
            initial={{ y: "10%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 * index, ease: 'easeInOut', duration: 0.5 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div>
              <img src={item.logoUrl} alt={item.name + ' Logo'} className="h-[80px] p-1 object-contain mb-4" />

              <TestimonialText text={item.testimonial} />
            </div>

            <div>
              <h4 className="font-bold">{item.name}</h4>
              <a className="font-condensed" href={item.website} target='_blank'>{item.website.replace('https://', '')}</a>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}

export default Testimonials 