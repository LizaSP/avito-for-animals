import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
// import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { Alert, Card } from 'reactstrap';
import { CardMedia, Fab } from '@mui/material';

export default function ProfilePage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios(`/usery/profile/${id}`)
      .then((resp) => {
        setData(resp.data);
      });
  }, []);
  console.log(data);
  const web = data?.websites;
  console.log(web);
  return (
    <div style={{ paddingLeft: '3%', justifyContent: 'center', display: 'flex' }}>
      <Card style={{
        maxWidth: '70%', borderRadius: '2%',
      }}
      >
        {/* <div style={{
          maxWidth: '100%', borderRadius: '2%', display: 'flex', justifyContent: 'end',
        }}
        >
          <Fab color="primary" aria-label="add" component={Link} to="/babysitter">
            <ChildFriendlyIcon />

          </Fab>
          <Fab color="primary" component={Link} to="/profile/edit"><EditIcon /></Fab>
        </div> */}
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <CardMedia
            component="img"
            src={`/images/${data?.avatar}`}
            alt="ppp"
            style={{
              marginLeft: '3%', width: '300px', borderRadius: '50%', justifyContent: 'center', display: 'flex', marginTop: '1rem', height: '300px',
            }}
          />
          <div style={{ margin: '1.2em 1.2em 1.2em 1.2em' }}>
            <Alert color="dark" style={{ marginBottom: '1px' }}>
              Имя пользователя:
              {' '}
              {data.firstName}
              {' '}
              {data.lastName}
            </Alert>
            <Alert color="dark" style={{ marginBottom: '1px' }}>
              Город:
              {' '}
              {data.location}
            </Alert>
            <Alert color="dark" style={{ marginBottom: '1px' }}>
              Email:
              {' '}
              {data.email}
            </Alert>
            <Alert color="dark" style={{ marginBottom: '1px' }}>
              О себе:
              {' '}
              {data.info}
            </Alert>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <IconButton color="primary" aria-label="upload picture" component="label">
                <a target="_blank" href={web} rel="noreferrer">
                  <TelegramIcon />
                </a>
              </IconButton>
            </div>
            {/* <IconButton color="primary" aria-label="upload picture" component="label">
              <InstagramIcon />
            </IconButton> */}
          </div>
          <div style={{
            maxWidth: '100%',
            borderRadius: '2%',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            marginRight: '1%',
          }}
          >
            <Fab color="primary" aria-label="add" component={Link} to="/babysitter">
              <ChildFriendlyIcon />

            </Fab>
            <Fab color="primary" component={Link} to="/profile/edit"><EditIcon /></Fab>
          </div>
        </div>
      </Card>
    </div>
  );
}
