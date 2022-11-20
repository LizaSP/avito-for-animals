import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'better-react-carousel';
import { Link } from 'react-router-dom';
import OneRequestCard from './OneRequestCard';

export default function RequestsList() {
  // const requests = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  const dispatch = useDispatch();
  const requests = useSelector((s) => s.requests);
  const user = useSelector((s) => s.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_REQUESTS', payload: user?.id });
  }, []);
  // console.log(requests);
  return (
    <div>
      {requests.length ? (
        <div>
          <div style={{
            fontSize: '40px', fontWeight: 'bolder', mb: '2em', ml: '5em',
          }}
          >
            Заявки
          </div>
          <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
            <div className="row gy-5 ">
              <Carousel cols={3} rows={1} gap={10} loop>

                {requests?.map((el) => (
                  <Carousel.Item key={el.id}>
                    <OneRequestCard key={el.id} card={el} />
                    {' '}
                  </Carousel.Item>
                ))}

              </Carousel>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', minHeight: 'calc(70vh - 300px)' }}>
          <h2
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px',
            }}
          >
            У Вас нет заявок.
            {' '}
            <Link to="/search" style={{ color: 'blue' }}>Добавить</Link>
          </h2>
        </div>
      )}
    </div>
  );
}
