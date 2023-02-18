import React from "react";
import { Github, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Member } from "@/models/member";

const iconClass = "text-slate-500 hover:text-slate-300 transition w-5 h-5";

const memberIcons: { [icon: string]: React.ReactNode } = {
    linkedin: <Linkedin className={iconClass} />,
    github: <Github className={iconClass} />,
    youtube: <Youtube className={iconClass} />
};

export default function MemberComponent({ name, role, avatar, links }: Member) {
    return <div className="flex flex-col items-center gap-1">
        <Image src={avatar} width={75} height={75} className="rounded-full border border-slate-300/20 my-2" alt={name} />
        <p className="text-white text-lg font-medium leading-4">{name}</p>
        <p className="text-slate-400 text-sm">{role}</p>
        <div className="flex gap-3">
            {links.map(({ name, icon, url }) => (<Link key={name} aria-label={name} href={url}>
                {memberIcons[icon]}
            </Link>))}
        </div>
    </div>
}