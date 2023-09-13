import CoffeePreview from "../../../public/img/coffe_preview.png";
import RentalPreview from "../../../public/img/rental.png";
import SingleExampleProject from "./SingleExampleProject";
const ExampleProjects = () => {
  return (
    <div className="flex flex-col mt-36 mx-16  " id="example_projects">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Przykładowe projekty
      </h2>
      <div className="flex justify-around flex-wrap ">
        <SingleExampleProject
          websiteUrl="https://wypozyczalnia.com"
          hrefUrl="/rental"
          image={RentalPreview}
        >
          <h1 className="text-2xl font-semibold">Wypożyczalnia</h1>
          <p className="my-2">
            Interfejs zgodny z najnowszymi trendami, który dostarcza
            potencjalnym klientom informacji w bardzo prosty i przystępny
            sposób. Witryna może być rozszerzona o takie elementy jak: kolejne
            podstrony, dedykowany system rezerwacji, mapkę z lokalizacją,
            obsługę motywów przeglądarki czy obsługę innych języków.
          </p>
          <ul className="list-disc mx-6 ">
            <li>Multi page</li>
            <li>Przełączanie między podstronami bez przeładowania</li>
            <li>Responsywna na wszystkich urządzeniach</li>
            <li>Formularz kontaktowy</li>
            <li>Slider</li>
            <li>Animowane kroki</li>
            <li>Nowoczesny interfejs</li>
          </ul>
        </SingleExampleProject>
        <SingleExampleProject
          websiteUrl="https://kawiarnia.com"
          hrefUrl="/coffee"
          image={CoffeePreview}
        >
          <h1 className="text-2xl font-semibold">Kawiarnia</h1>
          <p className="my-2">
            Bardzo prosty, przejrzysty interfejs, który jest elegancki i
            praktyczny. Strona idealnie nadaje się dla gastronomii. Witryna może
            być rozszerzona o takie elementy jak: podstrony, mapkę z
            lokalizacją,obsługę motywów przeglądarki, obsługę innych języków,
            odnośnik do systemu zamawiania zewnętrznego partnera.
          </p>
          <ul className="list-disc mx-6 ">
            <li>One page</li>
            <li>Responsywna na wszystkich urządzeniach</li>
            <li>Formularz kontaktowy</li>
            <li>Nowoczesny interfejs</li>
          </ul>
        </SingleExampleProject>
      </div>
    </div>
  );
};
export default ExampleProjects;
