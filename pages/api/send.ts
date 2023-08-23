import type { NextApiRequest, NextApiResponse } from "next";
import { CustomerEmailTemplate } from "../../components/templates/CustomerEmailTemplate";
import { Resend } from "resend";
import { emailData } from "../../interfaces/types";
import { NotificationEmailTemplate } from "../../components/templates/NotificationEmailTemplate";
const resend = new Resend(process.env.EMAIL_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const reqData = JSON.parse(req.body) as emailData;
  console.log(reqData);
  const uid = (new Date().getTime() * Math.random()).toFixed(0);
  console.log(uid);

  try {
    const data = await resend.emails.send({
      from: "Flowbits <powiadomienie@flowbits.pl>",
      to: [reqData.email],
      subject: "Powiadomienie Flowbits",
      react: CustomerEmailTemplate({ ...reqData, uid }),
    });
    const data2 = await resend.emails.send({
      from: "Flowbits <powiadomienie@flowbits.pl>",
      to: ["kontakt.flowbits@gmail.com"],
      subject: "Nowe zamówienie",
      react: NotificationEmailTemplate({ ...reqData, uid }),
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
