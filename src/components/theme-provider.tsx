"use client";

import { useState, createContext, Dispatch } from "react";

type ThemeContextType = "light" | "dark";
export const ThemeContext = createContext<ThemeContextType>("dark");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeContextType>("light");
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
