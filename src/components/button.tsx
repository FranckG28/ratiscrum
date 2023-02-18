import Link from "next/link";

const buttonStyle: { [key: string]: string } = {
    primary: 'bg-indigo-500 hover:bg-indigo-600 text-white border-t border-indigo-400 shadow hover:shadow-lg',
    flat: 'bg-transparent text-indigo-400 hover:text-indigo-500',
}

export default function Button({ children, style, href }: ButtonProps) {
    return <Link href={href} className={`transition rounded-lg py-2 px-4 flex gap-2 ${buttonStyle[style]}`}>{children}</Link>
}

export interface ButtonProps {
    children: React.ReactNode;
    style: 'primary' | 'flat';
    href: string;
}