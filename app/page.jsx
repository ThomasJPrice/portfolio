import { Benefits, ClientProjects, Hero, Testimonials } from "@/containers";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ClientProjects />
      <Benefits />
      <Testimonials />
    </main>
  );
}
