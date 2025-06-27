import { sendMail } from '@/lib/send-mail';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    const success = await sendMail(body);

    if (success) {
        return NextResponse.json({ message: 'Message sent!' }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}
