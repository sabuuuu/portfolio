import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: [email],
      to: 'sabrina.yafa@se.uni-bejaia.dz',
      subject: subject || 'No Subject',
      html: `<p>${message}</p>`,  
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
