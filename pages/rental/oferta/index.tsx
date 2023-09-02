import RentalNavbar from "../../../components/rental/RentalNavbar";
import RentalRentOffer from "../../../components/rental/RentalRentOffer";
import { Cars } from "../../../interfaces/types";
const RentalPage = () => {
  const cars: Cars = [
    {
      brand: "BMW",
      model: "330i 2.0 2022",
      parameters: [
        "moc: 293 KM",
        "przyspieszenie do 100 kmh: 5,3s",
        "liczba miejsc: 5",
        "pojemność bagaznika: 400L",
      ],
      price: 599,
      imageUrl: "/img/330i.webp",
      carId: (Math.random() * Date.now()).toFixed(0),
      type: "sport",
    },

    {
      brand: "BMW",
      model: "M5 4.2 2020",
      parameters: [
        "moc: 490 KM",
        "przyspieszenie do 100 kmh: 4,3s",
        "liczba miejsc: 5",
        "pojemność bagaznika: 590L",
      ],
      price: 799,
      imageUrl: "/img/m5.webp",
      carId: (Math.random() * Date.now()).toFixed(0),
      type: "sport",
    },
    {
      brand: "Alfa Romeo",
      model: "Giulia Quadrifoglio 2.9 2018",
      parameters: [
        "moc: 490 KM",
        "przyspieszenie do 100 kmh: 4,1s",
        "liczba miejsc: 5",
        "pojemność bagaznika: 490L",
      ],
      price: 859,
      imageUrl: "/img/alfa.jpeg",
      carId: (Math.random() * Date.now()).toFixed(0),
      type: "sport",
    },
    {
      brand: "Ford",
      model: "Mustang 5.0 2018",
      parameters: [
        "moc: 330 KM",
        "przyspieszenie do 100 kmh: 5,5s",
        "liczba miejsc: 5",
        "pojemność bagaznika: 420L",
      ],
      price: 699,
      imageUrl: "/img/mustang.jpeg",
      carId: (Math.random() * Date.now()).toFixed(0),
      type: "sport",
    },
    {
      brand: "Mercedes-Benz",
      model: "S63 AMG 6.2 2020",
      parameters: [
        "moc: 560 KM",
        "przyspieszenie do 100 kmh: 4,0s",
        "liczba miejsc: 4",
        "pojemność bagaznika: 570L",
      ],
      price: 799,
      imageUrl: "/img/s63.jpeg",
      carId: (Math.random() * Date.now()).toFixed(0),
      type: "luxury",
    },
    {
      brand: "Bentley",
      model: "Continental GT 2018",
      parameters: [
        "moc: 480 KM",
        "przyspieszenie do 100 kmh: 4,2s",
        "liczba miejsc: 4",
        "pojemność bagaznika: 390L",
      ],
      price: 899,
      imageUrl: "/img/cont.jpeg",
      carId: (Math.random() * Date.now()).toFixed(0),
      type: "luxury",
    },
    {
      brand: "Bentley",
      model: "Bentayga 2021",
      parameters: [
        "moc: 600 KM",
        "przyspieszenie do 100 kmh: 4,5s",
        "liczba miejsc: 4",
        "pojemność bagaznika: 690L",
      ],
      price: 999,
      imageUrl: "/img/bentayga.webp",
      carId: (Math.random() * Date.now()).toFixed(0),
      type: "luxury",
    },
  ];
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
