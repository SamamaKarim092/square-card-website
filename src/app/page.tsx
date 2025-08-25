import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import UpToDate from "./components/UpToDate";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <UpToDate />
      <Cards />
      <About />
      <Footer />
      <Testimonials />
      <CTA />
    </>
  );
}
