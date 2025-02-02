import React from "react";
import { useTheme } from "../../hooks/useTheme";


export const ThemeButton: React.FC = () => {
  const { theme } = useTheme();

  return (
    <button
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "10px",
        border: "1px solid gray",
        cursor: "pointer",
      }}
    >
      My current theme is {theme.toUpperCase()}
    </button>
  );
}