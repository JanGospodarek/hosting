import Logo from "../../../public/img/logo2.png";
import Image from "next/image";
import Lottie from "lottie-react";
import HeroAnimation from "../../../public/lottie/cpu.json";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="h-screen  relative w-screen self-center">
      <div className="h-screen   flex flex-col items-center lg:block z-10  p-16">
        <Image
          src={Logo}
          alt="logo"
          className="w-[400px] lg:w-[500px] xl:w-[600px] "
        />
        <div className="mt-4 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]  text-center z-20 ">
          <h1 className="text-2xl ">
            Razem stwórzmy przyszłość
            <span className="font-bold"> Twojej</span> firmy w internecie
          </h1>

          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={1500}
            className="btn btn-lg btn-outline btn-primary mt-6"
          >
            Kontakt
          </Link>
          <Link
            to="offer"
            smooth={true}
            offset={-100}
            duration={1500}
            className="btn btn-lg btn-outline btn-primary mt-6 ml-8"
          >
            Oferta
          </Link>
        </div>
      </div>

      <Lottie
        animationData={HeroAnimation}
        loop={true}
        className="md:w-[600px] lg:w-[700px] xl:w-[1000px] absolute mx-auto left-0 right-0 top-96  md:top-56 lg:left-auto lg:right-0   lg:top-24  z-10 "
      />
    </div>
  );
};
export default Hero;
