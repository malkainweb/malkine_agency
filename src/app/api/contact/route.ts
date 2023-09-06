import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.PUBLIC_EMAIL_ID);

  // const body = JSON.parse(req.body);
  // const res = await request.json();
  const data = await req.json();
  console.log(data);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["davisisibor@gmail.com", "jamesmercyn1998@gmail.com"],
    subject: "New Client submission",
    html: `<h1>Client information from Malkain</h1> <p> Client Name :  <strong > ${data.name} </strong> </p> <p> Client Email :  <strong > ${data.email} </strong> </p> <p> Client Phone :  <strong > ${data.phone} </strong> </p>  <p> Client Business Name :  <strong > ${data.business} </strong> </p>  <p> Client Project Description :  <strong > ${data.project_info} </strong> </p>  <p> Client Is Interested In :  <strong > ${data.interest} </strong> </p> <p> Client Budget :  <strong > $${data.budget}.00 </strong> </p> <p> How did you hear about us :  <strong > ${data.hear_us} </strong> </p>  <p style="color:red; ">This information was submitted from  our officail site @copyright 2023</p>  `,
    // react: <Logo />,
  });
  return NextResponse.json({ davis: "dkdkd" });
}
