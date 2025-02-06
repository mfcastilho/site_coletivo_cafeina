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
          <div id="about-us" className="Home__section--wrapper">
            <div className="Home__about-us">
              <Section
                title="Quem Somos"
                text="O Coletivo Cafeína é uma organização sem fins lucrativos dedicada a promover a transformação social por meio da arte, cultura e ação social. Nosso trabalho se baseia na valorização da diversidade cultural, na criação de espaços de empoderamento e formação, e em ações que envolvem as áreas cultural, educacional, socioambiental e técnico-científica. Acreditamos no poder da arte como motor de mudanças e buscamos ser uma força transformadora, expandindo nossa atuação e incentivando projetos que promovam a justiça social, a educação e a proteção ambiental, com o objetivo de construir uma sociedade mais justa, integrada e que celebre a pluralidade cultural."
                side="LEFT"
                imageUrl="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/hoje-e-dia-de-rock-5.2.jpg"
              />
            </div>
          </div>

          <div id="our-history" className="Home__section--wrapper">
            <div className="Home__our-history" >
              <Section
                title="Nossa História"
                text="Fundado em 2014, o Coletivo Cafeína tem sido um pilar da cena cultural na região sul fluminense, com destaque para a produção do Festival Hoje é Dia de Rock, que se tornou um dos maiores e mais inclusivos eventos da área, reunindo grandes nomes do rock nacional como Medulla, El Efecto e Teco Martins (Rancore), além de realizar ações solidárias. O Coletivo também é responsável por projetos como o documentário 'Hoje é Dia de Rock', o 'Caninha Verde' em Vassouras, e a Cafeína Live Session, uma série de gravações de shows ao vivo. Além disso, desenvolve o projeto TurisMendes, em parceria com a Secretaria de Turismo de Mendes, promovendo a cidade como um ponto turístico cultural."
                side="RIGHT"
                imageUrl="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/hoje-e-dia-de-rock-3-cartaz-no-palco.png"
              />
            </div>
          </div>

          <div id="our-mission" className="Home__section--wrapper">
            <div className="Home__what-we-do">
              <Section
                title="Nossa Missão"
                text="A missão do Coletivo Cafeína é promover a cultura como força motriz de desenvolvimento e transformação social. Buscamos criar espaços de manifestação artística, fortalecer a memória e identidade da região, gerar oportunidades para artistas e agentes culturais e impulsionar a economia criativa. Através da arte, do conhecimento e da colaboração, queremos ampliar o acesso à cultura, conectar pessoas e consolidar o Vale do Café como um polo cultural vivo e inovador."
                side="LEFT"
                imageUrl="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/hoje-e-dia-de-rock-3.1.png"
              />
            </div>
          </div>

          <div id="projects" className="Home__section--wrapper">
            <div className="Home__projects">
              <Section title="Projetos" />

              <div className="Home__cards-wrapper">
                <Card
                  title="TurisMendes: A mapa da cultura mendense"
                  description={`O TurisMendes é um projeto que conectará Mendes-RJ ao seu patrimônio cultural, histórico, artístico e educacional. Desenvolvido para a Secretaria de Turismo, é viabilizado pela parceria entre o Coletivo Cafeína e a SomosDev Tech.

O projeto inclui uma plataforma online interativa, placas turísticas com QR Codes – que permitirão acesso a fotos em 360º, mapas interativos e informações sobre pontos culturais da cidade – e uma plataforma de gerenciamento, onde os administradores poderão registrar, editar e excluir dados do sistema.

Mais que uma iniciativa pontual, o TurisMendes nasce para deixar um legado duradouro, fortalecendo o turismo e a cultura regional e consolidando Mendes como um destino vibrante. O lançamento está previsto para maio de 2025`}
                  photoSide="LEFT"
                  cardImage="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/turismendes-logo-ideia4.png"
                  linkUrl="#"
                />

                <Card
                  title="A Caninha Verde de Vassouras"
                  description={`"A Caninha Verde de Vassouras" é um mini documentário produzido pelo Coletivo Cafeína, que resgata a história e tradição da caninha verde na cidade. Com depoimentos de moradores antigos, como Seu Manoel, o filme valoriza a cultura local e sua identidade.

Realizado com recursos do Edital Paulo Gustavo, o documentário celebra a memória e o saber popular, mantendo viva essa tradição.`}
                  photoSide="RIGHT"
                  cardImage="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/imagem-card-doc-caninha.png"
                  linkUrl="https://www.youtube.com/watch?v=1-PaTCTfoQE&t=78s"
                />

                <Card
                  title="Hoje é Dia de Rock"
                  description={`"Hoje é Dia de Rock" é um documentário que retrata a relação de Mendes com o rock nacional, desde os anos 1960 até o surgimento do Festival Hoje é Dia de Rock, o maior evento de bandas autorais do Vale do Café fluminense.

A cidade recebeu nomes como Bi Ribeiro (Paralamas), Jander Bilaphra (Plebe Rude) e Renato Rocha (Legião Urbana), que foram morar na cidade, ajudando a fortalecer a cena local e inspiraram o surgimento de bandas autorais, como a banda Atrito.

O documentário também destaca o festival, que abriu espaço para bandas importantes da cena underground brasileira, como Menores Atos e Ventre (Lollapalooza) e Medulla e Teco Martins (Rancore), consolidando Mendes como um polo do rock independente.`}
                  photoSide="LEFT"
                  cardImage="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/nova-logo1-hoje-e-dia-de-rock.png"
                  linkUrl="https://www.youtube.com/watch?v=S2V36swLbnw"
                />

                <Card
                  title="Cafeína Sessions"
                  description={`O Cafeína Sessions é um espaço para músicos autorais registrarem suas performances em Live Sessions gravadas em estúdio profissional. As apresentações tem captação de áudio e vídeo de alta qualidade, passando por mixagem e masterização, e sendoo divulgadas em plataformas digitais e eventos locais.

O projeto busca dar visibilidade aos artistas da região, fortalecer a cena musical local e criar um acervo que valorize a diversidade artística. `}
                  photoSide="RIGHT"
                  cardImage="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/cafeina-live-session-card1.png"
                  linkUrl="https://www.youtube.com/watch?v=mwrE8qzwfdQ&t=1s"
                />

                <Card
                  title="Festival Hoje é Dia de Rock"
                  description={`O Hoje é Dia de Rock é um festival independente que marcou a cena cultural de Mendes-RJ e Vassouras-RJ ao longo de cinco edições, reunindo grandes nomes do rock alternativo nacional. Desde 2010, o evento já recebeu bandas como Medulla, El Efecto, Teco Martins (Rancore), Menores Atos, Ventre, Canto Cego e muitas outras, algumas das quais seguiram para grandes palcos como Lollapalooza e Rock in Rio.

Além da música, o festival sempre integrou arte em diversas formas, com exposições, teatro, oficinas e intervenções. Em 2024, voltou à ativa com nomes como Plastic Fire, Estorvo, O Nilton e Traste.

Agora, o Hoje é Dia de Rock se prepara para mais uma edição em maio de 2025, reafirmando seu papel como um espaço essencial para a cena independente.`}
                  photoSide="LEFT"
                  cardImage="https://storage.googleapis.com/api-flamengo/coletivo-cafeina/imagens-coletivo/festival-card-1.png"
                  linkUrl="https://hojeediaderock.netlify.app/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}