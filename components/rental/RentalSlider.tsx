import RentalSliderCarousel from "./RentalSliderCarousel";
const RentalSlider = () => {
  return (
    <div className="w-full h-full relative">
      <RentalSliderCarousel />
      <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center z-30">
        <div className="text-5xl font-semibold text-gray-400 italic">
          WYPOŻYCZ JUŻ OD 499 ZŁ
        </div>
      </div>
    </div>
  );
};
export default RentalSlider;
