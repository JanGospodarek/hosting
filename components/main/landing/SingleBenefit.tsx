import Lottie from "lottie-react";
import { Fade, Slide } from "react-awesome-reveal";

const SingleBenefit = (props: {
  title: string;
  body: string;
  placementClass?: string;
  lottieData: any;
  animationWidth: string;
}) => {
  const { title, body, placementClass, lottieData, animationWidth } = props;
  return (
    <div
      className={`sm:mx-16 lg:mx-0 lg:w-1/2  my-4  h-auto sm:h-56 ${
        placementClass ? placementClass : ""
      }`}
    >
      <Fade>
        <Slide direction="up">
          <div
            className={`flex flex-col md:flex-row  rounded-xl shadow-2xl text-center p-6  ${
              placementClass ? placementClass : ""
            }`}
          >
            <div className="flex flex-col my-auto">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-lg text-slate-600 mt-2">{body}</p>
            </div>
            <Lottie
              animationData={lottieData}
              loop={true}
              // style={{ width: animationWidth }}
              className="mx-auto w-48"
            />
          </div>
        </Slide>
      </Fade>
    </div>
  );
};
export default SingleBenefit;
