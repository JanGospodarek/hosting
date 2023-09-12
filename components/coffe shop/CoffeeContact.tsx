import { useRef, useState } from "react";
import Image from "next/image";
import coffee from "../../public/img/kawiarnia2.gif";
const Contact = () => {
  const [nameErr, setNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSendForm = async () => {
    const name = nameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    name === "" ? setNameErr(true) : setNameErr(false);
    lastName === "" ? setLastNameErr(true) : setLastNameErr(false);
    email === "" ? setEmailErr(true) : setEmailErr(false);
    !email.includes("@") ? setEmailErr(true) : setEmailErr(false);

    if (name == "" || lastName == "" || email == "" || !email.includes("@"))
      return;
  };
  return (
    <div
      className="flex justify-center items-center  h-screen w-full relative"
      id="contact"
    >
      <Image
        src={coffee}
        alt="dd"
        className="h-screen object-cover absolute top-0 w-full left-0  z-0  "
      ></Image>
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-gray-900 bg-opacity-40"></div>

      <div className=" border-x-2 border-x-gray-600 w-3/4 lg:w-3/5  mx-auto  p-8 z-20 flex-col ">
        <h2 className="text-4xl font-semibold mb-4 text-white text-center">
          Skontaktuj się z nami
        </h2>
        <div className="flex-col md:flex-row flex items-center justify-center">
          <div className="flex flex-col">
            <div className="flex flex-col w-full items-center">
              <input
                type="text"
                placeholder="Imię"
                maxLength={20}
                className={`input input-ghost  bg-opacity-20 w-full max-w-xs m-3 rounded-none  ${
                  nameErr && "input-error"
                }`}
                ref={nameRef}
              />
              <input
                type="text"
                placeholder="Nazwisko"
                maxLength={30}
                className={`input input-ghost bg-opacity-20 w-full max-w-xs m-3 rounded-none ${
                  lastNameErr && "input-error"
                }`}
                ref={lastNameRef}
              />
              <input
                type="email"
                placeholder="Email"
                maxLength={40}
                required
                className={`input input-ghost bg-opacity-20 w-full max-w-xs m-3 rounded-none ${
                  emailErr && "input-error"
                }`}
                ref={emailRef}
              />
            </div>
            <button
              className="btn btn-outline btn-success m-4 mx-auto uppercase"
              onClick={handleSendForm}
            >
              Wyślij
            </button>
          </div>
          <div className="bg-gray-500 bg-opacity-30 p-10 flex flex-col items-center md:ml-6">
            <a href="mailto:kontak@kawiarnia.pl" className="text-white text-xl">
              kontak@kawiarnia.pl
            </a>
            <a href="tel:+48123123123" className="text-white text-xl">
              +48 123 123 123
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
