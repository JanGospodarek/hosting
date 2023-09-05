"use client";

import { Carousel, button } from "@material-tailwind/react";
import Image from "next/image";
import porsche from "../../public/img/porsche.webp";
import bentley from "../../public/img/bentley.jpeg";
import bmw from "../../public/img/bmw.jpeg";
export default function CarouselCustomNavigation() {
  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-ignore */}
      <Carousel
        className="w-full h-full absolute top-0 left-0"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
        autoplayDelay={3500}
        nextArrow={() => <button className="hidden">k</button>}
        prevArrow={() => <button className="hidden">k</button>}
      >
        <div className="relative h-full w-full ">
          <div className=" h-full w-full z-20 bg-black bg-opacity-40 absolute top-0 left-0"></div>
          <Image
            src={porsche}
            alt="image 1"
            className="h-full w-full object-cover z-10 absolute top-0 left-0"
          />
        </div>
        <div className="relative h-full w-full ">
          <div className=" h-full w-full z-20 bg-black bg-opacity-40 absolute top-0 left-0"></div>
          <Image
            src={bentley}
            alt="image 2"
            className="h-full w-full object-cover z-10 absolute top-0 left-0"
          />
        </div>
        <div className="relative h-full w-full ">
          <div className=" h-full w-full z-20 bg-black bg-opacity-40 absolute top-0 left-0"></div>
          <Image
            src={bmw}
            alt="image 1"
            className="h-full w-full object-cover z-10 absolute top-0 left-0"
          />
        </div>
      </Carousel>
    </>
  );
}
