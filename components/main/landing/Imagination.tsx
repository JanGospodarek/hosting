import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFountainPreset } from "tsparticles-preset-fountain";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import ImaginationLottie from "../../../public/lottie/imagination.json";
const Imagination = () => {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFountainPreset(engine);
  // }, []);
  // const options = {
  //   preset: "fountain",
  //   fullScreen: { enable: false, zIndex: 0 },
  // };
  return (
    <div className="h-screen  flex flex-col justify-center items-center  ">
      {/* <Particles
          options={options}
          init={particlesInit}
          className="absolute w-full h-full "
        /> */}
      {/* <Particles
          options={options}
          init={particlesInit}
          className="absolute w-full h-full hidden sm:block "
        /> */}
      {/* <Image
          src={Bg}
          alt="bg"
          className="absolute h-[800px] block sm:hidden "
        ></Image> */}

      <div className="flex flex-col items-center  mt-24  ">
        <h2 className="text-6xl font-semibold text-center">
          Puść wodze fantazji
        </h2>
        <h3 className="text-2xl mt-2 text-slate-600 text-center">
          A my przeniesiemy ją do internetu
        </h3>
      </div>
      <Lottie
        animationData={ImaginationLottie}
        loop={true}
        className="  h-[400px] xl:h-[500px] "
      ></Lottie>
    </div>
  );
};
export default Imagination;
