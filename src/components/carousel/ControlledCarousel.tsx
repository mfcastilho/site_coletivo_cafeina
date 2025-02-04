import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.scss';

const bannerImages = [
  {
    id: 1,
    title: 'Coletivo Cafeína',
    description: '',
    url: '../../../public/img/banner-1-site-coletivo.png',
    alt_description: 'First slide image',
  },
  {
    id: 2,
    title: 'Documentários',
    description: '',
    url: '../../../public/img/doc-caninha-verde.png',
    alt_description: 'Second slide image',
  },
  {
    id: 3,
    title: 'Cultura',
    description: '',
    url: 'https://coletivocultural.redelivre.org.br/files/2019/02/41693997834_4affab3184_k.jpg',
    alt_description: 'Third slide image',
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
