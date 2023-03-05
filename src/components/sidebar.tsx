"use client";

import Image from "next/image";
import Link from "next/link";
import RatiscrumLogo from "/public/rts-logo.png";
import { useContext, useState } from "react";
import { ThemeContext } from "@/components/theme-provider";
import { contentList } from "@/content/content-list";
import { capitalize, displayDate } from "@/services/utils";
import NavItemComponent from "@/components/nav-item";
import { useSelectedLayoutSegment } from 'next/navigation';
import { Menu } from "lucide-react";

export default function Sidebar() {
  const theme = useContext(ThemeContext);
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <button onClick={() => { setIsOpen(!isOpen) }} className="rounded-xl p-3 hover:bg-white/20 transition-all absolute lg:hidden z-30 top-2 left-2"><Menu className="text-white" /></button>

      <nav className={`
        flex flex-col 
        bg-slate-200 dark:bg-slate-800 border-r gap-3 dark:border-slate-700 border-slate-300 shadow-lg 
        p-5 w-72 
        max-lg:h-full max-lg:fixed transition
        ${isOpen ? '' : 'max-lg:-translate-x-full'}
      `}>
        <Link className="w-48" href={"/"}>
          <Image src={RatiscrumLogo} alt="Ratiscrum Logo" />
        </Link>
        {contentList.map((item, index) => (
          <NavItemComponent
            key={index}
            title={item.name}
            subtitle={capitalize(displayDate(item.date))}
            info={`${item.rewards.length} récompenses`}
            url={`/${item.slug}`}
            isActive={segment === item.slug}
          />
        ))}
        {/* <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme}
      </button> */}
      </nav>

    </>
  );
}
