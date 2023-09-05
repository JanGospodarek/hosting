import RentalSingleOffer from "./RentalSingleOffer";
import sport from "../../public/img/sport.webp";
import luksus from "../../public/img/luks.webp";
const RentalOffers = () => {
  return (
    <div className=" flex flex-col ">
      <RentalSingleOffer image={sport}>
        <h2 className="text-4xl  lg:text-5xl font-bold m-8 text-white uppercase italic">
          Sport
        </h2>

        <p className="text-lg lg:text-xl text-grey-400 mt-4 sm:w-1/2 ">
          Wybierz samochód z floty najszybszych marek na świecie takich jak
          Lamborghini, Ferrari czy Aston Martin. Świetna propozycja dla fanów
          motoryzacji poszukujących emocji i przyjemności z jazdy. Wypozyczenie
          samochodu sportowego to takze świetna okazja na prezent!
        </p>
      </RentalSingleOffer>
      <RentalSingleOffer image={luksus}>
        <h2 className="text-4xl  lg:text-5xl font-bold m-8 text-white uppercase italic">
          Luksus
        </h2>

        <p className="text-lg lg:text-xl text-grey-400 mt-4 sm:w-1/2  ">
          Dobra propozycja dla osób kierujących sie rozumem w wyborze auta,
          poszukujących komfortu podczas przemierzania setek kilometrów. Nasze
          auta zapewniają najnowsze technologie, udogodnienia i piękne wnętrza.
        </p>
      </RentalSingleOffer>
    </div>
  );
};
export default RentalOffers;
