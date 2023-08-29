const SingleTechnologie = (props: { title: string; body: string }) => {
  const { title, body } = props;
  return (
    <div className="flex flex-col w-64 mx-auto">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-slate-500">{body}</p>
    </div>
  );
};
export default SingleTechnologie;
