/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { CardMedia, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import ModalContent from './ModalContent';
import { deleteFromAllFavouritesHumanById } from '../../../../redux/reducers/humanFavouritesReduser';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function OneFavouriteCard({ card }) {
  console.log('favourites', card);
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  // флаг для модалки
  const [active, setActive] = useState(false);
  const [send, setSend] = useState(false);
  // отправка заявки на животное
  const submitRequestHandler = async () => {
    dispatch({
      type: 'CREATE_REQUEST_FOR_HUMAN',
      payload: {
        owner_id: user?.id, hunter_id: card?.hunter_id, status: 'pending', hunter_reply: '',
      },
    });
    setSend(true);
  };
  const removeFromFavouriteHandler = async () => {
    dispatch({ type: 'REMOVE_FROM_FAVOURITES_HUMANS', payload: { owner_id: user?.id, hunter_id: card?.hunter_id } });
    dispatch(deleteFromAllFavouritesHumanById(card?.id));
  };
  return (
    <div className="col-3">
      <div className="card" style={{ width: '18rem', height: '390px' }}>
        <CardMedia component="img" src={`/images/${card?.User?.avatar}`} className="card-img-top" alt="img" style={{ height: '300px' }} />
        <div className="card-body">
          <h5 className="card-title">
            {card?.User?.firstName}
            {' '}
            {card?.User?.lastName}
          </h5>
          {card?.age && (
          <p className="card-text">
            Возраст:
            {' '}
            {card?.User?.age}
          </p>
          )}
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="#" className="button is-info" style={{ marginRight: '5%', width: '50%' }} onClick={() => setActive(!active)}>Информация</Link>
            <Checkbox checked onClick={removeFromFavouriteHandler} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error" />
          </div>

          <div className={active ? 'modal is-active' : 'modal'}>
            <div className="modal-background" onClick={() => setActive(!active)} />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">
                  {card?.User?.firstName}
                  {' '}
                  {card?.User?.lastName}
                </p>
                <button onClick={() => setActive(!active)} className="delete" aria-label="close" />
              </header>
              <section className="modal-card-body">
                <div className="card-body">

                  <ModalContent card={card?.User} />

                </div>
              </section>
              {/* {user && user?.id === card.user_id && ( */}
              <footer className="modal-card-foot">
                <div className="field is-grouped">
                  <div className="control">
                    <button type="button" disabled={send} onClick={submitRequestHandler} className={send ? 'button' : 'button is-info'}>Оставить заявку</button>
                  </div>
                  <div className="control">
                    <button onClick={() => setActive(!active)} className="button">Закрыть</button>
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
