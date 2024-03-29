import Lottie from "lottie-react";
import ContactLottie from "../../../public/lottie/contact.json";
import { useRef, useState } from "react";
const Contact = () => {
  const [nameErr, setNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [alert, setAlert] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendForm = async () => {
    const name = nameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const description = descRef.current.value.trim();
    const company = companyRef.current.value.trim();

    name === "" ? setNameErr(true) : setNameErr(false);
    lastName === "" ? setLastNameErr(true) : setLastNameErr(false);
    email === "" ? setEmailErr(true) : setEmailErr(false);
    !email.includes("@") ? setEmailErr(true) : setEmailErr(false);
    description == "" ? setDescriptionErr(true) : setDescriptionErr(false);

    if (
      name == "" ||
      lastName == "" ||
      email == "" ||
      description == "" ||
      !email.includes("@")
    )
      return;
    //handle submition
    const data = { name, lastName, email, description, company };
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setLoading(false);
      if (!res.ok) throw Error("Wiadomość nie została wysłana");
      else setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };
  return (
    <>
      <div
        className="rounded-lg shadow-xl md:w-3/4 lg:w-[800px] mx-auto mt-24 p-8"
        id="contact"
      >
        <div className="flex">
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-3xl font-semibold">Skontaktuj się z nami</h2>
            <h3 className="text-slate-500">Zamów bezpłatną wycenę</h3>
            <input
              type="text"
              placeholder="Imię"
              maxLength={20}
              className={`input input-bordered w-full max-w-xs m-3 ${
                nameErr && "input-error"
              }`}
              ref={nameRef}
            />
            <input
              type="text"
              placeholder="Nazwisko"
              maxLength={30}
              className={`input input-bordered w-full max-w-xs m-3 ${
                lastNameErr && "input-error"
              }`}
              ref={lastNameRef}
            />
            <input
              type="email"
              placeholder="Email"
              maxLength={40}
              required
              className={`input input-bordered w-full max-w-xs m-3 ${
                emailErr && "input-error"
              }`}
              ref={emailRef}
            />
            <input
              type="text"
              maxLength={40}
              placeholder="Nazwa twojej firmy (opcjonalne)"
              className="input input-bordered w-full max-w-xs mx-3 mt-3"
              ref={companyRef}
            />
          </div>
          <Lottie
            animationData={ContactLottie}
            loop={true}
            className=" mx-auto hidden md:w-[200px] md:block lg:w-[300px]"
          />
        </div>

        {/* Text area below */}
        <div className="form-control mx-4">
          <label className="label">
            <span className="label-text">Opis projektu</span>
          </label>
          <textarea
            placeholder="Opisz swój projekt, na przykład: masz może jakąś wizje, czym się zajmuje twoja firma, co chcesz by się znajdowało na stronie"
            ref={descRef}
            maxLength={1000}
            className={`textarea textarea-bordered  h-24 ${
              descriptionErr && "textarea-error"
            }`}
          ></textarea>
        </div>

        <button className="btn btn-success m-4" onClick={handleSendForm}>
          {!loading ? (
            "Wyślij"
          ) : (
            <span className="loading loading-spinner"></span>
          )}
        </button>

        <div className="w-full flex items-center flex-col">
          <div className="relative flex py-5 items-center w-64">
            <div className="flex-grow border-t-2 border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-3xl font-semibold ">
              Lub
            </span>
            <div className="flex-grow border-t-2 border-gray-600"></div>
          </div>
          <div className=" text-xl flex flex-col items-center">
            Napisz do nas na:
            <div
              className=" font-semibold cursor-pointer flex justify-center items-center"
              onClick={() => {
                navigator.clipboard.writeText("kontakt.flowbits@gmail.com");
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 3000);
              }}
            >
              kontakt.flowbits@gmail.com
              <div
                className={`badge badge-sm ml-2 ${copied && "badge-success"}`}
              >
                {copied ? "skopiowano!" : "skopiuj"}
              </div>
            </div>
          </div>
        </div>
      </div>
      {alert && (
        <div className={`alert ${error ? "alert-error" : "alert-success"} `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            {error
              ? "Wiadomość nie została wysłana"
              : "Wiadomość wysłana. Niedługo skontaktuje się z tobą nasz programista"}
          </span>
        </div>
      )}
    </>
  );
};
export default Contact;
