import { ButtonProps } from "@/models/button.props";
import Link from "next/link";

const buttonStyle: { [key: string]: string } = {
  primary:
    "py-2 px-5 bg-indigo-500 hover:bg-indigo-600 text-white border-t border-indigo-400/70 shadow-lg hover:shadow-xl active:bg-indigo-700",
  flat: "bg-transparent text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 active:text-indigo-600",
};

export default function Button({
  children,
  style,
  href,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`transition-all rounded-lg flex gap-2 items-center font-medium active:scale-95 ${buttonStyle[style]} ${className}`}
    >
      {children}
    </Link>
  );
}
