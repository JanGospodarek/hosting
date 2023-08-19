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
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
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
      <div className="rounded-lg shadow-xl md:w-3/4 lg:w-[800px] mx-auto mt-24 p-8">
        <div className="flex">
          <div className="flex flex-col w-full md:w-1/2">
            <p className="text-3xl font-semibold">Skontaktuj się z nami</p>
            <p className="text-slate-500">Zamów bezpłatną wycenę</p>
            <input
              type="text"
              placeholder="Imię"
              className={`input input-bordered w-full max-w-xs m-3 ${
                nameErr && "input-error"
              }`}
              ref={nameRef}
            />
            <input
              type="text"
              placeholder="Nazwisko"
              className={`input input-bordered w-full max-w-xs m-3 ${
                lastNameErr && "input-error"
              }`}
              ref={lastNameRef}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={`input input-bordered w-full max-w-xs m-3 ${
                emailErr && "input-error"
              }`}
              ref={emailRef}
            />
            <input
              type="text"
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
            placeholder="Opisz swój projekt, na przykład: masz moze jakąś wizje, czym się zajmuje twoja firma, co chcesz by się znajdowało na stronie"
            ref={descRef}
            className={`textarea textarea-bordered  h-24 ${
              descriptionErr && "textarea-error"
            }`}
          ></textarea>
        </div>

        <button className="btn btn-success m-4" onClick={handleSendForm}>
          Wyślij
        </button>
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
