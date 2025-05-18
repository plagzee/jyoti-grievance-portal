import { Resend } from 'resend';
import { NextResponse } from 'next/server';
export async function POST(request) {
    if (request.method === "POST") {
        const data = await request.json();

        if (!data.title) {
            return NextResponse.json({ message: "Title is required", success: false }, { status: 400 });
        }
        if (!data.description) {
            return NextResponse.json({ message: "Description is required" , success: false }, { status: 400 });
        }

        const resend = new Resend(`${process.env.RESEND_API_KEY}`);

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'podgains0@gmail.com',
            subject: `${data.title}`,
            html: `<p>${data.description}</p>`
          });

        return NextResponse.json({ message: "Grievance created successfully", success: true }, { status: 200 });

    }
}