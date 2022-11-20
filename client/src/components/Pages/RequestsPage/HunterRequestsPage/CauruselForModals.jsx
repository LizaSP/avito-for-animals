import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { CardMedia } from '@mui/material';

export default function CauruselForModals({ card }) {
  const items = [];
  for (let i = 0; i < JSON.parse(card?.images).length; i += 1) {
    items.push({
      src: `/images/${JSON.parse(card?.images)[i]}`,
      altText: '',
      caption: '',
      key: uuidv4(),
    });
  }
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
      key={item.key}

    >
      <CardMedia component="img" src={item.src} alt={item.altText} style={{ height: '400px', width: '800px' }} />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <Carousel
      key={card?.id}
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
