import { useRouter } from "next/router";
import RentalFooter from "../../../components/rental/RentalFooter";
import RentalNavbar from "../../../components/rental/RentalNavbar";
import { useEffect, useState } from "react";
import { UseFetch } from "../../../components/hooks/UseFetch";
import { Car } from "../../../interfaces/types";
import Image from "next/image";
const RentalPage = () => {
  const router = useRouter();
  const id = router.query.idOferty;
  const [info, setData] = useState<null | Car>(null);
  const { loading, data, error, fetcher } = UseFetch({
    url: "/api/readJson/" + id,
    method: "GET",
  });
  useEffect(() => {
    if (id) fetcher();
  }, [id]);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);
  return (
    <div data-theme="black" className="font-rental ">
      <RentalNavbar />
      <div className="min-h-screen pt-8">
        {loading && (
          <div className="w-full h-full flex justify-center items-center text-3xl">
            Loading...
          </div>
        )}
        {!loading && !error && info && (
          <div className="flex flex-col w-full">
            <div className="flex flex-col p-8 justify-center ">
              <p className="italic uppercase font-semibold text-6xl text-white text-center w-full">
                {info.brand}
              </p>
              <p className=" italic text-3xl w-full text-center">
                {info.model}
              </p>
              <div className="flex w-full flex-wrap justify-center">
                {info.parameters.map((parameter) => (
                  <div
                    key={Math.random()}
                    className="bg-base-300 p-4 m-2 text-white hover:scale-105 duration-100 cursor-pointer"
                  >
                    {parameter}
                  </div>
                ))}
              </div>
              <button className="btn mx-auto px-4 uppercase btn-outline mt-2">
                Zamów - {info.price}
              </button>
            </div>
            <div className="mx-6 md:mx-16 lg:mx-20 flex flex-col lg:grid  lg:grid-cols-2  ">
              <div>
                <img src={info.imageUrl} alt="test" className="object-cover" />
              </div>
              <div className="m-6 sm:m-16 flex justify-center items-center text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, aliquid voluptatem excepturi quaerat aliquam
                consequatur illo eaque quibusdam est debitis ipsum
                exercitationem consequuntur maiores aperiam autem nihil porro
                quae quam. Consequuntur libero earum, adipisci hic enim ut harum
                porro aliquid in debitis rerum quia odit, nostrum laboriosam
                facilis aliquam fugit doloremque? Animi molestias delectus
                doloremque itaque placeat fugiat quae officiis. Nisi illo
                blanditiis eveniet dolorem fuga voluptate temporibus nulla
                expedita dolores vel modi, asperiores ipsa pariatur repudiandae
                facere est eum a ipsum accusantium voluptatum rem provident
                possimus! Vel, culpa velit?
              </div>
            </div>
          </div>
        )}
      </div>
      <RentalFooter />
    </div>
  );
};
export default RentalPage;
