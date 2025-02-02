import React from "react";
import './Home.scss';
import { useTheme } from "../../hooks/useTheme";
import { ControlledCarousel } from "../../components/carousel/ControlledCarousel";
import { Section } from "../../components/section/Section";

interface Props {

}

export const Home: React.FC<Props> = () => {
  const { theme } = useTheme();

  return (
    <div
      className="Home"
      style={{
        background: theme === "light" ? "#fefefe" : "#2e2e2e",
        color: theme === "light" ? "#2e2e2e" : "#fefefe",
      }}
    >

      <div className="app-container">

        < ControlledCarousel />
        <div className="Home__content">
          <Section
            title="Quem somos"
            text="O Coletivo Cafeína é uma organização sem fins lucrativos,  de caráter artístico, cultural, educacional, socioambiental, técnico-científico, informativo, organizacional, recreativo e promocional, com sede em Vassouras, na região do Vale do Café Fluminense.  Somos um grupo altamente comprometidas na realização e apoio de programas, projetos e ações que tem como eixos estratégicos a Cultura, comunicação, direitos humanos, meio ambiente e a educação/formação livre para construção de uma sociedade mais colaborativa, mais justa e igualitária e que valorize a diversidade cultural enquanto patrimônio da humanidade."
          />
          <Section
            title="O que fazemos"
            text="A Associação Grupo Cultural Coletivo Cafeína é responsável pela realização de projetos e ações regionais, com ênfase nas áreas de cultura,  comunicação e direitos humanos. Desenvolvemos projetos em parceria com o poder público, com organizações da sociedade civil, além de empresas privadas.  São projetos que tem como objetivo promover a formação livre dos envolvidos, o intercâmbio cultural e a valorização da diversidade cultural brasileira, assim como valores e técnicas relacionadas à defesa de direitos humanos, ambientais e à articulação de redes solidárias de colaboração."
          />

          <Section
            title="Projetos"
          />
          <section className="Home__section section section__audiovisuais-productions">
            <div className="Section__content">
              <div className="Section__card" style={{ padding: '.5rem' }}>
                <h3 className="card__title" style={{ textAlign: 'center' }}>Docucmentário Hoje é Dia de Rock</h3>
                <p className="card__description" style={{ textAlign: 'center' }}>
                  Documentário que conta a história do rock na cidade de Mendes e sobre a história do Festival Hoje é Dia de Rock, o maior festival de bandas autorais da região sul fluminense.
                </p>
                <div className="card__content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <iframe style={{ width: '90%', height: '200px', borderRadius: '.5rem' }} className="card__video" src="https://www.youtube.com/embed/S2V36swLbnw?si=l2h2zeshtiDZUElR" title="Docucmentário Hoje é Dia de Rock" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}