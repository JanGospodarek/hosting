import Image from "next/image";
import Logo from "../../../public/img/logo2.png";
const Footer = () => {
  return (
    <footer className="footer items-center p-8  text-neutral shadow-2xl rounded-xl mb-4  mt-16">
      <div className="items-center grid-flow-col">
        <Image src={Logo} alt="logo" width={150} />
        <p>
          Copyright © 2023 - All right reserved | Kontakt:
          <b> kontakt.flowbits@gmail.com</b>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
