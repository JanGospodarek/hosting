import Lottie from "lottie-react";

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
      className={`flex  w-1/2  my-4 rounded-xl shadow-2xl text-center p-6 ${
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
        style={{ width: animationWidth }}
        className="mx-auto"
      />
    </div>
  );
};
export default SingleBenefit;
