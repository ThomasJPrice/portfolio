import { Modal } from "@/components";
import { Benefits, ClientProjects, Contact, Hero, Testimonials } from "@/containers";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ClientProjects />
      <Benefits />
      <Testimonials />
      <Contact />

      <Modal />
    </main>
  );
}
