import { ButtonProps } from "@/models/button.props";
import Link from "next/link";

const buttonStyle: { [key: string]: string } = {
  primary:
    "py-2 px-5 bg-indigo-500 hover:bg-indigo-600 text-white border-t border-indigo-400/70 shadow-lg hover:shadow-xl",
  flat: "bg-transparent text-indigo-400 hover:text-indigo-500",
};

export default function Button({ children, style, href, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`transition rounded-lg flex gap-2 items-center font-medium ${buttonStyle[style]} ${className}`}
    >
      {children}
    </Link>
  );
}