/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive, setCard } from '../../../../redux/reducers/modalCardReducer';
import ModalContent from './ModalContent';

export default function ModalCard() {
  const dispatch = useDispatch();
  const modal = useSelector((s) => s.modal);
  // console.log(modal);
  return (
    <div className={modal?.active ? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={() => { dispatch(setCard({})); dispatch(setActive()); }} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{`Заявка № ${modal?.card?.id}`}</p>
          <button onClick={() => { dispatch(setCard({})); dispatch(setActive()); }} className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          <div className="card-body">

            <ModalContent request={modal?.card} />

          </div>
        </section>
        {/* {user && user?.id === card.user_id && ( */}
        <footer className="modal-card-foot">
          <div className="field is-grouped">
            <div className="control">
              <Link to={`/requests/${modal?.card?.id}`} onClick={() => { dispatch(setCard({})); dispatch(setActive()); }}><button type="button" className="button is-info">Вся информация</button></Link>
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
