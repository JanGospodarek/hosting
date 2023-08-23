const CoffeeFooter = () => {
  return (
    <div id="footer" className="bg-gray-700 w-full p-8 flex text-white">
      <div className="p-5">
        <p className="text-xl text-slate-400">Kontakt</p>
        <p className="my-2">kontakt@kawiarnia.pl</p>
        <p>+48 123 123 123</p>
      </div>
      <div className="p-5">
        <p className="text-xl text-slate-400">Godziny otwarcia</p>
        <p className="text-slate-400">pn-pt</p>
        <p>11:00 - 21:00</p>
        <p className="text-slate-400">sb-nd</p>
        <p>13:00 - 23:00</p>
      </div>
      <div className="p-5">
        <p className="text-xl text-slate-400">Adres</p>
        <p>ul. Jana Pawła II, 37 </p>
      </div>
    </div>
  );
};
export default CoffeeFooter;
