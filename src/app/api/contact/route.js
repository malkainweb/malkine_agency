import Logo from "@/app/component/logo";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  const resend = new Resend(process.env.PUBLIC_EMAIL_ID);

  // const body = JSON.parse(req.body);
  // const res = await request.json();
  const data = await req.json();
  console.log(data);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["davisisibor@gmail.com", "jamesmercyn1998@gmail.com"],
    subject: "New Client submission",
    html: `<h1>Client information from Malkain</h1> <p> Client Name :  <strong > ${"davis"} </strong> </p> <p> Client Email :  <strong > ${"davis@gmail.com"} </strong> </p> <p> Client Phone :  <strong > ${"09087783838"} </strong> </p>  <p> Client Business Name :  <strong > ${"Malkine"} </strong> </p>  <p> Client Project Description :  <strong > ${"i want a good product "} </strong> </p>  <p> Client Is Interested In :  <strong > ${"Ui ux development"} </strong> </p> <p> Client Budget :  <strong > ${"$ 200,99"} </strong> </p> <p> How did you hear about us :  <strong > ${"twieeter"} </strong> </p>  <p style="color:red; ">This information was submitted from  our officail site @copyright 2023</p>  `,
    // react: <Logo />,
  });
  return NextResponse.json({ davis: "dkdkd" });
}
