import { Modal } from "@/components";
import ScrollingLogos from "@/components/ScrollingLogos";
import { Benefits, ClientProjects, Contact, Hero, Testimonials } from "@/containers";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <ClientProjects />
      <ScrollingLogos />
      <Benefits />
      <Testimonials />
      <Contact />

      <Modal />
    </main>
  );
}
