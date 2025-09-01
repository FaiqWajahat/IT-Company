import About from "@/Components/About";
import Client from "@/Components/Client";
import { Clients } from "@/Components/Clients";
import Contactus from "@/Components/Contactus";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Technologies from "@/Components/Technologies";
import Testimonial from "@/Components/Testimonial";

export default function Home() {
  return (
   <>
<Hero/>
<Clients/>
<About/>
<Services/>
<Client/>

<Projects/>
<Technologies/>
<Testimonial/>
<Contactus/>
   </>
  );
}
