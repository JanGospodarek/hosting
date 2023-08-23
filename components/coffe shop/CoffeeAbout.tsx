import Image from "next/image";
import smile from "../../public/img/smiled.jpeg";
const CoffeeAbout = () => {
  return (
    <div
      id="about"
      className="w-full bg-white z-20 p-24 flex items-center flex-col-reverse lg:flex-row"
    >
      <Image
        src={smile}
        alt="dd"
        className="object-contain  md:w-[500px]"
      ></Image>
      <div className=" w-full flex flex-col items-center m-4">
        <div className="relative flex py-5 items-center w-64">
          <div className="flex-grow border-t-2 border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xl">
            Trochę o nas...
          </span>
          <div className="flex-grow border-t-2 border-gray-400"></div>
        </div>
        <div className="text-lg px-4 sm:px-28 text-center">
          Kawiarnię prowadzimy w dwójkę od 2012 roku. Od zawsze oboje mażyliśmy
          o zostaniu baristami. Po paru latach dopracowywania całego procesu
          parzenia Twojej ulubionej kawy możesz nacieszyć się najlepszym smakiem
          w Krakowie pochodzącym z ziaren prosto z Kolumbii.
          <div className="text-gray-400 text-right mt-3">Alicja i Piotr</div>
        </div>
      </div>
    </div>
  );
};
export default CoffeeAbout;
