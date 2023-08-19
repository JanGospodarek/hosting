import Logo from "../../../public/img/logo2-white.png";
import Image from "next/image";
import Lottie from "lottie-react";
import HeroAnimation from "../../../public/lottie/hero.json";
const Hero = () => {
  return (
    // <div className="h-screen flex flex-col xl:flex-row items-center justify-center ">
    //   <div className="flex flex-col mt-36  xl:ml-20  xl:my-auto items-center">
    //     <Image
    //       src={Logo}
    //       alt="logo"
    //       className="w-[300px] md:w-[400px] xl:w-[600px]"
    //     />

    // <div className="mt-4">
    //   <h1 className="text-2xl text-center">
    //     Razem stwórzmy przyszłość
    //     <span className="text-primary"> Twojej</span> firmy w internecie
    //   </h1>
    // </div>
    // <a className="btn btn-primary btn-md btn-outline mt-4">Kontakt</a>
    //   </div>
    //   <Lottie
    //     animationData={HeroAnimation}
    //     loop={true}
    //     className="md:w-[500px] xl:w-[800px]"
    //   />
    // </div>
    <div className="h-screen relative w-screen self-center">
      <div className="h-screen  bg-gradient-to-b from-slate-900 to-transparent flex flex-col items-center lg:block z-10  p-16">
        <Image
          src={Logo}
          alt="logo"
          className="w-[400px] lg:w-[500px] xl:w-[600px] "
        />
        <div className="mt-4 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]  text-center">
          <h1 className="text-2xl text-slate-200 ">
            Razem stwórzmy przyszłość
            <span className="font-bold"> Twojej</span> firmy w internecie
          </h1>
          <a className="btn btn-lg glass mt-4">Kontakt</a>
        </div>
      </div>
      <Lottie
        animationData={HeroAnimation}
        loop={true}
        className="md:w-[600px] lg:w-[700px] xl:w-[1000px] absolute mx-auto left-0 right-0 top-72  md:top-56 lg:left-auto lg:right-0   lg:top-36 xl:top-6 -z-10 "
      />
    </div>
  );
};
export default Hero;
