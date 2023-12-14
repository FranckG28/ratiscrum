"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function SwitchTheme({ className }: { className?: string }) {
  // if (!theme) {
  //   console.warn("theme is null");
  //   return null;
  // }

  const toggleSwitch = () => {
    // console.log("theme", theme);
    // if (theme === "dark") {
    //   console.log("theme", theme);
    //   setTheme("light");
    // } else {
    //   console.log("theme", theme);
    //   setTheme("dark");
    // }
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <button
      type="button"
      onClick={toggleSwitch}
      className={classNames(
        "flex-start flex h-12 w-24 rounded-full bg-zinc-100 p-1 shadow-inner hover:cursor-pointer dark:bg-slate-700/50",
        theme === "light" && "place-content-end",
        className
      )}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-slate-900"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {theme === "light" ? (
            <Sun className="h-6 w-6 text-yellow-300" />
          ) : (
            <Moon className="h-6 w-6 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
}
