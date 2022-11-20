import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'better-react-carousel';
// import { Link } from 'react-router-dom';
import OneOfferCard from './OneOfferCard';

export default function OffersList() {
  const dispatch = useDispatch();
  const hunterOffers = useSelector((s) => s.hunterOffers);
  const user = useSelector((s) => s.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_OFFERS', payload: user?.id });
  }, []);
  // console.log('hunterOffers', hunterOffers);
  return (
    <div>
      {hunterOffers.length ? (
        <>
          <div style={{
            fontSize: '40px', fontWeight: 'bolder', mb: '2em', ml: '5em',
          }}
          >
            Предложения
          </div>
          <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
            <div className="row gy-5 ">
              <Carousel cols={3} rows={1} gap={10} loop>

                {hunterOffers?.map((el) => (
                  <Carousel.Item key={el.id}>
                    <OneOfferCard key={el.id} card={el} />
                    {' '}
                  </Carousel.Item>
                ))}

              </Carousel>
            </div>
          </div>
        </>
      ) : (
        <div style={{ position: 'relative', minHeight: 'calc(70vh - 300px)' }}>
          <h2
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', textAlign: 'center',
            }}
          >
            У Вас нет предложений.
          </h2>
        </div>
      )}
    </div>
  );
}
