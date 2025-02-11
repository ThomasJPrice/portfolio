import { Projects, SectionTitle } from "@/components"
import ScrollingLogos from "@/components/ScrollingLogos"

const projectData = {
  projects: [
    {
      name: 'Paapo',
      year: '2024',
      description: 'Paapo are on a mission to build financial resilience and stability for everyone. I helped them to design and build a website that reflects their vision with key features such as a Resource Hub that they can easily create resources for using Sanity embedded studio and NextJS 15 dynamic routes, and a money personality quiz.',
      website: 'https://paapo.co.uk',
      imageUrls: ['https://cloud-di0nqc237-hack-club-bot.vercel.app/0laptop.png', 'https://cloud-n62xq2n1m-hack-club-bot.vercel.app/0phone.png', 'https://cloud-kdpndr8r0-hack-club-bot.vercel.app/0ipad.png'],
      tags: ['NextJS', 'Integrated Studio', 'Dynamic Routes']
    },
    {
      name: 'Baby Blue',
      year: '2024',
      description: 'I worked closely with Baby Blue IT & Consulting in order to create a website that is scalable and fast. To meet these requirements, I used NextJS 14 dynamic routes to easily navigate to new text pages for different services or scenarios they offer/cater to, which they can easily add in their admin panel hosted by Sanity.',
      website: 'https://babyblueitconsulting.com',
      imageUrls: ['https://cloud-b7vgj79fj-hack-club-bot.vercel.app/0laptop.png', 'https://cloud-39m8c81s6-hack-club-bot.vercel.app/0phone.png', 'https://cloud-io4qecthx-hack-club-bot.vercel.app/0ipad.png'],
      tags: ['NextJS', 'Blog', 'Dynamic Routes']
    },
    {
      name: 'Perran Beach House',
      year: '2024',
      description: 'Perran Beach House are a holiday rental home in Cornwall. They asked me to create a website which would offer users information about the house and surrounding areas, and the ammenities they offer. They also requested a booking system where customers could pay a deposit and then pay the rest on a later date. After alot of research, I settled on CheckFront and adapted it to meet the needs of the client, as well as embeddeding their booking portal on the website.',
      website: 'https://perranbeachhouse.com',
      imageUrls: ['https://i.ibb.co/vsX2GLm/Laptop.jpg', 'https://i.ibb.co/wcnCPHs/Phone.jpg', 'https://i.ibb.co/gVnFnFp/iPad.jpg'],
      tags: ['NextJS', 'Booking System', 'Multi-Page']
    },
    {
      name: 'House of Handsome',
      year: '2023',
      description: 'House of Handsome asked me to create a website for them from scratch. Keeping inline with their quirky and unique brand, I designed and built a creative site. The client can also fully edit all the content easily using Sanity as a Headless CMS.',
      website: 'https://houseofhandsomebedford.co.uk',
      imageUrls: ['https://i.ibb.co/gd80xM6/Laptop.jpg', 'https://i.ibb.co/ZHfjm57/Phone.jpg', 'https://i.ibb.co/Rjx6cqf/iPad.jpg'],
      tags: ['ReactJS', 'From Scratch', 'TailwindCSS']
    },
    {
      name: 'Song Squad',
      year: '2023',
      description: 'Song Squad are a vibrant and dynamic group delivering classes across Bedford. I wanted to keep in line with their fun and joyful branding and therefore created a custom rainbow button and section title with music notes to reflect their core concept.',
      website: 'https://song-squad.co.uk',
      imageUrls: ['https://i.ibb.co/cXJ2mzP/Laptop.jpg', 'https://i.ibb.co/vdLWf4M/Phone.jpg', 'https://i.ibb.co/44h0Pbg/iPad.jpg'],
      tags: ['ReactJS', 'Static Site', 'Contact Form']
    },
    // {
    //   name: 'Veil and Vogue',
    //   year: '2023',
    //   description: "Veil and Vogue asked me to create them a full e-commerce website and brand from scratch. They sell modest Islamic clothing and because of this I chose to use a sage green to reflect calmness. I decided on NextJS because of it's server side rendering, which would boost performance as well as routing. I also chose to use Sanity CMS over other CMS's such as Strapi because I could customize it exact to my client's needs. Because of this, it is now very user friendly and the owner feels confident using it. My final decision was Stripe, I chose them as the payment processing platform because it is easy to implement, and customize, their checkout page.",
    //   website: 'https://veilandvogue.co.uk',
    //   imageUrls: ['https://i.ibb.co/1KsSj3v/Laptop.jpg', 'https://i.ibb.co/pJkmvrz/Phone.jpg', 'https://i.ibb.co/NSnjphQ/iPad.jpg'],
    //   tags: ['NextJS', 'Stripe', 'Ecommerce']
    // },
  ]
}

const ClientProjects = () => {
  return (
    <section id='projects' className="container mx-auto px-2 mb-8 md:mb-16 overflow-hidden">
      <SectionTitle
        desc={<><span className="inline lg:hidden">Press</span><span className="hidden lg:inline">Click</span> to expand and view more information about each project</>}
        title='Recent Work'
      />

      <Projects projects={projectData.projects} />
    </section>
  )
}

export default ClientProjects