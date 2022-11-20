import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneSendedOfferCard from './OneSendedOfferCard';

export default function SendedOffersPage() {
  // const requests = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);
  const humanRequests = useSelector((s) => s.humanRequests);
  // const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    dispatch({ type: 'FETCH_REQUESTS_FOR_HUMANS', payload: user?.id });
  }, []);
  return (
    <div>
      <div style={{
        fontSize: '40px', fontWeight: 'bolder', mb: '2em', ml: '5em',
      }}
      >
        Отправленные заявки
      </div>
      {humanRequests?.length > 0 ? (
        <div className="container" style={{ marginBottom: '4%', marginTop: '4%' }}>
          <div className="row gy-5 ">
            {humanRequests?.map((el) => <OneSendedOfferCard key={el.id} card={el} />)}
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative', minHeight: 'calc(100vh - 70px)' }}>
          <h2
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px',
            }}
          >
            У Вас нет отправленных заявок.
          </h2>
        </div>
      )}
    </div>
  );
}
