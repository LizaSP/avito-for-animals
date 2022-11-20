/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';

export default function OfferStatus({ offer }) {
  const user = useSelector((s) => s.user);
  // const modal = useSelector((s) => s.modal);
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [offer, setoffer] = useState({});

  // useEffect(() => {
  //   axios(`/offers/one/${id}`)
  //     .then((res) => setoffer(res.data));
  // }, []);

  // console.log(modal);
  const acceptedOwnerHandler = () => {
    dispatch({ type: 'OFFER_CHANGE_STATUS_FETCH', payload: { id, status: 'accepted' } });
  };

  const deniedOwnerHandler = () => {
    dispatch({ type: 'OFFER_CHANGE_STATUS_FETCH', payload: { id, status: 'denied' } });
  };
  // const acceptedHanterHandler = () => {
  //   dispatch({ type: 'OFFER_CHANGE_REPLY_FETCH', payload: { id, hunter_reply: 'accepted' } });
  // };

  // const deniedHanterHandler = () => {
  //   dispatch({ type: 'OFFER_CHANGE_REPLY_FETCH', payload: { id, hunter_reply: 'denied' } });
  // };
  if (user?.role === 'hunter') {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {offer?.status === 'pending'
            ? (
              <Alert
                color="dark"
                style={{
                  width: '50rem', height: '4.5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '22px' }}>
                  Статус заявки:
                  <small style={{ fontSize: '24px' }}>
                    Ожидает Вашего ответа
                  </small>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                  <Button style={{ marginRight: '2px' }} onClick={acceptedOwnerHandler} color="success">
                    Продолжить общение
                  </Button>
                  <Button onClick={deniedOwnerHandler} color="danger">
                    Отклонить
                  </Button>
                </div>
              </Alert>
            )
            : (offer?.status === 'denied') ? (
              <div style={{ fontSize: '22px' }}>
                Заявка отклонена.
              </div>
            ) : (
              <Link to={`/chat/${offer?.id}`}>
                <button type="button" className="button is-info">Открыть чат</button>
              </Link>
            )}
        </div>
      </div>
    );
  }
}
