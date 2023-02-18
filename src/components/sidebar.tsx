import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";
import RatiscrumLogo from "/public/rts-logo.png"

export default function Sidebar() {
    return (
        <nav className='flex flex-col bg-slate-800 border-r gap-3 border-slate-700 shadow-lg p-5 w-72'>
            <Link className="w-48" href={"/"}>
                <Image src={RatiscrumLogo} alt="Ratiscrum Logo" />
            </Link>
            {items.map((item, index) => (<NavItem key={index} {...item} />))}
        </nav>
    )
}

interface NavItemProps {
    title: string
    subtitle?: string
    info: string;
    isActive: boolean;
}

const items: NavItemProps[] = [
    {
        title: "Nuit de l'info 2022",
        subtitle: "2 décembre 20022",
        info: "3 récompenses",
        isActive: true,
    },
    {
        title: "Nuit de l'info 2021",
        subtitle: "2 décembre 2021",
        info: "2 récompenses",
        isActive: false,
    }
];



function NavItem(props: NavItemProps) {

    return (
        <div className={`relative flex flex-col px-5 py-3 rounded-lg ${props.isActive ? 'bg-slate-700' : ''}`}>
            <p className="text-slate-400 text-sm">{props.subtitle}</p>
            <p className="text-white text-lg">{props.title}</p>
            <Badge text={props.info}></Badge>
            <span className={`absolute inset-y-4 -left-px w-1 rounded-full bg-gradient-to-b ${props.isActive ? "bg-indigo-500" : "bg-slate-400/20"}`}></span>
        </div>
    )

}