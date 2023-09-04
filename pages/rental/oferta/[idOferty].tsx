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
  const [ddata, setData] = useState<null | Car>(null);
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
      <div className="min-h-screen">
        {loading && (
          <div className="w-full h-full flex justify-center items-center text-3xl">
            Loading...
          </div>
        )}
        {!loading && !error && ddata && (
          <div className="mx-24">
            <img
              src={ddata.imageUrl}
              alt="test"
              width={400}
              className="object-cover"
            />
          </div>
        )}
      </div>
      <RentalFooter />
    </div>
  );
};
export default RentalPage;
