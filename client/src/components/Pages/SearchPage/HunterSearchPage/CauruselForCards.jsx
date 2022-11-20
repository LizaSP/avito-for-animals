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

// const items1 = [
//   {
//     src: 'https://static.mk.ru/upload/entities/2021/06/16/10/articles/facebookPicture/8b/b8/b5/f7/d5a31497c14d4e2bc37f26d7a9cf712d.jpg',
//     altText: 'Slide 1',
//     caption: 'Slide 1',
//     key: 1,
//   },
//   {
//     src: 'https://shutniks.com/wp-content/uploads/2019/12/smeshnye_mordy_kotov_27_02123437.jpg',
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//     key: 2,
//   },
//   {
//     src: 'https://trikky.ru/wp-content/blogs.dir/1/files/2018/03/kotyi.jpg',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     key: 3,
//   },
//   {
//     src: 'https://s00.yaplakal.com/pics/pics_original/2/3/4/12863432.jpg',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     key: 4,
//   },
//   {
//     src: 'https://img.fonwall.ru/o/jm/rigiy-kot-prelestnaya-ulibka.jpg?route=mid&h=750',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     key: 5,
//   },
// ];

export default function CauruselForCards({ card }) {
  const items = [];
  for (let i = 0; i < JSON.parse(card?.images).length; i += 1) {
    // console.log(JSON.parse(card?.images)[i]);
    items.push({
      src: `/images/${JSON.parse(card?.images)[i]}`,
      altText: '',
      caption: '',
      key: uuidv4(),
    });
    console.log(items[0].src);
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
      key={item?.key}

    >
      <CardMedia component="img" src={item?.src} alt={item?.altText} style={{ height: '300px', width: '430px', borderRadius: '5px' }} />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <Carousel
      key={uuidv4()}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      style={{
        textAlign: 'center',
        borderRadius: '5px',
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
