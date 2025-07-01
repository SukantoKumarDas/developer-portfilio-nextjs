'use client';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MailIcon, PhoneIcon } from 'lucide-react';
import { ContactSchema } from '@/lib/schemas';
import ActionButton from '../ActionButton';
import { useTransition } from 'react';
import { toast } from 'sonner';
export default function ContactForm() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            subject: '',
            message: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
        startTransition(async () => {
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    console.log('Your message is sent');
                    toast('Your message is sent');
                    form.reset();
                } else {
                    console.log('Maybe some error happened');
                    toast('Check your mail or try later.');
                }
            } catch (error) {
                console.error('Something went wrong: try after sometime!', error);
            }
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6 p-5 border-2 rounded-2xl"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Your Name*"
                                        className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 transition"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-sm text-red-500 mt-1" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Subject"
                                        className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 transition"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-sm text-red-500 mt-1" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        <PhoneIcon
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />
                                        <Input
                                            placeholder="Your Phone Number"
                                            className="bg-white border border-gray-300 rounded-md px-10 py-2 focus:border-indigo-500 focus:ring-indigo-500 transition"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage className="text-sm text-red-500 mt-1" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        <MailIcon
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            size={18}
                                        />
                                        <Input
                                            placeholder="Your Email"
                                            className="bg-white border border-gray-300 rounded-md px-10 py-2 focus:border-indigo-500 focus:ring-indigo-500 transition"
                                            {...field}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage className="text-sm text-red-500 mt-1" />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    placeholder="Type your message here*"
                                    className="min-h-[134px] max-h-[134px] overflow-y-auto  bg-white border border-gray-300 rounded-md px-4 py-2"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-sm text-red-500 mt-1" />
                        </FormItem>
                    )}
                />
                <div className="flex flex-row-reverse">
                    <ActionButton
                        pending={isPending}
                        type="submit"
                        className="w-full sm:w-30  bg-indigo-400 hover:bg-indigo-300 font-bold px-6 py-2 rounded-md transition"
                    >
                        Send Now
                    </ActionButton>
                </div>
            </form>
        </Form>
    );
}
