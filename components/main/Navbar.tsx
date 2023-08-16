import Image from "next/image";
import LogoIpsum from "../../public/img/logoipsum-288.svg";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-6 py-4 fixed top-0 rounded-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={LogoIpsum} alt="logo" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Oferta</a>
          </li>

          <li>
            <a>Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
