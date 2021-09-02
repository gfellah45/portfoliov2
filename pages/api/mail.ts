import type { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  let nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.RECIEVEREMAIL,
    subject: `Message From ${req.body.name} `,
    text: `Sender Email - ${req.body.email} message body - ${req.body.message}`,
  };

  transporter.sendMail(mailData, function (err: unknown, info: unknown) {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error sending email" });
    } else res.status(200).send(info);
  });
  res.status(200);
}
