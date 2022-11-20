/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import ModalContent from '../../SearchPage/HunterSearchPage/ModalContent';
import CauruselForCards from '../../SearchPage/HunterSearchPage/CauruselForCards';
import { deleteFromAllFavouritesById } from '../../../../redux/reducers/favouritesReducer';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function OneFavouriteCard({ card }) {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  // флаг для модалки
  const [active, setActive] = useState(false);
  const [send, setSend] = useState(false);
  // отправка заявки на животное
  const submitRequestHandler = async () => {
    dispatch({ type: 'CREATE_REQUEST', payload: { animal_id: card?.id, hunter_id: user?.id, status: 'pending' } });
    setSend(true);
  };
  const removeFromFavouriteHandler = async () => {
    dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: { user_id: user?.id, animal_id: card?.Animal.id } });
    // dispatch({ type: 'FETCH_USER_FAVOURITES', payload: user?.id });
    dispatch(deleteFromAllFavouritesById(card?.id));
    // setDeleted((prev) => !prev);
  };
  return (
    <div className="col-3">
      <div className="card" style={{ width: '18rem', height: '490px' }}>
        <CauruselForCards card={card?.Animal} />
        {/* <img src={card?.image} className="card-img-top" alt="img" height="350px" /> */}
        <div className="card-body">
          <h5 className="card-title">
            {card?.Animal?.name}
          </h5>
          <p className="card-text">
            Порода:
            {' '}
            {card?.Animal?.breed}
          </p>
          <p className="card-text">
            Возраст:
            {' '}
            {card?.Animal?.age}
          </p>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="#" className="button is-info" style={{ marginRight: '5%', width: '40%' }} onClick={() => setActive(!active)}>Подробнее</Link>
            <Checkbox checked onClick={removeFromFavouriteHandler} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error" />
          </div>

          <div className={active ? 'modal is-active' : 'modal'}>
            <div className="modal-background" onClick={() => setActive(!active)} />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{card?.Animal?.name}</p>
                <button onClick={() => setActive(!active)} className="delete" aria-label="close" />
              </header>
              <section className="modal-card-body">
                <div className="card-body">

                  <ModalContent card={card?.Animal} />

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
