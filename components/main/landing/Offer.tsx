import SingleOffer from "./SingleOffer";
import StockPage from "../../../public/img/stock-page.jpeg";
const Offer = () => {
  return (
    <div id="offer" className="offers flex flex-col ">
      <SingleOffer
        image={StockPage}
        bgPrimaryColor="#4f46e5" //600
        bgSecondaryColor="#312e81" //900
      >
        <p className="text-5xl font-bold ml-16 mt-8 text-white">One-page</p>
      </SingleOffer>
      <SingleOffer
        image={StockPage}
        bgPrimaryColor="#e11d48"
        bgSecondaryColor="#881337"
      >
        <p className="text-5xl font-bold ml-16 mt-8 text-white">Multi-page</p>
      </SingleOffer>
      <SingleOffer
        image={StockPage}
        bgPrimaryColor="#65a30d"
        bgSecondaryColor="#365314"
      >
        <p className="text-5xl font-bold ml-16 mt-8 text-white">Admin panel</p>
      </SingleOffer>
    </div>
  );
};
export default Offer;
// Strony one-page
// Strony multi-page
// Personalizowane admin panele do zarzadzania trescia
// Pełna obsługa strony (pierwsze 3msce za darmo, potem 200 zł miesięcznie)
