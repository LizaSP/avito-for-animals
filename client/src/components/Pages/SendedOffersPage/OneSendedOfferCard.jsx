/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardMedia, IconButton } from '@mui/material';
import axios from 'axios';
import HumanModalContent from './HumanModalContent';

export default function OneSendedOfferCard({ card }) {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  // флаг для модалки
  const [active, setActive] = useState(false);

  const removeFromRequests = async () => {
    dispatch({ type: 'REMOVE_FROM_HUMAN_REQUESTS', payload: { id: card?.id, owner_id: user?.id, hunter_id: card?.hunter_id } });
    // dispatch({ type: 'FETCH_USER_REQUESTS', payload: user?.id });
  };
  const [hunter, setHunter] = useState({});
  useEffect(() => {
    axios(`/api/humans/hunter/${card?.hunter_id}`)
      .then((res) => setHunter(res.data));
  }, []);

  return (
    <div className="col-3">
      <div className="card" style={{ width: '19rem', borderRadius: '5px', height: '450px' }}>
        <CardMedia component="img" src={`/images/${hunter?.avatar}`} className="card-img-top" alt="img" style={{ height: '300px' }} />
        <div className="card-body">
          <h5 className="card-title">
            {hunter?.firstName}
            {' '}
            {hunter?.lastName}
          </h5>
          <p className="card-text">
            Статус заявки:
            {' '}
            {card?.status === 'pending' ? 'На рассмотрении' : card?.status === 'denied' ? 'Отказано' : 'Одобрена'}
          </p>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="#" className="button is-info" style={{ marginRight: '5%', width: '45%' }} onClick={() => setActive(!active)}>Информация</Link>
            <IconButton onClick={removeFromRequests} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>

          <div className={active ? 'modal is-active' : 'modal'}>
            <div className="modal-background" onClick={() => setActive(!active)} />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">
                  {hunter?.firstName}
                  {' '}
                  {hunter?.lastName}
                </p>
                <button onClick={() => setActive(!active)} className="delete" aria-label="close" />
              </header>
              <section className="modal-card-body">
                <div className="card-body">

                  <HumanModalContent card={hunter} />

                </div>
              </section>
              {/* {user && user?.id === card.user_id && ( */}
              <footer className="modal-card-foot">
                <div className="field is-grouped" style={{ display: 'flex', alignItems: 'center' }}>
                  {card?.status === 'accepted' ? (
                    <div className="control" style={{ marginRight: '2em' }}>
                      <Link to={`/chat/${card?.id}`}>
                        <button type="button" className="button is-info">Открыть чат</button>
                      </Link>
                    </div>
                  ) : (
                    <div style={{ marginRight: '2em' }}>Дождитесь ответа</div>
                  )}
                  <div className="control">
                    <button onClick={() => setActive(!active)} className="button">Зактрыть</button>
                  </div>
                </div>
              </footer>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
