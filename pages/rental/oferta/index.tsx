import { useEffect, useState } from "react";
import RentalNavbar from "../../../components/rental/RentalNavbar";
import RentalRentOffer from "../../../components/rental/RentalRentOffer";
import { Cars } from "../../../interfaces/types";
const RentalPage = () => {
  const [cars, setCars] = useState<Cars | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      try {
        const res = (await fetch("/api/readJson", {
          method: "GET",
        })) as Response;
        const data = await res.json();
        setLoading(false);
        console.log(data);

        setCars(data.cars);

        if (!res.ok) throw Error("Błąd pobierania danych");
        else setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetcher();
  }, []);
  return (
    <div data-theme="black" className="font-rental ">
      <RentalNavbar />
      <div className="w-full">
        <div className="flex w-full gap-2 px-24 py-8">
          <button className="btn btn-outline rounded-xl btn-sm uppercase">
            wszystkie
          </button>
          <button className="btn btn-outline rounded-xl btn-sm uppercase">
            sport
          </button>
          <button className="btn btn-outline rounded-xl btn-sm uppercase">
            luksus
          </button>
        </div>
        <div className="">
          {cars.map((car) => (
            <RentalRentOffer car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RentalPage;
