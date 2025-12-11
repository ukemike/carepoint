import Hero from "./Hero";
import WhatWeDo from "./WhatWeDo";
import Benefits from "./Benefits";
import RequestForm from "./RequestForm";
import Procurement from "./Procurement";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <WhatWeDo />
      <Benefits />
      <RequestForm />
      <Procurement />
      <Testimonials />
      <About />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Home;
