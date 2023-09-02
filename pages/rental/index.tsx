import RentalAboutUs from "../../components/rental/RentalHowItWorks";
import RentalNavbar from "../../components/rental/RentalNavbar";
import RentalSlider from "../../components/rental/RentalSlider";
import RentalOffers from "../../components/rental/RentalOffers";
import RentalContact from "../../components/rental/RentalContact";
const RentalPage = () => {
  return (
    <div data-theme="black" className="font-rental">
      <div className="flex flex-col h-screen">
        <RentalNavbar />
        <RentalSlider />
      </div>
      <RentalAboutUs />
      <RentalOffers />

      <RentalContact />
    </div>
  );
};
export default RentalPage;