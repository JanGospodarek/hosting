import Image from "next/image";
import { useEffect, useState } from "react";
type Props = {
  children: string | JSX.Element | JSX.Element[];
  bgPrimaryColor: string;
  bgSecondaryColor: string;
  image: any;
};

const SingleOffer = ({
  bgPrimaryColor,
  bgSecondaryColor,
  image,
  children,
}: Props) => {
  return (
    <div
      className="mx-24 mt-8   h-[700px] relative rounded-xl "
      style={{ backgroundColor: bgSecondaryColor, borderColor: bgPrimaryColor }}
    >
      <div
        className=" w-1/2 h-full absolute top-0 left-0 z-20 flex flex-col rounded-tl-xl rounded-bl-xl "
        style={{
          clipPath: "polygon(0 0, 64% 0, 100% 100%, 0% 100%)",
          backgroundColor: bgPrimaryColor,
        }}
      >
        {children}
      </div>
      <div className="absolute top-0 right-0 w-1/2 flex justify-center items-center h-full">
        <Image
          src={image}
          alt="tedst"
          width={300}
          className="  z-10 shadow-lg shadow-slate-950"
        />
      </div>
    </div>
  );
};
export default SingleOffer;
