import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.scss';

const bannerImages = [
  {
    id: 1,
    title: 'Coletivo Cafeína',
    description: '',
    url: 'https://f005.backblazeb2.com/file/site-coletivo-cafeina-bucket/banner-1-site-coletivo.png',
    alt_description: 'Membros do Coletivo Cafeína cantando juntos',
  },
  {
    id: 2,
    title: 'Documentários',
    description: '',
    url: 'https://f005.backblazeb2.com/file/site-coletivo-cafeina-bucket/doc-caninha-verde.png',
    alt_description: 'Seu Manoel sendo entrevistado',
  },
  {
    id: 3,
    title: 'Cultura',
    description: '',
    url: 'https://coletivocultural.redelivre.org.br/files/2019/02/41693997834_4affab3184_k.jpg',
    alt_description: 'Roda de cultura',
  },
];

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='ControlledCarousel' activeIndex={index} onSelect={handleSelect}>
      {bannerImages.map((image) => (
        <Carousel.Item key={image.id}>
          <img className="d-block w-100" src={image.url} alt={image.alt_description} />
          <Carousel.Caption>
            <h3>{image.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
