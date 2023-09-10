import SingleOffer from "./SingleOffer";
import AdminPreview from "../../../public/img/admin-panel.jpeg";
import OnePreview from "../../../public/img/one-page.png";
import MultiPreview from "../../../public/img/multi-page.jpeg";
const Offer = () => {
  return (
    <div id="offer" className="offers flex flex-col ">
      <SingleOffer
        image={OnePreview}
        bgPrimaryColor="#4f46e5" //600
        bgSecondaryColor="#312e81" //900
        width="200px"
      >
        <h2 className="text-4xl  lg:text-5xl font-bold m-8 text-white">
          OnePage
        </h2>
        <h3 className="text-2xl lg:text-3xl text-white sm:w-8/12">
          Stanowi świetną wizytówkę dla Twojej firmy.
        </h3>
        <p className="text-xl lg:text-2xl text-white mt-4 sm:w-9/12 ">
          Witryna bez dodatkowych podstron zapewni wysoką przejrzystość treści,
          przy jednoczesnym zachowaniu eleganckiego wyglądu, z którą potencjalni
          klienci będą mogli się zapoznać wygodnie przewijając stronę. Świetny
          wybór dla freelancerów potrzebujących wizytówki, restauracji czy
          kawiarni.
        </p>
      </SingleOffer>
      <SingleOffer
        image={MultiPreview}
        bgPrimaryColor="#e11d48"
        bgSecondaryColor="#881337"
        width="500px"
      >
        <h2 className="text-4xl lg:text-5xl font-bold m-8 text-white">
          MultiPage
        </h2>
        <h3 className="text-2xl lg:text-3xl text-white sm:w-8/12">
          Tworzy profesjonalny wizerunek jednocześnie zawierając wiele
          informacji
        </h3>
        <p className="text-xl lg:text-2xl text-white mt-4 sm:w-9/12 ">
          Witryna zawierająca podstrony pozwoli klientom na lepsze zapoznanie
          się z ofertą Twojego biznesu. Strona spełni swoją rolę zarówno w
          małych jak i duzych firmach. Wiele podstron umożliwia zastosowanie
          większej ilości elementów, z których korzysta potencjalny klient,
          takich jak dedykowany system rezerwacji lub dostosowanie danej oferty
          pod siebie.
        </p>
      </SingleOffer>
      <SingleOffer
        image={AdminPreview}
        bgPrimaryColor="#65a30d"
        bgSecondaryColor="#365314"
        width="500px"
      >
        <h2 className="text-4xl lg:text-5xl font-bold m-8 text-white">
          Admin panel
        </h2>
        <h3 className="text-2xl lg:text-3xl text-white sm:w-8/12">
          Weź sprawy w swoje ręce!
        </h3>
        <p className="text-xl lg:text-2xl text-white mt-4 sm:w-9/12 ">
          Panel administratora stworzony specjalnie dla Twojej strony
          internetowej pozwoli Ci na własnoręczną edycje np. produktów czy menu
          restauracji. Zapewni Ci to większą swobodę i szybkość w zmianie oferty
          znajdującej się na stronie. Możliwe jest takze powierzenie obslugi
          Twojej witryny naszemu zespołowi.
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
