import * as React from "react";
import { emailData } from "../../interfaces/types";

export const CustomerEmailTemplate: React.FC<Readonly<emailData>> = ({
  name,
  lastName,
  uid,
}) => (
  <div
    style={{ fontFamily: "Arial, Helvetica, sans-serif", textAlign: "center" }}
  >
    <h1>
      Witaj {name} {lastName} !
    </h1>
    <h3>
      Niedługo skontaktuje się z tobą nasz programista by omówić szczegóły
      realizacji!
    </h3>
    <p>
      Numer twojego projektu którym będziemy się posługiwać :
      <code style={{ fontSize: "x-large" }}>
        <strong>{uid}</strong>
      </code>
    </p>
    <p>
      Kontakt: <strong>kontakt.flowbits@gmail.com</strong>
    </p>
    <p>Pozdrawiamy Zespół Flowbits</p>
    <p>
      <b>
        Ta wiadomość została wygenerowana automatycznie- nie odpowiadaj na nią
      </b>
    </p>
  </div>
);
