import { cn } from '@/lib/utils';

type CustomLinkProps = {
    key?: string;
    link?: string;
    active?: string;
    label?: string;
    handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
    className?: string;
};
export default function CustomLink(props: CustomLinkProps) {
    return (
        <a
            key={props.key}
            href={props.link ?? '#'}
            onClick={
                props.handleLinkClick ? e => props.handleLinkClick(e, props.link ?? '#') : undefined
            }
            className={cn(
                `text-center transition-all duration-150 ease-in-out hover:text-lime-400 hover:scale-105 ${
                    props.active === props.link ? 'text-lime-400' : ''
                }`,
                props.className ?? ''
            )}
        >
            {props.label}
        </a>
    );
}
