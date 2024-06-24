import { Projects } from "@/components"

const projectData = {
  projects: [
    {
      name: 'Dijjie',
      year: '2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Pellentesque id nibh tortor id aliquet. Dignissim sodales ut eu sem integer vitae justo eget magna. Faucibus a pellentesque sit amet porttitor eget dolor. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.',
      website: 'https://dijjie.com',
      imageUrls: ['https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png'],
      tags: ['NextJS', 'From Scratch', 'Dynamic Routes']
    },
    {
      name: 'House of Handsome',
      year: '2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Pellentesque id nibh tortor id aliquet. Dignissim sodales ut eu sem integer vitae justo eget magna. Faucibus a pellentesque sit amet porttitor eget dolor. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.',
      website: 'https://houseofhandsomebedford.co.uk',
      imageUrls: ['https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png'],
      tags: ['ReactJS', 'From Scratch', 'TailwindCSS']
    },
    {
      name: 'Veil and Vogue',
      year: '2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Pellentesque id nibh tortor id aliquet. Dignissim sodales ut eu sem integer vitae justo eget magna. Faucibus a pellentesque sit amet porttitor eget dolor. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.',
      website: 'https://veilandvogue.co.uk',
      imageUrls: ['https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png', 'https://i.ibb.co/b57rBKS/vvmockup.png'],
      tags: ['NextJS', 'Stripe', 'Ecommerce']
    },
  ]
}

const ClientProjects = () => {
  return (
    <section id='projects' className="container mx-auto px-2">
      <div className="mb-8">

        {/* custom heading */}
        <h2 className="text-section font-semibold text-center mb-2 text-primary">Client Work</h2>

        <p className="text-center"><span className="inline lg:hidden">Press</span><span className="hidden lg:inline">Click</span> to expand and view more information about each client</p>
      </div>

      <Projects projects={projectData.projects} />
    </section>
  )
}

export default ClientProjects