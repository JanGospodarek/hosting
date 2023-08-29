import Image from "next/image";
import CoffeePreview from "../../../public/img/coffe_preview.png";
import Link from "next/link";
const ExampleProjects = () => {
  return (
    <div className="flex flex-col mt-36 mx-16  " id="example_projects">
      <h2 className="text-4xl font-semibold text-center w-full mb-10">
        Przykładowe projekty
      </h2>
      <div className="flex justify-around flex-wrap">
        <Link href="/coffee">
          <div className="mockup-browser border bg-base-300 sm:mx-16 md:mx-40 xl:mx-64">
            <div className="mockup-browser-toolbar">
              <div className="input">https://kawiarnia.com</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <Image
                src={CoffeePreview}
                alt="coffe"
                className="  h-full"
              ></Image>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ExampleProjects;
