import React from "react";
import './Footer.scss';
import { useTheme } from "../../hooks/useTheme";

interface Props {

}

export const Footer: React.FC<Props> = () => {
  const { theme } = useTheme();

  return (
    <div
      className="Footer"
      style={{
        background: theme === "light" ? "#2e2e2e" : "#fefefe",
      }}
    >
      <div className="app-container">
        <div className="Footer__content">
        <img className="Header__logo Footer__Logo" src="src\assets\Coletivo Cafeína.png" alt="coletivo cafeina logo" />
        </div>
      </div>
    </div>
  );
}