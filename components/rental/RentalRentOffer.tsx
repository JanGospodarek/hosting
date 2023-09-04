import Link from "next/link";
import { Car } from "../../interfaces/types";

const RentalRentOffer = (props: { car: Car }) => {
  const { model, brand, parameters, price, imageUrl, carId } = props.car;
  return (
    <Link href={`/rental/oferta/${carId}`}>
      <div className="flex m-4 ">
        <img src={imageUrl} alt="test" width={400} className="object-cover" />
        <div className="flex flex-col mx-3 w-1/3">
          <p className="italic uppercase font-semibold text-4xl text-white">
            {brand}
          </p>
          <p className=" italic text-lg">{model}</p>
          <ul className="text-md text-gray-600">
            {parameters.map((parameter) => (
              <li key={Math.random()}>{parameter}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-3xl font-bold italic">{price} / DZIEŃ</p>
        </div>
      </div>
    </Link>
  );
};
export default RentalRentOffer;
