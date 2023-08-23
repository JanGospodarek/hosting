import CoffeeHero from "../components/coffe shop/CoffeeHero";
import CoffeeBenefits from "../components/coffe shop/CoffeeBenefits";
import CoffeeAbout from "../components/coffe shop/CoffeeAbout";
import CoffeeFooter from "../components/coffe shop/CoffeeFooter";
import Image from "next/image";
import bg from "../public/img/coffeeHero.jpeg";
import CoffeeMenu from "../components/coffe shop/CoffeeMenu";
const CoffeePage = () => {
  return (
    <>
      <CoffeeHero></CoffeeHero>

      <CoffeeBenefits></CoffeeBenefits>
      <CoffeeMenu></CoffeeMenu>
      <CoffeeAbout></CoffeeAbout>
      <CoffeeFooter></CoffeeFooter>
    </>
  );
};
export default CoffeePage;
