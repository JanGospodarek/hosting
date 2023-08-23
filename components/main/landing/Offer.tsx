import SingleOffer from "./SingleOffer";
import StockPage from "../../../public/img/stock-page.webp";
const Offer = () => {
  return (
    <div id="offer" className="offers flex flex-col ">
      <SingleOffer
        image={StockPage}
        bgPrimaryColor="#4f46e5" //600
        bgSecondaryColor="#312e81" //900
      >
        <p className="text-4xl  lg:text-5xl font-bold m-8 text-white">
          OnePage
        </p>
        <p className="text-2xl lg:text-3xl text-white sm:w-8/12">
          Stanowi świetną wizytówkę dla Twojej firmy.
        </p>
        <p className="text-xl lg:text-2xl text-white mt-4 sm:w-9/12 ">
          Witryna bez dodatkowych podstron zapewni wysoką przejżystość treści, z
          którą potencjalni klienci będą mogli się zapoznać wygodnie przewijając
          stronę.
        </p>
      </SingleOffer>
      <SingleOffer
        image={StockPage}
        bgPrimaryColor="#e11d48"
        bgSecondaryColor="#881337"
      >
        <p className="text-4xl lg:text-5xl font-bold m-8 text-white">
          MultiPage
        </p>
        <p className="text-2xl lg:text-3xl text-white sm:w-8/12">
          Tworzy profesjonalny wizerunek jednocześnie zawierając wiele
          informacji
        </p>
        <p className="text-xl lg:text-2xl text-white mt-4 sm:w-9/12 ">
          Witryna zawierająca podstrony pozwoli klientom na lepsze zapoznanie
          się z ofertą Twojego biznesu. Strona spełni swoją rolę zarówno w
          małych jak i duzych firmach.
        </p>
      </SingleOffer>
      <SingleOffer
        image={StockPage}
        bgPrimaryColor="#65a30d"
        bgSecondaryColor="#365314"
      >
        <p className="text-4xl lg:text-5xl font-bold m-8 text-white">
          Admin panel
        </p>
        <p className="text-2xl lg:text-3xl text-white sm:w-8/12">
          Weź sprawy w swoje ręce!
        </p>
        <p className="text-xl lg:text-2xl text-white mt-4 sm:w-9/12 ">
          Panel administratora dedykowany dla Twojej strony internetowej pozwoli
          Ci na własnoręczną edycje np. produktów czy menu restauracji.
        </p>
      </SingleOffer>
    </div>
  );
};
export default Offer;
// Strony one-page
// Strony multi-page
// Personalizowane admin panele do zarzadzania trescia
// Pełna obsługa strony (pierwsze 3msce za darmo, potem 200 zł miesięcznie)
