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
      <div className="z-50 lg:hidden fixed w-full bg-slate-200/60 dark:bg-slate-800/70 backdrop-blur-md border-b border-slate-300 dark:border-slate-700 flex items-center">
        <button onClick={() => { setIsOpen(!isOpen) }} className="rounded-xl p-3 hover:bg-slate-300 hover:dark:bg-white/20 transition-all m-1">
          <Menu className="dark:text-white text-slate-800" />
        </button>
        <Link href={"/"}>
          <Image src={RatiscrumLogo} alt="Ratiscrum Logo" width={120} />
        </Link>
      </div>

      <nav className={`
        flex flex-col gap-3
        bg-slate-200 dark:bg-slate-800 
        max-lg:bg-slate-200/80 max-lg:dark:bg-slate-800/70 max-lg:backdrop-blur-lg
        border-r dark:border-slate-700 border-slate-300 
        shadow-lg transition z-40
        p-5 w-72 
        max-lg:h-full max-lg:fixed max-lg:pt-20
        ${isOpen ? '' : 'max-lg:-translate-x-full'}
      `}>
        <Link className="w-48 max-lg:hidden" href={"/"}>
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
