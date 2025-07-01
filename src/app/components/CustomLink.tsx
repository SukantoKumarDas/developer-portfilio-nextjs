import { cn } from '@/lib/utils';

type CustomLinkProps = {
    key?: string;
    link?: string;
    active?: string;
    label?: string;
    className?: string;
};
export default function CustomLink(props: CustomLinkProps) {
    return (
        <a
            key={props.key}
            href={props.link ?? '#'}
            className={cn(
                `text-center transition-all duration-150 ease-in-out hover:text-indigo-400 hover:scale-105 ${
                    props.active === props.link ? 'text-indigo-400' : ''
                }`,
                props.className ?? ''
            )}
        >
            {props.label}
        </a>
    );
}
