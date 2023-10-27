import arrowDown from "../../../public/img/arrow-down.svg";
import Image from "next/image";
import TimelineStep from "./TimelineStep";
const Timeline = () => {
  return (
    // bg-[#1b2025]
    // bg-[url('/img/tlo.png')]
    <div className="w-full   bg-[url('/img/tlo.png')]" id="timeline">
      <div className="timeline scale-[92%] sm:scale-100">
        <div className="outer">
          <TimelineStep
            title="Skontaktuj się z nami"
            body="Napisz do nas maila, zadzwoń lub wyślij formularz. Podczas rozmowy omówimy wszystkie szczegóły i odpowiemy na wszystkie pytania!"
            id="start"
            nextStep="idea"
            right={false}
          />
          <TimelineStep
            title="Przedstaw swój pomysł"
            body="Przedstaw w rozmowie z programistą co musi znajdować się na stronie i opisz jej tematyke. Może masz już wizualizacje w głowie?"
            id="idea"
            nextStep="going"
            right={true}
          />
          <TimelineStep
            title="Realizacja projektu"
            body="Realizacja projektu trwa zwykle od 7 do 14 dni. W tym czasie będziemy z się z tobą kontaktować by ustalić szczegóły Twojej Strony i przedstawiać Ci aktualne postępy prac."
            id="going"
            nextStep="finish"
            right={false}
          />
          <TimelineStep
            title="Ciesz się swoją stroną!"
            body="Po zaakceptowaniu projektu poglądowego (za który nic nie płacisz), będziesz mógł wykupić projekt strony. Pomożemy Ci z wyborem hostingu i obsługą strony na czas nieokreślony."
            id="finish"
            right={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Timeline;
