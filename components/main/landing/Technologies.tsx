import SingleTechnologie from "./SingleTechnologie";

const Technologies = () => {
  return (
    <div className="grid sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 mt-24 lg:mx-12 xl:mx-24 justify-center items-center gap-3">
      <SingleTechnologie
        title="Pozycjonowanie"
        body="Dobra pozycja w wynikach wyszukiwania w Google"
      />
      <SingleTechnologie
        title="Optymalizacja"
        body="Płynne i szybkie działanie bez częstego ładowania"
      />
      <SingleTechnologie
        title="RWD"
        body="Świetny wygląd nie tylko na laptopie, ale i na telefonie"
      />
      <SingleTechnologie
        title="Najnowszy interfejs"
        body="Podązanie za aktualnymi trendami designu witryn internetowych"
      />
    </div>
  );
};
export default Technologies;
