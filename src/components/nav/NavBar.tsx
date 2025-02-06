import React from "react";
import './NavBar.scss';
import { useTheme } from "../../hooks/useTheme";

interface Props { }

export const NavBar: React.FC<Props> = () => {
  const { theme } = useTheme();

  return (
    <nav
      className="Header__nav Nav"
      style={{
        color: theme === "light" ? "#2e2e2e" : "#fefefe",
      }}
    >
      <ul className="Nav__list">
        <li className="Nav__list-item list-item"><a href="#about-us" className="Nav__link">Quem Somos</a></li>
        <li className="Nav__list-item list-item"><a href="#our-history" className="Nav__link">Nossa História</a></li>
        <li className="Nav__list-item list-item"><a href="#our-mission" className="Nav__link">Nossa Missão</a></li>
        <li className="Nav__list-item list-item"><a href="#projects" className="Nav__link">Projetos</a></li>
        <li className="Nav__list-item list-item"><a href="#contact" className="Nav__link">Contato</a></li>
        {/* <li className="Nav__list-item list-item"><a href="#gallery" className="Nav__link">Galeria</a></li> */}
        {/* <li className="Nav__list-item list-item"><a href="#contact" className="Nav__link">Contato</a></li> */}
      </ul>
      {/* <ThemeToggler /> */}
    </nav>
  );
}