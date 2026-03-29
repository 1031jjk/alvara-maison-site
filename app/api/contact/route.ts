import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: "Alvara Maison <justin@alvaramaison.com>",
      to: "justin@alvaramaison.com",
      subject: `Website message: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}