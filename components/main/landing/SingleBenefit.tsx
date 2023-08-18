import Lottie from "lottie-react";
import Fade from "react-reveal/Fade";

const SingleBenefit = (props: {
  title: string;
  body: string;
  placementClass?: string;
  lottieData: any;
  animationWidth: string;
}) => {
  const { title, body, placementClass, lottieData, animationWidth } = props;
  return (
    <Fade bottom>
      <div
        className={`flex sm:mx-16 lg:mx-0 lg:w-1/2  my-4 rounded-xl shadow-2xl text-center p-6 h-64 ${
          placementClass ? placementClass : ""
        }`}
      >
        <div className="flex flex-col mt-6">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-lg text-slate-600">{body}</p>
        </div>
        <Lottie
          animationData={lottieData}
          loop={true}
          // style={{ width: animationWidth }}
          className="mx-auto"
        />
      </div>
    </Fade>
  );
};
export default SingleBenefit;
