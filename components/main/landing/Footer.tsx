import Image from "next/image";
import Logo from "../../../public/img/logo2.png";
const Footer = () => {
  return (
    <footer className="footer items-center p-8  text-neutral shadow-2xl rounded-xl mb-4  mt-16">
      <div className="items-center grid-flow-col">
        <Image src={Logo} alt="logo" width={150} />
        <p>
          Copyright © 2023 - All right reserved | Kontakt:
          <b> flowbits.kontakt@gmail.com</b>
        </p>
      </div>
      {/* <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
      </div> */}
    </footer>
  );
};
export default Footer;
