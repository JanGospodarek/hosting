import SingleBenefit from "./SingleBenefit";
import CarLottie from "../../../public/lottie/car.json";
import PiggyLottie from "../../../public/lottie/piggy.json";
import IndividualLottie from "../../../public/lottie/individual.json";
const Benefits = () => {
  return (
    <div className="flex flex-col mt-16 lg:mx-16 xl:mx-36 items-start ">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Co nas charakteryzuje?
      </h2>
      <SingleBenefit
        title="Darmowy projekt poglądowy"
        body="Projekt strony wykonujemy dla Ciebie ZA DARMO, jeśli go zaakceptujesz, to możesz go od nas wykupić w cenie od 599zł"
        lottieData={PiggyLottie}
        animationWidth="300px"
      />

      <SingleBenefit
        title="Szybki czas realizacji"
        body="Stworzenie strony internetowej zajmuje nam średnio 10 dni"
        placementClass="self-end"
        lottieData={CarLottie}
        animationWidth="300px"
      />
      <SingleBenefit
        title="Wsparcie"
        body="Pomożemy Ci z wyborem hostingu, konfiguracją i odpowiemy na wszystkie pytania" // TODO: zmienić ten opis
        lottieData={IndividualLottie}
        animationWidth="300px"
      />
    </div>
  );
};
export default Benefits;
