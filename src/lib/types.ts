export type MetaProps = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
// name: z.string().min(1, { message: "Name is required" }),
// email: z.string().optional(),
// phoneNumber: z.string().optional(),
// subject: z.string().optional(),
// message: z.string().min(1, { message: "Message is required" }),
export type SendMailReq = {
    name: string,
    email?: string,
    phoneNumber?: string,
    subject?: string,
    message: string,
}