import arrowDown from "../../../public/img/arrow-down.svg";
import Image from "next/image";
import TimelineStep from "./TimelineStep";
const Timeline = () => {
  return (
    // bg-[#1b2025]
    <div className="w-screen  bg-[url('/img/tlo.png')]" id="timeline">
      <div className="timeline scale-[88%] sm:scale-100">
        <div className="outer">
          <TimelineStep
            title="Skontaktuj się z nami"
            body="loremmmmmmkmkmkmkmkmkmk"
            id="start"
            nextStep="idea"
            right={false}
          />
          <TimelineStep
            title="Przedstaw swój pomysł"
            body="loremmmmmmkmkmkmkmkmkmk"
            id="idea"
            nextStep="going"
            right={true}
          />
          <TimelineStep
            title="Realizacja projektu"
            body="loremmmmmmkmkmkmkmkmkmk"
            id="going"
            nextStep="finish"
            right={false}
          />
          <TimelineStep
            title="Ciesz się swoją stroną!"
            body="loremmmmmmkmkmkmkmkmkmk"
            id="finish"
            right={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Timeline;
