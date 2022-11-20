import { CardMedia } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card, CardBody, CardHeader, CardTitle,
} from 'reactstrap';
// import CauruselForCards from '../../SearchPage/HunterSearchPage/CauruselForCards';

export default function OfferInfo({ offer }) {
  const user = useSelector((s) => s.user);
  // const modal = useSelector((s) => s.modal);
  // console.log({ modal });
  // const card = offer?.User?.Animals[0];
  console.log(offer);
  const people = offer?.Animal?.User;
  const hunter = offer?.User;
  console.log(hunter);

  // console.log(modal);
  // console.log(people);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card
        className="my-2"
        color="dark"
        outline
        style={{
          width: '22rem', fontSize: '22px', height: '700px',
        }}
      >
        <CardMedia
          component="img"
          alt="Card"
          src={`/images/${user?.avatar}`}
          style={{ maxWidth: '22rem', height: '300px' }}
        />
        <CardHeader>
          {`${user?.firstName} ${user?.lastName}`}
          <br />
        </CardHeader>
        <CardHeader>
          Пол:
          {' '}
          {user?.gender}
        </CardHeader>
        <CardHeader>
          {user?.email}
        </CardHeader>
        <CardHeader>
          Город:
          {user?.location}
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            <small className="text-muted">
              {user?.info}
            </small>
          </CardTitle>
        </CardBody>
      </Card>
      <div style={{
        textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
      }}
      >
        <img
          alt="card"
          src="https://cdn-icons-png.flaticon.com/512/35/35456.png"
          style={{ maxWidth: '600px', maxHeight: '300px' }}
        />
        {/* <Card
          className="my-2"
          style={{
            width: '25rem', fontSize: '20px',
          }}
        >
          <CauruselForCards
            card={card}
            style={{
              height: 180,
            }}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              {card?.name}
            </CardTitle>
            <CardText>
              {card?.breed}
              <br />
              {card?.age}
            </CardText>
            <CardText>
              <small className="text-muted">
                {card?.about}
              </small>
            </CardText>
          </CardBody>
        </Card> */}
      </div>
      {(user?.role === 'hunter') ? (
        <Card
          className="my-2"
          color="dark"
          outline
          style={{
            width: '22rem', fontSize: '22px',
          }}
        >
          <img
            alt="Card"
            src={`/images/${hunter?.avatar}`}
            style={{ maxWidth: '22rem', height: '300px' }}
          />
          <CardHeader>
            {`${hunter?.firstName} ${hunter?.lastName}`}
          </CardHeader>
          <CardHeader>
            Пол:
            {' '}
            {hunter?.gender}
          </CardHeader>
          <CardHeader>
            {hunter?.email}
          </CardHeader>
          <CardHeader>
            Город:
            {hunter?.location}
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">
              <small className="text-muted">

                {hunter?.info}
              </small>
            </CardTitle>
          </CardBody>
        </Card>
      )
        : (
          <Card
            className="my-2"
            color="dark"
            outline
            style={{
              width: '22rem', fontSize: '20px', height: '700px',
            }}
          >
            <img
              alt="Card"
              src={`/images/${people?.avatar}`}
              style={{ maxWidth: '22rem' }}
            />
            <CardHeader>
              {`${people?.firstName} ${people?.lastName}`}
            </CardHeader>
            <CardHeader>
              Пол:
              {' '}
              {people?.gender}
            </CardHeader>
            <CardHeader>
              {people?.email}
            </CardHeader>
            <CardHeader>
              Город:
              {people?.location}
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                <small className="text-muted">
                  {people?.info}
                </small>
              </CardTitle>
            </CardBody>
          </Card>
        ) }
    </div>

  );
}
