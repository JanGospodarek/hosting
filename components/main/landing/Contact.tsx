import Lottie from "lottie-react";
import ContactLottie from "../../../public/lottie/contact.json";
const Contact = () => {
  return (
    <div className="rounded-lg shadow-xl md:w-3/4 lg:w-[800px] mx-auto mt-24 p-8">
      <div className="flex">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-3xl font-semibold">Skontaktuj się z nami</p>
          <p className="text-slate-500">Zamów bezpłatną wycenę</p>
          <input
            type="text"
            placeholder="Imię"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Nazwisko"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="input input-bordered w-full max-w-xs mx-3 mt-3"
          />
        </div>
        <Lottie
          animationData={ContactLottie}
          loop={true}
          style={{ width: "300px" }}
          className=" mx-auto hidden lg:block"
        />
      </div>

      {/* Text area below */}
      <div className="form-control mx-4">
        <label className="label">
          <span className="label-text">Opis projektu</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Opisz swój projekt, na przykład: masz moze jakąś wizję, czym się zajmuje twoja firma, co chcesz by się znajdowało na stronie"
        ></textarea>
      </div>

      <button className="btn btn-success m-4">Wyślij</button>
    </div>
  );
};
export default Contact;
