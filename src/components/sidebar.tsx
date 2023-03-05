"use client";

import Image from "next/image";
import Link from "next/link";
import RatiscrumLogo from "/public/rts-logo.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "@/components/theme-provider";
import { contentList } from "@/content/content-list";
import { capitalize, displayDate } from "@/services/utils";
import NavItemComponent from "@/components/nav-item";
import { useSelectedLayoutSegment } from 'next/navigation';
import { Menu } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";
import useScroll from "@/hooks/use-scroll";

export default function Sidebar() {
  const theme = useContext(ThemeContext);
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  useOnClickOutside(ref, () => { setIsOpen(false) });
  const scrolled = useScroll(50);

  return (
    <div ref={ref}>
      <div className={`z-50 fixed w-full flex items-center lg:-translate-y-full transition-all duration-500 ease-in-out 
      ${scrolled
          ? 'bg-slate-200/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-300 dark:border-slate-700 shadow-xl'
          : 'bg-white/0 border-white/0 shadow-none'}
      `}>
        <button className="group p-4 hover:bg-slate-300 hover:dark:bg-white/20 transition-all" onClick={() => { setIsOpen(!isOpen) }}>
          <Menu className="dark:text-white text-slate-800 group-active:scale-90 transition" />
        </button>
        <Link href={"/"} onClick={() => { setIsOpen(false) }}>
          <Image src={RatiscrumLogo} alt="Ratiscrum Logo" width={120} />
        </Link>
      </div>

      <nav className={`
        flex flex-col gap-3
        bg-slate-200 dark:bg-slate-800 
        max-lg:bg-slate-200/90 max-lg:dark:bg-slate-800/90 max-lg:backdrop-blur-lg
        border-r dark:border-slate-700 border-slate-300 
        shadow-lg transition z-40
        p-5 w-72 h-full fixed 
        max-lg:pt-20
        ${isOpen ? '' : 'max-lg:-translate-x-full'}
      `}>
        <Link className="w-48 max-lg:hidden" href={"/"}>
          <Image src={RatiscrumLogo} alt="Ratiscrum Logo" />
        </Link>
        {contentList.map((item, index) => (
          <button
            key={index}
            onClick={() => { setIsOpen(false) }}
          >
            <NavItemComponent
              title={item.name}
              subtitle={capitalize(displayDate(item.date))}
              info={`${item.rewards.length} récompenses`}
              url={`/${item.slug}`}
              isActive={segment === item.slug}
            />
          </button>
        ))}
        {/* <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme}
      </button> */}
      </nav>

    </div>
  );
}
