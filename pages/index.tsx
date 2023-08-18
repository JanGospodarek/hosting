import Benefits from "../components/main/landing/Benefits";
import Contact from "../components/main/landing/Contact";
import ExampleProjects from "../components/main/landing/ExampleProjects";
import Footer from "../components/main/landing/Footer";
import Hero from "../components/main/landing/Hero";
import Imagination from "../components/main/landing/Imagination";
import Navbar from "../components/main/landing/Navbar";
import Technologies from "../components/main/landing/Technologies";
const IndexPage = () => (
  <div className="max-w-[1440px] mx-auto flex flex-col">
    <Navbar />
    <Hero />
    <Imagination />
    <ExampleProjects />

    <Benefits />
    <Technologies />
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;
