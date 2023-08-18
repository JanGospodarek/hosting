const SingleTechnologie = (props: { title: string; body: string }) => {
  const { title, body } = props;
  return (
    <div className="flex flex-col w-64 mx-auto">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-slate-500">{body}</p>
    </div>
  );
};
export default SingleTechnologie;
