import React from "react";
import './Home.scss';
import { useTheme } from "../../hooks/useTheme";
import { ControlledCarousel } from "../../components/carousel/ControlledCarousel";
import { Section } from "../../components/section/Section";
import { Card } from "../../components/card/Card";


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
          <div id="about-us" className="section__about-us">
            <Section
              title="Quem Somos"
              text="O Coletivo Cafeína é uma organização sem fins lucrativos dedicada a promover a transformação social por meio da arte, cultura e ação social. Nosso trabalho se baseia na valorização da diversidade cultural, na criação de espaços de empoderamento e formação, e em ações que envolvem as áreas cultural, educacional, socioambiental e técnico-científica. Acreditamos no poder da arte como motor de mudanças e buscamos ser uma força transformadora, expandindo nossa atuação e incentivando projetos que promovam a justiça social, a educação e a proteção ambiental, com o objetivo de construir uma sociedade mais justa, integrada e que celebre a pluralidade cultural."
              side="LEFT"
              imageUrl="../../../public/img/hoje-e-dia-de-rock-5.2.jpg"
            />
          </div>

          <div id="our-history" className="section__our-history">
            <Section
              title="Nossa História"
              text="Fundado em 2014, o Coletivo Cafeína tem sido um pilar da cena cultural na região sul fluminense, com destaque para a produção do Festival Hoje é Dia de Rock, que se tornou um dos maiores e mais inclusivos eventos da área, reunindo grandes nomes do rock nacional como Medulla, El Efecto e Teco Martins (Rancore), além de realizar ações solidárias. O Coletivo também é responsável por projetos como o documentário 'Hoje é Dia de Rock', o 'Caninha Verde' em Vassouras, e a Cafeína Live Session, uma série de gravações de shows ao vivo. Além disso, desenvolve o projeto TurisMendes, em parceria com a Secretaria de Turismo de Mendes, promovendo a cidade como um ponto turístico cultural."
              side="RIGHT"
              imageUrl="../../../public/img/hoje-e-dia-de-rock-3-cartaz-no-palco.png
              "
            />
          </div>

          <div id="our-mission" className="section__what-we-do">
            <Section
              title="Nossa Missão"
              text="A missão do Coletivo Cafeína é promover a cultura como força motriz de desenvolvimento e transformação social. Buscamos criar espaços de manifestação artística, fortalecer a memória e identidade da região, gerar oportunidades para artistas e agentes culturais e impulsionar a economia criativa. Através da arte, do conhecimento e da colaboração, queremos ampliar o acesso à cultura, conectar pessoas e consolidar o Vale do Café como um polo cultural vivo e inovador."
              side="LEFT"
              imageUrl="../../../public/img/hoje-e-dia-de-rock-3.1.png"
            />
          </div>

          <div id="projects" className="section__projects">
            <Section title="Projetos" />

            <div className="Home__cards-wrapper">
              <Card
                title="Hoje é Dia de Rock"
                description={`"Hoje é Dia de Rock" é um documentário que retrata a relação de Mendes com o rock nacional, desde os anos 1960 até o surgimento do Festival Hoje é Dia de Rock, o maior evento de bandas autorais do Vale do Café fluminense.

A cidade recebeu nomes como Bi Ribeiro (Paralamas), Jander Bilaphra (Plebe Rude) e Renato Rocha (Legião Urbana), que foram morar na cidade, ajudando a fortalecer a cena local e inspiraram o surgimento de bandas autorais, como a banda Atrito.

O documentário também destaca o festival, que abriu espaço para bandas importantes da cena underground brasileira, como Menores Atos e Ventre (Lollapalooza) e Medulla e Rancore (MTV), consolidando Mendes como um polo do rock independente.`}
                photoSide="LEFT"
                cardImage="../../../public/img/nova-logo1-hoje-e-dia-de-rock.png"
                linkUrl="https://www.youtube.com/watch?v=S2V36swLbnw"
              />

              <Card
                title="A Caninha Verde de Vassouras"
                description={`"A Caninha Verde de Vassouras" é um mini documentário produzido pelo Coletivo Cafeína, que resgata a história e tradição da caninha verde na cidade. Com depoimentos de moradores antigos, como Seu Manoel, o filme valoriza a cultura local e sua identidade.

Realizado com recursos do Edital Paulo Gustavo, o documentário celebra a memória e o saber popular, mantendo viva essa tradição.`}
                photoSide="RIGHT"
                cardImage="../../../public/img/imagem-card-doc-caninha.png"
                linkUrl="https://www.youtube.com/watch?v=1-PaTCTfoQE&t=77s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}