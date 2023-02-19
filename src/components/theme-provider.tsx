"use client";

import { useState, createContext, Dispatch } from "react";

type ThemeContextType = "light" | "dark";
export const ThemeContext = createContext<ThemeContextType>("dark");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeContextType>("dark");
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
