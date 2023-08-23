import Image from "next/image";
import bg from "../../public/img/coffeeHero.jpeg";
const CoffeeHero = () => {
  return (
    <div className="h-[700px] w-screen relative overflow-hidden ">
      <div className="absolute h-full w-full bg-slate-950 bg-opacity-40 top-0 left-0 z-10 text-center flex justify-center items-center ">
        <p className="text-5xl text-white">Poczuj smak prawdziwej kawy</p>
      </div>
      <Image
        src={bg}
        alt="coffee"
        className="fixed top-0 left-0 w-full -z-10"
      ></Image>
      <div className="absolute right-8 top-0 z-10">
        {/* <Link>Kontakt</Link> */}
        <a className="btn btn-ghost text-white">Menu</a>
        <a className="btn btn-ghost text-white">Kontakt</a>
        <a className="btn btn-ghost text-white">O nas</a>
      </div>
    </div>
  );
};
export default CoffeeHero;
