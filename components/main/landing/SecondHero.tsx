import { Link } from "react-scroll";

const SecondHero = () => {
  return (
    <div className="blob-container w-screen h-screen">
      <div className="flex flex-col items-start sm:items-center ">
        <p className="text-white text-6xl font-semibold sm:text-center drop-shadow-glow m-2 ">
          Przenieś swój biznes do internetu
        </p>
        <p className="text-gray-100 text-4xl mx-2">z naszą pomocą</p>
        <Link
          to="timeline"
          smooth={true}
          // offset={}
          duration={1000}
          className="btn btn-outline btn-secondary m-2 btn-lg"
        >
          Zaczynamy!
        </Link>
      </div>

      <div className="blob"></div>
    </div>
  );
};
export default SecondHero;
