import Logo from "../../../public/img/logo.png";
import Image from "next/image";
import Lottie from "lottie-react";
import HeroAnimation from "../../../public/lottie/hero.json";
const Hero = () => {
  return (
    <div className="h-screen flex flex-col xl:flex-row items-center justify-center ">
      <div className="flex flex-col mt-36  xl:ml-20  xl:my-auto items-center">
        <Image
          src={Logo}
          alt="logo"
          className="w-[300px] md:w-[400px] xl:w-[600px]"
        />

        <div className="mt-4">
          <h1 className="text-2xl text-center">
            Razem stwórzmy przyszłość
            <span className="text-primary"> Twojej</span> firmy w internecie
          </h1>
        </div>
        <a className="btn btn-primary btn-md btn-outline mt-4">Kontakt</a>
      </div>
      <Lottie
        animationData={HeroAnimation}
        loop={true}
        className="md:w-[500px] xl:w-[800px]"
      />
    </div>
  );
};
export default Hero;
