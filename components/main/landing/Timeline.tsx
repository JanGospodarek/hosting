import arrowDown from "../../../public/img/arrow-down.svg";
import Image from "next/image";
const Timeline = () => {
  return (
    <div className="w-screen bg-[#1b2025]" id="timeline">
      <div className="timeline scale-[88%] sm:scale-100">
        <div className="outer">
          <div className="card ">
            <div className="info flex flex-col">
              <h3 className="title  text-4xl sm:text-6xl pt-36 text-white">
                Skontaktuj się z nami
              </h3>
              <p className=" w-96 p-4 text-gray-400 text-lg sm:text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                est quia dolore. Fugiat quaerat nemo perferendis at aspernatur
                error ducimus delectus repellat nam amet non, minus mollitia
                asperiores commodi cupiditate.
              </p>
              <button className="btn btn-secondary btn-circle btn-outline mb-36 mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="info flex flex-col items-end ">
              <h3 className="title text-4xl sm:text-6xl pt-36 text-white">
                Skontaktuj się z nami
              </h3>
              <p className="pb-44 w-96 py-4 text-gray-400 text-lg sm:text-xl ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                est quia dolore. Fugiat quaerat nemo perferendis at aspernatur
                error ducimus delectus repellat nam amet non, minus mollitia
                asperiores commodi cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
