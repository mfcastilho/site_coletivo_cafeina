import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.scss';

const bannerImages = [
  {
    id: 1,
    title: 'First slide label',
    description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    url: 'https://coletivocultural.redelivre.org.br/files/2019/01/photo_2018-06-24_13-32-44.jpg',
    alt_description: 'First slide image',
  },
  {
    id: 2,
    title: 'Second slide label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'https://coletivocultural.redelivre.org.br/files/2019/02/41693997834_4affab3184_k.jpg',
    alt_description: 'Second slide image',
  },
  {
    id: 3,
    title: 'Third slide label',
    description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    url: 'https://coletivocultural.redelivre.org.br/files/2019/02/31548908837_3c49740f4c_b.jpg',
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
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
