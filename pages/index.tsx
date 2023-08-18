import Benefits from "../components/main/landing/Benefits";
import Contact from "../components/main/landing/Contact";
import ExampleProjects from "../components/main/landing/ExampleProjects";
import Hero from "../components/main/landing/Hero";
import Imagination from "../components/main/landing/Imagination";
import Navbar from "../components/main/landing/Navbar";
import Technologies from "../components/main/landing/Technologies";
const IndexPage = () => (
  <>
    <Navbar />
    <Hero />
    <Imagination />
    <Benefits />
    <Technologies />
    <ExampleProjects />
    <Contact />
  </>
);

export default IndexPage;
