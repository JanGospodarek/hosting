import Image from "next/image";
import Pyszne from "../../public/img/pyszne.png";
import UberEats from "../../public/img/uber.webp";
import Glovo from "../../public/img/glovo.png";
import Bolt from "../../public/img/bolt.png";
import CoffeeSinglePartner from "./CoffeeSinglePartner";
const CoffePartners = () => {
  return (
    <div className="bg-white z-20 p-16 w-full ">
      <div className="w-full h-full  flex flex-col items-center ">
        <p className="text-3xl mb-16 text-center">Zamów u naszych partnerów</p>
        <div className="flex flex-wrap justify-around gap-2 w-full ">
          <CoffeeSinglePartner alt="Pyszne.pl" image={Pyszne} />
          <CoffeeSinglePartner alt="Uber Eats" image={UberEats} />
          <CoffeeSinglePartner alt="Bolt Food" image={Bolt} />
          <CoffeeSinglePartner alt="Glovo" image={Glovo} />
        </div>
        <a
          href="tel:+48123123123"
          className="text-5xl mt-16 text-gray-600 text-center"
        >
          +48 123 123 123
        </a>
      </div>
    </div>
  );
};
export default CoffePartners;
