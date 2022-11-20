import { CardMedia } from '@mui/material';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://static.mk.ru/upload/entities/2021/06/16/10/articles/facebookPicture/8b/b8/b5/f7/d5a31497c14d4e2bc37f26d7a9cf712d.jpg',
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: 'https://funnymodo.com/wp-content/uploads/2016/09/1475258300_maxresdefault.jpg',
    altText: '',
    caption: '',
    key: 3,
  },
  {
    src: 'https://s00.yaplakal.com/pics/pics_original/2/3/4/12863432.jpg',
    altText: '',
    caption: '',
    key: 4,
  },
  {
    src: 'https://img.fonwall.ru/o/jm/rigiy-kot-prelestnaya-ulibka.jpg?route=mid&h=750',
    altText: '',
    caption: '',
    key: 5,
  },
  {
    src: 'https://4tololo.ru/sites/default/files/images/20181604131431_0.jpg',
    altText: '',
    caption: '',
    key: 5,
  },
];

export default function Carusel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}

    >
      <CardMedia component="img" src={item.src} alt={item.altText} style={{ opacity: '0.7', height: '700px', width: '1700px' }} />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      style={{
        textAlign: 'center',
      }}
      // {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
