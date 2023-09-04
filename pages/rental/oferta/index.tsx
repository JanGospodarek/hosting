import { useEffect, useState } from "react";
import RentalNavbar from "../../../components/rental/RentalNavbar";
import RentalRentOffer from "../../../components/rental/RentalRentOffer";
import { Car, Cars } from "../../../interfaces/types";
import { UseFetch } from "../../../components/hooks/UseFetch";
import RentalFooter from "../../../components/rental/RentalFooter";
const RentalPage = () => {
  const [cars, setCars] = useState<Cars | []>([]);
  const [allCars, setAllCars] = useState<Cars | []>([]);

  const { loading, data, error } = UseFetch({
    url: "/api/readJson",
    method: "GET",
  });

  useEffect(() => {
    if (data) {
      setAllCars(data.cars);
      setCars(data.cars);
    }
  }, [data]);

  const filter = (type: "sport" | "luxury" | "all") => {
    if (type == "all") setCars(allCars);
    else setCars(allCars.filter((el: Car) => el.type == type));
  };
  return (
    <div data-theme="black" className="font-rental ">
      <RentalNavbar />
      <div className="w-full">
        <div className="flex w-full gap-2 px-24 py-8">
          <button
            className="btn btn-outline rounded-xl btn-sm uppercase"
            onClick={() => filter("all")}
          >
            wszystkie
          </button>
          <button
            className="btn btn-outline rounded-xl btn-sm uppercase"
            onClick={() => filter("sport")}
          >
            sport
          </button>
          <button
            className="btn btn-outline rounded-xl btn-sm uppercase"
            onClick={() => filter("luxury")}
          >
            luksus
          </button>
        </div>
        <div className="min-h-screen ">
          {loading && (
            <div className="w-full h-full flex justify-center items-center text-3xl">
              Loading...
            </div>
          )}
          {!loading &&
            !error &&
            cars.map((car: Car) => (
              <RentalRentOffer car={car} key={car.carId} />
            ))}
        </div>
      </div>
      <RentalFooter />
    </div>
  );
};
export default RentalPage;
