import Image from "next/image";
import bgCoffee from "../../public/img/kawa_na_stole.jpeg";
import bgCake from "../../public/img/cake.jpg";
import bgSand from "../../public/img/kanapka.jpeg";
import { useState } from "react";
const CoffeeMenu = () => {
  const [menu, setMenu] = useState("coffee");
  return (
    <div
      id="menu"
      className=" w-full h-screen flex flex-col items-center overflow-hidden relative"
    >
      <Image
        src={bgCoffee}
        alt="dd"
        className={`h-screen object-cover absolute top-0 w-full left-0  z-0  ${
          menu !== "coffee" && "invisible"
        } `}
      ></Image>
      <Image
        src={bgCake}
        alt="dd"
        className={`h-screen object-cover  absolute top-0 left-0 w-full z-0 ${
          menu !== "cake" && "invisible"
        } `}
      ></Image>

      <Image
        src={bgSand}
        alt="dd"
        className={`h-screen object-cover absolute top-0 left-0 w-full z-0 ${
          menu !== "sand" && "invisible"
        } `}
      ></Image>

      <div className="mx-auto join mt-8 z-20">
        <button
          className="btn btn-lg btn-ghost text-white join-item"
          onClick={() => setMenu("cake")}
        >
          Desery
        </button>
        <button
          className="btn btn-lg btn-ghost text-white join-item"
          onClick={() => setMenu("coffee")}
        >
          Kawy
        </button>

        <button
          className="btn btn-lg btn-ghost text-white join-item"
          onClick={() => setMenu("sand")}
        >
          Kanapki
        </button>
      </div>
      <div className="z-10 grid grid-cols-2 w-full  bg-slate-900 bg-opacity-40 absolute top-0  h-full">
        {menu == "coffee" && (
          <div className=" flex flex-col col-span-2  sm:col-start-2 mt-48  text-white  ">
            <p className="text-3xl">Kawy</p>

            <ul className="ml-24 text-xl">
              <li>Espresso 9,-</li>
              <li>Espresso doppio 15,-</li>
              <li>Espresso macchiato 10,-</li>
              <li>Espresso macchiato doppio 16,-</li>
              <li>Kawa Americano (czarna) 12,-</li>
              <li>Kawa Americano (czarna) duża 14,-</li>
              <li>Kawa z mlekiem 14,-</li>
              <li>Kawa z mlekiem duża 16,-</li>
              <li>Flat white 16,-</li>
              <li>Cappuccino 14,-</li>
              <li>Latte macchiato 16,-</li>
            </ul>
          </div>
        )}
        {menu == "cake" && (
          <div className=" flex flex-col  col-span-2  sm:col-start-1 mt-48  ml-24 text-white  ">
            <p className="text-3xl">Desery</p>

            <ul className="ml-24 text-xl">
              <li>Szarlotka 10,-</li>
              <li>Naleśniki z serem 20,-</li>

              <li>Sernik 12,-</li>
              <li>Lody 15,-</li>

              <li>Frappe z lodami 16,-</li>
            </ul>
          </div>
        )}
        {menu == "sand" && (
          <div className=" flex flex-col col-span-2  sm:col-start-1 ml-24 mt-48  text-white ">
            <p className="text-3xl">Kanapki</p>

            <ul className="ml-24 text-xl">
              <li>Blt 22,-</li>
              <li>Tuńczyk 25,-</li>
              <li>Camembert 18,-</li>
              <li>Parma 20,-</li>
              <li>Steak 23,-</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default CoffeeMenu;
