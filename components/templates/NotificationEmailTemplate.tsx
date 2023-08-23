import * as React from "react";
import { emailData } from "../../interfaces/types";

export const NotificationEmailTemplate: React.FC<Readonly<emailData>> = ({
  name,
  lastName,
  email,
  company,
  description,
  uid,
}) => (
  <div>
    <h1>
      Nowe zamówienie
      <code>
        <strong> {uid}</strong>
      </code>
    </h1>
    <p>Imie: {name}</p>
    <p>Nazwisko: {lastName}</p>
    <p>
      Email:
      <code>
        <strong> {email}</strong>
      </code>
    </p>
    <p>Firma: {company}</p>
    <p>Opis: {description}</p>
  </div>
);
