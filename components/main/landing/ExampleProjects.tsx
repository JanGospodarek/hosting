import SingleExampleProject from "./SingleExampleProject";

const ExampleProjects = () => {
  return (
    <div className="flex flex-col mt-36 mx-16  ">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Przykładowe projekty
      </h2>
      <div className="flex justify-around">
        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </div>
        {/* Mockup phone #1 */}
        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </div>
        {/* Mockup phone #2 */}

        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExampleProjects;
