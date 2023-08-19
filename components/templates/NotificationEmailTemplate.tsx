import * as React from "react";
import { emailData } from "../../interfaces/types";

export const NotificationEmailTemplate: React.FC<Readonly<emailData>> = ({
  name,
  lastName,
  email,
  company,
  description,
}) => (
  <div>
    <h1>
      Welcome, {name},{lastName},{email},{company},{description}!
    </h1>
  </div>
);
