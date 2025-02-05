import React, { useEffect, useState } from "react";
import "./Header.scss";
import { useTheme } from "../../hooks/useTheme";
import { NavBar } from "../nav/NavBar";
import { FiMenu, FiX } from "react-icons/fi";

const logoLight = "https://f005.backblazeb2.com/file/site-coletivo-cafeina-bucket/logo-light.png";
const logoDark = "https://f005.backblazeb2.com/file/site-coletivo-cafeina-bucket/logo-dark.png";

interface Props { }

export const Header: React.FC<Props> = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`Header ${scrolled ? 'scrolled' : ''}`}
      style={{
        background: theme === "light" ? "#fefefe" : "#2e2e2e",
      }}
    >
      <div className="app-container">
        <div className={`Header__content ${scrolled ? 'scrolled' : ''}`}>
          <a href="#" className="Header__logo--link">
            <img
              className={`Header__logo ${scrolled ? 'scrolled' : ''}`}
              src={theme === "light" ? logoLight : logoDark}
              alt="Coletivo Cafeína Logo"
            />
          </a>

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

            <a href="#about-us" onClick={() => setMenuOpen(false)}>Quem Somos</a>
            <a href="#our-history" onClick={() => setMenuOpen(false)}>Nossa História</a>
            <a href="#our-mission" onClick={() => setMenuOpen(false)}>Nossa Missão</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
            {/* <a href="#gallery" onClick={() => setMenuOpen(false)}>Galeria</a> */}
            {/* <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a> */}
          </nav>

          {/* Menu Desktop */}
          <NavBar />
        </div>
      </div>
    </header>
  );
};
