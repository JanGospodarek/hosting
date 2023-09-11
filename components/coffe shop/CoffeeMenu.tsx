import Image from "next/image";
import bgCoffee from "../../public/img/kawa_na_stole.jpeg";
import bgCake from "../../public/img/cake.jpg";
import bgSand from "../../public/img/kanapka.jpeg";
import { useState } from "react";
import CoffeeSingleMenu from "./CoffeeSingleMenu";
import { Dishes } from "../../interfaces/types";

const coffes: Dishes = [
  { name: "Espresso", price: 8 },
  { name: "Mocha", price: 13 },
  { name: "Latte", price: 12 },
  { name: "Latte Macchiato", price: 15 },
  { name: "Cappuccino", price: 13 },
  { name: "Americana", price: 15 },
  { name: "Flat white", price: 14 },
];
const desserts: Dishes = [
  { name: "Sernik wiedeński", price: 18 },
  { name: "Szarlotka", price: 16 },
  { name: "Tiramisu", price: 21 },
  { name: "Zestaw ciastek", price: 12 },
  { name: "Pączek", price: 6 },
];
const sandiwches: Dishes = [
  { name: "Cheesesteak", price: 25 },
  { name: "Croque-madame", price: 31 },
  { name: "Reuben", price: 28 },
  { name: "Gatsby", price: 25 },
  { name: "BLT", price: 23 },
  { name: "Sloppy Joe", price: 23 },
  { name: "Grilled Cheese", price: 18 },
];
const CoffeeMenu = () => {
  const [menu, setMenu] = useState<"coffee" | "cake" | "sand">("coffee");
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
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-gray-900 bg-opacity-60"></div>
      <div className="mx-auto join mt-8 z-20 ">
        <button
          className={`btn btn-lg btn-ghost text-white join-item text-xl ${
            menu === "cake" && "underline decoration-4 underline-offset-8		"
          }`}
          onClick={() => setMenu("cake")}
        >
          Desery
        </button>
        <button
          className={`btn btn-lg btn-ghost text-white join-item text-xl ${
            menu === "coffee" && "underline decoration-4 underline-offset-8		"
          }`}
          onClick={() => setMenu("coffee")}
        >
          Kawy
        </button>
        <button
          className={`btn btn-lg btn-ghost text-white join-item text-xl ${
            menu === "sand" && "underline decoration-4 underline-offset-8		"
          }`}
          onClick={() => setMenu("sand")}
        >
          Kanapki
        </button>
      </div>
      <div className="z-10  w-full  absolute top-0  h-full flex flex-col items-center justify-center">
        {menu == "coffee" && <CoffeeSingleMenu title="Kawy" dishes={coffes} />}
        {menu == "cake" && (
          <CoffeeSingleMenu title="Desery" dishes={desserts} />
        )}
        {menu == "sand" && (
          <CoffeeSingleMenu title="Kanapki" dishes={sandiwches} />
        )}
      </div>
    </div>
  );
};
export default CoffeeMenu;
