import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    subject: z.string().optional(),
    message: z.string().min(1, { message: "Message is required" }),
});