import Logo from "../../../public/img/logo.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="h-screen  flex flex-col items-start justify-center ">
      <div className="flex flex-col ml-28  ">
        <Image src={Logo} alt="logo" width={600} />

        <div className="mt-4">
          <h1 className="text-2xl">
            Stórzmy stronę internetową dla
            <span className="text-primary"> Twojej</span> firmy
          </h1>
          {/* <a className="btn btn-primary btn-outline" href="#benefits">
            Dowiedz się więcej
          </a> */}
        </div>
      </div>
      <button className="btn btn-outline mx-auto mt-28">
        Dowiedz się więcej
      </button>
    </div>
  );
};
export default Hero;
