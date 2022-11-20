import React from 'react';
import { Link } from 'react-router-dom';

export default function OfferModalContent({ card }) {
  return (
    <div className="content is-normal">
      <div style={{ m: '40px auto 40px' }}>
        <img
          src={`/images/${card?.avatar}`}
          className="card-img-top"
          alt="img"
          style={{
            height: '400px',
            width: '450px',
            marginLeft: '60px',
          }}
        />
      </div>
      <br />
      <p style={{ mt: '20px' }}>
        <strong>Имя</strong>
        :
        {' '}
        {card?.firstName}
        {' '}
        {card?.lastName}
      </p>
      {card?.age && (
      <p>
        Возраст:
        {' '}
        {card?.age}
      </p>
      )}
      {card?.gender && (
      <p>
        Пол:
        {' '}
        {card?.gender}
      </p>
      )}
      {card?.location && (
      <p>
        Место проживания:
        {' '}
        {card?.location}
      </p>
      )}
      {card?.info && (
      <p>
        Информация о себе:
        {' '}
        {card?.info}
      </p>
      )}
      {card?.status && (
      <p>
        Опыт с животными:
        {' '}
        {card?.status === 'yes' ? 'Есть опыт' : 'Отсутствует' }
      </p>
      )}
      <p>
        <Link to={`/offers/${card?.id}`}><strong style={{ color: 'lightblue' }}>Подробнее</strong></Link>
      </p>
    </div>
  );
}
