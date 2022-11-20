/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { setActive, setCard } from '../../../../redux/reducers/modalCardReducer';

import CauruselForCards from '../../SearchPage/HunterSearchPage/CauruselForCards';

export default function OneRequestCard({ card }) {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);

  const removeFromRequests = async () => {
    dispatch({ type: 'REMOVE_FROM_REQUESTS', payload: { hunter_id: user?.id, animal_id: card?.Animal.id } });
    // dispatch({ type: 'FETCH_USER_REQUESTS', payload: user?.id });
  };

  return (
    <div style={{ paddingLeft: '10%' }}>

      <div className="card" style={{ width: '18rem', height: '470px' }}>
        <CauruselForCards card={card?.Animal} />
        {/* <img src={card?.image} className="card-img-top" alt="img" height="350px" /> */}
        <div className="card-body">
          <h5 className="card-title">
            {card?.Animal.name}
          </h5>
          <p className="card-text">
            Статус заявки:
            {' '}
            {card?.status === 'pending' ? 'На рассмотрении' : card?.status === 'denied' ? 'Отказано' : 'Одобрена'}
          </p>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="#" className="button is-info" style={{ marginRight: '5%', width: '40%' }} onClick={() => { dispatch(setCard(card)); dispatch(setActive()); }}>Подробнее</Link>
            <IconButton onClick={removeFromRequests} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>
          {/* <ModalCard setActive={setActive} card={card} active={active} /> */}
        </div>
      </div>
    </div>

  );
}
