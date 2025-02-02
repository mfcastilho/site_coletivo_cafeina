import React from 'react';
import './MenuBurger.scss';

type Props = {};

export const MenuNav: React.FC<Props> = () => {
  return (
    <div className="MenuNav">
      <ul className="MenuNav__list">
        <li className="MenuNav__list-item list-item"><a href="" className="MenuNav__link">Quem Somos</a></li>
        <li className="MenuNav__list-item list-item"><a href="" className="MenuNav__link">O que fazemos</a></li>
        <li className="MenuNav__list-item list-item"><a href="" className="MenuNav__link">Projetos</a></li>
        <li className="MenuNav__list-item list-item"><a href="" className="MenuNav__link">Contatos</a></li>
      </ul>
    </div>
  );
}