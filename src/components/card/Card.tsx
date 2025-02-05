import React from "react";
import './Card.scss';

type Props = {
  title: string;
  description: string;
  photoSide?: 'LEFT' | 'RIGHT';
  cardImage: string;
  linkUrl?: string;
}

export const Card: React.FC<Props> = ({ cardImage, description, photoSide, title, linkUrl }) => {
  return (
    <div className="Card">
      <a
        href={linkUrl}
        target="_blank"
        className={`Card__content  Section__content ${photoSide === 'LEFT' ? 'Card__content--left' : ''}`}
      >

        {photoSide === 'LEFT' ? (
          <>
            <div className="Card__image-box">
              <img
                src={cardImage}
                alt={title}
                className="Card__image"
              />
            </div>

            <div className="Card__infos-wrapper">
              <h3 className="Card__title">{title}</h3>
              <p className="Card__description">{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className={`Card__infos-wrapper ${photoSide === 'RIGHT' ? 'Card__infos-wrapper--right' : ''}`}>
              <h3 className="Card__title">{title}</h3>
              <p className="Card__description">{description}</p>
            </div>

            <div className="Card__image-box">
              <img
                src={cardImage}
                alt={title}
                className="Card__image"
              />
            </div>
          </>
        )}
      </a>
    </div>
  );
}

