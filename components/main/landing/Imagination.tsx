import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFountainPreset } from "tsparticles-preset-fountain";

const Imagination = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFountainPreset(engine);
  }, []);
  const options = {
    preset: "fountain",
    fullScreen: { enable: false, zIndex: 0 },
  };

  return (
    <div className="h-screen bg-base-300 flex items-center justify-center relative">
      <div className="absolute w-full h-full  ">
        <Particles
          options={options}
          init={particlesInit}
          className="absolute w-full h-full  "
        />
        <div className="flex flex-col items-center absolute left-0 right-0 mt-64 m-auto z-10">
          <p className="text-6xl font-semibold text-center">
            Puść wodzę fantazji
          </p>
          <p className="text-2xl mt-2 text-slate-600">
            A my przeniesiemy ją do internetu
          </p>
          <button className="btn btn-outline mt-40 btn-lg">Oferta</button>
        </div>
      </div>
    </div>
  );
};
export default Imagination;
