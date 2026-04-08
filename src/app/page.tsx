import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertises from "@/components/Expertises";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PolynésienDivider from "@/components/PolynésienDivider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PolynésienDivider />
      <About />
      <PolynésienDivider inverted />
      <Expertises />
      <PolynésienDivider />
      <Gallery />
      <PolynésienDivider inverted />
      <Pricing />
      <PolynésienDivider />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
