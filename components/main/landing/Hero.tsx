import Logo from "../../../public/img/logo.png";
import Image from "next/image";
import Lottie from "lottie-react";
import HeroAnimation from "../../../public/lottie/hero.json";
const Hero = () => {
  return (
    <div className="h-screen  flex flex-col items-start justify-center relative">
      <Lottie
        animationData={HeroAnimation}
        loop={true}
        className="absolute bottom-0 right-0"
        style={{ width: "800px" }}
      />

      <div className="flex flex-col  ml-20 my-auto items-center">
        <Image src={Logo} alt="logo" width={600} />

        <div className="mt-4">
          <h1 className="text-2xl">
            Razem stwórzmy przyszłość
            <span className="text-primary"> Twojej</span> firmy w internecie
          </h1>
        </div>
        <a className="btn btn-primary btn-md btn-outline mt-4">Kontakt</a>
      </div>
    </div>
  );
};
export default Hero;
