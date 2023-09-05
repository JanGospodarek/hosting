import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo_rental.png";
const RentalNavbar = () => {
  return (
    <div className="w-full  flex items-center p-6 justify-between">
      <div className="">
        <Link href="/rental">
          <Image src={logo} alt="logo" className="w-[200px] sm:w-[300px]" />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row">
        <Link
          href="/rental/oferta"
          className="btn btn-ghost btn-lg uppercase italic"
        >
          Oferta
        </Link>
        <Link
          href="/rental/kontakt "
          className="btn btn-ghost btn-lg uppercase italic"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
};
export default RentalNavbar;
