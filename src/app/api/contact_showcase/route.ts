import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: any) {
  // const resend = new Resend(process.env.PUBLIC_EMAIL_ID);
  const data = await req.json();
  const message = {
    from: data.email,
    to: [
      "malkaindesigns@gmail.com",
      "emmanuel@malkain.com",
      "support@malkain.com",
      "davisisibor@gmail.com",
    ],
    subject: "New Client submission from Showcase Page " + data.name,
    text: data.name,
    html: `<h1>Client information from Malkain</h1> <p> Client Name :  <strong > ${data.name} </strong> </p> <p> Client Email :  <strong > ${data.email} </strong> </p> <p> Client Phone :  <strong > ${data.phone} </strong> </p>  <p> Client Business Name :  <strong > ${data.business} </strong> </p>  <p> Client Project Description :  <strong > ${data.project_info} </strong> </p>  <p> Client Is Interested In :  <strong > ${data.interest} </strong> </p> <p> Client Budget :  <strong > $${data.budget}.00 </strong> </p> <p> How did you hear about us :  <strong > ${data.hear_us} </strong> </p>  <p style="color:red; ">This information was submitted from  our officail site @copyright 2023</p>  `,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.PUBLIC_EMAIL_ID,
      pass: process.env.PUBLIC_EMAIL_ID_KEY,
    },
  });

  return await transporter
    .sendMail(message)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 },
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 },
      );
    });
}

// // const body = JSON.parse(req.body);
// // const res = await request.json();
// const data = await req.json();

// resend.emails.send({
//   from: `onboarding@resend.dev`,
//   to: [
//     "support@malkain.com",
//     "emmanuel@malkain.com",
//     "malkaindesigns@gmail.com",
//   ],
//   reply_to: data.email,
//   subject: "New Client submission from " + data.name,
//   html: `<h1>Client information from Malkain</h1> <p> Client Name :  <strong > ${data.name} </strong> </p> <p> Client Email :  <strong > ${data.email} </strong> </p> <p> Client Phone :  <strong > ${data.phone} </strong> </p>  <p> Client Business Name :  <strong > ${data.business} </strong> </p>  <p> Client Project Description :  <strong > ${data.project_info} </strong> </p>  <p> Client Is Interested In :  <strong > ${data.interest} </strong> </p> <p> Client Budget :  <strong > $${data.budget}.00 </strong> </p> <p> How did you hear about us :  <strong > ${data.hear_us} </strong> </p>  <p style="color:red; ">This information was submitted from  our officail site @copyright 2023</p>  `,
//   // react: <Logo />,
// });
