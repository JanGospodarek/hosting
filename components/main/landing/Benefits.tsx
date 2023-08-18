import SingleBenefit from "./SingleBenefit";
import CarLottie from "../../../public/lottie/car.json";
import PiggyLottie from "../../../public/lottie/piggy.json";
import IndividualLottie from "../../../public/lottie/individual.json";
const Benefits = () => {
  return (
    <div className="flex flex-col mt-16 mx-36 items-start ">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Co nas charakteryzuje?
      </h2>
      <SingleBenefit
        title="Indywidualne podejście"
        body="Do kazdego zlecenia podchodzimy jak do własnego produktu" // TODO: zmienić ten opis
        lottieData={IndividualLottie}
        animationWidth="300px"
      />
      <SingleBenefit
        title="Szybki czas realizacji"
        body="Stworzenie witryny internetowej zajmuje nam średnio 14 dni"
        placementClass="self-end"
        lottieData={CarLottie}
        animationWidth="300px"
      />
      <SingleBenefit
        title="Najnizsza cena na rynku"
        body="Oferujemy realizacje od A do Z w cenie od 999 zł"
        lottieData={PiggyLottie}
        animationWidth="300px"
      />
    </div>
  );
};
export default Benefits;
