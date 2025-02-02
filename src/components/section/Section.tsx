import React from "react";
import './Section.scss';

type Props = {
  title: string;
  text?: string;
}

export const Section: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="Section">
      <section className="Home__section Section__content">
        <h2 className="Section__title">{title}</h2>
        <p className="Section_text">{text}</p>
      </section>
    </div>
  );
}