import Image from "next/image";
import Logo from "../../public/img/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-6 py-4  ">
      <div className="flex-1">
        <a className=" cursor-pointer">
          <Image src={Logo} alt="logo" width={250} />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Nasze realizacje</a>
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
