import React from "react";
import './Footer.scss';
import { useTheme } from "../../hooks/useTheme";

interface Props {}

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
          <img
            className="Footer__logo"
            src="https://f005.backblazeb2.com/file/site-coletivo-cafeina-bucket/coletivo-cafeina.png"
            alt="coletivo cafeina logo"
          />
          <p className="Footer__copyrigth">
            &copy; 2025 Coletivo Cafeína. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
