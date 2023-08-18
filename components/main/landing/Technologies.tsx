import SingleTechnologie from "./SingleTechnologie";

const Technologies = () => {
  return (
    <div className="flex mt-24 mx-24 justify-between">
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
