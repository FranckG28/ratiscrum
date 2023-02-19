"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";
import RatiscrumLogo from "/public/rts-logo.png";
import { NavItem } from "@/models/nav-item";
import { useContext } from "react";
import { ThemeContext } from "@/components/theme-provider";

export default function Sidebar() {
  const theme = useContext(ThemeContext);
  return (
    <nav className="flex flex-col bg-slate-200 dark:bg-slate-800 md:border-r gap-3 dark:border-slate-700 border-slate-300 shadow-lg md:p-5 md:w-72 w-0 invisible md:visible">
      <Link className="w-48" href={"/"}>
        <Image src={RatiscrumLogo} alt="Ratiscrum Logo" />
      </Link>
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
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

function NavItem(props: NavItem) {
  return (
    <Link
      href={props.url}
      className={`relative flex flex-col px-5 py-4 rounded-lg ${
        props.isActive
          ? "dark:bg-slate-700 bg-slate-300"
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
        className={`absolute inset-y-4 -left-px w-1 rounded-full bg-gradient-to-b ${
          props.isActive
            ? "bg-indigo-500"
            : "bg-slate-600/20 dark:bg-slate-400/20"
        }`}
      ></span>
    </Link>
  );
}
