const RentalFooter = () => {
  return (
    <div
      id="footer"
      className="bg-black w-full p-8 flex  flex-wrap justify-center"
    >
      <div className="p-5">
        <p className="text-xl text-slate-400">Kontakt</p>
        <p className="my-2">
          <span className="text-gray-700">mail </span> kontakt@kawiarnia.pl
        </p>
        <p>
          <span className="text-gray-700">telefon </span>+48 123 123 123
        </p>
      </div>
      <div className="p-5">
        <p className="text-xl text-slate-400">Godziny otwarcia</p>
        <p className="text-gray-700">pn-pt</p>
        <p>11:00 - 21:00</p>
        <p className="text-gray-700">sb-nd</p>
        <p>13:00 - 23:00</p>
      </div>
      <div className="p-5">
        <p className="text-xl text-slate-400">Adres</p>
        <p>ul. Jana Pawła II, 37 </p>
      </div>
    </div>
  );
};
export default RentalFooter;
