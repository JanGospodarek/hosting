import SingleExampleProject from "./SingleExampleProject";

const ExampleProjects = () => {
  return (
    <div className="flex flex-col mt-36 mx-16  ">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Przykładowe projekty
      </h2>
      <div className="flex justify-between">
        <SingleExampleProject />
        <SingleExampleProject />
        <SingleExampleProject />
      </div>
    </div>
  );
};
export default ExampleProjects;
