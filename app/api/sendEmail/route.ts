// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req: any, res: any): Promise<any> {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: toEmail as string,
      reply_to: email,
      subject: subject,
      html: `
      <p>${message}</p>
      <br />
      <p>From email <a href="mailto${email}">${email}</a></p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
