/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';

export default function RequestStatus({ request }) {
  const user = useSelector((s) => s.user);
  // const modal = useSelector((s) => s.modal);
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [request, setRequest] = useState({});

  // useEffect(() => {
  //   axios(`/requests/one/${id}`)
  //     .then((res) => setRequest(res.data));
  // }, []);

  // console.log(modal);
  const acceptedOwnerHandler = () => {
    dispatch({ type: 'CHANGE_STATUS_FETCH', payload: { id, status: 'accepted' } });
  };

  const deniedOwnerHandler = () => {
    dispatch({ type: 'CHANGE_STATUS_FETCH', payload: { id, status: 'denied' } });
  };
  const acceptedHanterHandler = () => {
    dispatch({ type: 'CHANGE_REPLY_FETCH', payload: { id, hunter_reply: 'accepted' } });
  };

  const deniedHanterHandler = () => {
    dispatch({ type: 'CHANGE_REPLY_FETCH', payload: { id, hunter_reply: 'denied' } });
  };

  if (user?.role === 'owner') {
    return (
      <div>
        {request?.hunter_reply !== 'accepted' && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {request?.status === 'pending'
            ? (
              <Alert
                color="dark"
                style={{
                  width: '50rem', height: '4.5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', marginRight: '10px' }}> Статус заявки: </div>
                  {' '}
                  <small style={{ fontSize: '22px' }}>
                    Ожидает Вашего ответа
                  </small>
                </div>
                <div style={{ justifyContent: 'flex-end' }}>
                  <Button style={{ marginRight: '2px' }} onClick={acceptedOwnerHandler} color="success">
                    Принять
                  </Button>
                  <Button onClick={deniedOwnerHandler} color="danger">
                    Отклонить
                  </Button>
                </div>
              </Alert>
            )
            : (request?.hunter_reply !== 'accepted' || request?.hunter_reply !== 'denied') ? (
              <Alert
                color="dark"
                style={{
                  width: '50rem', height: '4rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '23px', alignItems: 'center' }}>
                  В ожидании ответа
                  {' '}
                  {`${request?.User?.firstName} ${request?.User?.lastName}`}
                </div>
              </Alert>
            ) : request?.hunter_reply === 'denied' ? (
              <div style={{ fontSize: '23px', alignItems: 'center' }}>
                Заявка отклонена.
              </div>
            ) : '' }
        </div>
        )}
      </div>
    );
  }
  return (
    <div>
      {request?.hunter_reply !== 'accepted' && (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Alert
          color="dark"
          style={{
            width: '50rem', height: '4.5rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
          }}
        >
          {request?.status === 'pending'
            ? (
              <div style={{ fontSize: '22px' }}>
                Статус заявки:
                {' '}
                <small style={{ fontSize: '24px' }}>
                  Ожидайте ответа владельца
                </small>
              </div>
            ) : (request?.status === 'accepted')
              ? (
                <div style={{ justifyContent: 'flex-end' }}>
                  <Button style={{ marginRight: '2px' }} color="success" onClick={acceptedHanterHandler}>
                    Продолжить
                  </Button>
                  <Button style={{ marginRight: '2px' }} color="danger" onClick={deniedHanterHandler}>
                    Отклонить
                  </Button>
                </div>
              )
              : (
                <div style={{ fontSize: '23px', alignItems: 'center' }}>
                  Вы отказались от данной заявки.
                </div>
              )}
        </Alert>
      </div>
      )}
    </div>
  );
}
