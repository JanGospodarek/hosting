const CoffeeBenefits = () => {
  return (
    <div className="items-center flex flex-col md:flex-row py-16 bg-white">
      <div className="md:w-1/3 m-8 text-center">
        <p className="text-3xl mb-2">Wysoka jakość</p>
        <p className="text-xl">
          Wykorzystujemy ziarna pochodzące od najlepszych dostawców
        </p>
      </div>
      <div className="md:w-1/3 m-8 text-center">
        <p className="text-3xl mb-2">Niepowtarzalny klimat</p>
        <p className="text-xl">
          W każdym z naszych lokali panuje unikalna atmosfera
        </p>
      </div>
      <div className="md:w-1/3 m-8 text-center">
        <p className="text-3xl mb-2">Przystępne ceny</p>
        <p className="text-xl">
          Pilnujemy żeby twój portfel nie ucierpiał, a wspomnienia pozostały
        </p>
      </div>
    </div>
  );
};
export default CoffeeBenefits;
