import React, { useEffect } from 'react';
// import { CardHeader } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import OfferStatus from './OfferStatus';
import OfferInfo from './OfferInfo';
// import Chat from '../../RequestsPage/OneRequestPage/Chat';

export default function OneOfferPage() {
  const { id } = useParams();
  const { offer } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_OFFER', payload: id });
  }, [offer?.status, offer?.hunter_reply]);

  return (
    <div>
      {offer?.id ? (
        <div style={{ minHeight: '100vh' }}>
          <OfferInfo offer={offer} />
          <div style={{
            height: '3px', marginBottom: '2em', marginTop: '2em', boxShadow: '5px 10px 5px black',
          }}
          />
          {/* <CardHeader style={{ paddingBottom: '3%', marginBottom: '3%', maxHeight: '1px' }} /> */}
          <OfferStatus offer={offer} />
          {/* {offer?.hunter_reply === 'accepted' && <Chat />} */}
        </div>
      ) : (
        <div> Not Found</div>
      )}
    </div>
  );
}
