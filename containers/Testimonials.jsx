import { SectionTitle, TestimonialText } from "@/components"

const testimonialData = [
  {
    name: 'House of Handsome',
    logoUrl: 'https://i.imgur.com/kHydFTZ.png',
    website: 'https://houseofhandsomebedford.co.uk',
    testimonial: 'Thomas has been amazing at creating the website for me *from *scratch listened to what I had asked for and was happy to add/change things for me and help me know what to do when it came to it! *Very *helpful and great at what he does.'
  },
  {
    name: 'Thomas Properties',
    logoUrl: 'https://thomaspropertymanagement.co.uk/wp-content/uploads/2022/09/cropped-Thomas-properties-1-2.png',
    website: 'https://thomaspropertymanagement.co.uk',
    testimonial: "Thomas was recommended to us, we had a website but didn't have the time or knowledge to get it looking it's best. Thomas gave a few options on how to move forward. We asked him to *design the whole website for us and it looks *amazing! Just how we wanted it to look and more. Thomas understood our vision and added little extras which makes the website look very *professional! We've had many compliments since it was launched last week. Thomas was very professional in his *communication and advice."
  },
  {
    name: 'Veil and Vogue',
    logoUrl: 'https://cdn.sanity.io/images/z72kc5dq/production/183ea85dd7330046fb8d71b97efacb7a1fcebecd-784x251.png',
    website: 'https://veilandvogue.co.uk',
    testimonial: "Thomas’s work with us was *absolutely *seamless. He brought my vision to life and listened to the smallest details and produced exactly the type of website and logo I was looking for. I absolutely recommend Thomas for anyone wanting a truly *professional and *user-friendly website. He’s a great listener and works *magic!"
  },
  {
    name: 'Dijjie Consulting',
    logoUrl: 'https://cdn.sanity.io/images/6chcjt3t/production/454bb2a1eb7c431f4da910526c8f126bacb3a555-313x139.png',
    website: 'https://dijjie.com',
    testimonial: "I couldn't be happier with the results. Thomas was professional, creative, and *technically *skilled. He understood my vision and created a *stunning, user-friendly website that exceeded my expectations. Thomas communicated effectively throughout the process, providing regular updates and addressing any concerns promptly. His suggestions *greatly *enhanced the website's overall look and performance."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className="container mx-auto px-2 mb-8 md:mb-16">
      <SectionTitle title='What Do Clients Say?' />

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        {testimonialData.map((item, index) => (
          <div key={item + index} className="bg-black bg-opacity-20 rounded-md p-4 flex flex-col gap-8 items-start justify-between">
            <div>
              <img src={item.logoUrl} alt={item.name + ' Logo'} className="h-[80px] object-contain mb-4" />

              <TestimonialText text={item.testimonial} />
            </div>

            <div>
              <h4 className="font-bold">{item.name}</h4>
              <a className="font-condensed" href={item.website} target='_blank'>{item.website.replace('https://', '')}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials