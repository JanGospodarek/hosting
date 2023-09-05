const RentalStep = (props: { title: string; body: string }) => {
  return (
    <div className="mt-4 flex flex-col text-center">
      <h2 className="text-2xl font-semibold">{props.title}</h2>
      <p className="w-3/4 sm:w-1/2 lg:w-1/3 mx-auto mt-4 text-gray-400">
        {props.body}
      </p>
    </div>
  );
};
export default RentalStep;
