import Image from "next/image";
import Link from "next/link";
type Props = {
  children: string | JSX.Element | JSX.Element[];

  image: any;
};
const RentalSingleOffer = (props: Props) => {
  return (
    <div className="hidden sm:block mx-8 lg:mx-24 mt-8   h-[600px] relative ">
      <div
        className=" w-2/3 h-full absolute top-0 left-0 z-20  p-6 bg-black bg-opacity-80"
        style={{
          clipPath: "polygon(0 0, 64% 0, 100% 100%, 0% 100%)",
        }}
      >
        {props.children}
        <Link href="rental/oferta" className="btn btn-outline mt-4 uppercase ">
          Zobacz ofertę
        </Link>
      </div>
      <Image
        src={props.image}
        alt="tedst"
        className="absolute top-0 left-0 h-full z-10 object-cover"
      />
    </div>
  );
};
export default RentalSingleOffer;
