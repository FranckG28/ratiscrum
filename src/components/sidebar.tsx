"use client";

import Link from "next/link";
import { useRef } from "react";
import { contentList } from "@/content/content-list";
import { capitalize, displayDate } from "@/services/utils";
import NavItemComponent from "@/components/nav-item";
import { useSelectedLayoutSegment } from "next/navigation";
import { Menu } from "lucide-react";
import { useBoolean, useOnClickOutside } from "usehooks-ts";
import useScroll from "@/hooks/use-scroll";
import SwitchTheme from "./switch-theme";
import RatiscrumLogo from "./ratiscrum-logo";

export default function Sidebar() {
  const segment = useSelectedLayoutSegment();

  const { value, toggle, setFalse } = useBoolean(false);

  const ref = useRef(null);

  useOnClickOutside(ref, setFalse);

  const scrolled = useScroll(50);

  return (
    <>
      <div
        ref={ref}
        className={`z-50 fixed w-full flex items-center lg:-translate-y-full transition-all duration-500 ease-in-out 
      ${scrolled
            ? "bg-slate-200/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-300 dark:border-slate-700 shadow-xl"
            : "bg-white/0 border-white/0 shadow-none"
          }
      `}
      >
        <button
          className="group p-4 hover:bg-slate-300 hover:dark:bg-white/20 transition-all"
          onClick={toggle}
        >
          <Menu className="dark:text-white text-slate-800 group-active:scale-90 transition" />
        </button>
        <Link href={"/"} onClick={setFalse}>
          <RatiscrumLogo width={120} />
        </Link>
      </div>

      <nav
        className={`
        bg-slate-200 dark:bg-slate-800 
        max-lg:bg-slate-200/90 max-lg:dark:bg-slate-800/90 max-lg:backdrop-blur-lg
        border-r dark:border-slate-700 border-slate-300 
        shadow-lg transition duration-300 z-40
        w-72 max-lg:h-full max-lg:fixed 
        max-lg:pt-14
        ${value ? "" : "max-lg:-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between flex-col">
          <div className="fixed flex flex-col gap-3 p-5 w-72">
            <Link className="w-48 max-lg:hidden" href={"/"}>
              <RatiscrumLogo />
            </Link>
            {contentList.map((item, index) => (
              <NavItemComponent
                title={item.name}
                key={index}
                subtitle={capitalize(displayDate(item.date))}
                info={`${item.rewards.length} récompenses`}
                url={`/${item.slug}`}
                isActive={segment === item.slug}
              />
            ))}
          </div>
          <div className="fixed bottom-0 m-8">
            <SwitchTheme />
          </div>
        </div>
      </nav>
    </>
  );
}
