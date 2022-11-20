import React from 'react';
import { Link } from 'react-router-dom';
import CauruselForModals from './CauruselForModals';

export default function ModalContent({ card }) {
  return (
    <div className="content is-normal">
      <div style={{ m: '40px auto 40px' }}>
        {card?.id && <CauruselForModals card={card} />}
        {/* <img src={card?.image} className="card-img-top" alt="img" height="60px" /> */}
      </div>
      <br />
      <p style={{ mt: '20px' }}>
        <strong>Порода</strong>
        :
        {' '}
        {card?.breed}
      </p>
      <p>
        <strong>Пол</strong>
        :
        {' '}
        {card?.gender}
      </p>
      <p>
        <strong>Цвет</strong>
        :
        {' '}
        {card?.color}
      </p>
      <p>
        <strong>Возраст</strong>
        :
        {' '}
        {card?.age}
      </p>
      <p>
        <strong>Информация о зворовье</strong>
        :
        {' '}
        {card?.med_info}
      </p>
      <p>
        <strong>О животном</strong>
        :
        {' '}
        {card?.about}
      </p>
      {!card?.price_category === 'free' && (
        <p>
          <strong>Цена</strong>
          :
          {' '}
          {card?.price}
        </p>
      )}
      {!card?.period_category === 'forever' && (
        <p>
          <strong>Период передержки животного</strong>
          :
          {' '}
          {card?.period}
        </p>
      )}
      <p>
        <Link to={`/profile/${card?.userId}`}><strong style={{ color: 'blue' }}>Профиль хозяина</strong></Link>
      </p>
    </div>
  );
}
