import Benefits from "../components/main/landing/Benefits";
import Contact from "../components/main/landing/Contact";
import ExampleProjects from "../components/main/landing/ExampleProjects";
import Footer from "../components/main/landing/Footer";
import Hero from "../components/main/landing/Hero";
import Imagination from "../components/main/landing/Imagination";
import Offer from "../components/main/landing/Offer";
import Technologies from "../components/main/landing/Technologies";
import { DefaultSeo } from "next-seo";

const IndexPage = () => (
  <>
    <DefaultSeo
      defaultTitle="Flowbits"
      description="Strony WWW od 999zł! Stwórzmy wizytówkę twojej firmy w internecie. Zajmujemy się projektowaniem i tworzeniem stron internetowych dla nowych i rozwijających się firm. "
      canonical="https://flowbits.pl/"
    />
    <div className="max-w-[1440px] mx-auto flex flex-col">
      {/* <Navbar /> */}
      <Hero />
      <Imagination />
      <ExampleProjects />
      <Benefits />
      <Technologies />
      <Offer></Offer>
      <Contact />
      <Footer />
    </div>
  </>
);

export default IndexPage;
