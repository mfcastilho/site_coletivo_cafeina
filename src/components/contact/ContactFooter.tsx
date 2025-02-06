import React from 'react';
import './ContacFooter.scss';

type Props = {}

export const ContactFooter: React.FC<Props> = () => {
  return (
    <div className="ContactFooter">
      <div className="app-container">
        <div className="ContactFooter__content">
          <h2 className="ContactFooter__title">Contato</h2>

          <div className="ContactFooter__infos--wrapper">
            <div className="ContactFooter__contact-us">
              <h3 className="ContactFooter__sub-title">Nossos contatos</h3>

              <div className="ContactFooter__contact-us--wrapper">
                <h4 className="contact-us__title">E-mail</h4>
                <a href='mailto:coletivo.cafeina@gmail.com' className="contact-us__info">coletivocafeina.contato@gmail.com</a>
              </div>

              <div className="ContactFooter__contact-us--wrapper">
                <h4 className="contact-us__title">Telefone</h4>
                <a href='tel:+5521973224234' className="contact-us__info">+55 21 97322-4234</a>
                <a href='tel:+5532998235911' className="contact-us__info">+55 32 99823-5911</a>
              </div>
            </div>

            <div className="ContactFooter__follow-us">
              <h3 className="ContactFooter__sub-title">Siga-nos</h3>

              <div className="ContactFooter__social-medias--wrapper">
                <a href="https://www.instagram.com/coletivo.cafeina/" target='_blank' className="ContactFooter__social-media instagram" aria-label="Instagram"></a>
                <a href="https://www.facebook.com/coletivocafeina" target='_blank' className="ContactFooter__social-media facebook" aria-label="Facebook"></a>
                <a href="https://wa.me/5521973224234" target='_blank' className="ContactFooter__social-media whatsapp" aria-label="WhatsApp"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}