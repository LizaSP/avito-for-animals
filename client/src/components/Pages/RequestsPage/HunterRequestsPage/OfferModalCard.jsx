/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive, setCard } from '../../../../redux/reducers/offerModalCardReducer';
import OfferModalContent from './OfferModalContent';

export default function OfferofferModalCard() {
  const dispatch = useDispatch();
  const offerModal = useSelector((s) => s.offerModal);
  console.log({ offerModal });
  return (
    <div className={offerModal?.active ? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={() => { dispatch(setCard({})); dispatch(setActive()); }} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{`Заявка № ${offerModal?.card?.id}`}</p>
          <button onClick={() => { dispatch(setCard({})); dispatch(setActive()); }} className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          <div className="card-body">

            <OfferModalContent card={offerModal?.card?.User} />

          </div>
        </section>
        {/* {user && user?.id === card.user_id && ( */}
        <footer className="modal-card-foot">
          <div className="field is-grouped">
            <div className="control">
              <Link to={`/offers/${offerModal?.card?.id}`} onClick={() => { dispatch(setCard({})); dispatch(setActive()); }}><button type="button" className="button is-info">Подробнее</button></Link>
            </div>
            <div className="control">
              <button onClick={() => { dispatch(setCard({})); dispatch(setActive()); }} className="button">Закрыть</button>
            </div>
          </div>
        </footer>
        {/* )} */}
      </div>
    </div>
  );
}
