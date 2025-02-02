import React from "react";
import './NavBar.scss';
import { useTheme } from "../../hooks/useTheme";

interface Props {}

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
      <li className="Nav__list-item list-item"><a href="" className="Nav__link">Quem Somos</a></li>
      <li className="Nav__list-item list-item"><a href="" className="Nav__link">O que fazemos</a></li>
      <li className="Nav__list-item list-item"><a href="" className="Nav__link">Projetos</a></li>
      <li className="Nav__list-item list-item"><a href="" className="Nav__link">Contatos</a></li>
    </ul>
    {/* <ThemeToggler /> */}
  </nav>
  );
}