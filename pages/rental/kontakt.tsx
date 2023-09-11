import { useRef, useState } from "react";
import RentalNavbar from "../../components/rental/RentalNavbar";
import RentalFooter from "../../components/rental/RentalFooter";
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
    <div data-theme="black" className="font-rental">
      <RentalNavbar />

      <div className="flex justify-center items-center h-full">
        <div
          className=" border-2 border-gray-800   w-3/4 lg:w-1/2   mx-auto mt-24 p-8 bg-gray-900"
          id="contact"
        >
          <div className="flex flex-col">
            <div className="flex flex-col w-full items-center">
              <h2 className="text-3xl font-semibold">Skontaktuj się z nami</h2>
              <input
                type="text"
                placeholder="Imię"
                maxLength={20}
                className={`input input-bordered w-full max-w-xs m-3 bg-gray-900 ${
                  nameErr && "input-error"
                }`}
                ref={nameRef}
              />
              <input
                type="text"
                placeholder="Nazwisko"
                maxLength={30}
                className={`input input-bordered w-full max-w-xs m-3 bg-gray-900 ${
                  lastNameErr && "input-error"
                }`}
                ref={lastNameRef}
              />
              <input
                type="email"
                placeholder="Email"
                maxLength={40}
                required
                className={`input input-bordered w-full max-w-xs m-3 bg-gray-900 ${
                  emailErr && "input-error"
                }`}
                ref={emailRef}
              />
            </div>
            <button
              className="btn btn-success m-4 mx-auto uppercase"
              onClick={handleSendForm}
            >
              Wyślij
            </button>
          </div>
        </div>
      </div>
      <RentalFooter />
    </div>
  );
};
export default Contact;
