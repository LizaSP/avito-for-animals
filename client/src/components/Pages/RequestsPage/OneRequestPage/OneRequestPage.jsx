import React, { useEffect } from 'react';
// import { CardHeader } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fab } from '@mui/material';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import RequestInfo from './RequestInfo';
import RequestStatus from './RequestStatus';
import Chat from './Chat';

export default function OneRequestPage() {
  const { id } = useParams();
  const { request } = useSelector((s) => s);
  const { user } = useSelector((s) => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'GET_REQUEST', payload: id });
  }, [request?.status, request?.hunter_reply]);

  const deleteAnimalHandler = async () => {
    dispatch({ type: 'DELETE_OWNER_ANIMAL_BY_ID', payload: { animal_id: request?.animal_id } });
    navigate('/');
  };

  return (
    <div>
      {user?.role === 'owner' && (
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        >
          <Fab onClick={deleteAnimalHandler} size="small" sx={{ color: 'green' }}><FileDownloadDoneIcon fontSize="large" /></Fab>
        </div>
      )}
      {request?.id ? (
        <div style={{ minHeight: '100vh' }}>
          <RequestInfo request={request} />
          <div style={{
            height: '3px', marginBottom: '2em', marginTop: '2em', boxShadow: '5px 10px 5px black',
          }}
          />
          {/* <CardHeader style={{ paddingBottom: '3%', marginBottom: '3%', maxHeight: '1px' }} /> */}
          <RequestStatus request={request} />
          {request?.hunter_reply === 'accepted' && <Chat request={request} />}
        </div>
      ) : (
        <div> Not Found</div>
      )}
    </div>
  );
}
