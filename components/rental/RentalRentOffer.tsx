import Link from "next/link";
import { Car } from "../../interfaces/types";

const RentalRentOffer = (props: { car: Car }) => {
  const { model, brand, parameters, price, imageUrl, carId } = props.car;
  return (
    <Link href={`/rental/oferta/${carId}`}>
      <div className="flex m-4 flex-col sm:flex-row my-8">
        <img src={imageUrl} alt="test" className="object-cover w-[400px]" />
        <div className="flex flex-col mx-3 w-full sm:w-1/3 items-center">
          <p className="italic uppercase font-semibold text-4xl text-white mt-4 sm:mt-0">
            {brand}
          </p>
          <p className=" italic text-lg ">{model}</p>
          <ul className="text-md text-gray-600 my-2">
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
