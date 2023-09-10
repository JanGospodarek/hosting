import Link from "next/link";
import Image from "next/image";
const SingleExampleProject = (props: {
  websiteUrl: string;
  hrefUrl: string;
  image: any;
  children: string | JSX.Element | JSX.Element[];
}) => {
  const { websiteUrl, hrefUrl, image, children } = props;
  return (
    <Link href={hrefUrl}>
      <div className=" mx-16 md:mx-40 xl:mx-64 rounded-xl border-b shadow-xl my-8 ">
        <div className="mockup-browser border bg-base-300 ">
          <div className="mockup-browser-toolbar">
            <div className="input">{websiteUrl}</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            <Image src={image} alt="coffe" className="  h-full"></Image>
          </div>
        </div>
        <div className="my-4 mx-12">{children}</div>
      </div>
    </Link>
  );
};
export default SingleExampleProject;
