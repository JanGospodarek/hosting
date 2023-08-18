import SingleExampleProject from "./SingleExampleProject";

const ExampleProjects = () => {
  return (
    <div className="flex flex-col mt-36 mx-16  ">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Przykładowe projekty
      </h2>
      <div className="flex justify-around flex-wrap">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://restauracja.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Hello!
          </div>
        </div>
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://wypozyczalnia.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            Hello!
          </div>
        </div>
        {/* <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </div>
        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </div>

        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default ExampleProjects;
