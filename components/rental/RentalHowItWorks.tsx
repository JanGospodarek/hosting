import { Stepper, Step, Button } from "@material-tailwind/react";
import React from "react";
import RentalStep from "./RentalHowItWorksStep";
const RentalAboutUs = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div className=" w-full flex flex-col pb-10 pt-16">
      <h1 className="text-3xl italic font-bold uppercase mx-auto text-white">
        Jak to działa?
      </h1>
      <div>
        <div className="w-full py-4 px-8 md:px-44 lg:px-64">
          {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-ignore */}
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-ignore */}
            <Step onClick={() => setActiveStep(0)}>1</Step>
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-ignore */}
            <Step onClick={() => setActiveStep(1)}>2</Step>
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-ignore */}
            <Step onClick={() => setActiveStep(2)}>3</Step>
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment
 @ts-ignore */}
            <Step onClick={() => setActiveStep(3)}>4</Step>
          </Stepper>

          {activeStep == 0 && (
            <RentalStep
              title="Zamów samochód"
              body="Wybierz samochód jaki cię interesuje. Kliknij Zamów. Wypełnij formularz i czekaj na naszą odpowiedź!  Możesz również napisać do nas maila lub zadzwonić. Zwykle odpwiadamy w ciągu 12 godzin!"
            />
          )}
          {activeStep == 1 && (
            <RentalStep
              title="Wypełnij umowę"
              body="Po tym jak skontaktujemy się z Tobą, będziesz musiał wypełnić dokumenty wynajmu w naszej siedzibie. Nasz specjalista przeprowadzi Cię przez cały proces i odpowie na wszystkie pytania."
            />
          )}
          {activeStep == 2 && (
            <RentalStep
              title="Ciesz się jazdą"
              body="Nasz samochód zawiezie Cię szybko i komfortowo wszędzie gdzie tylko chcesz. Zapewnimy Ci całodobowe wsparcie, w tym pomoc drogową, dostępną w całej Polsce."
            />
          )}
          {activeStep == 3 && (
            <div className="mt-4 flex flex-col text-center">
              <button className="btn btn-outline btn-success btn-lg uppercase italic font-semibold mx-auto my-16">
                kontakt
              </button>
            </div>
          )}
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlePrev}
              disabled={isFirstStep}
              className="btn btn-outline uppercase"
            >
              Poprzedni
            </button>
            <button
              onClick={handleNext}
              disabled={isLastStep}
              className="btn btn-outline uppercase"
            >
              Następny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalAboutUs;
