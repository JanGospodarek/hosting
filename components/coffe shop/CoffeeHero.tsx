import Image from "next/image";
import bg from "../../public/img/coffeeHero.jpeg";
import { Link } from "react-scroll";
const CoffeeHero = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden ">
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-gray-900 bg-opacity-60"></div>

      <div className="absolute h-full w-full  top-0 left-0 z-10 text-center flex flex-col justify-center items-center ">
        <div className="font-tilt z-10 text-white text-5xl sm:text-6xl md:text-8xl p-10">
          KAWIARNIA
        </div>

        <p className=" text-2xl sm:text-3xl md:text-4xl text-white">
          Poczuj smak prawdziwej kawy
        </p>
      </div>
      <Image
        src={bg}
        alt="coffee"
        className="h-screen object-cover fixed top-0 left-0 -z-10"
      ></Image>
      <div className="absolute right-8 top-0 z-10">
        {/* <Link>Kontakt</Link> */}
        <Link
          to="menu"
          smooth={true}
          duration={1500}
          className="btn btn-ghost text-white btn-lg"
        >
          Menu
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1500}
          className="btn btn-ghost text-white btn-lg"
        >
          Kontakt
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1500}
          className="btn btn-ghost text-white btn-lg"
        >
          O nas
        </Link>
      </div>
    </div>
    // <div
    //   className="hero min-h-screen relative "
    //   style={{
    //     backgroundImage:
    //       "url(https://s.hdnux.com/photos/01/33/21/61/23927935/3/rawImage.jpg)",
    //   }}
    // >
    //   <div className="absolute right-8 top-0 z-10">
    //     {/* <Link>Kontakt</Link> */}
    //     <Link
    //       to="menu"
    //       smooth={true}
    //       duration={1500}
    //       className="btn btn-ghost text-white"
    //     >
    //       Menu
    //     </Link>
    //     <Link
    //       to="footer"
    //       smooth={true}
    //       duration={1500}
    //       className="btn btn-ghost text-white"
    //     >
    //       Kontakt
    //     </Link>
    //     <Link
    //       to="about"
    //       smooth={true}
    //       duration={1500}
    //       className="btn btn-ghost text-white"
    //     >
    //       O nas
    //     </Link>
    //   </div>
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="">
    //       <div className="font-tilt z-10 text-white text-8xl p-10">
    //         KAWIARNIA
    //       </div>
    //       <p className="text-4xl text-white">Poczuj smak prawdziwej kawy</p>
    //     </div>
    //   </div>
    // </div>
  );
};
export default CoffeeHero;
