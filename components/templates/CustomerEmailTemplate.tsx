import * as React from "react";
import { emailData } from "../../interfaces/types";

export const CustomerEmailTemplate: React.FC<Readonly<emailData>> = ({
  name,
  lastName,
}) => (
  <div>
    <h1>
      Welcome, {name} - {lastName}!
    </h1>
  </div>
);
