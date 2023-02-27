"use client";

import Image from "next/image";
import Link from "next/link";
import RatiscrumLogo from "/public/rts-logo.png";
import { NavItem } from "@/models/nav-item";
import { useContext } from "react";
import { ThemeContext } from "@/components/theme-provider";
import { contentList } from "@/content/content-list";
import { capitalize, displayDate } from "@/services/utils";
import NavItemComponent from "@/components/nav-item";

export default function Sidebar() {
  const theme = useContext(ThemeContext);
  return (
    <nav className="flex flex-col bg-slate-200 dark:bg-slate-800 md:border-r gap-3 dark:border-slate-700 border-slate-300 shadow-lg md:p-5 md:w-72 w-0 invisible md:visible">
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
          isActive={false}
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
  );
}

const items: NavItem[] = [
  {
    title: "Nuit de l'info 2022",
    subtitle: "2 décembre 20022",
    info: "3 récompenses",
    isActive: true,
    url: "/",
  },
  {
    title: "Nuit de l'info 2021",
    subtitle: "2 décembre 2021",
    info: "2 récompenses",
    isActive: false,
    url: "/",
  },
];


