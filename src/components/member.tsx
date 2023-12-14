import React from "react";
import { Github, Linkedin, Youtube, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Member } from "@/models/member";

const iconClass = "text-slate-500 hover:text-slate-300 transition w-5 h-5";

const memberIcons: { [icon: string]: React.ReactNode } = {
  linkedin: <Linkedin className={iconClass} />,
  github: <Github className={iconClass} />,
  youtube: <Youtube className={iconClass} />,
  website: <Link2 className={iconClass} />,
};

export default function MemberComponent({
  name,
  role,
  avatarUrl,
  links,
}: Member) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={avatarUrl ?? "/rat.png"}
        width={75}
        height={75}
        className="rounded-full border border-slate-300/20 my-2 aspect-square object-cover"
        alt={name}
      />
      <p className="text-slate-800 dark:text-white text-lg font-medium leading-4 text-center">
        {name}
      </p>
      <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
        {role}
      </p>
      <div className="flex gap-3">
        {links?.map(({ name, icon, url }) => (
          <Link key={name} aria-label={name} href={url} target="_blank">
            {memberIcons[icon]}
          </Link>
        ))}
      </div>
    </div>
  );
}
