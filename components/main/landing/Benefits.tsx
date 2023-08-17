const Benefits = () => {
  return (
    <div className="flex flex-col h-screen mt-16 mx-36 items-start ">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Co nas charakteryzuje?
      </h2>
      <div className=" flex  w-1/2  my-4 rounded-xl bg-teal-100 p-6 ">
        <div className="flex flex-col">
          <p className="text-xl">Indywidualne podejście </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            ratione.
          </p>
        </div>

        <div className="w-48 h-48 "></div>
      </div>
      <div className=" flex w-1/2  my-4 self-end rounded-xl bg-blue-100 p-6">
        <p className="text-xl">Szybki czas realizacji zlecenia</p>
        <div className="w-48 h-48 "></div>
      </div>
      <div className=" flex w-1/2  my-4 rounded-xl bg-purple-100 p-6 ">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-48 h-48 "></div>
      </div>
    </div>
  );
};
export default Benefits;
