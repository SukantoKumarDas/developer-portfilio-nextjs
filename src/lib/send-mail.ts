import { SendMailReq } from './types';
import nodemailer from 'nodemailer';

export async function sendMail(req: SendMailReq) {
    const { name, email, phoneNumber, subject, message } = req;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // or use your SMTP
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // 1. Email to yourself (site owner)
    const ownerMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: subject || 'New Contact Form Message',
        text: `
Name: ${name ?? 'anonyumous'}
Email: ${email || 'N/A'}
Phone: ${phoneNumber || 'N/A'}
Message: ${message}
        `,
    };

    // 2. Confirmation email to user (if email is provided)
    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting me!',
        text: `Hi ${name},

Thank you for reaching me out. I have received your message and will get back to you shortly.

Here’s a copy of your message:
----------------------------
Subject: ${subject}
Message: ${message}

Best regards,
Sukanto Kumar Das`,
    };

    try {
        await transporter.sendMail(ownerMailOptions);
        if (email) {
            await transporter.sendMail(userMailOptions);
        }
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
