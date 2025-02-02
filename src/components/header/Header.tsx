import React, { useState } from "react";
import "./Header.scss";
import { useTheme } from "../../hooks/useTheme";
import { NavBar } from "../nav/NavBar";
import { FiMenu, FiX } from "react-icons/fi";

import logoLight from "../../assets/logo-light.png";
import logoDark from "../../assets/logo-dark.png";

interface Props {}

export const Header: React.FC<Props> = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="Header"
      style={{
        background: theme === "light" ? "#fefefe" : "#2e2e2e",
      }}
    >
      <div className="app-container">
        <div className="Header__content">
          <img
            className="Header__logo"
            src={theme === "light" ? logoLight : logoDark}
            alt="Coletivo Cafeína Logo"
          />

          {/* Ícone do menu burger (Mobile/Tablet) */}
          <button
            className={`menu-icon ${menuOpen ? "hide" : ""}`} // Adiciona a classe 'hide' quando o menu está aberto
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>

          {/* Menu lateral (Mobile/Tablet) */}
          <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <button className="close-menu" onClick={() => setMenuOpen(false)}>
              <FiX size={35} />
            </button>

            <a href="#quem-somos" onClick={() => setMenuOpen(false)}>Quem Somos</a>
            <a href="#o-que-fazemos" onClick={() => setMenuOpen(false)}>O Que Fazemos</a>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>

          {/* Menu Desktop */}
          <NavBar />
        </div>
      </div>
    </header>
  );
};
