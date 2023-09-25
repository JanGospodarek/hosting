import Image from "next/image";
import { Link } from "react-scroll";
type Props = {
  children: string | JSX.Element | JSX.Element[];
  gradientStr: string;
  image: any;
  width: string;
};

const SingleOffer = ({ gradientStr, image, children, width }: Props) => {
  return (
    <>
      {/* Smartphones */}
      <div
        className={`block sm:hidden ${gradientStr} p-2 mx-8 lg:mx-24 mt-8 rounded-xl`}
      >
        <div className="  rounded-xl  p-2 text-center bg-neutral">
          {children}
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={1500}
            className={`btn ${gradientStr} border-0 hover:scale-105 duration-150 mt-4 text-white font-semibold mb-4`}
          >
            Zamów wycenę
          </Link>
        </div>
      </div>
      <div
        className={`hidden sm:block ${gradientStr} p-2 mx-8 lg:mx-24 mt-8 rounded-xl`}
      >
        {/* Larger device */}
        <div className="  relative h-[700px] rounded-xl bg-gray-900 ">
          <div
            className=" w-2/3 h-full absolute top-0 left-0 z-20 rounded-tl-xl rounded-bl-xl p-6 bg-neutral "
            style={{
              clipPath: "polygon(0 0, 64% 0, 100% 100%, 0% 100%)",
            }}
          >
            {children}
            <Link
              to="contact"
              smooth={true}
              offset={-100}
              duration={1500}
              className={`btn ${gradientStr} border-0 hover:scale-105 duration-150 mt-4 text-white font-semibold `}
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
      </div>
    </>
  );
};
export default SingleOffer;
