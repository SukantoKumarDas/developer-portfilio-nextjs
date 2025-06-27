'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RefreshCcwIcon } from 'lucide-react';

export default function ActionButton({
    type,
    pending,
    children,
    className,
    onClick,
}: {
    type: 'submit' | 'button' | 'reset';
    pending: boolean;
    children: string;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <Button
            name="submit"
            type={type}
            onClick={onClick}
            className={cn('w-full bg-primary text-zinc-100', className)}
            disabled={pending}
        >
            {pending ? (
                <>
                    <RefreshCcwIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait ..
                </>
            ) : (
                <>{children}</>
            )}
        </Button>
    );
}
