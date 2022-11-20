/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
import { CardMedia } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive, setCard } from '../../../../redux/reducers/modalCardReducer';

export default function HunterInfoCard({ request }) {
  const dispatch = useDispatch();
  // console.log(request);

  return (
    <div style={{ paddingLeft: '10%' }}>
      <div className="card" style={{ width: '18rem', height: '460px' }}>
        <CardMedia component="img" src={`/images/${request?.User?.avatar}`} className="card-img-top" alt="img" style={{ height: '286px' }} />
        <div className="card-body">
          <h5 className="card-title">
            {request?.User?.firstName}
            {' '}
            {request?.User?.lastName}
          </h5>
          <p className="card-text">
            Статус заявки:
            {' '}
            {request?.status === 'pending' ? 'На рассмотрении' : request?.status === 'denied' ? 'Отказано' : 'Одобрена'}
          </p>
          <br />
          <div>
            <Link to="#" className="button is-info" style={{ marginRight: '5%', width: '40%' }} onClick={() => { dispatch(setCard(request)); dispatch(setActive()); }}>Подробнее</Link>
          </div>
          {/* <ModalCard setActive={setActive} card={card} active={active} /> */}
        </div>
      </div>
    </div>
  );
}
