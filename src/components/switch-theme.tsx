import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  if (!theme) {
    return null;
  }
  const toggleSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[50px] w-[100px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-slate-700/50 ${theme === "light" && "place-content-end"
        }`}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/70"
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
    </div>
  );
}
