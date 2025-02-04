import React from "react";
import './Section.scss';

type Props = {
  title: string;
  text?: string;
  side?: 'LEFT' | 'RIGHT';
  imageUrl?: string;
}

export const Section: React.FC<Props> = ({ title, text, side, imageUrl }) => {
  return (
    <>
      {title !== 'Projetos' ? (
        <div className="Section">
          <section className={`Home__section Section__content ${side === 'LEFT' ? 'Section__content--left' : ''}`}>
            {side === 'LEFT' ? (
              <>
                <img src={imageUrl} alt="" className="Section__img" />

                <div className="Section__infos-box">
                  <h2 className="Section__title">{title}</h2>
                  <p className="Section_text">{text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="Section__infos-box">
                  <h2 className="Section__title">{title}</h2>
                  <p className="Section_text">{text}</p>
                </div>

                <img src={imageUrl} alt="" className="Section__img" />
              </>
            )}
          </section>
        </div>
      ) : (
        <div className="Section">
          <section className={`Card__section`}>
            <h2 className="Section__title">{title}</h2>
          </section>
        </div>
      )}
    </>
  );
};
