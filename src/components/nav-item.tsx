import { NavItem } from "@/models/nav-item";
import Link from "next/link";
import Badge from "./badge";

export default function NavItemComponent(props: NavItem) {
    return (
        <Link
            href={props.url}
            className={`relative flex flex-col px-5 py-4 rounded-lg text-start ${props.isActive
                ? "dark:bg-slate-700 bg-slate-300 max-lg:dark:bg-slate-700/10 max-lg:bg-slate-400/10 max-lg:backdrop-blur-lg"
                : "hover:bg-slate-500/5 dark:hover:bg-slate-400/5"
                }`}
        >
            <p className="text-slate-700 dark:text-slate-400 text-sm leading-3">
                {props.subtitle}
            </p>
            <p className="text-black dark:text-white text-lg font-medium">
                {props.title}
            </p>
            <Badge text={props.info}></Badge>
            <span
                className={`absolute inset-y-4 -left-px w-1 rounded-full bg-gradient-to-b ${props.isActive
                    ? "bg-indigo-500"
                    : "bg-slate-600/20 dark:bg-slate-400/20"
                    }`}
            ></span>
        </Link>
    );
}