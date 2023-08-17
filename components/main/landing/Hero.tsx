import Logo from "../../../public/img/logo.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="  h-screen bg-base-200 flex items-center justify-start ">
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
    </div>
  );
};
export default Hero;
