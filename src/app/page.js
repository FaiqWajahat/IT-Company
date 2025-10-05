import Client from "@/Components/Client";
import { Clients } from "@/Components/Clients";
import Contactus from "@/Components/Contactus";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";

import Testimonial from "@/Components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />

      <Services />
      <Client />

      <Projects />

      <Testimonial />
      <Contactus />
    </>
  );
}
