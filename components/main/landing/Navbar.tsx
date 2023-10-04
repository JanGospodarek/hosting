import Image from "next/image";
import Logo from "../../../public/img/logo2.png";
import { useScroll } from "../../hooks/useScroll";
import { Link } from "react-scroll";

const Navbar = () => {
  const { scrollDirection } = useScroll();

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };

  return (
    <div
      className="w-full h-20 p-4 rounded-lg shadow-lg fixed top-0 right-0 bg-white z-40 flex justify-center "
      // @ts-expect-error
      style={scrollDirection === "down" ? styles.active : styles.hidden}
    >
      <div className="w-full h-full relative">
        <Image
          src={Logo}
          alt="logo"
          className="w-[180px] absolute mx-auto mb-2 left-0 right-0"
        />
        <div className=" justify-end gap-4 hidden lg:flex">
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={1500}
            className="btn btn-sm btn-outline btn-primary m-2"
          >
            Kontakt
          </Link>
          <Link
            to="offer"
            smooth={true}
            offset={-100}
            duration={1500}
            className="btn btn-sm btn-outline btn-primary m-2"
          >
            Oferta
          </Link>
          <Link
            to="example_projects"
            smooth={true}
            offset={-100}
            duration={1500}
            className="btn btn-sm btn-outline btn-primary m-2"
          >
            Projekty
          </Link>
        </div>
        <div className="dropdown dropdown-end absolute top-0 right-0 lg:hidden">
          <label tabIndex={0} className="btn btn-square btn-outline m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
          >
            <li>
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={1500}
                className="btn btn-sm btn-outline btn-primary m-2"
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                to="offer"
                smooth={true}
                offset={-100}
                duration={1500}
                className="btn btn-sm btn-outline btn-primary m-2"
              >
                Oferta
              </Link>
            </li>
            <li>
              <Link
                to="example_projects"
                smooth={true}
                offset={-100}
                duration={1500}
                className="btn btn-sm btn-outline btn-primary m-2"
              >
                Projekty
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
