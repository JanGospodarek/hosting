const RentalStep = (props: { title: string; body: string }) => {
  return (
    <div className="mt-4 flex flex-col text-center">
      <h2 className="text-2xl font-semibold">{props.title}</h2>
      <p className="mx-64 mt-4 text-gray-400">{props.body}</p>
    </div>
  );
};
export default RentalStep;
