type Props = {
  title: string;
  body: string;
  right: boolean;
  nextStep?: "idea" | "going" | "finish";
  id: "start" | "idea" | "going" | "finish";
};
import { Link } from "react-scroll";
const TimelineStep = (props: Props) => {
  const { title, body, right, nextStep, id } = props;
  return (
    <div className="card " id={id}>
      <div className={`info flex flex-col ${right && "items-end"}`}>
        <h3 className="title  text-4xl sm:text-6xl pt-36 text-white">
          {title}
        </h3>
        <p className=" w-96 p-4 text-gray-400 text-lg sm:text-xl">{body}</p>
        {nextStep ? (
          <Link
            to={nextStep}
            smooth={true}
            duration={1000}
            className="btn btn-secondary btn-circle btn-outline mb-36 mx-auto "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </Link>
        ) : (
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="neon-button text-2xl mx-auto mt-8 mb-16 "
          >
            Kontakt
          </Link>
        )}
      </div>
    </div>
  );
};
export default TimelineStep;
