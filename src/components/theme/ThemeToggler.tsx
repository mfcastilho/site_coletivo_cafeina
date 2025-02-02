import React from "react";
import { useTheme } from "../../hooks/useTheme";


export const ThemeToggler: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Change Theme</button>
} 