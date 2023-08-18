import Image from "next/image";
const Navbar = () => {
  return (
    <div className=" shadow-xl px-6 bg-base-100  fixed top-0 right-0 z-10 rounded-bl-xl ">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Realizacje</a>
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
