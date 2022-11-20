import { CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ModalContent({ request }) {
  return (
    <div className="content is-normal">
      <div style={{ m: '40px auto 40px' }}>
        <CardMedia component="img" src={`/images/${request?.User?.avatar}`} className="request-img-top" alt="img" style={{ height: '400px' }} />
      </div>
      <br />
      <p style={{ mt: '20px' }}>
        <strong>Имя</strong>
        :
        {' '}
        {request?.User?.firstName}
        {' '}
        {request?.User?.lastName}
      </p>
      <p>
        <strong>Пол</strong>
        :
        {' '}
        {request?.User?.gender}
      </p>
      <p>
        <strong>Место проживания</strong>
        :
        {' '}
        {request?.User?.location}
      </p>
      <p>
        <strong>Возраст</strong>
        :
        {' '}
        {request?.User?.age}
      </p>
      <p>
        <strong>Информация о себе</strong>
        :
        {' '}
        {request?.User?.info }
      </p>
      <p>
        <strong>Опыт с животными</strong>
        :
        {' '}
        {request?.User?.status === 'yes' ? 'Есть опыт' : 'Отсутствует' }
      </p>
      <p>
        <Link to={`/profile/${request?.User?.id}`}><strong style={{ color: 'lightblue' }}>Смотреть профиль</strong></Link>
      </p>
    </div>
  );
}
