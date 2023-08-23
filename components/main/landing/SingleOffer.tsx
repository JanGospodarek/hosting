import Image from "next/image";
import { Link } from "react-scroll";
type Props = {
  children: string | JSX.Element | JSX.Element[];
  bgPrimaryColor: string;
  bgSecondaryColor: string;
  image: any;
  width: string;
};

const SingleOffer = ({
  bgPrimaryColor,
  bgSecondaryColor,
  image,
  children,
  width,
}: Props) => {
  return (
    <>
      {/* Smartphones */}
      <div
        className="block sm:hidden mx-8 mt-8 rounded-xl  p-4 text-center "
        style={{
          backgroundColor: bgPrimaryColor,
        }}
      >
        {children}
        <Link
          to="contact"
          smooth={true}
          offset={-100}
          duration={1500}
          className="btn btn-neutral mt-4 "
        >
          Zamów wycenę
        </Link>
      </div>
      {/* Larger device */}
      <div
        className="hidden sm:block mx-8 lg:mx-24 mt-8   h-[700px] relative rounded-xl "
        style={{
          backgroundColor: bgSecondaryColor,
          borderColor: bgPrimaryColor,
        }}
      >
        <div
          className=" w-2/3 h-full absolute top-0 left-0 z-20 rounded-tl-xl rounded-bl-xl p-6"
          style={{
            clipPath: "polygon(0 0, 64% 0, 100% 100%, 0% 100%)",
            backgroundColor: bgPrimaryColor,
          }}
        >
          {children}
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={1500}
            className="btn btn-neutral mt-4 "
          >
            Zamów wycenę
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-1/2 flex justify-center items-center h-full p-4">
          <Image
            src={image}
            alt="tedst"
            style={{ width }}
            className="  z-10 shadow-lg shadow-slate-950"
          />
        </div>
      </div>
    </>
  );
};
export default SingleOffer;
